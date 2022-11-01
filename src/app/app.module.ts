import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { NavbarComponent } from './../layout/navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';

import { SchoolComponent } from './school/school.component';
import {HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    TableComponent,
    SchoolComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
