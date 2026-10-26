# Elens

Elens is a photography portfolio website built with Next.js. It provides a landing page, an about page, and a searchable photo collection backed by the Unsplash API.

## Stack

- Next.js 15 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4
- Axios
- Unsplash API

## Features

- Responsive landing, about, and collections pages
- Photo search through the `query` URL parameter
- Photo detail pages at `/collections/detail/[id]`
- Next.js Route Handlers that keep the Unsplash access key on the server
- Remote Unsplash image support through `next/image`

## Project structure

```text
src/
  app/
    (home)/                 Home page and its sections
    about/                  About page
    api/photos/             Unsplash proxy endpoints
    collections/            Searchable gallery and photo detail page
    services/               Client-side API functions
    layout.tsx              Root layout, navigation, and footer
  components/               Shared UI and layout components
  hooks/usePhotos.tsx       Collection search state and data loading
  config/Menu.tsx           Navigation and social-link data
  types/types.ts            Shared TypeScript types
```

## Requirements

- Node.js 18.18 or newer
- An Unsplash API access key

## Installation

```bash
npm install
```

Create `.env.local` in the project root:

```env
UNSPLASH_BASE_URL=https://api.unsplash.com
UNSPLASH_ACCESS_KEY=your_unsplash_access_key
```

Do not expose `UNSPLASH_ACCESS_KEY` with a `NEXT_PUBLIC_` prefix. The application sends requests to its own API routes, and those routes call Unsplash from the server.

## Scripts

```bash
npm run dev      # Start the development server with Turbopack
npm run lint     # Run ESLint
npm run build    # Create a production build
npm run start    # Serve the production build
npm run format   # Format files with Prettier
```

Open `http://localhost:3000` after starting the development server.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Landing page |
| `/about` | About Elens |
| `/collections` | Searchable Unsplash gallery |
| `/collections?query=portrait` | Gallery filtered by a search query |
| `/collections/detail/[id]` | Detail view for an Unsplash photo |
| `/api/photos?query=nature&page=1` | Search photos through the server-side proxy |
| `/api/photos/[id]` | Get one photo through the server-side proxy |

## Data flow

```text
Collections page
  -> usePhotos hook
  -> app/services/photos.service.ts
  -> /api/photos Route Handler
  -> Unsplash API
```

The gallery reads its search term from `query` in the URL. Submitting the search form updates the URL, then `usePhotos` requests the matching images.

The API route accepts `query` and `page`, and sends `per_page=15` to Unsplash. The current gallery requests the first page because `usePhotos` does not yet pass its URL `page` value to `getPhotos`. Pagination or infinite scrolling should pass that value and append later responses to the existing `photos` state.

## Notes for development

- `useSearchParams()` in `usePhotos` must remain below a React `Suspense` boundary. The collections page already provides that boundary so `next build` can prerender correctly.
- Unsplash requests can fail when the access key is missing, invalid, rate-limited, or the requested photo ID no longer exists. The API routes return an error message and the detail page renders the not-found view when no photo is available.
- Only `images.unsplash.com` is allowed by `next.config.ts` for optimized remote images. Add another `remotePatterns` entry before using images from a different host.
