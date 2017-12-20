import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee/employee.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home/home.component';

const anyRoutes: Routes = [
     {path: 'home', component: HomeComponent},
     {path: 'employee', component: EmployeeComponent},
     {path: '', redirectTo: '/home', pathMatch: 'full'},
     {path: '**', component: ErrorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ErrorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
