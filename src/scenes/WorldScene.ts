import * as Phaser from 'phaser';
import { HUDScene, HUDSceneEvents } from './HUDScene';

export class WorldScene extends Phaser.Scene {
	private score: number = 0;

	private hud: Phaser.Scene;

	constructor() {
		super(sceneConfig);
	}
	preload() { }

	create() {
		this.hud = this.scene.get(HUDScene.name);
		this.scene.launch(HUDScene.name);

		this.add.rectangle(800, 600, 40, 40, 0xffffff);
		this.input.on('pointerdown', this.addScore);
	}

	update() {
		// TODO
	}

	private addScore = () => {
		this.score += 1;
		this.hud.events.emit(HUDSceneEvents.updateScoreText, this.score);
	};
}

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
	active: false,
	visible: false,
	key: WorldScene.name
};
