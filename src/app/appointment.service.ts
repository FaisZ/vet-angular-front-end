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
  private pageNumber = 1;
  private pageSize = 10;
  private nameSearchString = '';
  private dateSearchString = '';

  getAppointments(): Observable<Appointment[]> {
    const appointments = of(APPOINTMENTS);
    var url = this.appointmentUrl+'?pageNumber='+this.pageNumber+'&pageSize='+this.pageSize;
    if(this.nameSearchString!='')
      url += '&name='+this.nameSearchString;
    if(this.dateSearchString!='')
      url += '&date='+this.dateSearchString;
    return this.http.get<Appointment[]>(url);
  }

  setNameSearchString(nameSearchString: string): void{
    this.nameSearchString=nameSearchString;
  }

  setDateSearchString(dateSearchString: string): void{
    this.dateSearchString=dateSearchString;
  }

  setPageSize(pageSize: number): void{
    this.pageSize=pageSize;
  }

  nextPage(): void{
    this.pageNumber++;
    this.getAppointments();
  }

  prevPage(): void{
    if(this.pageNumber>1){
      this.pageNumber--;
      this.getAppointments();
    }
  }

  private log(message: string) {
    this.messageService.add(`AppointmentService: ${message}`);
  }

  constructor(
    private messageService: MessageService,
    private http: HttpClient
    ) { }
}
