import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Appointment } from './appointment';
import { APPOINTMENTS } from './mock-appointments';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private appointmentUrl = 'https://localhost:7139/api/appointments';

  getAppointments(): Observable<Appointment[]> {
    const appointments = of(APPOINTMENTS);
    // var test = 'ngahaha';
    // var val = this.http.get<any>(this.appointmentUrl).subscribe(
    //   data => {
    //     test = data.ownerName;
    //     console.log(data.ownerName);
    //   }
    // );
    // console.log("HEYO");
    // console.log(val);
    // var vah;
    // this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular').subscribe(data => {
    //   vah = data.total;
    // }) 
    // console.log(vah);

    // return appointments;
    return this.http.get<Appointment[]>(this.appointmentUrl);
  }

  private log(message: string) {
    this.messageService.add(`AppointmentService: ${message}`);
  }

  constructor(
    private messageService: MessageService,
    private http: HttpClient
    ) { }
}
