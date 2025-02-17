import { ChangeDetectionStrategy, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  template: `
    <div class="space"></div>
    <nav>
      <button (click)="toggleCuadro()" class="hagamoslo">¡Hagámoslo!</button>
      <a class="titulo" href="#">Agencia de Marketing</a>
      <div class="sites" (click)="toggleMenu()">Menu</div>
      <div class="menu" [@menuAnimation]="menuAbierto ? 'visible' : 'oculto'">
        <a href="/creacion-contenido">Creación de contenido</a>
        <a href="/disenio-marca">Diseño de marca</a>
        <a href="/website">Website</a>
        <a href="/disenio-contenido">PACK DIGITAL</a>
      </div>
    </nav>

    <div class="formulario" #formulario [@slideInOut]="cuadroVisible ? 'visible' : 'oculto'">
      <button class="cerrar" (click)="cerrarFormulario()">X</button>
      @if (formEnviado) {
        <form [formGroup]="form" class="f-info">
          <div class="titulo">
            <h1>¡Comenzamos!</h1>
          </div>
          <div class="selector-1">
  <p>¿Qué podemos hacer por ti?</p>
  <div class="buttons">
  <button class="boton"
    *ngFor="let opcion of ['Contenido', 'Diseño', 'Web', 'PACK DIGITAL']"
    [class.selected]="seleccionServicios.includes(opcion)"
    (click)="toggleSeleccion(opcion)">
    {{ opcion }}
  </button></div>
</div>

<div class="selector-2">
  <p>¿Cuál es tu rango de precio?</p>
  <div class="buttons">
  <button 
    *ngFor="let precio of ['< 2000 S/', '2k - 3k S/', '3k - 4k S/', '4k - 5k S/']"
    [class.selected]="rangoPrecio === precio"
    (click)="seleccionarRango(precio)">
    <p>{{ precio }}</p>
  </button></div>
</div>
          <label>
            <input type="text" formControlName="nombre" placeholder="Nombre">
            @if (form.get('nombre')?.invalid && form.get('nombre')?.touched) {
              <div class="error-message">El nombre es obligatorio</div>
            }
          </label>
          <label>
            <input type="text" formControlName="correo" placeholder="Correo">
            @if (form.get('correo')?.invalid && form.get('correo')?.touched) {
              <div class="error-message">El correo es obligatorio</div>
            }
          </label>
          <label>
            <textarea formControlName="mensaje" placeholder="Mensaje"></textarea>
            @if (form.get('mensaje')?.invalid && form.get('mensaje')?.touched) {
              <div class="error-message">El mensaje es obligatorio</div>
            }
          </label>
          <button class="enviar" (click)="enviarFormulario()" type="button">Enviar Mensaje</button>
        </form>
      } @else {
        <div class="res-formulario">
          <h1>¡GRACIAS POR ELEGIR A MALDITOS CREATIVOS EN BREVE TE RESPONDEMOS!</h1>
        </div>
      }
    </div>
  `,
  animations: [
    trigger('menuAnimation', [
      state('oculto', style({ opacity: 0, transform: 'scaleY(0)' })),
      state('visible', style({ opacity: 1, transform: 'scaleY(1)' })),
      transition('oculto <=> visible', animate('300ms ease-in-out')),
    ]),
    trigger('slideInOut', [
      state('oculto', style({ transform: 'translateX(-100%)', opacity: 1 })),
      state('visible', style({ transform: 'translateX(0)', opacity: 1 })),
      transition('visible => oculto', animate('500ms ease-in-out')),
      transition('oculto => visible', animate('300ms ease-in-out'))
    ])
  ],
  styleUrls: ['./navegacion.component.css'],
})
export class NavegacionComponent {
  seleccionServicios: string[] = []; // Permite múltiples selecciones
  rangoPrecio: string | null = null; // Solo una selección

  @ViewChild('formulario') formulario!: ElementRef;

  cuadroVisible = false;
  formEnviado = true;
  menuAbierto = false;

  form = new FormGroup({
    nombre: new FormControl('', Validators.required),
    correo: new FormControl('', [Validators.required, Validators.email]),
    mensaje: new FormControl('', Validators.required)
  });

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }

  toggleCuadro() {
    this.cuadroVisible = !this.cuadroVisible;
  }

  enviarFormulario() {
    if (this.form.valid) {
      this.formEnviado = false;
    } else {
      this.form.markAllAsTouched();
    }
  }

  cerrarFormulario() {
    this.cuadroVisible = false;
  }
  toggleSeleccion(opcion: string) {
    const index = this.seleccionServicios.indexOf(opcion);
    if (index > -1) {
      this.seleccionServicios.splice(index, 1); // Si ya está seleccionado, lo quita
    } else {
      this.seleccionServicios.push(opcion); // Agregar si no está seleccionado
    }
  }
  
  seleccionarRango(precio: string) {
    this.rangoPrecio = precio; // Solo permite una selección
  }
  
}