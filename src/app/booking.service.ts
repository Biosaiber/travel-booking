import { Injectable } from '@angular/core';
import { BookingDetails } from './models/booking.interface';
import { Flight } from './models/flight.interface';
import { Hotel } from './models/hotel.interface';

export interface TravelSelection {
  fromCountry: string;
  toCountry: string;
}

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private travelSelection: TravelSelection = {
    fromCountry: "",
    toCountry: ""
  };
  private bookingDetails: BookingDetails = {};
  private flights: Flight[] = [
    // Netherlands → Germany
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

    // Netherlands → France
    {
      id: "FL003",
      airline: "KLM",
      travelClass: "Economy",
      departureTime: "09:15",
      price: 140,
      fromCountry: "Netherlands",
      toCountry: "France"
    },
    {
      id: "FL004",
      airline: "Air France",
      travelClass: "Business",
      departureTime: "17:20",
      price: 240,
      fromCountry: "Netherlands",
      toCountry: "France"
    },

    // Netherlands → United Kingdom
    {
      id: "FL005",
      airline: "KLM",
      travelClass: "Economy",
      departureTime: "07:40",
      price: 130,
      fromCountry: "Netherlands",
      toCountry: "United Kingdom"
    },
    {
      id: "FL006",
      airline: "British Airways",
      travelClass: "Business",
      departureTime: "16:10",
      price: 220,
      fromCountry: "Netherlands",
      toCountry: "United Kingdom"
    },

    // Germany → Netherlands
    {
      id: "FL007",
      airline: "Lufthansa",
      travelClass: "Economy",
      departureTime: "08:00",
      price: 175,
      fromCountry: "Germany",
      toCountry: "Netherlands"
    },
    {
      id: "FL008",
      airline: "KLM",
      travelClass: "Business",
      departureTime: "14:30",
      price: 255,
      fromCountry: "Germany",
      toCountry: "Netherlands"
    },

    // Germany → France
    {
      id: "FL009",
      airline: "Lufthansa",
      travelClass: "Economy",
      departureTime: "09:25",
      price: 160,
      fromCountry: "Germany",
      toCountry: "France"
    },
    {
      id: "FL010",
      airline: "Air France",
      travelClass: "Business",
      departureTime: "18:00",
      price: 270,
      fromCountry: "Germany",
      toCountry: "France"
    },

    // Germany → United Kingdom
    {
      id: "FL011",
      airline: "British Airways",
      travelClass: "Economy",
      departureTime: "10:00",
      price: 210,
      fromCountry: "Germany",
      toCountry: "United Kingdom"
    },
    {
      id: "FL012",
      airline: "Lufthansa",
      travelClass: "Business",
      departureTime: "18:30",
      price: 290,
      fromCountry: "Germany",
      toCountry: "United Kingdom"
    },

    // France → Netherlands
    {
      id: "FL013",
      airline: "Air France",
      travelClass: "Economy",
      departureTime: "07:50",
      price: 145,
      fromCountry: "France",
      toCountry: "Netherlands"
    },
    {
      id: "FL014",
      airline: "KLM",
      travelClass: "Business",
      departureTime: "15:40",
      price: 235,
      fromCountry: "France",
      toCountry: "Netherlands"
    },

    // France → Germany
    {
      id: "FL015",
      airline: "Air France",
      travelClass: "Economy",
      departureTime: "08:45",
      price: 165,
      fromCountry: "France",
      toCountry: "Germany"
    },
    {
      id: "FL016",
      airline: "Lufthansa",
      travelClass: "Business",
      departureTime: "16:25",
      price: 275,
      fromCountry: "France",
      toCountry: "Germany"
    },

    // France → United Kingdom
    {
      id: "FL017",
      airline: "Air France",
      travelClass: "Economy",
      departureTime: "11:10",
      price: 150,
      fromCountry: "France",
      toCountry: "United Kingdom"
    },
    {
      id: "FL018",
      airline: "British Airways",
      travelClass: "Business",
      departureTime: "19:15",
      price: 245,
      fromCountry: "France",
      toCountry: "United Kingdom"
    },

    // United Kingdom → Netherlands
    {
      id: "FL019",
      airline: "British Airways",
      travelClass: "Economy",
      departureTime: "07:30",
      price: 135,
      fromCountry: "United Kingdom",
      toCountry: "Netherlands"
    },
    {
      id: "FL020",
      airline: "KLM",
      travelClass: "Business",
      departureTime: "14:50",
      price: 225,
      fromCountry: "United Kingdom",
      toCountry: "Netherlands"
    },

    // United Kingdom → Germany
    {
      id: "FL021",
      airline: "British Airways",
      travelClass: "Economy",
      departureTime: "09:40",
      price: 205,
      fromCountry: "United Kingdom",
      toCountry: "Germany"
    },
    {
      id: "FL022",
      airline: "Lufthansa",
      travelClass: "Business",
      departureTime: "17:35",
      price: 295,
      fromCountry: "United Kingdom",
      toCountry: "Germany"
    },

    // United Kingdom → France
    {
      id: "FL023",
      airline: "British Airways",
      travelClass: "Economy",
      departureTime: "10:20",
      price: 155,
      fromCountry: "United Kingdom",
      toCountry: "France"
    },
    {
      id: "FL024",
      airline: "Air France",
      travelClass: "Business",
      departureTime: "18:45",
      price: 250,
      fromCountry: "United Kingdom",
      toCountry: "France"
    }
  ];
  private hotels: Hotel[] = [

    // 🇩🇪 GERMANY
    {
      id: "HT001",
      name: "Berlin Central Hotel",
      country: "Germany",
      price: 120,
      roomsAvailable: 8,
      stars: 4,
      rating: 8.7,
      address: "Alexanderplatz 12, Berlin",
      imageUrl: "https://picsum.photos/id/164/600/400",
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
      imageUrl: "https://picsum.photos/id/225/600/400",
      wifi: false,
      breakfastIncluded: false
    },
    {
      id: "HT003",
      name: "Hamburg Harbour Hotel",
      country: "Germany",
      price: 145,
      roomsAvailable: 9,
      stars: 4,
      rating: 8.8,
      address: "Hafenstrasse 21, Hamburg",
      imageUrl: "https://picsum.photos/id/238/600/400",
      wifi: true,
      breakfastIncluded: true
    },

    // 🇫🇷 FRANCE
    {
      id: "HT004",
      name: "Paris City Hotel",
      country: "France",
      price: 150,
      roomsAvailable: 10,
      stars: 4,
      rating: 8.9,
      address: "Rue de Rivoli 18, Paris",
      imageUrl: "https://picsum.photos/id/274/600/400",
      wifi: true,
      breakfastIncluded: true
    },
    {
      id: "HT005",
      name: "Nice Beach Resort",
      country: "France",
      price: 220,
      roomsAvailable: 4,
      stars: 5,
      rating: 9.6,
      address: "Promenade des Anglais 45, Nice",
      imageUrl: "https://picsum.photos/id/299/600/400",
      wifi: true,
      breakfastIncluded: true
    },
    {
      id: "HT006",
      name: "Lyon Riverside Hotel",
      country: "France",
      price: 135,
      roomsAvailable: 11,
      stars: 3,
      rating: 8.4,
      address: "Quai du Rhone 14, Lyon",
      imageUrl: "https://picsum.photos/id/318/600/400",
      wifi: true,
      breakfastIncluded: false
    },

    // 🇬🇧 UNITED KINGDOM
    {
      id: "HT007",
      name: "London Royal Hotel",
      country: "United Kingdom",
      price: 210,
      roomsAvailable: 7,
      stars: 5,
      rating: 9.4,
      address: "221 Baker Street, London",
      imageUrl: "https://picsum.photos/id/348/600/400",
      wifi: true,
      breakfastIncluded: false
    },
    {
      id: "HT008",
      name: "Manchester Comfort Inn",
      country: "United Kingdom",
      price: 140,
      roomsAvailable: 12,
      stars: 3,
      rating: 8.1,
      address: "King Street 7, Manchester",
      imageUrl: "https://picsum.photos/id/364/600/400",
      wifi: true,
      breakfastIncluded: true
    },
    {
      id: "HT009",
      name: "Edinburgh Castle View",
      country: "United Kingdom",
      price: 175,
      roomsAvailable: 6,
      stars: 4,
      rating: 9.0,
      address: "Royal Mile 32, Edinburgh",
      imageUrl: "https://picsum.photos/id/392/600/400",
      wifi: true,
      breakfastIncluded: true
    },

    // 🇳🇱 NETHERLANDS
    {
      id: "HT010",
      name: "Amsterdam Canal Hotel",
      country: "Netherlands",
      price: 190,
      roomsAvailable: 8,
      stars: 4,
      rating: 9.1,
      address: "Prinsengracht 120, Amsterdam",
      imageUrl: "https://picsum.photos/id/429/600/400",
      wifi: true,
      breakfastIncluded: true
    },
    {
      id: "HT011",
      name: "Rotterdam Harbour Hotel",
      country: "Netherlands",
      price: 145,
      roomsAvailable: 13,
      stars: 4,
      rating: 8.6,
      address: "Coolsingel 42, Rotterdam",
      imageUrl: "https://picsum.photos/id/437/600/400",
      wifi: true,
      breakfastIncluded: false
    },
    {
      id: "HT012",
      name: "Eindhoven City Stay",
      country: "Netherlands",
      price: 115,
      roomsAvailable: 15,
      stars: 3,
      rating: 8.3,
      address: "Stationsplein 8, Eindhoven",
      imageUrl: "https://picsum.photos/id/453/600/400",
      wifi: true,
      breakfastIncluded: true
    }

  ];

  getCountries(): string[] {
    const countries: string[] = [];
    for (const flight of this.flights) {

      if (!countries.includes(flight.fromCountry)) {
        countries.push(flight.fromCountry);
      }

      if (!countries.includes(flight.toCountry)) {
        countries.push(flight.toCountry);
      }
    }
    return countries;
  }

  getFlights(fromCountry: string, toCountry: string): Flight[] {
    return this.flights.filter(flight => (fromCountry === flight.fromCountry && toCountry === flight.toCountry));
  }

  getHotels(toCountry: string): Hotel[] {
    return this.hotels.filter(hotel => (toCountry === hotel.country));
  }

  updateBookingDetails(details: Partial<BookingDetails>): void {
    this.bookingDetails = {
      ...this.bookingDetails,
      ...details
    };
  }

  getBookingDetails(): BookingDetails {
    return this.bookingDetails;
  }

  clearBookingDetails(): void {
    this.bookingDetails = {};
  }

  updateTravelSelection(selections: TravelSelection): void {
    this.travelSelection = {
      fromCountry: selections.fromCountry,
      toCountry: selections.toCountry
    }
  }
  getTravelSelection(): TravelSelection {
    return this.travelSelection;
  }
  clearTravelSelection(): void {
    this.travelSelection = {
      fromCountry: "",
      toCountry: ""
    }
  }

}
