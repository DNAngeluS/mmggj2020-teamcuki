import * as Phaser from 'phaser';
import { MediaObjectWithControls } from 'game-objects';
export declare class Fx extends MediaObjectWithControls {
    static key: string;
    private audio;
    load: (scene: Phaser.Scene) => void;
    initialize: (scene: Phaser.Scene) => void;
    play: () => void;
    stop: () => void;
    pause: () => void;
}
//# sourceMappingURL=Fx.d.ts.map