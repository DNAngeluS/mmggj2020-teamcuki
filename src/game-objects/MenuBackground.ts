import * as Phaser from 'phaser';
import { uiAssets } from 'assets/ui';
import { GameObject } from './GameObject';
import { game } from 'main';

export class MenuBackground extends GameObject {
	public static key = uiAssets.MENU_BACKGROUND.toString();
	private static loopKey = 'MENU_LOOP';

	public sprite: Phaser.Physics.Arcade.Sprite;

	public load = (scene: Phaser.Scene) => {
		scene.load.spritesheet(MenuBackground.key, uiAssets.MENU_BACKGROUND, {
			frameWidth: 1920,
			frameHeight: 1080
		});
	};

	public initialize = (scene: Phaser.Scene) => {
		this.sprite = scene.physics.add.sprite(game.scale.width / 2, game.scale.height / 2, MenuBackground.key);

		scene.anims.create({
			key: MenuBackground.loopKey,
			frames: scene.anims.generateFrameNumbers(MenuBackground.key, { start: 0, end: 20 }),
			frameRate: 20,
			repeat: -1
		});

		scene.anims.create;
	};
}
