import * as Phaser from "phaser";
import { spriteAssets } from "../../assets/sprites";

export class Player {
  private static spriteKey: string = spriteAssets.player.toString();

  public body: Phaser.Physics.Arcade.Sprite;

  private readonly animations = {
    left: "left",
    right: "right",
    turn: "turn"
  };

  public load = (scene: Phaser.Scene) => {
    scene.load.spritesheet(Player.spriteKey, spriteAssets.player, {
      frameWidth: 32,
      frameHeight: 48
    });
  };

  public initialize = (scene: Phaser.Scene) => {
    this.body = scene.physics.add.sprite(100, 450, Player.spriteKey);

    // physics
    this.body.setBounce(0.2);
    this.body.setCollideWorldBounds(true);

    // animations
    scene.anims.create({
      key: this.animations.left,
      frames: scene.anims.generateFrameNumbers(Player.spriteKey, {
        start: 0,
        end: 3
      }),
      frameRate: 10,
      repeat: -1
    });

    scene.anims.create({
      key: this.animations.right,
      frames: scene.anims.generateFrameNumbers(Player.spriteKey, {
        start: 5,
        end: 8
      }),
      frameRate: 10,
      repeat: -1
    });

    scene.anims.create({
      key: this.animations.turn,
      frames: [{ key: Player.spriteKey, frame: 4 }],
      frameRate: 20,
      repeat: -1
    });

    scene.anims.create;
  };
}
