import { EmployeService } from './employe.service';
import { IEmployee } from './iemployee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
 employees: IEmployee[];
 statusMsg: String= 'Loading data Plz wait...';

  constructor(private employeService: EmployeService) { }

  ngOnInit() {
    this.employeService.getFullEmployee()
      .subscribe(employeesData => this.employees = employeesData,
      error => {
        console.error(error);
        this.statusMsg = 'problem with service plz check ur service properly.';
      });
  }

}
