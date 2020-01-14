import * as Phaser from "phaser";
import { HUDScene, HUDSceneEvents } from "./HUDScene";
import { spriteAssets } from "../../assets/sprites";
import { Player } from "../game-objects/Player";

export enum GameplaySceneEvents {
  addScore = "addScore"
}

export class GameplayScene extends Phaser.Scene {
  private score: number = 0;
  private hud: Phaser.Scene;

  private player: Player = new Player();
  private platforms: Phaser.Physics.Arcade.StaticGroup;

  private readonly loadedSprites = {
    sky: "sky",
    ground: "ground",
    star: "star",
    bomb: "bomb"
  };

  constructor() {
    super(sceneConfig);
  }

  public preload() {
    this.player.load(this);
    this.load.image(this.loadedSprites.sky, spriteAssets.sky);
    this.load.image(this.loadedSprites.ground, spriteAssets.ground);
    this.load.image(this.loadedSprites.star, spriteAssets.star);
    this.load.image(this.loadedSprites.bomb, spriteAssets.bomb);
  }

  public create() {
    this.hud = this.scene.get(HUDScene.name);
    this.scene.launch(HUDScene.name);

    this.buildWorld();
    this.player.initialize(this);

    this.physics.add.collider(this.player.body, this.platforms);

    this.input.on("pointerdown", this.addScore);
  }

  public update() {
    // TODO
  }

  private addScore = () => {
    this.score += 1;
    this.hud.events.emit(HUDSceneEvents.updateScoreText, this.score);
  };

  private buildWorld = () => {
    this.add.image(400, 300, this.loadedSprites.sky);

    this.platforms = this.physics.add.staticGroup();
    (<Phaser.Physics.Arcade.Image>(
      this.platforms.create(400, 568, this.loadedSprites.ground)
    ))
      .setScale(2)
      .refreshBody();
    this.platforms.create(600, 400, this.loadedSprites.ground);
    this.platforms.create(50, 250, this.loadedSprites.ground);
    this.platforms.create(750, 220, this.loadedSprites.ground);
  };
}

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: GameplayScene.name
};
