import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `

   <footer>
    <section class="primer-panel">
        <section class="sitemap">
          <p class="titulo">SERVICIOS</p>
          <section class="servicios">
            <a href="creacion-contenido" target="_blank">Contenido</a>
            <a href="disenio-marca" target="_blank">Diseño</a>
            <a href="website" target="_blank">Web</a>
            <a href="disenio-contenido" target="_blank">Pack digital</a>
          </section>
        </section>
        <section class="redes">
          <p class="titulo">REDES</p>
          <section class="info">
          <a href="https://x.com/AgenciaMalditos" target="_blank"><img src="redes/x.svg" alt="">AgenciaMalditos</a>
          <a class="tiktok" href="https://www.tiktok.com/@malditoscreativosagencia" target="_blank"><img src="redes/tiktok.svg" alt="">&#64;malditoscreativosagencia</a>
          <a class="youtube" href="https://www.youtube.com/@MalditosCreativosAgencia/shorts" target="_blank"><img src="redes/youtube.svg" alt="">&#64;MalditosCreativosAgencia</a>
          <a class="instagram" href="https://www.instagram.com/malditoscreativosagencia/" target="_blank"><img src="redes/instagram.svg" alt="">malditoscreativosagencia</a>
          </section>
    </section>
        </section>
        <section class="contacto">
          <div class="info">
             <p class="titulo">CONTACTO</p>
             <p>malditoscreativos&#64;gmail.com</p>
          </div>
        </section>
   </footer>
   <section class="banner">
        <h1>
          MALDITOS <img src="icons/logo.svg" alt="logo del banner malditos creativos"> CREATIVOS
        </h1>
   </section>
  `,
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent { }
