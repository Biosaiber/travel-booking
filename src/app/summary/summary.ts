import { Component, OnInit, inject } from '@angular/core';
import { BookingService } from '../booking.service';
import { BookingDetails } from '../models/booking.interface';

@Component({
  selector: 'app-summary',
  imports: [],
  templateUrl: './summary.html',
  styleUrl: './summary.css',
})
export class Summary implements OnInit {
  bookingService = inject(BookingService);
  summaryDetails?: BookingDetails;
  totalCost?: number;
  ngOnInit(): void {
    this.summaryDetails = this.bookingService.getBookingDetails();

        if(!this.summaryDetails?.departureDate || !this.summaryDetails?.returnDate) {
      return;
    }
    const departureDate: Date = new Date(this.summaryDetails?.departureDate);
    const returnDate: Date = new Date(this.summaryDetails?.returnDate);
    const travelPeriod: number =  Number(returnDate) - Number(departureDate);
    const days: number = travelPeriod / 1000 / 60 / 60 / 24;

    if (!this.summaryDetails.flight?.price || !this.summaryDetails.travelers || !this.summaryDetails.hotel?.price || !this.summaryDetails.rooms) {
      return;
    }

    this.totalCost = this.summaryDetails.flight.price * this.summaryDetails.travelers + this.summaryDetails.hotel.price * this.summaryDetails.rooms * days;

  }

}
