# Kattbutik – Del B (CatsCatsCats)

  En responsiv kattbutik byggd i React som asynkront hämtar och presenterar
  kattraser från [The Cat API](https://api.thecatapi.com/v1/breeds?limit=30).
  Inlämningsuppgift Del B i kursen Gränssnittsutveckling (Newton, VT2026).

  ## Funktioner

  - **Navigeringsmeny** mellan sidorna (React Router).
  - **Startsida** som presenterar butiken.
  - **Om oss-sida** med ägarinformation och kontaktuppgifter.
  - **Kattsida** som listar katter från WebAPI:et med pagination – 10 katter per
    listsida. Varje kort visar kattens namn, ursprungsland och bild.
  - Bläddra fram och tillbaka mellan listsidorna.
  - Responsiv layout med react-bootstrap (mobil, surfplatta, desktop).

  ## Teknik

  - React 19 + JSX
  - Vite (byggverktyg / dev-server)
  - react-router-dom (routing)
  - react-bootstrap + react-bootstrap-icons (UI)

  ## Kom igång

  Krävs: [Node.js](https://nodejs.org/) (LTS).

  ```bash
  # 1. Installera beroenden
  npm install

  # 2. Starta utvecklingsservern
  npm run dev

  Öppna sedan adressen som visas i terminalen (vanligtvis http://localhost:5173).

  Övriga kommandon

  - npm run build – bygger en produktionsversion till dist/
  - npm run preview – förhandsvisar produktionsbygget lokalt
  - npm run lint – kör ESLint

  Projektstruktur

  src/
  ├── api/         # Anrop mot The Cat API
  ├── components/  # Återanvändbara komponenter (NavBar, CatCard, PaginationBar, BreedImage)
  ├── pages/       # Sidor (Home, Cats, About)
  ├── App.jsx      # Routing
  └── main.jsx     # Startpunkt

  API

  Data hämtas från: https://api.thecatapi.com/v1/breeds?limit=30