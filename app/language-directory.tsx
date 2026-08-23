import Link from "next/link";import {Header,Footer,Cta} from "./components";import {languagePages} from "./content";import "./language-directory.css";
const context:Record<string,string>={
 "Spanish":"Interpretation, translation, transcription, and learning support across community and organizational settings.",
 "Portuguese":"Professional language support for Portuguese-speaking individuals, teams, and audiences.",
 "Brazilian Portuguese":"Brazil-focused Portuguese services with audience and regional context considered from the start.",
 "Cape Verdean Creole":"Language access support shaped around Cape Verdean Creole communication needs and service availability.",
 "Haitian Creole":"Interpretation and translated communication for Haitian Creole-speaking communities and organizations.",
 "French":"French language services for documents, conversations, education, business, and international communication.",
 "Arabic":"Arabic language support with regional variety, audience, and subject matter clarified for each request.",
 "Mandarin":"Mandarin interpretation, translation, transcription, and learning paths for individuals and organizations.",
 "Cantonese":"Cantonese language access for suitable healthcare, community, business, and public-service settings.",
 "Vietnamese":"Vietnamese interpretation and translation planned around the audience, setting, and intended use.",
 "Russian":"Russian language services for conversations, documents, recorded content, and learning needs.",
 "Ukrainian":"Ukrainian interpretation and translation support with current availability confirmed per request.",
 "Somali":"Somali language access for community communication, public services, education, and organizational needs.",
 "Hindi":"Hindi language services shaped around format, subject matter, participants, and delivery context.",
 "Urdu":"Urdu interpretation and translation with language preference and regional context confirmed early.",
 "Italian":"Italian language learning, translation, and communication support for personal and professional goals.",
 "German":"German services for technical, business, educational, and individual communication needs.",
 "Japanese":"Japanese language support with attention to audience, formality, terminology, and intended use.",
 "Korean":"Korean interpretation, translation, and learning support planned around the specific communication goal."
};
export function LanguageDirectoryPage(){return <><Header/><main id="main" className="language-directory"><section className="language-hero"><div className="shell"><div><p className="eyebrow">LANGUAGE DIRECTORY</p><h1>Start with the language. Then add the context.</h1><p>Explore language-specific pathways for interpretation, translation, transcription, and education. Coverage and specialist availability are confirmed for every request.</p></div><div className="language-count"><span>{languagePages.length}</span><p>featured language pathways</p></div></div></section><section className="language-filter shell"><p>EXPLORE THE DIRECTORY</p><nav aria-label="Jump to language group"><a href="#a-f">A—F</a><a href="#g-m">G—M</a><a href="#n-z">N—Z</a></nav></section><section className="language-list shell">{[["a-f",languagePages.filter(p=>/^[A-F]/.test(p.title))],["g-m",languagePages.filter(p=>/^[G-M]/.test(p.title))],["n-z",languagePages.filter(p=>/^[N-Z]/.test(p.title))]].map(([group,items])=><div id={group as string} className="language-group" key={group as string}><aside>{(group as string).toUpperCase()}</aside><div>{(items as typeof languagePages).map((p,i)=>{const name=p.title.replace(" language services","");return <Link href={`/${p.slug}`} key={p.slug}><span>{String(i+1).padStart(2,"0")}</span><div><h2>{name}</h2><p>{context[name]}</p><small>Interpretation · Translation · Transcription · Learning</small></div><b>↗</b></Link>})}</div></div>)}</section><section className="language-note"><div className="shell"><p>CAN’T FIND A LANGUAGE?</p><h2>The directory is a starting point, not a promise of current coverage.</h2><Link className="button lime" href="/request-a-quote">Ask about a language <span>→</span></Link></div></section><Cta/></main><Footer/></>}
