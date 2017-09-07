import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Login} from "../interface/login";
import {LoginService} from "../services/login.service";
import {Md5} from 'ts-md5/dist/md5';
import {ToastsManager} from "ng2-toastr/ng2-toastr";
import {NgProgressService} from "ngx-progressbar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  login: Login = new Login();

  constructor(private loginService: LoginService,
    private progressService: NgProgressService,
    private toastr: ToastsManager, 
    private _vcr: ViewContainerRef,
    private router : Router){
      this.toastr.setRootViewContainerRef(_vcr);
  }
    
  onProcessLogin(){    
    this.progressService.start();
    this.loginService.login(this.login).subscribe(output=>{
      console.log(output);
      if(output){
        this.progressService.done();
        let hash = Md5.hashStr(this.login.password).toString();
        let token = btoa(this.login.username + ':' + hash);
        localStorage.setItem('token',token);  
        console.log('Token: ' + localStorage.getItem('token'));      
        this.router.navigate(["list-employee"]);    
      }else{
        this.progressService.done();
        this.toastr.error('Login fail.', null, {toastLife: 3000});     
      }
    },error=>{
       this.progressService.done();
       this.toastr.error(error, null, {toastLife: 3000}); 
    });
  }  
  

}
