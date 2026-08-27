# Travel Booking ✈️

A small Angular application for booking a flight and hotel through a multi-step form.

The user selects a route, chooses a flight, enters travel details, selects a hotel and finally gets a summary of the booking with the total price.

## How the app works

```text
Home
  ↓
Flight Booking
  ↓
Hotel Booking
  ↓
Summary
```

### Home

The user selects the departure and destination countries.

This part uses a Template-Driven Form.

I added a custom cross-field validator so the departure and destination countries cannot be the same.

### Flight Booking

The application loads flights based on the selected route.

The user chooses a flight and enters:

- name
- number of travelers
- departure date
- return date

This part uses Reactive Forms.

Validation checks required fields, minimum values, dates in the past and whether the return date is after the departure date.

### Hotel Booking

Hotels are loaded based on the destination country.

The user selects a hotel and enters:

- email
- phone number
- number of rooms

The number of rooms is validated dynamically based on the availability of the selected hotel.

### Summary

The final page shows the booking details and calculates the total price.

The price is calculated from:

```text
flight price × travelers
+
hotel price × rooms × number of nights
```

---

## Angular concepts used

- Template-Driven Forms
- Reactive Forms
- FormBuilder
- Built-in validators
- Custom validators
- Cross-field validation
- Dynamic validators
- `markAllAsTouched()`
- Angular Router
- Services
- TypeScript interfaces
- `Partial<BookingDetails>`
- `filter()` and `find()`
- CurrencyPipe
- NgOptimizedImage

---

## Application design

Before writing the components, I first planned the main user flow, data models, services and routes.

The application is split into four main steps:

```text
HomeComponent
      ↓
FlightBooking
      ↓
HotelBooking
      ↓
Summary
```

The components share booking data through `BookingService`.

### Main data models

```ts
Flight
Hotel
BookingDetails
TravelSelection
```

`TravelSelection` keeps the departure and destination selected on the Home page.

`BookingDetails` is built gradually while the user moves through the booking process.

```text
Flight Booking
    ↓
adds flight and traveler data

Hotel Booking
    ↓
adds hotel and contact data

Summary
    ↓
adds totalCost
```

---

## State management

The project uses `BookingService` to keep the current booking state between routes.

The service is responsible for:

- storing flights and hotels
- returning available countries
- filtering flights by route
- filtering hotels by destination
- storing the selected travel route
- updating `BookingDetails`

Example:

```ts
updateBookingDetails(details: Partial<BookingDetails>): void {
  this.bookingDetails = {
    ...this.bookingDetails,
    ...details
  };
}
```

This allows each step of the booking process to update only the part of the reservation that it knows about.

---

## Validation

I spent quite a lot of time on validation in this project because I wanted the forms to behave properly, not only check whether a field was empty.

Some of the validation rules are:

- departure and destination countries cannot be the same
- required fields must be completed
- customer name must contain at least 3 characters
- number of travelers must be at least 1
- travel dates cannot be in the past
- return date must be after the departure date
- email must have a valid format
- phone number must contain 9 to 15 digits
- number of rooms cannot exceed the availability of the selected hotel

The hotel form also updates the maximum room validator after the user selects a hotel.

---

## Routing

```text
/                   → redirect to /home
/home               → HomeComponent
/flight-booking     → FlightBooking
/hotel-booking      → HotelBooking
/summary            → Summary
/**                 → PageNotFound
```

The application does not currently use route parameters, query parameters, child routes or guards.

---

## Project background

This project originally started as a Codecademy Angular Forms exercise.

After finishing the original exercise, I rebuilt the project in VS Code and continued working on it independently.

During the rebuild I changed and added several things:

- used both Template-Driven and Reactive Forms
- added custom cross-field validation
- added dynamic room validation based on hotel availability
- used FormBuilder in the hotel form
- added service-based booking state
- added routing and a 404 page
- used CurrencyPipe and NgOptimizedImage
- added the final price calculation
- expanded the original flight and hotel data
- improved the validation feedback and booking UI

The project became a good way for me to practice how different Angular concepts work together in one application instead of using them only in separate exercises.

---

## Running the project

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
ng serve
```

Open:

```text
http://localhost:4200
```