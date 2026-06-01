# Shubham. R. Beldar. K. — Portfolio

Professional portfolio website for Shubham. R. Beldar. K., Materials and QA engineer in civil and pavement engineering.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Recharts** (toolbox chart)
- **Lucide React** (icons)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
app/
  layout.tsx      # Root layout & fonts
  page.tsx        # Main page
  globals.css     # Global styles
components/
  Navbar.tsx
  Hero.tsx
  About.tsx
  Snapshot.tsx
  ResearchEquity.tsx
  ProfessionalEquity.tsx
  EducationEquity.tsx
  TeachingEquity.tsx
  Toolbox.tsx
  Goals.tsx
  Contact.tsx
  Footer.tsx
public/
  shubham.jpg     # Profile photo
```

## Customization

- **Contact info**: Edit `lib/profile.ts` (phone, email, LinkedIn) — used site-wide.
- **Patents & publications links**: Edit `lib/research-data.ts`.
- **Photo**: Replace `public/shubham.jpg` (recommended 320×400px or larger).
- **Resume**: Replace `public/resume.pdf` with the 1–2 page resume PDF (currently the full portfolio PDF).
- **Contact Form**: Wire up to Formspree, Resend, or your backend API in `Contact.tsx`.

## Deploy

Deploy easily on [Vercel](https://vercel.com):

```bash
npx vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

## Color Palette

| Token      | Hex       |
|------------|-----------|
| Primary    | `#2D7D7D` |
| Secondary  | `#C8A96E` |
| Background | `#F8F9FA` |
| Accent     | `#E8F4F4` |
