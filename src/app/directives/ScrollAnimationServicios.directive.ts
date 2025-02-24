import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Directive({
  selector: '[appScrollAnimationServicios]',
})
export class ScrollAnimationServiciosDirective {
  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      gsap.registerPlugin(ScrollTrigger);

      const element = this.el.nativeElement;

      ScrollTrigger.matchMedia({
        // 🔹 Para pantallas grandes (Desktop)
        "(min-width: 1025px)": () => {
          gsap.from(element, {
            scrollTrigger: {
              trigger: element,
              start: 'center 50%',
              end: 'center 30%',
              scrub: true,
              markers: true,
            },
            y: -window.innerWidth * 0.20, // Mueve hacia arriba
            duration: 2,
          });
        },


        // 🔹 Para pantallas pequeñas (Móviles)
        "(max-width: 900px)": () => {
          gsap.from(element, {
            scrollTrigger: {
              trigger: element,
              start: 'top 95%',
              end: 'bottom 70%',
            },
          });
        }
      });
    }
  }
}
