import * as Phaser from 'phaser';
import { soundAssets } from 'assets/sounds';
import { MediaObjectWithControls } from 'game-objects';

export class Music extends MediaObjectWithControls {
	public static key = soundAssets.BACKGROUND_LOOP.toString();

	private audio: Phaser.Sound.BaseSound;

	public load = (scene: Phaser.Scene) => {
		scene.load.audio(Music.key, [soundAssets.BACKGROUND_LOOP]);
	};

	public initialize = (scene: Phaser.Scene) => {
		this.audio = scene.sound.add(Music.key, { loop: true });
	};

	public play = () => {
		if (!this.audio.isPlaying) {
			this.audio.play();
		}
		if (this.audio.isPaused) {
			this.audio.resume();
		}
	};

	public stop = () => {
		this.audio.stop();
	};

	public pause = () => {
		this.audio.pause();
	};
}
