import * as Phaser from 'phaser';

export type SoundObjectStates = {
	PLATING: string;
	STOPPED: string;
	PAUSED: string;
};

export abstract class SoundObject {
	static STATES = {
		PLAYING: 'playing',
		STOPPED: 'stopped',
		PAUSED: 'paused'
	};
	public abstract load(scene: Phaser.Scene): void;
	public abstract initialize(scene: Phaser.Scene, options?: any): void;
	public play(): void {}
	public stop(): void {}
	public pause(): void {}
}
