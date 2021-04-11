import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RendererComponent } from './renderer.component';

const DECLARATION_EXPORTS = [
  RendererComponent,
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
export class RendererModule { }
