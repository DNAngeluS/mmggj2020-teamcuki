import * as Phaser from 'phaser';
import { GameObject } from './GameObject';
export declare class Player extends GameObject {
    static key: string;
    static keyDrop: string;
    static keyTake: string;
    static keyWithObject: string;
    pieces: any;
    playMoveSound: any;
    playPickup: any;
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
    initialize: (scene: Phaser.Scene, { pieces, playMoveSound, playPickup }: {
        pieces: any;
        playMoveSound: any;
        playPickup: any;
    }) => void;
    update: () => void;
    private handleKeyPress;
    private setIdleState;
    private moveTowards;
}
//# sourceMappingURL=Player.d.ts.map