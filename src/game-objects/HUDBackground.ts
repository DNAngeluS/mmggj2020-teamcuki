import * as Phaser from 'phaser';
import { uiAssets } from 'assets/ui';
import { GameObject } from './GameObject';
import { game } from 'main';

export class HUDBackground extends GameObject {
	public static key = uiAssets.SCREEN_OVERLAY.toString();

	public load = (scene: Phaser.Scene) => {
		scene.load.image(HUDBackground.key, uiAssets.SCREEN_OVERLAY);
	};

	public initialize = (scene: Phaser.Scene) => {
		scene.add.image(game.scale.width / 2, game.scale.height / 2, HUDBackground.key).setDepth(20);
	};
}
