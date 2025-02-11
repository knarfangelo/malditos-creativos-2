import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { register } from 'swiper/element';
import { FooterComponent } from "../../layouts/footer/footer.component";
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-creacion-contenido',
  imports: [FooterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <header>
        <section class="panel-inicial">
        <h1>WEBSITES</h1>
        <h2>(FRASE)</h2>          
        </section>
        <section class="planes">
          <div class="plan-1">
            <h1>La entradita</h1>
            <ul>
              <li><p>Diseño profesional de una Landing Page</p></li>
              <li><p>Integración con redes sociales.</p></li>
              <li><p>Mapa de ubicación (Google Maps).</p></li>
              <li><p>Diseño responsive optimizado para carga rápida</p></li>
              <li><p>Hosting por un año</p></li>
              <li><p>Configuración básica de SEO.</p></li>
            </ul>
            <h3 class="numero">
              01
            </h3>
          </div>
          <div class="plan-2">
            <h1>El menú completo</h1>
            <ul>
              <li><p>Todo lo incluido en "La entradita".</p></li>
              <li><p>Sitio web de HASTA 5 páginas (Inicio, Servicios, Nosotros, Blog, Contacto).</p></li>
              <li><p>Blog con capacidad para publicar artículos y galería de fotos.</p></li>
              <li><p>Formulario de contacto dinámico (especificar qué lo hace "dinámico").</p></li>
              <li><p>Fashion, Consumer Goods, Green Tech, Fintech, Industry 4.0</p></li>
            </ul>
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
          <h1>Asi es como crearemos tu Web</h1>
          <img class="horizontal" src="diagramas/disenio-web.svg" alt="diagrama de diseño web">
          <img class="vertical" src="diagramas/disenio-web-v.svg" alt="diagrama de diseño web en vertical">
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
  styleUrl: './creacion-contenido.component.css' 
})
export class CreacionContenidoComponent {

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private el: ElementRef) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      register();
      const elements = this.el.nativeElement.querySelectorAll('h1, h2, h3, p, a');

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
