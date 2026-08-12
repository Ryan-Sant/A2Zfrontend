/**
 * Contact.jsx — A to Z Landscaping & More
 *
 * Mail service: Formsubmit.co (no account needed)
 *
 * SETUP CHECKLIST:
 *  1. TODO_EMAIL   — replace CONTACT_EMAIL with the real email address that should
 *                    receive submissions. After your FIRST live form submission,
 *                    Formsubmit will send a one-time verification email to that
 *                    address — click the link and you're done. All future
 *                    submissions land in your inbox automatically.
 *  2. TODO_HOURS   — adjust business hours if needed
 *  3. TODO_CITIES  — adjust the service-area city list if needed
 */

import { useState } from "react";
import { Helmet } from "react-helmet";
import aboutImage from "../media/AtoZ_logo.png";

/* ─── ICONS ───────────────────────────────────────────────────────────────── */
const PhoneIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.5 12c-.86-2.65-1.68-5.82-3.07-8.63A2 2 0 013.44 1.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.91a16 16 0 006.06 6.06l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
);

const MailIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const MapPinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const ClockIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const ArrowRight = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const SuccessIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);

/* ─── CONFIG ──────────────────────────────────────────────────────────────── */

// TODO_EMAIL: replace this with the real email address that should receive form submissions.
// No signup required — Formsubmit.co sends a one-time verification email after your
// first live submission. Click the link once and every future submission goes to your inbox.
const CONTACT_EMAIL = "ryan@atozlandscapingandmore.com";

// Built automatically from CONTACT_EMAIL — do not edit this line.
const MAIL_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

/* ─── STATIC DATA ──────────────────────────────────────────────────────────── */
const SERVICES = [
  "Lawn Care & Maintenance",
  "Landscaping & Design",
  "Hardscaping & Outdoor Construction",
  "Property Cleanup Services",
  "Pressure Washing",
  "Not sure — I need an assessment",
];

const HOW_HEARD = [
  "Google Search",
  "Referral from Neighbor",
  "Referral from Friend or Family",
  "Drove by a Job Site",
  "Facebook / Social Media",
  "Returning Customer",
  "Other",
];

// TODO_HOURS: adjust if needed
const HOURS = [
  { day: "Monday – Friday", time: "7:00 am – 6:00 pm" },
  { day: "Saturday",        time: "7:00 am – 4:00 pm" },
  { day: "Sunday",          time: "Closed"             },
];

// TODO_CITIES: add or remove cities to match actual service coverage
const SERVICE_CITIES = [
  "Bremerton",
  "Silverdale",
  "Port Orchard",
  "Poulsbo",
  "Bainbridge Island",
  "Kingston",
  "Gig Harbor Area",
  "Greater Kitsap County",
];

const INFO_CARDS = [
  {
    Icon: PhoneIcon,
    label: "Call or Text",
    main: "(360) 953-3878",
    sub: "Ryan answers directly — no dispatch",
    href: "tel:+13609533878",
    cta: "Call Now",
  },
  {
    Icon: MailIcon,
    label: "Email",
    main: CONTACT_EMAIL,
    sub: "Usually responds the same day",
    href: `mailto:${CONTACT_EMAIL}`,
    cta: "Send Email",
  },
  {
    Icon: MapPinIcon,
    label: "Service Area",
    main: "Kitsap County, WA",
    sub: "Bremerton · Silverdale · Port Orchard · Poulsbo",
    href: null,
    cta: null,
  },
  {
    Icon: ClockIcon,
    label: "Business Hours",
    main: "Mon–Sat, 7 am – 6 pm",
    sub: "Free estimates available by appointment",
    href: null,
    cta: null,
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Ryan Picks Up",
    body: "No call centers, no dispatch queues. You're talking to the person who gives the quote and oversees the work — every time.",
  },
  {
    num: "02",
    title: "We Talk Through the Property",
    body: "Not a hard sell. A real conversation about what's going on, what needs attention first, and what can wait.",
  },
  {
    num: "03",
    title: "You Get an Honest Quote",
    body: "Upfront. No moving parts after the fact. If something changes mid-job, you hear about it before the cost changes — not after.",
  },
  {
    num: "04",
    title: "We Show Up When We Said",
    body: "If it's Tuesday, it's Tuesday. Clean site at the end of every job. No debris left behind. That's the standard.",
  },
];

const INITIAL_FORM = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
  source: "",
};

/* ─── COMPONENT ────────────────────────────────────────────────────────────── */
export default function Contact() {
  const [form, setForm]     = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch(MAIL_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name:    form.name,
          phone:   form.phone,
          email:   form.email,
          service: form.service,
          message: form.message,
          source:  form.source,
          // Formsubmit extras — customise the email subject line
          _subject: `New Estimate Request from ${form.name} — A to Z Landscaping`,
          // Disable the default Formsubmit "thank you" redirect page
          _captcha: "false",
        }),
      });
      const data = await res.json();
      // Formsubmit returns { success: "true" } on success
      if (data.success === "true" || data.success === true) {
        setStatus("success");
        setForm(INITIAL_FORM);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact A to Z Landscaping & More | Ryan Scott Sant | Kitsap County WA</title>
        <meta name="description" content="Call or text Ryan Scott Sant at (360) 953-3878 for a free estimate. A to Z Landscaping & More serves all of Kitsap County — honest quotes, no subcontracting, no surprises." />
        <link rel="canonical" href="https://atozlandscapingandmore.com/contact/" />
        <meta property="og:title"       content="Contact A to Z Landscaping & More | Kitsap County WA" />
        <meta property="og:description" content="Call or text Ryan directly at (360) 953-3878. Free estimates, upfront pricing, no subcontracting. Serving Kitsap County, WA since 2016." />
        <meta property="og:url"         content="https://atozlandscapingandmore.com/contact/" />
        <meta name="geo.region"         content="US-WA" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LandscapingBusiness",
          "name": "A to Z Landscaping & More",
          "url": "https://atozlandscapingandmore.com/",
          "telephone": "+13609533878",
          "email": CONTACT_EMAIL,
          "foundingDate": "2016",
          "founder": { "@type": "Person", "name": "Ryan Scott Sant" },
          "areaServed": "Kitsap County, WA",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+13609533878",
            "contactType": "customer service",
            "availableLanguage": "English",
          },
        })}</script>
      </Helmet>

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --forest:    #0E1F11;
          --green:     #1B3D22;
          --mid:       #2D6040;
          --amber:     #C4883A;
          --amberdk:   #A36D20;
          --amberlite: rgba(196,136,58,.12);
          --stone:     #F5F0E8;
          --stonemd:   #EAE3D6;
          --white:     #ffffff;
          --ink:       #1A1A18;
          --body:      #45604A;
          --muted:     #6B7F6D;
          --border:    #D6E3D8;
        }
        .ct {
          color: var(--ink);
          background: var(--white);
          font-family: 'Spartan', sans-serif;
          line-height: 1.6;
          overflow-x: hidden;
        }

        /* ── HERO ─────────────────────────────────────────────────────────── */
        .ct-hero {
          width: 100%;
          background: var(--forest);
          position: relative;
          overflow: hidden;
        }
        .ct-hero-topbar {
          position: absolute; top: 0; left: 0; right: 0;
          height: 4px; background: var(--amber); z-index: 4;
        }

        /* CSS decorative shapes */
        .ct-shapes { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
        .ct-shape-circle  { position: absolute; top: -140px; right: -140px; width: 520px; height: 520px; border-radius: 50%; background: radial-gradient(circle, rgba(196,136,58,.18) 0%, rgba(196,136,58,0) 70%); }
        .ct-shape-circle2 { position: absolute; bottom: -100px; left: -60px; width: 380px; height: 380px; border-radius: 50%; background: radial-gradient(circle, rgba(45,96,64,.6) 0%, rgba(45,96,64,0) 70%); }
        .ct-shape-ring    { position: absolute; top: 60px; right: 80px; width: 200px; height: 200px; border-radius: 50%; border: 1px solid rgba(196,136,58,.2); }
        .ct-shape-ring2   { position: absolute; top: 80px; right: 100px; width: 160px; height: 160px; border-radius: 50%; border: 1px solid rgba(196,136,58,.12); }
        .ct-shape-line    { position: absolute; left: 0; right: 0; height: 1px; background: rgba(255,255,255,.04); }
        .ct-shape-line.l1 { top: 30%; }
        .ct-shape-line.l2 { top: 65%; }
        .ct-shape-vert    { position: absolute; top: 0; bottom: 0; width: 1px; right: 38%; background: linear-gradient(180deg, transparent, rgba(196,136,58,.25) 40%, rgba(196,136,58,.25) 60%, transparent); }
        .ct-shape-dots    { position: absolute; top: 30px; right: 30px; width: 180px; height: 180px; background-image: radial-gradient(circle, rgba(196,136,58,.22) 1px, transparent 1px); background-size: 18px 18px; opacity: .6; }

        .ct-hero-inner {
          position: relative; z-index: 2;
          max-width: 1100px; margin: 0 auto;
          padding: 7rem 2rem 6rem;
          display: grid; grid-template-columns: 1fr 370px;
          gap: 4rem; align-items: center;
        }

        /* kicker badge */
        .ct-kicker {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(196,136,58,.14); border: 1px solid rgba(196,136,58,.38);
          color: var(--amber); padding: 5px 14px; border-radius: 2px;
          font-size: .67rem; font-weight: 700; letter-spacing: .18em;
          text-transform: uppercase; margin-bottom: 1.7rem;
        }
        .ct-kicker-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: var(--amber);
          animation: blink 2.4s ease-in-out infinite;
        }
        @keyframes blink { 0%,100%{opacity:1;} 50%{opacity:.35;} }

        .ct-h1 {
          font-family: 'Gothic', sans-serif;
          font-size: clamp(2.2rem, 4vw, 3.6rem);
          font-weight: 800; color: var(--white);
          line-height: 1.1; margin-bottom: .8rem;
        }
        .ct-h1 em { color: var(--amber); font-style: italic; }
        .ct-byline {
          font-size: .7rem; font-weight: 700;
          letter-spacing: .16em; text-transform: uppercase;
          color: rgba(255,255,255,.38); margin-bottom: 1.6rem;
        }
        .ct-hero-p {
          font-size: .97rem; color: rgba(255,255,255,.65);
          line-height: 1.85; max-width: 540px; margin-bottom: 2.2rem;
        }
        .ct-hero-btns { display: flex; gap: 12px; flex-wrap: wrap; }

        /* identity card (right column) */
        .ct-id-card {
          background: rgba(255,255,255,.06);
          border: 1px solid rgba(255,255,255,.13);
          border-radius: 12px; overflow: hidden;
        }
        .ct-id-top {
          padding: 2rem;
          display: flex; flex-direction: column; align-items: center; text-align: center;
          border-bottom: 1px solid rgba(255,255,255,.1);
          background: rgba(255,255,255,.03);
        }
        .ct-id-logo-wrap {
          width: 88px; height: 88px; border-radius: 50%;
          background: rgba(255,255,255,.08);
          border: 2px solid rgba(196,136,58,.4);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 1rem;
          box-shadow: 0 0 0 8px rgba(196,136,58,.06);
          overflow: hidden;
        }
        .ct-id-logo { width: 68px; height: 68px; object-fit: contain; padding: 4px; }
        .ct-id-name {
          font-family: 'Gothic', sans-serif;
          font-size: 1.05rem; font-weight: 700; color: var(--white); line-height: 1.25;
        }
        .ct-id-role {
          font-size: .67rem; font-weight: 700;
          letter-spacing: .13em; text-transform: uppercase;
          color: var(--amber); margin-top: 4px;
        }

        /* quick-contact rows inside card */
        .ct-quick { padding: 1.4rem 1.6rem; display: flex; flex-direction: column; gap: .85rem; }
        .ct-quick-row { display: flex; align-items: center; gap: .85rem; text-decoration: none; }
        .ct-quick-icon {
          width: 36px; height: 36px; border-radius: 50%;
          background: rgba(196,136,58,.12); border: 1px solid rgba(196,136,58,.25);
          display: flex; align-items: center; justify-content: center;
          color: var(--amber); flex-shrink: 0;
        }
        .ct-quick-label {
          font-size: .62rem; font-weight: 700;
          letter-spacing: .1em; text-transform: uppercase;
          color: rgba(255,255,255,.35);
        }
        .ct-quick-val { font-size: .88rem; font-weight: 600; color: var(--white); }
        .ct-quick-link .ct-quick-val { color: var(--amber); }
        .ct-quick-link:hover .ct-quick-val { color: var(--amberdk); }

        .ct-id-badge {
          padding: .85rem 1.2rem; background: var(--amber);
          display: flex; align-items: center; justify-content: center; gap: 8px;
        }
        .ct-id-badge-dot { width: 6px; height: 6px; border-radius: 50%; background: rgba(255,255,255,.6); }
        .ct-id-badge-txt {
          font-size: .68rem; font-weight: 700;
          letter-spacing: .14em; text-transform: uppercase;
          color: rgba(255,255,255,.9);
        }

        /* ── INFO CARDS BAR ───────────────────────────────────────────────── */
        .ct-bar {
          width: 100%;
          background: var(--forest);
          border-top: 3px solid var(--amber);
          border-bottom: 1px solid rgba(255,255,255,.07);
          display: grid; grid-template-columns: repeat(4, 1fr);
        }
        .ct-bar-card {
          padding: 1.8rem 1.6rem;
          display: flex; align-items: flex-start; gap: .95rem;
          border-right: 1px solid rgba(255,255,255,.08);
          text-decoration: none;
          transition: background .2s;
        }
        .ct-bar-card:last-child { border-right: none; }
        .ct-bar-card.is-link:hover { background: rgba(255,255,255,.04); }

        /* Square amber icon — not a circle, cleaner at this size */
        .ct-bar-icon {
          width: 40px; height: 40px;
          border-radius: 7px;
          background: rgba(196,136,58,.13);
          border: 1px solid rgba(196,136,58,.28);
          display: flex; align-items: center; justify-content: center;
          color: var(--amber);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .ct-bar-content { flex: 1; min-width: 0; }

        /* Label — amber, small caps — easy to read at a glance */
        .ct-bar-label {
          font-size: .6rem; font-weight: 700;
          letter-spacing: .15em; text-transform: uppercase;
          color: var(--amber); opacity: .85;
          margin-bottom: .35rem;
        }

        /* Main value — Spartan (not Gothic), no extra letter-spacing */
        .ct-bar-main {
          font-family: 'Spartan', sans-serif;
          font-size: .93rem; font-weight: 700;
          color: #ffffff;
          line-height: 1.35; margin-bottom: .3rem;
          word-break: break-word;
          letter-spacing: -.01em;
        }

        /* Sub text — clearly legible */
        .ct-bar-sub {
          font-size: .76rem;
          color: rgba(255,255,255,.62);
          line-height: 1.55;
        }

        /* CTA link */
        .ct-bar-cta {
          display: inline-flex; align-items: center; gap: 3px;
          margin-top: .55rem;
          font-size: .67rem; font-weight: 700;
          letter-spacing: .08em; text-transform: uppercase;
          color: var(--amber); text-decoration: none;
          transition: color .18s, opacity .18s;
        }
        .ct-bar-cta:hover { color: #e8a84e; opacity: 1; }

        /* ── MAIN FORM + SIDEBAR SECTION ──────────────────────────────────── */
        .ct-main-section { background: var(--stone); padding: 6rem 2rem; }
        .ct-main-inner {
          max-width: 1100px; margin: 0 auto;
          display: grid; grid-template-columns: 1.15fr .85fr;
          gap: 4.5rem; align-items: start;
        }

        /* shared headings */
        .ct-tag {
          display: block; font-size: .67rem; font-weight: 700;
          letter-spacing: .22em; text-transform: uppercase;
          color: var(--amber); margin-bottom: .7rem;
        }
        .ct-h2 {
          font-family: 'Gothic', sans-serif;
          font-size: clamp(1.75rem, 3vw, 2.45rem);
          font-weight: 700; color: var(--forest);
          line-height: 1.1; margin-bottom: 1rem;
        }
        .ct-lead {
          font-size: .97rem; color: var(--muted);
          line-height: 1.82; margin-bottom: 2rem;
        }

        /* ─── FORM CARD ─── */
        .ct-form-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 10px; padding: 2.5rem;
          box-shadow: 0 8px 40px rgba(0,0,0,.07);
        }
        .ct-form-group  { margin-bottom: 1.35rem; }
        .ct-form-row    { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }

        .ct-label {
          display: block; font-size: .7rem; font-weight: 700;
          letter-spacing: .1em; text-transform: uppercase;
          color: var(--forest); margin-bottom: .45rem;
        }
        .ct-req { color: var(--amber); margin-left: 2px; }
        .ct-optional {
          font-size: .65rem; font-weight: 400;
          text-transform: none; letter-spacing: 0;
          color: var(--muted); margin-left: 4px;
        }

        .ct-input,
        .ct-select,
        .ct-textarea {
          width: 100%; padding: .88rem 1rem;
          border: 1.5px solid var(--border); border-radius: 4px;
          font-family: 'Spartan', sans-serif; font-size: .9rem;
          color: var(--ink); background: var(--white);
          transition: border-color .2s, box-shadow .2s;
          -webkit-appearance: none; appearance: none;
        }
        .ct-input::placeholder,
        .ct-textarea::placeholder { color: var(--muted); }
        .ct-input:focus,
        .ct-select:focus,
        .ct-textarea:focus {
          outline: none;
          border-color: var(--amber);
          box-shadow: 0 0 0 3px rgba(196,136,58,.12);
        }
        .ct-textarea { resize: vertical; min-height: 135px; line-height: 1.6; }

        /* custom select arrow */
        .ct-select-wrap { position: relative; }
        .ct-select-wrap::after {
          content: ''; position: absolute;
          right: 14px; top: 50%; transform: translateY(-50%);
          width: 0; height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 6px solid var(--muted);
          pointer-events: none;
        }
        .ct-select { padding-right: 2.5rem; cursor: pointer; }

        /* success state */
        .ct-success-wrap { text-align: center; padding: 3rem 1.5rem; }
        .ct-success-icon {
          width: 64px; height: 64px; border-radius: 50%;
          background: rgba(45,96,64,.12);
          display: flex; align-items: center; justify-content: center;
          color: var(--mid); margin: 0 auto 1.25rem;
        }
        .ct-success-h {
          font-family: 'Gothic', sans-serif;
          font-size: 1.5rem; font-weight: 700;
          color: var(--forest); margin-bottom: .6rem;
        }
        .ct-success-p { font-size: .9rem; color: var(--muted); line-height: 1.7; }
        .ct-success-link { color: var(--amber); text-decoration: none; font-weight: 600; }

        /* error banner */
        .ct-error-msg {
          background: rgba(180,50,50,.07);
          border: 1px solid rgba(180,50,50,.22);
          border-radius: 4px; padding: .85rem 1rem;
          font-size: .87rem; color: #7B2020;
          margin-bottom: 1.2rem; line-height: 1.55;
        }

        /* spinner on submit button */
        @keyframes spin { to { transform: rotate(360deg); } }
        .ct-spin { display: inline-block; animation: spin .9s linear infinite; }

        /* ─── SIDEBAR ─── */
        .ct-sidebar { display: flex; flex-direction: column; gap: 1.4rem; }
        .ct-sidebar-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 9px; overflow: hidden;
        }
        .ct-sidebar-head {
          padding: .9rem 1.4rem; background: var(--forest);
          display: flex; align-items: center; gap: .7rem;
        }
        .ct-sidebar-head-icon { color: var(--amber); display: flex; }
        .ct-sidebar-head-txt {
          font-size: .72rem; font-weight: 700;
          letter-spacing: .12em; text-transform: uppercase;
          color: rgba(255,255,255,.7);
        }
        .ct-sidebar-body { padding: 1.35rem 1.4rem; }
        .ct-sidebar-p { font-size: .87rem; color: var(--body); line-height: 1.75; }
        .ct-sidebar-p + .ct-sidebar-p { margin-top: .75rem; }

        /* hours table */
        .ct-hours { width: 100%; border-collapse: collapse; }
        .ct-hours tr { border-bottom: 1px solid var(--border); }
        .ct-hours tr:last-child { border-bottom: none; }
        .ct-hours td { padding: .6rem 0; font-size: .87rem; color: var(--body); }
        .ct-hours td:first-child { font-weight: 600; color: var(--forest); }
        .ct-hours td:last-child  { text-align: right; color: var(--mid); font-weight: 600; }
        .ct-hours-note { font-size: .78rem; color: var(--muted); margin-top: .9rem; line-height: 1.5; }

        /* city checklist */
        .ct-city-list { list-style: none; padding: 0; display: flex; flex-direction: column; gap: .7rem; }
        .ct-city-row  { display: flex; align-items: flex-start; gap: .75rem; font-size: .87rem; color: var(--body); }
        .ct-chk {
          width: 1.3rem; height: 1.3rem; border-radius: 50%;
          background: var(--mid);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; margin-top: 1px;
        }

        /* ── PROCESS STEPS (dark) ─────────────────────────────────────────── */
        .ct-process { background: var(--forest); padding: 6rem 2rem; }
        .ct-process-inner { max-width: 1100px; margin: 0 auto; }
        .ct-process .ct-h2  { color: var(--white); }
        .ct-process .ct-tag { color: rgba(196,136,58,.8); }
        .ct-process-sub {
          font-size: .97rem; color: rgba(255,255,255,.5);
          line-height: 1.8; max-width: 540px; margin-bottom: 3rem;
        }
        .ct-process-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.2rem; }
        .ct-process-card {
          position: relative; overflow: hidden;
          background: rgba(255,255,255,.05);
          border: 1px solid rgba(255,255,255,.09);
          border-radius: 7px; padding: 2rem 1.6rem;
          transition: background .22s;
        }
        .ct-process-card::before {
          content: ''; position: absolute;
          top: 0; left: 0; width: 100%; height: 3px;
          background: linear-gradient(90deg, var(--amber), transparent);
        }
        .ct-process-card:hover { background: rgba(255,255,255,.09); }
        .ct-process-ghost {
          position: absolute; top: -10px; right: 10px;
          font-family: 'Gothic', sans-serif;
          font-size: 5.5rem; font-weight: 800;
          color: rgba(196,136,58,.07); line-height: 1;
          pointer-events: none; user-select: none;
        }
        .ct-process-title {
          font-family: 'Gothic', sans-serif;
          font-size: 1.1rem; font-weight: 700;
          color: var(--white); margin-bottom: .75rem; padding-right: 1.5rem;
        }
        .ct-process-body { font-size: .84rem; color: rgba(255,255,255,.52); line-height: 1.76; }

        /* ── CTA ──────────────────────────────────────────────────────────── */
        .ct-cta {
          background: linear-gradient(135deg, var(--forest) 0%, var(--mid) 100%);
          padding: 6rem 2rem; text-align: center;
          position: relative; overflow: hidden;
        }
        .ct-cta::before { content: ''; position: absolute; top: -100px; right: -100px; width: 420px; height: 420px; border-radius: 50%; background: rgba(196,136,58,.08); pointer-events: none; }
        .ct-cta::after  { content: ''; position: absolute; bottom: -80px; left: -80px; width: 300px; height: 300px; border-radius: 50%; background: rgba(196,136,58,.05); pointer-events: none; }
        .ct-cta-inner { position: relative; z-index: 1; max-width: 680px; margin: 0 auto; }
        .ct-cta .ct-tag { color: rgba(196,136,58,.8); text-align: center; }
        .ct-cta-h2 {
          font-family: 'Gothic', sans-serif;
          font-size: clamp(1.9rem, 4vw, 3rem);
          font-weight: 700; color: var(--white);
          line-height: 1.18; margin: 0 auto .9rem;
        }
        .ct-cta-sub { color: rgba(255,255,255,.6); font-size: .97rem; line-height: 1.78; margin: 0 auto 2.5rem; }
        .ct-cta-row { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
        .ct-cta-note { margin-top: 1.5rem; font-size: .74rem; color: rgba(255,255,255,.28); letter-spacing: .06em; }

        /* ── SHARED BUTTONS ───────────────────────────────────────────────── */
        .btn-amber {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--amber); color: var(--white);
          border: none; padding: 14px 30px;
          font-family: 'Spartan', sans-serif; font-size: .92rem; font-weight: 700;
          border-radius: 3px; text-decoration: none; cursor: pointer;
          transition: background .2s, transform .15s, box-shadow .2s;
          letter-spacing: .01em;
        }
        .btn-amber:hover { background: var(--amberdk); transform: translateY(-2px); box-shadow: 0 10px 28px rgba(196,136,58,.38); }
        .btn-amber:disabled { opacity: .65; cursor: not-allowed; transform: none; box-shadow: none; }
        .btn-amber-lg { font-size: 1rem; padding: 16px 36px; }
        .btn-amber-full { width: 100%; justify-content: center; padding: 16px 30px; font-size: .97rem; margin-top: .4rem; }

        .btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; color: rgba(255,255,255,.85);
          border: 1.5px solid rgba(255,255,255,.3); padding: 14px 30px;
          font-family: 'Spartan', sans-serif; font-size: .92rem; font-weight: 500;
          border-radius: 3px; text-decoration: none; cursor: pointer;
          transition: border-color .2s, background .2s;
        }
        .btn-ghost:hover { border-color: rgba(255,255,255,.7); background: rgba(255,255,255,.07); }
        .btn-ghost-lg { font-size: 1rem; padding: 16px 36px; }

        /* ── RESPONSIVE ───────────────────────────────────────────────────── */
        @media (max-width: 960px) {
          .ct-hero-inner { grid-template-columns: 1fr; gap: 2.5rem; padding-top: 5.5rem; }
          .ct-id-card    { max-width: 420px; }
          .ct-bar { grid-template-columns: repeat(2, 1fr); }
          .ct-bar-card { border-bottom: 1px solid rgba(255,255,255,.08); }
          .ct-bar-card:nth-child(even) { border-right: none; }
          .ct-bar-card:nth-last-child(-n+2) { border-bottom: none; }
          .ct-main-inner  { grid-template-columns: 1fr; gap: 3rem; }
          .ct-process-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .ct-hero-inner  { padding: 5rem 1.25rem 4rem; }
          .ct-hero-btns   { flex-direction: column; align-items: flex-start; }
          .ct-bar         { grid-template-columns: 1fr; }
          .ct-bar-card    { border-right: none; border-bottom: 1px solid rgba(255,255,255,.12); }
          .ct-bar-card:last-child { border-bottom: none; }
          .ct-main-section { padding: 4rem 1.25rem; }
          .ct-form-row    { grid-template-columns: 1fr; }
          .ct-process     { padding: 4rem 1.25rem; }
          .ct-process-grid { grid-template-columns: 1fr; }
          .ct-cta         { padding: 4rem 1.25rem; }
          .ct-cta-row     { flex-direction: column; align-items: center; }
        }
        @media (prefers-reduced-motion: reduce) {
          .ct-kicker-dot, .ct-spin { animation: none; }
          .btn-amber, .ct-process-card { transition: none; }
        }
      `}</style>

      <main className="ct">

        {/* ═══════════ HERO ═══════════ */}
        <section className="ct-hero" aria-label="Contact A to Z Landscaping and More">
          <div className="ct-hero-topbar" aria-hidden="true" />

          <div className="ct-shapes" aria-hidden="true">
            <div className="ct-shape-circle" />
            <div className="ct-shape-circle2" />
            <div className="ct-shape-ring" />
            <div className="ct-shape-ring2" />
            <div className="ct-shape-line l1" />
            <div className="ct-shape-line l2" />
            <div className="ct-shape-vert" />
            <div className="ct-shape-dots" />
          </div>

          <div className="ct-hero-inner">

            {/* ── Text column ── */}
            <div>
              <div className="ct-kicker">
                <span className="ct-kicker-dot" />
                Free Estimates — Kitsap County, WA
              </div>
              <h1 className="ct-h1">
                Let's Talk.<br />Ryan <em>Picks Up</em> Every Time.
              </h1>
              <p className="ct-byline">No Call Centers &nbsp;·&nbsp; No Dispatch &nbsp;·&nbsp; No Runaround</p>
              <p className="ct-hero-p">
                You're not going to reach a scheduler or get a quote from someone who hasn't seen your property. Call or text Ryan directly — or fill out the form below and he'll follow up the same day.
              </p>
              <div className="ct-hero-btns">
                <a href="tel:+13609533878" className="btn-amber">
                  <PhoneIcon size={16} /> Call or Text — (360) 953-3878
                </a>
                <a href="#contact-form" className="btn-ghost">
                  Send a Message <ArrowRight />
                </a>
              </div>
            </div>

            {/* ── Identity card column ── */}
            <div className="ct-id-card" role="complementary" aria-label="Quick contact details">
              <div className="ct-id-top">
                <div className="ct-id-logo-wrap">
                  <img
                    className="ct-id-logo"
                    src={aboutImage}
                    alt="A to Z Landscaping and More — company logo"
                    width="68" height="68"
                    loading="eager"
                  />
                </div>
                <div className="ct-id-name">A to Z Landscaping &amp; More</div>
                <div className="ct-id-role">Ryan Scott Sant — Founder &amp; Owner</div>
              </div>

              <div className="ct-quick">
                <a href="tel:+13609533878" className="ct-quick-row ct-quick-link" aria-label="Call Ryan at (360) 953-3878">
                  <span className="ct-quick-icon"><PhoneIcon size={15} /></span>
                  <div>
                    <div className="ct-quick-label">Call or Text</div>
                    <div className="ct-quick-val">(360) 953-3878</div>
                  </div>
                </a>
                <a href={`mailto:${CONTACT_EMAIL}`} className="ct-quick-row ct-quick-link" aria-label={`Email Ryan at ${CONTACT_EMAIL}`}>
                  <span className="ct-quick-icon"><MailIcon size={15} /></span>
                  <div>
                    <div className="ct-quick-label">Email</div>
                    <div className="ct-quick-val" style={{fontSize:".8rem"}}>{CONTACT_EMAIL}</div>
                  </div>
                </a>
                <div className="ct-quick-row">
                  <span className="ct-quick-icon"><MapPinIcon size={15} /></span>
                  <div>
                    <div className="ct-quick-label">Service Area</div>
                    <div className="ct-quick-val" style={{color:"var(--white)"}}>Kitsap County, WA</div>
                  </div>
                </div>
                <div className="ct-quick-row">
                  <span className="ct-quick-icon"><ClockIcon size={15} /></span>
                  <div>
                    <div className="ct-quick-label">Hours</div>
                    <div className="ct-quick-val" style={{color:"var(--white)"}}>Mon–Sat, 7 am – 6 pm</div>
                  </div>
                </div>
              </div>

              <div className="ct-id-badge">
                <span className="ct-id-badge-dot" />
                <span className="ct-id-badge-txt">Free Estimates — Honest Quotes Always</span>
                <span className="ct-id-badge-dot" />
              </div>
            </div>

          </div>
        </section>

        {/* ═══════════ INFO CARDS BAR ═══════════ */}
        <div className="ct-bar" role="list" aria-label="Contact information summary">
          {INFO_CARDS.map(({ Icon, label, main, sub, href, cta }, i) => {
            const inner = (
              <>
                <div className="ct-bar-icon" aria-hidden="true"><Icon size={17} /></div>
                <div className="ct-bar-content">
                  <div className="ct-bar-label">{label}</div>
                  <div className="ct-bar-main">{main}</div>
                  <div className="ct-bar-sub">{sub}</div>
                  {cta && <span className="ct-bar-cta">{cta} →</span>}
                </div>
              </>
            );
            return href ? (
              <a href={href} className="ct-bar-card is-link" role="listitem" key={i} aria-label={`${label}: ${main}`}>
                {inner}
              </a>
            ) : (
              <div className="ct-bar-card" role="listitem" key={i}>
                {inner}
              </div>
            );
          })}
        </div>

        {/* ═══════════ FORM + SIDEBAR ═══════════ */}
        <section className="ct-main-section" id="contact-form" aria-labelledby="form-h">
          <div className="ct-main-inner">

            {/* ── Left: form ── */}
            <div>
              <span className="ct-tag">Request a Free Estimate</span>
              <h2 className="ct-h2" id="form-h">Tell Us About Your Property</h2>
              <p className="ct-lead">
                Fill out the form and Ryan will follow up the same day. The more detail you include about what's going on with the property, the more useful that first conversation will be.
              </p>

              <div className="ct-form-card">

                {/* ── SUCCESS STATE ── */}
                {status === "success" ? (
                  <div className="ct-success-wrap" role="alert" aria-live="polite">
                    <div className="ct-success-icon"><SuccessIcon /></div>
                    <div className="ct-success-h">Message Sent — We'll Be in Touch</div>
                    <p className="ct-success-p">
                      Ryan typically responds the same day. If you need something sooner, call or text directly at{" "}
                      <a href="tel:+13609533878" className="ct-success-link">(360) 953-3878</a>.
                    </p>
                  </div>
                ) : (

                  /* ── FORM ── */
                  <form onSubmit={handleSubmit} noValidate>

                    {status === "error" && (
                      <div className="ct-error-msg" role="alert">
                        Something didn't go through — please try again, or call Ryan directly at (360) 953-3878.
                      </div>
                    )}

                    {/* Name + Phone */}
                    <div className="ct-form-row">
                      <div className="ct-form-group">
                        <label className="ct-label" htmlFor="ct-name">
                          Full Name <span className="ct-req" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="ct-name"
                          className="ct-input"
                          type="text"
                          placeholder="Jane Smith"
                          value={form.name}
                          onChange={set("name")}
                          required
                          autoComplete="name"
                          aria-required="true"
                        />
                      </div>
                      <div className="ct-form-group">
                        <label className="ct-label" htmlFor="ct-phone">
                          Phone Number <span className="ct-req" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="ct-phone"
                          className="ct-input"
                          type="tel"
                          placeholder="(360) 000-0000"
                          value={form.phone}
                          onChange={set("phone")}
                          required
                          autoComplete="tel"
                          aria-required="true"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="ct-form-group">
                      <label className="ct-label" htmlFor="ct-email">
                        Email Address <span className="ct-req" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="ct-email"
                        className="ct-input"
                        type="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={set("email")}
                        required
                        autoComplete="email"
                        aria-required="true"
                      />
                    </div>

                    {/* Service */}
                    <div className="ct-form-group">
                      <label className="ct-label" htmlFor="ct-service">
                        Service Needed <span className="ct-req" aria-hidden="true">*</span>
                      </label>
                      <div className="ct-select-wrap">
                        <select
                          id="ct-service"
                          className="ct-select"
                          value={form.service}
                          onChange={set("service")}
                          required
                          aria-required="true"
                        >
                          <option value="">Select a service…</option>
                          {SERVICES.map((s, i) => (
                            <option key={i} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="ct-form-group">
                      <label className="ct-label" htmlFor="ct-message">
                        Describe Your Property &amp; Project{" "}
                        <span className="ct-req" aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="ct-message"
                        className="ct-textarea"
                        placeholder="What's the issue? How big is the yard? Any relevant details — shade, drainage, slope, access — help us give you a more useful estimate."
                        value={form.message}
                        onChange={set("message")}
                        required
                        rows={5}
                        aria-required="true"
                      />
                    </div>

                    {/* How heard */}
                    <div className="ct-form-group">
                      <label className="ct-label" htmlFor="ct-source">
                        How Did You Hear About Us?{" "}
                        <span className="ct-optional">(optional)</span>
                      </label>
                      <div className="ct-select-wrap">
                        <select
                          id="ct-source"
                          className="ct-select"
                          value={form.source}
                          onChange={set("source")}
                        >
                          <option value="">Select…</option>
                          {HOW_HEARD.map((s, i) => (
                            <option key={i} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="btn-amber btn-amber-full"
                      disabled={status === "submitting"}
                      aria-disabled={status === "submitting"}
                    >
                      {status === "submitting" ? (
                        <>
                          <span className="ct-spin" aria-hidden="true">↻</span>
                          Sending Your Request…
                        </>
                      ) : (
                        <>Send My Request — Free Estimate <ArrowRight /></>
                      )}
                    </button>

                  </form>
                )}
              </div>
            </div>

            {/* ── Right: sidebar ── */}
            <aside className="ct-sidebar" aria-label="Additional contact information">

              {/* When you call */}
              <div className="ct-sidebar-card">
                <div className="ct-sidebar-head">
                  <span className="ct-sidebar-head-icon"><PhoneIcon size={14} /></span>
                  <span className="ct-sidebar-head-txt">When You Call</span>
                </div>
                <div className="ct-sidebar-body">
                  <p className="ct-sidebar-p">Ryan answers directly. You won't reach a call center or a dispatcher — just the person who quotes the work and oversees it on-site.</p>
                  <p className="ct-sidebar-p">Most first calls run five to ten minutes. You'll leave with a clear sense of what the job involves and a realistic timeline for getting on the property.</p>
                </div>
              </div>

              {/* Hours */}
              <div className="ct-sidebar-card">
                <div className="ct-sidebar-head">
                  <span className="ct-sidebar-head-icon"><ClockIcon size={14} /></span>
                  <span className="ct-sidebar-head-txt">Business Hours</span>
                </div>
                <div className="ct-sidebar-body">
                  <table className="ct-hours" aria-label="Business hours">
                    <tbody>
                      {HOURS.map(({ day, time }, i) => (
                        <tr key={i}>
                          <td>{day}</td>
                          <td>{time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="ct-hours-note">Free estimates are available any time by appointment — just ask.</p>
                </div>
              </div>

              {/* Service area */}
              <div className="ct-sidebar-card">
                <div className="ct-sidebar-head">
                  <span className="ct-sidebar-head-icon"><MapPinIcon size={14} /></span>
                  <span className="ct-sidebar-head-txt">Service Area</span>
                </div>
                <div className="ct-sidebar-body">
                  <ul className="ct-city-list" aria-label="Communities served">
                    {SERVICE_CITIES.map((city, i) => (
                      <li className="ct-city-row" key={i}>
                        <span className="ct-chk" aria-hidden="true"><CheckIcon /></span>
                        <span>{city}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </aside>
          </div>
        </section>

        {/* ═══════════ PROCESS STEPS ═══════════ */}
        <section className="ct-process" aria-labelledby="process-h">
          <div className="ct-process-inner">
            <span className="ct-tag">What Happens Next</span>
            <h2 className="ct-h2" id="process-h">What to Expect After You Reach Out</h2>
            <p className="ct-process-sub">
              Four steps. No complicated onboarding, no back-and-forth that goes nowhere. A straight path from first contact to job done.
            </p>
            <div className="ct-process-grid" role="list">
              {PROCESS_STEPS.map((s, i) => (
                <div className="ct-process-card" role="listitem" key={i}>
                  <div className="ct-process-ghost" aria-hidden="true">{s.num}</div>
                  <h3 className="ct-process-title">{s.title}</h3>
                  <p className="ct-process-body">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ CTA ═══════════ */}
        <section className="ct-cta" aria-label="Final call to action">
          <div className="ct-cta-inner">
            <span className="ct-tag">No Obligation. No Pressure.</span>
            <h2 className="ct-cta-h2">Ready to Start? Call or Text Ryan Now.</h2>
            <p className="ct-cta-sub">
              Most conversations start with one problem and end up covering the whole property. That's fine. Tell us what's bothering you most, and we'll take it from there.
            </p>
            <div className="ct-cta-row">
              <a href="tel:+13609533878" className="btn-amber btn-amber-lg">
                <PhoneIcon size={18} /> (360) 953-3878
              </a>
              <a href="/services" className="btn-ghost btn-ghost-lg">
                View All Services <ArrowRight />
              </a>
            </div>
            <p className="ct-cta-note">
              A to Z Landscaping &amp; More &nbsp;·&nbsp; Ryan Scott Sant &nbsp;·&nbsp; Kitsap County, WA
            </p>
          </div>
        </section>

      </main>
    </>
  );
}