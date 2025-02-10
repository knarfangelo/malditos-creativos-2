import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `

   <footer>
        <section class="sitemap">
          <p>EXPLORE</p>
          <section class="info">
            <a href="">Work</a>
            <a href="">About</a>
            <a href="">Services</a>
            <a href="">Blog</a>
          </section>
        </section>
        <section class="redes">
          <p>STALK US</p>
          <section class="info">
          <a href="https://x.com/AgenciaMalditos" target="_blank">X corp</a>
          <a href="https://www.tiktok.com/@malditoscreativosagencia" target="_blank">Tiktok</a>
          <a href="https://www.youtube.com/@MalditosCreativosAgencia/shorts" target="_blank">Youtube</a>
          <a href="https://www.instagram.com/malditoscreativosagencia/" target="_blank">Instagram</a>
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
