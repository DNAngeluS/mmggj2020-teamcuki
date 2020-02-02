import * as Phaser from 'phaser';
import { GameObject } from './GameObject';
export declare class GameOverOverlay extends GameObject {
    static key: string;
    private static loopKey;
    sprite: Phaser.Physics.Arcade.Sprite;
    private finishCallback;
    load: (scene: Phaser.Scene) => void;
    initialize: (scene: Phaser.Scene) => void;
    start: () => void;
    setFinishCallback: (callback: Function) => void;
    private onFinish;
}
//# sourceMappingURL=GameOverOverlay.d.ts.map