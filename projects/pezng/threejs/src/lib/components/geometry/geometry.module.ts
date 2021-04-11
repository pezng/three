import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxGeometryDirective } from './box/box-geometry.directive';
import { BufferGeometryDirective } from './buffer/buffer-geometry.directive';
import { PlaneGeometryDirective } from './plane/plane-geometry.directive';
import { SphereBufferGeometryDirective } from './sphere-buffer/sphere-buffer-geometry.directive';

const DECLARATION_EXPORTS = [
  BoxGeometryDirective,
  BufferGeometryDirective,
  PlaneGeometryDirective,
  SphereBufferGeometryDirective
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
export class GeometryModule { }
