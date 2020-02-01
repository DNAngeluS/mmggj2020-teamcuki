import * as Phaser from 'phaser';
import { WorldScene } from './WorldScene';

export class MenuScene extends Phaser.Scene {
	constructor() {
		super(sceneConfig);
	}

	preload() {
		this.load.image('background', 'assets/cartridge.jpg');
	}

	create() {
		this.add.image(800, 720, 'background');

		this.input.once('pointerdown', () => this.scene.start(WorldScene.name));
	}

	update() {
		// TODO
	}
}

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
	active: false,
	visible: false,
	key: MenuScene.name
};
