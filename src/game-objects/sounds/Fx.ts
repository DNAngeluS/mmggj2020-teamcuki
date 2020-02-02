import * as Phaser from 'phaser';
import { soundAssets } from 'assets/sounds';
import { MediaObjectWithControls } from 'game-objects';
// import { game } from 'main';

export class Fx extends MediaObjectWithControls {
	public static key = soundAssets.FX_SWITCH.toString();
	// public state: string;

	private audio: Phaser.Sound.BaseSound;

	public load = (scene: Phaser.Scene) => {
		scene.load.audio(Fx.key, [soundAssets.FX_SWITCH]);
	};

	public initialize = (scene: Phaser.Scene) => {
		this.audio = scene.sound.add(Fx.key);
		// this.audio.once('stop', this.onStop);
		// this.state = SoundObject.STATES.STOPPED;
	};

	public play = () => {
		if (!this.audio.isPlaying) {
			this.audio.play();
		}
		if (this.audio.isPaused) {
			this.audio.resume();
		}
		// this.state = SoundObject.STATES.PLAYING;
	};

	public stop = () => {
		this.audio.stop();
		// this.state = SoundObject.STATES.STOPPED;
	};

	public pause = () => {
		this.audio.pause();
		// this.state = SoundObject.STATES.PAUSED;
	};

	// private onStop = (sound: Phaser.Sound.BaseSound) => {
	// 	this.state = SoundObject.STATES.STOPPED;
	// };
}
