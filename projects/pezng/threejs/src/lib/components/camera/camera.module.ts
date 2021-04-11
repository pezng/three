import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrthographicCameraDirective } from './orthographic-camera/orthographic-camera.directive';
import { PerspectiveCameraDirective } from './perspective-camera/perspective-camera.directive';
import { ArrayCameraDirective } from './array-camera/array-camera.directive';
import { CubeCameraDirective } from './cube-camera/cube-camera.directive';
import { StereoCameraDirective } from './stereo-camera/stereo-camera.directive';

const DECLARATION_EXPORTS = [
  OrthographicCameraDirective,
  PerspectiveCameraDirective,
  ArrayCameraDirective,
  CubeCameraDirective,
  StereoCameraDirective
]

@NgModule({
  declarations: [
    DECLARATION_EXPORTS
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DECLARATION_EXPORTS
  ],
})
export class CameraModule { }
