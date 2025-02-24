import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, PLATFORM_ID } from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ScrollAnimationServiciosDirective } from '../../../directives/ScrollAnimationServicios.directive';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { AnimacionEntradaDirective } from '../../../directives/animacionEntrada.directive';


@Component({
  selector: 'app-servicios',
  imports: [ScrollAnimationServiciosDirective, AnimacionEntradaDirective],
  template: `
  <h1 class="t-servicios">Servicios</h1>
  <header>
    <main>
<a href="creacion-contenido" class="card" appScrollAnimationServicios>
        <div class="contenedor">
          <h2>Creación de contenido</h2>
          <div class="info">
            <p>Dale vida y personalidad a tu marca con contenido atractivo y dinámico, pensado para romperla en redes sociales. Contenido que conecta con tu audiencia y generan resultados.</p>
            <p>Grilla de contenidos <br>
            Reels, Tiktok y Shorts <br>
            Carruseles, posts y fotos <br>
            Conversiones y leads <br>
            Análisis de métricas
          </div>
        </div>
        <img appAnimacionEntrada [animacionClase]="'animacion-girar'" class="imagen" src="servicios/creacion-contenido.jpeg" alt="">
</a>
      <a href="disenio-marca" class="card" appScrollAnimationServicios>
        <div class="contenedor">
          <h2>Diseño de <br> marca</h2>
          <div class="info">
            <p>Construye una identidad visual sólida y reconocible. Con un diseño de marca que transmite la personalidad de tu negocio y te diferencia de la competencia.</p>
            <p>Análisis de marca <br>
              Logotipo, colores y tipografía <br>
              Gráficas para redes sociales <br>
              Manual de marca</p>
          </div>
        </div>
        <img  appAnimacionEntrada [animacionClase]="'animacion-girar'" class="imagen" src="servicios/disenio-marca.jpeg" alt="">
</a>
      <a href="website" class="card" appScrollAnimationServicios>
        <div class="contenedor">
          <h2>Website</h2>
          <div class="info">
            <p>Crea una página web profesional y efectiva que represente tu marca en el mundo digital. Un sitio web optimizado para atraer clientes y generar conversiones.</p>
            <p>Diseño UX <br>
              Landing Page <br>
              Integración con redes sociales <br>
              Web corporativa o Tienda en línea <br>
              Configuración avanzada de SEO <br>
              Diseño responsive</p>
          </div>
        </div>
        <img  appAnimacionEntrada [animacionClase]="'animacion-girar'" class="imagen" src="servicios/website.jpeg" alt="">
</a>
      <a href="disenio-contenido" class="card" appScrollAnimationServicios>
        <div class="contenedor">
          <h2>Pack Digital</h2>
          <div class="info"> 
            <p>Potencia tu marca con una estrategia digital completa. Desde la creación de contenido hasta el diseño de tu identidad visual y página web, todo en un solo paquete pensado para hacer crecer tu negocio en el mundo digital.</p>
            <p>Creación de contenido <br>
               Diseño de marca <br>
               Diseño web</p>
          </div>
        </div>
        <img  appAnimacionEntrada [animacionClase]="'animacion-girar'" class="imagen" src="servicios/disenio-contenido.jpeg" alt="">
</a>  
    </main>
  </header>

  `,
  styleUrl: './servicios.component.css',
  animations: [
  ]
})
export class ServiciosComponent {

}
