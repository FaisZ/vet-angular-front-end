import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  public dateString?: string;
  public nameString?: string;

  onSearch(): void {
    this.nameString = 'John';
    this.appointmentService.search(this.nameString, this.dateString);
  }

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
  }

}
