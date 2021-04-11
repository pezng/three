import { BufferGeometry } from 'three';

export abstract class AbstractGeometry<T extends BufferGeometry>
{
  object!: T;
}