import { ChangeDetectionStrategy, Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navegacion',
  imports: [CommonModule, RouterModule],
  template: `
    <div class="space"></div>
    <nav>
    <a href="#">¡Hagamoslo!</a>
      <a class="titulo" href="#">Agencia de Marketing</a>
      <div class="sites" (click)="toggleMenu()">Menu</div>
      <div class="menu" [@menuAnimation]="menuAbierto ? 'visible' : 'oculto'">
        <a href="creacion-contenido">
          Creacion de contenido
        </a>
        <a href="disenio-marca">
          Diseño de marca
        </a>
        <a href="website">
          Website
        </a>
        <a href="disenio-contenido">
          Diseño & Contenido
        </a>
      </div>
    </nav>
  `,
  animations: [
    trigger('menuAnimation', [
      state('oculto', style({ opacity: 0, transform: 'scaleY(0)' })),
      state('visible', style({ opacity: 1, transform: 'scaleY(1)' })),
      transition('oculto <=> visible', animate('300ms ease-in-out')),
    ]),
  ],
  styleUrl: './navegacion.component.css',
})
export class NavegacionComponent {

  menuAbierto = false;
  
  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }

}
