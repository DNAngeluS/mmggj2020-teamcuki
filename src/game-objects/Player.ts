import * as Phaser from "phaser";
import { spriteAssets } from "../../assets/sprites";
import { GameObject } from "./GameObject";

export class Player extends GameObject {
  public static spriteKey: string = spriteAssets.player.toString();

  public sprite: Phaser.Physics.Arcade.Sprite;
  private movementSpeed: number = 160;
  private jumpForce: number = 330;
  private cursors: Phaser.Types.Input.Keyboard.CursorKeys;

  private readonly animations = {
    left: "left",
    right: "right",
    idle: "idle"
  };

  public load = (scene: Phaser.Scene) => {
    scene.load.spritesheet(Player.spriteKey, spriteAssets.player, {
      frameWidth: 32,
      frameHeight: 48
    });
  };

  public initialize = (scene: Phaser.Scene) => {
    this.sprite = scene.physics.add.sprite(100, 450, Player.spriteKey);
    this.cursors = scene.input.keyboard.createCursorKeys();

    // physics
    this.sprite.setBounce(0.15);
    this.sprite.setCollideWorldBounds(true);

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
      key: this.animations.idle,
      frames: [{ key: Player.spriteKey, frame: 4 }],
      frameRate: 20,
      repeat: -1
    });

    scene.anims.create;
  };

  public update = () => {
    if (this.cursors.left!.isDown) {
      this.moveTowards(-1);
    } else if (this.cursors.right!.isDown) {
      this.moveTowards(1);
    } else {
      this.setIdleState();
    }

    if (this.cursors.up!.isDown || this.cursors.space!.isDown) {
      this.performJump();
    }
  };

  private setIdleState = () => {
    this.sprite.setVelocityX(0);
    this.sprite.anims.play(this.animations.idle);
  };

  private moveTowards = (direction: number) => {
    this.sprite.setVelocityX(this.movementSpeed * direction);
    this.sprite.anims.play(
      direction > 0 ? this.animations.right : this.animations.left,
      true
    );
  };

  private performJump = () => {
    if (this.sprite.body.touching.down)
      this.sprite.setVelocityY(-this.jumpForce);
  };
}
