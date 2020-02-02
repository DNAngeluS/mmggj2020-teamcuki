import * as Phaser from 'phaser';
import { soundAssets } from 'assets/sounds';
import { MediaObjectWithControls } from 'game-objects';

export class Music extends MediaObjectWithControls {
	public static levelOneKey = soundAssets.LEVEL_ONE_LOOP.toString();
	public static levelTwoKey = soundAssets.LEVEL_TWO_LOOP.toString();
	public static levelThreeKey = soundAssets.LEVEL_THREE_LOOP.toString();
	public static levelFourKey = soundAssets.LEVEL_FOUR_LOOP.toString();

	private audioOne: Phaser.Sound.BaseSound;
	private audioTwo: Phaser.Sound.BaseSound;
	private audioThree: Phaser.Sound.BaseSound;
	private audioFour: Phaser.Sound.BaseSound;

	private loopCounter: number = 0;

	public load = (scene: Phaser.Scene) => {
		scene.load.audio(Music.levelOneKey, [soundAssets.LEVEL_ONE_LOOP]);
		scene.load.audio(Music.levelTwoKey, [soundAssets.LEVEL_TWO_LOOP]);
		scene.load.audio(Music.levelThreeKey, [soundAssets.LEVEL_THREE_LOOP]);
		scene.load.audio(Music.levelFourKey, [soundAssets.LEVEL_FOUR_LOOP]);
	};

	public initialize = (scene: Phaser.Scene) => {
		this.audioOne = scene.sound.add(Music.levelOneKey, { loop: true });
		this.audioTwo = scene.sound.add(Music.levelTwoKey, { loop: true });
		this.audioThree = scene.sound.add(Music.levelThreeKey, { loop: true });
		this.audioFour = scene.sound.add(Music.levelFourKey, { loop: true });

		this.audioOne.on('looped', this.handleLoop);
		this.audioTwo.on('looped', this.handleLoop);
		this.audioThree.on('looped', this.handleLoop);
		this.audioFour.on('looped', this.handleLoop);
	};

	public handleLoop = () => {
		this.loopCounter += 1;

		if (this.loopCounter === 2) {
			this.audioOne.stop();
			this.audioTwo.play();
		}

		if (this.loopCounter === 4) {
			this.audioTwo.stop();
			this.audioThree.play();
		}

		if (this.loopCounter === 6) {
			this.audioThree.stop();
			this.audioFour.play();
		}
	};

	public play = () => {
		if (!this.audioOne.isPlaying) {
			this.audioOne.play();
		}
		if (this.audioOne.isPaused) {
			this.audioOne.resume();
		}
	};

	public stop = () => {
		this.audioOne.stop();
		this.audioTwo.stop();
		this.audioThree.stop();
		this.audioFour.stop();
	};

	public pause = () => {
		this.audioOne.pause();
		this.audioTwo.pause();
		this.audioThree.pause();
		this.audioFour.pause();
	};
}
