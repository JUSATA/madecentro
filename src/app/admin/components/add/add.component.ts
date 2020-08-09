import { Component, DoCheck, OnInit } from "@angular/core";

@Component({
    selector: 'admin-add',
    templateUrl: './add.component.html'
})
export class AddComponent implements OnInit {
    title = "Agregar";

    employee: { id, name, description, email } = { id: null, name: "", description: "", email: "" };

    constructor() { }

    ngOnInit() {
    }

    createEmployee() {
        console.log("Employee created: ", this.employee);
        this.employee = { id: null, name: "", description: "", email: "" };

    }
}