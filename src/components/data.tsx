import React from "react";

export interface item {
  id: number;
  title: string;
  location: string;
  mapsLink: string;
  startDate: string;
  endDate: string;
  description: string;
  imageUrl: string;
  pros: string;
  cons: string;
  rating: number;
}

export default [
  {
    id: 1,
    title: "Molam",
    location: "Krakow",
    mapsLink: "https://g.page/molamkrk?share",
    startDate: "09.11.2021",
    endDate: "09.11.2021",
    description:
      "Odwiedzilismy to miejsce aby uczcic zorganizowanie pierwszego ASIDU. Zarówno wystrój, obsługa, menu i jedzenie zachwyciły nas swoją spójnością oraz jakością",
    imageUrl: "http://molam.pl/wp-content/uploads/revslider/interior/foto1.jpg",
    pros: "asd",
    cons: "asd",
    rating: 9,
  },
  {
    id: 2,
    title: "Woosabi",
    location: "Wroclaw",
    mapsLink: "https://g.page/woosabiwro?share",
    startDate: "04.04.2022",
    endDate: "31.06.2022",
    description:
      "Spędziłem we Wrocławiu dwa miesiące w trakcie, których miałem przyjemność jeść m.in. w Woosabi, które serwuje azjatyckie dania kuchni fusion. Charakteryzuję się świetnym wystrojem i smaczną kuchnią. Do wad należy niska tematyczność miejsca, małe porcje i wysokie ceny.",
    imageUrl:
      "https://scontent-waw1-1.xx.fbcdn.net/v/t1.6435-9/77004085_1243200545862362_8001220834872000512_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_ohc=uxO-4hTSIpgAX-4UwZ2&_nc_ht=scontent-waw1-1.xx&oh=00_AT-M__tHej-ggawd098BlVJUEc_yBp5bEn5aR9cQchNNqQ&oe=62B4EFC5",
    pros: "asd",
    cons: "asd",
    rating: 6,
  },
  {
    id: 3,
    title: "Mada Poke",
    location: "Bergamo",
    mapsLink: "https://g.page/MadaPoke?share",
    startDate: "24.04.2022",
    endDate: "30.04.2022",
    description:
      "Podczas tygodniowego wyjazdu do Włoch i popijania winem pizzy miałem okazję zajrzeć do Mada Poke - wystrój nie zachwycał, obsługa bardzo miła. Miałem okazję po raz pierwszy w swoim życiu spróbować poke, który był bardzo miłą odskocznią od neopolitany oraz zjadłem tam najlepsze kanapki w życiu, które spokojnie mogłoby być obiadem.",
    imageUrl:
      "https://img.restaurantguru.com/c8a9-Restaurant-Mada-Poke-meals.jpg",
    pros: "asd",
    cons: "asd",
    rating: 6,
  },
  {
    id: 4,
    title: "Falla",
    location: "Katowice",
    mapsLink: "https://g.page/falla-katowice-katowice?share",
    startDate: "26.01.2022",
    endDate: "26.01.2022",
    description:
      "Piękny ogródek, miła obsługa i smaczne oraz ciekawe pozycje w menu. Katowicka falla ze swoim ogórdkiem przenosi nas w czasie do początku 20stego wieku",
    imageUrl:
      "https://media-cdn.tripadvisor.com/media/photo-s/1c/5a/e4/fd/falla-katowice-wejscie.jpg",
    pros: "asd",
    cons: "asd",
    rating: 7,
  },
  {
    id: 5,
    title: "Koliba Diery",
    location: "Terchovska",
    mapsLink: "https://goo.gl/maps/rRqRV6LneqMdt6ma6",
    startDate: "03.06.2022",
    endDate: "05.06.2022",
    description:
      "Jedliśmy tam w trakcie wyjazdu na Słowacje. Miejsce serwuje smaczną regionalną kuchnię. Wystrój tego miejsca również nawiązuję do ich tradycji oraz regionu.",
    imageUrl:
      "https://www.hotel-diery.pl/media/2017/05/0/3/ogKoliba-terchovskkoliba03.jpg",
    pros: "asd",
    cons: "asd",
    rating: 7,
  },
];
