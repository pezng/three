import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractObject3dDirective } from './abstract-object-3d.directive';



@NgModule({
  declarations: [
    AbstractObject3dDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AbstractObject3dDirective
  ],
})
export class Objects3dModule { }
