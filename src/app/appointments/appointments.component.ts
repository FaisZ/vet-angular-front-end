import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  appointments: Appointment[] = [];

  selectedAppointment?: Appointment;
  onSelect(appointment: Appointment): void {
    this.selectedAppointment = appointment;
  }
  constructor(private appointmentService: AppointmentService) { }

  getAppointments(): void {
    this.appointments = this.appointmentService.getAppointments();
  }
  
  ngOnInit(): void {
    this.getAppointments();
  }

}
