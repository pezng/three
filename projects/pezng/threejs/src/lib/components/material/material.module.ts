import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LambertMaterialDirective } from './lambert-material/lambert-material.directive';
import { MeshPhongMaterialDirective } from './mesh-phong-material/mesh-phong-material.directive';
import { PointsMaterialDirective } from './points-material/points-material.directive';
import { MeshStandardMaterialDirective } from './standard-material/standard-material.directive';

const DECLARATION_EXPORTS = [
  LambertMaterialDirective,
  MeshPhongMaterialDirective,
  PointsMaterialDirective,
  MeshStandardMaterialDirective
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
export class MaterialModule { }
