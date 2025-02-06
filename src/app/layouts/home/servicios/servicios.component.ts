import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, PLATFORM_ID } from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ScrollAnimationServiciosDirective } from '../../../directives/ScrollAnimationServicios.directive';


@Component({
  selector: 'app-servicios',
  imports: [ScrollAnimationServiciosDirective],
  template: `
    <h1>Servicios</h1>
<header>
  <main>
    <section class="card" appScrollAnimationServicios>
      <div class="contenedor">
        <h2>Creación de contenido</h2>
        <div class="info">
          <p>It's the core of your company's identity. It guides all business decisions, ensuring a consistent and impactful presence in the market.</p>
          <p>Research & Insights, Unique Ways, Purpose, Mission, Vision, Value Proposition, Personality Traits, Verbal Identity, Naming</p>
        </div>
      </div>
      <img class="imagen" src="servicios/creacion-contenido.jpeg" alt="">
    </section>
    <section class="card" appScrollAnimationServicios>
      <div class="contenedor">
        <h2>Diseño de <br> marca</h2>
        <div class="info">
          <p>Visual identity is the unique visual language of your brand, creating memorable impressions and emotional connections with your audience.</p>
          <p>Logotype, Typography & Colour, Illustrations & 3D, Photography Art Direction, Brand Book & Guidelines, Animations, Video Production, Product Design</p>
        </div>
      </div>
      <img class="imagen" src="servicios/disenio-marca.jpeg" alt="">
    </section>
    <section class="card" appScrollAnimationServicios>
      <div class="contenedor">
        <h2>Website</h2>
        <div class="info">
          <p>Our website design services blend innovation and creativity to deliver user-centric solutions that elevate your brand and engage your audience.</p>
          <p>UX Design, User Testing, Product Prototype, Mobile UI, Software UI design, Web app design, Interaction design</p>
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
  </main>
</header>

  `,
  styleUrl: './servicios.component.css',
})
export class ServiciosComponent {

}
