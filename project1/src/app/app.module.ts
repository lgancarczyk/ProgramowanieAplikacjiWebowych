import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';


import { ToolbarComponent } from './navigation/toolbar/toolbar.component';
import { SidebarComponent } from './navigation/sidebar/sidebar.component';
import { WelcomeComponent } from './public/welcome/welcome.component';
import { PricingComponent } from './public/pricing/pricing.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddCompanyComponent } from './company/add-company/add-company.component';
import { CompanyComponent } from './company/company/company.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ManageUserComponent } from './user/manage-user/manage-user.component';





const MatImports = [
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatInputModule
]

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
    WelcomeComponent,
    PricingComponent,
    NotFoundComponent,
    AddCompanyComponent,
    CompanyComponent,
    LoginComponent,
    RegisterComponent,
    ManageUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatImports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
