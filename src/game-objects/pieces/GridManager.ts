import { Direction } from '../pieces/AbstractPieces';

class GridManager {
	private grid: any = {};

	constructor() {}

	addToGrid({ gridX, gridY, id }: any) {
		this.grid = {
			...this.grid,
			[`${gridX}-${gridY}`]: id
		};
	}

	getID({ gridX, gridY }: any) {
		return this.grid[`${gridX}-${gridY}`];
	}

	getPieceOn({ gridX, gridY, direction }: any) {
		if (direction === Direction.TOP) return this.grid[`${gridX}-${gridY - 1}`];
		if (direction === Direction.RIGHT) return this.grid[`${gridX + 1}-${gridY}`];
		if (direction === Direction.BOTTOM) return this.grid[`${gridX}-${gridY + 1}`];
		if (direction === Direction.LEFT) return this.grid[`${gridX - 1}-${gridY}`];
	}
}

export default {
	pieces: new GridManager(),
	voids: new GridManager()
};
