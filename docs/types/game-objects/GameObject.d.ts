import * as Phaser from 'phaser';
export declare abstract class GameObject {
    abstract load(scene: Phaser.Scene): void;
    abstract initialize(scene: Phaser.Scene, options?: any): void;
    update(): void;
}
//# sourceMappingURL=GameObject.d.ts.map