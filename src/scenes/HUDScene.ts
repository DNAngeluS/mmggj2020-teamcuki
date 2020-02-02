import * as Phaser from 'phaser';
import { HUDBackground, Score } from 'game-objects';

export enum HUDSceneEvents {
	updateScoreText = 'updateScoreText'
}

export class HUDScene extends Phaser.Scene {
	// private scoreText: Phaser.GameObjects.Text;
	private background: HUDBackground = new HUDBackground();
	private score: Score = new Score();

	constructor() {
		super(sceneConfig);
	}

	preload() {
		this.background.load(this);
		this.score.load(this);
	}

	create() {
		this.background.initialize(this);
		this.score.initialize(this);
		// this.scoreText = this.add.text(794, 78, '0', {
		// 	font: '24px Raleway',
		// 	fill: '#ffffff'
		// });

		this.events.on(HUDSceneEvents.updateScoreText, this.updateScoreText);
	}

	update() {
		// TODO
	}

	public updateScoreText = (newValue: number) => {
		// this.scoreText.setText(`${newValue}`);s
		this.score.addToScore(newValue);
	};
}

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
	active: false,
	visible: false,
	key: HUDScene.name
};
