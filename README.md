## Angular Project Architecture

1. Business analýza
2. User Flow
3. Návrh dátových modelov (Interfaces)
4. Návrh Services
5. Rozdelenie na Components
6. Návrh Routingu
7. Implementácia
8. Validácie
9. Testovanie

### 1. Business analýza

> Analýza nám hovorí, **čo sa má diať**.

1. Používateľ vyberie krajinu odletu a cieľovú krajinu.
2. Aplikácia mu zobrazí dostupné lety pre zvolenú trasu.
3. Používateľ vyberie let a zadá potrebné údaje o cestujúcom a ceste.
4. Aplikácia mu zobrazí hotely dostupné v cieľovej krajine.
5. Používateľ vyberie hotel a zadá kontaktné údaje
   a informácie o pobyte.
6. Aplikácia skontroluje, či sú zadané údaje platné
   a vypočíta cenu rezervácie.
7. Používateľ dostane súhrn celej rezervácie.

### 2. User flow

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
- dni
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

### Service flows

```
Home
   │
   ▼
BookingService
   │
updateBookingDetails(...)
   │
   ▼
BookingDetails
```

```
Flight Booking
        │
        ▼
BookingService
        │
        ▼
BookingDetails
```

```
Hotel Booking
        │
        ▼
BookingService
        │
        ▼
BookingDetails
```

## 3. Návrh dátových modelov

#### Flight

```typescript
export interface Flight {
  id: string;
  details: string;
  price: number;
  fromCountry: string;
  toCountry: string;
}
```

#### Hotel

```typescript
export interface Hotel {
  id: string;
  name: string;
  country: string;
  price: number;
  roomsAvailable: number;
}
```

#### BookingDetails

```typescript
interface BookingDetails {
  flight?: Flight;
  hotel?: Hotel;

  customerName?: string; // customerName: string | undefined;
  email?: string; // "Táto property nemusí existovať."
  phone?: string;

  departureDate?: Date;
  arrivalDate?: Date;

  travelers?: number;

  days?: number;
  rooms?: number;

  totalCost?: number;
}
```

## **4. Návrh Services a architektúra aplikácie**

Services, State Management, Komunikácia medzi komponentmi

##  

🧠 Univerzálny Angular štartovací algoritmus

Toto si pokojne zapíš niekam bokom. Toto budeme trénovať stále:

```
1. ČO MÁ APLIKÁCIA ROBIŤ?
        ↓
2. AKÝ JE USER FLOW?
        ↓
3. AKÉ DÁTOVÉ OBJEKTY EXISTUJÚ?
        ↓
4. AKÉ INTERFACES POTREBUJEM?
        ↓
5. KTORÉ DÁTA SÚ ZDIEĽANÉ?
        ↓
6. POTREBUJEM SERVICE?
        ↓
7. AKÉ OBRAZOVKY / COMPONENTS POTREBUJEM?
        ↓
8. AKÉ ROUTES POTREBUJEM?
        ↓
9. ČO JE ZODPOVEDNOSŤ KAŽDÉHO COMPONENTU?
        ↓
10. AKÉ FORMS POTREBUJEM?
        ↓
11. AKÉ VALIDÁCIE POTREBUJEM?
        ↓
12. AKO DÁTA TEČÚ CELOU APLIKÁCIOU?
```

## 🎯 Pre mňa ideálne štruktúra Angular učenia

```
Programming/
│
├── Angular/
│   │
│   ├── 01-typescript/
│   ├── 02-angular-basics/
│   ├── 03-components/
│   ├── 04-services/
│   ├── 05-routing/
│   ├── 06-forms/
│   │      └── travel-booking/
│   ├── 07-signals/
│   ├── 08-rxjs/
│   └── 09-final-project/
│
├── JavaScript/
├── NodeJS/
└── React/
```

```
mkdir directory-name
toutch new-empty-file-name
cd projekt-name

1. ng new projekt-name
2. cd projekt-name
3. code . && ng serve -o

4. git status
5. gh repo create project-name --public --source=. --remote=origin --push
6. git remote -v
7. git checkout -b feature/project-name

ng g c component-name --standalone --skip-tests
ng g s service-name
ng g d directive-name
ng g p pipe-name

git status
git add .
git commit -m "feat: booking-service implemented"
git push --set-upstream origin feature/project-name
git push

```

Type commitie messages

```
"feat: nová funkcionalita"
"fix: oprava chyby"
"refactor: zmena kódu, bez zmeny správania"
"style: vzhľad, CSS"
"chore: setup, comfing"
"docs: dokumenty, README"
"assets: obrázky a fonty"
```
