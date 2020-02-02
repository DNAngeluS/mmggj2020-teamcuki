import * as Phaser from 'phaser';
import { WorldScene } from './WorldScene';
import { MenuScene } from './MenuScene';
import { GameWinVideo } from 'game-objects';

export class GameWinScene extends Phaser.Scene {
	private cinematic: GameWinVideo = new GameWinVideo();

	constructor() {
		super(sceneConfig);
	}

	preload() {
		this.cinematic.load(this);
	}

	create() {
		this.cinematic.initialize(this);
	}

	update() {
		const ENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
		const R = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);

		if (Phaser.Input.Keyboard.JustDown(ENTER)) {
			this.scene.stop(MenuScene.name);
			this.scene.start(MenuScene.name);
		}
		if (Phaser.Input.Keyboard.JustDown(R)) {
			this.scene.stop(WorldScene.name);
			this.scene.start(WorldScene.name);
		}
	}
}

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
	active: false,
	visible: false,
	key: GameWinScene.name
};
