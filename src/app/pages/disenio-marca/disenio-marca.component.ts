import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { FooterComponent } from '../../layouts/footer/footer.component';
import { NavegacionComponent } from '../../layouts/navegacion/navegacion.component';
import { isPlatformBrowser } from '@angular/common';
import { register } from 'swiper/element';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { FormularioService } from '../../services/Formulario.service';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-disenio-marca',
  imports:[FooterComponent, NavegacionComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `  
  <header>
    <app-navegacion></app-navegacion>
        <section class="panel-inicial">
        <h1 class="titulo">DISEÑO DE MARCA</h1>
        </section>
        <section class="planes">
          <div class="plan-1">
            <h1>La Entradita</h1>
            <h2>
            ¡Dale identidad a tu marca sin gastar una fortuna!
            </h2>
            <p> Con "La Entradita", obtén un paquete de diseño gráfico esencial para comenzar a construir tu imagen de marca. Logotipo, paleta de colores, tipografías y gráficas para redes sociales, todo lo que necesitas para dar una primera impresión profesional.</p>
            <p>¡Consigue tu Entradita de Diseño Gráfico!</p>
            <h3 class="numero">
              01
            </h3>
            <button class="btn-form" (click)="abrirFormulario()">¡Pide tu cotización!</button>

          </div>
          <div class="plan-2">
            <h1>El Menú Completo</h1>
            <h2>¡Branding profesional con Manual de Marca incluido!</h2>
            <p>"El Menú Completo" te ofrece una solución integral de branding para consolidar tu imagen de marca.  Además de un logotipo impactante, gráficas para redes sociales y diseños para perfiles, recibirás un Manual de Marca que te guiará en la correcta aplicación de tu identidad visual en todos tus canales de comunicación.</p>
            <p>¡Invierte en tu marca con el Menú Completo!</p>
            <h3 class="numero">
              02
            </h3>
            <button class="btn-form" (click)="abrirFormulario()">¡Pide tu cotización!</button>

          </div>
        </section>
       
        <section class="diagrama">
          <h1>Así diseñaremos tu marca</h1>
          <img class="horizontal" src="diagramas/disenio-grafico.svg" alt="diagrama de diseño web">
          <img class="vertical" src="diagramas/disenio-grafico-v.svg" alt="diagrama de diseño web en vertical">
        </section>
        <section class="empresas-aliadas">
          <h1>Empresas aliadas:</h1>
          <div class="empresas">
            <img src="empresas/bimbo.svg" alt="bimbo">
            <img src="empresas/inca-kola.svg" alt="inca kola">
            <img src="empresas/mercado-libre.svg" alt="mercado libre">
            <img src="empresas/nike.svg" alt="nike">
            <img src="empresas/samsung.svg" alt="samsung">
            <img src="empresas/1-speed-demons.webp" alt="speed demons">
            <img src="empresas/3-olva.webp" alt="olva">
            <img src="empresas/4-saludpol.webp" alt="saludpol">
            <img src="empresas/5-reed.webp" alt="reed">
            <img src="empresas/6-edicom.webp" alt="edicom">
            <img src="empresas/7-edupan.webp" alt="edupan">
            <img src="empresas/8-valle-del-cauca.webp" alt="edupan">
            <img src="empresas/9-santiago.webp" alt="santiago">
            <img src="empresas/10-jrm.webp" alt="jrm soluciones integrales de almacenamiento">
            <img src="empresas/12-claro.webp" alt="claro">
            <img src="empresas/13-css-panama.webp" alt="panama">
            <img src="empresas/14-jmt.webp" alt="jmt">
            <img src="empresas/15-intercorp.webp" alt="jmt">
            <img src="empresas/16-cesar-vallejo.webp" alt="cesar vallejo">
          </div>
        </section>
          <app-footer></app-footer>
      </header>
    
    
    `,
    styleUrl: './disenio-marca.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class DisenioMarcaComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private el: ElementRef, private formularioService:FormularioService) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      register();
      const elements = this.el.nativeElement.querySelectorAll('h1, h2, h3, p, a, .horizontal, .vertical');

      elements.forEach((element: HTMLElement) => {
        gsap.to(element, {
          clipPath: "inset(0 0 0 0)", // Hace visible el texto
          duration: 0.1, // Duración de la animación
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%", // Activa cuando el elemento entra al 80% del viewport
            toggleActions: "play none none none", // Solo se ejecuta una vez
          }
        });
      });
    }
  }

  abrirFormulario() {
    this.formularioService.abrirFormulario();
  }


  }
