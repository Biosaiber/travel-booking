## 01DAY
Perfektné. 👍 Máme pripravené všetko, čo sme potrebovali:

✅ Angular projekt vytvorený  
✅ GitHub repository funguje  
✅ `main` branch pripravený  
✅ `feature/travel-booking` branch vytvorený a pushnutý  
✅ Máme hotový referenčný projekt, ku ktorému sa môžeme vracať počas učenia.

Zajtra už nebudeme riešiť žiadne technické nastavenia. Hneď začneme ako vo firme.

Plán bude približne takýto:

1. **Business analýza**: Čo má aplikácia robiť?
2. **User flow**: Ako sa používateľ pohybuje aplikáciou?
3. **Návrh dátových modelov**: `Flight`, `Hotel`, `BookingDetails`.
4. **Rozhodnutie, prečo potrebujeme `BookingService`.**
5. **Rozdelenie na komponenty a routy.**
6. Až potom začneme písať prvý kód.

 

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