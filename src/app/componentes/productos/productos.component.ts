import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { HEROES } from '../model/hero';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  public CData: number;
  public nombre: number;
  verSeleccion: string = '';;
  opcionSeleccionado: string = '0';

  constructor() { }

  priorityList: Array<any> = [
    { value: 0, label: '✪' },
    { value: 1, label: '★' },
    { value: 2, label: '★★' },
    { value: 3, label: '★★★' },
    { value: 4, label: '★★★★' },
    { value: 5, label: '★★★★★' }
  ];
  items = ['item1', 'item2', 'item3', 'item4'];

  ngOnChanges(changes: SimpleChanges) {
    console.log("cambios", changes);
  }
  capturar() {
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.verSeleccion = this.opcionSeleccionado;
  }

  verDatos(event) {
    console.log(event);
  }

  addItem(newItem: Object) {
    this.items.push(newItem["valor"]);
  }


}