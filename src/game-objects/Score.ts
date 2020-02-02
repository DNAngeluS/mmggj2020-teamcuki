import * as Phaser from 'phaser';
import { uiAssets } from 'assets/ui';
import { GameObject } from './GameObject';
// import { game } from 'main';

export class Score extends GameObject {
	public static key = uiAssets.SCORE_BACKGROUND.toString();

	private text: Phaser.GameObjects.Text;
	private score: number;

	public load = (scene: Phaser.Scene) => {
		scene.load.image(Score.key, uiAssets.SCORE_BACKGROUND);
	};

	public initialize = (scene: Phaser.Scene) => {
		this.text = scene.add.text(594, 78, '987230874', {
			font: '50px Raleway',
			fill: '#ffffff',
			weight: '700'
		});
		const mask = new Phaser.Display.Masks.BitmapMask(scene, this.text);

		this.text.mask = mask;
	};

	public addToScore(value: number) {
		this.score = this.score + value;
		this.text.setText(`${this.score}`);
	}
}
