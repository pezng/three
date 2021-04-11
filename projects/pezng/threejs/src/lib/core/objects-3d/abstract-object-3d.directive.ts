import { AfterViewInit, ContentChildren, Directive, Input, OnChanges, QueryList, SimpleChanges } from '@angular/core';
import { AmbientLight, BoxGeometry, Mesh, MeshBasicMaterial, MeshLambertMaterial, Object3D, PerspectiveCamera, PointLight, SphereGeometry, Vector } from 'three';
import { AbstractLight } from '../models/abstract-light';

@Directive({
  selector: '[appAbstractObject3d]'
})
export class AbstractObject3dDirective<T extends Object3D> implements AfterViewInit {

  static count = 0;

  object!: T;

  @Input() name: string = `${typeof (this)}_${AbstractObject3dDirective.count++}`;

  @Input()
  set positionX(val: number) {
    if (this.object) {
      this.object.position.x = val;
    }
  }
  get positionX() {
    if (this.object) {
      return this.object.position.x;
    }
    return 0;
  }

  @Input()
  set positionY(val: number) {
    if(this.object){
      this.object.position.y = val;
    }
  }
  get positionY() {
    if(this.object) {
      return this.object.position.y;
    }
    return 0;
  }

  @Input()
  set positionZ(val: number) {
    if(this.object) {
      this.object.position.z = val;
    }
  }
  get positionZ() {
    if(this.object) {
      return this.object.position.z;
    }
    return 0;
  }
  @Input() rotateAroundParent = false;

  @ContentChildren(AbstractObject3dDirective, { descendants: true })
  childNodes!: QueryList<AbstractObject3dDirective<any>>;

  @ContentChildren(AbstractLight, { descendants: true })
  childLights!: QueryList<AbstractLight<any>>;

  ngAfterViewInit() {
    this.object.position.x = this.positionX;
    this.object.position.y = this.positionY;
    this.object.position.z = this.positionZ;
    if (this.childNodes !== undefined && this.childNodes.length > 0) {
      const filteredChildNode = this.childNodes
        // filter out self and unset objects
        .filter(node => node !== this && node.object !== undefined)
        .map(({ object }) => object);

      this.object.add(...filteredChildNode);
    }
    if (this.childLights !== undefined && this.childLights.length > 0) {
      const filteredChildNode = this.childLights
        // filter out self and unset objects
        .filter(node => node.object !== undefined)
        .map(({ object }) => object);

      this.object.add(...filteredChildNode);
    }

    this.object.name = this.name;
  }

}
