import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Directive({
  selector: '[appScrollAnimationServicios]',
})
export class ScrollAnimationServiciosDirective {
  constructor(
    private el: ElementRef, // Referencia al elemento DOM
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      gsap.registerPlugin(ScrollTrigger);

      const element = this.el.nativeElement; // El elemento al que se aplica la directiva
      const vwOffset = window.innerWidth * 0.15; // 30vw, equivalente a 30% del viewport width

      // Animación para cuando el elemento entre al viewport
      gsap.from(element, {
        scrollTrigger: {
          trigger: element, // Trigger en el propio elemento
          start: 'center center', // La animación empieza cuando el 80% del elemento entra en el viewport
          end: 'bottom center', // La animación termina cuando el 20% del elemento entra en el viewport
          scrub: true, // Sincroniza la animación con el scroll
          markers: true, // Muestra los marcadores de inicio y fin (opcional)
        },
        y: -vwOffset, // Mueve el elemento hacia arriba en función del ancho del viewport
        duration: 5, // Duración de la animación
      });
    }
  }
}
