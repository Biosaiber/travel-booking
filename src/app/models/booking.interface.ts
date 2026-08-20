import { Flight } from "./flight.interface";
import { Hotel } from "./hotel.interface";

export interface BookingDetails {
    flight?: Flight;
    hotel?: Hotel;

    customerName?: string;
    email?: string;
    phone?: string;

    departureDate?: string;
    returnDate?: string;

    travelers?: number;

    rooms?: number;

    totalCost?: number;
}