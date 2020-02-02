import * as Phaser from 'phaser';
import { MediaObject } from 'game-objects';
export declare class Fx extends MediaObject {
    static pickupKey: string;
    static moveKey: string;
    static fanfareKey: string;
    private pickup;
    private move;
    private fanfare;
    load: (scene: Phaser.Scene) => void;
    initialize: (scene: Phaser.Scene) => void;
    playMove: () => boolean;
    playFanfare: () => boolean;
    playPickuo: () => boolean;
}
//# sourceMappingURL=Fx.d.ts.map