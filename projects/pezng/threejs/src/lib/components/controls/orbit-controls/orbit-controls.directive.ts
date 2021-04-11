import { Directive, Input, AfterViewInit, OnDestroy, ContentChild } from '@angular/core';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { AbstractCamera } from '../../../core/models/abstract-camera';
import { RendererComponent } from '../../renderer/renderer.component';

@Directive({ selector: 'pez-orbit-controls' })
export class OrbitControlsDirective implements AfterViewInit, OnDestroy {
  object!: OrbitControls;

  @ContentChild(AbstractCamera) camera!: AbstractCamera<any>;
  @ContentChild(RendererComponent) renderer!: RendererComponent;

  @Input() rotateSpeed = 1.0;
  @Input() zoomSpeed = 1.2;

  ngAfterViewInit(): void {
    this.object = new OrbitControls(this.camera.object, this.renderer.canvas);
    this.object.rotateSpeed = this.rotateSpeed;
    this.object.zoomSpeed = this.zoomSpeed;
    this.object.maxDistance = 15000;
    this.object.minDistance = 1;
  }
  ngOnDestroy() { this.object.dispose(); }
}