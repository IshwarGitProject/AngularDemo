import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';
import {EmployeeDetailsComponent} from './employee-details/employee-details.component'
import {RedComponentComponent} from './red-component/red-component.component'
import {MyGridApplicationComponent} from './my-grid-application/my-grid-application.component'

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'test', component: Test1Component},
  { path: 'EmployeeDetails', component:EmployeeDetailsComponent},
  { path: 'Redgrid', component:RedComponentComponent},
  {path: 'Grid', component:MyGridApplicationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
