import {Component, OnInit} from '@angular/core';
import {Employee} from "../interface/employee";
import {EmployeeService} from "../services/employee.service";
import {DepartementService} from "../services/departement.service";
import {Departement} from "../interface/departement";

@Component({selector: 'app-employee-list', templateUrl: './employee-list.component.html', styleUrls: ['./employee-list.component.css']})
export class EmployeeListComponent {

  employees : Employee[] = [];
  departements : Departement[] = [];
  newEmployee : Employee = new Employee();
  isError : boolean = false;
  error : string;
  insertNew : boolean = false;
  isEdit: boolean = false;

  constructor(private employeeService : EmployeeService, private departementService : DepartementService) {
    this.loadEmployeeData();
    this.loadDepartement();
  }

  loadDepartement() {
    this
      .departementService
      .findAllDepartement()
      .subscribe(output => {
        console.log(output);
        this.departements = output;
      }, error => {
        this.isError = true;
        this.error = error;
        console.log(error);
      });
  }

  loadEmployeeData() {
    this
      .employeeService
      .findAllEmployee()
      .subscribe(output => {
        console.log(output);
        this.employees = output;
      }, error => {
        this.isError = true;
        this.error = error;
        console.log(error);
      });
  }

  onRemoveEmployee(id : string) {
    console.log(id);
    this
      .employeeService
      .deleteEmployee(id)
      .subscribe(data => {
        if (data) {
          //show pesan
          this.loadEmployeeData();
        }
      }, error => {
        this.isError = true;
        this.error = error;
        console.log(error);
      })
  }

  onInsertNewEmployee() {
    if (!this.isEdit) {
      this
        .employeeService
        .saveNewEmployee(this.newEmployee)
        .subscribe(output => {
          console.log(output);
          this
            .employees
            .push(output);
          this.newEmployee = new Employee();
          this.insertNew = false;
        }, error => {
          this.isError = true;
          this.error = error;
          console.log(error);
        });
    } else {
      this.onUpdateEmployee();
    }

  }

  onUpdateEmployee() {
    this
      .employeeService
      .updateEmployee(this.newEmployee)
      .subscribe(output => {
        console.log(output);
        this.loadEmployeeData();
        this.newEmployee = new Employee();
        this.insertNew = false;
      }, error => {
        this.isError = true;
        this.error = error;
        console.log(error);
      });
  }

  onEdit(employee) {
    this.isEdit = true;
    this.newEmployee = employee;
    this.insertNew = true;
  }

  compareFn(c1: Departement, c2: Departement): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}
