import { Component, OnInit, inject } from '@angular/core';
import { Hotel } from '../models/hotel.interface';
import { BookingDetails } from '../models/booking.interface';
import { BookingService } from '../booking.service';
import { NgOptimizedImage } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-hotel-booking',
  imports: [NgOptimizedImage, ReactiveFormsModule],
  templateUrl: './hotel-booking.html',
  styleUrl: './hotel-booking.css',
})
export class HotelBooking implements OnInit {
  availableHotels!: Hotel[];
  savedBookingDetails!: BookingDetails;
  savedFlightDestination!: string;
  selectedHotelId!: string;
  selectedHotel: Hotel | undefined;
  bookingService = inject(BookingService);
  hotelForm = new FormGroup({
    hotelId: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    phone: new FormControl("", [Validators.required, Validators.pattern(/^\d{9,15}$/)]),
    rooms: new FormControl("", [Validators.required, Validators.min(1)])
  })
  ngOnInit(): void {

    this.savedBookingDetails = this.bookingService.getBookingDetails();
    if (!this.savedBookingDetails.flight) {
      return;
    }
    this.savedFlightDestination = this.savedBookingDetails.flight.toCountry;
    this.availableHotels = this.bookingService.getHotels(this.savedFlightDestination);

    this.hotelForm.controls.hotelId.valueChanges.subscribe(value => {

      if (value === null) {
        return;
      }
      this.selectedHotelId = value;

      const hotel = this.availableHotels.find(hotel => this.selectedHotelId === hotel.id);
      if (!hotel) {
        return;
      }
      this.selectedHotel = hotel;

      this.hotelForm.controls.rooms.setValidators([
        Validators.required,
        Validators.min(1),
        Validators.max(this.selectedHotel.roomsAvailable)
      ]);

      this.hotelForm.controls.rooms.updateValueAndValidity();
    

    })
  }
}
