import { Component, OnInit, inject } from '@angular/core';
import { Hotel } from '../models/hotel.interface';
import { BookingDetails } from '../models/booking.interface';
import { BookingService } from '../booking.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-hotel-booking',
  imports: [NgOptimizedImage],
  templateUrl: './hotel-booking.html',
  styleUrl: './hotel-booking.css',
})
export class HotelBooking implements OnInit {
  availableHotels!: Hotel[];
  savedBookingDetails!: BookingDetails;
  savedFlightDestination!: string;
  bookingService = inject(BookingService);
  ngOnInit(): void {
    this.savedBookingDetails = this.bookingService.getBookingDetails();
    if (!this.savedBookingDetails.flight) {
      return;
    }
    this.savedFlightDestination = this.savedBookingDetails.flight?.toCountry;
    this.availableHotels = this.bookingService.getHotels(this.savedFlightDestination);
    console.log(this.availableHotels);
  }
}
