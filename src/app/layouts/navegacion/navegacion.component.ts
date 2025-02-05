import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-navegacion',
  imports: [],
  template: `
  <div class="space"></div>
    <nav>
      <a href="">Let's work</a>
      <a href="">Agencia de Marketing</a>      
      <a href=""><span class="menu">Menu</span><img src="icons/flecha.svg" alt="flechaMC"></a>      
    </nav>
  `,
  styleUrl: './navegacion.component.css',
})
export class NavegacionComponent { }
