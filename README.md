Amigo’s Foreign Languages Academy — Next.js + Tailwind + TypeScript

Tech stack
- Next.js (Pages Router)
- Tailwind CSS
- TypeScript
- Framer Motion

Local development
```bash
npm install
npm run dev
```

Build
```bash
npm run build
npm start
```

Deployment (Vercel)
- Create a Vercel project and link this repo.
- Add GitHub Action secrets: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`.
- Push to `main` to trigger CI/CD.

SEO
- Meta tags set in `src/pages/_document.tsx` and `src/pages/_app.tsx`.

Notes
- Course level selection auto-fills the contact form via URL parameters.
