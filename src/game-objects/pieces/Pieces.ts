import { GameObject, GRID_SIZE } from '../index';
import { StraightCable } from './StraightCable';
import { CurveCable } from './CurveCable';
import { AbstractPiece, Direction } from './AbstractPieces';
import { boardAssets } from '../../assets/board';
import GridManager from '../pieces/GridManager';

export class Pieces extends GameObject {
	public group: Phaser.Physics.Arcade.Group;
	public pieces: any = {};
	private scene: any;

	public load = (scene: Phaser.Scene) => {
		this.scene = scene;

		[boardAssets.CURVE, boardAssets.LINE].forEach(asset => {
			scene.load.spritesheet(asset.toString(), asset, {
				frameWidth: GRID_SIZE,
				frameHeight: GRID_SIZE
			});
		});
	};

	public initialize = (scene: Phaser.Scene) => {
		this.group = scene.physics.add.group();
	};

	public addToGroup = (sprite: Phaser.GameObjects.Sprite | null) => {
		sprite && this.group.add(sprite);
	};

	public createPiece = ({ id, type, gridX, gridY, rotation = Direction.TOP }: any) => {
		let piece: AbstractPiece | null = null;
		if (type === 'line') {
			piece = new StraightCable({ gridX, gridY, rotation, id });
		}
		if (type === 'curve') {
			piece = new CurveCable({ gridX, gridY, rotation, id });
		}

		if (piece) {
			this.pieces = {
				...this.pieces,
				[id]: piece
			};
			GridManager.addPieceToGrid({ id, gridX, gridY });
			piece.initialize(this.scene);
			this.addToGroup(piece.getSprite());
		}
	};
}
