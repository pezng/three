import { Directive, Input, AfterViewInit, forwardRef } from '@angular/core';
import { PerspectiveCamera } from 'three';
import { AbstractCamera } from '../../../core/models/abstract-camera';

@Directive
  ({
    selector: 'pez-perspective-camera',
    providers: [{ provide: AbstractCamera, useExisting: forwardRef(() => PerspectiveCameraDirective) }]
  })
export class PerspectiveCameraDirective extends AbstractCamera<PerspectiveCamera> implements AfterViewInit {
  // basic inputs to initialize the camera with
  @Input() fov: number = 70;
  @Input() aspect: number = window.innerWidth / window.innerHeight;
  @Input() near: number = 1;
  @Input() far: number = 10000;
  
  ngAfterViewInit() {
    this.object = new PerspectiveCamera(this.fov, this.aspect, this.near, this.far);
    this.object.updateProjectionMatrix();
  }
}