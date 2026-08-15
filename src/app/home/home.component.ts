import { Component, OnInit, inject } from '@angular/core';
import { BookingService, TravelSelection } from '../booking.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  imports: [FormsModule],
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
    // validation
    // if valid
    if (form.valid) {
      // update travelSelection
      this.bookingService.updateTravelSelection(this.travelFormModel);
      this.router.navigate(['/flight-booking']);
    }


    // redirect to flight-booking.component


    // if no message handler error method
  }

}
