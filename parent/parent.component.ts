import { Component,ViewChild,AfterViewInit } from '@angular/core';
import { ChildComponent } from 'src/app/parent/child/child.component';

 

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit{
data:string="Message from parent component";
dataFromChild:any;
dataFromChildOutput:any;
@ViewChild(ChildComponent,{static:false}) child:any;
ngAfterViewInit(){
  this.dataFromChild=this.child.childToParentMsg;
}
receiveData($event:any){
  this.dataFromChildOutput=$event;
  console.log(this.dataFromChildOutput)
}
}