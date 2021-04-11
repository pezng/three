import { AfterViewInit, Component, ContentChild, ElementRef, Input, OnInit, ViewChild, NgZone, ChangeDetectionStrategy } from '@angular/core';
import { Color, PerspectiveCamera, Scene, WebGLRenderer, Vector3 } from 'three';
import { AbstractCamera } from '../../core/models/abstract-camera';
import {  AbstractLight } from '../../core/models/abstract-light';
import { SceneDirective } from '../../core/objects-3d/scene/scene.directive';

@Component({
  selector: 'pez-renderer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.scss']
})
export class RendererComponent implements OnInit, AfterViewInit {

  public renderer!: WebGLRenderer;

  @ViewChild('canvas') canvasReference!: ElementRef;
  get canvas(): HTMLCanvasElement { return this.canvasReference.nativeElement; }

  @ContentChild(SceneDirective) scene!: SceneDirective
  @ContentChild(AbstractCamera) camera!: AbstractCamera<PerspectiveCamera>;
  @ContentChild(AbstractLight) light!: AbstractLight<any>;

  @Input() color: string | number | Color = '#e5e5e5';
  @Input() alpha = 0.3;

  ngAfterViewInit() {
    this.renderer = new WebGLRenderer({ canvas: this.canvas, antialias: true });
    this.renderer.setClearColor(this.color);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(devicePixelRatio);
    

    window.addEventListener('resize', () => {
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.camera.updateAspectRatio(window.innerWidth / window.innerHeight);
    })
    // Observe a scene or a renderer
    if (typeof window.__THREE_DEVTOOLS__ !== 'undefined') {
      // window.__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('observe', { detail: scene }));
      window.__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('observe', { detail: this.renderer }));
    }
    // this.renderer.autoClear = true;
  }
  render() {

    // this.zone.runOutsideAngular(() => {
    //   requestAnimationFrame(this.render)
    // })
      // console.log("hello")
      // this.scene.box.rotateX(0.01);
      // this.scene.box.rotateY(0.01);

      // satellites.forEach(sat => {
      //   let {x, y, z} = sat.position;
      //   console.log(x, y, z)
      //   let newZ = z + 0.01;
      //   sat.position.set(x,y, newZ);
      //   const rotatePoint = new Vector3(0, 0, 0);
      //   // rotateAboutPoint(sat, rotatePoint,)
      // })

      this.renderer.render(this.scene.object, this.camera.object);


  }

  constructor(private zone: NgZone) { }

  ngOnInit(): void {
  }

}

declare global {
  interface Window { __THREE_DEVTOOLS__: any; }
}