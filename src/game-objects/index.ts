import { Background } from './Background';
import { BoardColiders } from './BoardColiders';
import { GameObject } from './GameObject';
import { Player } from './Player';
import { Pieces } from './pieces/Pieces';
import { Fx } from './sounds/Fx';

export const GRID_SIZE = 84;

const TOP_MARGIN = 168;
const LEFT_MARGIN = 155;

export const gridToCanvas = ({ gridX, gridY }: { gridX: number; gridY: number }) => {
	const x = LEFT_MARGIN + gridX * GRID_SIZE + GRID_SIZE / 2;
	const y = TOP_MARGIN + gridY * GRID_SIZE + GRID_SIZE / 2;

	return {
		x,
		y
	};
};

export { GameObject, Background, BoardColiders, Player, Pieces, Fx };
