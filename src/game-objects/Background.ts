import * as Phaser from "phaser";
import { spriteAssets } from "../../assets/sprites";
import { GameObject } from "./GameObject";

export class Background extends GameObject {
  public static spriteKey = spriteAssets.sky.toString();

  public load = (scene: Phaser.Scene) => {
    scene.load.image(Background.spriteKey, spriteAssets.sky);
  };

  public initialize = (scene: Phaser.Scene) => {
    scene.add.image(400, 300, Background.spriteKey);
  };
}
