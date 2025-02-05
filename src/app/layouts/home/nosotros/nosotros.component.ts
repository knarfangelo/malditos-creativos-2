import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { InViewportDirective } from '../../../directives/InViewport.directive';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-nosotros',
  imports: [],
  schemas: [],
  template: `

  <header>
    <section class="nombres">
      <h3>Our formula: a global perspective
      </h3>
    <div class="card" #card>
    <h1>Brando Gallesi</h1>
    <p>Co-founder & Art Director, Having his good taste is a blessing and a burden</p>
    </div>
    <div class="card">
    <h1>Jaime Ganoza</h1>
    <p>Co-founder & Art Director, Having his good taste is a blessing and a burden</p>
    </div>
    <div class="card">
    <h1>Thais</h1>
    <p>Co-founder & Art Director, Having his good taste is a blessing and a burden</p>
    </div>
    <div class="card">
    <h1>Fatima</h1>
    <p>Co-founder & Art Director, Having his good taste is a blessing and a burden</p>
    </div>
    <div class="card">
    <h1>Sergio</h1>
    <p>Co-founder & Art Director, Having his good taste is a blessing and a burden</p>
    </div>
    <div class="card">
    <h1>Brando</h1>
    <p>Co-founder & Art Director, Having his good taste is a blessing and a burden</p>
    </div>
    <div class="card">
    <h1>Frank</h1>
    <p>Co-founder & Art Director, Havig his good taste is a blessing and a burden</p>
    </div>
    </section>
    <section class="video">
      <video muted autoplay loop src="presentation/Brando.mp4"></video>
      <video muted autoplay loop src="presentation/Jaime.mp4"></video>
      <video muted autoplay loop src="presentation/Thais.mp4"></video>
      <video muted autoplay loop src="presentation/Fatima.mp4"></video>
      <video muted autoplay loop src="presentation/Sergio.mp4"></video>
      <video muted autoplay loop src="presentation/Brandon.mp4"></video>
      <video muted autoplay loop src="presentation/Frank.mp4"></video>
    </section>
  </header>
  `,
  styleUrl: './nosotros.component.css',
})
export class NosotrosComponent{

  @ViewChild('card', { static: false }) card!: ElementRef;
  private observer!: IntersectionObserver;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    console.log("Hola Mundo");
    if (isPlatformBrowser(this.platformId)) {  // Verifica que esté en el navegador
      const cardElement = this.card.nativeElement;

      this.observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const bounding = cardElement.getBoundingClientRect();
            const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
            const middleOfViewport = viewportHeight / 2;

            // Calcula el centro del elemento
            const elementCenter = bounding.top + bounding.height / 2;

            // Verifica si el centro del elemento está dentro de un rango cerca del centro del viewport
            const isCentered = Math.abs(elementCenter - middleOfViewport) < bounding.height / 3;

            if (isCentered) {
              console.log('💡 El elemento está en el centro del viewport');
              // Aquí puedes ejecutar cualquier acción adicional
            }
          }
        },
        {
          root: null, // Se observa en relación al viewport
          threshold: [0] // Activar cuando el elemento entre en el viewport
        }
      );

      this.observer.observe(cardElement);
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
