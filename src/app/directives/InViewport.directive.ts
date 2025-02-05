import { Directive, ElementRef, Output, EventEmitter, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appInViewport]'
})
export class InViewportDirective implements AfterViewInit, OnDestroy {
  @Output() inViewport = new EventEmitter<boolean>();
  private observer!: IntersectionObserver;

  constructor(private el: ElementRef, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {  // Verifica que esté en el navegador
      this.observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const bounding = this.el.nativeElement.getBoundingClientRect();
            const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
            const middleOfViewport = viewportHeight / 2;

            // Calcula si el centro del elemento está dentro del rango del centro del viewport
            const elementCenter = bounding.top + bounding.height / 2;
            const isCentered = Math.abs(elementCenter - middleOfViewport) < bounding.height / 4;

            this.inViewport.emit(isCentered);
          }
        },
        { threshold: [0] } // Cambié a 0 para reaccionar tan pronto como se muestre cualquier parte del elemento
      );

      this.observer.observe(this.el.nativeElement);
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
