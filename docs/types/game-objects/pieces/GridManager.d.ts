declare class GridManager {
    private grid;
    constructor();
    addToGrid({ gridX, gridY, id }: any): void;
    getID({ gridX, gridY }: any): any;
    getPieceOn({ gridX, gridY, direction }: any): any;
}
declare const _default: {
    pieces: GridManager;
    voids: GridManager;
};
export default _default;
//# sourceMappingURL=GridManager.d.ts.map