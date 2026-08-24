import Link from "next/link";
import { Header, Footer, Cta } from "./components";

export const metadata = {
  title: "Language School of Boston & Language Services | inlingua",
  description: "The inlingua Language School of Boston provides language education, interpretation, translation, and corporate language solutions.",
};

const industries = [["Healthcare","Care settings and patient communication"],["Government","Public meetings and resident access"],["Legal","Proceedings, meetings, and documents"],["Education","Students, families, and campuses"],["Utilities","Customers, field teams, and safety"],["Manufacturing","Workforce communication and training"]];
const steps = ["Tell us the setting, languages, and timing","We clarify scope and recommend an approach","You review the plan and confirm","The team coordinates delivery and follow-through"];

export default function Home() {
  return <><Header/><main id="main">
    <section className="hero"><div className="shell hero-grid"><div>
      <p className="eyebrow">inlingua · Language School of Boston</p>
      <h1>Every language.<br/><em>Every connection.</em></h1>
      <p className="lede">The Language School of Boston and one trusted partner for professional interpretation, translation, language education, and workforce language training.</p>
      <div className="actions"><Link className="button" href="/request-a-quote">Request a quote <span>→</span></Link><Link className="text-link" href="/services">Explore solutions <span>↗</span></Link></div>
    </div><aside className="service-card" aria-label="Core solutions">
      <p>LANGUAGE SOLUTIONS</p>
      <Link href="/services/interpretation"><strong>01</strong><span>Interpretation<small>On-site · Remote · Specialized</small></span><b>↗</b></Link>
      <Link href="/services/translation"><strong>02</strong><span>Translation<small>Documents · Digital · Technical</small></span><b>↗</b></Link>
      <Link href="/language-education"><strong>03</strong><span>Language Education<small>Individuals · Teams · Organizations</small></span><b>↗</b></Link>
    </aside></div></section>
    <section className="proof shell"><p>Built for the moments where clarity matters most.</p><div><span>Healthcare</span><span>Government</span><span>Legal</span><span>Education</span><span>Enterprise</span></div></section>
    <section className="section shell"><div className="section-head"><p>TWO PATHS. ONE PARTNER.</p><h2>Choose the outcome you’re working toward.</h2></div><div className="path-grid two-paths">
      <Link href="/language-education"><span>01 · FOR LEARNERS</span><h3>Learn a language</h3><p>English and foreign-language programs for life, study, and work.</p><b>Find your program →</b></Link>
      <Link href="/corporate-language-solutions"><span>02 · FOR ORGANIZATIONS</span><h3>Build language access</h3><p>Interpretation, translation, assessments, and workforce training.</p><b>Explore solutions →</b></Link>
    </div></section>
    <section className="dark-section"><div className="shell"><div className="section-head inverse"><p>INDUSTRY CONTEXT MATTERS</p><h2>Language solutions designed around where communication happens.</h2></div><div className="industry-links">{industries.map(([name,description])=><Link href={`/industries/${name.toLowerCase()}`} key={name}><span>{name}<small>{description}</small></span><b>↗</b></Link>)}</div></div></section>
    <section className="section shell process"><div className="section-head"><p>A SIMPLE START</p><h2>From need to next step.</h2></div><ol>{steps.map((step,index)=><li key={step}><span>0{index+1}</span><p>{step}</p></li>)}</ol></section><Cta/>
  </main><Footer/></>;
}
