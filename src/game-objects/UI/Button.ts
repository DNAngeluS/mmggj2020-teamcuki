import * as Phaser from "phaser";
import { GameObject } from "../GameObject";
import { uiAssets } from "../../../assets/sprites/";

interface ButtonProps {
  text?: string;
  position?: {
    x: number;
    y: number;
  };
  origin?: {
    x: number;
    y: number;
  };
}

export class Button extends GameObject {
  private static pressedSpriteKey = uiAssets.button.pressed.toString();
  private static releasedSpriteKey = uiAssets.button.released.toString();

  private sprite: Phaser.GameObjects.Sprite;
  private text: Phaser.GameObjects.Text;

  public load(scene: Phaser.Scene) {
    scene.load.image(Button.pressedSpriteKey, uiAssets.button.pressed);
    scene.load.image(Button.releasedSpriteKey, uiAssets.button.released);
  }

  public initialize(scene: Phaser.Scene, props?: ButtonProps) {
    const {
      text = "foo",
      position = { x: 0, y: 0 },
      origin = { x: 0.5, y: 0.5 }
    } = props || {};

    this.sprite = scene.add.sprite(
      position.x,
      position.y,
      Button.releasedSpriteKey
    );
    this.sprite.setOrigin(origin.x, origin.y);
    this.text = scene.add.text(position.x, position.y, text, {
      font: "24px Arial",
      fill: "#eeeeee"
    });
    this.text.setOrigin(origin.x, origin.y);
  }
}
