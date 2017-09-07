import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Employee} from "../interface/employee";
import {Departement} from "../interface/departement";
import {EmployeeService} from "../services/employee.service";
import {DepartementService} from "../services/departement.service";
import {Router} from "@angular/router";
import {NgProgressService} from "ngx-progressbar";
import {ToastsManager} from "ng2-toastr/ng2-toastr";

@Component({
  selector: 'app-employee-input',
  templateUrl: './employee-input.component.html',
  styleUrls: ['./employee-input.component.css']
})
export class EmployeeInputComponent implements OnInit {

  newEmployee: Employee = new Employee();
  departements: Departement[] = [];
  isError: boolean = false;
  error: string;

  constructor(private employeeService: EmployeeService,
        private departementService: DepartementService,
        private router : Router,public progressService: NgProgressService,
        private toastr: ToastsManager, 
        private vcr: ViewContainerRef) {
          
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
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

  onInsertNewEmployee() {    
      this.progressService.start();
      this
        .employeeService
        .saveNewEmployee(this.newEmployee)
        .subscribe(output => {
          this.progressService.done();
          this.toastr.success('Employee saved.', null, {toastLife: 3000});
          console.log(output);  
          //kembali ke list employee      
          this.newEmployee = new Employee();     
          //this.router.navigate(["list-employee"]);    
        }, error => {
          this.progressService.done();
          this.toastr.error('Something wrong, try again', 'Oops!',  {toastLife: 3000});
        });  
  }

}
