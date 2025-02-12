import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { register } from 'swiper/element';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { FooterComponent } from '../../layouts/footer/footer.component';
import { NavegacionComponent } from '../../layouts/navegacion/navegacion.component';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-disenio-contenido',
  imports: [FooterComponent, NavegacionComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `

<header>
    <app-navegacion></app-navegacion>
        <section class="panel-inicial">
        <h1 class="titulo">DISEÑO DE CONTENIDO</h1> 
        </section>
        <section class="planes">
          <div class="plan-1">
            <h1>Pack Digital Inicial (S/ 1299)</h1>
            <h2>¡Pack Digital Inicial: Diseño y Contenido para Emprender con Éxito!</h2>
            <p>El Pack Digital Inicial te brinda las bases para construir una presencia online sólida.  Obtén un logotipo profesional, una identidad visual atractiva y contenido creativo para tus redes sociales, todo en un solo paquete.</p>
            <p>¡Comienza con el Pack Digital Inicial!</p>
            <h3 class="numero">
              01
            </h3>
          </div>
          <div class="plan-2">
            <h1>Pack Digital Profesional (S/ 2699)</h1>
            <h2>¡Pack Digital Profesional: Impulsa tu Negocio con una Estrategia Integral!</h2>
            <p>El Pack Digital Profesional te ofrece una solución completa para destacar en el mundo digital. Diseño de marca profesional, contenido de alta calidad, grabación en estudio y una estrategia integral para maximizar tu alcance en redes sociales.</p>
            <p> ¡Alcanza tus objetivos con el Pack Digital Profesional!</p>
            <h3 class="numero">
              02
    </h3>
          </div>
        </section>
        <section class="swiper-websites">
            <swiper-container slides-per-view="3" autoplay loop=true  breakpoints='{
      "320": { "slidesPerView": 1 },
      "640": { "slidesPerView": 2 },
      "1024": { "slidesPerView": 3 }
    }'>
              <swiper-slide>
                <img src="website-page/website-1.png" alt="">
              </swiper-slide>
              <swiper-slide>
                <img src="website-page/website-2.png" alt="">
              </swiper-slide>
              <swiper-slide>
                <img src="website-page/website-3.png" alt="">
              </swiper-slide>
              <swiper-slide>
                <img src="website-page/website-4.png" alt="">
              </swiper-slide>
              <swiper-slide>
                <img src="website-page/website-5.png" alt="">
              </swiper-slide>
              <swiper-slide>
                <img src="website-page/website-6.png" alt="">
              </swiper-slide>
            </swiper-container>
        </section>
        <section class="diagrama">
          <h1>Ruta de diseño de contenido</h1>
          <img class="horizontal" src="diagramas/disenio-contenido.svg" alt="diagrama de diseño web">
          <img class="vertical" src="diagramas/disenio-contenido-v.svg" alt="diagrama de diseño web en vertical">
        </section>
        <section class="empresas-aliadas">
          <h1>Empresas aliadas:</h1>
          <div class="empresas">
            <img src="empresas/bimbo.svg" alt="bimbo">
            <img src="empresas/inca-kola.svg" alt="inca kola">
            <img src="empresas/mercado-libre.svg" alt="mercado libre">
            <img src="empresas/nike.svg" alt="nike">
            <img src="empresas/samsung.svg" alt="samsung">
          </div>
        </section>
        <app-footer></app-footer>
    </header>
  
  
  `,
  styleUrl: './disenio-contenido.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisenioContenidoComponent {

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private el: ElementRef) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      register();
      const elements = this.el.nativeElement.querySelectorAll('h1, h2, h3, p, a, .horizontal, .vertical');

      elements.forEach((element: HTMLElement) => {
        gsap.to(element, {
          clipPath: "inset(0 0 0 0)", // Hace visible el texto
          duration: 0.1, // Duración de la animación
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
