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

  appointmentChange: Subject<void> = new Subject();
  
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
    this.appointmentChange.next();
  }

  setPageSize(pageSize: number): void{
    this.pageSize=pageSize;
    //reset page to first page
    this.pageNumber = 1;
    this.appointmentChange.next();
  }

  changePage(buttonId: number): number {
    //button ids: 0= first page, 1=prev page, 2=next page, 3=last page(WIP)
    if(buttonId==0){
        this.pageNumber = 1;
    }
    else if(buttonId==1){
      //checks whether it's not in 1st page already
      if(this.pageNumber>1){
        this.pageNumber--;
      }
    }
    else{
      //TODO: add checks when on last page
      this.pageNumber++;
    }
    this.appointmentChange.next();
    return this.pageNumber;
  }

  private log(message: string) {
    this.messageService.add(`AppointmentService: ${message}`);
  }

  constructor(
    private messageService: MessageService,
    private http: HttpClient
    ) { }
}
