import { Directive, ElementRef, Renderer2, Inject, PLATFORM_ID, Input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: 'h1, h2, p, a, [appAnimacionEntrada]', // Se aplica a estos elementos y a elementos con [appAnimacionEntrada]
})
export class AnimacionEntradaDirective {
  @Input() animacionClase: string | null = null; // Clase personalizada opcional

  private observer: IntersectionObserver | null = null;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.inicializarObservador();
    }
  }

  private inicializarObservador() {
    if (this.animacionClase) {
      // Si hay una animación personalizada, se usa esa
      this.renderer.addClass(this.el.nativeElement, this.animacionClase + '-inicial'); // Aplica estado inicial de la animación personalizada
    } else {
      // Si no, se usa la animación predeterminada
      this.renderer.addClass(this.el.nativeElement, 'animacion-entrada');
    }

    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (this.animacionClase) {
            this.renderer.removeClass(this.el.nativeElement, this.animacionClase + '-inicial'); // Quita el estado inicial
            this.renderer.addClass(this.el.nativeElement, this.animacionClase); // Aplica la animación personalizada
          } else {
            this.renderer.addClass(this.el.nativeElement, 'animacion-activa'); // Aplica la animación predeterminada
          }
        } else {
          if (this.animacionClase) {
            this.renderer.addClass(this.el.nativeElement, this.animacionClase + '-inicial'); // Vuelve al estado inicial
            this.renderer.removeClass(this.el.nativeElement, this.animacionClase);
          } else {
            this.renderer.removeClass(this.el.nativeElement, 'animacion-activa');
          }
        }
      });
    }, { threshold: 0.2 });

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
