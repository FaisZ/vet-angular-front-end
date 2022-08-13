import { Injectable } from '@angular/core';
import { Observable, of, map, Subject } from 'rxjs';
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

  appointmentChange: Subject<Observable<Appointment[]>> = new Subject<Observable<Appointment[]>>();
  
  getAppointments(): Observable<Appointment[]> {
    const appointments = of(APPOINTMENTS);
    var url = this.appointmentUrl+'?pageNumber='+this.pageNumber+'&pageSize='+this.pageSize;
    if(this.nameSearchString!='')
      url += '&name='+this.nameSearchString;
    if(this.dateSearchString!='')
      url += '&date='+this.dateSearchString;
      console.log('final url: '+url);
    return this.http.get<Appointment[]>(url);
  }

  search(nameSearchString?: string, dateSearchString?: string): void{
    this.nameSearchString = '';
    this.dateSearchString = '';
    if(nameSearchString)
      this.nameSearchString=nameSearchString;
    if(dateSearchString)
      this.dateSearchString=dateSearchString;
    this.appointmentChange.next(this.getAppointments());
  }

  setPageSize(pageSize: number): void{
    this.pageSize=pageSize;
    this.appointmentChange.next(this.getAppointments());
  }

  nextPage(): void{
    this.pageNumber++;
    this.appointmentChange.next(this.getAppointments());
  }

  prevPage(): void{
    if(this.pageNumber>1){
      this.pageNumber--;
      this.appointmentChange.next(this.getAppointments());
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
