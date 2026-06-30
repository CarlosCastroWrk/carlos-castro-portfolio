# Carlos Castro Portfolio

Professional portfolio site for Carlos Castro, built for AI fellowship and job applications.

Live site: [carlos-castro-portfolio-alpha.vercel.app](https://carlos-castro-portfolio-alpha.vercel.app)

## Positioning

This portfolio presents Carlos as an AI-native operator and workflow systems builder focused on practical AI adoption inside real businesses.

The core story is:

```text
Boardroom / Cortex OS
    |
    | reusable AI-native operations platform
    |
Industry-specific implementations
```

Boardroom/Cortex is positioned as the shared operating system, workflow engine, and business memory layer. Zakar is the active first vertical project, with Mavrik Aircraft Services preserved as proof of the platform pattern and Water Restoration Operations Dashboard presented as a workflow-systems example.

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
public/Carlos_Castro_AI_Operator_Resume_2026.pdf
```

The resume source and generator live in:

```text
resume/Carlos_Castro_AI_Operator_Resume_2026.md
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
