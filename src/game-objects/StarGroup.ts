import * as Phaser from "phaser";
import { spriteAssets } from "../../assets/sprites";
import { GameObject } from "./GameObject";

export class StarGroup extends GameObject {
  public static spriteKey: string = spriteAssets.star;

  public group: Phaser.Physics.Arcade.Group;

  public load = (scene: Phaser.Scene) => {
    scene.load.image(StarGroup.spriteKey, spriteAssets.star);
  };

  public initialize = (scene: Phaser.Scene) => {
    this.group = scene.physics.add.group({
      key: StarGroup.spriteKey,
      repeat: 11,
      setXY: { x: 12, y: 0, stepX: 70 }
    });

    this.group.children.iterate(child => {
      (<Phaser.Physics.Arcade.Sprite>child).setBounceY(
        Phaser.Math.FloatBetween(0.2, 0.35)
      );
    });
  };
}
