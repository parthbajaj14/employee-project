import { Component,OnInit,Input } from '@angular/core';
import { FormControl,FormBuilder,FormGroup } from '@angular/forms';
import { SampleService } from 'src/app/services/sample.service';
import { Employee } from 'src/app/models/Employee';

 

 

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{
  employeeList:any=[];
   particularEmployee:any={};
   id:number=0;
   show:boolean=false;

  pageheader: string = "Employee Details" ;
  twoWayData="This is an example component of two way data binding";
  // firstName: string = "Karthik";  
  // lastName: string = "Elumalai";  
  // gender: string = "Male";  
  // qualification: string = "MCA";
  name = new FormControl('');
  emp: Employee[] | undefined;
  employeeForm:FormGroup|any;

  constructor(private sampleService: SampleService,private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      employeeId: [''],
      employeeName: [''],
      address: [''],
      department: [''],
    });
    this.emp = this.sampleService.getDetails();

  }
  // callService(){
  //   this.sampleService.getEmployeeList().subscribe(data =>{
  //     console.log(data)
  //     this.employeeList = data;
  //     console.log(this.employeeList)
  //     console.log(this.employeeList[0].employeeName)
  //    // console.log(data)
  //     this.employeeForm.controls['employeeId'].setValue(this.employeeList[1].employeeId)
  //     this.employeeForm.controls['employeeName'].setValue(this.employeeList[1].employeeName)
  //     this.employeeForm.controls['address'].setValue(this.employeeList[1].address)
  //     this.employeeForm.controls['department'].setValue(this.employeeList[1].department)

  //   });
  // }

 

  GetEmployee(){
    this.id=this.employeeForm.get('employeeId').value
    this.sampleService.getEmployeeList(this.id).subscribe(data =>{
      console.log(data)
      this.particularEmployee = data;
      console.log(this.particularEmployee)
      console.log(this.particularEmployee.employeeName)
     // console.log(data)
      this.employeeForm.controls['employeeId'].setValue(this.particularEmployee.employeeId)
      this.employeeForm.controls['employeeName'].setValue(this.particularEmployee.employeeName)
      this.employeeForm.controls['address'].setValue(this.particularEmployee.address)
      this.employeeForm.controls['department'].setValue(this.particularEmployee.department)

    });
  }

 

  onClickSave(empValue:any){
    this.sampleService.addEmployee(empValue).subscribe((response:any) => {
      console.log(response)
      //Redirecting to user List page after save or update
      //this.router.navigate(['/user']);
      if(response=="ok"){
        alert("save successul");
       console.log("save successful")
      }
  });
  }

 

  DeleteEmployee(){
    this.id=this.employeeForm.get('employeeId').value
    this.sampleService.deleteEmployee(this.id).subscribe(res =>{
      console.log(res)
      if(res=="deleted"){
        alert("delete successul");
       console.log("delete successful")
      }
      else{
        alert("delete not successul");
      }
     //console.log(data)
      this.employeeForm.controls['employeeId'].setValue('')
      this.employeeForm.controls['employeeName'].setValue('')
      this.employeeForm.controls['address'].setValue('')
      this.employeeForm.controls['department'].setValue('')

    });
  }
  updateEmployee(updatedEmpValue:any){
    this.sampleService.updateEmployee(updatedEmpValue).subscribe((response:any) => {
      console.log(response)
      //Redirecting to user List page after save or update
      //this.router.navigate(['/user']);
      if(response=="updated"){
        alert("update successful");
       console.log("update successful")
      }
      else{
        alert("update not successful"); 
      }
  });
  }
 view(){
  this.show=true;
    this.sampleService.getAllEmployees().subscribe(data =>{
      console.log(data)
      this.employeeList = data;
      console.log(this.employeeList)
      console.log(this.employeeList[0].employeeName)
    });
  }
  hide(){
    this.show=false;
  }
 


  ngOnInit(): void {
    //this.callService();
   // this.callServiceForParticularEmployee();
    console.log(this.employeeList);
    }



  onSave($event:any){    
    console.log("Save button is clicked!", $event);    
  }   
}