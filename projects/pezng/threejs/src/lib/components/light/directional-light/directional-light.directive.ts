import { AfterViewInit, forwardRef, Input } from '@angular/core';
import { Directive } from '@angular/core';
import { Color, DirectionalLight } from 'three';
import { AbstractObject3dDirective } from '../../../core/objects-3d/abstract-object-3d.directive';

@Directive({
  selector: 'pez-directional-light',
  providers: [{ provide: AbstractObject3dDirective, useExisting: forwardRef(() => DirectionalLightDirective) }]
})
export class DirectionalLightDirective extends AbstractObject3dDirective<DirectionalLight> implements AfterViewInit {
  // basic inputs to initialize the camera with
  @Input() color: string | number | Color = 0xffffff;
  @Input() intensity: number = 1;
  
  ngAfterViewInit() {
    this.object = new DirectionalLight(this.color, this.intensity);
    this.object.position.set(this.positionX, this.positionY, this.positionZ);
  }
  updateAmbientLight(color: string | number | Color): void {
    throw new Error('Method not implemented.');
  }

}