import * as Phaser from "phaser";
import { spriteAssets } from "../../assets/sprites";
import { GameObject } from "./GameObject";
import { game } from "../main";

export class Background extends GameObject {
  public static spriteKey = spriteAssets.sky.toString();

  public load = (scene: Phaser.Scene) => {
    scene.load.image(Background.spriteKey, spriteAssets.sky);
  };

  public initialize = (scene: Phaser.Scene) => {
    scene.add.image(
      game.scale.width / 2,
      game.scale.height / 2,
      Background.spriteKey
    );
  };
}
