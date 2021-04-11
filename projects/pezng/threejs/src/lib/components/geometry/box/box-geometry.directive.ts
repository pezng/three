import { AfterViewInit, Directive, forwardRef, Input } from '@angular/core';
import { BoxGeometry } from 'three';
import { AbstractGeometry } from '../../../core/models/abstract-geometry';

@Directive
( {
  selector: 'pez-box-geometry',
  providers: [ { provide: AbstractGeometry, useExisting: forwardRef( () => BoxGeometryDirective ) } ]
} )
export class BoxGeometryDirective extends AbstractGeometry<BoxGeometry> implements AfterViewInit
{
  // some inputs for the sake of example
  @Input() width = 1;
  @Input() height = 1;
  @Input() depth = 1;

  @Input() widthSegments = 16;
  @Input() heightSegments = 16;
  @Input() depthSegments = 16;
  ngAfterViewInit()
  {
    this.object = new BoxGeometry
    (
      this.width,
      this.height,
      this.depth,
      this.widthSegments,
      this.heightSegments,
      this.depthSegments
    );
    
  }
}