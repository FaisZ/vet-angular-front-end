import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentsComponent } from './appointments/appointments.component';

import { FormsModule } from '@angular/forms';
import { AppointmentDetailComponent } from './appointment-detail/appointment-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentsComponent,
    AppointmentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
