import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public emailContacto: string;
  constructor() { }

  ngOnInit(): void {
  }
  guardarEmail() {
    localStorage.setItem('emailcontacto', this.emailContacto);
  }

}
