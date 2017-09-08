import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Account} from '../interface/account';
import {LoginService} from "../services/login.service";
import {Router} from "@angular/router";
import {NgProgressService} from "ngx-progressbar";
import {ToastsManager} from "ng2-toastr/ng2-toastr";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  account: Account = new Account();

  constructor(private loginService: LoginService, private router : Router,
    private progressService: NgProgressService,
    private toastr: ToastsManager, 
    private _vcr: ViewContainerRef,) { 
      this.toastr.setRootViewContainerRef(_vcr);
    }

  onProcessRegister(){
    this.progressService.start();    
    this.loginService.register(this.account).subscribe(output=>{
      this.progressService.done();
      if(output){      
        this.router.navigate(["login"]);
      }else{
        this.toastr.error('Registration fail.', null, {toastLife: 3000}); 
      }
    },error=>{
      this.progressService.done();
      console.log(error);
      this.toastr.error('Registration fail: '+ error.message, null, {toastLife: 3000}); 
    });
  }

}
