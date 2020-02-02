import * as Phaser from 'phaser';
import { GameObject } from './GameObject';
export declare class Player extends GameObject {
    static key: string;
    static keyDrop: string;
    static keyTake: string;
    static keyWithObject: string;
    pieces: any;
    isCarryng: boolean;
    isAnimating: boolean;
    sprite: Phaser.Physics.Arcade.Sprite;
    private position;
    private cursors;
    private drop;
    private rotate;
    private isKeyDown;
    private readonly animations;
    load: (scene: Phaser.Scene) => void;
    initialize: (scene: Phaser.Scene, pieces: any) => void;
    update: () => void;
    private handleKeyPress;
    private setIdleState;
    private moveTowards;
}
//# sourceMappingURL=Player.d.ts.map