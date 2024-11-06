# Footballers Project

## Mi a feladat
A Footballers Project egy interaktív alkalmazás, amely lehetővé teszi a felhasználók számára, hogy megismerkedjenek a legismertebb focistákkal, megtekintsék a statisztikáikat, és szórakoztató módon böngészhessenek közöttük. Az alkalmazás célja, hogy könnyen hozzáférhető információkat nyújtson a futballisták életéről és karrierjéről.

## Általános leírás
Az alkalmazás modern webtechnológiákat használ, lehetővé téve a felhasználók számára a könnyű navigációt és az információk egyszerű keresését.

## Milyen technológiát használunk
- **Backend**: Node.js
- **Frontend**: Vue.js
- **Dizájn**: CSS, Bootstrap

## Menüpontok, funkciók
### Home
- Az alkalmazás kezdőoldala, ahol animált szövegek jelennek meg, bemutatva a projektet.

### Táblázat
- A focisták adatait tartalmazó táblázat. Oszlopok: Név, Csapat, Kor, Pozíció, Mezszám. A táblázat lehetővé teszi a felhasználók számára, hogy egy kattintással kiválasszanak egy focistát, aminek hatására a kiválasztott játékos részletes adatai jelennek meg.

  **Kódrészlet a tábláról**:
  ```javascript
  footballers: [
    {
      id: 1,
      name: "Cristiano Ronaldo ♕",
      team: "Al-Nassr",
      age: 39,
      position: "Striker",
      image: "/public/ronca.png",
      shirtNumber: 7,
    },
    // ...
  ]


- **Home.vue**: Kezdőlap, animált szöveg megjelenítése.
- **FootballersTable.vue**: Focisták adatainak megjelenítése táblázat formájában.
- **PlayerCard.vue**: Focista részletes adatainak megjelenítése kártya formájában.

### Home megvalósítása
- **Miért kell a táblázat**: A táblázat strukturált módon jeleníti meg az összes focistát, így a felhasználók könnyen összehasonlíthatják őket.
- **Fájlok, komponensek**: Az App.vue fájl tartalmazza az alapértelmezett navigációt és a RouterView-t.
- **Szerkezet**: A Home oldal a fő tartalom területet tölti be a RouterView segítségével.

### Vizualizálás módja, dizájn
Modern, letisztult dizájn, amely kiemeli a focisták képeit és statisztikáit. A CSS animációk és a Bootstrap stílusok javítják a felhasználói élményt.

### Sorbarakás
A táblázat adatai dinamikusan sorbarakhatók az egyes oszlopok fejlécére kattintva.

### Egyéb funkciók
#### Kártyák
Részletes információkat nyújtanak a focistákról, beleértve a profilképeket és statisztikákat.

#### Keresés
A keresési funkció lehetővé teszi, hogy a felhasználók a nevük, csapatuk vagy pozíciójuk alapján keressenek focistákat.

#### A keresés mechanizmusa
Az alkalmazás figyeli a keresési mezőbe beírt karaktereket, és az alapján frissíti a táblázatot.

#### Szűrés
A felhasználók szűrhetik az adatokat az általuk megadott kritériumok szerint, gyorsítva a keresést.
