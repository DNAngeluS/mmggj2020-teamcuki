import * as Phaser from 'phaser';
import { videoAssets } from 'assets/videos';
import { MediaObject } from './MediaObject';
import { game } from 'main';

export class GameWinVideo extends MediaObject {
	public static key = videoAssets.WINSCREEN_CINEMATIC.toString();

	private video: Phaser.GameObjects.Video;
	private finishCallback: Function;

	public load = (scene: Phaser.Scene) => {
		scene.load.video(GameWinVideo.key, [videoAssets.WINSCREEN_CINEMATIC], 'loadeddata', false, false);
	};

	public initialize = (scene: Phaser.Scene) => {
		this.video = <Phaser.GameObjects.Video>(
			scene.add.video(game.canvas.width / 2, game.canvas.height / 2, GameWinVideo.key)
		);
		this.video.play();
		this.video.on('complete', this.onFinish.bind(this));
	};

	public play = () => {
		this.video.play();
	};

	public setFinishCallback = (callback: Function) => {
		this.finishCallback = callback;
	};

	private onFinish() {
		if (this.finishCallback) {
			this.finishCallback();
		}
	}
}
