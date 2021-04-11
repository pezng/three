import { Directive, AfterViewInit, forwardRef } from '@angular/core';
import { Scene, AmbientLight, AxesHelper } from 'three';
import { AbstractObject3dDirective } from '../abstract-object-3d.directive';

@Directive
  ({
    selector: 'pez-scene',
    // https://angular.io/guide/dependency-injection-navtree#find-a-parent-by-its-class-interface
    providers: [{ provide: AbstractObject3dDirective, useExisting: forwardRef(() => SceneDirective) }]
  })
export class SceneDirective extends AbstractObject3dDirective<Scene> implements AfterViewInit {

  ngAfterViewInit() {

    this.object = new Scene();
    this.object.add(new AxesHelper(400));
    // const light = new AmbientLight( 0x401111 ); // soft white light
    // this.object.add(light);
    super.ngAfterViewInit();
  }
}