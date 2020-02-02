import * as Phaser from 'phaser';
import { soundAssets } from 'assets/sounds';
import { MediaObject } from 'game-objects';
// import { game } from 'main';

export class Fx extends MediaObject {
	public static pickupKey = soundAssets.FX_PICKUP.toString();
	public static moveKey = soundAssets.FX_MOVE.toString();
	public static fanfareKey = soundAssets.FX_FANFARE.toString();
	// public state: string;

	private pickup: Phaser.Sound.BaseSound;
	private move: Phaser.Sound.BaseSound;
	private fanfare: Phaser.Sound.BaseSound;

	public load = (scene: Phaser.Scene) => {
		scene.load.audio(Fx.pickupKey, [soundAssets.FX_PICKUP]);
		scene.load.audio(Fx.moveKey, [soundAssets.FX_MOVE]);
		scene.load.audio(Fx.fanfareKey, [soundAssets.FX_FANFARE]);
	};

	public initialize = (scene: Phaser.Scene) => {
		this.pickup = scene.sound.add(Fx.pickupKey);
		this.move = scene.sound.add(Fx.moveKey);
		this.fanfare = scene.sound.add(Fx.fanfareKey);
	};

	public playMove = () => this.move.play();

	public playFanfare = () => this.fanfare.play();

	public playPickuo = () => this.pickup.play();
}
