
import { Injectable, Inject } from '@angular/core';  
import { Http, Response, HttpModule } from '@angular/http';  
 import { Observable } from 'rxjs';  
// import { Router } from '@angular/router';  
//import 'rxjs/add/operator/map';  
//import 'rxjs/add/operator/catch';  
//import 'rxjs/add/observable/throw';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Employee } from './Model/Employee';
import { EmployeeDetails } from './Model/EmployeeDetails';



@Injectable({
  providedIn: 'root'  
})
export class AppServiceService {
  myAppUrl: string = "";  
  constructor(private _http: HttpClient) {
    this.myAppUrl = 'https://localhost:44344/'; 
   }
   errorHandler(error: Response) {  
    console.log(error);  
    return Observable.throw(error);  
   }  
  getEmployees() {  
    return this._http.get<Employee[]>(this.myAppUrl + 'api/EmployeeDetails/GetEmployeeDetails');       
  }
  getAllEmployees() {  
    return this._http.get<EmployeeDetails[]>(this.myAppUrl + 'api/EmployeeDetails/GetEmployeeDetails');       
  }
  insertEmployee(employee : Employee) {  

    //const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };    
    //return this._http.post<Employee[]>(this.myAppUrl + 'api/values/InsertEmployee/', employee, httpOptions) 
    return this._http.post(this.myAppUrl + 'api/values/InsertEmployee/', employee);
  }

  insertEmployeeDetails(employeeDetails : EmployeeDetails){
    return this._http.post(this.myAppUrl + 'api/EmployeeDetails/InsertEmployeeDetails/', employeeDetails);
  }
}
