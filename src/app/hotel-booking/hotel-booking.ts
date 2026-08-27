import { Component, OnInit, inject } from '@angular/core';
import { Hotel } from '../models/hotel.interface';
import { BookingDetails } from '../models/booking.interface';
import { BookingService } from '../booking.service';
import { NgOptimizedImage, CurrencyPipe } from '@angular/common';
import { ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-booking',
  standalone: true,
  imports: [NgOptimizedImage, ReactiveFormsModule, CurrencyPipe],
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
  router = inject(Router);
  private formBuilder = inject(FormBuilder);
  hotelForm = this.formBuilder.nonNullable.group({
    hotelId: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [
      Validators.required,
      Validators.pattern(/^\d{9,15}$/)
    ]],
    rooms: ['', [
      Validators.required,
      Validators.min(1)
    ]]
  });
  ngOnInit(): void {

    this.savedBookingDetails = this.bookingService.getBookingDetails();
    if (!this.savedBookingDetails.flight) {
      return;
    }
    this.savedFlightDestination = this.savedBookingDetails.flight.toCountry;
    this.availableHotels = this.bookingService.getHotels(this.savedFlightDestination);

    this.hotelForm.controls.hotelId.valueChanges.subscribe(value => {

      this.selectedHotelId = value;

      const hotel = this.availableHotels.find(hotel => this.selectedHotelId === hotel.id);
      if (!hotel) {
        return;
      }
      this.selectedHotel = hotel;

      this.hotelForm.controls.rooms.setValidators([
        Validators.required,
        Validators.min(1),
        Validators.max(hotel.roomsAvailable)
      ]);

      this.hotelForm.controls.rooms.updateValueAndValidity();


    })
  }
  onSubmit() {
    if (this.hotelForm.invalid) {
      this.hotelForm.markAllAsTouched();
      return;
    }

    const hotelFormSave = this.hotelForm.getRawValue();

    const chosenHotel = this.availableHotels.find(hotel => hotel.id === hotelFormSave.hotelId);

    if (!chosenHotel) {
      return;
    }
    const hotelDetails: Partial<BookingDetails> = {
      hotel: chosenHotel,
      email: hotelFormSave.email,
      phone: hotelFormSave.phone,
      rooms: Number(hotelFormSave.rooms)
    };

    this.bookingService.updateBookingDetails(hotelDetails);

    this.router.navigate(['/summary']);

  }
}