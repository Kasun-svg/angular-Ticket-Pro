import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../core/service/department.service';
import { Observable } from 'rxjs';
import { APIResponse, Department, EmployeeModel } from '../../core/models/APIModel';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../core/service/employee.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent implements OnInit {

  deptList$: Observable<Department[] > | undefined;
   employeeList: EmployeeModel[]= [];
   isEmpFormVisible:boolean = false;
   employeeObj: EmployeeModel = new EmployeeModel();


  constructor (private deptServ: DepartmentService,private empServ: EmployeeService) {
  this.deptList$ = deptServ.getDeptList();
  }
ngOnInit() {
  this.loadAllEmployee();
}

loadAllEmployee() {
this.empServ.getAllEmployee().subscribe((res:APIResponse)=>{
 this.employeeList = res.data;
})
}

onSaveEmp() {
  this.empServ.createEmployee(this.employeeObj).subscribe((res:APIResponse)=>{
    if(res.result) {
      alert("Employee Create Success");
       this.loadAllEmployee;
      } else {
        alert(res.message);
      }
      
  })
}
}
