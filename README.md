# colored Interior Designs — Website

A React + Vite + TypeScript + Tailwind CSS + Framer Motion marketing site for
a residential interior design studio.

## Running locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build      # production build to dist/
npm run preview    # preview the production build
```

## Structure

- `src/pages` — Home, Projects, Gallery, Contact
- `src/components` — Header, Footer, floating WhatsApp/Call/Get Quote
  buttons, contact form, lightbox, logo, scroll-reveal wrapper
- `src/data` — services, gallery categories, projects, reviews, and the
  single `imageSource.ts` helper every photo URL is generated from

## About the photos

Every photo on the site is a real, freely-licensed Pexels stock photo
(no attribution required), chosen to match its section topically — this
was approved as a placeholder measure until the studio's own project
photography is ready. To replace a photo, edit its numeric Pexels id in
`src/data/categories.ts`, `src/data/projects.ts`, or `src/pages/Home.tsx`
— or swap in a direct URL to a real project photo, no other code changes
needed.

Two gallery categories — **Shoe Rack Designs** and **Pooja Unit Designs**
— are India-specific built-ins with very little genuine matching stock
photography available anywhere online. Their galleries currently reuse
the closest adjacent real photos (closet/storage/console shots). These
two should be the first candidates replaced with the client's own
project photos.

Also note: 50 client reviews are included (`src/data/reviews.ts`) — the
10 `featuredReviews` are hand-written placeholders shown in the
homepage carousel, and the 40 `moreReviews` are generated from a small
set of name/quote pools for volume, so several read similarly. Both
sets should be replaced with the studio's real reviews before launch.

## Things to wire up before launch

- **Contact form** (`src/components/ContactForm.tsx`) currently only
  shows a success state locally — connect its `handleSubmit` to a real
  backend/email service (e.g. an API route, Formspree, etc).
- **Phone / WhatsApp numbers** are placeholders (`+91 12345 67890`) in
  `FloatingButtons.tsx`, `Footer.tsx`, and `Contact.tsx` — replace with
  the studio's real numbers.
- **Address/email** in `Contact.tsx` and `Footer.tsx` are placeholders.
