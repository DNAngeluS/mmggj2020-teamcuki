import { Direction } from '../pieces/AbstractPieces';

class GridManager {
	private grid: any = {};

	constructor() {}

	addPieceToGrid({ gridX, gridY, id }: any) {
		this.grid = {
			...this.grid,
			[`${gridX}-${gridY}`]: id
		};
	}

	getID({ gridX, gridY }: any) {
		return this.grid[`${gridX}-${gridY}`];
	}

	getPieceOn({ gridX, gridY, direction }: any) {
		if (Direction.TOP) return this.grid[`${gridX}-${gridY - 1}`];
		if (Direction.RIGHT) return this.grid[`${gridX + 1}-${gridY}`];
		if (Direction.BOTTOM) return this.grid[`${gridX}-${gridY + 1}`];
		if (Direction.LEFT) return this.grid[`${gridX - 1}-${gridY}`];
	}
}

export default new GridManager();
