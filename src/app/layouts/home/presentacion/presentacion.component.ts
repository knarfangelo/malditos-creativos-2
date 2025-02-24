import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-presentacion',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <header>
      <main>
        <p class="t-1"><strong>Factos</strong> {{ page }}/04</p>
        <h2>+{{ esSegundoSlide ? numero + 'M' : numero }}</h2>
        <swiper-container #swiperFactos init="false">
          <swiper-slide>
            <p>Empresas que hemos ayudado a crecer en menos de 1 año</p>
          </swiper-slide>
          <swiper-slide>
            <p>Hemos logrado millones de reproducciones con nuestro contenido</p>
          </swiper-slide>
          <swiper-slide>
            <p>Marcas personales e influencers que trabajan con nosotros</p>
          </swiper-slide>
          <swiper-slide>
            <p>Páginas web realizadas</p>
          </swiper-slide>
        </swiper-container>
        <section class="buttons">
          <button #prevBtn (click)="prevSlide()">
            <img class="left" src="icons/flechaSwiper.svg" alt="">
            <div class="progress-border" #progressPrev></div>
          </button>
          <button #nextBtn (click)="nextSlide()">
            <img src="icons/flechaSwiper.svg" alt="">
            <div class="progress-border" #progressNext></div>
          </button>
        </section>
      </main>
      <video class="video" autoplay muted loop src="presentation/Presentation.webm"></video>
    </header>
  `,
  styleUrl: './presentacion.component.css',
})
export class PresentacionComponent {
  numero: number = 40;
  pageNumbers: string[] = ["01", "02", "03", "04"];
  page: string = this.pageNumbers[0];
  numerosSlides: number[] = [40, 2, 15, 50];
  swiperInstance: any;
  esSegundoSlide: boolean = false;

  @ViewChild("swiperFactos") swiperFactos!: ElementRef;
  @ViewChild("progressPrev") progressPrev!: ElementRef;
  @ViewChild("progressNext") progressNext!: ElementRef;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      register();
      gsap.registerPlugin(ScrollTrigger);
      const mm = gsap.matchMedia();
  
      mm.add("(min-width: 1024px)", () => {
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
      });
  
      mm.add("(max-width: 1023px)", () => {
        if (ScrollTrigger.getAll().length > 0) {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        }
      });
  
      const swiperParams: SwiperOptions = {
        slidesPerView: 1,
        loop: true,
        autoplay: {
          delay: 6000,
          disableOnInteraction: false,
        },
      };
  
      Object.assign(this.swiperFactos.nativeElement, swiperParams);
      this.swiperFactos.nativeElement.initialize();
  
      setTimeout(() => {
        this.swiperInstance = this.swiperFactos.nativeElement.swiper;
        this.swiperInstance.on('slideChange', () => this.cambiarNumero());
        this.iniciarCargaBorde();
      }, 100);
  
      this.forzarReproduccionVideo();
    }
  }
  
  forzarReproduccionVideo() {
    const video = document.querySelector(".video") as HTMLVideoElement;
    if (video) {
      video.setAttribute("playsinline", "true");
      video.setAttribute("webkit-playsinline", "true");
  
      const intentarReproducir = (intentos: number = 10) => {
        if (intentos <= 0) return;
        video.play().catch(() => {
          console.warn(`Intento de reproducción fallido, reintentando... (${10 - intentos + 1})`);
          setTimeout(() => intentarReproducir(intentos - 1), 500);
        });
      };
  
      intentarReproducir();
    }
  }

  cambiarNumero() {
    const activeIndex = this.swiperInstance.realIndex;
    const targetNumber = this.numerosSlides[activeIndex] || 0;
    this.page = this.pageNumbers[activeIndex] || "01";
    this.esSegundoSlide = activeIndex === 1;
  
    gsap.fromTo(this, { numero: 0 }, { 
      numero: targetNumber, 
      duration: 1.0, 
      roundProps: "numero", 
      ease: "power2.out", 
      onUpdate: () => this.cdRef.detectChanges() 
    });
  
    this.iniciarCargaBorde();
  }

  prevSlide() {
    if (this.swiperInstance) {
      this.swiperInstance.slidePrev();
      this.iniciarCargaBorde();
    }
  }

  nextSlide() {
    if (this.swiperInstance) {
      this.swiperInstance.slideNext();
      this.iniciarCargaBorde();
    }
  }

  iniciarCargaBorde() {
    gsap.killTweensOf([this.progressPrev.nativeElement, this.progressNext.nativeElement]);
    gsap.set([this.progressPrev.nativeElement, this.progressNext.nativeElement], { width: '0%' });
    gsap.to([this.progressPrev.nativeElement, this.progressNext.nativeElement], {
      width: '100%',
      duration: 4,
      ease: 'linear',
      onComplete: () => {
        if (this.swiperInstance) {
          this.swiperInstance.slideNext();
          this.iniciarCargaBorde();
        }
      },
    });
  }
}
