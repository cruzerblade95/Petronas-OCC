import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { DataTablesModule } from 'angular-datatables';
import { CrudService } from './services/crud.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SiteCodeComponent } from './site-code/site-code.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SiteCodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
