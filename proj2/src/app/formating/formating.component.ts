import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CSS } from '../models/css.model';

@Component({
  selector: 'app-formating',
  templateUrl: './formating.component.html',
  styleUrls: ['./formating.component.scss']
})
export class FormatingComponent {
   protected css: CSS = {
    color: undefined,
    border: undefined,
    'box-shadow': undefined,
    background: undefined
  }
  color = '#fff'
  background = '#444'

  updateValue(val:string, field:string){
    switch(field){
      case "color":{
        this.css.color = val;
        break;
      }
      case "border":{
        this.css.border = val;
        break;
      }
      case "shadow":{
        this.css['box-shadow'] = val;
        break;
      }
      case "background":{
        this.css.background = val;
        break;
      }
    }
    this.sendToParent(this.css);

  }
  @Output() childToParent = new EventEmitter<CSS>();

  sendToParent(obj: CSS){
    this.childToParent.emit(obj);
    }
}
