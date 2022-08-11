import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { MessageService } from '../message.service';

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
    this.messageService.add(`selected pet: ${appointment.petName}`)
  }
  constructor(private appointmentService: AppointmentService, private messageService: MessageService) { }

  getAppointments(): void {
    this.appointmentService.getAppointments().subscribe(appointments => this.appointments = appointments);

    // this.appointments = this.appointmentService.getAppointments();
  }

  ngOnInit(): void {
    this.getAppointments();
  }

}
