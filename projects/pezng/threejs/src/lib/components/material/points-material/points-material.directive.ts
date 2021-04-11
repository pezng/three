import { Directive, AfterViewInit, Input, forwardRef } from '@angular/core';
import { PointsMaterialParameters, PointsMaterial } from 'three';
import { AbstractMaterial } from '../../../core/models/abstract-material';

@Directive
  ({
    selector: 'pez-points-material',
    providers: [{ provide: AbstractMaterial, useExisting: forwardRef(() => PointsMaterialDirective) }]
  })
export class PointsMaterialDirective extends AbstractMaterial<PointsMaterial> implements AfterViewInit {
  @Input() params!: PointsMaterialParameters;

  ngAfterViewInit() {
    if (!this.params) {
      throw new Error('Points material params required');
    }
    this.object = new PointsMaterial(this.params);
  }
}