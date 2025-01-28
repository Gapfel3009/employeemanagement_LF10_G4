import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable, switchMap} from 'rxjs';
import {AuthService} from "./Services/auth.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.auth.getToken().pipe(
      switchMap((response: any) => {
        const token = response.acces_token;
        if (token){
          request = request.clone({
            setHeaders:{
              Authorization: `Bearer ${token}`
            }
          })
        }
        return next.handle(request);
      })
    );
  }
}
