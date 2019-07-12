import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Employee } from '../Model/Employee';
import { nextTick } from 'q';
import { Observable } from 'rxjs';  



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  
  constructor(private appServiceService: AppServiceService) { }
  str:any;
  public adf : any;
  employee : Employee[];  
   ngOnInit() {   
    const sequence = new Observable(this.sequenceSubscriber);
    sequence.subscribe({
      next(num) { console.log(num); },
      complete() { console.log('Finished sequence'); }
    }); 
     this.appServiceService.getEmployees().subscribe(
      res => {                
        if(res){
          this.str = res[0].fName;
          this.employee = res;
          
        }     
      });    
  }
  sequenceSubscriber(observer) {
    // synchronously deliver 1, 2, and 3, then complete
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
   
    // unsubscribe function doesn't need to do anything in this
    // because values are delivered synchronously
    return {unsubscribe() {}};
  }

}
