import { Injectable } from '@angular/core';
import { Appointment } from './appointment';
import { APPOINTMENTS } from './mock-appointments';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  getAppointments(): Appointment[] {
    return APPOINTMENTS;
  }
  
  constructor() { }
}
