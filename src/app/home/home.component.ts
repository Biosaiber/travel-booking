import { Component, OnInit, inject } from '@angular/core';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.css',
})
export class HomeComponent implements OnInit {
  countries: string[] = [];
  bookingService = inject(BookingService);
  ngOnInit(): void {
    this.countries = this.bookingService.getCountries();
  }
  
}
