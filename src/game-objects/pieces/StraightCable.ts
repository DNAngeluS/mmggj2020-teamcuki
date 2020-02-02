import { AbstractPiece, Direction } from './AbstractPieces';
import { boardAssets } from '../../assets/board';

export class StraightCable extends AbstractPiece {
	activeBorders = { in: Direction.BOTTOM, out: Direction.TOP };
	spriteKey = boardAssets.LINE.toString();
	assetURL = boardAssets.LINE;
}
