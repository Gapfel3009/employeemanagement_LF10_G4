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
    console.log("Shoe Details für Employee:", this.employee);
    this.employee.skillSet = this.employee.skillSet || [];

    console.log("Shoe Details für Employee:", this.employee);
    this.employeeService.getEmployeeById(id).subscribe({
      next: (employee: Employee) => {
        this.employee = employee;
        this.ogEmployee = employee;
      },
    });
  }
  updateEmployeeDetails() {
    if (!this.employee || !this.employee.id) {
      console.error("Fehler: Kein gültiger Employee zum Aktualisieren.");
      return;
    }
    console.log("Sende Update für Employee:", this.employee);

    this.employeeService.updateEmployee(this.employee).subscribe({
      next: () => {
        console.log("Läuft")
        this.redirectToEmployeeList()
      },
      error: (err) => {
        console.error("Fehler beim Update:", err);
      }
    })
  }
backOhnesichern(){

  this.showConfirmation = true;


}
hasChanges():boolean {
  return JSON.stringify(this.employee) !== JSON.stringify(this.ogEmployee);
}
  confirmBackWithoutEmployee(){
    if (this.hasChanges()) {
      this.employee = this.ogEmployee
//    this.showConfirmation = false;
      this.redirectToEmployeeList();
      this.showConfirmation = false;
    } else {
      this.redirectToEmployeeList();
      this.showConfirmation = false;
    }
  }
  cancelWithoutEmployee(){
    this.showConfirmation = false;
  }

}


