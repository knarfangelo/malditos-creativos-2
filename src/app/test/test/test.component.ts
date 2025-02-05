import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, AfterViewInit, Inject, PLATFORM_ID, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-test',
  template: `
  <div class="space"></div>
  <section class="contenedor">
    <div class="caja" #caja1>CAJA 1</div>
    <div class="caja" #caja2>CAJA 2</div>
    <div class="caja" #caja3>CAJA 3</div>
    <div class="caja" #caja4>CAJA 4</div>
  </section>
  <section class="video">
    <video #video1 hidden muted loop autoplay src="presentation/Richy.mp4"></video>
    <video #video2 hidden muted loop autoplay src="presentation/Fatima.mp4"></video>
    <video #video3 hidden muted loop autoplay src="presentation/Jaime.mp4"></video>
    <video #video4 hidden muted loop autoplay src="presentation/Brando.mp4"></video>
  </section>
  <div class="space"></div>
  `,
  styleUrls: ['./test.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponent implements AfterViewInit {

  @ViewChild('video1') video1!: ElementRef;
  @ViewChild('video2') video2!: ElementRef;
  @ViewChild('video3') video3!: ElementRef;
  @ViewChild('video4') video4!: ElementRef;

  private videos: HTMLVideoElement[] = [];
  private activeVideo: HTMLVideoElement | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      gsap.registerPlugin(ScrollTrigger);

      this.videos = [this.video1.nativeElement, this.video2.nativeElement, this.video3.nativeElement, this.video4.nativeElement];
      const cajas = document.querySelectorAll('.caja');

      cajas.forEach((caja, index) => {
        gsap.fromTo(
          caja,
          { opacity: 0, y: 0 },
          { 
            opacity: 1, y: 0,
            scrollTrigger: {
              markers: true,
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

  onCajaInCenter(index: number) {
    if (this.activeVideo) {
      this.activeVideo.hidden = true;
      this.activeVideo.pause();
    }
    this.activeVideo = this.videos[index];
    this.activeVideo.hidden = false;
    this.activeVideo.play();
  }

  onCajaOutOfView(index: number) {
    if (this.videos[index] === this.activeVideo) {
      this.activeVideo.hidden = true;
      this.activeVideo.pause();
      this.activeVideo = null;
    }
  }
}
