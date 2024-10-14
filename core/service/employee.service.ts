import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { APIResponse, Department, EmployeeModel, LoginModel } from '../models/APIModel';
import { environment } from '../../../environments/environment.development';
import { constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  login (obj:LoginModel) : Observable<APIResponse> {
    return this.http.post<APIResponse>(environment.API_URL + constant.API_END_POINT.LOGIN, obj)
    }
    getEmployeeList () : Observable<EmployeeModel[]> {
      return this.http.get<EmployeeModel[]>(environment.API_URL + constant.API_END_POINT.GET_EMPLOYEE).pipe(map((res:any)=>{
      return res.data;
      }))

      }
       
  getAllEmployee () : Observable<APIResponse> {
    return this.http.get<APIResponse>(environment.API_URL + constant.API_END_POINT.GET_EMPLOYEE)
    }

    createEmployee (OBJ: EmployeeModel) : Observable<APIResponse> {
      return this.http.post<APIResponse>(environment.API_URL + constant.API_END_POINT.CREATE_EMPLOYEE, OBJ)
      }
}
