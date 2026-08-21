import { Component, OnInit, inject } from '@angular/core';
import { BookingService } from '../booking.service';
import { TravelSelection } from '../booking.service';
import { Flight } from '../models/flight.interface';
import { ReactiveFormsModule, AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookingDetails } from '../models/booking.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-booking',
  imports: [ReactiveFormsModule],
  templateUrl: './flight-booking.html',
  styleUrl: './flight-booking.css',
})
export class FlightBooking implements OnInit {
  bookingService = inject(BookingService);
  router = inject(Router);
  journey!: TravelSelection;
  availableFlights!: Flight[];
  flightForm = new FormGroup({
    flightId: new FormControl("", [Validators.required]),
    customerName: new FormControl("", { nonNullable: true, validators: [Validators.required, Validators.minLength(3)] }),
    travelers: new FormControl("", { validators: [Validators.required, Validators.min(1)] }),
    departureDate: new FormControl("", { nonNullable: true, validators: [Validators.required, this.noPastDateValidator] }),
    returnDate: new FormControl("", { nonNullable: true, validators: [Validators.required, this.noPastDateValidator] })
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
    if (this.flightForm.valid) {
      console.log(this.flightForm.value);




      const flightFormSave = this.flightForm.value;




      //by id take all data
      const chosenFlight = this.availableFlights.find(flight => flight.id === flightFormSave.flightId);
      if (!chosenFlight) {
        return
      }

      const flightDetails: Partial<BookingDetails> = {
        flight: chosenFlight,
        customerName: flightFormSave.customerName,
        departureDate: flightFormSave.departureDate,
        returnDate: flightFormSave.returnDate,
        travelers: Number(flightFormSave.travelers)
      }
      this.bookingService.updateBookingDetails(flightDetails);

      this.router.navigate(['/hotel-booking']);


    }
  }
}
