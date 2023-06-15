export type Employee = {
    emp: string;
  };
  export class Employees  {
    EmployeeId: number;
    EmployeeName:string;
    Address:string;
    Department:string;


 

  constructor(EmployeeId: number,EmployeeName:string,Address:string,Department:string){
    this.EmployeeId = EmployeeId;
    this.EmployeeName = EmployeeName;
    this.Address = Address;
    this.Department = Department;
  }

 

};