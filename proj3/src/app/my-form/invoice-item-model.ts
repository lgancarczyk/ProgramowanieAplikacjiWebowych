import { FormControl } from "@angular/forms"
import { vatStake } from "./vatStake.type"

export type InvoiceItem = {
  name: FormControl<string | null>,
  quantity: FormControl<number | null>,
  price: FormControl<number | null>,
  vat: FormControl<vatStake>
}