import { AfterViewInit, Directive, forwardRef, Input } from '@angular/core';
import { Color, PointLight } from 'three';
import { AbstractObject3dDirective } from '../../../core/objects-3d/abstract-object-3d.directive';

@Directive
  ({
    selector: 'pez-point-light',
    providers: [{ provide: AbstractObject3dDirective, useExisting: forwardRef(() => PointLightDirective) }]
  })
export class PointLightDirective extends AbstractObject3dDirective<PointLight> implements AfterViewInit {

  // basic inputs to initialize the camera with
  @Input() color: string | number | Color = 0xFFFFFF;
  @Input() intensity: number = 1;
  @Input() distance: number = 1000;
  @Input() decay: number = 0;
  
  ngAfterViewInit() {
    this.object = new PointLight(this.color, this.intensity, this.distance);
    this.object.position.set(this.positionX, this.positionY, this.positionZ);
  }
  updateAmbientLight(color: string | number | Color): void {
    throw new Error('Method not implemented.');
  }

}