import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Hero } from '../model/hero';
@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnChanges {
  @Input() PData: number;
  @Input() nombre: string;
  public subcategoria: string;
  public metros: number;
  public contacto: string;
  mensaje: string;
  @Output() childEvent = new EventEmitter();
  @Output() newItemEvent = new EventEmitter<object>();
  constructor() {

    this.metros = 54;
    this.contacto = "juan moreno";
    this.subcategoria = "ropa";
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log("changes", changes);
  }

  onChange(value) {
    this.childEvent.emit(value);
  }

  addNewItem(value: string) {
    var obj = { 'nombre': "exito", 'subcategoria': "canasta familiar", 'valor': value }
    this.newItemEvent.emit(obj);
  }
}