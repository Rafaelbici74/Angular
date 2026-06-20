import { Component, signal } from '@angular/core';
import { Calculadora } from './calculadora/calculadora';
import { ListaComprasComponent } from './lista-compras/lista-compras';

@Component({
  selector: 'app-root',
  imports: [ListaComprasComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('conceitos_basicos');
}
