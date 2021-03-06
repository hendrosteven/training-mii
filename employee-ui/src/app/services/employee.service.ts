import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

let url : string = 'http://localhost:9090/api/employee';

@Injectable()
export class EmployeeService {

    constructor(private http : Http) {}

    findAllEmployee() {
        let headers = new Headers({
            'Content-Type': 'application/json', 
            'Cache-Control': 'no-cache',
            'Authorization': 'Basic ' + localStorage.getItem('token') 
        });
        let options = new RequestOptions({headers: headers});
        return this
            .http
            .get(url,options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    deleteEmployee(id : string) {
        let headers = new Headers({
            'Content-Type': 'application/json', 
            'Cache-Control': 'no-cache',
            'Authorization': 'Basic ' + localStorage.getItem('token') 
        });
        let options = new RequestOptions({headers: headers});
        return this
            .http
            .delete(url + '/' + id, options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    saveNewEmployee(employee) {
        let headers = new Headers({
            'Content-Type': 'application/json', 
            'Cache-Control': 'no-cache',
            'Authorization': 'Basic ' + localStorage.getItem('token') 
        });
        let options = new RequestOptions({headers: headers});
        return this
            .http
            .post(url, employee, options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    updateEmployee(employee) {
        let headers = new Headers({
            'Content-Type': 'application/json', 
            'Cache-Control': 'no-cache',
            'Authorization': 'Basic ' + localStorage.getItem('token') 
        });
        let options = new RequestOptions({headers: headers});
        return this
            .http
            .put(url, employee, options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    handleError(error) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}