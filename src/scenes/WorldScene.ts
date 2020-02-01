import * as Phaser from 'phaser';

export class WorldScene extends Phaser.Scene {
	constructor() {
		super(sceneConfig);
	}
	preload() {}

	create() {
		this.add.rectangle(800, 600, 40, 40, 0xffffff);
	}

	update() {
		// TODO
	}
}

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
	active: false,
	visible: false,
	key: WorldScene.name
};
