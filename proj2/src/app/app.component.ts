import { Component,  } from '@angular/core';
import { CSS } from './models/css.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proj2';

  protected css: CSS = {
    color: undefined,
    border: undefined,
    'box-shadow': undefined,
    background: undefined
  }

  lalala:any = "";
  childToParent(css:CSS){
    this.css = css;
    }
}
