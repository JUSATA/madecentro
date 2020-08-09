import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'supermercado';
  emailcontacto;

  ngOnInit() {
    this.emailcontacto = localStorage.getItem('emailcontacto');
  }
  ngDoCheck() {
    this.emailcontacto = localStorage.getItem('emailcontacto');

  }
  borrarEmail() {
    localStorage.removeItem('emailcontacto');
  }


}
