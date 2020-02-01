import { Background } from './Background';
import { BoardColiders } from './BoardColiders';
import { GameObject } from './GameObject';
import { Player } from './Player';

export const GRID_SIZE = 84;

export const gridToCanvas = ({ gridX, gridY }: { gridX: number; gridY: number }) => {
	const x = gridX * GRID_SIZE + GRID_SIZE / 2;
	const y = gridY * GRID_SIZE + GRID_SIZE / 2;

	return {
		x,
		y
	};
};

export { GameObject, Background, BoardColiders, Player };
