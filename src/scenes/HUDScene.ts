import * as Phaser from "phaser";

export enum HUDSceneEvents {
  updateScoreText = "updateScoreText"
}

export class HUDScene extends Phaser.Scene {
  private static fontParams = {
    font: "48px Arial",
    fill: "#eeeeee"
  };

  private scoreText: Phaser.GameObjects.Text;

  constructor() {
    super(sceneConfig);
  }

  public create() {
    this.scoreText = this.add.text(10, 10, "SCORE_TEXT", HUDScene.fontParams);

    this.updateScoreText(0);
    this.events.on(HUDSceneEvents.updateScoreText, this.updateScoreText);
  }

  public update() {
    // TODO
  }

  public updateScoreText = (newValue: number) => {
    this.scoreText.setText(`Score: ${newValue}`);
  };
}

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: HUDScene.name
};
