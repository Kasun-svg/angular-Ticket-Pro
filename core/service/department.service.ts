import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { constant } from '../constant/constant';
import { map, Observable } from 'rxjs';
import { APIResponse, Department } from '../models/APIModel';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  getAllDept () : Observable<APIResponse> {
  return this.http.get<APIResponse>(environment.API_URL + constant.API_END_POINT.GET_DEPARTMENT)
  }

  getDeptList () : Observable<Department[] > {
    return this.http.get<Department[] >(environment.API_URL + constant.API_END_POINT.GET_EMPLOYEE).pipe(map((res:any)=>{
    return res.data;
    }))

    }

  createNewDept (obj:Department) : Observable<APIResponse> {
    return this.http.post<APIResponse>(environment.API_URL + constant.API_END_POINT.CREATE_DEPARTMENT,obj)
    }

  updateDept (obj:Department) : Observable<APIResponse> {
      return this.http.put<APIResponse>(environment.API_URL + constant.API_END_POINT.UPDATE_DEPARTMENT,obj)
      }

  deleyeDept (id: number) : Observable<APIResponse> {
        return this.http.delete<APIResponse>(environment.API_URL + constant.API_END_POINT.DELETE_DEPARTMENT + id)
        }
}
