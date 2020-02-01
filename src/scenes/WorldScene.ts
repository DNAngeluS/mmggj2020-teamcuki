import * as Phaser from 'phaser';
import { HUDScene, HUDSceneEvents } from './HUDScene';
import { Background, Player } from '../game-objects/';

export class WorldScene extends Phaser.Scene {
	private hud: Phaser.Scene;
	private score: number = 0;

	private background: Background = new Background();
	private player: Player = new Player();
	private worldGroup: Phaser.Physics.Arcade.StaticGroup;

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
		this.player.initialize(this);

		this.worldGroup = this.physics.add.staticGroup();

		this.physics.add.collider(this.player.sprite, this.worldGroup);

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
}

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
	active: false,
	visible: false,
	key: WorldScene.name
};
