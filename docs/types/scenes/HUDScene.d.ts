import * as Phaser from 'phaser';
export declare enum HUDSceneEvents {
    updateScoreText = "updateScoreText"
}
export declare class HUDScene extends Phaser.Scene {
    private background;
    private score;
    constructor();
    preload(): void;
    create(): void;
    update(): void;
    updateScoreText: (newValue: number) => void;
}
//# sourceMappingURL=HUDScene.d.ts.map