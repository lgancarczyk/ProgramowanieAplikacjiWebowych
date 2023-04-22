import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { InvoiceForm } from './invoice-form-model';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent implements OnInit {

  invoice!: FormGroup<InvoiceForm>

  ngOnInit(): void {
    console.log("duiuippa")
    
  }
}
