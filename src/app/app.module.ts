import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginPage } from './login/login.page';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { CatalogPage } from './catalog/catalog.page';
import { TrainerPage } from './trainer/trainer.page';

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    CatalogPage,
    TrainerPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
