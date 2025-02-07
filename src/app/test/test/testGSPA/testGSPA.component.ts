import { Component, AfterViewInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test-gspa',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="custom-cursor"></div>

    <div class="content">
      <h1>Haz clic derecho en cualquier parte</h1>
      <p>Este es un ejemplo avanzado de un menú de sitemap flotante con animaciones.</p>
    </div>

    <!-- Menú Sitemap -->
    <div #sitemap class="sitemap">
      <ul>
        <li><a href="#home">🏠 Home</a></li>
        <li><a href="#services">💼 Services</a></li>
        <li><a href="#portfolio">📸 Portfolio</a></li>
        <li><a href="#contact">📧 Contact</a></li>
      </ul>
    </div>
  `,
  styleUrls: ['./testGSPA.component.css'],
})
export class TestGSPAComponent implements AfterViewInit {
  @ViewChild('sitemap', { static: true }) sitemap!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const sitemapMenu = this.sitemap.nativeElement;
    const cursor = document.querySelector('.custom-cursor') as HTMLElement;

    // Ocultar el sitemap al inicio
    this.renderer.setStyle(sitemapMenu, 'opacity', '0');
    this.renderer.setStyle(sitemapMenu, 'transform', 'scale(0.8)');
    this.renderer.setStyle(sitemapMenu, 'pointer-events', 'none');

    // Evento cuando el usuario hace clic derecho
    this.renderer.listen(document, 'contextmenu', (event: MouseEvent) => {
      event.preventDefault(); // Evita el menú del navegador

      // Posicionar el sitemap donde está el cursor
      this.renderer.setStyle(sitemapMenu, 'top', `${event.clientY}px`);
      this.renderer.setStyle(sitemapMenu, 'left', `${event.clientX}px`);

      // Mostrar con animación
      this.renderer.setStyle(sitemapMenu, 'opacity', '1');
      this.renderer.setStyle(sitemapMenu, 'transform', 'scale(1)');
      this.renderer.setStyle(sitemapMenu, 'pointer-events', 'auto');
    });

    // Cerrar el sitemap cuando el usuario hace clic en cualquier otro lado
    this.renderer.listen(document, 'click', (event: MouseEvent) => {
      if (!sitemapMenu.contains(event.target as Node)) {
        this.renderer.setStyle(sitemapMenu, 'opacity', '0');
        this.renderer.setStyle(sitemapMenu, 'transform', 'scale(0.8)');
        this.renderer.setStyle(sitemapMenu, 'pointer-events', 'none');
      }
    });

    // Seguir el cursor con el círculo negro
    this.renderer.listen(document, 'mousemove', (event: MouseEvent) => {
      this.renderer.setStyle(cursor, 'top', `${event.clientY}px`);
      this.renderer.setStyle(cursor, 'left', `${event.clientX}px`);
    });
  }
}
