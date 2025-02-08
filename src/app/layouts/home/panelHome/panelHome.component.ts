import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, PLATFORM_ID } from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-panel-home',
  imports: [],
  template: `
    <header>
      <main>
      <h1 class="elemento">Malditos</h1>
        <img class="logo" src="icons/logo.svg" alt="">
      <h1 class="elemento2">Creativos</h1>
      <section class="parrafo">
        <h3>No somos los primeros haciendo esto</h3>
        <h3>Pero somos los mejores</h3>
      </section>
      </main>
    </header>
  `,
  styleUrl: './panelHome.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelHomeComponent {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      gsap.registerPlugin(ScrollTrigger); 

      
          gsap.to(".logo", {
            rotation: 360, // Rota el logo completamente
            scale: 1, // Aumenta su tamaño 1.5x
            duration: 3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: "#logo",
              start: "top top", // Inicia cuando el logo toca la parte superior
              end: "bottom 50%", // Termina cuando el logo llegue al 50% de la pantalla
              scrub: true // Hace que la animación sea suave y ligada al scroll
            }
            });
      }
  }


}
