# UI Change Skill

Use this skill whenever the user requests any UI change, visual adjustment, styling update, or layout modification.

## Steps to follow

### 1. Ensure the dev server is running

Check if the Vite dev server is already running on port 3000. If not, start it in the background:

```bash
cd "C:\schule\Schule-CZ\FH\Web Technologien und Usability\React\restaurant\frontend"
npm run dev &
```

Wait ~3 seconds for it to start before continuing.

### 2. Take a BEFORE screenshot

Run the Playwright screenshot script to capture the current state:

```bash
cd "C:\schule\Schule-CZ\FH\Web Technologien und Usability\React\restaurant\frontend"
node scripts/screenshot.mjs http://localhost:3000 before.png
```

Read the resulting screenshot file at `screenshots/before.png` using the Read tool so you can see the current UI.

If a specific page/section is relevant (e.g. `/reservieren/test`), pass that URL instead.

### 3. Analyse the current state

Based on the screenshot and the requested change:
- Identify which component file(s) need to be modified (see component overview below)
- Note existing Bootstrap classes and custom CSS being used
- Plan the minimal change needed

### 4. Implement the changes

Make targeted edits. This project uses:
- **Bootstrap 5.3.7** – use Bootstrap utility classes wherever possible
- **Custom CSS** in `src/index.css` for global overrides and custom variables
- **Inline styles or component-scoped styles** when Bootstrap is not sufficient
- **Dark theme** with gold accents (`--gold-color: rgba(190, 175, 10, 0.874)`, `--font-color: #ffffff`)

### 5. Take an AFTER screenshot

```bash
node scripts/screenshot.mjs http://localhost:3000 after.png
```

Read `screenshots/after.png` to verify the change looks correct.

### 6. Present the result

Show the before/after screenshots to the user and briefly describe what was changed.

---

## Project UI overview

| Component | File | Purpose |
|-----------|------|---------|
| Navigation | `src/components/Navigation.tsx` | Fixed top navbar |
| Hero | `src/components/Hero.tsx` | Landing hero section |
| Speisekarte | `src/components/Speisekarte.tsx` | Menu grid / mobile carousel |
| Cards | `src/components/Cards.tsx` | Individual menu item card |
| CardsCarousel | `src/components/CardsCarousel.tsx` | Mobile menu carousel |
| TischReservation | `src/components/TischReservation.tsx` | Full reservation with modal |
| TischReservationen | `src/components/TischReservationen.tsx` | Table layout visualisation |
| TischReservationLegende | `src/components/TischReservationLegende.tsx` | Table legend |
| Terasse | `src/components/Terasse.tsx` | Terrace tables grid |
| Tables | `src/components/Tables.tsx` | Indoor tables grid |
| LargeTables | `src/components/LargeTables.tsx` | Large tables grid |
| RestaurantBottom | `src/components/RestaurantBottom.tsx` | Bottom facilities row |
| MainPage | `src/pages/MainPage.tsx` | Root page layout |
| Reservation | `src/pages/Reservation.tsx` | Booking confirmation page |
| Global CSS | `src/index.css` | Theme variables & custom styles |

## Key CSS variables (index.css)

```css
--primary-color: linear-gradient(135deg, #000000 0%, #1a1a1a 100%)
--secondary-color: #353333
--font-color: #ffffff
--gold-color: rgba(190, 175, 10, 0.874)
```

## Screenshot helper

- Script: `scripts/screenshot.mjs`
- Output dir: `screenshots/`
- Usage: `node scripts/screenshot.mjs <url> <filename.png>`
