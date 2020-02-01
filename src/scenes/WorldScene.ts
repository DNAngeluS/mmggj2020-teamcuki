import * as Phaser from 'phaser';

export class WorldScene extends Phaser.Scene {
	constructor() {
		super(sceneConfig);
	}

	public create() {
		this.add.rectangle(400, 400, 100, 100, 0xffffff);
	}

	public update() {
		// TODO
	}
}

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
	active: false,
	visible: false,
	key: WorldScene.name
};
