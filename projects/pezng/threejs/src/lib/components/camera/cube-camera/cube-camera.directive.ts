import { AfterViewInit, Directive, forwardRef, Input } from '@angular/core';
import { CubeCamera, WebGLCubeRenderTarget } from 'three';
import { AbstractObject3dDirective } from '../../../core/objects-3d/abstract-object-3d.directive';

@Directive({
  selector: 'pez-cube-camera',
  providers: [{ provide: AbstractObject3dDirective, useExisting: forwardRef(() => CubeCameraDirective) }]
})
export class CubeCameraDirective  extends AbstractObject3dDirective<CubeCamera> implements AfterViewInit {
  // basic inputs to initialize the camera with
  @Input() renderTarget!: WebGLCubeRenderTarget;
  @Input() near: number = 1;
  @Input() far: number = 100;

  ngAfterViewInit() {
    this.object = new CubeCamera(this.near, this.far, this.renderTarget);
  }

  
}