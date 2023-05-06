import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { InvoiceForm } from './invoice-form-model';
import { InvoiceItem } from './invoice-item-model';
import { paymentMethod } from './paymentMethod.type';
import { vatStake } from './vatStake.type';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent implements OnInit {

  invoice!: FormGroup<InvoiceForm>
  //paymentMethods = Object.values(paymentMethod).filter((v) => isNaN(Number(v)))
  //paymentMethods = paymentMethod;


  ngOnInit(): void {

    this.invoice= new FormGroup({
      issuer: new FormGroup({
        name: new FormControl(""),
        city: new FormControl(""),
        address: new FormControl(""),
        zipCode: new FormControl(""),
        nip: new FormControl(""),
        bankNumer: new FormControl("")
      }),
      purchaser: new FormGroup({
        name: new FormControl(""),
        city: new FormControl(""),
        address: new FormControl(""),
        zipCode: new FormControl(""),
        nip: new FormControl("")
      }),
      invoiceNumber: new FormControl(""),
      paymentMethod: new FormControl<paymentMethod>("cash", {nonNullable:true}),
      items: new FormArray<FormGroup<InvoiceItem>>([]),
    })
  }

  onAddItem() {
    const itemName = 'Item ' + this.invoice.controls.items.length
    const itemPrice = 0
    const itemQuantity = 1
    const vat = 5

    const itemFG: FormGroup<InvoiceItem> = new FormGroup({
      name: new FormControl(itemName),
      price: new FormControl(itemPrice),
      quantity: new FormControl(itemQuantity),
      vat: new FormControl<vatStake>(vat, {nonNullable: true})
    })
    this.invoice.controls.items.push(itemFG)
  }

  onSubmit(): void{
    console.log(this.invoice.value)
  }
}