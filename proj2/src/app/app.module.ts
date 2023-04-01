import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormatingComponent } from './formating/formating.component';
import { FormatingPreviewComponent } from './formating-preview/formating-preview.component';
import { CssPreviewComponent } from './css-preview/css-preview.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FormatingComponent,
    FormatingPreviewComponent,
    CssPreviewComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
