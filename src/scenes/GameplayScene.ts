import * as Phaser from "phaser";
import { HUDScene, HUDSceneEvents } from "./HUDScene";
import { Player } from "../game-objects/Player";
import { PlatformGroup } from "../game-objects/PlatformGroup";
import { Background } from "../game-objects/Background";
import { StarGroup } from "../game-objects/StarGroup";

export class GameplayScene extends Phaser.Scene {
  private score: number = 0;
  private hud: Phaser.Scene;

  private player: Player = new Player();
  private background: Background = new Background();
  private platformGroup: PlatformGroup = new PlatformGroup();
  private starGroup: StarGroup = new StarGroup();

  constructor() {
    super(sceneConfig);
  }

  public preload() {
    this.player.load(this);
    this.platformGroup.load(this);
    this.background.load(this);
    this.starGroup.load(this);
  }

  public create() {
    this.hud = this.scene.get(HUDScene.name);
    this.scene.launch(HUDScene.name);

    this.background.initialize(this);
    this.platformGroup.initialize(this);
    this.buildWorld();
    this.starGroup.initialize(this);
    this.player.initialize(this);

    this.physics.add.collider(this.player.sprite, this.platformGroup.group);
    this.physics.add.collider(this.starGroup.group, this.platformGroup.group);
    this.physics.add.overlap(
      this.player.sprite,
      this.starGroup.group,
      this.collectStar
    );

    this.input.on("pointerdown", this.addScore);
  }

  public update() {
    this.player.update();
  }

  private buildWorld = () => {
    this.platformGroup.create(400, 568, 2);
    this.platformGroup.create(600, 400);
    this.platformGroup.create(50, 250);
    this.platformGroup.create(750, 220);
  };

  private collectStar = (
    player: Phaser.GameObjects.GameObject,
    star: Phaser.GameObjects.GameObject
  ) => {
    star.destroy();
    this.addScore();
  };

  private addScore = () => {
    this.score += 1;
    this.hud.events.emit(HUDSceneEvents.updateScoreText, this.score);
  };
}

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: GameplayScene.name
};
