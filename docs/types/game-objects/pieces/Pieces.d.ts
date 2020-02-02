import { GameObject } from '../index';
export declare class Pieces extends GameObject {
    group: Phaser.Physics.Arcade.Group;
    pieces: any;
    private scene;
    activeID: any;
    pieceIndex: number;
    timeout: null;
    load: (scene: Phaser.Scene) => void;
    initialize: (scene: Phaser.Scene) => void;
    addToGroup: (sprite: Phaser.GameObjects.Sprite | null) => void;
    getPieceById: (id: string) => any;
    getActivePiece: () => any;
    createNewPiece: () => void;
    createPiece: ({ id, type, gridX, gridY, rotation, add }: any) => void;
}
//# sourceMappingURL=Pieces.d.ts.map