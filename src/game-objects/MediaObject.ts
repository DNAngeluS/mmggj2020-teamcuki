import * as Phaser from 'phaser';

export enum MediaObjectStates {
	PLATING,
	STOPPED,
	PAUSED
}

export abstract class MediaObject {
	public abstract load(scene: Phaser.Scene): void;
	public abstract initialize(scene: Phaser.Scene, options?: any): void;
}
