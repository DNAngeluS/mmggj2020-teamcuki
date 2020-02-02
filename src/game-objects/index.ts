import { Background } from './Background';
import { BoardColiders } from './BoardColiders';
import { CinematicVideo } from './CinematicVideo';
import { GameObject } from './GameObject';
import { GameOverOverlay } from './GameOverOverlay';
import { GameOverVideo } from './GameOverVideo';
import { GameWinVideo } from './GameWinVideo';
import { HUDBackground } from './HUDBackground';
import { MediaObject } from './MediaObject';
import { MediaObjectWithControls } from './MediaObjectWithControls';
import { MenuBackground } from './MenuBackground';
import { MenuVideoLoop } from './MenuVideoLoop';
import { Player } from './Player';
import { Pieces } from './pieces/Pieces';
import { Score } from './Score';
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

export {
	GameObject,
	MediaObject,
	MediaObjectWithControls,
	Background,
	BoardColiders,
	CinematicVideo,
	GameOverOverlay,
	GameOverVideo,
	GameWinVideo,
	HUDBackground,
	MenuBackground,
	MenuVideoLoop,
	Player,
	Pieces,
	Fx,
	Score
};
