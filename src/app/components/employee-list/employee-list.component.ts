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
  employees$: Employee[];
  showConfirmation:boolean = false;
  Employeename!: string;
  EmployeeId!: number;
  filteredEmployees: Employee[] = [];

  constructor(private http: HttpClient,
              private router: Router,
             private MaService: EmployeeService) {
    this.employees$ = [];
  }

  fetchData() {
    //this.employees$ = this.MaService.getEmployees();
  }
  ngOnInit() {
    this.loadEmployees();
  }
  loadEmployees() {
    this.MaService.getEmployees().subscribe({
      next: (data: Employee[]) => {
        this.employees$ = data;
        this.filteredEmployees = data;
      },});
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
    window.location.reload();
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

  editEmployee(employeeId: number | undefined){
    this.router.navigate([`/employees/edit`, employeeId]);
  }

  filterEmployees(searchText: string) {
    const searchLower = searchText.toLowerCase().trim();
    this.filteredEmployees = this.employees$.filter(emp =>
      emp.firstName?.toLowerCase().includes(searchLower) ||
      emp.lastName?.toLowerCase().includes(searchLower)
    );
  }

}
