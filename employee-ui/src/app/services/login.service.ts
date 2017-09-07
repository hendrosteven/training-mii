import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Login} from "../interface/login";

let url : string = 'http://localhost:9090/api/account';

@Injectable()
export class LoginService {

    constructor(private http : Http) {}

    register(account) {
        let headers = new Headers({
            'Content-Type': 'application/json', 
            'Cache-Control': 'no-cache'
        });
        let options = new RequestOptions({headers: headers});
        return this
            .http
            .post(url + '/register', account, options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    login(login: Login){
        let headers = new Headers({
            'Content-Type': 'application/json', 
            'Cache-Control': 'no-cache'            
        });
        let options = new RequestOptions({headers: headers});
        return this
            .http
            .post(url+'/login', login, options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    handleError(error) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}