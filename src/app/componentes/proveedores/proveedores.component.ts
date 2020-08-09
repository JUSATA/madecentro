import { Component, OnInit } from '@angular/core';
declare var JQuery: any;
declare var $: any;
@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('#textojq').hide();
    $('#botonjq').click(function () {
      $('#textojq').slideToggle();
    });
  }



}
