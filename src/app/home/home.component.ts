import { Component, OnInit, inject } from '@angular/core';
import { BookingService, TravelSelection } from '../booking.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SameCountryValidatorDirective } from '../same-country.validator';



@Component({
  selector: 'app-home',
  imports: [FormsModule, SameCountryValidatorDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})


export class HomeComponent implements OnInit {
  countries: string[] = [];
  bookingService = inject(BookingService);
  router = inject(Router);
  travelFormModel: TravelSelection = {
    fromCountry: "",
    toCountry: ""
  }
  ngOnInit(): void {
    this.countries = this.bookingService.getCountries();
  }

  onSubmit(form: NgForm) {

    if (form.valid) {
      this.bookingService.updateTravelSelection(this.travelFormModel);
      this.router.navigate(['/flight-booking']);
    }

  }

}
