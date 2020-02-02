export declare enum Direction {
    TOP = 0,
    RIGHT = 1,
    BOTTOM = 2,
    LEFT = 3
}
export declare const RotationDeg: (rotation: Direction) => number;
export declare enum PieceState {
    FREE = 0,
    SET = 1,
    ACTIVE = 2
}
export declare enum Animations {
    IDLE = "IDLE",
    FILLING = "FILLING",
    DONE = "DONE"
}
export declare const SPRITE_FRAMES = 12;
export declare const FRAME_RATE = 2;
export declare abstract class AbstractPiece {
    abstract activeBorders: {
        in: Direction;
        out: Direction;
    } | null;
    abstract assetURL: string;
    private spriteKey;
    state: PieceState;
    private rotation;
    private position;
    private sprite;
    private getPieceById;
    private type;
    private createNewPiece;
    private world;
    constructor({ gridX, gridY, rotation, id, getPieceById, type, createNewPiece }: any);
    initialize: (scene: Phaser.Scene) => void;
    rotate(): void;
    moveTo({ gridX, gridY }: {
        gridX: number;
        gridY: number;
    }): void;
    setDone: () => void;
    handleGoNext(oldPiece: AbstractPiece): void;
    rotateForFlow(): void;
    handleGameOver(): void;
    handleGameWin(): void;
    place(position: any): void;
    setActive(): void;
    getSprite: () => Phaser.GameObjects.Sprite;
    getActiveBorders: () => {
        in: Direction;
        out: Direction;
    } | null;
    destroy(): void;
}
//# sourceMappingURL=AbstractPieces.d.ts.map