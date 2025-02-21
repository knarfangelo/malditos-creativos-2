import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, PLATFORM_ID } from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ScrollAnimationDirective } from '../../../directives/ScrollAnimation.directive';

@Component({
  selector: 'app-portafolio',
  imports: [],
  template: `
<header>
<h1 class="t-1">Influencers que representamos</h1>
<h1 class="t-2">Los mejores de la industria</h1>
  <section class="contenedor">
    <a href="https://brandogallesi.malditoscreativos.com/" target="_blank" class="card-portafolio left" appScrollAnimation>
      <img src="portafolio/portafolio4.jpg" alt="imagen 4">
    </a>
  </section>
</header>
  `,
  styleUrl: './Portafolio.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortafolioComponent {

  


}
