import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../Services/employee.service';
import {Employee} from "../../model/Employee";

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent implements OnInit {

  public employee: any;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id){
    this.loadEmployeeDetails(Number(id));}
  }

  loadEmployeeDetails(id: number ) {
    this.employeeService.getEmployeeById(id).subscribe({
      next: ({data}: { data: any }) => {
        this.employee = data;
      },
    });
  }
}
