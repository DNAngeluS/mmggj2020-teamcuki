import * as Phaser from 'phaser';
// import { WorldScene } from './WorldScene';
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

	update() {}
}

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
	active: false,
	visible: false,
	key: GameOverScene.name
};
