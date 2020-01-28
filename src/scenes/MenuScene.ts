import * as Phaser from "phaser";
import { GameplayScene } from "./GameplayScene";
import { Button } from "../game-objects/UI/Button";
import { game } from "../main";

export class MenuScene extends Phaser.Scene {
  private playButton: Button = new Button();

  constructor() {
    super(sceneConfig);
  }

  public preload() {
    this.playButton.load(this);
  }

  public create() {
    this.playButton.initialize(this, {
      text: "Play",
      position: {
        x: game.scale.width / 2,
        y: game.scale.height / 2
      },
      onClick: this.startGame
    });
  }

  private startGame = () => {
    this.scene.start(GameplayScene.name);
  };
}

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: MenuScene.name
};
