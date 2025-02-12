import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, AfterViewInit, Inject, PLATFORM_ID, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { NavegacionComponent } from "../../layouts/navegacion/navegacion.component";

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-test',
  template: `
    <app-navegacion></app-navegacion>
  `,
  styleUrls: ['./test.component.css'],
  imports: [NavegacionComponent],
})
export class TestComponent {

}
