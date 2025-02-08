import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, PLATFORM_ID } from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ScrollAnimationServiciosDirective } from '../../../directives/ScrollAnimationServicios.directive';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-servicios',
  imports: [ScrollAnimationServiciosDirective],
  template: `
  <h1>Servicios</h1>
  <header [@letterAnimation]>
    <main>
      <section class="card" appScrollAnimationServicios>
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
        <img class="imagen" src="servicios/creacion-contenido.jpeg" alt="">
      </section>
      <section class="card" appScrollAnimationServicios>
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
        <img class="imagen" src="servicios/disenio-marca.jpeg" alt="">
      </section>
      <section class="card" appScrollAnimationServicios>
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
        <img class="imagen" src="servicios/website.jpeg" alt="">
      </section>
      <section class="card" appScrollAnimationServicios>
        <div class="contenedor">
          <h2>Diseño & <br> Contenido</h2>
          <div class="info">
            <p>Our product design services focus on creating intuitive and aesthetically pleasing products that resonate with your audience and stand out in the market.</p>
            <p>UX Design, User Testing, Product Prototype, Mobile UI, Software UI design, Web app design, Interaction design</p>
          </div>
        </div>
        <img class="imagen" src="servicios/disenio-contenido.jpeg" alt="">
      </section>
      <section class="card" appScrollAnimationServicios>
        <div class="contenedor">
          <h2>Stream & <br> Podcast</h2>
          <div class="info">
            <p>Conecta con tu audiencia a través del audio y video en directo. Comparte tu mensaje, crea una comunidad y amplía tu alcance con transmisiones profesionales.</p>
            <p>Grabaciones <br>
              Equipo profesional (cámara, micrófono, luces) <br>
              Guiones y grilla de grabación <br></p>
          </div>
        </div>
        <img class="imagen" src="servicios/disenio-contenido.jpeg" alt="">
      </section>
    </main>
  </header>

  `,
  styleUrl: './servicios.component.css',
  animations: [
    trigger('letterAnimation', [
      transition(':enter', [
        query('h1, p, span', [
          style({ transform: 'translateY(100%)', opacity: 0 }),
          stagger(100, [
            animate('500ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
          ])
        ])
      ])
    ])
  ]
})
export class ServiciosComponent {

}
