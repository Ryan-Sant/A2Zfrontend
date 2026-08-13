import { useState } from "react";
import { Helmet } from "react-helmet";
import "../../css/style.css";
import image2 from "../../media/img (2).jpg";
import image8 from "../../media/img (8).jpg";
import image7 from "../../media/img (7).jpg";

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
    name: "Bush & Shrub Trimming",
    desc: "Shrubs can frame a home, soften hard edges, and provide privacy. Once too dense or uneven, they block light, narrow walkways, cover windows, and make beds look neglected. We restore a suitable size and shape while respecting natural growth — clearance, balance, nearby plants, and the role each shrub plays in the larger design.",
    href: "/services/landscape-design",
  },
  {
    Icon: TreeIcon,
    name: "Tree Trimming & Branch Removal",
    desc: "Low, damaged, or intrusive branches can interfere with paths, views, rooflines, and other plantings. Selective trimming and branch removal opens crowded areas and helps the rest of the landscape read more clearly. The scope depends on the tree, branch location, access, and surrounding property.",
    href: "/services/landscape-design",
  },
  {
    Icon: LayersIcon,
    name: "Mulch & Bark Dust",
    desc: "Mulch and bark dust give planting beds a defined finish while helping cover exposed soil. Material choice, depth, bed preparation, and edge condition all affect the final appearance. We prepare the area first — fresh material is not a way to hide weeds, debris, or poor bed shape.",
    href: "/services/landscape-design",
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
  { q: "What Does a Landscape Designer Do?",                    a: "A landscape designer plans how plants, lawn, beds, paths, and open areas work together based on your goals, property conditions, appearance preferences, and maintenance expectations." },
  { q: "What Do Landscape Design Services Include?",             a: "Landscape design services may include site review, layout planning, plant and bed decisions, trimming priorities, material choices, and a practical sequence for completing the work." },
  { q: "What Is Included in Residential Landscape Design?",      a: "Residential landscape design organizes planting, open space, privacy, access, views, and maintenance around how your household uses the property each day and wants it to feel." },
  { q: "Can You Handle Landscape Design and Installation?",      a: "Yes. A to Z Landscaping and More connects landscape design and installation, allowing the approved direction to guide trimming, bed work, material placement, and related improvements." },
  { q: "How Should I Prepare for a Backyard Design Consultation?", a: "Think about how you use the yard, what bothers you, what should remain, and which results matter most. Photos and inspiration help, but are not required." },
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
        <link rel="canonical" href="https://atozlandscapingandmore.com/services/landscape-design" />
        <meta property="og:title" content="Landscaping & Design Services | A to Z Landscaping" />
        <meta property="og:description" content="Professional landscaping and design throughout Kitsap County, WA." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://atozlandscapingandmore.com/landscape-design/" />
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
              Landscaping & Design That Gives Your Property{" "}
              <em>a Clear Purpose</em>
            </h1>
            <p className="ld-hero-sub">
              A yard can look good and still feel unfinished. Overgrown shrubs, crowded walkways, and planting beds without clear edges make the property harder to manage without giving it a finished look. We bring those pieces into one practical plan.
            </p>
            <div className="ld-cta-row">
              <a href="tel:360 953 3878" className="btn-amber"><PhoneIcon size={16} /> Request an Estimate</a>
              <button className="btn-ghost">Our Services ↓</button>
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
              <span className="ld-tag">About A to Z Landscaping & More</span>
              <h2 className="ld-h2" id="about-h">About A to Z Landscaping and More</h2>
              <div className="ld-about-body">
                <p>I’m Ryan Scott Sant, the owner behind A to Z Landscaping and More. I bring nine years of landscaping experience to the work, and the company has completed 1,300 projects in Kitsap County. That experience has shown me how quickly a property becomes harder to manage when work is done out of order. Trimming too soon or adding material before reshaping a bed can limit the final result.
I start by listening to what is bothering you and what you want the property to do better. From there, I help shape a practical scope that fits the space. When a crew is involved, we carry out the agreed work as a company, with the design direction guiding each step.
</p>
              </div>
            </div>
            <div className="ld-about-img">
              <img src={image7}
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
            <span className="ld-tag">Landscaping Services in Kitsap County</span>
            <h2 className="ld-h2" id="svc-h">Landscaping & Design Services We Provide</h2>
            <p className="ld-lead">
              Each service can stand alone, but stronger results often come from seeing how the parts affect one another. We do not begin with a preset style or push features because they are popular.
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

        {/* ── PROBLEMS ── */}
        <section className="ld-prob-bg" aria-labelledby="prob-h">
          <div className="ld-inner">
            <span className="ld-tag" style={{ color: "#C4883A" }}>Common Kitsap County Problems</span>
            <h2 className="ld-h2" id="prob-h">What We See on Most Properties Before We Start</h2>
            <p className="ld-lead">
              A new bed, trimmed shrub, or layer of bark may look better briefly. But isolated changes done in the wrong order create more work later — and look fine alone while competing with everything else when you step back and look at the full yard.
            </p>
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

        {/* ── FOUNDATION SPLIT ── */}
        <section className="ld-found-bg" aria-labelledby="found-h">
          <div className="ld-inner ld-found-grid">
            <div className="ld-found-img">
              <img src={image2}
                alt="Well-designed planting bed in Kitsap County" />
            </div>
            <div>
              <span className="ld-tag">The Foundation of Good Landscaping</span>
              <h2 className="ld-h2" id="found-h">Good Landscaping Is Not Built From Random Upgrades</h2>
              <div className="ld-found-body">
                <p>The first question is simple: how do you want to use the space? You may want a clearer entrance, more room for children or pets, defined planting areas, or a backyard design that supports quiet evenings and weekend gatherings.</p>
                <p>Those decisions guide the shape, placement, and order of the work. A practical landscaping design also accounts for what you do not want — fewer high-maintenance areas, or overgrowth reduced first. The plan should match your priorities, not a trend.</p>
                <p>We look at what you already have, where the problems are, and how each change affects the next one. The scope is shaped around the property rather than a generic package. That helps prevent disconnected improvements that look fine alone but compete with each other when viewed across the yard.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="ld-proc-bg" aria-labelledby="proc-h">
          <div className="ld-inner">
            <span className="ld-tag">From Planning to Planting</span>
            <h2 className="ld-h2" id="proc-h">How We Work — Start to Finish</h2>
            <p className="ld-lead">Every job starts with the property and your priorities — not a preset package. The design direction guides each step from first conversation to finished result.</p>
            <div className="ld-steps">
              {STEPS.map((s, i) => (
                <div className="ld-step" key={i}>
                  <div className="ld-step-dot">{s.num}</div>
                  <div className="ld-step-title">{s.title}</div>
                  <p className="ld-step-body">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TRUST ── */}
        <section className="ld-trust-bg" aria-labelledby="trust-h">
          <div className="ld-trust-grid">
            <div>
              <span className="ld-tag">Why A to Z Landscaping & More</span>
              <h2 className="ld-h2" id="trust-h">Partner With A to Z Landscaping for a Better Yard</h2>
              <p className="ld-trust-body">
                You may need professional landscape and design help when the yard feels crowded, disconnected, difficult to maintain, or poorly suited to the way you live. You do not need to rebuild the entire property. Sometimes the right answer is a focused change that clears one area and gives it a stronger purpose.
              </p>
              <ul className="ld-trust-list">
                {TRUST_POINTS.map((item, i) => (
                  <li className="ld-trust-item" key={i}>
                    <span className="ld-chk" aria-hidden="true"><CheckIcon /></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="ld-trust-img">
              <img
  src={image8}
  alt="Finished landscape design in Kitsap County by A to Z Landscaping"
/>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="ld-faq-bg" aria-labelledby="faq-h">
          <div className="ld-inner" style={{ textAlign: "center" }}>
            <span className="ld-tag" style={{ display: "block" }}>Common Questions</span>
            <h2 className="ld-h2" id="faq-h" style={{ maxWidth: 560, margin: "0 auto .7rem" }}>Frequently Asked Questions</h2>
            <p className="ld-lead" style={{ margin: "0 auto" }}>Straight answers about landscape design in Kitsap County.</p>
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
          <h2 className="ld-cta-h2">Request a Free Landscape Design Estimate in Kitsap County</h2>
          <p className="ld-cta-sub">Tell us what isn't working. We will help you sort the priorities, define the scope, and choose a sensible next step.</p>
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