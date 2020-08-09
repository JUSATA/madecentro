import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
    selector: 'main-email',
    template: `<div class="panel panel-default"><h1>{{title}}</h1><mostrar-email></mostrar-email><guardar-email></guardar-email></div>`
})


export class MainEmailComponent {

    title = "Modulo email";
    // public emailContacto: string;
    // constructor() { }

    // ngOnInit(): void {
    // }
    // guardarEmail() {
    //     localStorage.setItem('emailcontacto', this.emailContacto);
    // }


}
