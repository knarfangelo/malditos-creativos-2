import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, PLATFORM_ID } from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ScrollAnimationDirective } from '../../../directives/ScrollAnimation.directive';

@Component({
  selector: 'app-portafolio',
  imports: [ScrollAnimationDirective],
  template: `
<header>
<h1 class="t-1">Influencers que representamos</h1>
<h1 class="t-2">Los mejores de la industria</h1>
  <section class="contenedor">
    <div class="card-portafolio" appScrollAnimation>
      <img src="portafolio/portafolio1.jpg" alt="imagen 1">
      <p>Teatros y musicales</p>
    </div>
    <div class="card-portafolio left" appScrollAnimation>
      <img src="portafolio/portafolio2.jpg" alt="imagen 2">
      <p>Series y novelas</p>
    </div>
    <div class="card-portafolio" appScrollAnimation>
      <img src="portafolio/portafolio3.jpg" alt="imagen 3">
      <p>Películas</p>
    </div>
    <div class="card-portafolio left" appScrollAnimation>
      <img src="portafolio/portafolio4.jpg" alt="imagen 4">
      <p>Televisión en vivo
      </p>
    </div>
  </section>
</header>
  `,
  styleUrl: './Portafolio.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortafolioComponent {


}
