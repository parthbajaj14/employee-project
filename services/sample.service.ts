import { Injectable } from '@angular/core';

import { Employee,Employees } from 'src/app/models/Employee';

import { HttpClient,HttpParams,HttpHeaders } from "@angular/common/http";

import { Observable,catchError } from "rxjs";

@Injectable({

  providedIn: 'root'

})

export class SampleService {

  errorHandler:any="some error;"

  private emp: Employee[] = [

    { emp: 'EmpId: 1345234' },

    { emp: 'EmpName: XYZ' },

    { emp: 'EmpContact: 9897654324' },

  ];

  getDetails() {

    return this.emp;

  }

  httpOptions = {

    headers: new HttpHeaders({

        'Content-Type': 'application/json'

    })

}

getAllEmployees():Observable<any>{
  return this.http.get<any>("https://localhost:5001/api/employee")
}

addEmployee(e: Employees): Observable < JSON > {

  return this.http.post < JSON > ('https://localhost:5001/api/employee/AddEmployee', JSON.stringify(e), this.httpOptions);

}

 

  getEmployeeList(Id:number): Observable < any > {

    let queryParams = new HttpParams();

    queryParams = queryParams.append("id",Id);

    return this.http.get < any > ("https://localhost:5001/api/employee/GetEmployeeDetails",{params:queryParams});

}




deleteEmployee(Id:number): Observable < any > {

  let queryParams = new HttpParams();

  queryParams = queryParams.append("id",Id);

  return this.http.delete < any > ("https://localhost:5001/api/employee/DeleteEmployeeDetails",{params:queryParams});

}

updateEmployee(emp: Employees): Observable < any > {

 

 return this.http.put < any > ("https://localhost:5001/api/employee/UpdateEmployeeDetails",JSON.stringify(emp), this.httpOptions);

}






  constructor(private http: HttpClient) { }

}