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
    customerName: new FormControl("", [Validators.required]),
    travelers: new FormControl("", [Validators.required, Validators.min(1)]),
    departureDate: new FormControl("", [Validators.required, this.noPastDateValidator]),
    returnDate: new FormControl("", [Validators.required])
  });
  // method for departureDate
  noPastDateValidator(control: AbstractControl) {
    const conValue = control.value;
    const today = new Date().toISOString().split('T')[0];
    if (conValue < today) {
      return { pastDate: true }
    } else {
      return null
    }
  }
  dateOrderValidator(control: AbstractControl) {
    const departureDate = this.flightForm.controls.departureDate.value;
    const returnDate = this.flightForm.controls.returnDate.value;

/*    TU SOM SKONCIL: robim metodu pre validaciu datumov aby returnDate nebol neskorsi ako departureDate 
      if (returnDate > departureDate) {
      return 
    } */
  }
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


  // method for aarivalDate
}
