## [PL] OPIS Aplikacji

Jest to mała aplikacja posiadająca plik json z danymi 42 miast na pomorzu, takimi jak współrzędne położenia na mapach 'latitude' i 'longitude'.
Na podstawie tego pliku w wyszukiwarce wpisujesz nazwę danego miasta. Po kliknięciu w wybrane miasto przenosi na podstronę z danymi pogody miasta od godziny teraz do tygodniu w przód. Dane pobierane są z API https://open-meteo.com/.

Jeżeli po godzinie 0:00 jesteś pierwszą osobą odwiedzającą dane miasto, Next.js pobiera nowe dane z API wraz z generowanie nowej strony dla danego miasta.
Inni użytkownicy którzy wejdą tego samego dnia na tą samą stronę miasta nie wymuszają kolejnego zapytania na API oraz strona wyświetla się dla nich prawię natychmiastowo.

## [EN] Application Description

This is a small application that has a JSON file with data about 42 cities in the pomerania area, such as the 'latitude' and 'longitude' coordinates on map. Based on this file, you can enter the name of a city in the site search bar. Upon clicking on city name, it redirects to a subpage with weather data for the city from the current hour up to a week ahead.

The data is retrieved from the API https://open-meteo.com/. If you are the first person visiting a particular city after 0:00 AM, Next.js fetches new data from the API and generates a new page. Other users who visit the same subpage on the same day do not trigger additional API requests, and the page is displayed almost instantly for them.

## Jak uruchomić?

1.`npm install` - instaluje wszystkie wymagane biblioteki i zależności dla projektu. Ta komenda powinna być wywołana po pobraniu projektu i przed jego uruchomieniem.

2.`npm run dev` - uruchamia serwer deweloperski, który śledzi zmiany w kodzie i automatycznie przeładowuje stronę w przeglądarce, gdy nastąpi zmiana. To podstawowa komenda do uruchomienia projektu w trybie deweloperskim.

Opcjonalne uruchomienie statycznie:

1.`npm run build` - buduje projekt, czyli tworzy pliki statyczne, które będą używane do wyświetlania strony internetowej. Ta komenda powinna być wywołana tylko przed wdrożeniem strony na serwer produkcyjny.

2.`npm run start` - uruchamia serwer produkcyjny i wyświetla stronę internetową. Ta komenda powinna być wywołana tylko po użyciu komendy npm run build, ponieważ wymaga plików statycznych, które są generowane przez tę komendę.



## DEFAULT
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
