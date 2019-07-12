import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'; 
import { AppServiceService } from '../app-service.service';
import { EmployeeDetails } from '../Model/EmployeeDetails';
import { Observable } from 'rxjs'; 


@Component({
  selector: 'app-ng ',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  dataSaved = false;  
  employeeForm: any;  
  allEmployees: Observable<EmployeeDetails[]>;  
  massage = null;  
  constructor(private formbulider: FormBuilder,private appServiceService: AppServiceService) { }

  ngOnInit() {
  this.Validation();
  }
  Validation(){
    this.employeeForm = this.formbulider.group({  
       EmpName: ['', [Validators.required]],  
       DateOfBirth: ['', [Validators.required]],  
       EmailId: ['', [Validators.required]],  
       Gender: ['', [Validators.required]],  
       Address: ['', [Validators.required]],  
       PinCode: ['', [Validators.required]],  
     });
  }
  GetAll(){

  }
  onFormSubmit() {  
    this.dataSaved = false;  
    const employee = this.employeeForm.value;  
    this.CreateEmployee(employee);  
    this.employeeForm.reset();  
  }
  CreateEmployee(employeeDetails: EmployeeDetails) {  
    //if (this.employeeIdUpdate == null) {  
      this.appServiceService.insertEmployeeDetails(employeeDetails).subscribe(  
        () => {  
          this.dataSaved = true;  
          this.massage = 'Record saved Successfully';  
          this.GetAll();  
          //this.employeeIdUpdate = null;  
          this.employeeForm.reset();  
        }  
      );  
    // } 
    //else {  
    //   employee.EmpId = this.employeeIdUpdate;  
    //   this.employeeService.updateEmployee(employee).subscribe(() => {  
    //     this.dataSaved = true;  
    //     this.massage = 'Record Updated Successfully';  
    //     this.loadAllEmployees();  
    //     this.employeeIdUpdate = null;  
    //     this.employeeForm.reset();  
    //   });  
    // }  
  }  
}
