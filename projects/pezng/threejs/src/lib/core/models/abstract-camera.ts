import { Camera } from 'three';
import { AbstractObject3dDirective } from '../objects-3d/abstract-object-3d.directive';

export abstract class AbstractCamera<T extends Camera> extends AbstractObject3dDirective<T>
{
  abstract updateAspectRatio( aspect: number ): void;
}