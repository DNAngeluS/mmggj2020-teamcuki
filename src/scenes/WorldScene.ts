import * as Phaser from 'phaser';
import { HUDScene, HUDSceneEvents } from './HUDScene';
import { Background, BoardColiders, Player } from 'game-objects';

export class WorldScene extends Phaser.Scene {
	private hud: Phaser.Scene;
	private score: number = 0;

	private background: Background = new Background();
	private player: Player = new Player();
	private worldGroup: Phaser.Physics.Arcade.StaticGroup;
	private boardColiders: BoardColiders = new BoardColiders();

	constructor() {
		super(sceneConfig);
	}
	preload() {
		this.background.load(this);
		this.player.load(this);
	}

	create() {
		this.hud = this.scene.get(HUDScene.name);
		this.scene.launch(HUDScene.name);

		this.background.initialize(this);
		this.boardColiders.initialize(this);
		this.player.initialize(this);

		this.worldGroup = this.physics.add.staticGroup();

		this.buildBoard();

		this.physics.add.collider(this.player.sprite, this.worldGroup);
		this.physics.add.collider(this.boardColiders.group, this.worldGroup);

		this.physics.add.collider(this.player.sprite, this.boardColiders.group);

		// this.add.rectangle(800, 600, 40, 40, 0x00ffff);
		this.input.on('pointerdown', this.addScore);
	}

	update() {
		this.player.update();
	}

	private addScore = () => {
		this.score += 1;
		this.hud.events.emit(HUDSceneEvents.updateScoreText, this.score);
	};

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
	key: WorldScene.name
};
