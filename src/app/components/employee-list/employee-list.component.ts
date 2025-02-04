import { Component, OnInit } from '@angular/core';
import {Observable, of} from "rxjs";
import {Employee} from "../../model/Employee";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {EmployeeService} from "../../Services/employee.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees$: Observable<Employee[]>;
  showConfirmation:boolean = false;
  Employeename!: string;
  EmployeeId!: number;

  constructor(private http: HttpClient,
              private router: Router,
             private MaService: EmployeeService) {
    this.employees$ = of([]);
    this.fetchData();
  }

  fetchData() {
    this.employees$ = this.MaService.getEmployees();

  }
  ngOnInit() {
    this.fetchData();
  }

  deleteEmployee(name: string , id: number, event: MouseEvent ) {
    event.stopPropagation();
    this.Employeename = name;
    this.EmployeeId = id;
    this.showConfirmation = true;
  }
  confirmDeleteEmployee(id: number) {
    this.MaService.deleteEmployee(id).subscribe();
    this.showConfirmation = false;
  }
  cancelDeleteEmployee() {
    this.showConfirmation = false;
  }

  viewDetailsEmployee(employeeId: number | undefined) {
    if (employeeId) {
      this.router.navigate(['/employee', employeeId], {
      });
    }
  }

  redirectCreateEmployee() {
      this.router.navigate(['/createEmployee'], {})
  }
  editEmployee(employeeId: number | undefined){  this.router.navigate([`/employees/edit`, employeeId]);}
}
