import { Directive, AfterViewInit, Input, forwardRef } from '@angular/core';
import { MeshStandardMaterial, Color, Side, FrontSide, MeshBasicMaterial, MeshBasicMaterialParameters } from 'three';
import { AbstractMaterial } from '../../../core/models/abstract-material';
@Directive
( {
  selector: 'pez-standard-material',
  providers: [ { provide: AbstractMaterial, useExisting: forwardRef( () => MeshStandardMaterialDirective ) } ]
} )
export class MeshStandardMaterialDirective extends AbstractMaterial<MeshBasicMaterial> implements AfterViewInit
{
  @Input() params!: MeshBasicMaterialParameters;

  ngAfterViewInit()
  {
    if(!this.params) {
      throw new Error('Mesh params required');
    }
    this.object = new MeshBasicMaterial(this.params);
  }
}