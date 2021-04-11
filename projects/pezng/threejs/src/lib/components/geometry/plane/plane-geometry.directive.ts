import { AfterViewInit, Directive, forwardRef, Input } from '@angular/core';
import { PlaneGeometry } from 'three';
import { AbstractGeometry } from '../../../core/models/abstract-geometry';
import { createGlobePlane } from '../../../core/utils/globe';

@Directive
( {
  selector: 'pez-plane-geometry',
  providers: [ { provide: AbstractGeometry, useExisting: forwardRef( () => PlaneGeometryDirective ) } ]
} )
export class PlaneGeometryDirective extends AbstractGeometry<PlaneGeometry> implements AfterViewInit
{
  // some inputs for the sake of example
  @Input() width = 30;
  @Input() height = 12;
  @Input() widthSegments = 64;
  @Input() heightSegments = 64;
  ngAfterViewInit()
  {
    this.object = createGlobePlane(this.width, this.height, this.widthSegments, this.heightSegments)
  }
}