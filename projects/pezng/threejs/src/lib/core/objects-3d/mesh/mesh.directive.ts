import { Directive, AfterViewInit, forwardRef, ContentChild, Input, ContentChildren, QueryList } from '@angular/core';
import { Mesh } from 'three';
import { AbstractGeometry } from '../../models/abstract-geometry';
import { AbstractMaterial } from '../../models/abstract-material';
import { AbstractObject3dDirective } from '../abstract-object-3d.directive';

@Directive
( {
  selector: 'pez-mesh',
  providers: [ { provide: AbstractObject3dDirective, useExisting: forwardRef( () => MeshDirective ) } ]
} )
export class MeshDirective extends AbstractObject3dDirective<Mesh> implements AfterViewInit
{
  @ContentChild( AbstractGeometry ) geometry!: AbstractGeometry<any>;
  @ContentChild( AbstractMaterial ) material!: AbstractMaterial<any>;
  @ContentChildren( AbstractObject3dDirective ) mesh!: QueryList<AbstractObject3dDirective<Mesh>>;

  
  ngAfterViewInit()
  {
    if(!this.geometry && this.geometry!.object) {
      throw new Error("AbstractGeometry content child required");
    }
    if(!this.material && this.material!.object) {
      throw new Error("AbstractMaterial content child required");
    }

    this.object = new Mesh(this.geometry.object, this.material.object);
    super.ngAfterViewInit();
  }
}