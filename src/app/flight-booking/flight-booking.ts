import { Component, OnInit, inject } from '@angular/core';
import { BookingService } from '../booking.service';
import { TravelSelection } from '../booking.service';
import { Flight } from '../models/flight.interface';
import { ReactiveFormsModule, AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-flight-booking',
  imports: [ReactiveFormsModule],
  templateUrl: './flight-booking.html',
  styleUrl: './flight-booking.css',
})
export class FlightBooking implements OnInit {
  bookingService = inject(BookingService);
  journey!: TravelSelection;
  availableFlights!: Flight[];
  flightForm = new FormGroup({
    flightId: new FormControl("", [Validators.required]),
    customerName: new FormControl("", [Validators.required, Validators.minLength(3)]),
    travelers: new FormControl("", [Validators.required, Validators.min(1)]),
    departureDate: new FormControl("", [Validators.required, this.noPastDateValidator]),
    returnDate: new FormControl("", [Validators.required, this.noPastDateValidator])
  }, [this.dateOrderValidator]);

  noPastDateValidator(control: AbstractControl) {
    const conValue = control.value;

    if (!conValue) {
      return null;
    }

    const today = new Date().toISOString().split('T')[0];

    if (conValue < today) {
      return { pastDate: true }
    } else {
      return null
    }
  }
  dateOrderValidator(control: AbstractControl) {
    const departureDate = control.get('departureDate')?.value;
    const returnDate = control.get('returnDate')?.value;
    if (!departureDate || !returnDate) {
      return null;
    }

    if (returnDate <= departureDate) {
      return { pastReturnDate: true };
    }

    return null;
  }
  ngOnInit(): void {

    this.journey = this.bookingService.getTravelSelection();

    this.availableFlights = this.bookingService.getFlights(
      this.journey.fromCountry,
      this.journey.toCountry
    );

  }
  onSubmit() {

  }
}
