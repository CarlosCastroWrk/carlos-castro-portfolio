import Image from "next/image";

const resumeHref = "/Carlos_Castro_AI_Operator_Resume_2026.pdf";
const email = "los124506@gmail.com";
const phone = "(956) 251-0708";
const linkedIn = "https://www.linkedin.com/in/carlos-castro-4a79a4323/";
const githubHref = "https://github.com/CarlosCastroWrk";
const boardroomCaseStudyHref =
  "https://github.com/CarlosCastroWrk/boardroom-cortex-case-study";
const stewardMoneyHref = "https://github.com/CarlosCastroWrk/steward-money";
const portfolioRepoHref =
  "https://github.com/CarlosCastroWrk/carlos-castro-portfolio";

const proofPoints = [
  {
    label: "Live troubleshooting",
    value: "Site lead for real-time event operations",
  },
  {
    label: "AI workflow builder",
    value: "Claude Code, Codex, ChatGPT, and Cursor",
  },
  {
    label: "Product stack",
    value: "Next.js, Supabase, GitHub, and Vercel",
  },
  {
    label: "Graduating",
    value: "Business Administration and Marketing, Dec 2026",
  },
];

const aiSupportFit = [
  "Troubleshoot live technical systems under pressure",
  "Translate messy user workflows into clear operating steps",
  "Document issues, decisions, handoffs, and next actions",
  "Communicate clearly with customers, operators, and teams",
  "Build practical AI-assisted tools that solve real workflow problems",
];

const platformCapabilities = [
  "User and business memory",
  "Workflow triage",
  "Customer activity tracking",
  "Knowledge organization",
  "Execution visibility",
];

const implementations = [
  {
    name: "Mavrik Aircraft Services",
    focus: "Aviation implementation",
    description:
      "A service-operations workflow for aircraft detailing and aviation service businesses.",
    problem:
      "Customer intake, quotes, scheduling, service status, and follow-up can spread across calls, texts, photos, and memory.",
    built:
      "A Boardroom/Cortex implementation that organizes the work around customers, leads, jobs, quotes, and service communication.",
    details: [
      "Customer intake",
      "Lead management",
      "Quoting and scheduling",
      "Service tracking",
      "Customer communication",
    ],
    linkText: "View case study",
    href: boardroomCaseStudyHref,
  },
  {
    name: "Automotive Sales Operating System",
    focus: "Automotive implementation",
    description:
      "A sales-operations system for tracking prospects, appointments, follow-ups, and pipeline activity.",
    problem:
      "Sales follow-up often depends on scattered notes, personal reminders, and inconsistent visibility into next actions.",
    built:
      "A structured operating layer for prospect management, customer relationship tracking, and appointment coordination.",
    details: [
      "Prospect management",
      "Follow-up workflows",
      "Appointment tracking",
      "Customer relationship management",
      "Pipeline visibility",
    ],
    linkText: "View case study",
    href: boardroomCaseStudyHref,
  },
  {
    name: "Water Restoration Operations Dashboard",
    focus: "Restoration implementation",
    description:
      "A dashboard concept for job tracking, customer information, photos, and service follow-up.",
    problem:
      "Restoration work moves quickly, and important job details can get buried in texts, calls, photos, and paper workflows.",
    built:
      "A practical job-visibility layer after studying how information moved inside my older brother's water mitigation business.",
    details: [
      "Centralized job tracking",
      "Customer management",
      "Photo documentation",
      "Project visibility",
      "Follow-up execution",
    ],
    linkText: "View case study",
    href: boardroomCaseStudyHref,
  },
];

const experience = [
  {
    company: "BallerTV",
    role: "Site Lead, Live Event Operations",
    summary:
      "Own live-stream site execution during high-pressure sporting events where equipment, people, and schedules have to keep moving.",
    bullets: [
      "Monitor live-stream equipment and diagnose issues while games are active",
      "Coordinate with tournament staff, camera operators, and venue contacts",
      "Keep communication calm and specific when technical problems appear in real time",
    ],
  },
  {
    company: "H-E-B",
    role: "Cooking Connections Partner",
    summary:
      "Delivered customer-facing product guidance, demos, and service support while balancing preparation, presentation, and real-time customer needs.",
    bullets: [
      "Explained products and recommendations clearly to a wide range of customers",
      "Balanced service, preparation, presentation, and customer questions during busy shifts",
      "Built the habit of reading customer needs quickly and responding with practical help",
    ],
  },
  {
    company: "Vamos Coffee",
    role: "Barista",
    summary:
      "Supported daily service operations through hospitality, order accuracy, shift communication, and calm execution during busy customer rushes.",
    bullets: [
      "Handled fast customer flow while keeping quality and communication steady",
      "Worked inside repeatable service routines where accuracy and timing mattered",
      "Developed a customer-first operating style under pressure",
    ],
  },
];

const tools = [
  "Claude Code",
  "ChatGPT",
  "OpenAI Codex",
  "Cursor",
  "GitHub",
  "Supabase",
  "Vercel",
  "SQL/API fundamentals",
  "Workflow design",
  "Documentation",
  "Technical troubleshooting",
  "Issue triage",
  "Customer success",
];

const proofLinks = [
  {
    name: "Boardroom / Cortex case study",
    href: boardroomCaseStudyHref,
    description:
      "Public architecture notes for the AI-native operations platform and industry implementations.",
  },
  {
    name: "Steward Money",
    href: stewardMoneyHref,
    description:
      "Next.js and TypeScript product build showing real application structure and iteration.",
  },
  {
    name: "Portfolio source",
    href: portfolioRepoHref,
    description:
      "The public Next.js codebase behind this portfolio and application positioning work.",
  },
];

const mavrikUsageSteps = [
  {
    label: "Capture",
    title: "Start from the field note",
    description:
      "A customer conversation or service request gets captured before it disappears into texts or memory.",
  },
  {
    label: "Structure",
    title: "Confirm the operating record",
    description:
      "The prototype organizes the note into customer, aircraft, service scope, and timing details.",
  },
  {
    label: "Move",
    title: "Push the next action",
    description:
      "The work lands in a quote, job, photo, payment, or follow-up path instead of staying as a loose reminder.",
  },
];

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sea">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <a className="text-sm font-semibold tracking-tight text-ink" href="#top">
          Carlos Castro
        </a>
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 text-sm font-medium text-graphite sm:flex"
        >
          <a className="transition hover:text-sea" href="#projects">
            Platform
          </a>
          <a className="transition hover:text-sea" href="#experience">
            Experience
          </a>
          <a className="transition hover:text-sea" href="#contact">
            Contact
          </a>
        </nav>
      </header>

      <section id="top" className="mx-auto max-w-6xl px-5 pb-20 pt-12 sm:px-8 sm:pb-24 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-5 text-base font-medium text-moss">
              Boerne / Austin, Texas
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Carlos Castro
            </h1>
            <p className="mt-5 max-w-3xl text-xl font-medium leading-8 text-graphite sm:text-2xl">
              AI Operations & Technical Support Builder
            </p>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-graphite">
              I troubleshoot live systems, build AI-assisted workflow tools, and
              help users turn messy operations into clear processes.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-graphite">
              Business Administration and Marketing senior graduating December
              2026, focused on AI support, user operations, and business
              operations roles.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-graphite focus:outline-none focus:ring-2 focus:ring-sea focus:ring-offset-2"
                href={resumeHref}
                download
              >
                Resume
                <ArrowIcon />
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 rounded-md border border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-sea hover:text-sea focus:outline-none focus:ring-2 focus:ring-sea focus:ring-offset-2"
                href={linkedIn}
              >
                LinkedIn
                <ArrowIcon />
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 rounded-md border border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-sea hover:text-sea focus:outline-none focus:ring-2 focus:ring-sea focus:ring-offset-2"
                href={githubHref}
              >
                GitHub
                <ArrowIcon />
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 rounded-md border border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-sea hover:text-sea focus:outline-none focus:ring-2 focus:ring-sea focus:ring-offset-2"
                href={`mailto:${email}`}
              >
                Email
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-line bg-white p-5 shadow-soft">
            <div className="border-b border-line pb-4">
              <p className="text-sm font-semibold text-ink">
                AI Support + User Ops Fit
              </p>
              <p className="mt-1 text-sm text-graphite">
                Where my live operations, customer service, and AI tooling
                experience meet.
              </p>
            </div>
            <div className="mt-5 space-y-3">
              {aiSupportFit.map((item, index) => (
                <div
                  className="flex items-center gap-3 rounded-md border border-line bg-paper p-3"
                  key={item}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-sea text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <span className="text-sm font-medium text-graphite">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {proofPoints.map((point) => (
            <div
              className="rounded-lg border border-line bg-white p-4 shadow-[0_1px_0_rgba(16,32,31,0.04)]"
              key={point.label}
            >
              <p className="text-sm font-semibold text-sea">{point.label}</p>
              <p className="mt-2 text-sm leading-6 text-graphite">
                {point.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-white" id="about">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="About"
                title="Practical AI adoption for real operations."
              />
              <p className="max-w-4xl text-lg leading-8 text-graphite">
                I&apos;m a Business Administration and Marketing senior at
                Concordia University Texas, graduating December 2026. I&apos;m
                focused on the space between users, operations, and AI tools:
                workflow design, technical support, customer follow-up, service
                tracking, documentation, and business memory. My work centers on
                one reusable operating foundation, Boardroom/Cortex, that can be
                adapted into industry-specific systems after studying how real
                people work.
              </p>
            </div>
            <figure className="overflow-hidden rounded-lg border border-line bg-paper shadow-soft">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  alt="Carlos Castro outdoors by a mountain lake"
                  className="object-cover object-[center_57%]"
                  fill
                  priority
                  sizes="(min-width: 1024px) 340px, 100vw"
                  src="/carlos-castro-photo.jpg"
                />
              </div>
              <figcaption className="border-t border-line bg-white px-4 py-3 text-sm text-graphite">
                Carlos Castro | Texas
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20" id="projects">
        <SectionHeading
          eyebrow="Platform"
          title="One operating foundation, adapted across industries."
        />
        <div className="rounded-lg border border-line bg-white p-6 shadow-soft sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sea">
                Core system
              </p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight text-ink">
                Boardroom / Cortex OS
              </h3>
              <p className="mt-2 text-base font-semibold text-moss">
                AI-Native Operations Platform
              </p>
              <p className="mt-5 text-lg leading-8 text-graphite">
                Boardroom/Cortex is an AI-native operating system and business
                memory layer designed to help organizations organize knowledge,
                decisions, customer activity, workflows, and execution.
              </p>
              <p className="mt-4 text-base leading-7 text-graphite">
                It serves as the foundation for industry-specific
                implementations, allowing operational systems to be rapidly
                adapted to different business environments while maintaining a
                shared intelligence and workflow architecture.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-ink px-4 py-3 text-sm font-semibold text-white transition hover:bg-graphite focus:outline-none focus:ring-2 focus:ring-sea focus:ring-offset-2"
                  href={boardroomCaseStudyHref}
                >
                  View public case study
                  <ArrowIcon />
                </a>
                <a
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-line bg-white px-4 py-3 text-sm font-semibold text-ink transition hover:border-sea hover:text-sea focus:outline-none focus:ring-2 focus:ring-sea focus:ring-offset-2"
                  href={githubHref}
                >
                  View GitHub profile
                  <ArrowIcon />
                </a>
              </div>
            </div>
            <div className="rounded-lg border border-line bg-paper p-5">
              <p className="text-sm font-semibold text-ink">
                Shared architecture
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {platformCapabilities.map((capability) => (
                  <div
                    className="rounded-md border border-line bg-white px-4 py-3 text-sm font-medium text-graphite"
                    key={capability}
                  >
                    {capability}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="my-8 flex items-center justify-center gap-4 text-sm font-semibold uppercase tracking-[0.16em] text-sea">
            <span className="h-px flex-1 bg-line" />
            <span>Proof links</span>
            <span className="h-px flex-1 bg-line" />
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {proofLinks.map((link) => (
              <a
                className="group rounded-lg border border-line bg-paper p-5 transition hover:border-sea hover:bg-white"
                href={link.href}
                key={link.name}
              >
                <span className="flex items-center gap-2 text-base font-semibold text-ink group-hover:text-sea">
                  {link.name}
                  <ArrowIcon />
                </span>
                <span className="mt-3 block text-sm leading-6 text-graphite">
                  {link.description}
                </span>
              </a>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-sea/25 bg-[linear-gradient(180deg,rgba(15,118,110,0.08),rgba(255,255,255,0))] p-5 sm:p-6">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sea">
                  Prototype usage example
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink">
                  Mavrik turns a field note into the next service step.
                </h3>
                <p className="mt-4 text-base leading-7 text-graphite">
                  The aviation prototype shows how an aircraft-detailing
                  operator moves from a customer conversation into a
                  structured customer, aircraft, quote, and follow-up workflow.
                  The point is simple: show the project in use through one
                  realistic service path without overstating the current scope.
                </p>
              </div>

              <div className="rounded-lg border border-line bg-white p-4 shadow-[0_1px_0_rgba(16,32,31,0.04)]">
                <div className="rounded-md border border-line bg-paper p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sea">
                    Operator note
                  </p>
                  <p className="mt-2 text-sm leading-6 text-graphite">
                    Owner asks about an exterior wash and ceramic quote for a
                    Citation at KAPA next week.
                  </p>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {["Customer", "Aircraft", "Quote"].map((item) => (
                    <div
                      className="rounded-md border border-line bg-white px-3 py-3 text-sm font-semibold text-ink"
                      key={item}
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-md border border-sea/20 bg-sea/10 px-4 py-3 text-sm font-semibold text-sea">
                  Next action: quote ready to review
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-3 lg:grid-cols-3">
              {mavrikUsageSteps.map((step) => (
                <div
                  className="rounded-md border border-line bg-white p-4"
                  key={step.label}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sea">
                    {step.label}
                  </p>
                  <h4 className="mt-2 text-base font-semibold text-ink">
                    {step.title}
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-graphite">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="my-8 flex items-center justify-center gap-4 text-sm font-semibold uppercase tracking-[0.16em] text-sea">
            <span className="h-px flex-1 bg-line" />
            <span>Case studies</span>
            <span className="h-px flex-1 bg-line" />
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {implementations.map((implementation) => (
              <article
                className="flex flex-col rounded-lg border border-line bg-white p-5 shadow-[0_1px_0_rgba(16,32,31,0.04)]"
                key={implementation.name}
              >
                <p className="text-sm font-semibold text-sea">
                  {implementation.focus}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-ink">
                  {implementation.name}
                </h3>
                <p className="mt-4 text-base leading-7 text-graphite">
                  {implementation.description}
                </p>
                <div className="mt-5 space-y-4 rounded-md border border-line bg-paper p-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sea">
                      Problem
                    </p>
                    <p className="mt-2 text-sm leading-6 text-graphite">
                      {implementation.problem}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sea">
                      Built
                    </p>
                    <p className="mt-2 text-sm leading-6 text-graphite">
                      {implementation.built}
                    </p>
                  </div>
                </div>
                <ul className="mt-5 space-y-2">
                  {implementation.details.map((detail) => (
                    <li
                      className="flex gap-2 text-sm leading-6 text-graphite"
                      key={detail}
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sea" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <a
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sea transition hover:text-ink"
                  href={implementation.href}
                >
                  {implementation.linkText}
                  <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white" id="experience">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <SectionHeading eyebrow="Experience" title="Customer-facing execution and operations." />
          <div className="divide-y divide-line rounded-lg border border-line">
            {experience.map((item) => (
              <article
                className="grid gap-4 bg-white p-5 first:rounded-t-lg last:rounded-b-lg sm:grid-cols-[0.75fr_1fr] sm:p-6"
                key={item.company}
              >
                <div>
                  <h3 className="text-lg font-semibold text-ink">{item.company}</h3>
                  <p className="mt-1 text-sm font-medium text-sea">{item.role}</p>
                </div>
                <div>
                  <p className="text-base leading-7 text-graphite">
                    {item.summary}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {item.bullets.map((bullet) => (
                      <li
                        className="flex gap-2 text-sm leading-6 text-graphite"
                        key={bullet}
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sea" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20" id="tools">
        <SectionHeading eyebrow="Tools" title="AI, product, and operations toolkit." />
        <div className="flex flex-wrap gap-3">
          {tools.map((tool) => (
            <span
              className="rounded-md border border-line bg-white px-4 py-2 text-sm font-medium text-graphite"
              key={tool}
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-ink text-white" id="contact">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-200">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Let&apos;s build useful AI systems.
              </h2>
            </div>
            <div className="grid gap-3 text-base sm:grid-cols-3">
              <a
                className="rounded-md border border-white/15 p-4 text-white transition hover:border-teal-200"
                href={`mailto:${email}`}
              >
                <span className="block text-sm text-teal-200">Email</span>
                {email}
              </a>
              <a
                className="rounded-md border border-white/15 p-4 text-white transition hover:border-teal-200"
                href="tel:+19562510708"
              >
                <span className="block text-sm text-teal-200">Phone</span>
                {phone}
              </a>
              <a
                className="rounded-md border border-white/15 p-4 text-white transition hover:border-teal-200"
                href={linkedIn}
              >
                <span className="block text-sm text-teal-200">LinkedIn</span>
                linkedin.com/in/carlos-castro-4a79a4323
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
