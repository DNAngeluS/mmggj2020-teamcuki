import * as Phaser from 'phaser';
import { gameScenes } from './scenes';

export const mainConfig: Phaser.Types.Core.GameConfig = {
	title: 'Sample',
	type: Phaser.AUTO,
	scale: {
		// width: window.innerWidth,
		// height: window.innerHeight
		width: 1920,
		height: 1080
	},
	physics: {
		default: 'arcade',
		arcade: {
			debug: true
		}
	},
	parent: 'game',
	backgroundColor: 0x000000,
	scene: gameScenes
};
