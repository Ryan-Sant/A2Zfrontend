import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "../../css/style.css";
// ↑ style.css already declares @font-face for Gothic + Spartan
// and sets body { font-family: 'Spartan' } / h1-h6 { font-family: 'Gothic' }
// so both fonts flow through automatically below.

// ─── Inline SVG icons — zero external dependencies ───────────────────────────
const PhoneIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.5 12c-.86-2.65-1.68-5.82-3.07-8.63A2 2 0 013.44 1.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.91a16 16 0 006.06 6.06l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
);

const ChevronIcon = ({ open }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    style={{ transition: "transform 0.22s ease", transform: open ? "rotate(180deg)" : "rotate(0deg)", flexShrink: 0 }}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const CheckIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 12 4 10" />
  </svg>
);

const MapPinIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

const SvcIcons = {
  scissors: () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/>
      <line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/>
    </svg>
  ),
  wind: () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2"/>
    </svg>
  ),
  droplets: () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/>
    </svg>
  ),
  leaf: () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 22c1.25-.987 2.27-1.975 3.9-2.975C9 17.5 12 17.5 15 19.5c3 2 4 2 6 .5M2 22s0-20 20-16"/>
    </svg>
  ),
  layers: () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
    </svg>
  ),
  align: () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="21" y1="10" x2="3" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="21" y1="18" x2="3" y2="18"/>
    </svg>
  ),
  sprout: () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 20h10M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 00-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/>
    </svg>
  ),
  home: () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  refresh: () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/>
    </svg>
  ),
  package: () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
    </svg>
  ),
};

// ─── Data ────────────────────────────────────────────────────────────────────
const SERVICES = [
  { IconKey: "scissors", name: "Mow & Maintain",                    desc: "Scheduled cuts following the one-third rule — never removing more than a third of the blade per session. Built around your grass type and growth rate, not the most frequent visit bookable.",               href: "/lawn-care/mow-and-maintain/" },
  { IconKey: "wind",     name: "Raking",                            desc: "Debris removal that unblocks sunlight, airflow, and water absorption year-round. All material bagged and hauled off the property after every visit.",                                                          href: "/lawn-care/raking/" },
  { IconKey: "droplets", name: "Fertilization",                     desc: "Spring, summer, and fall applications calibrated for Kitsap County's clay soil and coastal temperatures — not a national calendar that burns PNW turf.",                                                        href: "/lawn-care/fertilization/" },
  { IconKey: "leaf",     name: "Weed Control",                      desc: "Pre-emergent before germination season. Selective post-emergent on dandelions, creeping buttercup, clover, and annual bluegrass — the most common Kitsap County invaders.",                                      href: "/lawn-care/weed-control/" },
  { IconKey: "layers",   name: "Moss Removal",                      desc: "Treat and kill the moss, remove dead material, then address the drainage, pH, or shade condition driving it. Not just the surface — the root cause.",                                                           href: "/lawn-care/moss-removal/" },
  { IconKey: "align",    name: "Thatching",                         desc: "Remove the packed organic layer blocking water and nutrients from reaching the root zone. A lawn that doesn't get thatched can't absorb what you put into it.",                                                   href: "/lawn-care/thatching/" },
  { IconKey: "sprout",   name: "Overseeding",                       desc: "Seed matched to your property's specific light, rainfall, and temperature — applied after soil prep, not on top of thatch where germination rates drop significantly.",                                           href: "/lawn-care/overseeding/" },
  { IconKey: "home",     name: "New Lawn Installation",             desc: "Grade, amend, then seed or sod depending on timeline and site. Seed adapts over time. Sod gives immediate cover where timing or erosion won't allow seeding.",                                                    href: "/lawn-care/new-lawn-installation/" },
  { IconKey: "refresh",  name: "Lawn Renovation & Rebeautification",desc: "Restore heavy moss, weed dominance, compaction, or accumulated neglect without defaulting to a full tear-out. Viable when at least 50% of turf is still alive.",                                                 href: "/lawn-care/lawn-renovation/" },
  { IconKey: "package",  name: "Sod & Topsoil",                     desc: "Immediate coverage for slopes and erosion-prone areas. Topsoil matched to the existing soil profile — not fill dirt that creates drainage problems after install.",                                               href: "/lawn-care/sod-topsoil/" },
];

const PROBLEMS = [
  { title: "Moss That Returns After Every Treatment", body: "Moss establishes when drainage is poor, soil pH is low, shade prevents effective photosynthesis, or turf is too thin to compete. Killing it without identifying the sustaining condition produces a result that lasts one season." },
  { title: "Thatch Blocking the Root Zone",           body: "Once thatch exceeds a half-inch, water and fertilizer stay above the root zone no matter how much is applied. That physical barrier has to come out before any other input produces a lasting result." },
  { title: "Thin Turf That Won't Close In",           body: "Bare patches trace back to compaction, shade beyond what the turf variety can handle, or thatch preventing seed-to-soil contact. Overseeding into uncorrected conditions produces poor germination every time." },
];

const STEPS = [
  { num: "01", title: "Assessment",         body: "I walk the property first. The presenting problem and root cause are often different." },
  { num: "02", title: "Clear Quote",        body: "Written, itemized estimate before any work begins. No surprises." },
  { num: "03", title: "Service",            body: "Correct equipment, soil conditions and growth stage factored into every step." },
  { num: "04", title: "Cleanup",            body: "Clippings cleared from all hard surfaces. Hauled material leaves the property." },
  { num: "05", title: "Ongoing Adjustment", body: "Service mix adjusts as the lawn's condition changes across seasons." },
];

const TRUST_POINTS = [
  "I answer your call, give the quote, and oversee the work directly.",
  "Free estimates — written and itemized — before any work begins.",
  "No subcontractors. Your property is handled by my crew.",
  "Nine years of Pacific Northwest-specific experience on Kitsap County soil.",
  "Call or text Ryan directly — not a call center.",
];

const FAQS = [
  { q: "How Often Should a Lawn Be Mowed in Kitsap County?",               a: "Most Kitsap County lawns need mowing every 7–10 days from April through October and every 3–4 weeks in winter. Frequency depends on grass type, fertilization rate, and current rainfall." },
  { q: "When Is the Best Time to Overseed a Lawn in Kitsap County?",       a: "Early fall is the best window. Soil is still warm enough for germination, fall rainfall reduces irrigation needs, and grass establishes before winter. Early spring is the second-best option." },
  { q: "What Causes Moss and How Do I Stop It from Coming Back?",           a: "Moss grows where drainage is poor, soil pH is low, shade is heavy, or turf density is thin. Killing moss without correcting the underlying condition means it returns within one season." },
  { q: "Does My Lawn Need to Be Thatched Every Year?",                     a: "Most lawns don't need annual thatching. Measure the thatch layer first — under a half-inch, skip it. Thatching too frequently removes beneficial organic material and stresses the root zone." },
  { q: "What's the Difference Between Lawn Renovation and New Lawn Installation?", a: "Renovation improves an existing lawn through overseeding, moss treatment, and soil amendment without removing the turf. Installation starts from bare soil. Renovation is the right call when at least half the lawn still has healthy grass." },
];

// ─── Component ───────────────────────────────────────────────────────────────
export default function LawnCareServicePage() {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    document.title = "Lawn Care & Maintenance Services | Kitsap County WA | A to Z Landscaping";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content =
      "Professional lawn care and maintenance in Kitsap County. Mowing, fertilization, weed control, moss removal, overseeding & more. 9 years, 1,300+ jobs done. Ryan Scott Sant.";
  }, []);

  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  return (
  <>
    <Helmet>
      <title>
        Lawn Care & Maintenance Services | Kitsap County WA | A to Z Landscaping
      </title>

      <meta
        name="description"
        content="Professional lawn care and maintenance in Kitsap County. Mowing, fertilization, weed control, moss removal, overseeding, lawn renovation, sod installation and more."
      />

      <meta
        name="keywords"
        content="lawn care Kitsap County, lawn maintenance Kitsap County, mowing service, moss removal, weed control, fertilization, overseeding, lawn renovation"
      />

      <link
        rel="canonical"
        href="https://YOURDOMAIN.COM/lawn-care/"
      />

      <meta
        property="og:title"
        content="Lawn Care & Maintenance Services | A to Z Landscaping"
      />

      <meta
        property="og:description"
        content="Professional lawn care services throughout Kitsap County."
      />

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:url"
        content="https://YOURDOMAIN.COM/lawn-care/"
      />

      <meta
        property="og:image"
        content="https://YOURDOMAIN.COM/images/lawn-care.jpg"
      />
    </Helmet>

    <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── BASE
           Spartan comes from style.css → body { font-family: 'Spartan' }
           Gothic  comes from style.css → h1-h6 { font-family: 'Gothic' }
           Both flow through automatically via the CSS import above.
        ─────────────────────────────────────────────────────────────── */
        .lp { color: #1A1A18; background: #fff; line-height: 1.6; }

        /* ── HERO ─────────────────────────────────────────────────── */
        .lp-hero       { position: relative; min-height: 88vh; display: flex; align-items: center; background: #162619; overflow: hidden; }
        .lp-hero-photo { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center 35%; opacity: 0.4; }
        .lp-hero-grad  { position: absolute; inset: 0; background: linear-gradient(130deg, rgba(18,38,22,.97) 0%, rgba(18,38,22,.72) 52%, rgba(18,38,22,.3) 100%); }
        .lp-hero-wave  { position: absolute; bottom: -1px; left: 0; width: 100%; height: 68px; display: block; }
        .lp-hero-inner { position: relative; z-index: 2; max-width: 1100px; margin: 0 auto; padding: 7rem 2rem 8rem; width: 100%; }

        .lp-eyebrow {
          display: inline-flex; align-items: center; gap: 5px;
          background: rgba(196,136,58,.14); border: 1px solid rgba(196,136,58,.4);
          color: #C4883A; padding: 4px 13px; border-radius: 2px;
          /* Spartan for label text */
          font-family: 'Spartan', sans-serif;
          font-size: .68rem; font-weight: 700; letter-spacing: .17em;
          text-transform: uppercase; margin-bottom: 1.5rem;
        }

        /* Gothic for all headings */
        .lp-h1 {
          font-family: 'Gothic', sans-serif;
          font-size: clamp(2.1rem, 5.5vw, 4rem);
          font-weight: 800; color: #fff; line-height: 1.1;
          margin-bottom: 1.25rem; max-width: 690px;
        }
        .lp-h1 em { font-style: italic; color: #C4883A; }

        /* Spartan for body/sub text */
        .lp-hero-sub {
          font-family: 'Spartan', sans-serif;
          color: rgba(255,255,255,.74); font-size: 1.06rem;
          max-width: 520px; margin-bottom: 2.5rem; line-height: 1.75;
        }
        .lp-cta-row { display: flex; gap: 11px; flex-wrap: wrap; align-items: center; }

        .btn-amber {
          background: #C4883A; color: #fff; border: none;
          padding: 13px 26px; font-size: .93rem; font-weight: 700;
          cursor: pointer; border-radius: 2px;
          display: inline-flex; align-items: center; gap: 8px;
          letter-spacing: .01em; transition: background .2s;
          font-family: 'Spartan', sans-serif;
        }
        .btn-amber:hover { background: #a8701f; }
        .btn-ghost {
          background: transparent; color: rgba(255,255,255,.88);
          border: 1.5px solid rgba(255,255,255,.3);
          padding: 13px 26px; font-size: .93rem; font-weight: 500;
          cursor: pointer; border-radius: 2px;
          font-family: 'Spartan', sans-serif; transition: border-color .2s;
        }
        .btn-ghost:hover { border-color: rgba(255,255,255,.8); }

        /* ── STATS ────────────────────────────────────────────────── */
        .lp-stats { background: #C4883A; display: grid; grid-template-columns: repeat(3, 1fr); }
        .lp-stat  { padding: 1.6rem 1.25rem; text-align: center; border-right: 1px solid rgba(255,255,255,.22); }
        .lp-stat:last-child { border-right: none; }
        .lp-stat-num {
          display: block;
          font-family: 'Gothic', sans-serif; /* Gothic for big numbers */
          font-size: 2.4rem; font-weight: 800; color: #fff; line-height: 1;
        }
        .lp-stat-label {
          display: block;
          font-family: 'Spartan', sans-serif;
          font-size: .69rem; font-weight: 700;
          letter-spacing: .11em; text-transform: uppercase;
          color: rgba(255,255,255,.74); margin-top: 3px;
        }

        /* ── SHARED ───────────────────────────────────────────────── */
        .lp-inner { max-width: 1100px; margin: 0 auto; }
        .lp-tag {
          font-family: 'Spartan', sans-serif;
          font-size: .67rem; font-weight: 700;
          letter-spacing: .2em; text-transform: uppercase;
          color: #C4883A; margin-bottom: .6rem; display: block;
        }
        .lp-h2 {
          font-family: 'Gothic', sans-serif; /* Gothic for all H2s */
          font-size: clamp(1.7rem, 3.6vw, 2.5rem);
          font-weight: 700; color: #162619; line-height: 1.2; margin-bottom: .8rem;
        }
        .lp-lead {
          font-family: 'Spartan', sans-serif;
          color: #576858; font-size: 1.02rem; max-width: 630px;
          line-height: 1.78; margin-bottom: 2.8rem;
        }

        /* ── SERVICE CARDS ────────────────────────────────────────── */
        .lp-svc-bg   { background: #F2F6F2; padding: 5.5rem 2rem; }
        .lp-svc-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(285px, 1fr)); gap: 1.15rem; }
        .lp-card {
          background: #fff; border: 1px solid #D5E2D5;
          border-left: 4px solid #D5E2D5; border-radius: 3px; padding: 1.55rem;
          transition: border-left-color .22s, box-shadow .22s, transform .22s;
        }
        .lp-card:hover { border-left-color: #C4883A; box-shadow: 0 10px 30px rgba(0,0,0,.09); transform: translateY(-3px); }
        .lp-card-ico  { width: 2.4rem; height: 2.4rem; background: #E5EDE5; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #2A5038; margin-bottom: .85rem; }
        .lp-card-name {
          font-family: 'Gothic', sans-serif; /* Gothic for card headings */
          font-size: 2rem; font-weight: 700; color: #162619;
          margin-bottom: .5rem; line-height: 1.25;
        }
        .lp-card-desc {
          font-family: 'Spartan', sans-serif;
          font-size: .86rem; color: #576858; line-height: 1.65;
        }
        .lp-card-link {
          display: inline-flex; align-items: center; gap: 4px; margin-top: .85rem;
          font-family: 'Spartan', sans-serif;
          font-size: .52rem; font-weight: 700; color: #C4883A;
          letter-spacing: .09em; text-transform: uppercase;
          background: none; border: none; cursor: pointer; padding: 0;
        }

        /* ── PROBLEMS ─────────────────────────────────────────────── */
        .lp-prob-bg { background: #162619; padding: 5.5rem 2rem; }
        .lp-prob-bg .lp-h2  { color: #fff; }
        .lp-prob-bg .lp-lead { color: rgba(255,255,255,.57); }
        .lp-pgrid { display: grid; grid-template-columns: repeat(auto-fit, minmax(265px, 1fr)); gap: 1.15rem; }
        .lp-pcard {
          position: relative; background: rgba(255,255,255,.055);
          border: 1px solid rgba(255,255,255,.1); border-left: 3px solid #C4883A;
          border-radius: 3px; padding: 1.9rem; overflow: hidden;
        }
        .lp-pnum {
          position: absolute; top: -6px; right: 12px;
          font-family: 'Gothic', sans-serif;
          font-size: 5.2rem; font-weight: 800;
          color: rgba(196,136,58,.11); line-height: 1;
          pointer-events: none; user-select: none;
        }
        .lp-ptitle {
          font-family: 'Gothic', sans-serif; /* Gothic for problem headings */
          font-size: 2rem; font-weight: 700; color: #fff;
          margin-bottom: .82rem; line-height: 1.27; padding-right: 2.2rem;
        }
        .lp-pbody {
          font-family: 'Spartan', sans-serif;
          font-size: .86rem; color: rgba(255,255,255,.59); line-height: 1.72;
        }

        /* ── PROCESS ──────────────────────────────────────────────── */
        .lp-proc-bg { background: #fff; padding: 5.5rem 2rem; }
        .lp-steps { display: grid; grid-template-columns: repeat(5, 1fr); gap: .7rem; margin-top: 3.2rem; position: relative; }
        .lp-steps::after {
          content: ''; position: absolute; top: 1.85rem; left: 10%; right: 10%;
          height: 1px; background: linear-gradient(90deg, #D5E2D5, #C4883A 50%, #D5E2D5); z-index: 0;
        }
        .lp-step { text-align: center; position: relative; z-index: 1; padding: 0 .35rem; }
        .lp-step-dot {
          width: 3.7rem; height: 3.7rem; background: #fff;
          border: 2px solid #C4883A; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto .9rem;
          font-family: 'Gothic', sans-serif; /* Gothic for step numbers */
          font-size: .92rem; font-weight: 700; color: #C4883A;
        }
        .lp-step-title {
          font-family: 'Gothic', sans-serif;
          font-size: 1.5rem; font-weight: 700; color: #162619; margin-bottom: .35rem;
        }
        .lp-step-body {
          font-family: 'Spartan', sans-serif;
          font-size: 1.5rem; color: #576858; line-height: 1.55;
        }

        /* ── TRUST ────────────────────────────────────────────────── */
        .lp-trust-bg   { background: #EEF3EE; padding: 5.5rem 2rem; }
        .lp-trust-grid { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 4.2rem; align-items: center; }
        .lp-trust-list { list-style: none; padding: 0; margin-top: 1.5rem; display: flex; flex-direction: column; gap: .72rem; }
        .lp-trust-item {
          display: flex; align-items: flex-start; gap: .7rem;
          font-family: 'Spartan', sans-serif;
          font-size: .91rem; color: #354437; line-height: 1.5;
        }
        .lp-chk    { width: 1.35rem; height: 1.35rem; background: #2A5038; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px; }
        .lp-imgbox { position: relative; border-radius: 4px; overflow: hidden; aspect-ratio: 4 / 3; box-shadow: 0 22px 60px rgba(0,0,0,.14); }
        .lp-imgbox img { width: 100%; height: 100%; object-fit: cover; }
        .lp-imgbadge { position: absolute; bottom: 1.4rem; left: 1.4rem; background: #C4883A; color: #fff; padding: .75rem 1.1rem; border-radius: 3px; }
        .lp-badge-num {
          display: block;
          font-family: 'Gothic', sans-serif;
          font-size: 1.85rem; font-weight: 800; line-height: 1;
        }
        .lp-badge-lbl {
          display: block;
          font-family: 'Spartan', sans-serif;
          font-size: .66rem; font-weight: 700;
          letter-spacing: .08em; text-transform: uppercase; opacity: .85; margin-top: 2px;
        }

        /* ── FAQ ──────────────────────────────────────────────────── */
        .lp-faq-bg  { background: #fff; padding: 5.5rem 2rem; }
        .lp-faq-wrap { max-width: 760px; margin: 2.8rem auto 0; border: 1px solid #D5E2D5; border-radius: 4px; overflow: hidden; }
        .lp-faq-item { border-bottom: 1px solid #D5E2D5; }
        .lp-faq-item:last-child { border-bottom: none; }
        .lp-faq-btn {
          width: 100%; background: #fff; border: none;
          padding: 1.3rem 1.65rem;
          display: flex; align-items: center; justify-content: space-between; gap: .9rem;
          text-align: left; cursor: pointer; transition: background .15s;
          font-family: 'Spartan', sans-serif;
        }
        .lp-faq-btn:hover, .lp-faq-btn.open { background: #F2F6F2; }
        .lp-faq-q {
          font-family: 'Gothic', sans-serif; /* Gothic for FAQ questions */
          font-size: 1.5rem; font-weight: 600; color: #162619;
          line-height: 1.4; margin: 0;
        }
        .lp-faq-icon { flex-shrink: 0; color: #C4883A; }
        .lp-faq-ans {
          background: #F2F6F2; padding: 0 1.65rem 1.3rem;
          font-family: 'Spartan', sans-serif;
          font-size: .91rem; color: #576858; line-height: 1.78;
        }

        /* ── CTA ──────────────────────────────────────────────────── */
        .lp-cta-bg  { background: linear-gradient(138deg, #162619 0%, #2A5038 100%); padding: 5.5rem 2rem; text-align: center; }
        .lp-cta-h2  {
          font-family: 'Gothic', sans-serif; /* Gothic for CTA heading */
          font-size: clamp(1.7rem, 3.6vw, 2.5rem); font-weight: 700;
          color: #fff; line-height: 1.2; max-width: 560px; margin: 0 auto .8rem;
        }
        .lp-cta-sub {
          font-family: 'Spartan', sans-serif;
          color: rgba(255,255,255,.62); font-size: 1rem;
          margin-bottom: 2.2rem; max-width: 420px;
          margin-left: auto; margin-right: auto;
        }
        .lp-cta-note {
          font-family: 'Spartan', sans-serif;
          margin-top: 1.25rem; font-size: .76rem;
          color: rgba(255,255,255,.36); letter-spacing: .04em;
        }

        /* ── RESPONSIVE ───────────────────────────────────────────── */
        @media (max-width: 900px) {
          .lp-steps { grid-template-columns: repeat(3, 1fr); }
          .lp-steps::after { display: none; }
          .lp-trust-grid { grid-template-columns: 1fr; gap: 2.4rem; }
        }
        @media (max-width: 640px) {
          .lp-stats { grid-template-columns: 1fr; }
          .lp-stat  { border-right: none; border-bottom: 1px solid rgba(255,255,255,.2); }
          .lp-stat:last-child { border-bottom: none; }
          .lp-steps { grid-template-columns: 1fr 1fr; }
          .lp-cta-row { flex-direction: column; }
          .lp-hero-inner { padding: 5rem 1.25rem 6rem; }
        }
      `}</style>

      <main className="lp">

        {/* ── HERO ── */}
        <section className="lp-hero" aria-label="Page hero">
          <img className="lp-hero-photo" src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=80" alt="Professional lawn care in Kitsap County WA" />
          <div className="lp-hero-grad" aria-hidden="true" />
          <div className="lp-hero-inner">
            <div className="lp-eyebrow"><MapPinIcon /> Kitsap County, WA</div>
            <h1 className="lp-h1">
              Lawn Care & {" "}
              <em>Maintenance Services</em>
            </h1>
            <p className="lp-hero-sub">
              I'm Ryan Scott Sant. Nine years and 1,300+ projects across Kitsap County — working with clay soil, persistent moss, and wet winters that national lawn care guides consistently get wrong.
            </p>
            <div className="lp-cta-row">
              <a href="tel:360 953 3878">
  <button className="btn-amber">
    <PhoneIcon size={16} /> Get a Free Estimate
  </button>
</a>
              <button className="btn-ghost">See All Services ↓</button>
            </div>
          </div>
          <svg className="lp-hero-wave" viewBox="0 0 1440 68" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0,68 L0,34 C240,2 480,66 720,34 C960,2 1200,60 1440,22 L1440,68 Z" fill="#C4883A" />
          </svg>
        </section>

        {/* ── STATS ── */}
        <div className="lp-stats">
          <div className="lp-stat"><span className="lp-stat-num">9</span><span className="lp-stat-label">Years in Business</span></div>
          <div className="lp-stat"><span className="lp-stat-num">1,300+</span><span className="lp-stat-label">Projects Completed</span></div>
          <div className="lp-stat"><span className="lp-stat-num">Kitsap</span><span className="lp-stat-label">County, WA</span></div>
        </div>

        {/* ── SERVICES ── */}
        <section className="lp-svc-bg" aria-labelledby="svc-h">
          <div className="lp-inner">
            <span className="lp-tag">Complete Service Range</span>
            <h2 className="lp-h2" id="svc-h">What We Cover in Lawn Care &amp; Maintenance</h2>
            <p className="lp-lead">
              Lawn care and maintenance is the ongoing and corrective work that keeps a grass lawn healthy across seasons — from routine mowing and fertilization to corrective work like moss removal, thatching, and full renovation. Here's every service we offer, what each involves, and when it's the right call.
            </p>
            <div className="lp-svc-grid">
              {SERVICES.map(({ IconKey, name, desc }, i) => {
                const Icon = SvcIcons[IconKey];
                return (
                  <article className="lp-card" key={i}>
                    <div className="lp-card-ico" aria-hidden="true"><Icon /></div>
                    <h3 className="lp-card-name">{name}</h3>
                    <p className="lp-card-desc">{desc}</p>
                    <button className="lp-card-link" aria-label={`Learn more about ${name}`}>Learn More →</button>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── PROBLEMS ── */}
        <section className="lp-prob-bg" aria-labelledby="prob-h">
          <div className="lp-inner">
            <span className="lp-tag" style={{ color: "#C4883A" }}>Pacific Northwest Conditions</span>
            <h2 className="lp-h2" id="prob-h">The 3 Most Common Lawn Problems in Kitsap County</h2>
            <p className="lp-lead">Clay soil, heavy rainfall, and canopy shade produce predictable problems here. Which condition is driving the issue determines whether the fix actually holds long-term.</p>
            <div className="lp-pgrid">
              {PROBLEMS.map((p, i) => (
                <div className="lp-pcard" key={i}>
                  <div className="lp-pnum" aria-hidden="true">0{i + 1}</div>
                  <h3 className="lp-ptitle">{p.title}</h3>
                  <p className="lp-pbody">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="lp-proc-bg" aria-labelledby="proc-h">
          <div className="lp-inner">
            <span className="lp-tag">How We Work</span>
            <h2 className="lp-h2" id="proc-h">Our Process — Start to Finish</h2>
            <p className="lp-lead">Every job starts with the property, not a checklist. The presenting problem and the root cause are often different things.</p>
            <div className="lp-steps">
              {STEPS.map((s, i) => (
                <div className="lp-step" key={i}>
                  <div className="lp-step-dot">{s.num}</div>
                  <div className="lp-step-title">{s.title}</div>
                  <p className="lp-step-body">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TRUST ── */}
        <section className="lp-trust-bg" aria-labelledby="trust-h">
          <div className="lp-trust-grid">
            <div>
              <span className="lp-tag">Why A to Z Landscaping &amp; More</span>
              <h2 className="lp-h2" id="trust-h">Ryan Scott Sant — Kitsap County's Full-Service Crew</h2>
              <p className="lp-lead" style={{ marginBottom: 0 }}>
                Nine years and 1,300+ projects in Kitsap County mean I've worked through the full range of what lawns here do — how they respond to our rainfall, how moss and thatch interact with clay soil, and what's worth renovating versus what needs a fresh start.
              </p>
              <ul className="lp-trust-list">
                {TRUST_POINTS.map((item, i) => (
                  <li className="lp-trust-item" key={i}>
                    <span className="lp-chk" aria-hidden="true"><CheckIcon /></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lp-imgbox">
              <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80" alt="Kitsap County lawn maintained by A to Z Landscaping" />
              <div className="lp-imgbadge">
                <strong className="lp-badge-num">1,300+</strong>
                <span className="lp-badge-lbl">Projects Done Right</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="lp-faq-bg" aria-labelledby="faq-h">
          <div className="lp-inner" style={{ textAlign: "center" }}>
            <span className="lp-tag" style={{ display: "block" }}>Common Questions</span>
            <h2 className="lp-h2" id="faq-h" style={{ maxWidth: 560, margin: "0 auto .7rem" }}>Frequently Asked Questions</h2>
            <p className="lp-lead" style={{ margin: "0 auto" }}>Straight answers to what Kitsap County homeowners ask most about lawn care.</p>
          </div>
          <div className="lp-faq-wrap">
            {FAQS.map((f, i) => (
              <div className="lp-faq-item" key={i}>
                <button className={`lp-faq-btn${openFaq === i ? " open" : ""}`} onClick={() => toggleFaq(i)} aria-expanded={openFaq === i}>
                  <h3 className="lp-faq-q">{f.q}</h3>
                  <span className="lp-faq-icon"><ChevronIcon open={openFaq === i} /></span>
                </button>
                {openFaq === i && <div className="lp-faq-ans">{f.a}</div>}
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="lp-cta-bg" aria-label="Call to action">
          <span className="lp-tag" style={{ display: "block", marginBottom: ".7rem", color: "rgba(196,136,58,.8)" }}>Ready to Get Started?</span>
          <h2 className="lp-cta-h2">Get a Free Lawn Care Estimate in Kitsap County</h2>
          <p className="lp-cta-sub">Call or text Ryan directly. Free estimate. No call center, no runaround.</p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
  className="btn-amber"
  style={{ fontSize: ".97rem", padding: "15px 36px" }}
  onClick={() => (window.location.href = "tel:360 953 3878")}
>
  <PhoneIcon size={17} /> Call or Text Ryan Now
</button>
          </div>
          <p className="lp-cta-note">A to Z Landscaping &amp; More &nbsp;·&nbsp; Ryan Scott Sant &nbsp;·&nbsp; Kitsap County, WA</p>
        </section>

      </main>
    </>
  );
}