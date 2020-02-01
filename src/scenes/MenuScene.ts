import * as Phaser from 'phaser';
import { WorldScene } from './WorldScene';
import { Background } from '../game-objects/';

export class MenuScene extends Phaser.Scene {
	private background: Background = new Background();

	constructor() {
		super(sceneConfig);
	}

	preload() {
		this.background.load(this);
	}

	create() {
		this.background.initialize(this);

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
