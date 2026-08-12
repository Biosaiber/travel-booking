import { Injectable } from '@angular/core';
import { BookingDetails } from './models/booking.interface';
import { Flight } from './models/flight.interface';
import { Hotel } from './models/hotel.interface';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  bookingDetails: BookingDetails = {};
  countries: string[] = [];
  flights: Flight[] = [
    {
      id: "FL001",
      airline: "KLM",
      travelClass: "Economy",
      departureTime: "08:30",
      price: 180,
      fromCountry: "Netherlands",
      toCountry: "Germany"
    },
    {
      id: "FL002",
      airline: "Lufthansa",
      travelClass: "Business",
      departureTime: "13:45",
      price: 260,
      fromCountry: "Netherlands",
      toCountry: "Germany"
    },

    {
      id: "FL003",
      airline: "Ryanair",
      travelClass: "Economy",
      departureTime: "09:15",
      price: 120,
      fromCountry: "Netherlands",
      toCountry: "France"
    },
    {
      id: "FL004",
      airline: "Air France",
      travelClass: "Business",
      departureTime: "17:20",
      price: 280,
      fromCountry: "Netherlands",
      toCountry: "France"
    },

    {
      id: "FL005",
      airline: "British Airways",
      travelClass: "Economy",
      departureTime: "10:00",
      price: 210,
      fromCountry: "Germany",
      toCountry: "United Kingdom"
    },
    {
      id: "FL006",
      airline: "EasyJet",
      travelClass: "Economy",
      departureTime: "18:30",
      price: 170,
      fromCountry: "Germany",
      toCountry: "United Kingdom"
    }
  ];
  hotels: Hotel[] = [
    {
      id: "HT001",
      name: "Berlin Central Hotel",
      country: "Germany",
      price: 120,
      roomsAvailable: 8,
      stars: 4,
      rating: 8.7,
      address: "Alexanderplatz 12, Berlin",
      imageUrl: "https://picsum.photos/300/200?random=1",
      wifi: true,
      breakfastIncluded: true
    },
    {
      id: "HT002",
      name: "Munich Grand Resort",
      country: "Germany",
      price: 180,
      roomsAvailable: 5,
      stars: 5,
      rating: 9.3,
      address: "Marienplatz 5, Munich",
      imageUrl: "https://picsum.photos/300/200?random=2",
      wifi: true,
      breakfastIncluded: false
    },

    {
      id: "HT003",
      name: "Paris City Hotel",
      country: "France",
      price: 150,
      roomsAvailable: 10,
      stars: 4,
      rating: 8.9,
      address: "Rue de Rivoli 18, Paris",
      imageUrl: "https://picsum.photos/300/200?random=3",
      wifi: true,
      breakfastIncluded: true
    },
    {
      id: "HT004",
      name: "Nice Beach Resort",
      country: "France",
      price: 220,
      roomsAvailable: 4,
      stars: 5,
      rating: 9.6,
      address: "Promenade des Anglais 45, Nice",
      imageUrl: "https://picsum.photos/300/200?random=4",
      wifi: true,
      breakfastIncluded: true
    },

    {
      id: "HT005",
      name: "London Royal Hotel",
      country: "United Kingdom",
      price: 210,
      roomsAvailable: 7,
      stars: 5,
      rating: 9.4,
      address: "221 Baker Street, London",
      imageUrl: "https://picsum.photos/300/200?random=5",
      wifi: true,
      breakfastIncluded: false
    },
    {
      id: "HT006",
      name: "Manchester Comfort Inn",
      country: "United Kingdom",
      price: 140,
      roomsAvailable: 12,
      stars: 3,
      rating: 8.1,
      address: "King Street 7, Manchester",
      imageUrl: "https://picsum.photos/300/200?random=6",
      wifi: true,
      breakfastIncluded: true
    }
  ];

  getCountries() {
    for (const flight of this.flights) {

      if (!this.countries.includes(flight.fromCountry)) {
        this.countries.push(flight.fromCountry);
      }

      if (!this.countries.includes(flight.toCountry)) {
        this.countries.push(flight.toCountry);
      }
    }
    return this.countries;
  }





  getFlights() {
/* tu som skoncil      
1. musim napisat metodu ktora prelistuje lety a vrati len tiek ktore sa zhoduju z travelModelu formy
2. mozeme kludne aj toto preskocit a mozeme si zatial spravit homecomponent a uy vidiet select pre getCountries, 
respektive otestovat uz data a metody
    for (const flight in this.flights) {
      if (this.travelModel.fromCountry === )
    } */
  }
  getHotels() { }
  updateBookingDetails() { }
  getBookingDetails() { }
  clearBookingDetails() { }

}
