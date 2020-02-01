import * as Phaser from 'phaser';
import { WorldScene } from './WorldScene';

export class MenuScene extends Phaser.Scene {
	constructor() {
		super(sceneConfig);
	}

	public preload() {}

	public create() {
		this.add.rectangle(
			Phaser.Math.Between(0, window.innerWidth),
			Phaser.Math.Between(0, innerHeight),
			100,
			100,
			0x1212de
		);

		this.input.once('pointerdown', () => this.scene.start(WorldScene.name));
	}

	public update() {
		// TODO
	}
}

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
	active: false,
	visible: false,
	key: MenuScene.name
};
