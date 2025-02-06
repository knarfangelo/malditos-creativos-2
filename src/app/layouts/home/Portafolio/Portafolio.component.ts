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
  <h1>Europe's most aspiring</h1>
  <h2>startups & scaleups</h2>
  <section class="contenedor">
    <div class="card-portafolio" appScrollAnimation>
      <img src="portafolio/img1.jpeg" alt="imagen 1">
      <p>Rudy Capital | Turning crypto complexity into clarity</p>
      <p>Strategy - Visual Identity - Website</p>
    </div>
    <div class="card-portafolio left" appScrollAnimation>
      <img src="portafolio/img2.jpeg" alt="imagen 2">
      <p>Rudy Capital | Turning crypto complexity into clarity</p>
      <p>Strategy - Visual Identity - Website</p>
    </div>
    <div class="card-portafolio" appScrollAnimation>
      <img src="portafolio/img3.jpeg" alt="imagen 3">
      <p>Rudy Capital | Turning crypto complexity into clarity</p>
      <p>Strategy - Visual Identity - Website</p>
    </div>
    <div class="card-portafolio left" appScrollAnimation>
      <img src="portafolio/img4.jpeg" alt="imagen 4">
      <p>Rudy Capital | Turning crypto complexity into clarity</p>
      <p>Strategy - Visual Identity - Website</p>
    </div>
    <div class="card-portafolio" appScrollAnimation>
      <img src="portafolio/img5.jpeg" alt="imagen 5">
      <p>Rudy Capital | Turning crypto complexity into clarity</p>
      <p>Strategy - Visual Identity - Website</p>
    </div>
    <div class="card-portafolio left" appScrollAnimation>
      <img src="portafolio/img6.png" alt="imagen 6">
      <p>Rudy Capital | Turning crypto complexity into clarity</p>
      <p>Strategy - Visual Identity - Website</p>
    </div>
  </section>
</header>
  `,
  styleUrl: './Portafolio.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortafolioComponent {


}
