import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddCompanyForm } from 'src/models/company/addCompany-form-model';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent {

  imagePath: string = "/assets/images/user.png"

  form!: FormGroup<AddCompanyForm>;

  ngOnInit(): void {
    this.form = new FormGroup({
		companyName: new FormControl("", [Validators.required]),
		companyDescription: new FormControl(""),
		image: new FormControl("",)
    })
    
  }

//   signup = new FormGroup({
//     email: new FormControl(null, Validators.required),
//     image: new FormControl(null, [Validators.required, requiredFileType('png')])
//   });


  url: any = "/assets/images/user.png"
	msg = "";
	
	selectFile(event: any) {
		// if(!event.target.files[0] || event.target.files[0].length == 0) {
		// 	this.msg = 'You must select an image';
		// 	return;
		// }
		
		 var mimeType = event.target.files[0].type;
		
		if (mimeType.match(/image\/*/) == null) {
			this.msg = "Only images are supported";
			return;
		}
		
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		
		reader.onload = (_event) => {
			this.msg = "";
			this.url = reader.result; 
		}
	}

	onDeleteImage(): void{

	}
}
function requiredFileType(arg0: string): import("@angular/forms").ValidatorFn {
	throw new Error('Function not implemented.');
}

