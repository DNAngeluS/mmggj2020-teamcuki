import * as Phaser from 'phaser';
import { WorldScene } from './WorldScene';
import { CinematicVideo } from 'game-objects';

export class CinematicScene extends Phaser.Scene {
	private cinematic: CinematicVideo = new CinematicVideo();

	constructor() {
		super(sceneConfig);
	}

	preload() {
		this.cinematic.load(this);
		this.cinematic.setFinishCallback(this.loadWorld.bind(this));
	}

	create() {
		this.cinematic.initialize(this);
	}

	update() {
		const ENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

		if (Phaser.Input.Keyboard.JustDown(ENTER)) {
			this.loadWorld();
		}
	}

	private loadWorld = () => {
		this.scene.start(WorldScene.name);
	};
}

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
	active: false,
	visible: false,
	key: CinematicScene.name
};
