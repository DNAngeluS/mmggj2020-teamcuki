import * as Phaser from 'phaser';
import { videoAssets } from 'assets/videos';
import { MediaObject } from './MediaObject';
import { game } from 'main';

export class MenuVideoLoop extends MediaObject {
	public static key = videoAssets.MENU_LOOP.toString();

	private video: Phaser.GameObjects.Video;
	private finishCallback: Function;
	private isLooping: boolean = true;

	public load = (scene: Phaser.Scene) => {
		scene.load.video(MenuVideoLoop.key, [videoAssets.MENU_LOOP], 'loadeddata', false, false);
	};

	public initialize = (scene: Phaser.Scene) => {
		this.video = <Phaser.GameObjects.Video>(
			scene.add.video(game.canvas.width / 2, game.canvas.height / 2, MenuVideoLoop.key)
		);
		this.video.play(this.isLooping);
		this.video.on('complete', this.onFinish.bind(this));
	};

	public destroy() {
		this.video.destroy();
	}

	public setIsLooping(loop: boolean) {
		if (loop != this.isLooping) {
			this.video.setLoop(loop);
		}
		this.isLooping = loop;
	}

	public setFinishCallback = (callback: Function) => {
		this.finishCallback = callback;
	};

	private onFinish() {
		if (this.finishCallback) {
			this.finishCallback();
		}
	}
}
