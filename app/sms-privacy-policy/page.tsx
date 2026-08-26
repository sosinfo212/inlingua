import type {Metadata} from "next";
import {Header,Footer} from "../components";

export const metadata:Metadata={title:"SMS Privacy Policy",description:"SMS messaging privacy, consent, opt-out, data use, and phone-number terms for inlingua Language School of Boston.",alternates:{canonical:"/sms-privacy-policy"}};

export default function SmsPrivacyPolicyPage(){return <><Header/><main id="main" className="policy-page sms-policy-page">
  <header className="policy-hero"><div className="shell"><p className="eyebrow">SMS COMMUNICATIONS</p><h1>SMS Privacy Policy</h1><p>Effective February 4, 2025</p></div></header>
  <article className="policy-content shell">
    <section><h2>Information We Collect</h2><p>When You opt in to receive SMS messages from inlingua Language School of Boston, we may collect Your mobile telephone number, name, and service preferences. Service preferences may include the language services, educational programs, schedules, events, or other communications in which You have expressed interest.</p></section>

    <section><h2>How We Use Your Information</h2><p>We may use the information collected through our SMS program to:</p><ul><li>Send updates about interpretation, translation, transcription, language classes, schedules, and school events; and</li><li>Provide important notifications, including cancellations, schedule or service changes, delivery updates, and delays.</li></ul></section>

    <section><h2>Opting In &amp; Out</h2><p>By texting <a href="sms:+16175465590">(617) 546-5590</a>, You agree to receive SMS messages from inlingua Language School of Boston relating to the services and communications described in this policy.</p><p>You may opt out at any time by replying <strong>STOP</strong>. For assistance, reply <strong>HELP</strong>, email <a href="mailto:inlingua.boston@inlingua.com">inlingua.boston@inlingua.com</a>, or call <a href="tel:+16175465590">(617) 546-5590</a>.</p></section>

    <section><h2>Data Protection &amp; Privacy</h2><p>We do not share, sell, or rent mobile telephone numbers to third parties for their marketing purposes. SMS-related personal information is stored using reasonable safeguards and is used only for the purposes stated in this policy, for purposes disclosed when information is collected, or as otherwise required or permitted by law.</p></section>

    <section><h2>Message Frequency &amp; Costs</h2><p>Message frequency may vary based on Your relationship with the school, requested services, class schedule, and communication preferences. Standard message and data rates may apply according to Your wireless carrier and service plan.</p></section>

    <section><h2>Changes to This Policy</h2><p>We may update this SMS Privacy Policy periodically to reflect changes in our practices, services, or legal obligations. Material changes may be communicated by SMS or by posting an updated policy on the Website with a revised effective date.</p></section>

    <section><h2>Contact Us</h2><p>For questions about this SMS Privacy Policy or Your messaging preferences, contact <a href="mailto:inlingua.boston@inlingua.com">inlingua.boston@inlingua.com</a> or <a href="tel:+16175465590">(617) 546-5590</a>.</p></section>

    <section className="sms-disclaimer"><h2>Phone Number Disclaimer</h2><p>By providing Your phone number to inlingua Language School of Boston, You agree to receive SMS messages, telephone calls, and automated messages concerning interpretation, translation, transcription, class updates, scheduling, promotions, and other school-related communications.</p><ul><li>Consent is not a condition of enrollment or purchase.</li><li>Standard message and data rates may apply.</li><li>inlingua Language School of Boston is not responsible for carrier-related charges, delays, or message-delivery failures.</li><li>You may opt out at any time by replying <strong>STOP</strong>.</li><li>For support, contact <a href="tel:+16175465590">(617) 546-5590</a>.</li></ul></section>
  </article>
</main><Footer/></>}
