import * as Phaser from "phaser";

export class GameplayScene extends Phaser.Scene {
  constructor() {
    super(sceneConfig);
  }

  public create() {
    this.add.rectangle(400, 400, 100, 100, 0xffffff);
  }

  public update() {
    // TODO
  }
}

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: GameplayScene.name
};
