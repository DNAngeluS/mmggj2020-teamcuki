import * as Phaser from "phaser";
import { gameScenes } from "./scenes";

export const gameConfig: Phaser.Types.Core.GameConfig = {
  title: "Sample",
  type: Phaser.AUTO,
  scale: {
    width: 800,
    height: 600
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  parent: "game",
  backgroundColor: 0x000000,
  scene: gameScenes
};
