import * as Phaser from "phaser";
import { spriteAssets } from "../../assets/sprites";
import { GameObject } from "./GameObject";

export class PlatformGroup extends GameObject {
  public static spriteKey: string = spriteAssets.ground.toString();

  public group: Phaser.Physics.Arcade.StaticGroup;

  public load = (scene: Phaser.Scene) => {
    scene.load.image(PlatformGroup.spriteKey, spriteAssets.ground);
  };

  public initialize = (scene: Phaser.Scene) => {
    this.group = scene.physics.add.staticGroup();
  };

  public create(positionX: number, positionY: number, scale?: number) {
    let platform: Phaser.Physics.Arcade.Image = this.group.create(
      positionX,
      positionY,
      PlatformGroup.spriteKey
    );

    if (scale) {
      platform.setScale(scale).refreshBody();
    }
  }
}
