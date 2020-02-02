import * as Phaser from 'phaser';
import { WorldScene } from './WorldScene';
import { MenuScene } from './MenuScene';
import { GameOverVideo } from 'game-objects';

export class GameOverScene extends Phaser.Scene {
	private cinematic: GameOverVideo = new GameOverVideo();

	constructor() {
		super(sceneConfig);
	}

	preload() {
		this.cinematic.load(this);
		// this.cinematic.setFinishCallback(this.loadWorld.bind(this));
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
	key: GameOverScene.name
};
