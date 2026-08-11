# Travel-booking app design

1. 🔍 Business Analysis

> Analýza nám hovorí, **čo sa má diať**.

```
1. Používateľ vyberie krajinu odletu a cieľovú krajinu.

2. Aplikácia mu zobrazí dostupné lety pre zvolenú trasu.

3. Používateľ vyberie let a zadá potrebné údaje o cestujúcom a ceste.

4. Aplikácia mu zobrazí hotely dostupné v cieľovej krajine.

5. Používateľ vyberie hotel a zadá kontaktné údaje
   a informácie o pobyte.

6. Aplikácia skontroluje, či sú zadané údaje platné
   a vypočíta cenu rezervácie.

7. Používateľ dostane súhrn celej rezervácie.
```

## 2. 🧭 User flow

> Akými obrazovkami a krokmi používateľ prejde?

```
START
   ↓
Home

APP:
- zobrazí formulár (From, To)

USER:
- vyberie krajiny

Submit
   ↓
Valid?
├── NO
│
│   APP:
│   - zobrazí validačné chyby
│   - zostane na Home
│
└── YES
    │
    APP:
    - update BookingDetails
    - navigate na Flight Booking
```

```
Flight Booking

APP:
- načíta dostupné lety
- zobrazí formulár

USER:
- vyberie let
- zadá meno
- počet cestujúcich
- dátumy

Submit
   ↓
Valid?
├── NO
│
│   APP:
│   - zobrazí chyby
│
└── YES
    │
    APP:
    - update BookingDetails
    - navigate na Hotel Booking
```

```
Hotel Booking

APP:
- načíta hotely
- zobrazí formulár

USER:
- vyberie hotel
- email
- telefón
- izby

Submit
   ↓
Valid?
├── NO
│
│   APP:
│   - zobrazí chyby
│
└── YES
    │
    APP:
    - update BookingDetails
    - navigate na Summary
```

```
Summary

APP:
- načíta BookingDetails
- zobrazí celú rezerváciu
```

##### Service flows

```
HomeComponent
      │
      │ updateBookingDetails(fromCountry, toCountry)
      ▼
BookingService
      │
      ▼
BookingDetails
```

```
FlightBookingComponent
      │
      ├── getBookingDetails()
      │        ↓
      │   fromCountry, toCountry
      │
      ├── getFlights(fromCountry, toCountry)
      │        ↓
      │   availableFlights
      │
      └── updateBookingDetails(...)
               ↓
         BookingDetails
```

```
HotelBookingComponent
      │
      ├── getBookingDetails()
      │        ↓
      │     toCountry
      │
      ├── getHotels(toCountry)
      │        ↓
      │   availableHotels
      │
      └── updateBookingDetails(...)
               ↓
         BookingDetails
```

```
SummaryComponent
      │
      └── getBookingDetails()
               ↓
         BookingDetails
               ↓
        zobrazenie rezervácie
```

## 3. 📦 Data Models

#### Flight

```typescript
export interface Flight {
  id: string;
  details: string;
  price: number;
  fromCountry: string;
  toCountry: string;
}
```

#### Hotel

```typescript
export interface Hotel {
  id: string;
  name: string;
  country: string;
  price: number;
  roomsAvailable: number;
}
```

#### BookingDetails

```typescript
export interface BookingDetails {
    flight?: Flight;
    hotel?: Hotel;

    customerName?: string; // customerName: string | undefined;
    email?: string; // "Táto property nemusí existovať."
    phone?: string;

    departureDate?: Date;
    arrivalDate?: Date;

    travelers?: number;

    rooms?: number;

    totalCost?: number;
}
```

## **4. ⚙️ Services & State Management**

#### booking.service.ts

```
Zodpovednosť
- spravuje stav rezervácie

Dáta
- Flight[]
- Hotel[]
- bookingDetails: BookingDetails

Metódy
- getCountries()
- getFlights()
- getHotels()
- updateBookingDetails()
- getBookingDetails()
- clearBookingDetails()

Používajú
- HomeComponent
- FlightBookingComponent
- HotelBookingComponent
- SummaryComponent
```

#### log-error.service.ts

```
Zodpovednosť
- spravuje chyby z formulárov

Dáta
- errors: string[]

Metódy
- addError()
- getErrors()
- clearErrors()

Používajú
- FlightBookingComponent
- HotelBookingComponent

```

## 5. 🧩 Components

#### HomeComponent

```
Zodpovednosť
- začiatok rezervácie
- výber krajiny odletu a destinácie
- validácia úvodného formulára
- uloženie fromCountry a toCountry do rezervácie

Dáta
- countries: string[]
- travelModel (fromCountry, toCountry)

Metódy
- ngOnInit()
- onSubmit() / startBooking()
- isFieldInvalid()

Services

BookingService
- getCountries()
- updateBookingDetails()

Naviguje na
- FlightBookingComponent
```

#### FlightBookingComponent

```
Zodpovednosť
- zobraziť dostupné lety podľa fromCountry a toCountry z rezervácie
- umožniť výber letu, mena, počtu cestujúcich a dátumov
- zobraziť chyby pri validácii formulára

Dáta
- availableFlights: Flight[]
- flightForm / údaje z formulára

Metódy
- ngOnInit()
- onSubmit()
- handleErrors()

Services

BookingService
- getBookingDetails()
- getFlights(fromCountry, toCountry)
- updateBookingDetails()

LogErrorService
- addError()
- getErrors()
- clearErrors()

Naviguje na
- HotelBookingComponent
```

#### HotelBookingComponent

#### SummaryComponent

```
Zodpovednosť
- zobraziť celú rezerváciu

Dáta
- bookingDetails: BookingDetails

Metódy
- ngOnInit()

Services

BookingService
- getBookingDetails()

```

## 6. 🛣️ Routing

```
Default route
- path: ''
- redirectTo: 'home'
- pathMatch: 'full'

Main routes
- Route 1
  path: home
  component: HomeComponent
  prichádza z: štart aplikácie
  pokračuje na: flight-booking

- Route 2
  path: flight-booking
  component: FlightBookingComponent
  prichádza z: home
  pokračuje na: hotel-booking

- Route 3
  path: hotel-booking
  component: HotelBookingComponent
  prichádza z: flight-booking
  pokračuje na: summary

- Route 4
  path: summary
  component: SummaryComponent
  prichádza z: hotel-booking
  pokračuje na: nikde

Navigation flow

home
↓
flight-booking
↓
hotel-booking
↓
summary

Fallback route
- path: '**'
- redirectTo: 'home'

Optional
- route params? : no
- query params? : no
- child routes? : no
- guards? : no
```