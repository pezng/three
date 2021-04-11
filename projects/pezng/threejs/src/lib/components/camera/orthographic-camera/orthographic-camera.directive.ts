import { AfterViewInit, Directive, forwardRef, Input } from '@angular/core';
import { OrthographicCamera } from 'three';
import { AbstractCamera } from '../../../core/models/abstract-camera';

@Directive({
  selector: 'pez-orthographic-camera',
  providers: [{ provide: AbstractCamera, useExisting: forwardRef(() => OrthographicCameraDirective) }]
})
export class OrthographicCameraDirective  extends AbstractCamera<OrthographicCamera> implements AfterViewInit {
  // basic inputs to initialize the camera with
  @Input() left: number = window.outerWidth / -2;
  @Input() right: number = window.outerWidth / 2;
  @Input() top: number = window.outerHeight / 2;
  @Input() bottom: number = window.outerHeight /  -2;
  @Input() near: number = 1;
  @Input() far: number = 100;

  ngAfterViewInit() {
    this.object = new OrthographicCamera(this.left, this.right, this.top, this.bottom, this.near, this.far);
    this.object.updateProjectionMatrix();
  }

  
}