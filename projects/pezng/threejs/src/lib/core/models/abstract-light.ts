import { AmbientLight, Light, Color } from 'three';

export abstract class AbstractLight<T extends Light>
{
    object!: T
    abstract updateAmbientLight(color: string | number | Color): void;
}