import Image from "next/image";

const resumeHref = "/Carlos_Castro_AI_Operator_Resume_2026.pdf";
const email = "los124506@gmail.com";
const phone = "(956) 251-0708";
const linkedIn = "https://www.linkedin.com/in/carlos-castro-4a79a4323/";
const githubHref = "https://github.com/CarlosCastroWrk";
const boardroomCaseStudyHref =
  "https://github.com/CarlosCastroWrk/boardroom-cortex-case-study";
const portfolioRepoHref =
  "https://github.com/CarlosCastroWrk/carlos-castro-portfolio";

const buildProof = [
  {
    label: "Boardroom/Cortex",
    value: "Reusable operations foundation for customers, work, notes, and decisions.",
  },
  {
    label: "Zakar",
    value:
      "Active first vertical: dealership salesperson assistant for lead memory, follow-up, reviewed drafts, and inventory boundaries.",
  },
  {
    label: "Mavrik Aviation",
    value: "Paused proof: verified Customer -> Aircraft -> Quote workflow for aircraft detailing.",
  },
  {
    label: "Restoration services",
    value: "Service-job dashboard story for jobs, customers, photos, and follow-up.",
  },
];

const heroProof = [
  "Next.js",
  "TypeScript",
  "Supabase",
  "Vercel",
  "GitHub",
  "Claude Code",
  "OpenAI Codex",
];

const platformCapabilities = [
  "Customer and account records",
  "Lead memory and next actions",
  "Follow-up queue and draft review",
  "Operational notes and handoffs",
  "Inventory accuracy boundaries",
  "Auth and tenant-aware app patterns",
];

const proofLinks = [
  {
    name: "Boardroom/Cortex case study",
    href: boardroomCaseStudyHref,
    description:
      "Public architecture notes for the reusable operating system and vertical product strategy.",
  },
  {
    name: "Portfolio source",
    href: portfolioRepoHref,
    description:
      "The public Next.js codebase behind this portfolio and career positioning work.",
  },
];

const implementations = [
  {
    name: "Zakar",
    focus: "Active first vertical project",
    problem:
      "Dealership sales follow-up depends on speed, personal voice, inventory accuracy, and clear next actions across many customer conversations.",
    built:
      "A narrow salesperson assistant for lead memory, follow-up queues, reviewed AI-drafted messages, and inventory-aware boundaries without turning it into a generic CRM or chatbot.",
    stack: ["Next.js", "TypeScript", "Supabase", "Workflow discovery"],
    status: "Current priority: dealership salesperson assistant MVP.",
    nextMilestone:
      "Connect trustworthy dealership data, tighten salesperson voice, and keep human review before customer-facing messages.",
    details: [
      "Lead memory",
      "Follow-up queue",
      "Salesperson voice",
      "Reviewed draft workflow",
      "Inventory accuracy boundaries",
    ],
    linkText: "View related platform notes",
    href: boardroomCaseStudyHref,
  },
  {
    name: "Mavrik Aircraft Services",
    focus: "Paused vertical proof",
    problem:
      "Aircraft-detailing work can spread across calls, texts, customer memory, photos, quotes, and informal follow-up.",
    built:
      "A focused Mavrik surface on Boardroom/Cortex that organizes customers, aircraft, quotes, and quote status before expanding into jobs and payments.",
    stack: ["Next.js", "TypeScript", "Supabase", "Vercel"],
    status: "Preserved proof: Customer -> Aircraft -> Quote is verified.",
    nextMilestone: "Paused while Zakar is the main build priority.",
    details: [
      "Customer intake",
      "Aircraft records",
      "Quote workspace",
      "Accepted quote state",
      "Service next action",
    ],
    linkText: "View case study",
    href: boardroomCaseStudyHref,
  },
  {
    name: "Water Restoration Operations Dashboard",
    focus: "Service-job visibility",
    problem:
      "Restoration jobs move quickly, and the operating picture can split across calls, texts, paper notes, photos, and memory.",
    built:
      "A workflow-systems story around jobs, customers, photos, operational notes, follow-up, and visibility after studying a real mitigation workflow.",
    stack: ["Workflow mapping", "Dashboard design", "AI-assisted build"],
    status: "Usable as a conservative workflow-systems example.",
    nextMilestone: "Add screenshots, repo path, deployment proof, and metrics.",
    details: [
      "Centralized job view",
      "Customer information",
      "Photo documentation",
      "Project notes",
      "Follow-up execution",
    ],
    linkText: "View related platform notes",
    href: boardroomCaseStudyHref,
  },
];

const researchSignals = [
  {
    field: "Zakar",
    evidence:
      "Active first vertical with a dealership salesperson design partner, focused on daily customer communication, salesperson voice, and inventory-grounded boundaries.",
  },
  {
    field: "Aircraft detailing",
    evidence:
      "Mapped a service path from customer conversation into aircraft, quote, status, and next action; preserved as proof while Zakar is prioritized.",
  },
  {
    field: "Tournament operations",
    evidence:
      "Ran live event operations where stream health, equipment, venue staff, and support communication all had to stay aligned.",
  },
  {
    field: "Restoration services",
    evidence:
      "Studied how mitigation work moves through jobs, customers, photos, notes, and handoffs.",
  },
];

const buildProcess = [
  "Interview users",
  "Map the workflow",
  "Find where context gets lost",
  "Prototype the operating path",
  "Deploy the useful slice",
  "Observe real use",
  "Iterate the system",
];

const experience = [
  {
    company: "BallerTV",
    role: "Site Lead, Live Event Operations",
    summary:
      "Operated live-streaming infrastructure during high-pressure sporting events where technical problems had to be handled while events stayed live.",
    bullets: [
      "Diagnosed stream, equipment, battery, connectivity, and setup issues under real-time constraints",
      "Coordinated with venue staff, camera operators, tournament directors, and support teams",
      "Kept communication calm, specific, and action-oriented while live events continued",
    ],
  },
  {
    company: "H-E-B",
    role: "Cooking Connections Partner",
    summary:
      "Managed customer-facing product explanation and service execution in a high-volume retail environment.",
    bullets: [
      "Explained products and recommendations clearly to customers with different needs",
      "Balanced preparation, demos, presentation, customer questions, and service quality during busy shifts",
      "Built the habit of reading customer intent quickly and responding with practical help",
    ],
  },
  {
    company: "Vamos Coffee",
    role: "Barista",
    summary:
      "Supported daily hospitality operations through order accuracy, shift communication, and calm execution during customer rushes.",
    bullets: [
      "Handled fast customer flow while keeping quality and communication steady",
      "Worked inside repeatable service routines where accuracy and timing mattered",
      "Developed a customer-first operating style under pressure",
    ],
  },
];

const toolGroups = [
  {
    name: "Product",
    tools: ["Workflow discovery", "Process mapping", "Product scoping", "User research"],
  },
  {
    name: "Build",
    tools: ["Next.js", "TypeScript", "Supabase", "Vercel", "GitHub"],
  },
  {
    name: "AI",
    tools: ["Claude Code", "OpenAI Codex", "ChatGPT", "Cursor"],
  },
  {
    name: "Operations",
    tools: [
      "Live troubleshooting",
      "Issue triage",
      "Documentation",
      "Stakeholder communication",
      "English/Spanish",
    ],
  },
];

const targetRoles = [
  "AI Product Support",
  "Implementation",
  "Technical Customer Success",
  "Product Operations",
  "AI Quality Operations",
];

const zakarUsageSteps = [
  {
    label: "Capture",
    title: "Start from the sales note",
    description:
      "A customer question or showroom conversation gets captured before it disappears into texts or memory.",
  },
  {
    label: "Structure",
    title: "Turn it into lead memory",
    description:
      "The assistant organizes the note into customer context, vehicle interest, timing, objections, and next action.",
  },
  {
    label: "Move",
    title: "Review the next message",
    description:
      "The salesperson gets a draft to review, adjust, and send only after inventory and confidence boundaries are respected.",
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
          <a className="transition hover:text-sea" href="#platform">
            Platform
          </a>
          <a className="transition hover:text-sea" href="#process">
            Process
          </a>
          <a className="transition hover:text-sea" href="#experience">
            Experience
          </a>
          <a className="transition hover:text-sea" href="#contact">
            Contact
          </a>
        </nav>
      </header>

      <section
        id="top"
        className="mx-auto max-w-6xl px-5 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-16"
      >
        <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <p className="mb-5 text-base font-medium text-moss">
              Boerne / Austin, Texas
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Carlos Castro
            </h1>
            <p className="mt-6 max-w-3xl text-2xl font-semibold leading-9 text-ink sm:text-3xl sm:leading-10">
              I build AI-native workflow software for real business operations.
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-graphite">
              I study messy real-world workflows, turn them into clear product
              paths, and ship useful systems with Next.js, Supabase, Vercel,
              Claude Code, Codex, and OpenAI.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-graphite">
              Business Administration and Marketing senior at Concordia
              University Texas, graduating December 2026. Focused on product
              support, implementation, technical success, and AI operations
              roles.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {heroProof.map((item) => (
                <span
                  className="rounded-md border border-line bg-white px-3 py-2 text-sm font-semibold text-graphite"
                  key={item}
                >
                  {item}
                </span>
              ))}
            </div>
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
                href={githubHref}
              >
                GitHub
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
                href={`mailto:${email}`}
              >
                Email
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-line bg-white p-5 shadow-soft">
            <div className="border-b border-line pb-4">
              <p className="text-sm font-semibold text-ink">Built and studied</p>
              <p className="mt-1 text-sm text-graphite">
                The proof is the operating systems, workflows, and verticals.
              </p>
            </div>
            <div className="mt-5 space-y-3">
              {buildProof.map((point, index) => (
                <div
                  className="grid gap-3 rounded-md border border-line bg-paper p-4 sm:grid-cols-[36px_1fr]"
                  key={point.label}
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-sea text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{point.label}</p>
                    <p className="mt-1 text-sm leading-6 text-graphite">
                      {point.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-y border-line bg-white"
        id="platform"
      >
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <SectionHeading
            eyebrow="Platform"
            title="Boardroom/Cortex is the operating foundation."
          />
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="text-base font-semibold text-moss">
                Reusable AI-native operations platform
              </p>
              <p className="mt-5 text-lg leading-8 text-graphite">
                Boardroom/Cortex is the core system I use to translate messy
                business work into structured product objects: customers,
                assets, quotes, notes, decisions, and next actions.
              </p>
              <p className="mt-4 text-base leading-7 text-graphite">
                The active first vertical is Zakar, a dealership salesperson
                assistant focused on lead memory, follow-up queues, reviewed
                message drafts, salesperson voice, and inventory accuracy
                boundaries. Mavrik remains preserved proof that the same
                foundation can support a vertical workflow; local docs verify
                Customer to Aircraft to Quote, but it is no longer the current
                build lane.
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
              <p className="text-sm font-semibold text-ink">Concrete system pieces</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
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

          <div className="grid gap-4 lg:grid-cols-2">
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
                  Product path
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink">
                  Zakar turns a floor note into the next follow-up.
                </h3>
                <p className="mt-4 text-base leading-7 text-graphite">
                  The dealership workflow shows how a salesperson can move from
                  a loose customer conversation into lead memory, a follow-up
                  queue, and a reviewed message draft without pretending the
                  assistant should replace judgment.
                </p>
              </div>

              <div className="rounded-lg border border-line bg-white p-4 shadow-[0_1px_0_rgba(16,32,31,0.04)]">
                <div className="rounded-md border border-line bg-paper p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sea">
                    Sales note
                  </p>
                  <p className="mt-2 text-sm leading-6 text-graphite">
                    Customer asked about a Telluride after work. Wife has final
                    say. Confirm payment range and inventory before texting.
                  </p>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {["Lead memory", "Follow-up", "Draft review"].map((item) => (
                    <div
                      className="rounded-md border border-line bg-white px-3 py-3 text-sm font-semibold text-ink"
                      key={item}
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-md border border-sea/20 bg-sea/10 px-4 py-3 text-sm font-semibold text-sea">
                  Next action: review draft before sending
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-3 lg:grid-cols-3">
              {zakarUsageSteps.map((step) => (
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
                <div className="mt-5 flex flex-wrap gap-2">
                  {implementation.stack.map((item) => (
                    <span
                      className="rounded-md border border-line bg-paper px-3 py-1.5 text-xs font-semibold text-graphite"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-5 rounded-md border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
                  <p className="font-semibold">{implementation.status}</p>
                  <p className="mt-1">Next: {implementation.nextMilestone}</p>
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

      <section
        className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20"
        id="process"
      >
        <SectionHeading
          eyebrow="How I build"
          title="Start with the workflow, then ship the useful slice."
        />
        <div className="grid gap-4 lg:grid-cols-7">
          {buildProcess.map((step, index) => (
            <div
              className="rounded-lg border border-line bg-white p-4 shadow-[0_1px_0_rgba(16,32,31,0.04)]"
              key={step}
            >
              <p className="text-sm font-semibold text-sea">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-3 text-sm font-semibold leading-6 text-ink">
                {step}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-ink">
              Workflow discovery is part of the product.
            </h3>
            <p className="mt-4 text-base leading-7 text-graphite">
              The strongest signal is not a list of tools. It is that I talk to
              operators, study where work breaks down, and turn those patterns
              into smaller systems people can actually use.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {researchSignals.map((signal) => (
              <article
                className="rounded-lg border border-line bg-white p-5"
                key={signal.field}
              >
                <h4 className="text-base font-semibold text-ink">
                  {signal.field}
                </h4>
                <p className="mt-3 text-sm leading-6 text-graphite">
                  {signal.evidence}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white" id="experience">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <SectionHeading
            eyebrow="Experience"
            title="Customer-facing execution and live operations."
          />
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

      <section
        className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20"
        id="tools"
      >
        <SectionHeading
          eyebrow="Toolkit"
          title="A practical mix of product, AI, build, and operations."
        />
        <div className="grid gap-4 lg:grid-cols-4">
          {toolGroups.map((group) => (
            <article
              className="rounded-lg border border-line bg-white p-5"
              key={group.name}
            >
              <h3 className="text-base font-semibold text-ink">{group.name}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <span
                    className="rounded-md border border-line bg-paper px-3 py-1.5 text-xs font-semibold text-graphite"
                    key={tool}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-white" id="about">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="About"
                title="AI-native operator and workflow systems builder."
              />
              <p className="max-w-4xl text-lg leading-8 text-graphite">
                I&apos;m a Business Administration and Marketing senior at
                Concordia University Texas, graduating December 2026. My lane is
                the space between users, operations, and technical systems:
                understanding how work actually happens, documenting the
                friction, and building practical AI-assisted tools that make the
                next action clearer.
              </p>
              <p className="mt-5 max-w-4xl text-base leading-7 text-graphite">
                Former NCAA Division III basketball player. Years of competitive
                athletics taught me disciplined preparation, performing under
                pressure, rapid feedback loops, and working inside team systems,
                which is the same mindset I apply to building AI products.
              </p>
            </div>
            <figure className="overflow-hidden rounded-lg border border-line bg-paper shadow-soft">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  alt="Carlos Castro outdoors by a mountain lake"
                  className="object-cover object-[center_45%]"
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

      <section className="bg-ink text-white" id="contact">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-200">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Currently seeking roles where users, operations, and AI meet.
              </h2>
              <div className="mt-6 flex flex-wrap gap-2">
                {targetRoles.map((role) => (
                  <span
                    className="rounded-md border border-white/15 px-3 py-2 text-sm font-semibold text-teal-100"
                    key={role}
                  >
                    {role}
                  </span>
                ))}
              </div>
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
