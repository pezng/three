import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractObject3dDirective } from './abstract-object-3d.directive';
import { GroupDirective } from './group/group.directive';
import { MeshDirective } from './mesh/mesh.directive';
import { PointsDirective } from './points/points.directive';
import { SceneDirective } from './scene/scene.directive';

const DECLARATION_EXPORTS = [
  GroupDirective,
  MeshDirective,
  PointsDirective,
  SceneDirective,
  AbstractObject3dDirective
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
export class Objects3dModule { }
