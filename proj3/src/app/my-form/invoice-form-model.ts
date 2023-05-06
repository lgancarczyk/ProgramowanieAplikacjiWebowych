import { FormArray, FormControl, FormGroup } from "@angular/forms"
import { InvoiceItem } from "./invoice-item-model"
import { paymentMethod } from "./paymentMethod.type"

export type InvoiceForm = {
  issuer: FormGroup<{
    name: FormControl<string | null>,
    city: FormControl<string | null>,
    address: FormControl<string | null>,
    zipCode: FormControl<string | null>,
    nip: FormControl<string | null>,
    bankNumer: FormControl<string | null>,
  }>,
  purchaser: FormGroup<{
    name: FormControl<string | null>,
    city: FormControl<string | null>,
    address: FormControl<string | null>,
    zipCode: FormControl<string | null>,
    nip: FormControl<string | null>,
  }>,
  invoiceNumber: FormControl<string | null>,
  //creationDate: FormControl<Date | null>,
  //sellDate: FormControl<Date | null>,
  //terminationDate: FormControl<Date | null>,
  paymentMethod: FormControl<paymentMethod>,
  items: FormArray<FormGroup<InvoiceItem>>,
}