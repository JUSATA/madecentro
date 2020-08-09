import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
    selector: 'mostrar-email',
    template: `
    <div *ngIf="emailContacto">
    <h2>{{title}}</h2>
    <strong>Email contact: </strong>  {{emailContacto}}

    <button (click)="borrarEmail()">Eliminar email</button>
</div>
    `
})
export class MostrarEmailComponent implements DoCheck, OnInit {
    title = 'Mostrar email';
    emailContacto: string;

    ngOnInit() {
        this.emailContacto = localStorage.getItem('emailContacto');
    }

    ngDoCheck() {
        this.emailContacto = localStorage.getItem('emailContacto');
    }

    borrarEmail() {
        localStorage.removeItem('emailContacto');
        localStorage.clear();
        this.emailContacto = null;
    }

}