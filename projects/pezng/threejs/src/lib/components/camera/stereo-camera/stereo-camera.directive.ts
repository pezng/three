import { AfterViewInit, Directive, forwardRef } from '@angular/core';
import { StereoCamera } from 'three';
import { AbstractCamera } from '../../../core/models/abstract-camera';

@Directive({
  selector: 'pez-stereo-camera',
  providers: [{ provide: AbstractCamera, useExisting: forwardRef(() => StereoCameraDirective) }]
})
export class StereoCameraDirective  extends AbstractCamera<StereoCamera> implements AfterViewInit {

  ngAfterViewInit() {
    this.object = new StereoCamera();
  }

  
}