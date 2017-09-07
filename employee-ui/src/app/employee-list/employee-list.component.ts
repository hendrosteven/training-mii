import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Employee} from "../interface/employee";
import {EmployeeService} from "../services/employee.service";
import {DepartementService} from "../services/departement.service";
import {Departement} from "../interface/departement";
import {NgProgressService} from "ngx-progressbar";
import {ToastsManager} from "ng2-toastr/ng2-toastr";

@Component({selector: 'app-employee-list', templateUrl: './employee-list.component.html', styleUrls: ['./employee-list.component.css']})
export class EmployeeListComponent {

  employees : Employee[] = [];
  departements : Departement[] = [];
  newEmployee : Employee = new Employee();
  isError : boolean = false;
  error : string;
  insertNew : boolean = false;
  isEdit: boolean = false;

  constructor(private employeeService : EmployeeService, 
    private departementService : DepartementService,
    public progressService: NgProgressService,
    private toastr: ToastsManager, 
    private _vcr: ViewContainerRef) {

    this.loadEmployeeData();   
    this.toastr.setRootViewContainerRef(_vcr);
  }


  loadEmployeeData() {
    this.progressService.start();
    this
      .employeeService
      .findAllEmployee()
      .subscribe(output => {
        this.progressService.done();
        console.log(output);
        this.employees = output;
      }, error => {
        this.progressService.done();
        this.isError = true;
        this.error = error;
        console.log(error);
      });
  }

  onRemoveEmployee(id : string) {    
    this
      .employeeService
      .deleteEmployee(id)
      .subscribe(data => {
        if (data) {
          this.toastr.success('Employee deleted.', null, {toastLife: 3000});         
          this.loadEmployeeData();
        }
      }, error => {
        this.isError = true;
        this.error = error;
        console.log(error);
      })
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
