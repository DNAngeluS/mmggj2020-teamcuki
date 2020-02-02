// import * as Phaser from 'phaser';
import { gridToCanvas } from '../index';
import GridManager from '../pieces/GridManager';

export enum Direction {
	TOP,
	RIGHT,
	BOTTOM,
	LEFT
}

export const RotationDeg = (rotation: Direction): number => [0, 90, 180, 270][rotation];

export enum PieceState {
	FREE,
	SET,
	ACTIVE
}

export enum Animations {
	IDLE = 'IDLE',
	FILLING = 'FILLING',
	DONE = 'DONE'
}

export const SPRITE_FRAMES = 12;

export abstract class AbstractPiece {
	abstract activeBorders: { in: Direction; out: Direction } | null = null;
	abstract assetURL: string;

	private spriteKey: string;
	public state: PieceState = PieceState.FREE;
	private rotation: Direction = Direction.TOP;
	private position: { gridX: number; gridY: number };
	private sprite: Phaser.GameObjects.Sprite;

	constructor({ gridX, gridY, rotation, id }: any) {
		this.spriteKey = id;
		this.position = { gridX, gridY };
		this.rotation = rotation;
	}

	// public load = (scene: Phaser.Scene) => {
	// scene.load.spritesheet(this.spriteKey, this.assetURL, {
	// 	frameWidth: GRID_SIZE,
	// 	frameHeight: GRID_SIZE
	// });
	// };

	public initialize = (scene: Phaser.Scene) => {
		const { x, y } = gridToCanvas(this.position);
		this.sprite = scene.add.sprite(x, y, this.spriteKey);
		this.sprite.angle = RotationDeg(this.rotation);

		// anims
		scene.anims.create({
			key: `${this.spriteKey}-${Animations.IDLE}`,
			frames: [{ key: this.assetURL.toString(), frame: 0 }]
		});

		scene.anims.create({
			key: `${this.spriteKey}-${Animations.DONE}`,
			frames: [{ key: this.assetURL.toString(), frame: SPRITE_FRAMES + 1 }]
		});
		const fillingAni = scene.anims.create({
			key: `${this.spriteKey}-${Animations.FILLING}`,
			frames: scene.anims.generateFrameNumbers(this.assetURL.toString(), {
				start: 1,
				end: SPRITE_FRAMES
			}),
			frameRate: 50,
			repeat: 0
		});

		fillingAni && fillingAni.on('complete', this.setDone);

		this.sprite.anims.play(`${this.spriteKey}-${Animations.IDLE}`);
	};

	public rotate() {
		this.rotation + 1;
		this.sprite && (this.sprite.angle = RotationDeg(this.rotation));
	}

	public moveTo({ gridX, gridY }: { gridX: number; gridY: number }) {
		const { x, y } = gridToCanvas({ gridX, gridY });
		this.sprite.x = x;
		this.sprite.y = y;
	}

	public setDone = () => {
		this.sprite && this.sprite.anims.play(`${this.spriteKey}-${Animations.DONE}`);
		const nextPiece = GridManager.getPieceOn({
			gridX: this.position.gridX,
			gridY: this.position.gridY,
			direction: this.getActiveBorders()!.out
		});
		console.log('nextPiece', nextPiece);
	};

	public place() {
		this.state = PieceState.SET;
	}

	public setActive() {
		this.state = PieceState.ACTIVE;
		this.sprite && this.sprite.anims.play(`${this.spriteKey}-${Animations.FILLING}`);
	}

	public getSprite = () => this.sprite;

	public getActiveBorders = (): { in: Direction; out: Direction } | null =>
		this.activeBorders
			? {
					in: this.activeBorders.in + this.rotation,
					out: this.activeBorders.out + this.rotation
			  }
			: null;
}
