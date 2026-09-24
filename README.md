# Lesley Kimutai — Developer Portfolio

A responsive personal portfolio built with Next.js and TypeScript. The site presents Lesley Kimutai's background in computer engineering, embedded systems, IoT automation, machine learning, and full-stack web development.

## What was built

- Added a polished landing page with a responsive, editorial-inspired visual design.
- Added semantic sections for:
  - Hero introduction and resume call-to-action
  - About and education background
  - Cloud Factory Kenya experience
  - Skills and technical toolkit
  - Featured projects
  - Contact and social links
- Added responsive mobile layouts and accessible navigation landmarks.
- Added real LinkedIn and GitHub links from the resume.
- Added clearly marked Instagram and Facebook placeholder destinations because no handles were provided.
- Used the supplied profile photo in the hero section.
- Added the supplied resume as a downloadable `/Resume.pdf` asset.
- Increased desktop reading text sizes while preserving the existing mobile typography.

## Tech stack

- Next.js 16
- React 19
- TypeScript
- CSS
- Next/Image

## Getting started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run the TypeScript validation check |

## Project structure

```text
app/
  globals.css       Global styles and responsive design
  layout.tsx        Metadata and root layout
  page.tsx          Portfolio page content
public/
  profile-photo.jpg Supplied profile image
  Resume.pdf        Supplied resume and downloadable source
```

## Validation

The project has been checked with:

```bash
npm run lint
npm run build
```

Both commands pass successfully.