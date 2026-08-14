import { Component, OnInit, inject } from '@angular/core';
import { BookingService } from '../booking.service';

interface TravelModel {
  fromCountry: string;
  toCountry: string;
}

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})


export class HomeComponent implements OnInit {
  countries: string[] = [];
  bookingService = inject(BookingService);
  travelModel: TravelModel = {
    fromCountry: '',
    toCountry: ''
  };
  ngOnInit(): void {
    this.countries = this.bookingService.getCountries();
  }

}
