import * as Phaser from 'phaser';
import { HUDScene, HUDSceneEvents } from './HUDScene';
import { GameOverScene } from './GameOverScene';
import { GameWinScene } from './GameWinScene';
import { Background, GameOverOverlay, Player, BoardColiders, Pieces, Fx } from 'game-objects';
import { Music } from 'game-objects/sounds/Music';

export enum WorldSceneEvents {
	gameover = 'gameover',
	gamewin = 'gamewin',
	addscore = 'addscore'
}

export class WorldScene extends Phaser.Scene {
	private hud: Phaser.Scene;
	private score: number = 0;

	private background: Background = new Background();
	private boardColiders: BoardColiders = new BoardColiders();
	private player: Player = new Player();
	private music: Music = new Music();
	private pieces: Pieces = new Pieces();
	private gameover: GameOverOverlay = new GameOverOverlay();
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
		this.gameover.load(this);
	}

	create() {
		this.hud = this.scene.get(HUDScene.name);
		this.scene.launch(HUDScene.name);
		this.background.initialize(this);
		this.boardColiders.initialize(this);
		this.pieces.initialize(this);
		this.player.initialize(this, {
			pieces: this.pieces,
			playMoveSound: this.fx.playMove,
			playPickup: this.fx.playPickuo
		});
		this.fx.initialize(this);
		this.music.initialize(this);

		this.worldGroup = this.physics.add.staticGroup();

		this.buildBoard();

		this.physics.add.collider(this.boardColiders.group, this.worldGroup);

		this.physics.add.collider(this.player.sprite, this.boardColiders.group);
		this.physics.add.collider(this.player.sprite, this.worldGroup);

		//Set Events
		// this.add.rectangle(800, 600, 40, 40, 0x00ffff);
		this.gameover.setFinishCallback(this.switchGameOver.bind(this));
		this.events.on(WorldSceneEvents.addscore, this.addScore.bind(this));
		this.events.on(WorldSceneEvents.gameover, this.launchGameOver.bind(this));
		this.events.on(WorldSceneEvents.gamewin, this.launchGameWin.bind(this));

		this.music.play();

		this.initGame();
	}

	update() {
		this.player.update();
	}

	private addScore = () => {
		this.score += 100;
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
				gridX: 18,
				gridY: 5
			},
			{
				id: 'line-2',
				type: 'line',
				gridX: 18,
				gridY: 4
			},
			{
				id: 'line-3',
				type: 'line',
				gridX: 18,
				gridY: 3
			},
			{
				id: 'line-4',
				type: 'line',
				gridX: 18,
				gridY: 2
			},
			{
				id: 'line-5',
				type: 'line',
				gridX: 18,
				gridY: 1
			},
			{
				id: 'line-6',
				type: 'line',
				gridX: 0,
				gridY: 8
			},
			{
				id: 'line-7',
				type: 'line',
				gridX: 0,
				gridY: 7
			},
			{
				id: 'line-8',
				type: 'line',
				gridX: 1,
				gridY: 7
			},
			{
				id: 'line-9',
				type: 'line',
				gridX: 7,
				gridY: 8
			},
			{
				id: 'line-10',
				type: 'line',
				gridX: 7,
				gridY: 6
			},
			{
				id: 'line-11',
				type: 'line',
				gridX: 7,
				gridY: 7
			},
			{
				id: 'curve-0',
				type: 'curve',
				gridX: 1,
				gridY: 8,
				rotation: 3
			},
			{
				id: 'curve-1',
				type: 'curve',
				gridX: 5,
				gridY: 8,
				rotation: 1
			},
			{
				id: 'curve-2',
				type: 'curve',
				gridX: 7,
				gridY: 2,
				rotation: 3
			},
			{
				id: 'curve-3',
				type: 'curve',
				gridX: 7,
				gridY: 3,
				rotation: 1
			},
			{
				id: 'curve-4',
				type: 'curve',
				gridX: 13,
				gridY: 0,
				rotation: 1
			},
			{
				id: 'curve-5',
				type: 'curve',
				gridX: 14,
				gridY: 0,
				rotation: 0
			},
			{
				id: 'curve-6',
				type: 'curve',
				gridX: 12,
				gridY: 4,
				rotation: 2
			},
			{
				id: 'curve-7',
				type: 'curve',
				gridX: 11,
				gridY: 6,
				rotation: 0
			},
			{
				id: 'curve-8',
				type: 'curve',
				gridX: 17,
				gridY: 5,
				rotation: 2
			},
			{
				id: 'curve-9',
				type: 'curve',
				gridX: 17,
				gridY: 4,
				rotation: 1
			}
		].forEach(this.pieces.createPiece);
	};

	private initGame() {
		setTimeout(() => {
			this.pieces.pieces['line-0'].setActive();
		}, 10 * 1000);
		this.pieces.createNewPiece();
	}

	private launchGameOver() {
		this.gameover.initialize(this);
		this.gameover.start();
	}

	private switchGameOver() {
		this.music.stop();
		this.scene.switch(GameOverScene.name);
	}

	private switchGameWin() {
		this.music.stop();
		this.scene.switch(GameWinScene.name);
	}

	private launchGameWin() {
		// this.gameover.initialize(this);
		this.switchGameWin();
	}
}

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
	active: false,
	visible: false,
	key: WorldScene.name
};
