import * as Phaser from "phaser";
import { HUDScene, HUDSceneEvents } from "./HUDScene";
import { Player } from "../game-objects/Player";
import { PlatformGroup } from "../game-objects/PlatformGroup";
import { Background } from "../game-objects/Background";
import { StarGroup } from "../game-objects/StarGroup";
import { BombGroup } from "../game-objects/BombGroup";
import { game } from "../main";

export class GameplayScene extends Phaser.Scene {
  private score: number = 0;
  private hud: Phaser.Scene;

  private player: Player = new Player();
  private background: Background = new Background();
  private platformGroup: PlatformGroup = new PlatformGroup();
  private starGroup: StarGroup = new StarGroup();
  private bombGroup: BombGroup = new BombGroup();

  constructor() {
    super(sceneConfig);
  }

  public preload() {
    this.player.load(this);
    this.platformGroup.load(this);
    this.background.load(this);
    this.starGroup.load(this);
    this.bombGroup.load(this);
  }

  public create() {
    this.hud = this.scene.get(HUDScene.name);
    this.scene.launch(HUDScene.name);

    this.background.initialize(this);
    this.platformGroup.initialize(this);
    this.buildWorld();
    this.starGroup.initialize(this);
    this.player.initialize(this);
    this.bombGroup.initialize(this);

    this.physics.add.collider(this.player.sprite, this.platformGroup.group);

    this.physics.add.collider(this.starGroup.group, this.platformGroup.group);
    this.physics.add.overlap(
      this.player.sprite,
      this.starGroup.group,
      (player, star) => {
        this.collectStar(player, <Phaser.Physics.Arcade.Sprite>star);
      }
    );

    this.physics.add.collider(this.bombGroup.group, this.platformGroup.group);
    this.physics.add.collider(
      this.player.sprite,
      this.bombGroup.group,
      (player, bomb) => {
        this.hitBomb(<Phaser.GameObjects.Sprite>player, bomb);
      }
    );
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
    playerSprite: Phaser.GameObjects.GameObject,
    starSprite: Phaser.Physics.Arcade.Sprite
  ) => {
    starSprite.disableBody(true, true);
    this.addScore();

    if (this.starGroup.group.countActive() === 0) {
      this.starGroup.group.children.iterate(child => {
        const starSprite = <Phaser.Physics.Arcade.Sprite>child;
        starSprite.enableBody(true, starSprite.x, 0, true, true);
      });

      const sceneWidth = game.scale.width;
      const bombXPosition =
        this.player.sprite.x < sceneWidth / 2
          ? Phaser.Math.Between(sceneWidth / 2, sceneWidth)
          : Phaser.Math.Between(0, sceneWidth / 2);

      this.bombGroup.add(bombXPosition);
    }
  };

  private hitBomb = (
    playerSprite: Phaser.GameObjects.Sprite,
    bombGameObject: Phaser.GameObjects.GameObject
  ) => {
    this.physics.pause();
    this.player.die();
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
