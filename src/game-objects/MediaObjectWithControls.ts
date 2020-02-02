import { MediaObject } from './MediaObject';

export abstract class MediaObjectWithControls extends MediaObject {
	public abstract play(): void;
	public abstract stop(): void;
	public abstract pause(): void;
}
