import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './public/welcome/welcome.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PricingComponent } from './public/pricing/pricing.component';
import { CompanyComponent } from './company/company/company.component';
import { AddCompanyComponent } from './company/add-company/add-company.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'pricing', component: PricingComponent},
  { path: 'user', children:[
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent}
  ]},
  { path: 'company', children:[
    { path: 'add', component: AddCompanyComponent},
    { path: 'view/:id', component: CompanyComponent}
  ]},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
