import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { ShowEmployeeComponent } from './components/show-employee/show-employee.component';
import { NewEmployeeComponent } from './components/new-employee/new-employee.component';
import {SearchbarComponent} from "./components/searchbar/searchbar.component";
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    SearchbarComponent,
    EmployeeListComponent,
    EditEmployeeComponent,
    ShowEmployeeComponent,
    NewEmployeeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
