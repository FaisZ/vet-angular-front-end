import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { MessageService } from '../message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  appointments: Appointment[] = [];
  // totalAngularPackages = 'as';
  // objects = new Object;
  selectedAppointment?: Appointment;

  onSelect(appointment: Appointment): void {
    this.selectedAppointment = appointment;
    this.messageService.add(`selected pet: ${appointment.petName}`)
  }

  constructor(private appointmentService: AppointmentService, private messageService: MessageService) {
    // this._subscription = nameService.nameChange.subscribe((value) => { 
    //   this.name = value; 
    // });
    this.appointmentService.appointmentChange.subscribe(() => {
      this.getAppointments();
      // this.appointments = value
    })
   }

  getAppointments(): void {
    this.appointmentService.getAppointments().subscribe(appointments => this.appointments = appointments);

    // this.appointments = this.appointmentService.getAppointments();
  }

  ngOnInit(): void {
    this.getAppointments();
    //just for test purposes 
    // this.http.get<any>('https://localhost:7139/api/appointments',{ observe: 'response' }).subscribe(response => {
    //   console.log('respones '+response.status);
    //   // this.totalAngularPackages = data.results[0].package.name;
    // }, error => {
    //   console.log('errs '+error.ok);
    //   console.log('errs '+error.status);
    //   console.log('errs '+error.statusText);
    //   console.log('errs '+error.headers);
    // });
    // this.http.get<any>('https://localhost:7139/api/appointments',).subscribe(data => {
    //   console.log('tes');
    //   // this.totalAngularPackages = data.results[0].package.name;
    //   // this.totalAngularPackages = data.length;
    //   for(var i=0; i<data.length; i++){
    //     console.log('ownerName '+data[i].ownerName);
    //     console.log('petName '+data[i].petName);
    //     console.log('contactDetails '+data[i].contactDetails);
    //     console.log('appointmentTime '+data[i].appointmentTime);
    //   }
    // }) 
  }

}
