import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentsComponent } from './appointments/appointments.component';

import { FormsModule } from '@angular/forms';
import { AppointmentDetailComponent } from './appointment-detail/appointment-detail.component';
import { MessagesComponent } from './messages/messages.component';

import { HttpClientModule } from '@angular/common/http';
import { FiltersComponent } from './filters/filters.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentsComponent,
    AppointmentDetailComponent,
    MessagesComponent,
    FiltersComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
