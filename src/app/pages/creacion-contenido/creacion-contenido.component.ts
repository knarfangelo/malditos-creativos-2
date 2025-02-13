import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { register } from 'swiper/element';
import { FooterComponent } from "../../layouts/footer/footer.component";
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { NavegacionComponent } from '../../layouts/navegacion/navegacion.component';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-creacion-contenido',
  imports: [FooterComponent, NavegacionComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <header>
    <app-navegacion></app-navegacion>
        <section class="panel-inicial">
        <h1 class="titulo">CREACION DE CONTENIDO</h1>
        </section>
        <section class="planes">
          <div class="plan-1">
            <h1>La Entradita (S/ 899)</h1>
            <h2> ¡Dale vida a tus redes sociales con contenido fresco y atractivo!</h2>
            <p>"La Entradita" te ofrece un paquete de contenido esencial para mantener tus redes sociales activas y enganchar a tu audiencia. Videos cortos, carruseles, historias… ¡todo lo que necesitas para empezar a generar impacto!</p>
            <p>¡Consigue tu Entradita de Creación de Contenido!</p>
            <h3 class="numero">
              01
            </h3>
          </div>
          <div class="plan-2">
            <h1>El Menú Completo (S/ 1699)</h1>
            <h2>¡Contenido profesional para redes sociales con grabación en estudio incluida!</h2>
            <p>"El Menú Completo" te lleva al siguiente nivel con una estrategia de contenido integral y la producción profesional de tus videos en nuestro estudio. Formato original,  equipos de alta calidad y un equipo experto para maximizar tu impacto en redes sociales.</p>
            <p> ¡Impulsa tu negocio con el Menú Completo!</p>
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
          <h1>Ruta de creacion de contenido</h1>
          <img class="horizontal" src="diagramas/creacion-contenido.svg" alt="diagrama de diseño web">
          <img class="vertical" src="diagramas/creacion-contenido-v.svg" alt="diagrama de diseño web en vertical">
        </section>
        <section class="empresas-aliadas">
          <h1>Empresas aliadas:</h1>
          <div class="empresas">
            <img src="empresas/bimbo.svg" alt="bimbo">
            <img src="empresas/inca-kola.svg" alt="inca kola">
            <img src="empresas/mercado-libre.svg" alt="mercado libre">
            <img src="empresas/nike.svg" alt="nike">
            <img src="empresas/samsung.svg" alt="samsung">
            <img src="empresas/1-speed-demons.webp" alt="speed demons">
            <img src="empresas/3-olva.webp" alt="olva">
            <img src="empresas/4-saludpol.webp" alt="saludpol">
            <img src="empresas/5-reed.webp" alt="reed">
            <img src="empresas/6-edicom.webp" alt="edicom">
            <img src="empresas/7-edupan.webp" alt="edupan">
            <img src="empresas/8-valle-del-cauca.webp" alt="edupan">
            <img src="empresas/9-santiago.webp" alt="santiago">
            <img src="empresas/10-jrm.webp" alt="jrm soluciones integrales de almacenamiento">
            <img src="empresas/12-claro.webp" alt="claro">
            <img src="empresas/13-css-panama.webp" alt="panama">
            <img src="empresas/14-jmt.webp" alt="jmt">
            <img src="empresas/15-intercorp.webp" alt="jmt">
            <img src="empresas/16-cesar-vallejo.webp" alt="cesar vallejo">
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
