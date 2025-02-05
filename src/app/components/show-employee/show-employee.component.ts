import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { EmployeeService } from '../../Services/employee.service';

import {Employee} from "../../model/Employee";

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent implements OnInit {

  showConfirmation:boolean = false;
  public employee = {} as Employee;
  Employeename!: string;
  EmployeeId!: number;

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
    window.location.href="/employee";
  }
  loadEmployeeDetails(id: number ) {
    this.employeeService.getEmployeeById(id).subscribe({
      next: (employee: Employee) => {
        this.employee = employee;
      },
    });
  }

  deleteEmployee(name: string , id: number, event: MouseEvent) {
    event.stopPropagation();
    this.Employeename = name;
    this.EmployeeId = id;
    this.showConfirmation = true;
  }
  // todo: dialog noch fehlerhaft
  confirmDeleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe();
    this.showConfirmation = false;
    this.redirectToEmployeeList();
  }
  cancelDeleteEmployee() {
    this.showConfirmation = false;
  }
  editEmployee(){  this.router.navigate([`/employees/edit`, this.employee.id]);}
}
