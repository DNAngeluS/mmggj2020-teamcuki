import * as Phaser from 'phaser';
import { MediaObject } from './MediaObject';
export declare class CinematicVideo extends MediaObject {
    static key: string;
    private video;
    private finishCallback;
    load: (scene: Phaser.Scene) => void;
    initialize: (scene: Phaser.Scene) => void;
    play: () => void;
    setFinishCallback: (callback: Function) => void;
    private onFinish;
}
//# sourceMappingURL=CinematicVideo.d.ts.map