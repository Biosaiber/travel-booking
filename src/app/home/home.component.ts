import { Component, OnInit, inject } from '@angular/core';
import { BookingService, TravelSelection } from '../booking.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})


export class HomeComponent implements OnInit {
  countries: string[] = [];
  bookingService = inject(BookingService);
  travelModel: TravelSelection = {
    fromCountry: '',
    toCountry: ''
  };
  ngOnInit(): void {
    this.countries = this.bookingService.getCountries();
  }

  onSubmit() {

  }

}
