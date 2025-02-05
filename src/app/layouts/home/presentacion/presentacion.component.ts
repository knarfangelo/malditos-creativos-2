import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-presentacion',
  imports: [],
  template: `
    
    <header>
      <main>
      <p><strong>Factos</strong> 02/03</p>
      <h2>40+</h2>
      <p>global media features, including
      the New York Times, Forbes,
      TechCrunch, Bloomberg, and
      Hypebeast.</p>
      <section class="buttons">
        <button><img class="left" src="icons/flechaSwiper.svg" alt=""></button>
        <button><img src="icons/flechaSwiper.svg" alt=""></button>
      </section>
      </main>      
        <video autoplay muted loop src="presentation/presentation.mp4"></video>
    </header>

  
  `,
  styleUrl: './presentacion.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PresentacionComponent { }
