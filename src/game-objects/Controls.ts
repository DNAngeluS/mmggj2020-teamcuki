import * as Phaser from 'phaser';
import { boardAssets } from '../assets/board';
import { GameObject } from './GameObject';
import { game } from '../main';

export class Background extends GameObject {
	public static bgSpriteKey = boardAssets.CREDITS.toString();

	public load = (scene: Phaser.Scene) => {
		scene.load.image(Background.bgSpriteKey, boardAssets.CREDITS);
	};

	public initialize = (scene: Phaser.Scene) => {
		scene.add.image(game.scale.width / 2, game.scale.height / 2, Background.bgSpriteKey);
	};
}
