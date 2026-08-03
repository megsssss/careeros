# CareerOS

**Turn any job description into a personalized action plan.**

Paste a job posting and a short summary of your background. CareerOS calls the
Claude API to generate a structured field report: a fit score, an honest
apply/stretch/pass verdict, your real advantages, the skill gaps that matter,
a tailored interview brief, and a prep plan — all live, not hardcoded.

Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. The only
external service is the Anthropic API.

## Run it locally

```bash
npm install
cp .env.example .env.local   # then paste in your Anthropic API key
npm run dev
```

Open [http://localhost:3000](http://localhost:3000), paste a job description,
and hit **Analyze this role**.

Get an API key at [console.anthropic.com](https://console.anthropic.com/settings/keys).

## How it works

```
JD + background (textarea)
        ↓  POST /api/analyze
Next.js API route
        ↓  system-prompted request for structured JSON
Claude API (claude-sonnet-5)
        ↓  { matchScore, verdict, skills, interviewQuestions, plan, ... }
Dashboard (Overview / Skill Gap / Interview Brief / Prep Plan)
```

The API route (`app/api/analyze/route.ts`) sends the job description and
background to Claude with a system prompt that requires a strict JSON schema
back (see `lib/types.ts` for the shape). No database, no auth — the analysis
lives in React state for the session, which is enough for an MVP.

## Project structure

```
app/
  page.tsx                 intake form + orchestrates the analysis flow
  api/analyze/route.ts     server route that calls the Anthropic API
  layout.tsx, globals.css  fonts, theme tokens, base styles
components/
  Gauge.tsx                the signature instrument-dial fit score
  VerdictStamp.tsx         APPLY / STRETCH / PASS stamp
  SkillBar.tsx             skill-gap row with confidence bar
  Dashboard.tsx            tabbed results view
lib/types.ts                shared Analysis type
```

## Design direction

The visual identity is a "field report" instrument — deep ink-navy
background, warm amber signal color for calls to attention, a dial-style
gauge for the fit score, and a dashed stamp for the verdict. Fraunces
(display) + Inter (body) + IBM Plex Mono (data/labels, uppercase tracked)
carry the analyst-desk feel without leaning on a generic dashboard template.

## Deploy

Push this repo to GitHub, then import it on [Vercel](https://vercel.com/new).
Add `ANTHROPIC_API_KEY` (and optionally `ANTHROPIC_MODEL`) as an environment
variable in the Vercel project settings. No other configuration is needed.

## What I'd add next

- Persist past reports (Supabase/Postgres) so a user can build a running
  application tracker instead of a single session.
- Resume upload (PDF/DOCX parsing) instead of a pasted background summary.
- A "practice answer" loop on the Interview Brief tab: type an answer to a
  question, get scored feedback from Claude before the real interview.
