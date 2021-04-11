import { AfterViewInit, Directive, forwardRef, Input } from '@angular/core';
import { AmbientLight, Color } from 'three';
import { AbstractObject3dDirective } from '../../../core/objects-3d/abstract-object-3d.directive';

@Directive
  ({
    selector: 'three-ambient-light',
    providers: [{ provide: AbstractObject3dDirective, useExisting: forwardRef(() => AmbientLightDirective) }]
  })
export class AmbientLightDirective extends AbstractObject3dDirective<AmbientLight> implements AfterViewInit {
  // basic inputs to initialize the camera with
  @Input() color: string | number | Color = 0x333333;

  ngAfterViewInit() {
    this.object = new AmbientLight(this.color);
    this.object.position.z = 5;
    // this.object.updateProjectionMatrix();
  }

  updateAmbientLight(aspect: number) {
    // this.object. = aspect;
    // this.object.updateProjectionMatrix();
  }
}