import * as Phaser from 'phaser';
import { boardAssets } from '../assets/board';
import { GameObject } from './GameObject';
import { gridToCanvas } from './index';
// import { game } from '../main';

export class BoardColiders extends GameObject {
	public static voidSpriteKey = boardAssets.VOID.toString();
	public group: Phaser.Physics.Arcade.StaticGroup;

	public load = (scene: Phaser.Scene) => {
		scene.load.image(BoardColiders.voidSpriteKey, boardAssets.VOID);
	};

	public initialize = (scene: Phaser.Scene) => {
		this.group = scene.physics.add.staticGroup();
	};

	public createVoid = ({ gridX, gridY }: { gridX: number; gridY: number }) => {
		const { x, y } = gridToCanvas({ gridX, gridY });
		// const voidGrid: Phaser.Physics.Arcade.Image =
		this.group.create(x, y, BoardColiders.voidSpriteKey);
	};
}
