import * as Phaser from 'phaser';
import { GameObject } from './GameObject';

import { playerAssets } from '../assets/player';

export class Player extends GameObject {
	public static spriteKey = playerAssets.PLAYER.toString();

	public sprite: Phaser.Physics.Arcade.Sprite;

	private movementSpeed: number = 260;
	// private jumpForce: number = 330;
	private cursors: Phaser.Types.Input.Keyboard.CursorKeys;

	private readonly animations = {
		left: 'left',
		right: 'right',
		idle: 'idle'
	};

	public load = (scene: Phaser.Scene) => {
		scene.load.spritesheet(Player.spriteKey, playerAssets.PLAYER, {
			frameWidth: 32,
			frameHeight: 48
		});
	};

	public initialize = (scene: Phaser.Scene) => {
		this.sprite = scene.physics.add.sprite(100, 450, Player.spriteKey);
		this.cursors = scene.input.keyboard.createCursorKeys();

		// physics
		this.sprite.setBounce(0.15);
		this.sprite.setCollideWorldBounds(true);

		// animations
		scene.anims.create({
			key: this.animations.left,
			frames: scene.anims.generateFrameNumbers(Player.spriteKey, {
				start: 0,
				end: 3
			}),
			frameRate: 10,
			repeat: -1
		});

		scene.anims.create({
			key: this.animations.right,
			frames: scene.anims.generateFrameNumbers(Player.spriteKey, {
				start: 5,
				end: 8
			}),
			frameRate: 10,
			repeat: -1
		});

		scene.anims.create({
			key: this.animations.idle,
			frames: [{ key: Player.spriteKey, frame: 4 }],
			frameRate: 20,
			repeat: -1
		});

		scene.anims.create;
	};

	public update = () => {
		var moveUp = this.cursors.up!.isDown;
		var moveDown = this.cursors.down!.isDown;
		var moveLeft = this.cursors.left!.isDown;
		var moveRight = this.cursors.right!.isDown;

		const forward = new Phaser.Math.Vector2(1, 1);
		let impulse = new Phaser.Math.Vector2(0, 0);

		if (moveLeft) {
			impulse.x += -forward.x * this.movementSpeed;
		}
		if (moveRight) {
			impulse.x += forward.x * this.movementSpeed;
		}
		if (moveUp) {
			impulse.y += -forward.y * this.movementSpeed;
		}
		if (moveDown) {
			impulse.y += forward.y * this.movementSpeed;
		}

		if (!(moveLeft || moveRight || moveUp || moveDown)) {
			this.setIdleState();
		}

		// if (this.cursors.up!.isDown || this.cursors.space!.isDown) {
		// 	this.performJump();
		// }
		this.moveTowards(impulse);
	};

	private setIdleState = () => {
		this.sprite.setVelocityX(0);
		this.sprite.anims.play(this.animations.idle);
	};

	private moveTowards = (direction: Phaser.Math.Vector2) => {
		this.sprite.setVelocity(direction.x, direction.y);
		// this.sprite.setVelocityX(this.movementSpeed * direction);
		// this.sprite.anims.play(direction.lengthSq > 0 ? this.animations.right : this.animations.left, true);
	};

	// private performJump = () => {
	// 	if (this.sprite.body.touching.down) this.sprite.setVelocityY(-this.jumpForce);
	// };
}
