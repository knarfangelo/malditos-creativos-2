import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, AfterViewInit, Inject, PLATFORM_ID, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-test',
  template: `
 <div class="container">
      <h1>Título Principal</h1>
      <h2>Subtítulo</h2>
      <h3>Encabezado</h3>
      <p>Este es un párrafo de prueba.</p>
      <a href="#">Enlace de prueba</a>
    </div>
 <div class="container">
      <h1>Título Principal</h1>
      <h2>Subtítulo</h2>
      <h3>Encabezado</h3>
      <p>Este es un párrafo de prueba.</p>
      <a href="#">Enlace de prueba</a>
    </div>
 <div class="container">
      <h1>Título Principal</h1>
      <h2>Subtítulo</h2>
      <h3>Encabezado</h3>
      <p>Este es un párrafo de prueba.</p>
      <a href="#">Enlace de prueba</a>
    </div>
 <div class="container">
      <h1>Título Principal</h1>
      <h2>Subtítulo</h2>
      <h3>Encabezado</h3>
      <p>Este es un párrafo de prueba.</p>
      <a href="#">Enlace de prueba</a>
    </div>
 <div class="container">
      <h1>Título Principal</h1>
      <h2>Subtítulo</h2>
      <h3>Encabezado</h3>
      <p>Este es un párrafo de prueba.</p>
      <a href="#">Enlace de prueba</a>
    </div>
 <div class="container">
      <h1>Título Principal</h1>
      <h2>Subtítulo</h2>
      <h3>Encabezado</h3>
      <p>Este es un párrafo de prueba.</p>
      <a href="#">Enlace de prueba</a>
    </div>
 <div class="container">
      <h1>Título Principal</h1>
      <h2>Subtítulo</h2>
      <h3>Encabezado</h3>
      <p>Este es un párrafo de prueba.</p>
      <a href="#">Enlace de prueba</a>
    </div>
 <div class="container">
      <h1>Título Principal</h1>
      <h2>Subtítulo</h2>
      <h3>Encabezado</h3>
      <p>Este es un párrafo de prueba.</p>
      <a href="#">Enlace de prueba</a>
    </div>
 <div class="container">
      <h1>Título Principal</h1>
      <h2>Subtítulo</h2>
      <h3>Encabezado</h3>
      <p>Este es un párrafo de prueba.</p>
      <a href="#">Enlace de prueba</a>
    </div>
 <div class="container">
      <h1>Título Principal</h1>
      <h2>Subtítulo</h2>
      <h3>Encabezado</h3>
      <p>Este es un párrafo de prueba.</p>
      <a href="#">Enlace de prueba</a>
    </div>
 <div class="container">
      <h1>Título Principal</h1>
      <h2>Subtítulo</h2>
      <h3>Encabezado</h3>
      <p>Este es un párrafo de prueba.</p>
      <a href="#">Enlace de prueba</a>
    </div>
 <div class="container">
      <h1>Título Principal</h1>
      <h2>Subtítulo</h2>
      <h3>Encabezado</h3>
      <p>Este es un párrafo de prueba.</p>
      <a href="#">Enlace de prueba</a>
    </div>
 <div class="container">
      <h1>Título Principal</h1>
      <h2>Subtítulo</h2>
      <h3>Encabezado</h3>
      <p>Este es un párrafo de prueba.</p>
      <a href="#">Enlace de prueba</a>
    </div>
 <div class="container">
      <h1>Título Principal</h1>
      <h2>Subtítulo</h2>
      <h3>Encabezado</h3>
      <p>Este es un párrafo de prueba.</p>
      <a href="#">Enlace de prueba</a>
    </div>
  `,
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private el: ElementRef) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const elements = this.el.nativeElement.querySelectorAll('h1, h2, h3, p, a');

      elements.forEach((element: HTMLElement) => {
        gsap.to(element, {
          clipPath: "inset(0 0 0 0)", // Hace visible el texto
          duration: 0.5, // Duración de la animación
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%", // Activa cuando el elemento entra al 80% del viewport
            toggleActions: "play none none none", // Solo se ejecuta una vez
          }
        });
      });
    }
  }

}
