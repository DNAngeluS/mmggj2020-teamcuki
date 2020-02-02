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

	public getPieceById = (id: string) => this.pieces[id];

	public createNewPiece = () => {
		this.createPiece({
			id: new Date().getTime(),
			gridX: 0,
			gridY: 1,
			type: Math.random() < 0.5 ? 'line' : 'curve'
		});
	};

	public createPiece = ({ id, type, gridX, gridY, rotation = Direction.TOP }: any) => {
		let piece: AbstractPiece | null = null;
		const props = {
			gridX,
			gridY,
			rotation,
			id,
			type,
			createNewPiece: this.createNewPiece,
			getPieceById: this.getPieceById
		};

		if (type === 'line') {
			piece = new StraightCable(props);
		}
		if (type === 'curve') {
			piece = new CurveCable(props);
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