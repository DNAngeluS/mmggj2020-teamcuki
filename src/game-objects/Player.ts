import * as Phaser from 'phaser';

import { playerAssets } from 'assets/player';
import { GameObject } from './GameObject';
import { GRID_SIZE, gridToCanvas } from 'game-objects';
import GridManager from './pieces/GridManager';

export class Player extends GameObject {
	public static key = playerAssets.PLAYER.toString();
	public static keyDrop = playerAssets.DROP.toString();
	public static keyTake = playerAssets.TAKE.toString();
	public static keyWithObject = playerAssets.WITH_OBJECT.toString();
	public pieces: any;
	public playMoveSound: any;
	public playPickup: any;
	public isCarryng = false;
	public isAnimating = false;

	public sprite: Phaser.Physics.Arcade.Sprite;

	// private movementSpeed: number = 900;
	// private gridSquare = {
	// 	width: GRID_SIZE,
	// 	height: GRID_SIZE
	// };
	private position = {
		gridX: 2, //366,
		gridY: 1 //294
	};
	// private jumpForce: number = 330;
	private cursors: Phaser.Types.Input.Keyboard.CursorKeys;
	private drop: Phaser.Input.Keyboard.Key;
	private rotate: Phaser.Input.Keyboard.Key;
	private isKeyDown: boolean;
	// private presedKey: Phaser.Input.Keyboard.Key;

	private readonly animations = {
		left: 'left',
		right: 'right',
		idle: 'idle',
		withObject: 'withObject',
		take: 'take',
		drop: 'drop'
	};

	public load = (scene: Phaser.Scene) => {
		scene.load.spritesheet(Player.key, playerAssets.STANDING, {
			frameWidth: 180,
			frameHeight: 180
		});

		scene.load.spritesheet(Player.keyDrop, playerAssets.DROP, {
			frameWidth: 180,
			frameHeight: 180
		});

		scene.load.spritesheet(Player.keyTake, playerAssets.TAKE, {
			frameWidth: 180,
			frameHeight: 180
		});

		scene.load.spritesheet(Player.keyWithObject, playerAssets.WITH_OBJECT, {
			frameWidth: 180,
			frameHeight: 180
		});
	};

	public initialize = (
		scene: Phaser.Scene,
		{ pieces, playMoveSound, playPickup }: { pieces: any; playMoveSound: any; playPickup: any }
	) => {
		this.pieces = pieces;
		this.playMoveSound = playMoveSound;
		this.playPickup = playPickup;
		const { x, y } = gridToCanvas(this.position);
		this.sprite = scene.physics.add.sprite(x, y, Player.key);
		this.sprite.setSize(GRID_SIZE, GRID_SIZE);
		this.cursors = scene.input.keyboard.createCursorKeys();
		this.rotate = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
		this.drop = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);
		scene.input.on('keydown', this.handleKeyPress.bind(this));
		this.isKeyDown = false;
		// physics
		this.sprite.setBounce(0);
		this.sprite.setFriction(300);
		this.sprite.setDepth(10);
		this.sprite.setAlpha(0.9);
		this.sprite.setCollideWorldBounds(true);

		// animations
		// scene.anims.create({
		// 	key: this.animations.left,
		// 	frames: scene.anims.generateFrameNumbers(Player.key, {
		// 		start: 0,
		// 		end: 3
		// 	}),
		// 	frameRate: 10,
		// 	repeat: -1
		// });

		// scene.anims.create({
		// 	key: this.animations.right,
		// 	frames: scene.anims.generateFrameNumbers(Player.key, {
		// 		start: 5,
		// 		end: 8
		// 	}),
		// 	frameRate: 10,
		// 	repeat: -1
		// });

		scene.anims.create({
			key: this.animations.idle,
			frames: scene.anims.generateFrameNumbers(Player.key, { start: 0, end: 96 }),
			frameRate: 20,
			repeat: -1
		});

		scene.anims.create({
			key: this.animations.withObject,
			frames: scene.anims.generateFrameNumbers(Player.keyWithObject, { start: 0, end: 95 }),
			frameRate: 20,
			repeat: -1
		});

		const takeAni = scene.anims.create({
			key: this.animations.take,
			frames: scene.anims.generateFrameNumbers(Player.keyTake, { start: 0, end: 9 }),
			frameRate: 23,
			repeat: 0
		});

		const dropAni = scene.anims.create({
			key: this.animations.drop,
			frames: scene.anims.generateFrameNumbers(Player.keyDrop, { start: 0, end: 10 }),
			frameRate: 23,
			repeat: 0
		});

		takeAni &&
			takeAni.on('complete', () => {
				this.sprite.anims.play(this.animations.withObject);
				this.isAnimating = false;
			});
		dropAni &&
			dropAni.on('complete', () => {
				this.sprite.anims.play(this.animations.idle);
				this.isAnimating = false;
			});

		this.setIdleState();
	};

	public update = () => {
		var moveUp = Phaser.Input.Keyboard.JustDown(this.cursors.up!);
		var moveDown = Phaser.Input.Keyboard.JustDown(this.cursors.down!);
		var moveLeft = Phaser.Input.Keyboard.JustDown(this.cursors.left!);
		var moveRight = Phaser.Input.Keyboard.JustDown(this.cursors.right!);

		var rotatePiece = Phaser.Input.Keyboard.JustDown(this.rotate!);
		var dropPiece = Phaser.Input.Keyboard.JustDown(this.drop!);

		// const forward = new Phaser.Math.Vector2(1, 1);
		// let impulse = new Phaser.Math.Vector2(0, 0);
		let nextPosition = { ...this.position };

		if (moveLeft) {
			// impulse.x += -forward.x;
			nextPosition = { gridX: this.position.gridX - 1, gridY: this.position.gridY };
		}
		if (moveRight) {
			nextPosition = { gridX: this.position.gridX + 1, gridY: this.position.gridY };
		}
		if (moveUp) {
			nextPosition = { gridX: this.position.gridX, gridY: this.position.gridY - 1 };
		}
		if (moveDown) {
			nextPosition = { gridX: this.position.gridX, gridY: this.position.gridY + 1 };
		}
		const canMove = !GridManager.voids.getID(nextPosition);

		if (canMove && !this.isAnimating) {
			if (this.position.gridX !== nextPosition.gridX || this.position.gridY !== nextPosition.gridY) {
				this.playMoveSound();
			}

			this.position = nextPosition;
			this.moveTowards();
		}

		if (dropPiece) {
			if (this.isCarryng && !GridManager.pieces.getID(this.position)) {
				this.pieces.getActivePiece().place(this.position);
				this.isCarryng = false;
				this.isAnimating = true;
				this.sprite.anims.play(this.animations.drop);
				this.playPickup();
			}
		}

		if (rotatePiece) {
			if (this.isCarryng) {
				this.pieces.getActivePiece().rotate();
			}
		}
	};

	private handleKeyPress(event: KeyboardEvent) {
		if (!this.isKeyDown) {
		}
	}

	private setIdleState = () => {
		this.sprite.setVelocity(0);
		this.sprite.anims.play(this.animations.idle, true);
	};

	private moveTowards = () => {
		const { x, y } = gridToCanvas(this.position);
		this.sprite.setPosition(x, y);

		if (this.position.gridX === 0 && this.position.gridY === 1 && !this.isCarryng) {
			this.sprite.anims.play(this.animations.take);
			this.playPickup();
			this.isAnimating = true;
			this.isCarryng = true;
		}

		if (this.isCarryng) {
			this.pieces.getActivePiece().moveTo(this.position);
		}
	};
}
