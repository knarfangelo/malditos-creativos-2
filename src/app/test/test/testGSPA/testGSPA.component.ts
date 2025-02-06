import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ViewChildren, QueryList, ElementRef, AfterViewInit, Renderer2, AfterRenderRef, PLATFORM_ID, Inject } from '@angular/core';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


@Component({
  selector: 'app-test-gspa',
  imports:[CommonModule],
  template: `
  <div class="space"></div>
      <video muted loop autoplay src="presentation/presentation.mp4" class="caja"></video>
  <div class="space"></div>
  `,
  styleUrls: ['./testGSPA.component.css'],
})
export class TestGSPAComponent {

  constructor(
    private el: ElementRef, // Referencia al elemento DOM
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(".caja", {
        width: "15vw", // Tamaño inicial en vw
        x: "-40vw"
      }, {
        scrollTrigger: {
          trigger: ".caja",
          start: "center 80%",
          end: "center 20%",
          scrub: true,
          markers: true,
        },
        width: "90%", // Tamaño final en vw
        ease: "none", 
        x:0,
        duration: 3,
      });
    }
  }


} 