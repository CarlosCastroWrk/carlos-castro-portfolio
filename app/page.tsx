import Image from "next/image";

const resumeHref = "/Carlos_Castro_Resume_2026.pdf";
const email = "los124506@gmail.com";
const linkedIn = "https://www.linkedin.com/in/carlos-castro-4a79a4323/";
const githubHref = "https://github.com/CarlosCastroWrk";
const turnHref = "https://github.com/CarlosCastroWrk/turn-supervisor-os";
const turnLiveHref = "https://turn-supervisor-os.vercel.app";

function Arrow() {
  return <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 16 16 4M7 4h9v9" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function Home() {
  return <main>
    <header className="site-header"><a className="brand" href="#top">Carlos Castro<span>.</span></a><nav aria-label="Primary navigation"><a href="#story">Story</a><a href="#work">Work</a><a href="#experience">Experience</a><a href="#contact">Contact</a></nav></header>

    <section className="hero" id="top">
      <div className="hero-copy"><p className="kicker">Austin, TX · Open to relocating</p><h1>I’m Carlos. I work in operations and build tools that help me do the job.</h1><p className="hero-lede">My work is hands-on: coordinating people, keeping track of changing details, and building practical systems around the parts that are easy to lose.</p><div className="hero-actions"><a className="button button-dark" href={resumeHref} download>Download résumé <Arrow /></a><a className="text-link" href={githubHref}>GitHub <Arrow /></a><a className="text-link" href={linkedIn}>LinkedIn <Arrow /></a></div></div>
      <div className="hero-aside"><div className="portrait-wrap"><Image alt="Carlos Castro outdoors by a mountain lake" className="portrait" fill priority sizes="(min-width: 900px) 340px, 80vw" src="/carlos-castro-photo.jpg" /></div><p className="portrait-note">Operations · workflow tools · practical AI</p></div>
    </section>

    <section className="story section-rule" id="story"><div className="section-label">01 / The short version</div><div className="story-grid"><h2>I pay attention to the details that keep work moving.</h2><div className="prose"><p>I’m studying Business Administration and Marketing online at Concordia University Texas, expected December 2026. My experience has been hands-on: service businesses, apartment turnovers, live events, and now a location-management internship at Washaroo.</p><p>AI tools help me build faster. I still need to understand the workflow, make a useful first version, and check whether it holds up when people are busy.</p></div></div></section>

    <section className="work section-rule" id="work"><div className="section-label">02 / Work in progress</div><div className="turn-feature"><div><p className="kicker">The project I can talk about from both sides</p><h2>TurnOS</h2><p className="feature-intro">I built TurnOS with Claude and Codex while coordinating a high-volume student-housing turn. It grew from the daily reality of keeping units, crews, inspections, callbacks, and changing priorities moving together.</p><p className="feature-detail">The work covered approximately 567 beds and 166 units. TurnOS became a mobile-first way to track unit and issue status, crew assignments, follow-up, daily logs, reporting, and exports.</p><div className="feature-links"><a className="button button-dark" href={turnLiveHref}>Open TurnOS <Arrow /></a><a className="text-link" href={turnHref}>View source <Arrow /></a></div></div><aside className="field-note"><p className="note-title">From the field</p><p>“What still needs to happen before this unit is ready?”</p><span>That question is where the product starts.</span></aside></div><div className="secondary-work"><article><p className="kicker">Next chapter</p><h3>CleanDay</h3><p>I’m building CleanDay, a residential cleaning business in Austin, and developing the tools for scheduling, crew coordination, and customer follow-up.</p></article><article><p className="kicker">What I’m learning</p><h3>Make the handoff clearer.</h3><p>Good systems don’t need to sound impressive. They need to help the next person know what happened, what changed, and what to do now.</p></article></div></section>

    <section className="experience section-rule" id="experience"><div className="section-label">03 / Experience</div><div className="experience-list"><article><div><h3>Washaroo</h3><p className="role">Location Management &amp; Business Operations Intern · 2026–Present</p></div><p>Supporting day-to-day management of an East Austin service-business location, working alongside ownership on operations and business decisions across employee workflows, service execution, customer experience, inventory, SOPs, cash reconciliation, and reporting.</p></article><article><div><h3>Property Doctor Services</h3><p className="role">Turn Supervisor · Summer 2026</p></div><p>Supervised paint and cleaning operations across approximately 567 beds and 166 units, coordinating crews, inspections, callbacks, and property-management communication under compressed move-in deadlines.</p></article><article><div><h3>BallerTV</h3><p className="role">Site Lead, Live Event Operations · 2024–Present</p></div><p>Lead tournament streaming operations across multiple courts and venues, coordinating equipment readiness, connectivity, scoring workflows, and live technical troubleshooting.</p></article></div></section>

    <section className="contact" id="contact"><div><p className="kicker">04 / Contact</p><h2>Looking for a place where I can contribute and keep learning.</h2></div><div className="contact-links"><a href={`mailto:${email}`}>{email} <Arrow /></a><a href={linkedIn}>LinkedIn <Arrow /></a><a href={githubHref}>GitHub <Arrow /></a></div></section>
    <footer><span>© 2026 Carlos Castro</span><span>Austin, Texas</span></footer>
  </main>;
}
