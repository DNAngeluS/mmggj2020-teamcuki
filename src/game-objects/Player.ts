import * as Phaser from 'phaser';

import { playerAssets } from 'assets/player';
import { game } from 'main';
import { GameObject } from './GameObject';

export class Player extends GameObject {
	public static key = playerAssets.PLAYER.toString();

	public sprite: Phaser.Physics.Arcade.Sprite;

	// private movementSpeed: number = 900;
	private gridSquare = {
		x: 80,
		y: 80
	};
	// private jumpForce: number = 330;
	private cursors: Phaser.Types.Input.Keyboard.CursorKeys;
	private isKeyDown: boolean;
	// private presedKey: Phaser.Input.Keyboard.Key;

	private readonly animations = {
		left: 'left',
		right: 'right',
		idle: 'idle'
	};

	public load = (scene: Phaser.Scene) => {
		scene.load.spritesheet(Player.key, playerAssets.STANDING, {
			frameWidth: 180,
			frameHeight: 180
		});
	};

	public initialize = (scene: Phaser.Scene) => {
		this.sprite = scene.physics.add.sprite(game.canvas.width / 2, game.canvas.height / 2, Player.key);
		this.sprite.setSize(80, 80);
		this.cursors = scene.input.keyboard.createCursorKeys();
		scene.input.on('keydown', this.handleKeyPress.bind(this));
		this.isKeyDown = false;
		// physics
		this.sprite.setBounce(100);
		this.sprite.setFriction(500);
		// this.sprite.setGravity(100);
		// this.sprite.blendMode = Phaser.BlendModes.MULTIPLY;
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

		scene.anims.create;
	};

	public update = () => {
		var moveUp = this.cursors.up!.isDown && Phaser.Input.Keyboard.JustDown(this.cursors.up!);
		var moveDown = this.cursors.down!.isDown && Phaser.Input.Keyboard.JustDown(this.cursors.down!);
		var moveLeft = this.cursors.left!.isDown && Phaser.Input.Keyboard.JustDown(this.cursors.left!);
		var moveRight = this.cursors.right!.isDown && Phaser.Input.Keyboard.JustDown(this.cursors.right!);

		const forward = new Phaser.Math.Vector2(1, 1);
		let impulse = new Phaser.Math.Vector2(0, 0);

		if (moveLeft) {
			impulse.x += -forward.x;
		}
		if (moveRight) {
			impulse.x += forward.x;
		}
		if (moveUp) {
			impulse.y += -forward.y;
		}
		if (moveDown) {
			impulse.y += forward.y;
		}

		// if (!(moveLeft || moveRight || moveUp || moveDown)) {
		// 	this.setIdleState();
		// }

		this.setIdleState();
		// if (this.cursors.up!.isDown || this.cursors.space!.isDown) {
		// 	this.performJump();
		// }
		// this.sprite.anims.play(this.animations.idle, true);
		this.moveTowards(impulse);
	};

	private handleKeyPress(event: KeyboardEvent) {
		if (!this.isKeyDown) {
		}
	}

	private setIdleState = () => {
		// this.sprite.setVelocityX(0);
		this.sprite.anims.play(this.animations.idle, true);
	};

	private moveTowards = (direction: Phaser.Math.Vector2) => {
		const movX = direction.x * this.gridSquare.x + this.sprite.x;
		const movY = direction.y * this.gridSquare.y + this.sprite.y;
		this.sprite.setPosition(movX, movY);
		// this.sprite.setVelocity(direction.x, direction.y);
		// this.sprite.setVelocityX(this.movementSpeed * direction);
		// this.sprite.anims.play(direction.lengthSq > 0 ? this.animations.right : this.animations.left, true);
	};

	// private performJump = () => {
	// 	if (this.sprite.body.touching.down) this.sprite.setVelocityY(-this.jumpForce);
	// };
}
