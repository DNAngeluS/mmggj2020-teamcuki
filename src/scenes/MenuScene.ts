import * as Phaser from 'phaser';
import { WorldScene } from './WorldScene';
import { MenuVideoLoop, CinematicVideo } from 'game-objects';

export class MenuScene extends Phaser.Scene {
	private background: MenuVideoLoop = new MenuVideoLoop();
	private cinematic: CinematicVideo = new CinematicVideo();

	constructor() {
		super(sceneConfig);
	}

	preload() {
		this.cinematic.load(this);
		this.background.load(this);
	}

	create() {
		this.cinematic.initialize(this);
		this.background.initialize(this);

		this.cinematic.setFinishCallback(this.loadWorld.bind(this));
		this.background.setFinishCallback(this.loadCinematic.bind(this));
	}

	update() {
		const ENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

		if (Phaser.Input.Keyboard.JustDown(ENTER)) {
			this.background.setIsLooping(false);
		}
	}

	private loadCinematic = () => {
		this.background.destroy();
		this.cinematic.play();
	};

	private loadWorld = () => {
		this.scene.start(WorldScene.name);
	};
}

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
	active: false,
	visible: false,
	key: MenuScene.name
};
