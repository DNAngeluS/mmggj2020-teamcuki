import * as Phaser from 'phaser';
import { MediaObject } from './MediaObject';
export declare class MenuVideoLoop extends MediaObject {
    static key: string;
    private video;
    private finishCallback;
    private isLooping;
    load: (scene: Phaser.Scene) => void;
    initialize: (scene: Phaser.Scene) => void;
    destroy(): void;
    setIsLooping(loop: boolean): void;
    setFinishCallback: (callback: Function) => void;
    private onFinish;
}
//# sourceMappingURL=MenuVideoLoop.d.ts.map