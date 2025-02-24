import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, AfterViewInit, Inject, PLATFORM_ID, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-test',
  template: `
  `,
  styleUrls: ['./test.component.css'],
  imports: [],
})
export class TestComponent {

}
