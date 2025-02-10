import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, Inject, PLATFORM_ID } from '@angular/core';
import { register } from 'swiper/element';
import { FooterComponent } from "../../layouts/footer/footer.component";

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
              <li>Diseño profesional de una Landing Page</li>
              <li>Integración con redes sociales.</li>
              <li>Mapa de ubicación (Google Maps).</li>
              <li>Diseño responsive optimizado para carga rápida</li>
              <li>Hosting por un año</li>
              <li>Configuración básica de SEO.</li>
            </ul>
            <div class="numero">
              01
            </div>
          </div>
          <div class="plan-2">
            <h1>El menú completo</h1>
            <ul>
              <li>Todo lo incluido en "La entradita".</li>
              <li>Sitio web de HASTA 5 páginas (Inicio, Servicios, Nosotros, Blog, Contacto).</li>
              <li>Blog con capacidad para publicar artículos y galería de fotos.</li>
              <li>Formulario de contacto dinámico (especificar qué lo hace "dinámico").</li>
              <li>Fashion, Consumer Goods, Green Tech, Fintech, Industry 4.0</li>
            </ul>
            <div class="numero">
              02
            </div>
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
  styleUrl: './creacion-contenido.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreacionContenidoComponent {

    constructor(
      @Inject(PLATFORM_ID) private platformId: Object,
    ) {}

    ngAfterViewInit() {
      if (isPlatformBrowser(this.platformId)) {
        register();
      }
    }



}
