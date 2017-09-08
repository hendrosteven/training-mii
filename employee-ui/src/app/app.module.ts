import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {HttpModule} from "@angular/http";
import { RouterModule } from "@angular/router";
import { NgProgressModule } from 'ngx-progressbar';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import {EmployeeService} from "./services/employee.service";
import {DepartementService} from "./services/departement.service";
import { EmployeeInputComponent } from './employee-input/employee-input.component';
import { LoginComponent } from './login/login.component';
import {AuthGuard} from "./guards/auth.guard";
import {LoginService} from "./services/login.service";
import { RegisterComponent } from './register/register.component';

export const AppRoutes : any = [
  { path: "", component: AppComponent},
  { path: "login", component: LoginComponent},
  { path: "list-employee", component: EmployeeListComponent, canActivate: [AuthGuard] },
  { path: "insert-employee", component: EmployeeInputComponent, canActivate: [AuthGuard] },
  { path: "register", component: RegisterComponent},
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeInputComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    NgProgressModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{useHash: true}),
    ToastModule.forRoot()
  ],
  providers: [EmployeeService,DepartementService, AuthGuard, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
