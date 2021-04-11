import { Group } from 'three';
import { AfterViewInit, Directive } from '@angular/core';
import { AbstractObject3dDirective } from '../abstract-object-3d.directive';

@Directive({
  selector: 'pez-group'
})
export class GroupDirective extends AbstractObject3dDirective<Group> implements AfterViewInit {

  ngAfterViewInit() {
    this.object = new Group();
    super.ngAfterViewInit();
  }
}
