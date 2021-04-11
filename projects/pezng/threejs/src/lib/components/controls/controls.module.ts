import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrbitControlsDirective } from './orbit-controls/orbit-controls.directive';
import { FlyControlsDirective } from './fly-controls/fly-controls.directive';

const DECLARATION_EXPORTS = [
  OrbitControlsDirective,
  FlyControlsDirective,
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
export class ControlsModule { }
