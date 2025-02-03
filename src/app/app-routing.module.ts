import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{EmployeeListComponent} from "./components/employee-list/employee-list.component";
import {ShowEmployeeComponent} from "./components/show-employee/show-employee.component";

const routes: Routes = [
  { path: '', redirectTo: '/employee', pathMatch: 'full' },
  { path: 'employee', component: EmployeeListComponent},
  { path: 'employees/:id', component: ShowEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
