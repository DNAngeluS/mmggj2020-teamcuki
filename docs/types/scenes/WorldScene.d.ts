import * as Phaser from 'phaser';
export declare enum WorldSceneEvents {
    gameover = "gameover",
    gamewin = "gamewin",
    addscore = "addscore"
}
export declare class WorldScene extends Phaser.Scene {
    private hud;
    private score;
    private background;
    private boardColiders;
    private player;
    private music;
    private pieces;
    private gameover;
    private fx;
    private worldGroup;
    constructor();
    preload(): void;
    create(): void;
    update(): void;
    private addScore;
    private buildBoard;
    private hitSound;
    private initGame;
    private launchGameOver;
    private switchGameOver;
    private switchGameWin;
    private launchGameWin;
}
//# sourceMappingURL=WorldScene.d.ts.map