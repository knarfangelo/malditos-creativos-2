import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { FooterComponent } from '../../layouts/footer/footer.component';
import { NavegacionComponent } from '../../layouts/navegacion/navegacion.component';
import { isPlatformBrowser } from '@angular/common';
import { register } from 'swiper/element';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-disenio-marca',
  imports:[FooterComponent, NavegacionComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `  
  <header>
    <app-navegacion></app-navegacion>
        <section class="panel-inicial">
        <h1 class="titulo">DISEÑO DE MARCA</h1>
        </section>
        <section class="planes">
          <div class="plan-1">
            <h1>La Entradita (S/ 799)</h1>
            <h2>
            ¡Dale identidad a tu marca sin gastar una fortuna!
            </h2>
            <p> Con "La Entradita", obtén un paquete de diseño gráfico esencial para comenzar a construir tu imagen de marca. Logotipo, paleta de colores, tipografías y gráficas para redes sociales, todo lo que necesitas para dar una primera impresión profesional.</p>
            <p>¡Consigue tu Entradita de Diseño Gráfico!</p>
            <h3 class="numero">
              01
            </h3>
          </div>
          <div class="plan-2">
            <h1>El Menú Completo (S/ 1599)</h1>
            <h2>¡Branding profesional con Manual de Marca incluido!</h2>
            <p>"El Menú Completo" te ofrece una solución integral de branding para consolidar tu imagen de marca.  Además de un logotipo impactante, gráficas para redes sociales y diseños para perfiles, recibirás un Manual de Marca que te guiará en la correcta aplicación de tu identidad visual en todos tus canales de comunicación.</p>
            <p>¡Invierte en tu marca con el Menú Completo!</p>
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
          <img class="horizontal" src="diagramas/disenio-grafico.svg" alt="diagrama de diseño web">
          <img class="vertical" src="diagramas/disenio-grafico-v.svg" alt="diagrama de diseño web en vertical">
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
  styleUrl: './disenio-marca.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisenioMarcaComponent {

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
