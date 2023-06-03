import { FormArray, FormControl, FormGroup } from "@angular/forms"

export type AddCompanyForm = {
    companyName: FormControl<string | null>,
    companyDescription: FormControl<string | null>,
    image: FormControl<string | null>
}