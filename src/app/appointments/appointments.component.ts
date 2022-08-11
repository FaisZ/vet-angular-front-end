import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  appointment: Appointment = {
    id: 1,
    ownerName: 'Guy',
    petName: 'Micheel Mancholetti',
    contactDetails: "123123123",
    appointmentTime: "3 Nov 2022"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
