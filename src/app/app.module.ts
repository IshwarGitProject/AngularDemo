import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Test1Component } from './test1/test1.component';
import { HttpClientModule,HttpClient }    from '@angular/common/http';
import { AppServiceService } from './app-service.service';
import {  
  MatButtonModule, MatMenuModule, MatDatepickerModule,MatNativeDateModule , MatIconModule, MatCardModule, MatSidenavModule,MatFormFieldModule,  
  MatInputModule, MatTooltipModule, MatToolbarModule  
} from '@angular/material';  
import { MatRadioModule } from '@angular/material/radio';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component'; 




@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, Test1Component, EmployeeDetailsComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule, 
    MatMenuModule, 
    MatDatepickerModule,
    MatNativeDateModule , 
    MatIconModule, 
    MatCardModule, 
    MatSidenavModule,
    MatFormFieldModule,  
    MatInputModule, 
    MatTooltipModule, 
    MatToolbarModule,
    MatRadioModule,
    BrowserAnimationsModule
  ],
  providers: [AppServiceService,MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
