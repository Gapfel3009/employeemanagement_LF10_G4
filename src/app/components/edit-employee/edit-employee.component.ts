import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { EmployeeService } from '../../Services/employee.service';

import {Employee} from "../../model/Employee";

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  showConfirmation:boolean = false;
  public employee = {} as Employee;
  private ogEmployee: Employee = {} as Employee;
  Employeename!: string;
  EmployeeId!: number;

//todo: nur die geänderten daten übernehmen & den zurückButton mit dialog versehen!
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService,
  ) {}
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id){
      this.loadEmployeeDetails(Number(id));}
  }
  redirectToEmployeeList(){
    this.router.navigate(['/employee'], {})
  }
  loadEmployeeDetails(id: number ) {
    this.employeeService.getEmployeeById(id).subscribe({
      next: (employee: Employee) => {
        this.employee = employee;
      },
    });
  }
  updateEmployee() {
    this.employeeService.updateEmployee(this.employee).subscribe({
      next: () => {
        this.redirectToEmployeeList()
      }
    })
  }

}


