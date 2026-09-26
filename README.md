# Essie portfolio

Multi-page portfolio (Home, Projects, About, Contact) modelled on https://www.jeremy0x.dev/. Run `npm run dev` and open the Local URL printed by the server. `npm run build` produces the production build, `npx tsc --noEmit` type-checks, `npm run lint` lints.

## Project content

Edit `app/data/projects.ts`. Projects come from https://github.com/dev-essie (repo name, description, and the homepage link set on each repo) plus client work without a public repo (Gofame 360, MyPropGuard, the Emmanuel Onoja newsletter). The order in that file is the order in the carousel: Gofame 360, MyPropGuard, MarvelTech Hub, Haven Word Church, Nike, Positivus, Telegram bot, then the rest.

Previews are static screenshots in `public/projects/<slug>.jpg` (900x900 JPEG), referenced by each project's `image` field. They were captured with headless Chrome; Algo Trading was captured in its own dark mode, Haven Word Church after its intro splash, and the Telegram bot uses a supplied chat screenshot. Projects without an `image` show a text card. Streamlit apps (GeneLens, Research Paper Assistant, Customer Churn Predictor) redirect to a login page unless made public on Streamlit Cloud. The Snake Game Vercel link returned 404 and is listed as source only.

## Layout

The Projects page is a Swiper coverflow carousel (one square card per project, description and tech icons in a translucent panel, links to the live site and source). Swipe, drag, arrow keys, and horizontal mouse wheel all move it. The intro (a sage scanner line lighting up the essie logo) plays only on the home page and replays when the header logo is clicked. Theme toggles between light and dark; the brand dot and intro use the sage token `--sage` in `app/globals.css`. Hero links go to Certifications and the resume PDF (`public/Essie-Resume.pdf`). Certifications live in `app/certifications/page.tsx` with files under `public/certificates/`. Contact cards: LinkedIn, GitHub, and email (admin@devessie.xyz). The email also appears in the social rail on every page.
