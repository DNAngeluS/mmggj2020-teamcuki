// import * as Phaser from 'phaser';
import { gridToCanvas } from '../index';
import GridManager from '../pieces/GridManager';

export enum Direction {
	TOP,
	RIGHT,
	BOTTOM,
	LEFT
}

export const RotationDeg = (rotation: Direction): number => {
	const angles = [0, 90, 180, 270];
	return angles[rotation % 4];
};

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
export const FRAME_RATE = 5;

export abstract class AbstractPiece {
	abstract activeBorders: { in: Direction; out: Direction } | null = null;
	abstract assetURL: string;

	private spriteKey: string;
	public state: PieceState = PieceState.FREE;
	private rotation: Direction = Direction.TOP;
	private position: { gridX: number; gridY: number };
	private sprite: Phaser.GameObjects.Sprite;
	private getPieceById: any;
	private type: any;
	private createNewPiece: any;

	constructor({ gridX, gridY, rotation, id, getPieceById, type, createNewPiece }: any) {
		this.spriteKey = id;
		this.position = { gridX, gridY };
		this.rotation = rotation;
		this.getPieceById = getPieceById;
		this.type = type;
		this.createNewPiece = createNewPiece;
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
		this.sprite.setDepth(11);

		// anims
		scene.anims.create({
			key: `${this.spriteKey}-${Animations.IDLE}`,
			frames: [{ key: this.assetURL.toString(), frame: 0 }]
		});

		scene.anims.create({
			key: `${this.spriteKey}-${Animations.DONE}`,
			frames: scene.anims.generateFrameNumbers(this.assetURL.toString(), {
				start: 11,
				end: 23
			}),
			frameRate: FRAME_RATE * 2,
			repeat: -1
		});

		const fillingAni = scene.anims.create({
			key: `${this.spriteKey}-${Animations.FILLING}`,
			frames: scene.anims.generateFrameNumbers(this.assetURL.toString(), {
				start: 1,
				end: 11
			}),
			frameRate: FRAME_RATE,
			repeat: 0
		});

		fillingAni && fillingAni!.on('complete', this.setDone);

		this.sprite.anims.play(`${this.spriteKey}-${Animations.IDLE}`);
	};

	public rotate() {
		this.rotation = this.rotation + 1;
		this.sprite!.angle = RotationDeg(this.rotation);
	}

	public moveTo({ gridX, gridY }: { gridX: number; gridY: number }) {
		const { x, y } = gridToCanvas({ gridX, gridY });
		this.sprite.x = x;
		this.sprite.y = y;
	}

	public setDone = () => {
		this.sprite && this.sprite.anims.play(`${this.spriteKey}-${Animations.DONE}`);
		const nextPiece = GridManager.pieces.getPieceOn({
			gridX: this.position.gridX,
			gridY: this.position.gridY,
			direction: this.getActiveBorders()!.out
		});

		if (!nextPiece) {
			this.handleGameOver();
		} else {
			this.getPieceById(nextPiece).handleGoNext(this);
		}
	};

	public handleGoNext(oldPiece: AbstractPiece) {
		const oldBorders = oldPiece.getActiveBorders();
		const newBoders = this.getActiveBorders();
		const outDirection = (oldBorders!.out + 2) % 4;

		if (![newBoders!.out, newBoders!.in].includes(outDirection)) {
			this.handleGameOver();
			return;
		}
		if (newBoders!.in !== outDirection) {
			this.rotateForFlow();
			return;
		}

		this.setActive();
	}

	public rotateForFlow() {
		if (this.type === 'line') {
			this.rotate();
			this.rotate();
		}

		if (this.type === 'curve') {
			this.sprite.scaleY = -1;
			this.rotate();
		}

		this.setActive();
	}

	public handleGameOver() {
		console.log('GAME OOOOOOO V    E      R          ! ! ! ! ! ! ! ! ! !');
	}

	public place(position: any) {
		this.position = position;
		this.state = PieceState.SET;
		this.sprite.setDepth(9);
		GridManager.pieces.addToGrid({
			id: this.spriteKey,
			gridX: position.gridX,
			gridY: position.gridY
		});
		this.createNewPiece();
	}

	public setActive() {
		this.state = PieceState.ACTIVE;
		this.sprite && this.sprite.anims.play(`${this.spriteKey}-${Animations.FILLING}`);
	}

	public getSprite = () => this.sprite;

	public getActiveBorders = (): { in: Direction; out: Direction } | null =>
		this.activeBorders
			? {
					in: (this.activeBorders.in + this.rotation) % 4,
					out: (this.activeBorders.out + this.rotation) % 4
			  }
			: null;
}
