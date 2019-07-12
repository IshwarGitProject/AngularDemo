import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Observable } from 'rxjs';
import { Employee } from '../Model/Employee';




@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component implements OnInit {
  public employee : Employee;
  employeeForm: any;  
  constructor(private appServiceService: AppServiceService) {
    this.employee = new Employee();
   }
   
  ngOnInit() {
    
    
    // this.employee.id=1;
     this.employee.id = 1;
     this.employee.fName = "Ishwar";
     this.employee.lName = "Singh";
     this.employee.dept= "Engg";
     this.employee.designation = "SSE";
     this.employee.joinningDate = "Today";
    // this.appServiceService.getEmployees().subscribe(
      //res => {
       // if(res){         
          //this.employee = res;
         // this.appServiceService.insertEmployee(this.employee)
          //.subscribe( data => {
            //let ide = data[0].fName;
           // this.router.navigate(['list-user']);
         // }); 
      //  }     
     // }); 

    
  }

}
