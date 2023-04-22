import { FormArray, FormControl, FormGroup } from "@angular/forms"

export type InvoiceForm = {
  issuer: FormGroup<{
    name: FormControl<string>,
    city: FormControl<string>
  }>,
  invoiceNumber: FormControl<string>
}