import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{EmployeeListComponent} from "./components/employee-list/employee-list.component";
import {ShowEmployeeComponent} from "./components/show-employee/show-employee.component";
import {CreateEmployeeComponent} from "./components/create-employee/create-employee.component";
import {EditEmployeeComponent} from "./components/edit-employee/edit-employee.component";

const routes: Routes = [
  { path: '', redirectTo: '/employee', pathMatch: 'full' },
  { path: 'employee', component: EmployeeListComponent},
  { path: 'employee/:id', component: ShowEmployeeComponent },
  { path: 'createEmployee', component: CreateEmployeeComponent},
  { path: 'employees/edit/:id', component: EditEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
