import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavegacionComponent } from "../../layouts/navegacion/navegacion.component";
import { PresentacionComponent } from "../../layouts/home/presentacion/presentacion.component";
import { ServiciosComponent } from "../../layouts/home/servicios/servicios.component";
import { PortafolioComponent } from "../../layouts/home/Portafolio/Portafolio.component";
import { NosotrosComponent } from "../../layouts/home/nosotros/nosotros.component";
import { FooterComponent } from "../../layouts/footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [NavegacionComponent, PresentacionComponent, ServiciosComponent, PortafolioComponent, NosotrosComponent, FooterComponent],
  template: `

    <app-navegacion></app-navegacion>
    <header>
      <h1>Malditos</h1>
      <img class="logo" src="icons/logo.svg" alt="">
      <h1>Creativos</h1>
      <app-presentacion></app-presentacion>
      <app-servicios></app-servicios>
      <app-portafolio></app-portafolio>
      <app-nosotros></app-nosotros>
      <app-footer></app-footer>
    </header>
  
  `,
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent { }
