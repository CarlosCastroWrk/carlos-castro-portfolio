# Carlos Castro Portfolio

Professional portfolio site for Carlos Castro, built around business operations, implementation, customer success, and practical AI-assisted work.

Live site: [carlos-castro-portfolio-alpha.vercel.app](https://carlos-castro-portfolio-alpha.vercel.app)

## Positioning

This portfolio presents Carlos as an early-career operator learning business operations by doing the work, with TurnOS as the primary proof point.

The core story is:

```text
TurnOS
    |
    | workflow system built and used during apartment turnover
    |
CleanDay + supporting projects
```

TurnOS is the primary project. CleanDay is described as a residential cleaning project in development.

## Why It Exists

The portfolio is designed for reviewers who need to quickly understand:

- how Carlos studies real workflows
- how he identifies operational bottlenecks
- how he translates fragmented processes into structured systems
- how his projects connect into one reusable platform strategy
- how his background maps to AI implementation, product support, customer success, and startup operator roles

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Vercel
- ReportLab resume PDF generation

## Resume

The downloadable resume lives at:

```text
public/Carlos_Castro_Resume_2026.pdf
```

The resume source and generator live in:

```text
resume/Carlos_Castro_Resume_2026.md
scripts/generate_resume_pdf.py
```

To regenerate the resume PDF:

```bash
python3 scripts/generate_resume_pdf.py
```

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
