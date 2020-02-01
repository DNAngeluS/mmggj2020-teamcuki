import * as Phaser from 'phaser';
// import { WorldScene } from './WorldScene';
import { Background } from '../game-objects/';
import { BoardColiders } from '../game-objects/';

export class MenuScene extends Phaser.Scene {
	private background: Background = new Background();
	private boardColiders: BoardColiders = new BoardColiders();

	constructor() {
		super(sceneConfig);
	}

	preload() {
		this.background.load(this);
		this.boardColiders.load(this);
	}

	create() {
		this.background.initialize(this);
		this.boardColiders.initialize(this);

		this.buildBoard();

		// this.input.once('pointerdown', () => this.scene.start(WorldScene.name));
	}

	update() {
		// TODO
	}

	//
	private buildBoard = () => {
		[
			{ gridX: 11, gridY: 2 },
			{ gridX: 12, gridY: 2 },
			{ gridX: 4, gridY: 7 },
			{ gridX: 5, gridY: 7 },
			{ gridX: 5, gridY: 8 },
			{ gridX: 5, gridY: 9 },
			{ gridX: 12, gridY: 7 },
			{ gridX: 13, gridY: 7 },
			{ gridX: 13, gridY: 11 },
			{ gridX: 14, gridY: 11 },
			{ gridX: 13, gridY: 11 },
			{ gridX: 15, gridY: 11 },
			{ gridX: 16, gridY: 11 },
			{ gridX: 17, gridY: 11 },
			{ gridX: 18, gridY: 11 },
			{ gridX: 19, gridY: 11 }
		].forEach(this.boardColiders.createVoid);
	};
}

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
	active: false,
	visible: false,
	key: MenuScene.name
};
