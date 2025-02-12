import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `

   <footer>
        <section class="sitemap">
          <p>SERVICIOS</p>
          <section class="servicios">
            <a href="creacion-contenido" target="_blank">Creacion de Contenido</a>
            <a href="disenio-marca" target="_blank">Diseño de marca</a>
            <a href="website" target="_blank">Website</a>
            <a href="disenio-contenido" target="_blank">Diseño & Contenido</a>
          </section>
        </section>
        <section class="redes">
          <p>REDES</p>
          <section class="info">
          <a href="https://x.com/AgenciaMalditos" target="_blank"><img src="redes/x.svg" alt=""></a>
          <a href="https://www.tiktok.com/@malditoscreativosagencia" target="_blank"><img src="redes/tiktok.svg" alt=""></a>
          <a href="https://www.youtube.com/@MalditosCreativosAgencia/shorts" target="_blank"><img src="redes/youtube.svg" alt=""></a>
          <a href="https://www.instagram.com/malditoscreativosagencia/" target="_blank"><img src="redes/instagram.svg" alt=""></a>
          </section>
        </section>
        <section class="contacto">
          <div class="info">
             <p>SAY HELLO</p>
             <p>malditoscreativos&#64;gmail.com</p>
          </div>
          <div class="info">
             <p>EXCEPTIONAL TALENT?</p>
             <p>malditoscreativos&#64;gmail.com</p>
          </div>
        </section>
   </footer>

  
  `,
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent { }
