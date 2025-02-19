import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  private mostrarFormularioSource = new BehaviorSubject<boolean>(false);
  mostrarFormulario$ = this.mostrarFormularioSource.asObservable();

  abrirFormulario() {
    this.mostrarFormularioSource.next(true);
  }

  cerrarFormulario() {
    this.mostrarFormularioSource.next(false);
  }
}
