import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-nosotros',
  template: `
      <header #headerElement>
        <section class="contenedor">
          <div class="caja" #caja1>
            <h1>Brando</h1>
            <p>La Estrella, <strong>Founder</strong></p>
          </div>
          <div class="caja" #caja2>
            <h1>Jaime</h1>     
            <p>El Presi, <strong>Founder</strong></p> 
          </div>
          <div class="caja" #caja3>
            <h1>Thais</h1>            
            <p>La pulpo, <strong>Project Manager</strong></p>
          </div>
          <div class="caja" #caja4>
            <h1>Brandon</h1>
            <p>Mago del Vector, <strong>Graphic Designs</strong></p>     
          </div>
          <div class="caja" #caja5>
            <h1>Richy</h1>
            <p>Tarantino,<strong>Audio Visual Producer</strong></p>
          </div>
          <div class="caja" #caja6>
            <h1>Fatima</h1>
            <p>Head of Copies,<strong>Social Media Manager</strong></p>
          </div>
          <div class="caja" #caja7>
            <h1>Sergio</h1>
            <p>Lobo de la computación,<strong>Head of It</strong> </p>
          </div>
          <div class="caja" #caja8>
            <h1>Frank</h1>
            <p>Loco Angular, stron Full Stack</p>
          </div>
          <div class="caja" #caja9>
            <h1>Luis</h1>
            <p>Hard Code, <strong>Senior Developer</strong></p>
          </div>
        </section>
      </header>

      <section class="videos" #videosSection style="display: none;">
        <video #video1 hidden muted loop autoplay src="presentation/Brando.mp4"></video>
        <video #video2 hidden muted loop autoplay src="presentation/Jaime.mp4"></video>
        <video #video3 hidden muted loop autoplay src="presentation/Thais.mp4"></video>
        <video #video4 hidden muted loop autoplay src="presentation/Brandon.mp4"></video>
        <video #video5 hidden muted loop autoplay src="presentation/Richy.mp4"></video>
        <video #video6 hidden muted loop autoplay src="presentation/Fatima.mp4"></video>
        <video #video7 hidden muted loop autoplay src="presentation/Sergio.mp4"></video>
        <video #video8 hidden muted loop autoplay src="presentation/Frank.mp4"></video>
        <video #video9 hidden muted loop autoplay src="presentation/Luis.mp4"></video>
      </section>
  `,
  styleUrls: ['./nosotros.component.css'],
})
export class NosotrosComponent {

  @ViewChild('video1') video1!: ElementRef;
  @ViewChild('video2') video2!: ElementRef;
  @ViewChild('video3') video3!: ElementRef;
  @ViewChild('video4') video4!: ElementRef;
  @ViewChild('video5') video5!: ElementRef;
  @ViewChild('video6') video6!: ElementRef;
  @ViewChild('video7') video7!: ElementRef;
  @ViewChild('video8') video8!: ElementRef;
  @ViewChild('video9') video9!: ElementRef;
  @ViewChild('videosSection') videosSection!: ElementRef;
  @ViewChild('headerElement') headerElement!: ElementRef;

  private videos: HTMLVideoElement[] = [];
  private activeVideo: HTMLVideoElement | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      gsap.registerPlugin(ScrollTrigger);

      this.videos = [
        this.video1.nativeElement, this.video2.nativeElement, this.video3.nativeElement,
        this.video4.nativeElement, this.video5.nativeElement, this.video6.nativeElement,
        this.video7.nativeElement, this.video8.nativeElement, this.video9.nativeElement
      ];

      const cajas = document.querySelectorAll('.caja');

      // Sección de videos aparece cuando el header entra en el viewport
      ScrollTrigger.create({
        trigger: this.headerElement.nativeElement,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => this.showVideos(),
        onLeave: () => this.hideVideos(),
        onEnterBack: () => this.showVideos(),
        onLeaveBack: () => this.hideVideos(),
      });

      cajas.forEach((caja, index) => {
        gsap.to(
          caja,
          { 
            scrollTrigger: {
              trigger: caja,
              start: "top 50%",
              end: "bottom 50%",
              scrub: true,
              onEnter: () => this.onCajaInCenter(index),
              onEnterBack: () => this.onCajaInCenter(index),
              onLeave: () => this.onCajaOutOfView(index),
              onLeaveBack: () => this.onCajaOutOfView(index),
            },
          }
        );
      });
    }
  }

  showVideos() {
    this.videosSection.nativeElement.style.display = 'block';
  }

  hideVideos() {
    this.videosSection.nativeElement.style.display = 'none';
  }

  onCajaInCenter(index: number) {
    if (this.activeVideo) {
      this.activeVideo.hidden = true;
      this.activeVideo.pause();
    }
    this.activeVideo = this.videos[index];
    this.activeVideo.hidden = false;
    this.activeVideo.play();

    const cajas = document.querySelectorAll('.caja');
    cajas[index].classList.add('active');
  }

  onCajaOutOfView(index: number) {
    if (this.videos[index] === this.activeVideo) {
      this.activeVideo.hidden = true;
      this.activeVideo.pause();
      this.activeVideo = null;
    }

    const cajas = document.querySelectorAll('.caja');
    cajas[index].classList.remove('active');
  }
}
