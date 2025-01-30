import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Employee} from "../model/Employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
private apiUrl = '/backend'
  constructor(private http: HttpClient) {}

  getEmployees(): Observable<any> {
  return this.http.get<Employee[]>(`${this.apiUrl}`,{
    headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
  });
  }
  getEmployeeById(id: number): Observable<any> {
    return this.http.get<Employee>(`${this.apiUrl}/${id}`);
  }
  createEmployee(employee: Employee): Observable<any> {
  return this.http.post<Employee>(`${this.apiUrl}`, employee);
  }
  deleteEmployee(id: number): Observable<any> {
  return this.http.delete<Employee>(`${this.apiUrl}/${id}`);
  }
  updateEmployee(employee: Employee): Observable<any> {
  return this.http.put<Employee>(`${this.apiUrl}/${employee.id}`, employee);
  }
}
