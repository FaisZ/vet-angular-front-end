import { Component, Input, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  @Input() dateString?: string;
  @Input() nameString?: string;

  onSearch(): void {
    // this.nameString = 'John';
    console.log('date: '+this.dateString);
    this.appointmentService.search(this.nameString, this.dateString);
  }

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
  }

}
