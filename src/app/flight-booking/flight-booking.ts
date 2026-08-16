import { Component, OnInit, inject } from '@angular/core';
import { BookingService } from '../booking.service';
import { TravelSelection } from '../booking.service';
import { Flight } from '../models/flight.interface';

@Component({
  selector: 'app-flight-booking',
  imports: [],
  templateUrl: './flight-booking.html',
  styleUrl: './flight-booking.css',
})
export class FlightBooking implements OnInit {
  bookingService = inject(BookingService);
  journey!: TravelSelection;
  availableFlights!: Flight[];
  ngOnInit(): void {
    console.log('INIT');

    this.journey = this.bookingService.getTravelSelection();
    console.log('journey:', this.journey);

    this.availableFlights = this.bookingService.getFlights(
      this.journey.fromCountry,
      this.journey.toCountry
    );

    console.log('availableFlights:', this.availableFlights);
  }
}
