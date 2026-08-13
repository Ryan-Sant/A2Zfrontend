import { useState } from "react";
import { Helmet } from "react-helmet";
import "../../css/style.css";
import image13 from "../../media/img (13).jpg";
import image17 from "../../media/img (17).jpg";
import image24 from "../../media/img (24).jpg";

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
const WallIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="15" width="5" height="6" />
    <rect x="8" y="11" width="5" height="10" />
    <rect x="13" y="13" width="5" height="8" />
    <rect x="18" y="9" width="3" height="12" />
  </svg>
);

const PatioIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="4" y="4" width="16" height="16" />
    <path d="M4 12h16M12 4v16" />
  </svg>
);

const DrivewayIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M8 3L5 21" />
    <path d="M16 3l3 18" />
    <path d="M10 8h4M9 13h6M8 18h8" />
  </svg>
);

const DrainageIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2C9 6 7 9 7 12a5 5 0 0010 0c0-3-2-6-5-10z" />
    <path d="M5 21h14" />
  </svg>
);


const SERVICES = [
  {
    Icon: WallIcon,
    name: "Retaining Walls & Rock Walls",
    desc: "Retaining walls create usable space, manage grade changes, and help control soil movement. Rock walls provide natural structural support while improving the appearance and function of your landscape.",
    href: "/services/hardscaping-outdoor-construction",
  },
  {
    Icon: PatioIcon,
    name: "Pathways, Patios & Paver Patios",
    desc: "Beautiful, functional pathways and patios built with proper base preparation, edge support, drainage, and long-term durability for everyday outdoor living.",
    href: "/services/hardscaping-outdoor-construction",
  },
  {
    Icon: DrivewayIcon,
    name: "Rock Driveways & Plate Compacting",
    desc: "Driveways begin with grading and compaction—not simply adding gravel. We shape, compact, and prepare surfaces for long-lasting performance.",
    href: "/services/hardscaping-outdoor-construction",
  },
  {
    Icon: DrainageIcon,
    name: "Drainage Solutions & Custom Fire Pits",
    desc: "We solve drainage problems by directing water where it belongs and build custom fire pits designed for safety, comfort, and outdoor enjoyment.",
    href: "/services/hardscaping-outdoor-construction",
  },
];

const PROBLEMS = [
  {
    title: "Site Conversation and Review",
    body: "You show me the area and explain what should change. I assess the grade, water movement, access, existing conditions, and related features before defining a practical scope.",
  },
  {
    title: "Ground Preparation",
    body: "Excavation, base material, grading, drainage preparation, and compaction happen before the visible finish. This stage carries much of the long-term performance of hardscape services.",
  },
  {
    title: "Construction and Walkthrough",
    body: "My crew and I install the planned feature, check transitions and drainage direction, then review the completed area with you. You can ask about use, settling, cleaning, or future work.",
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
    q: "What Do Hardscaping Services Include?",
    a: "Hardscaping services cover built outdoor features such as patios, pathways, retaining walls, rock walls, gravel driveways, drainage work, fire pits, base preparation, and surrounding hardscape landscaping that improves the function and appearance of your outdoor space."
  },

  {
    q: "How Should I Compare Hardscape Contractors?",
    a: "Compare hardscape contractors by asking about site assessment, drainage planning, base depth, compaction methods, material access, project scope, permits, communication, and who will manage decisions throughout the construction process."
  },

  {
    q: "What Should I Ask Backyard Patio Contractors?",
    a: "Ask backyard patio contractors how they plan the grade, base preparation, edge support, drainage, water runoff, access, transitions, material quantities, cleanup, and future maintenance for your patio."
  },

  {
    q: "Do I Need a Patio Company or Patio Cover Contractors?",
    a: "A patio company builds the ground surface, foundation, and base for your patio. Patio cover contractors install overhead structures, so determine whether your project requires one service or coordinated work from both."
  },

  {
    q: "What Does an Outdoor Patio Contractor Check Before Building?",
    a: "An outdoor patio contractor evaluates the intended use of the space, dimensions, slope, drainage direction, soil conditions, access, base requirements, nearby elevations, edge support, underground utilities, and any local permit requirements before construction begins."
  },
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
        <link rel="canonical" href="https://atozlandscapingandmore.com/services/hardscaping" />
        <meta property="og:title" content="Landscaping & Design Services | A to Z Landscaping" />
        <meta property="og:description" content="Professional landscaping and design throughout Kitsap County, WA." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://atozlandscapingandmore.com/services/hardscaping/" />
        <meta property="og:image" content="https://atozlandscapingandmore.com/images/hardscaping.jpg" />
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
        .ld-hero-inner { position: relative; z-index: 2; max-width: 1200px; margin: 0 auto; padding: 7rem 2rem 8rem; width: 100%; }
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
        .ld-h2    { font-family: 'Gothic', sans-serif; font-size: clamp(1.2rem, 3.6vw, 2.5rem); font-weight: 600; color: #162619; line-height: 4.3rem; margin-bottom: .8rem; }
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
        .ld-cta-bg   { background: linear-gradient(138deg, #162619 0%, #2A5038 100%); padding: 4.5rem 2rem; text-align: center; }
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
              Hardscaping & Outdoor Construction{" "}
              <em>in Kitsap County</em>
            </h1>
            <p className="ld-hero-sub">
A to Z Landscaping and More builds outdoor features that give your property better structure, movement, and purpose. Our hardscaping and outdoor construction services include retaining walls, rock walls, pathways, patios and paver patios, rock driveways, drainage solutions, plate compacting, and custom fire pits. A yard can look open and still be difficult to use. Slopes block access. Mud crosses walking routes. Water settles where a patio should go. Loose rock shifts under tires.
I’m Ryan Scott Sant. Tell me what is not working and how you want to use the space. I will help you identify a sensible starting point and define the work before construction begins.
            </p>
            <div className="ld-cta-row">
              <a href="tel:360 953 3878" className="btn-amber"><PhoneIcon size={16} /> Request an Estimate</a>
            </div>
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
              
              <h2 className="ld-h2" id="about-h">Why Choose Us for Hardscape Work in Kitsap County?</h2>
              <div className="ld-about-body">
                <p>When comparing hardscaping companies, do not stop at photos and material names. Ask how the base will be prepared, how drainage will be handled, what supports the edges, and what the estimate includes.
Some hardscape contractors focus on the visible feature without explaining the site work beneath it. I start with the problem, then match the construction to the grade, use, access, and surrounding yard.
Whether a provider is called a hardscape contractor, hardscaping contractor, or hardscape company, accountability should be easy to find. You should know who makes decisions, what the work covers, and how concerns are handled.
</p>
              </div>
            </div>
            <div className="ld-about-img">
              <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80"
                alt="Ryan Scott Sant A to Z Landscaping Kitsap County" />
              <div className="ld-about-badge">
                <strong className="ld-badge-num">1,300+</strong>
                <span className="ld-badge-lbl">Projects Completed</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="ld-svc-bg" aria-labelledby="svc-h">
          <div className="ld-inner">
            <span className="ld-tag">Hardscaping Services in Kitsap County</span>
            <h2 className="ld-h2" id="svc-h">Hardscaping Services for Structure, Access, and Outdoor Living</h2>
            
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
             {/* ── ABOUT SPLIT ── */}
        <section className="ld-about-bg" aria-labelledby="about-h">
          <div className="ld-inner ld-about-grid">
            <div>
              
              <h2 className="ld-h2" id="about-h">Build Around the Way You Use Your Property</h2>
              <div className="ld-about-body">
                <p> Good hardscape landscaping involves more than placing stone or spreading gravel. The finished feature has to work with the grade, water movement, access, nearby planting, and daily use of the property.
Perhaps you need a stable route from the driveway to the backyard. Your patio may collect water, or the gravel drive may develop ruts after every quick repair. These problems often connect. Treating only the surface can leave the cause untouched.
My crew and I look at the job as part of the whole yard. That helps prevent a new wall, path, patio, or drive from creating another problem beside it.

</p>
              </div>
            </div>
            <div className="ld-about-img">
              <img src={image17}
                alt="Ryan Scott Sant A to Z Landscaping Kitsap County" />
            </div>
          </div>
        </section>

        {/* ── PROBLEMS ── */}
        <section className="ld-prob-bg" aria-labelledby="prob-h">
          <div className="ld-inner">
            
            <h2 className="ld-h2" id="prob-h">How We Move From an Idea to a Finished Space</h2>
        
            <div className="ld-pgrid">
              {PROBLEMS.map((p, i) => (
                <div className="ld-pcard" key={i}>
                  <div className="ld-pnum" aria-hidden="true">0{i + 1}</div>
                  <h3 className="ld-ptitle">{p.title}</h3>
                  <p className="ld-pbody">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

              {/* ── ABOUT SPLIT ── */}
        <section className="ld-about-bg" aria-labelledby="about-h">
          <div className="ld-inner ld-about-grid">
            <div>
              
              <h2 className="ld-h2" id="about-h">What I Check Before Outdoor Construction Begins</h2>
              <div className="ld-about-body">
                <p> The first visit is about more than measurements. I look at slope changes, water marks, soft ground, existing edges, material access, and the way people move through the property. We also discuss intended use, preferred materials, and future work that could affect the area.
That review helps separate a surface repair from a base problem. It can also show when drainage work should happen before a patio, pathway, wall, or rock driveway is installed.
Kitsap County may review projects based on added hard surface, disturbed ground, wall conditions, and site location. Those questions should be checked before the build, not after materials arrive.


</p>
              </div>
            </div>
            <div className="ld-about-img">
             <img
  src={image24}
  alt="Hardscaping and outdoor construction project in Kitsap County"
/>
            </div>
          </div>
        </section>

        {/* ── FOUNDATION SPLIT ── */}
        <section className="ld-found-bg" aria-labelledby="found-h">
          <div className="ld-inner ld-found-grid">
            <div className="ld-found-img">

<img src={image13}
                alt="Well-designed planting bed in Kitsap County" />
            </div>
            <div>
              <h2 className="ld-h2" id="found-h">Good Landscaping Is Not Built From Random Upgrades</h2>
              <div className="ld-found-body">
                <p>Color and pattern matter, but site fit comes first. A paver can look attractive and still fail over a weak base. A rock driveway can appear level while sending runoff toward the wrong place. A wall can look solid while trapped water builds pressure behind it.
This is where experienced hardscaping contractors earn their place. Material choice, excavation, base preparation, compaction, edge support, and drainage must work as one system. When comparing hardscaping options, begin with function. Decide what the area needs to carry, hold, drain, connect, or support. Then choose a finish that suits the property.
</p>
            
              </div>
            </div>
          </div>
        </section>




        {/* ── FAQ ── */}
        <section className="ld-faq-bg" aria-labelledby="faq-h">
          <div className="ld-inner" style={{ textAlign: "center" }}>
            <span className="ld-tag" style={{ display: "block" }}>Common Questions</span>
            <h2 className="ld-h2" id="faq-h" style={{ maxWidth: 560, margin: "0 auto .7rem" }}>Frequently Asked Questions</h2>
            <p className="ld-lead" style={{ margin: "0 auto" }}>Straight answers about Hardscaping design in Kitsap County.</p>
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
          <h2 className="ld-cta-h2">Start With a Clear Look at the Site</h2>
          <p className="ld-cta-sub">You do not need to know the exact wall system, paver pattern, or drainage method before reaching out. Start with the part of the property that is difficult to use, unstable, muddy, uneven, or unfinished. I will help you separate the visible issue from the construction decisions underneath it. Then we can define a practical scope for hardscaping and outdoor construction in Kitsap County.</p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button className="btn-amber" style={{ fontSize: ".97rem", padding: "15px 36px" }}
              onClick={() => (window.location.href = "tel:360 953 3878")}>
              <PhoneIcon size={17} /> Call or Text Ryan Now
            </button>
          </div>
          <p className="ld-cta-note">A to Z Landscaping & More &nbsp;·&nbsp; Ryan Scott Sant &nbsp;·&nbsp; Kitsap County, WA</p>
        </section>

      </main>
    </>
  );
}