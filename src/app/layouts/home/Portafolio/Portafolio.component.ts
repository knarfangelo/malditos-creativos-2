import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-portafolio',
  imports: [],
  template: `
  <header>
    <h1>Europe's most aspiring</h1>
    <h2>startups & scaleups</h2>
    <section class="contenedor">
      <div class="card">
        <img src="portafolio/img1.jpeg" alt="imagen 1">
        <p>Rudy Capital | Turning crypto complexity into clarity</p>
        <p>Strategy - Visual Identity - Website</p>
      </div>
      <div class="card">
        <img src="portafolio/img2.jpeg" alt="imagen 1">
        <p>Rudy Capital | Turning crypto complexity into clarity</p>
        <p>Strategy - Visual Identity - Website</p>
      </div>
      <div class="card">
        <img src="portafolio/img3.jpeg" alt="imagen 1">
        <p>Rudy Capital | Turning crypto complexity into clarity</p>
        <p>Strategy - Visual Identity - Website</p>
      </div>
      <div class="card">
        <img src="portafolio/img4.jpeg" alt="imagen 1">
        <p>Rudy Capital | Turning crypto complexity into clarity</p>
        <p>Strategy - Visual Identity - Website</p>
      </div>
      <div class="card">
        <img src="portafolio/img5.jpeg" alt="imagen 1">
        <p>Rudy Capital | Turning crypto complexity into clarity</p>
        <p>Strategy - Visual Identity - Website</p>
      </div>
      <div class="card">
        <img src="portafolio/img6.png" alt="imagen 1">
        <p>Rudy Capital | Turning crypto complexity into clarity</p>
        <p>Strategy - Visual Identity - Website</p>
      </div>
    </section>
    </header>
  `,
  styleUrl: './Portafolio.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortafolioComponent { }
