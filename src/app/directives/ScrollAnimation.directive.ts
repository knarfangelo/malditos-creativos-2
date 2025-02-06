import { Directive, ElementRef, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Directive({
  selector: '[appScrollAnimation]' // Esta es la directiva que se aplicará a los elementos
})
export class ScrollAnimationDirective implements AfterViewInit {

  constructor(
    private el: ElementRef, // Referencia al elemento DOM
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      gsap.registerPlugin(ScrollTrigger);

      const element = this.el.nativeElement; // El elemento al que se aplica la directiva

      // Animación para cuando el elemento entre al viewport
      gsap.from(element, {
        scrollTrigger: {
          trigger: element, // Trigger en el propio elemento
          start: 'top 80%',  // La animación empieza cuando el 80% del elemento entra en el viewport
          end: 'top 20%',    // La animación termina cuando el 20% del elemento entra en el viewport
          scrub: false,       // Sincroniza la animación con el scroll
        },
        x: (index) => (element.classList.contains('left') ? 300 : -300),  // Mueve las tarjetas de izquierda o derecha
        rotation: (index) => (element.classList.contains('left') ? 40 : -40),  // Mueve las tarjetas de izquierda o derecha
        y: 100,  // Mueve las tarjetas de izquierda o derecha
        opacity: 0,          // Empieza invisible
        duration: 1,         // Duración de la animación
        ease: 'power2.out',  // Efecto de aceleración
      });
    }
  }
}
