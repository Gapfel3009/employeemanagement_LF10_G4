import {Component} from '@angular/core';
import {Employee} from "./model/Employee";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: 'employeeFrontendStarter' | undefined;

  constructor() {
 }

}
