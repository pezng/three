import { Material } from 'three';

export abstract class AbstractMaterial<T extends Material>
{
  object!: T;
}