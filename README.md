# Shuddh Masala Co. — Organic Masala Website

A production-ready Next.js 14 website for a premium Indian organic masala brand.

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS

## Run locally
```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

For production build:
```bash
npm run build
npm run start
```

## Routes
- `/` Home
- `/products` Products listing with filter + search
- `/products/[slug]` Product details
- `/about` About brand
- `/purity` Purity & testing videos
- `/contact` Contact form

## Product Data
Edit all products in:
- `data/products.ts`

Each product supports:
- `slug`, `name`, `shortDescription`, `longDescription`
- `ingredients`, `netWeightOptions`, `price`, `images`, `tags`
- Optional: `spiceLevel`, `originRegion`
- `usageSuggestions`

## Add / Update Purity Videos
Edit the `videos` array in:
- `app/purity/page.tsx`

Video object shape:
```ts
{
  title: string;
  description: string;
  type: 'youtube' | 'local';
  url: string;
  thumbnail?: string;
}
```

### YouTube videos
Use embed URLs like:
- `https://www.youtube.com/embed/<VIDEO_ID>`

### Local videos
1. Add MP4 files to `public/videos`
2. Use URL format in data: `/videos/<file>.mp4`

## Notes
- Image optimization uses `next/image`.
- SEO metadata is configured globally in `app/layout.tsx` and per page.
