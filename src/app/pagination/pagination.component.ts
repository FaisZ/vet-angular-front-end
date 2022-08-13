import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  rowsPerPage: number;

  onSelect(buttonId: number): void {
    if(buttonId==0)
      this.appointmentService.prevPage();
    else
      this.appointmentService.nextPage();
  }

  rowsPerPageChanged(): void {
    console.log('row: '+this.rowsPerPage);
    this.appointmentService.setPageSize(this.rowsPerPage);
  }

  constructor(private appointmentService: AppointmentService) { 
    this.rowsPerPage = 10;
  }

  ngOnInit(): void {
  }

}
