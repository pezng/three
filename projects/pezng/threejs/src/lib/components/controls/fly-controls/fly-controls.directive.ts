import { Directive, Input, AfterViewInit, OnDestroy, ContentChild } from '@angular/core';
import { FlyControls } from 'three/examples/jsm/controls/FlyControls';
import { AbstractCamera } from '../../../core/models/abstract-camera';
import { RendererComponent } from '../../renderer/renderer.component';

@Directive({ selector: 'pez-fly-controls' })
export class FlyControlsDirective implements AfterViewInit, OnDestroy {
  object!: FlyControls;

  @ContentChild(AbstractCamera) camera!: AbstractCamera<any>;
  @ContentChild(RendererComponent) renderer!: RendererComponent;

  @Input() movementSpeed = 1.0;
  @Input() rollSpeed = 1.2;
  @Input() autoForward = false;
  @Input() dragToLook = false;

  ngAfterViewInit(): void {
    this.object = new FlyControls(this.camera.object, this.renderer.canvas);
    this.object.movementSpeed = this.movementSpeed;
    this.object.rollSpeed = this.rollSpeed;
    this.object.autoForward = this.autoForward;
    this.object.dragToLook = this.dragToLook;
  }
  ngOnDestroy() { this.object.dispose(); }
}