import { AfterViewInit, Directive, forwardRef, Input } from '@angular/core';
import { ArrayCamera, PerspectiveCamera } from 'three';
import { AbstractCamera } from '../../../core/models/abstract-camera';

@Directive({
  selector: 'pez-array-camera',
  providers: [{ provide: AbstractCamera, useExisting: forwardRef(() => ArrayCameraDirective) }]
})
export class ArrayCameraDirective  extends AbstractCamera<ArrayCamera> implements AfterViewInit {
  // basic inputs to initialize the camera with
  @Input() cameras: PerspectiveCamera[] = [];

  ngAfterViewInit() {
    this.object = new ArrayCamera(this.cameras);
    this.object.updateProjectionMatrix();
  }

  
}