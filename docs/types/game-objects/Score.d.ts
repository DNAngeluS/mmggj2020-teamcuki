import * as Phaser from 'phaser';
import { GameObject } from './GameObject';
export declare class Score extends GameObject {
    static key: string;
    private text;
    private score;
    load: (scene: Phaser.Scene) => void;
    initialize: (scene: Phaser.Scene) => void;
    addToScore(value: number): void;
}
//# sourceMappingURL=Score.d.ts.map