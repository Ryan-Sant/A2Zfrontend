import { useState } from "react";
import { Helmet } from "react-helmet";
import "../../css/style.css";
import image2 from "../../media/img (2).jpg";
import image20 from "../../media/img (20).jpg";

// ─── Icons ───────────────────────────────────────────────────────────────────
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

// ─── Service Icons ────────────────────────────────────────────────────────────
const ScissorsIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/>
    <line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/>
    <line x1="8.12" y1="8.12" x2="12" y2="12"/>
  </svg>
);
const TreeIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22v-7"/><path d="M9 9l3-7 3 7"/><path d="M5 13l7-4 7 4"/><path d="M3 17l9-5 9 5"/>
  </svg>
);
const LayersIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
    <polyline points="2 17 12 22 22 17"/>
    <polyline points="2 12 12 17 22 12"/>
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────
const SERVICES = [
  {
    Icon: ScissorsIcon,
    name: "Spring Yard Cleanup",
    desc: "Winter leaves behind storm debris, dead growth, moss buildup, and compacted material in planting beds. Our spring cleanup restores your property by clearing debris, refreshing beds, and preparing your lawn for a healthy growing season.",
    href: "/services/yard-cleanup",
  },

  {
    Icon: TreeIcon,
    name: "Fall Yard Cleanup",
    desc: "Heavy leaf fall and Douglas fir needles can smother grass and encourage moss during the wet Pacific Northwest season. We remove seasonal debris before winter rains create larger lawn and landscape problems.",
    href: "/services/yard-cleanup",
  },

  {
    Icon: LayersIcon,
    name: "Leaf Removal",
    desc: "We provide complete property leaf removal, clearing lawns, planting beds, perimeter edges, and difficult-to-reach areas. All collected leaves are loaded and hauled away—never left piled on your property.",
    href: "/services/yard-cleanup",
  },

  {
    Icon: MapPinIcon,
    name: "Storm Cleanup",
    desc: "After wind and rain events, we quickly remove fallen branches, storm debris, and damaged vegetation to make your property clean, safe, and accessible again without unnecessary delays.",
    href: "/services/yard-cleanup",
  },

  {
    Icon: PhoneIcon,
    name: "Gutter Cleaning",
    desc: "We remove leaves, fir needles, moss, and debris from gutters to restore proper water flow and help protect your roof, siding, and foundation from water damage throughout the year.",
    href: "/services/yard-cleanup",
  },

  {
    Icon: CheckIcon,
    name: "Backpack Blowing",
    desc: "Our backpack blowers clean fence lines, bed edges, walkways, corners, patios, and other hard-to-reach areas, leaving your entire property looking neat and professionally finished.",
    href: "/services/yard-cleanup",
  },
];

const PROBLEMS = [
  {
    title: "Overgrown Shrubs Narrowing Everything",
    body: "Shrubs that were once a feature have become something to manage around. They block light, cover windows, crowd walkways, and make the rest of the bed look neglected by comparison.",
  },
  {
    title: "Disconnected Improvements That Compete",
    body: "A new bed, trimmed shrub, or layer of bark may look better briefly. But isolated changes done out of order can create more work later and look fine alone while competing with everything else across the yard.",
  },
  {
    title: "A Yard That's Hard to Use",
    body: "No clear entrance. No defined space for kids, pets, or quiet evenings. Crowded, overgrown, or poorly arranged planting that makes the whole property feel harder to manage than it should be.",
  },
];

const STEPS = [
  { num: "01", title: "Your Priorities First",   body: "We start with what's bothering you, what should stay, how you use the yard, and which areas matter most. You don't need a finished vision." },
  { num: "02", title: "Shape the Direction",     body: "We connect your goals with the site — bed layout, plant placement, shrub reduction, branch clearance, material coverage." },
  { num: "03", title: "Confirm the Scope",       body: "Before field work begins, the scope identifies every area and service involved. No surprises. Written before work starts." },
  { num: "04", title: "Work in Logical Order",   body: "Removal, trimming, reshaping, installation, and finishing materials in the right sequence. Following that order reduces rework." },
];

const TRUST_POINTS = [
  "Design, trimming, and bed work under one plan — not separate providers with unclear responsibility.",
  "We start with your property, not a preset style or popular feature list.",
  "Nine years and 1,300+ projects in Kitsap County — we know how quickly work done out of order limits the final result.",
  "I answer your call, give the quote, and oversee the work directly.",
  "The scope is shaped around your property, not a generic package.",
];

const FAQS = [
  {
    q: "How Often Should Kitsap County Properties Schedule Cleanup Service?",
    a: "Most properties need at least a thorough fall cleanup and a spring cleanup each year. Properties with big-leaf maples or Douglas firs often need additional leaf removal visits through fall and into early winter."
  },
  {
    q: "What Does a Property Cleanup Service Include?",
    a: "Property cleanup includes leaf removal, clearing debris from lawns and planting beds, and full debris haul-off. Add-on services can include gutter cleaning, backpack blowing for edges, and storm debris removal, depending on your property's needs."
  },
  {
    q: "When Is the Right Time To Schedule Fall Cleanup?",
    a: "Schedule fall cleanup between September and early November before the heavy Pacific Northwest rains arrive. Leaves left on the lawn into December become compacted under wet conditions, making them much harder to remove and increasing the risk of moss growth."
  },
  {
    q: "Do You Haul All the Debris Away After Cleanup?",
    a: "Yes. Everything we remove is loaded and hauled completely off your property. We do not leave piles at the curb or push debris into corners. Complete debris removal is included as part of the cleanup service."
  },
  {
    q: "Do You Offer One-Time and Recurring Property Cleanup Services?",
    a: "Yes. We provide both one-time cleanup services and recurring seasonal maintenance. Many clients schedule annual spring and fall cleanups, while others choose additional visits during peak leaf season to keep their property looking its best year-round."
  }
];

// ─── Component ───────────────────────────────────────────────────────────────
export default function LandscapeDesign() {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  return (
    <>
      <Helmet>
        <title>Landscaping & Design Services | Kitsap County WA | A to Z Landscaping</title>
        <meta name="description" content="Professional landscaping and design in Kitsap County. Bush trimming, tree branch removal, mulch, bed work and full backyard design. 9 years, 1,300+ projects. Call Ryan Scott Sant." />
        <meta name="keywords" content="landscape design Kitsap County, landscaping Kitsap County, shrub trimming, tree trimming, mulch installation, backyard design, A to Z Landscaping" />
        <link rel="canonical" href="https://atozlandscapingandmore.com/services/property-cleanup" />
        <meta property="og:title" content="Landscaping & Design Services | A to Z Landscaping" />
        <meta property="og:description" content="Professional landscaping and design throughout Kitsap County, WA." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://atozlandscapingandmore.com/services/landscape-design/" />
        <meta property="og:image" content="https://atozlandscapingandmore.com/landscape-design.jpg" />
        <script type="application/ld+json">{`{"@context":"https://schema.org","@type":"LocalBusiness","name":"A to Z Landscaping & More","description":"Professional landscaping and design services in Kitsap County, WA.","url":"https://YOURDOMAIN.COM/services/landscape-design/","telephone":"+13609533878","areaServed":"Kitsap County, WA","founder":{"@type":"Person","name":"Ryan Scott Sant"}}`}</script>
      </Helmet>

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .ld { color: #1A1A18; background: #fff; line-height: 1.6; }

        /* ── HERO ── */
        .ld-hero       { position: relative; min-height: 88vh; display: flex; align-items: center; background: #162619; overflow: hidden; }
        .ld-hero-photo { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center 40%; opacity: 0.38; }
        .ld-hero-grad  { position: absolute; inset: 0; background: linear-gradient(130deg, rgba(18,38,22,.97) 0%, rgba(18,38,22,.72) 52%, rgba(18,38,22,.3) 100%); }
        .ld-hero-wave  { position: absolute; bottom: -1px; left: 0; width: 100%; height: 68px; display: block; }
        .ld-hero-inner { position: relative; z-index: 2; max-width: 1100px; margin: 0 auto; padding: 7rem 2rem 8rem; width: 100%; }
        .ld-eyebrow    { display: inline-flex; align-items: center; gap: 5px; background: rgba(196,136,58,.14); border: 1px solid rgba(196,136,58,.4); color: #C4883A; padding: 4px 13px; border-radius: 2px; font-family: 'Spartan', sans-serif; font-size: .68rem; font-weight: 700; letter-spacing: .17em; text-transform: uppercase; margin-bottom: 1.5rem; }
        .ld-h1         { font-family: 'Gothic', sans-serif; font-size: clamp(2.1rem, 5.5vw, 4rem); font-weight: 800; color: #fff; line-height: 1.1; margin-bottom: 1.25rem; max-width: 720px; }
        .ld-h1 em      { font-style: italic; color: #C4883A; }
        .ld-hero-sub   { font-family: 'Spartan', sans-serif; color: rgba(255,255,255,.74); font-size: 1.06rem; max-width: 580px; margin-bottom: 2.5rem; line-height: 1.75; }
        .ld-cta-row    { display: flex; gap: 11px; flex-wrap: wrap; align-items: center; }
        .btn-amber     { background: #C4883A; color: #fff; border: none; padding: 13px 26px; font-size: .93rem; font-weight: 700; cursor: pointer; border-radius: 2px; display: inline-flex; align-items: center; gap: 8px; font-family: 'Spartan', sans-serif; transition: background .2s; text-decoration: none; }
        .btn-amber:hover { background: #a8701f; }
        .btn-ghost     { background: transparent; color: rgba(255,255,255,.88); border: 1.5px solid rgba(255,255,255,.3); padding: 13px 26px; font-size: .93rem; font-weight: 500; cursor: pointer; border-radius: 2px; font-family: 'Spartan', sans-serif; transition: border-color .2s; }
        .btn-ghost:hover { border-color: rgba(255,255,255,.8); }

        /* ── STATS ── */
        .ld-stats      { background: #C4883A; display: grid; grid-template-columns: repeat(3,1fr); }
        .ld-stat       { padding: 1.6rem 1.25rem; text-align: center; border-right: 1px solid rgba(255,255,255,.22); }
        .ld-stat:last-child { border-right: none; }
        .ld-stat-num   { display: block; font-family: 'Gothic', sans-serif; font-size: 2.4rem; font-weight: 800; color: #fff; line-height: 1; }
        .ld-stat-label { display: block; font-family: 'Spartan', sans-serif; font-size: .69rem; font-weight: 700; letter-spacing: .11em; text-transform: uppercase; color: rgba(255,255,255,.74); margin-top: 3px; }

        /* ── SHARED ── */
        .ld-inner { max-width: 1100px; margin: 0 auto; }
        .ld-tag   { font-family: 'Spartan', sans-serif; font-size: .67rem; font-weight: 700; letter-spacing: .2em; text-transform: uppercase; color: #C4883A; margin-bottom: .6rem; display: block; }
        .ld-h2    { font-family: 'Gothic', sans-serif; font-size: clamp(1.2rem, 3.6vw, 2.5rem); font-weight: 600; color: #162619; line-height: 4.1rem; margin-bottom: .8rem; }
        .ld-lead  { font-family: 'Spartan', sans-serif; color: #576858; font-size: 1.02rem; max-width: 680px; line-height: 1.78; margin-bottom: 2.8rem; }

        /* ── ABOUT SPLIT ── */
        .ld-about-bg   { background: #fff; padding: 5.5rem 2rem; }
        .ld-about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
        .ld-about-body { font-family: 'Spartan', sans-serif; font-size: .97rem; color: #354437; line-height: 1.82; }
        .ld-about-body p + p { margin-top: 1.1rem; }
        .ld-about-img  { position: relative; border-radius: 4px; overflow: hidden; aspect-ratio: 4/3; box-shadow: 0 22px 60px rgba(0,0,0,.13); }
        .ld-about-img img { width: 100%; height: 100%; object-fit: cover; }
        .ld-about-badge { position: absolute; bottom: 1.4rem; left: 1.4rem; background: #C4883A; color: #fff; padding: .75rem 1.1rem; border-radius: 3px; }
        .ld-badge-num  { display: block; font-family: 'Gothic', sans-serif; font-size: 1.85rem; font-weight: 800; line-height: 1; }
        .ld-badge-lbl  { display: block; font-family: 'Spartan', sans-serif; font-size: .66rem; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; opacity: .85; margin-top: 2px; }

        /* ── SERVICES ── */
        .ld-svc-bg   { background: #F2F6F2; padding: 5.5rem 2rem; }
        .ld-svc-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.15rem; }
        .ld-card     { background: #fff; border: 1px solid #D5E2D5; border-left: 4px solid #D5E2D5; border-radius: 3px; padding: 1.7rem; transition: border-left-color .22s, box-shadow .22s, transform .22s; }
        .ld-card:hover { border-left-color: #C4883A; box-shadow: 0 10px 30px rgba(0,0,0,.09); transform: translateY(-3px); }
        .ld-card-ico  { width: 2.4rem; height: 2.4rem; background: #E5EDE5; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #2A5038; margin-bottom: .85rem; }
        .ld-card-name { font-family: 'Gothic', sans-serif; font-size: 2rem; font-weight: 700; color: #162619; margin-bottom: .5rem; line-height: 1.25; }
        .ld-card-desc { font-family: 'Spartan', sans-serif; font-size: .86rem; color: #576858; line-height: 1.65; }

        /* ── PROBLEMS ── */
        .ld-prob-bg { background: #162619; padding: 5.5rem 2rem; }
        .ld-prob-bg .ld-h2  { color: #fff; }
        .ld-prob-bg .ld-lead { color: rgba(255,255,255,.57); }
        .ld-pgrid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.15rem; }
        .ld-pcard { position: relative; background: rgba(255,255,255,.055); border: 1px solid rgba(255,255,255,.1); border-left: 3px solid #C4883A; border-radius: 3px; padding: 1.9rem; overflow: hidden; }
        .ld-pnum  { position: absolute; top: -6px; right: 12px; font-family: 'Gothic', sans-serif; font-size: 5.2rem; font-weight: 800; color: rgba(196,136,58,.11); line-height: 1; pointer-events: none; user-select: none; }
        .ld-ptitle { font-family: 'Gothic', sans-serif; font-size: 2rem; font-weight: 700; color: #fff; margin-bottom: .82rem; line-height: 1.27; padding-right: 2.2rem; }
        .ld-pbody  { font-family: 'Spartan', sans-serif; font-size: .86rem; color: rgba(255,255,255,.59); line-height: 1.72; }

        /* ── FOUNDATION SPLIT ── */
        .ld-found-bg   { background: #fff; padding: 5.5rem 2rem; }
        .ld-found-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
        .ld-found-img  { position: relative; border-radius: 4px; overflow: hidden; aspect-ratio: 3/4; box-shadow: 0 22px 60px rgba(0,0,0,.13); }
        .ld-found-img img { width: 100%; height: 100%; object-fit: cover; }
        .ld-found-body { font-family: 'Spartan', sans-serif; font-size: .97rem; color: #354437; line-height: 1.82; }
        .ld-found-body p + p { margin-top: 1.1rem; }

        /* ── PROCESS ── */
        .ld-proc-bg { background: #EEF3EE; padding: 5.5rem 2rem; }
        .ld-steps   { display: grid; grid-template-columns: repeat(4,1fr); gap: .7rem; margin-top: 3.2rem; position: relative; }
        .ld-steps::after { content: ''; position: absolute; top: 1.85rem; left: 8%; right: 8%; height: 1px; background: linear-gradient(90deg, #D5E2D5, #C4883A 50%, #D5E2D5); z-index: 0; }
        .ld-step       { text-align: center; position: relative; z-index: 1; padding: 0 .35rem; }
        .ld-step-dot   { width: 3.7rem; height: 3.7rem; background: #EEF3EE; border: 2px solid #C4883A; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto .9rem; font-family: 'Gothic', sans-serif; font-size: .92rem; font-weight: 700; color: #C4883A; }
        .ld-step-title { font-family: 'Gothic', sans-serif; font-size: 2.1rem; font-weight: 700; color: #162619; margin-bottom: .35rem; }
        .ld-step-body  { font-family: 'Spartan', sans-serif; font-size: .82rem; color: #576858; line-height: 1.58; }

        /* ── TRUST ── */
        .ld-trust-bg   { background: #F2F6F2; padding: 5.5rem 2rem; }
        .ld-trust-grid { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 4.2rem; align-items: center; }
        .ld-trust-body { font-family: 'Spartan', sans-serif; font-size: .97rem; color: #354437; line-height: 1.82; margin-bottom: 1.5rem; }
        .ld-trust-list { list-style: none; padding: 0; display: flex; flex-direction: column; gap: .72rem; }
        .ld-trust-item { display: flex; align-items: flex-start; gap: .7rem; font-family: 'Spartan', sans-serif; font-size: .91rem; color: #354437; line-height: 1.5; }
        .ld-chk        { width: 1.35rem; height: 1.35rem; background: #2A5038; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px; }
        .ld-trust-img  { position: relative; border-radius: 4px; overflow: hidden; aspect-ratio: 4/3; box-shadow: 0 22px 60px rgba(0,0,0,.14); }
        .ld-trust-img img { width: 100%; height: 100%; object-fit: cover; }

        /* ── FAQ ── */
        .ld-faq-bg   { background: #fff; padding: 5.5rem 2rem; }
        .ld-faq-wrap { max-width: 760px; margin: 2.8rem auto 0; border: 1px solid #D5E2D5; border-radius: 4px; overflow: hidden; }
        .ld-faq-item { border-bottom: 1px solid #D5E2D5; }
        .ld-faq-item:last-child { border-bottom: none; }
        .ld-faq-btn  { width: 100%; background: #fff; border: none; padding: 1.3rem 1.65rem; display: flex; align-items: center; justify-content: space-between; gap: .9rem; text-align: left; cursor: pointer; transition: background .15s; }
        .ld-faq-btn:hover, .ld-faq-btn.open { background: #F2F6F2; }
        .ld-faq-q    { font-family: 'Gothic', sans-serif; font-size: 1.5rem; font-weight: 600; color: #162619; line-height: 1.4; margin: 0; }
        .ld-faq-icon { flex-shrink: 0; color: #C4883A; }
        .ld-faq-ans  { background: #F2F6F2; padding: 0 1.65rem 1.3rem; font-family: 'Spartan', sans-serif; font-size: .91rem; color: #576858; line-height: 1.78; }

        /* ── CTA ── */
        .ld-cta-bg   { background: linear-gradient(138deg, #162619 0%, #2A5038 100%); padding: 5.5rem 2rem; text-align: center; }
        .ld-cta-h2   { font-family: 'Gothic', sans-serif; font-size: clamp(1.rem, 3.6vw, rem); font-weight: 700; color: #fff; line-height: 1.2; max-width: 580px; margin: 0 auto .8rem; }
        .ld-cta-sub  { font-family: 'Spartan', sans-serif; color: rgba(255,255,255,.62); font-size: 1rem; margin-bottom: 2.2rem; max-width: 440px; margin-left: auto; margin-right: auto; }
        .ld-cta-note { font-family: 'Spartan', sans-serif; margin-top: 1.25rem; font-size: .76rem; color: rgba(255,255,255,.36); letter-spacing: .04em; }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .ld-about-grid, .ld-found-grid, .ld-trust-grid { grid-template-columns: 1fr; gap: 2.4rem; }
          .ld-found-img { aspect-ratio: 4/3; }
          .ld-steps { grid-template-columns: repeat(2,1fr); }
          .ld-steps::after { display: none; }
        }
        @media (max-width: 640px) {
          .ld-stats { grid-template-columns: 1fr; }
          .ld-stat  { border-right: none; border-bottom: 1px solid rgba(255,255,255,.2); }
          .ld-stat:last-child { border-bottom: none; }
          .ld-cta-row { flex-direction: column; }
          .ld-hero-inner { padding: 5rem 1.25rem 6rem; }
        }
      `}</style>

      <main className="ld">

        {/* ── HERO ── */}
        <section className="ld-hero" aria-label="Page hero">
          <img className="ld-hero-photo"
            src="https://images.unsplash.com/photo-1558618047-f4e70e8e2df6?auto=format&fit=crop&w=1400&q=80"
            alt="Landscape design Kitsap County WA" />
          <div className="ld-hero-grad" aria-hidden="true" />
          <div className="ld-hero-inner">
            <div className="ld-eyebrow"><MapPinIcon /> Kitsap County, WA</div>
            <h1 className="ld-h1">
              Property Cleanup Services in {" "}
              <em>Kitsap County</em>
            </h1>
            <p className="ld-hero-sub">
              I have cleared a lot of Kitsap County properties in 9 years. Leaves packed into beds after a wet November. Storm branches scattered across yards overnight. Gutters so clogged with Douglas fir needles and moss they've backed up into the fascia. Whatever the Pacific Northwest leaves behind, season after season, we deal with it. Our property cleanup services cover everything from spring and fall yard work to storm response, handled by the same crew start to finish.
            </p>
          </div>
          <svg className="ld-hero-wave" viewBox="0 0 1440 68" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0,68 L0,34 C240,2 480,66 720,34 C960,2 1200,60 1440,22 L1440,68 Z" fill="#C4883A" />
          </svg>
        </section>

        {/* ── STATS ── */}
        <div className="ld-stats">
          <div className="ld-stat"><span className="ld-stat-num">9</span><span className="ld-stat-label">Years in Business</span></div>
          <div className="ld-stat"><span className="ld-stat-num">1,300+</span><span className="ld-stat-label">Projects Completed</span></div>
          <div className="ld-stat"><span className="ld-stat-num">Kitsap</span><span className="ld-stat-label">County, WA</span></div>
        </div>

        {/* ── ABOUT SPLIT ── */}
        <section className="ld-about-bg" aria-labelledby="about-h">
          <div className="ld-inner ld-about-grid">
            <div>
              
              <h2 className="ld-h2" id="about-h">Why Cleanup in Kitsap County Has to Be Done Right</h2>
              <div className="ld-about-body">
                <p>The rain runs from October through March here. That's not a minor detail. It changes when cleanup needs to happen, what gets damaged if you wait, and what a neglected property looks like by February.
Leaves sitting on a Kitsap County lawn through a wet winter don't just look bad. They mat down, hold moisture against the soil, and pull moss into the grass beneath them. Debris left sitting in beds becomes a wet habitat for slugs, rot, and mold. 
Most of the cleanup calls I get aren't from people who ignored their property on purpose. They just waited a few weeks too long, the rains hit, and suddenly a one-afternoon job turned into a half-day crew visit. Getting ahead of the season is how you keep it manageable.

</p>
              </div>
            </div>
            <div className="ld-about-img">
               <img
    src={image20}
    alt="Property Cleanup in Kitsap County"
  />
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="ld-svc-bg" aria-labelledby="svc-h">
          <div className="ld-inner">
            <span className="ld-tag">Property  Services in Kitsap County</span>
            <h2 className="ld-h2" id="svc-h">Landscaping Services in Kitsap County</h2>
            <p className="ld-lead">
                No two properties need the same combination of services. Some customers call for one specific job. Others want everything handled during a single visit. Either way, the work is planned around your property instead of forcing your property into a standard package. 
            </p>
            <div className="ld-svc-grid">
              {SERVICES.map(({ Icon, name, desc }, i) => (
                <article className="ld-card" key={i}>
                  <div className="ld-card-ico" aria-hidden="true"><Icon /></div>
                  <h3 className="ld-card-name">{name}</h3>
                  <p className="ld-card-desc">{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>


        {/* ── FOUNDATION SPLIT ── */}
        <section className="ld-found-bg" aria-labelledby="found-h">
          <div className="ld-inner ld-found-grid">
            <div className="ld-found-img">
              <img src={image2} alt="Property Cleanup" />
            </div>
            <div>
              
              <h2 className="ld-h2" id="found-h">Our Process: How Our Team Works at Your Property</h2>
              <div className="ld-found-body">
                <p> You call or text, we come out and look at the property, and you get a straight quote. No vague estimates over the phone for jobs that need eyes on them first.
One crew handles the work start to finish. Same people on your property every time. There are no subcontractors involved, nobody I haven't worked with directly. That matters for quality and it matters for accountability. If something isn't right, you're talking to the same crew that did the job.
We also set up recurring schedules, not just one-off visits. A lot of our property cleanup clients book a fall visit and a spring visit every year so their property never falls behind. Some want ongoing leaf clearing through peak season. That's easy to arrange. The goal is a property that stays in good shape, not a call you make once and forget about until things get bad again.
</p>
              </div>
            </div>
          </div>
        </section>

  {/* ───────────────── EXPERIENCE SECTION ───────────────── */}

<style>{`
/* EXPERIENCE */
.ld-experience-bg{
  background:#162619;
  padding:6rem 2rem;
}

.ld-experience-grid{
  max-width:1100px;
  margin:0 auto;
  display:grid;
  grid-template-columns:1.4fr .8fr;
  gap:60px;
  align-items:center;
}

.ld-experience-card{
  background:#fff;
  padding:55px;
  border-radius:6px;
  position:relative;
  box-shadow:0 25px 60px rgba(0,0,0,.18);
}

.ld-experience-card::before{
  content:'';
  position:absolute;
  left:0;
  top:45px;
  width:6px;
  height:90px;
  background:#C4883A;
}

.ld-exp-gold{
  color:#C4883A;
}

.ld-experience-body{
  margin-top:22px;
  color:#556755;
  font-family:'Spartan',sans-serif;
  font-size:.96rem;
  line-height:1.9;
}

.ld-founder{
  display:flex;
  align-items:center;
  gap:18px;
  margin-top:40px;
}

.ld-founder-line{
  width:55px;
  height:3px;
  background:#C4883A;
}

.ld-founder h4{
  margin:0;
  color:#162619;
  font-family:'Gothic',sans-serif;
  font-size:1.4rem;
}

.ld-founder span{
  color:#777;
  font-family:'Spartan',sans-serif;
  font-size:.82rem;
  letter-spacing:.08em;
  text-transform:uppercase;
}

.ld-exp-stats{
  display:grid;
  gap:18px;
}

.ld-exp-box{
  background:#2A5038;
  border:1px solid rgba(255,255,255,.08);
  padding:34px;
  border-radius:6px;
  text-align:center;
  transition:.3s;
}

.ld-exp-box:hover{
  transform:translateY(-5px);
  background:#355f46;
}

.ld-exp-box h3{
  margin:0;
  color:#C4883A;
  font-size:2.5rem;
  font-family:'Gothic',sans-serif;
}

.ld-exp-box span{
  display:block;
  margin-top:8px;
  color:#fff;
  font-family:'Spartan',sans-serif;
  font-size:.82rem;
  line-height:1.6;
}

@media(max-width:900px){

.ld-experience-grid{
grid-template-columns:1fr;
gap:35px;
}

.ld-experience-card{
padding:35px;
}

}
`}</style>

<section className="ld-experience-bg">

  <div className="ld-experience-grid">

    <div className="ld-experience-card">

      <span className="ld-tag">
        Why Homeowners Trust A to Z Landscaping
      </span>

      <h2 className="ld-h2">
        Over <span className="ld-exp-gold">1,300 Jobs.</span><br/>
        Here's What That Experience Means For You.
      </h2>

      <p className="ld-experience-body">
        I started <strong>A to Z Landscaping and More</strong> nine years ago.
        A large portion of those 1,300-plus projects across Kitsap County have
        been cleanup work in one form or another. We've restored neglected
        properties, handled post-storm cleanups, and helped homeowners keep
        their landscapes looking their best through every season.
      </p>

      <p className="ld-experience-body">
        Those projects have taught us that property cleanup in the Pacific
        Northwest isn't just seasonal yard work—it's year-round property
        protection. Moss never really stops growing, trees continue dropping
        debris, and rain constantly challenges your landscape.
      </p>

      <p className="ld-experience-body">
        Staying ahead of those conditions is the difference between a property
        that stays healthy, attractive, and easy to maintain and one that slowly
        begins to fall apart around the edges.
      </p>

      <div className="ld-founder">

        <div className="ld-founder-line"></div>

        <div>
          <h4>Ryan Scott Sant</h4>
          <span>Owner • A to Z Landscaping & More</span>
        </div>

      </div>

    </div>

    <div className="ld-exp-stats">

      <div className="ld-exp-box">
        <h3>9+</h3>
        <span>Years Serving Kitsap County</span>
      </div>

      <div className="ld-exp-box">
        <h3>1,300+</h3>
        <span>Projects Completed</span>
      </div>

      <div className="ld-exp-box">
        <h3>365</h3>
        <span>Days Working In The Pacific Northwest Climate</span>
      </div>

      <div className="ld-exp-box">
        <h3>100%</h3>
        <span>Locally Owned & Operated</span>
      </div>

    </div>

  </div>

</section>             
        
        {/* ── FAQ ── */}
        <section className="ld-faq-bg" aria-labelledby="faq-h">
          <div className="ld-inner" style={{ textAlign: "center" }}>
            <span className="ld-tag" style={{ display: "block" }}>Common Questions</span>
            <h2 className="ld-h2" id="faq-h" style={{ maxWidth: 560, margin: "0 auto .7rem" }}>Frequently Asked Questions</h2>
          </div>
          <div className="ld-faq-wrap">
            {FAQS.map((f, i) => (
              <div className="ld-faq-item" key={i}>
                <button className={`ld-faq-btn${openFaq === i ? " open" : ""}`} onClick={() => toggleFaq(i)} aria-expanded={openFaq === i}>
                  <h3 className="ld-faq-q">{f.q}</h3>
                  <span className="ld-faq-icon"><ChevronIcon open={openFaq === i} /></span>
                </button>
                {openFaq === i && <div className="ld-faq-ans">{f.a}</div>}
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="ld-cta-bg" aria-label="Call to action">
          <span className="ld-tag" style={{ display: "block", marginBottom: ".7rem", color: "rgba(196,136,58,.8)" }}>Ready to Get Started?</span>
          <h2 className="ld-cta-h2">Request a Free Property Cleanup Services Estimate in Kitsap County</h2>
          <p className="ld-cta-sub">Tell us what isn't working. We will help you sort the priorities, define the scope, and choose a sensible next step.</p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button className="btn-amber" style={{ fontSize: ".97rem", padding: "15px 36px" }}
              onClick={() => (window.location.href = "tel:+13609533878")}>
              <PhoneIcon size={17} /> Call or Text Ryan Now
            </button>
          </div>
          <p className="ld-cta-note">A to Z Landscaping & More &nbsp;·&nbsp; Ryan Scott Sant &nbsp;·&nbsp; Kitsap County, WA</p>
        </section>

      </main>
    </>
  );
}