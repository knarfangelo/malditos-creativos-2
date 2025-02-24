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
            <video class="v-phone" hidden muted loop playsinline autoplay src="presentation/Brando.mp4"></video>
          </div>
          <div class="caja" #caja2>
            <h1>Jaime</h1>     
            <p>El Presi, <strong>Founder</strong></p> 
            <video class="v-phone" hidden muted loop playsinline autoplay src="presentation/Jaime.mp4"></video>
          </div>
          <div class="caja" #caja3>
            <h1>Thais</h1>            
            <p>La pulpo, <strong>Project Manager</strong></p>
            <video class="v-phone" hidden muted loop playsinline autoplay src="presentation/Thais.mp4"></video>
          </div>
          <div class="caja" #caja4>
            <h1>Brandon</h1>
            <p>Mago del Vector, <strong>Graphic Designs</strong></p>
            <video class="v-phone" hidden muted loop playsinline autoplay src="presentation/Brandon.mp4"></video>
          </div>
          <div class="caja" #caja5>
            <h1>Richy</h1>
            <p>Tarantino,<strong>Audio Visual Producer</strong></p>
            <video class="v-phone" hidden muted loop playsinline autoplay src="presentation/Richy.mp4"></video>
          </div>
          <div class="caja" #caja6>
            <h1>Fatima</h1>
            <p>Mucho Texto,<strong>Social Media Manager</strong></p>
            <video class="v-phone" hidden muted loop playsinline autoplay src="presentation/Fatima.mp4"></video>
          </div>
          <div class="caja" #caja7>
            <h1>Sergio</h1>
            <p>Lobo de la computación,<strong>Head of It</strong> </p>
            <video class="v-phone" hidden muted loop playsinline autoplay src="presentation/Sergio.mp4"></video>
          </div>
          <div class="caja" #caja8>
            <h1>Frank</h1>
            <p>Loco Angular, <strong>Full Stack</strong> </p>
            <video class="v-phone" hidden muted loop playsinline autoplay src="presentation/Frank.mp4"></video>
          </div>
          <div class="caja" #caja9>
            <h1>Luis</h1>
            <p>Codigo Locos, <strong>Senior Developer</strong></p>
            <video class="v-phone" hidden muted loop playsinline autoplay src="presentation/Luis.mp4"></video>
          </div>
        </section>
      </header>
      <section class="videos" #videosSection style="display: none;">
        <video #video1 playsinline hidden muted loop autoplay src="presentation/Brando.mp4"></video>
        <video #video2 playsinline hidden muted loop autoplay src="presentation/Jaime.mp4"></video>
        <video #video3 playsinline hidden muted loop autoplay src="presentation/Thais.mp4"></video>
        <video #video4 playsinline hidden muted loop autoplay src="presentation/Brandon.mp4"></video>
        <video #video5 playsinline hidden muted loop autoplay src="presentation/Richy.mp4"></video>
        <video #video6 playsinline hidden muted loop autoplay src="presentation/Fatima.mp4"></video>
        <video #video7 playsinline hidden muted loop autoplay src="presentation/Sergio.mp4"></video>
        <video #video8 playsinline hidden muted loop autoplay src="presentation/Frank.mp4"></video>
        <video #video9 playsinline hidden muted loop autoplay src="presentation/Luis.mp4"></video>
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
  
      this.videos.forEach(video => {
        video.setAttribute('playsinline', 'true');
        video.setAttribute('webkit-playsinline', 'true');
  
        video.addEventListener('ended', () => {
          video.currentTime = 0; // Reinicia el video al finalizar
          video.play().catch(() => console.warn("Reproducción bloqueada"));
        });
      });
  
      const cajas = document.querySelectorAll('.caja');
  
      ScrollTrigger.create({
        trigger: this.headerElement.nativeElement,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => this.showVideos(),
        onLeave: () => this.hideVideos(),
        onEnterBack: () => this.showVideos(),
        onLeaveBack: () => this.hideVideos(),
        markers: false
      });
  
      cajas.forEach((caja, index) => {
        gsap.to(caja, {
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
        });
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
  
    const intentarReproducir = (video: HTMLVideoElement, intentos: number = 10) => {
      if (intentos <= 0) return;
  
      video.play().then(() => {
        console.log("Video reproduciéndose correctamente");
      }).catch(() => {
        console.warn(`Intento fallido ${10 - intentos + 1}, reintentando...`);
        setTimeout(() => intentarReproducir(video, intentos - 1), 500);
      });
    };
  
    intentarReproducir(this.activeVideo);
  
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
