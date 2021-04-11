import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmbientLightDirective } from './ambient-light/ambient-light.directive';
import { DirectionalLightDirective } from './directional-light/directional-light.directive';
import { PointLightDirective } from './point-light/point-light.directive';

const DECLARATION_EXPORTS = [
  AmbientLightDirective,
  DirectionalLightDirective,
  PointLightDirective,
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
export class LightModule { }
