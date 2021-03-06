import * as Phaser from 'phaser';
import { uiAssets } from 'assets/ui';
import { GameObject } from './GameObject';
import { game } from 'main';

export class GameOverOverlay extends GameObject {
	public static key = uiAssets.ENDSCREEN_OVERLAY.toString();
	private static loopKey = 'MENU_LOOP';

	public sprite: Phaser.Physics.Arcade.Sprite;

	private finishCallback: Function;

	public load = (scene: Phaser.Scene) => {
		scene.load.spritesheet(GameOverOverlay.key, uiAssets.ENDSCREEN_OVERLAY, {
			frameWidth: 1920,
			frameHeight: 1080
		});
	};

	public initialize = (scene: Phaser.Scene) => {
		this.sprite = scene.physics.add.sprite(game.scale.width / 2, game.scale.height / 2, GameOverOverlay.key);
		this.sprite.on('animationcomplete', this.onFinish.bind(this));
		this.sprite.setDepth(30);

		scene.anims.create({
			key: GameOverOverlay.loopKey,
			frames: scene.anims.generateFrameNumbers(GameOverOverlay.key, { start: 0, end: 20 }),
			frameRate: 20,
			repeat: 1
		});
	};

	public start = () => {
		this.sprite.anims.play(GameOverOverlay.loopKey);
	};

	public setFinishCallback = (callback: Function) => {
		this.finishCallback = callback;
	};

	private onFinish = () => {
		if (this.finishCallback) {
			this.finishCallback();
		}
	};

	// private startTransition = () => {
	// 	this.finishCallback();
	// };
}
