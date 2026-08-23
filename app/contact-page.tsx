"use client";

import {FormEvent} from "react";
import {Footer,Header} from "./components";
import {Clock,Mail,MapPin,Phone} from "lucide-react";
import "./contact-page.css";

export function ContactPage(){
  function sendInquiry(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    const form=new FormData(event.currentTarget);
    const subject=`Website inquiry: ${form.get("topic")}`;
    const body=[
      `Name: ${form.get("name")}`,
      `Email: ${form.get("email")}`,
      `Phone: ${form.get("phone")||"Not provided"}`,
      `Organization: ${form.get("organization")||"Not provided"}`,
      `Topic: ${form.get("topic")}`,
      "",
      String(form.get("message")),
    ].join("\n");
    window.location.href=`mailto:Contact@inlinguabostonma.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const schema={"@context":"https://schema.org","@type":"LocalBusiness",name:"inlingua Boston",email:"Contact@inlinguabostonma.com",telephone:"+1-617-546-5590",address:{"@type":"PostalAddress",streetAddress:"36 Baker Road",addressLocality:"Everett",addressRegion:"MA",postalCode:"02149",addressCountry:"US"},openingHours:"Mo-Fr 08:00-17:00"};

  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><Header/><main id="main"><section className="contact-hero"><div className="shell"><p className="eyebrow">CONTACT INLINGUA BOSTON</p><h1>Let’s make your next conversation clearer.</h1><p>Ask about language services, education, interpreter training, organizational programs, or government procurement.</p></div></section><section className="contact-layout shell"><aside className="contact-details" aria-labelledby="contact-details-title"><p className="eyebrow">CONTACT DETAILS</p><h2 id="contact-details-title">Reach the right team.</h2><div className="contact-methods"><a href="mailto:Contact@inlinguabostonma.com"><Mail aria-hidden="true"/><span><b>Email</b>Contact@inlinguabostonma.com</span></a><a href="tel:+16175465590"><Phone aria-hidden="true"/><span><b>Phone</b>617-546-5590</span></a><a href="https://www.google.com/maps/search/?api=1&query=36+Baker+Road+Everett+MA+02149" target="_blank" rel="noopener noreferrer"><MapPin aria-hidden="true"/><span><b>Address</b>36 Baker Road<br/>Everett, MA 02149</span></a><div><Clock aria-hidden="true"/><span><b>Working hours</b>Monday–Friday<br/>8:00 AM–5:00 PM</span></div></div></aside><div className="contact-form-panel"><p className="eyebrow">SEND AN INQUIRY</p><h2>How can we help?</h2><p>Complete the form and your email application will open with the inquiry prepared for the inlingua Boston team.</p><form onSubmit={sendInquiry}><div className="field-grid"><label>Name<input name="name" autoComplete="name" required/></label><label>Email<input type="email" name="email" autoComplete="email" required/></label><label>Phone<input type="tel" name="phone" autoComplete="tel"/></label><label>Organization<input name="organization" autoComplete="organization"/></label></div><label>What can we help with?<select name="topic" required defaultValue=""><option value="" disabled>Select a topic</option><option>Interpretation</option><option>Translation</option><option>Transcription and captions</option><option>Language education</option><option>Interpreter training</option><option>Corporate language solutions</option><option>Government procurement</option><option>General question</option></select></label><label>Message<textarea name="message" rows={6} placeholder="Tell us about the language, service, setting, and timeline." required/></label><p className="contact-privacy">Please do not include confidential, medical, or legally sensitive information.</p><button className="button lime submit" type="submit">Prepare email <span aria-hidden="true">→</span></button></form></div></section></main><Footer/></>;
}
