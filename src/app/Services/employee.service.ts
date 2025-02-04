import { Injectable } from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
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
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post<Employee>(this.apiUrl, employee, {headers}).pipe(
    catchError(this.handleError)
  );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
    return throwError('Something went wrong; please try again later.');
  }
  deleteEmployee(id: number): Observable<any> {
  return this.http.delete<Employee>(`${this.apiUrl}/${id}`);
  }
  updateEmployee(employee: Employee): Observable<any> {
  return this.http.put<Employee>(`${this.apiUrl}/${employee.id}`, employee);
  }
}
