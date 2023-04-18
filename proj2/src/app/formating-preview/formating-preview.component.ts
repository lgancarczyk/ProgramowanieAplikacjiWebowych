import { Component, Input } from '@angular/core';
import { CSS } from '../models/css.model';

@Component({
  selector: 'app-formating-preview',
  templateUrl: './formating-preview.component.html',
  styleUrls: ['./formating-preview.component.scss']
})
export class FormatingPreviewComponent {
  @Input() css: CSS = {
    color: undefined,
    border: undefined,
    'box-shadow': undefined,
    background: undefined
  }
}
