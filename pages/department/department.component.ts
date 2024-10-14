import { Component,OnInit } from '@angular/core';
import { APIResponse, Department, EmployeeModel, LoginModel } from '../../core/models/APIModel';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DepartmentService } from '../../core/service/department.service';
import { CommonModule } from '@angular/common';
import { NaPipe } from '../../shared/pipes/na.pipe';
import { EmployeeService } from '../../core/service/employee.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [FormsModule,CommonModule, NaPipe
    
  ],
  templateUrl: './department.component.html',
  styleUrl: './department.component.scss'
})
export class DepartmentComponent implements OnInit{

  departmentList: Department[] = [];
  employee$: Observable<EmployeeModel[]> | undefined;
  departmentObj: Department = new Department();

  constructor(private deptService: DepartmentService,private empService:EmployeeService) {
   this.employee$ = this.empService.getEmployeeList();
  }

  ngOnInit(): void {
     this.loadDepartment(); 
  }

loadDepartment() {
  this.deptService.getAllDept().subscribe((res:APIResponse)=>{
  this.departmentList = res.data;
  })
}
onSave() {
  this.deptService.createNewDept(this.departmentObj).subscribe((res:APIResponse)=>{
    if(res.result) {
      alert('Department Created successfully');
      this.loadDepartment(); 

    } else {
      alert(res.message)
    }
  })
  }

  onEdit (item:Department) {
    this.departmentObj = item;

  }

  onUpdate() {
    this.deptService.updateDept(this.departmentObj).subscribe((res:APIResponse)=>{
      if(res.result) {
        alert('Department Update successfully');
        this.loadDepartment(); 
  
      } else {
        alert(res.message)
      }
    })
    }
  
  reset() {
    this.departmentObj = new Department ();
  }
  onDelete(id: number) {
    const isDelete = confirm('Are You Sure Want to Delete ??');
    if(isDelete) {
      this.deptService.deleyeDept(id).subscribe((res:APIResponse)=>{
        if(res.result) {
          alert('Department Deleted successfully');
          this.loadDepartment(); 
    
        } else {
          alert(res.message)
        }
      })
      }
  }

}
