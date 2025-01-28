import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Employee} from "../model/Employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
private apiUrl = "https://employee.szut.dev"
  constructor(private http: HttpClient) {}

  getEmployees(): Observable<any> {
  return this.http.get(`${this.apiUrl}/employees`);
  }
  getEmployeeById(id: number): Observable<any> {
    return this.http.get<Employee>(`${this.apiUrl}/employees/${id}`);
  }
  createEmployee(employee: Employee): Observable<any> {
  return this.http.post<Employee>(`${this.apiUrl}/employees`, employee);
  }
  deleteEmployee(id: number): Observable<any> {
  return this.http.delete<Employee>(`${this.apiUrl}/employees/${id}`);
  }
  updateEmployee(employee: Employee): Observable<any> {
  return this.http.put<Employee>(`${this.apiUrl}/employees/${employee.id}`, employee);
  }
}
