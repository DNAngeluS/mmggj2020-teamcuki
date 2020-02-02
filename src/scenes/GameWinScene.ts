import * as Phaser from 'phaser';
// import { WorldScene } from './WorldScene';
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

	update() {}
}

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
	active: false,
	visible: false,
	key: GameWinScene.name
};
