import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {NewEmployee} from "../../model/NewEmployee";
import {EmployeeService} from "../../Services/employee.service";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
   showError:Boolean = false;
   employee: any;
  constructor(private router : Router,
              private MaService: EmployeeService) {
  }

  redirectToEmployeeList(){
    this.router.navigate(['/employee'], {})
  }

  saveEmployeeToDB(firstName:string, lastName:string, city: string, street: string, phone:string ,postalCode: string) {
    if (!firstName || !lastName || !city || !street || !phone || !postalCode) {
      this.showError = true;
    }
    const newEmployee = new NewEmployee( lastName, firstName, street,postalCode, city,  phone, [0]);
    this.MaService.createEmployee(newEmployee);
    this.redirectToEmployeeList()
  }

  ok(){
    this.showError = false;
  }
}
