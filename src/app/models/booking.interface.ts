import { Flight } from "./flight.interface";
import { Hotel } from "./hotel.interface";

export interface BookingDetails {
    flight?: Flight;
    hotel?: Hotel;

    customerName?: string;
    email?: string; 
    phone?: string;

    departureDate?: Date;
    returnDate?: Date;

    travelers?: number;

    rooms?: number;

    totalCost?: number;
}