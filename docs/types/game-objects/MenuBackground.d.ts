import * as Phaser from 'phaser';
import { GameObject } from './GameObject';
export declare class MenuBackground extends GameObject {
    static key: string;
    private static loopKey;
    sprite: Phaser.Physics.Arcade.Sprite;
    load: (scene: Phaser.Scene) => void;
    initialize: (scene: Phaser.Scene) => void;
}
//# sourceMappingURL=MenuBackground.d.ts.map