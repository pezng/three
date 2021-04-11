import { Directive, forwardRef, AfterViewInit, Input } from '@angular/core';
import { Color, FrontSide, MeshPhongMaterial, MeshPhongMaterialParameters, Side, TextureLoader } from 'three';
import { AbstractMaterial } from '../../../core/models/abstract-material';

@Directive
  ({
    selector: 'pez-mesh-phong-material',
    providers: [{ provide: AbstractMaterial, useExisting: forwardRef(() => MeshPhongMaterialDirective) }]
  })
export class MeshPhongMaterialDirective extends AbstractMaterial<MeshPhongMaterial> implements AfterViewInit {

  @Input() params!: MeshPhongMaterialParameters;


  ngAfterViewInit() {

    if(!this.params) {
      throw new Error('Mesh params required');
    }
    this.object = new MeshPhongMaterial(this.params);

  }
}