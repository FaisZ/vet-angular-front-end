import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  rowsPerPage: number;
  pageNumber: number;

  onSelect(buttonId: number): void {
    //button ids: 0= first page, 1=prev page, 2=next page, 3=last page(WIP)
    this.pageNumber = this.appointmentService.changePage(buttonId);
  }

  rowsPerPageChanged(): void {
    console.log('row: '+this.rowsPerPage);
    this.appointmentService.setPageSize(this.rowsPerPage);
  }

  constructor(private appointmentService: AppointmentService) { 
    this.rowsPerPage = 10;
    this.pageNumber = 1;
  }

  ngOnInit(): void {
  }

}
