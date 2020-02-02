import * as Phaser from 'phaser';
export declare enum MediaObjectStates {
    PLATING = 0,
    STOPPED = 1,
    PAUSED = 2
}
export declare abstract class MediaObject {
    abstract load(scene: Phaser.Scene): void;
    abstract initialize(scene: Phaser.Scene, options?: any): void;
}
//# sourceMappingURL=MediaObject.d.ts.map