# Tessera website

The marketing site for the Tessera Shopify app: a home page, a page for every feature, pricing with a live calculator, contact, privacy policy and terms. Built with [Astro](https://astro.build) as a fully static site.

## Run it

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # static site in dist/
npm run preview    # serve dist/
npm run check      # type check
```

## Where things live

| What | File |
| --- | --- |
| Brand name, links, support email, install link | `src/data/site.ts` |
| Every feature: text, highlights, setup steps, limits, price | `src/data/modules.ts` |
| Categories and their colours | `src/data/categories.ts` |
| Feature illustrations (copied from the app's `public/modules/`) | `public/modules/<key>.svg` |
| Colours, type, buttons, cards | `src/styles/global.css` |
| Pages | `src/pages/` (feature pages come from `src/pages/features/[key].astro`) |

Adding a feature: add it to `src/data/modules.ts` and put its illustration in `public/modules/`. Its page, card, calculator entry and links are created from that.

## Before launch

- `src/data/site.ts`: set the real App Store install link, domain and support email.
- `src/data/modules.ts`: prices are placeholders, the same as the app's registry.
- `src/pages/privacy.astro` and `src/pages/terms.astro` are drafts based on what the app does. Have them reviewed.
- After changing the home page hero, run `npm run preview` and `npm run og` to remake the social share image (`public/og.png`).

## Deploy

Any static host works. On Vercel, Netlify or Cloudflare Pages: build command `npm run build`, output folder `dist`.
