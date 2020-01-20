import { GameObject } from "./GameObject";
import { spriteAssets } from "../../assets/sprites";

export class BombGroup extends GameObject {
  public static spriteKey: string = spriteAssets.bomb;

  public group: Phaser.Physics.Arcade.Group;

  public load = (scene: Phaser.Scene) => {
    scene.load.image(BombGroup.spriteKey, spriteAssets.bomb);
  };

  public initialize = (scene: Phaser.Scene) => {
    this.group = scene.physics.add.group();
  };

  public add = (xPosition: number) => {
    const newBombInstance = <Phaser.Physics.Arcade.Sprite>(
      this.group.create(xPosition, 16, BombGroup.spriteKey)
    );
    newBombInstance.setBounceY(1);
    newBombInstance.setCollideWorldBounds(true);
    newBombInstance.setVelocity(Phaser.Math.Between(-200, 200), 20);
  };
}
