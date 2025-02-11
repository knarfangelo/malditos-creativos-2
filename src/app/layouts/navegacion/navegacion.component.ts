import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-navegacion',
  imports: [],
  template: `
    <nav>
      <a href="" class="vamos">Let's work<div class="cerebrito">
        <img src="icons/cerebrito.svg" alt="">
      </div></a>
      <a href="">Agencia de Marketing</a>      
      <a href="" class="sitemap" (mouseenter)="toggleMenu(true)" 
      (mouseleave)="toggleMenu(false)" ><span class="menu">Menu</span>
      <img src="icons/flecha.svg" alt="flechaMC">
      </a>      
    </nav>
  `,
  animations:[],
  styleUrl: './navegacion.component.css',
})
export class NavegacionComponent {

  mostrarMenu = false; 

  toggleMenu(estado: boolean) {
    this.mostrarMenu = estado;
  }

}
