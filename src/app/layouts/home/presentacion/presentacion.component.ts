import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-presentacion',
  imports: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <header>
      <main>
        <p><strong>Factos</strong> {{ page }}/04</p>
        <h2>{{ numero }}+</h2>
        <swiper-container #swiperFactos init="false">
          <swiper-slide>
            <p>empresas que hemos ayudado a crecer en menos de 1 año</p>
          </swiper-slide>
          <swiper-slide>
            <p>(más de 2 millones de vistas) hemos logrado millones de reproducciones con nuestro contenido</p>
          </swiper-slide>
          <swiper-slide>
            <p>marcas personales e influencers que trabajan con nosotros</p>
          </swiper-slide>
          <swiper-slide>
            <p>paginas web realizadas</p>
          </swiper-slide>
        </swiper-container>
        <section class="buttons">
          <button #prevBtn (click)="prevSlide()"><img class="left" src="icons/flechaSwiper.svg" alt=""></button>
          <button #nextBtn (click)="nextSlide()"><img src="icons/flechaSwiper.svg" alt=""></button>
        </section>
      </main>      
      <video class="video" autoplay muted loop src="presentation/Presentation.webm"></video>
    </header>
  `,
  styleUrl: './presentacion.component.css',
})
export class PresentacionComponent {
  numero: number = 40; // Número inicial
  pageNumbers: string[] = ["01", "02", "03", "04"]; // Páginas
  page: string = this.pageNumbers[0]; // Página actual
  numerosSlides: number[] = [40, 20, 15, 50]; // Valores para cada slide
  swiperInstance: any;

  @ViewChild("swiperFactos") swiperFactos!: ElementRef;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdRef: ChangeDetectorRef // Forzar detección de cambios
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      gsap.registerPlugin(ScrollTrigger);
      register();

      gsap.to(".video", {
        x: "0",
        y: "0",
        scale: 1.0,
        duration: 3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".video",
          start: "top center",
          end: "350% center",
          scrub: true,
          markers: false,
        },
      });

      // Configuración de Swiper
      const swiperParams: SwiperOptions = {
        slidesPerView: 1,
      };

      Object.assign(this.swiperFactos.nativeElement, swiperParams);
      this.swiperFactos.nativeElement.initialize();

      // Esperamos a que Swiper se inicialice antes de asignar eventos
      setTimeout(() => {
        this.swiperInstance = this.swiperFactos.nativeElement.swiper;
        this.swiperInstance.on('slideChange', () => this.cambiarNumero());
      }, 100);
    }
  }

  cambiarNumero() {
    const activeIndex = this.swiperInstance.activeIndex; // Obtiene el índice del slide activo
    this.numero = this.numerosSlides[activeIndex] || 0; // Asigna el número correspondiente
    this.page = this.pageNumbers[activeIndex] || "01"; // Actualiza la página
    this.cdRef.detectChanges(); // 🔥 Forzar detección de cambios
  }

  prevSlide() {
    if (this.swiperInstance) {
      this.swiperInstance.slidePrev(); // ⬅ Mover al slide anterior
    }
  }

  nextSlide() {
    if (this.swiperInstance) {
      this.swiperInstance.slideNext(); // ➡ Mover al siguiente slide
    }
  }
}
