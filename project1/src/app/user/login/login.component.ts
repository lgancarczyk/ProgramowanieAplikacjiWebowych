import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginForm } from 'src/models/user/login-form-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  constructor(private readonly route: ActivatedRoute, private readonly router: Router) {}

  form!: FormGroup<LoginForm>;
  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required])
    })
    
  }

  onSubmit(): void{
    if (this.form.valid) {
      console.log(this.form.value)
    }
  }

  onGoToRegister(): void{
    this.router.navigate(['/user', 'register'])
  }
}

