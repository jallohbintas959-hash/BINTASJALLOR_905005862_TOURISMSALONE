# Salone Explorer — Assignment 2

A responsive, multi-page HTML/CSS/JavaScript website based on the Salone Explorer concept documented in Assignment 1.

## Pages
- `index.html` — Home and destination discovery
- `services.html` — Guides, tours and accommodation directory with working category filters
- `planner.html` — Interactive itinerary generator based on interests, duration and starting point
- `about.html` — Platform mission and values
- `contact.html` — Enquiry form with browser-side validation and demo confirmation

## How to run
1. Extract the project ZIP.
2. Open the folder in Visual Studio Code.
3. Open `index.html` in a browser, or use the VS Code Live Server extension.
4. Test the navigation at desktop width and mobile width.

No build tools or dependencies are required. Google Fonts and destination photographs load from external services, so an internet connection is needed for those assets. The layout still works if external assets do not load.

## Important prototype notes
- Service cards are sample/demo listings and are not verified operators.
- The trip planner creates a suggested itinerary in the browser; it does not check live routes, opening hours, safety or bookings.
- The contact form validates inputs and shows a demo confirmation. It does not send or store messages because no backend is configured.
- Update the demonstration contact details and verify all travel information before any public launch.

## GitHub setup
Create an empty GitHub repository, then run these commands from this project folder:
```bash
git init
git add .
git commit -m "Build Salone Explorer responsive website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/salone-explorer.git
git push -u origin main
```
Replace `YOUR-USERNAME` and the repository URL with your own GitHub details. Enable GitHub Pages from the repository settings if you want a public static demo.

## Suggested screenshot evidence
Capture the Home page at desktop and mobile widths, Services with each filter selected, Trip Planner before and after generating an itinerary, About page, Contact page with the demo success message, and the browser responsive/mobile view.

## A3 design board suggestions
Show the project title and short concept, colour palette (deep forest green, cream, lime accent), typography, five page screenshots, responsive mobile screenshot, user journey, and key interactive features.
