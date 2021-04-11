import { ControlsModule } from './controls/controls.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Objects3dModule } from '../core/objects-3d/objects-3d.module';
import { CameraModule } from './camera/camera.module';
import { GeometryModule } from './geometry/geometry.module';
import { LightModule } from './light/light.module';
import { MaterialModule } from './material/material.module';
import { RendererModule } from './renderer/renderer.module';

const IMPORT_EXPORTS = [
    Objects3dModule,
    CameraModule,
    ControlsModule,
    GeometryModule,
    LightModule,
    MaterialModule,
    RendererModule
]

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    IMPORT_EXPORTS
  ],
  exports: [
    IMPORT_EXPORTS
  ],
})
export class PezThreeModule { }
