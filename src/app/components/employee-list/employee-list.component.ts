import { Component, OnInit } from '@angular/core';
import {Observable, of} from "rxjs";
import {Employee} from "../../model/Employee";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {EmployeeService} from "../../Services/employee.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees$: Observable<Employee[]>;

  constructor(private http: HttpClient,
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

}
