import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import {EmployeeService} from "./services/employee.service";
import {HttpModule} from "@angular/http";
import {DepartementService} from "./services/departement.service";

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule
  ],
  providers: [EmployeeService,DepartementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
