# mck-routes

This repository serves a static dashboard for McKesson route optimization.  The page uses Leaflet for mapping and Supabase for user authentication.

## Environment

Before building, create a `.env` file in the root with your Supabase credentials.  You can start from `.env.example`:

```sh
cp .env.example .env
# edit .env and supply your real project URL & anon key
```

The build script will read these variables and inject them into the HTML.

## Building

Node.js is required (v16+).

```sh
npm install       # installs dotenv
npm run build     # produces index.html from index.template.html
```

`index.html` is the file that gets deployed to Netlify; it's also the file checked into git for convenience, but you can regenerate it anytime.

## Deployment

Upload the generated `index.html` to your static host (Netlify, GitHub Pages, etc.).  Make sure the `SUPABASE_URL` and `SUPABASE_ANON_KEY` environment variables are set in your deployment environment as well (Netlify _Site settings → Build & deploy → Environment_).

## Locating files

- **`.env`** – your private, user-specific environment variables (not committed).
- **`.env.example`** – template you can share with collaborators.
- **`index.template.html`** – the source HTML containing placeholders for env values.
- **`index.html`** – the generated page (also deployed).
- **`build.js`** – small Node script that does the substitution.

Feel free to send me the contents of your `.env` when you're ready and I can verify or tweak the build output.