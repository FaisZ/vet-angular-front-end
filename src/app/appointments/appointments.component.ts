import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { APPOINTMENTS } from '../mock-appointments';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  appointments = APPOINTMENTS;
  // appointment: Appointment = {
  //   id: 1,
  //   ownerName: 'Guy',
  //   petName: 'Micheel Mancholetti',
  //   contactDetails: "123123123",
  //   appointmentTime: "3 Nov 2022"
  // }

  selectedAppointment?: Appointment;
  onSelect(appointment: Appointment): void {
    this.selectedAppointment = appointment;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
