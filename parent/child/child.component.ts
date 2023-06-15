import { Component,Input,Output,EventEmitter } from '@angular/core';

 

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() dataTransfer:any;
  childToParentMsg:string="Message from child to parent component"
  childToParentMsgOutput:string="Message from child to parent component using output decorator"
  @Output() dataEvent=new EventEmitter<string>();
  constructor(){}
  emitData(){
    this.dataEvent.emit(this.childToParentMsgOutput)
  }
}