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

## Contact info

Real studio details are wired in across `FloatingButtons.tsx`, `Footer.tsx`,
and `Contact.tsx`:
- Phone / WhatsApp: +91 78454 74629
- Email: Info.coloredinteriors@gmail.com
- Address: 6, Veshran, Gopinath Gardens, Kanathurreddikuppam, Chennai 603112
- GSTIN: 33AAVFC8674K1ZN

## Contact form backend

`src/components/ContactForm.tsx` submits to Formspree
(`https://formspree.io/f/mbdnkoaz`, under the "Colored Interiors" account),
which emails every submission to Info.coloredinteriors@gmail.com. Notification
emails always arrive with "Formspree" as the sender name — that isn't
customisable on the free tier. The subject line is set via the hidden
`_subject` field in the form.
