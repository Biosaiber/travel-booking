import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FlightBooking } from './flight-booking/flight-booking';
import { HotelBooking } from './hotel-booking/hotel-booking';
import { Summary } from './summary/summary';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: 'full'

    },
    {
        path: "home",
        component: HomeComponent,

    },
    {
        path: "flight-booking",
        component: FlightBooking
    },
    {
        path: "hotel-booking",
        component: HotelBooking
    },
    {
        path: "summary",
        component: Summary
    },
    {
        path: "**",
        component: PageNotFound
    }
];
