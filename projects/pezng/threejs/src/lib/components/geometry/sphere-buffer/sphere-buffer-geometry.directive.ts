import { Directive, AfterViewInit, Input, forwardRef } from '@angular/core';
import { SphereBufferGeometry, SphereGeometry } from 'three';
import { AbstractGeometry } from '../../../core/models/abstract-geometry';
import { createGlobeSphere } from '../../../core/utils/globe';

@Directive
( {
  selector: 'pez-sphere-buffer-geometry',
  providers: [ { provide: AbstractGeometry, useExisting: forwardRef( () => SphereBufferGeometryDirective ) } ]
} )
export class SphereBufferGeometryDirective extends AbstractGeometry<SphereGeometry> implements AfterViewInit
{
  // some inputs for the sake of example
  @Input() radius = 228 - 0.5;
  @Input() widthSegments = 128;
  @Input() heightSegments = 128;
  ngAfterViewInit()
  {
    this.object = createGlobeSphere(this.radius, this.widthSegments)
  }
}