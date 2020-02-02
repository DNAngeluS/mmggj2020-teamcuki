import * as Phaser from 'phaser';
import { HUDScene, HUDSceneEvents } from './HUDScene';
import { Background, Player, BoardColiders, Pieces, Fx } from '../game-objects/';
import { Music } from 'game-objects/sounds/Music';

export class WorldScene extends Phaser.Scene {
	private hud: Phaser.Scene;
	private score: number = 0;

	private background: Background = new Background();
	private boardColiders: BoardColiders = new BoardColiders();
	private player: Player = new Player();
	private music: Music = new Music();
	private pieces: Pieces = new Pieces();

	private fx: Fx;
	private worldGroup: Phaser.Physics.Arcade.StaticGroup;

	constructor() {
		super(sceneConfig);

		this.fx = new Fx();
	}
	preload() {
		this.background.load(this);
		this.player.load(this);
		this.boardColiders.load(this);
		this.pieces.load(this);
		this.fx.load(this);
		this.music.load(this);
	}

	create() {
		this.hud = this.scene.get(HUDScene.name);
		this.scene.launch(HUDScene.name);

		this.background.initialize(this);
		this.boardColiders.initialize(this);
		this.player.initialize(this);
		this.pieces.initialize(this);
		this.fx.initialize(this);
		this.music.initialize(this);

		this.worldGroup = this.physics.add.staticGroup();

		this.buildBoard();

		this.physics.add.collider(this.boardColiders.group, this.worldGroup);

		this.physics.add.collider(this.player.sprite, this.boardColiders.group, this.hitSound.bind(this));
		this.physics.add.collider(this.player.sprite, this.worldGroup);

		// this.add.rectangle(800, 600, 40, 40, 0x00ffff);
		this.input.on('pointerdown', this.addScore);
		this.music.play();

		this.initGame();
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
			{ gridX: 9, gridY: 0 },
			{ gridX: 10, gridY: 0 },
			{ gridX: 10, gridY: 5 },
			{ gridX: 10, gridY: 6 },
			{ gridX: 11, gridY: 5 },
			{ gridX: 2, gridY: 5 },
			{ gridX: 3, gridY: 5 },
			{ gridX: 3, gridY: 6 },
			{ gridX: 3, gridY: 7 },
			{ gridX: 0, gridY: 0 },
			{ gridX: 0, gridY: -1 },
			{ gridX: 1, gridY: -1 },
			{ gridX: 2, gridY: -1 },
			{ gridX: 3, gridY: -1 },
			{ gridX: 4, gridY: -1 },
			{ gridX: 5, gridY: -1 },
			{ gridX: 6, gridY: -1 },
			{ gridX: 7, gridY: -1 },
			{ gridX: 8, gridY: -1 },
			{ gridX: 11, gridY: -1 },
			{ gridX: 12, gridY: -1 },
			{ gridX: 13, gridY: -1 },
			{ gridX: 14, gridY: -1 },
			{ gridX: 15, gridY: -1 },
			{ gridX: 16, gridY: -1 },
			{ gridX: 17, gridY: -1 },
			{ gridX: 18, gridY: -1 },
			{ gridX: 19, gridY: -1 },
			{ gridX: 19, gridY: 0 },
			{ gridX: 19, gridY: 1 },
			{ gridX: 19, gridY: 2 },
			{ gridX: 19, gridY: 3 },
			{ gridX: 19, gridY: 4 },
			{ gridX: 19, gridY: 5 },
			{ gridX: 19, gridY: 6 },
			{ gridX: 19, gridY: 7 },
			{ gridX: 19, gridY: 8 },
			{ gridX: 19, gridY: 9 },
			{ gridX: 18, gridY: 9 },
			{ gridX: 17, gridY: 8 },
			{ gridX: 16, gridY: 8 },
			{ gridX: 15, gridY: 8 },
			{ gridX: 14, gridY: 8 },
			{ gridX: 13, gridY: 8 },
			{ gridX: 12, gridY: 9 },
			{ gridX: 11, gridY: 9 },
			{ gridX: 10, gridY: 10 },
			{ gridX: 9, gridY: 10 },
			{ gridX: 8, gridY: 10 },
			{ gridX: 7, gridY: 10 },
			{ gridX: 6, gridY: 10 },
			{ gridX: 5, gridY: 10 },
			{ gridX: 4, gridY: 10 },
			{ gridX: 3, gridY: 10 },
			{ gridX: 2, gridY: 10 },
			{ gridX: 1, gridY: 10 },
			{ gridX: 0, gridY: 10 },
			{ gridX: -1, gridY: 10 },
			{ gridX: -1, gridY: 9 },
			{ gridX: -1, gridY: 8 },
			{ gridX: -1, gridY: 7 },
			{ gridX: -1, gridY: 6 },
			{ gridX: -1, gridY: 5 },
			{ gridX: -1, gridY: 4 },
			{ gridX: -1, gridY: 3 },
			{ gridX: -1, gridY: 2 },
			{ gridX: -1, gridY: 1 },
			{ gridX: 0, gridY: 2 }
		].forEach(this.boardColiders.createVoid);

		[
			{
				id: 'line-0',
				type: 'line',
				gridX: 15,
				gridY: 7
			},
			{
				id: 'line-1',
				type: 'line',
				gridX: 15,
				gridY: 6
			}
		].forEach(this.pieces.createPiece);
	};

	private hitSound() {
		this.fx.play();
	}

	private initGame() {
		this.pieces.pieces['line-0'].setActive();
	}
}

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
	active: false,
	visible: false,
	key: WorldScene.name
};
