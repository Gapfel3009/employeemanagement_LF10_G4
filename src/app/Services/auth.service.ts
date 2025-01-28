import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = 'http://keycloak.szut.dev/auth/realms/szut/protocol/openid-connect/token';
  private username = 'user';
  private password = 'test';

  constructor(private http: HttpClient) {}

  getToken(): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = `grant_type=password&client_id=employee-management-service&username=${this.username}&password=${this.password}`;
    return this.http.post(this.authUrl, body, { headers });
  }
}
