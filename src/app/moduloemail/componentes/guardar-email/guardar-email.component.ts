
import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
    selector: 'guardar-email',
    template: `
    <h4>{{title}}</h4>
    <input type="text" [(ngModel)]="emailContacto" />
    <button (click)="guardarEmail()">Guardar email</button>
`
})
export class GuardarEmailComponent {
    title = 'Guardar Email';
    emailContacto: string;
    // ngOnInit() {
    //     this.emailContacto = localStorage.getItem('emailContacto');
    // }
    // ngDoCheck() {
    //     this.emailContacto = localStorage.getItem('emailContacto');
    // }
    // borrarEmail() {
    //     localStorage.removeItem('emailContacto');
    //     localStorage.clear();
    //     this.emailContacto = null;
    // }
    guardarEmail() {
        localStorage.setItem('emailContacto', this.emailContacto);
    }

}
