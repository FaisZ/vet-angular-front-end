import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  onSelect(buttonId: number): void {
    if(buttonId==0)
      this.appointmentService.prevPage();
    else
      this.appointmentService.nextPage();
  }

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
  }

}
