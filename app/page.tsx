import Link from "next/link";
import { Header, Footer, Cta } from "./components";

export const metadata = {
  title: "Language School of Boston & Language Services | inlingua",
  description: "The inlingua Language School of Boston provides language education, interpretation, translation, and corporate language solutions.",
  alternates: {canonical: "/"},
};

const industries = [["Healthcare","Care settings and patient communication"],["Government","Public meetings and resident access"],["Legal","Proceedings, meetings, and documents"],["Education","Students, families, and campuses"],["Utilities","Customers, field teams, and safety"],["Manufacturing","Workforce communication and training"]];
const steps = ["Tell us the setting, languages, and timing","We clarify scope and recommend an approach","You review the plan and confirm","The team coordinates delivery and follow-through"];
const solutions = [
  ["Interpretation","On-site, video remote, telephone, consecutive, simultaneous, and ASL coordination.","/services/interpretation","Schedule an interpreter"],
  ["Translation","Documents and digital content translated around purpose, audience, and destination.","/services/translation","Request translation pricing"],
  ["Language education","English and foreign-language programs for individuals and organizations.","/language-education","Find your program"],
  ["Language assessments","Placement and workforce assessments shaped around a defined decision.","/services/language-assessments","Explore assessments"],
  ["Corporate language training","Role-based language development for teams, leaders, and customer-facing staff.","/language-education/corporate","Discuss a corporate program"],
];
const reasons = [
  ["Language-specific matching","Requests are reviewed by language, setting, subject matter, timing, and delivery needs."],
  ["Professional coordination","One team coordinates scope, scheduling, preparation, delivery, and follow-through."],
  ["On-site and remote options","Choose an appropriate delivery format based on participants, access, and location."],
  ["Context-aware planning","Healthcare, legal, government, education, and business settings require different approaches."],
  ["Education and services together","Coordinate language learning, assessments, interpretation, and translation through one organization."],
];

export default function Home() {
  return <><Header/><main id="main">
    <section className="hero"><div className="shell hero-grid"><div>
      <p className="eyebrow">inlingua · Language School of Boston</p>
      <h1>Every language.<br/><em>Every connection.</em></h1>
      <p className="lede">The Language School of Boston and one trusted partner for professional interpretation, translation, language education, and workforce language training.</p>
      <div className="actions"><Link className="button" href="/request-a-quote">Request a quote <span>→</span></Link><Link className="text-link" href="/services">Explore solutions <span>↗</span></Link></div>
      <aside className="service-card hero-service-card" aria-label="Core solutions">
        <p>LANGUAGE SOLUTIONS</p>
        <Link href="/services/interpretation"><strong>01</strong><span>Interpretation<small>On-site · Remote · Specialized</small></span><b>↗</b></Link>
        <Link href="/services/translation"><strong>02</strong><span>Translation<small>Documents · Digital · Technical</small></span><b>↗</b></Link>
        <Link href="/language-education"><strong>03</strong><span>Language Education<small>Individuals · Teams · Organizations</small></span><b>↗</b></Link>
      </aside>
    </div></div></section>
    <section className="proof shell"><p>Built for the moments where clarity matters most.</p><div><span>Healthcare</span><span>Government</span><span>Legal</span><span>Education</span><span>Enterprise</span></div></section>
    <section className="section shell"><div className="section-head"><p>TWO PATHS. ONE PARTNER.</p><h2>Choose the outcome you’re working toward.</h2></div><div className="path-grid two-paths">
      <Link href="/language-education"><span>01 · FOR LEARNERS</span><h3>Learn a language</h3><p>English and foreign-language programs for life, study, and work.</p><b>Find your program →</b></Link>
      <Link href="/corporate-language-solutions"><span>02 · FOR ORGANIZATIONS</span><h3>Build language access</h3><p>Interpretation, translation, assessments, and workforce training.</p><b>Explore solutions →</b></Link>
    </div></section>
    <section className="report-solutions"><div className="shell"><div className="section-head"><p>LANGUAGE SOLUTIONS</p><h2>One partner for your language needs.</h2></div><div className="report-solution-grid">{solutions.map(([title,text,href,cta],index)=><article key={title}><span>0{index+1}</span><h3>{title}</h3><p>{text}</p><Link href={href}>{cta} →</Link></article>)}</div></div></section>
    <section className="dark-section"><div className="shell"><div className="section-head inverse"><p>INDUSTRY CONTEXT MATTERS</p><h2>Language solutions designed around where communication happens.</h2></div><div className="industry-links">{industries.map(([name,description])=><Link href={`/industries/${name.toLowerCase()}`} key={name}><span>{name}<small>{description}</small></span><b>↗</b></Link>)}</div></div></section>
    <section className="section shell report-why"><div className="section-head"><p>WHY INLINGUA BOSTON</p><h2>Language expertise with local accountability.</h2></div><div>{reasons.map(([title,text],index)=><article key={title}><span>0{index+1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>
    <section className="report-languages"><div className="shell"><div><p className="eyebrow">LANGUAGES</p><h2>Start with the language. We’ll confirm the right support.</h2><p>Frequently requested languages include Spanish, Brazilian Portuguese, Cape Verdean Creole, Haitian Creole, French, Arabic, Mandarin, Cantonese, Vietnamese, Somali, Amharic, Russian, Albanian, Italian, Korean, and Hindi.</p></div><Link className="button" href="/languages">Check language availability <span>→</span></Link></div></section>
    <section className="report-government"><div className="shell"><p className="eyebrow">GOVERNMENT & PROCUREMENT</p><h2>A clear path for public-sector language requirements.</h2><p>Review interpretation, translation, assessments, workforce training, multilingual meetings, and the information needed to begin a procurement conversation.</p><div className="actions"><Link className="button" href="/government-contracting">Government contracting <span>→</span></Link><Link href="/contact">Contact procurement ↗</Link></div></div></section>
    <section className="section shell process"><div className="section-head"><p>A SIMPLE START</p><h2>From need to next step.</h2></div><ol>{steps.map((step,index)=><li key={step}><span>0{index+1}</span><p>{step}</p></li>)}</ol></section><Cta/>
  </main><Footer/></>;
}
