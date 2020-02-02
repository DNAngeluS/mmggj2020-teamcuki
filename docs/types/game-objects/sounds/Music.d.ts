import * as Phaser from 'phaser';
import { MediaObjectWithControls } from 'game-objects';
export declare class Music extends MediaObjectWithControls {
    static levelOneKey: string;
    static levelTwoKey: string;
    static levelThreeKey: string;
    static levelFourKey: string;
    private audioOne;
    private audioTwo;
    private audioThree;
    private audioFour;
    private loopCounter;
    load: (scene: Phaser.Scene) => void;
    initialize: (scene: Phaser.Scene) => void;
    handleLoop: () => void;
    play: () => void;
    stop: () => void;
    pause: () => void;
}
//# sourceMappingURL=Music.d.ts.map