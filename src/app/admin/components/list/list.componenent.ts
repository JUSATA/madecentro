import { Component, DoCheck, OnInit } from "@angular/core";

@Component({
    selector: 'admin-list',
    templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
    title = "Panel de administracion";

    employees = [
        { id: 1, name: "E 001", description: "E 001 des", email: "e001@email.com" },
        { id: 2, name: "E 002", description: "E 002 des", email: "e002@email.com" },
        { id: 3, name: "E 003", description: "E 003 des", email: "e003@email.com" },
        { id: 4, name: "E 004", description: "E 004 des", email: "e004@email.com" }
    ];
    selectedEmployee;

    constructor() { }

    ngOnInit() {
    }

    public createEmployee(e: { id, name, description, email }) {
        this.employees.push(e);
    }

    public selectEmployee(e, tipo) {

        console.log("......", e, tipo);
        this.selectedEmployee = e;
    }
}