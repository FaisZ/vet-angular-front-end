import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

import { Appointment } from './appointment';
import { APPOINTMENTS } from './mock-appointments';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  getAppointments(): Observable<Appointment[]> {
    const appointments = of(APPOINTMENTS);
    this.messageService.add('Appointment Fetched');
    return appointments;
  }

  constructor(private messageService: MessageService) { }
}
