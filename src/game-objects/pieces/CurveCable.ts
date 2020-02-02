import { AbstractPiece, Direction } from './AbstractPieces';
import { boardAssets } from '../../assets/board';

export class CurveCable extends AbstractPiece {
	activeBorders = { in: Direction.BOTTOM, out: Direction.RIGHT };
	spriteKey = boardAssets.CURVE.toString();
	assetURL = boardAssets.CURVE;
}
