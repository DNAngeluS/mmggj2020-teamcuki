import * as Phaser from 'phaser';
import { GameObject } from './GameObject';
export declare class BoardColiders extends GameObject {
    static voidSpriteKey: string;
    group: Phaser.Physics.Arcade.StaticGroup;
    load: (scene: Phaser.Scene) => void;
    initialize: (scene: Phaser.Scene) => void;
    createVoid: ({ gridX, gridY }: {
        gridX: number;
        gridY: number;
    }) => void;
}
//# sourceMappingURL=BoardColiders.d.ts.map