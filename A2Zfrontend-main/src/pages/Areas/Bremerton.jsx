import { useState } from "react";
import { Helmet } from "react-helmet";
import "../../css/style.css";
import image8 from "../../media/img (8).jpg";
import image9 from "../../media/img (9).jpg";
import image10 from "../../media/img (10).jpg";

const PhoneIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.5 12c-.86-2.65-1.68-5.82-3.07-8.63A2 2 0 013.44 1.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.91a16 16 0 006.06 6.06l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
);
const MapPinIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
    <circle cx="12" cy="9" r="2.5"/>
  </svg>
);
const ChevronIcon = ({ open }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    style={{ transition:"transform 0.25s ease", transform: open ? "rotate(180deg)" : "rotate(0deg)", flexShrink:0 }}>
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);
const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);
const LeafIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 22c1.25-.987 2.27-1.975 3.9-2.975C9 17.5 12 17.5 15 19.5c3 2 4 2 6 .5M2 22s0-20 20-16"/>
  </svg>
);
const TreeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22v-7"/><path d="M9 9l3-7 3 7"/><path d="M5 13l7-4 7 4"/><path d="M3 17l9-5 9 5"/>
  </svg>
);
const HammerIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 12l-8.5 8.5a2.12 2.12 0 01-3-3L12 9"/><path d="M17.64 15L22 10.64"/><path d="M20.91 11.7l-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 00-3.94-1.64H9l.92.82A6.18 6.18 0 0112 8.4v1.56l2 2h2.47l2.26 1.91z"/>
  </svg>
);
const CleanIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6"/><path d="M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
  </svg>
);

const SERVICES = [
  { Icon: LeafIcon,   name: "Lawn Care & Maintenance",            desc: "If your lawn looks patchy by March, moss is usually winning. We handle mowing, edging, residential lawn care maintenance, fertilization timed for PNW soil cycles, aeration, weed control, and overseeding for thin or moss-damaged turf. I have worked on Bremerton lawns for 9 years. Timing matters. Fertilizing too early or too late in our wet climate makes things worse, not better.", href: "/services/lawn-care" },
  { Icon: TreeIcon,   name: "Landscaping & Design",               desc: "A backyard design doesn't just need to look right on paper. It has to work with Bremerton's slopes, drainage patterns, and shade from big-leaf maples and Douglas firs. We do full landscape design services and installation for residential properties across the area. From garden beds and new lawn installation to complete backyard builds, we design around what your property needs, not a generic template.", href: "/services/landscape-design" },
  { Icon: HammerIcon, name: "Hardscaping & Outdoor Construction",  desc: "Bremerton's hillside properties and shifting clay soil mean retaining walls crack and patios settle wrong if the build isn't solid from the start. We build hardscaping designed for Pacific Northwest ground conditions: retaining walls, paver patio installation, garden stepping stones, walkway pavers, rock walls, and drainage solutions. Proper base prep and grade work come standard on every job.", href: "/services/hardscaping-outdoor-construction" },
  { Icon: CleanIcon,  name: "Property Cleanup Services",           desc: "Bremerton winters leave yards rough. Storm debris, dead branches from Douglas firs, leaf buildup, overgrown beds. And if you are moving in after a long rental period or heading out on a military transfer, the property needs a full reset. We handle spring and fall cleanups, yard raking, tree trimming, bark and mulch installs, pressure washing, and one-time cleanup for any size job.", href: "/services/property-cleanup" },
];

const PROBLEMS = [
  { title: "Moss Is the Major Concern",                   body: "It arrives every October when the rains return and spreads fast on lawns with poor drainage, low soil pH, or heavy shade from Douglas firs and big-leaf maples. Most yards I see here have at least two of those conditions. Killing surface moss without fixing the drainage underneath just resets the clock for the following October." },
  { title: "Drainage Problem Caused by Clay Soil",        body: "Clay soil holds water during wet months, leaving standing water, soggy patches, and mud paths where grass should be. Come July, that same clay bakes hard and repels water at the surface. Grass thins out. Moss finds another foothold come fall." },
  { title: "Hillside Properties Face Different Problems",  body: "Hillside properties, common through West Bremerton and Tracyton, face their own set of problems. Slopes without proper retaining walls or landscape drainage solutions erode over time. Patios settle. Retaining walls built without the right base work eventually give way under wet winter soil pressing in from behind." },
];

const TRUST_POINTS = [
 
];

const FAQS = [
  { q: "How Do You Get Rid of Moss in Your Bremerton Lawn?",             a: "Fix drainage and soil pH first. Moss returns every wet season if compaction, shade, or low pH go unresolved. Iron sulfate treats existing moss. Lime and aeration fix root causes." },
  { q: "What Lawn Care Services Do You Offer in Bremerton, WA?",         a: "A to Z Landscaping & More provides mowing, edging, fertilization, aeration, weed control, overseeding, and new lawn installation, all timed for Bremerton's Pacific Northwest climate and clay soil conditions." },
  { q: "Do You Offer Free Landscaping Estimates in Bremerton?",          a: "Yes. Call or text Ryan Sant directly for a free estimate. I will visit your Bremerton property before quoting because an accurate price requires seeing the site in person." },
  { q: "When Is the Best Time to Fertilize a Lawn in Bremerton?",        a: "Fall, late September through October, is best for Bremerton lawns. Pacific Northwest wet winters and clay soil make late-season fertilization more effective than the spring timing most national guides recommend." },
  { q: "Can You Install Retaining Walls and Paver Patios in Bremerton?", a: "Yes. A to Z Landscaping & More builds retaining walls, paver patios, walkways, stepping stones, and drainage systems throughout Bremerton with proper base prep for Pacific Northwest ground conditions." },
];

const SCHEMA_LOCAL_BUSINESS = JSON.stringify({
  "@context":"https://schema.org","@type":"LocalBusiness",
  "name":"A to Z Landscaping & More",
  "description":"Professional landscaping, lawn care, hardscaping, and property cleanup in Bremerton, WA. 9 years, 1,300+ projects. Ryan Scott Sant.",
  "url":"https://atozlandscapingandmore.com/areas/bremerton",
  "telephone":"+13609533878",
  "founder":{"@type":"Person","name":"Ryan Scott Sant"},
  "areaServed":{"@type":"City","name":"Bremerton","containedInPlace":{"@type":"State","name":"Washington"}},
  "geo":{"@type":"GeoCoordinates","latitude":"47.5673","longitude":"-122.6329"},
  "hasOfferCatalog":{"@type":"OfferCatalog","name":"Landscaping Services in Bremerton, WA",
    "itemListElement":[
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Lawn Care & Maintenance"}},
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Landscaping & Design"}},
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Hardscaping & Outdoor Construction"}},
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Property Cleanup Services"}}
    ]}
});

const SCHEMA_FAQ = JSON.stringify({
  "@context":"https://schema.org","@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"How Do You Get Rid of Moss in Your Bremerton Lawn?","acceptedAnswer":{"@type":"Answer","text":"Fix drainage and soil pH first. Moss returns every wet season if compaction, shade, or low pH go unresolved. Iron sulfate treats existing moss. Lime and aeration fix root causes."}},
    {"@type":"Question","name":"What Lawn Care Services Do You Offer in Bremerton, WA?","acceptedAnswer":{"@type":"Answer","text":"A to Z Landscaping & More provides mowing, edging, fertilization, aeration, weed control, overseeding, and new lawn installation, all timed for Bremerton's Pacific Northwest climate and clay soil conditions."}},
    {"@type":"Question","name":"Do You Offer Free Landscaping Estimates in Bremerton?","acceptedAnswer":{"@type":"Answer","text":"Yes. Call or text Ryan Sant directly for a free estimate. I will visit your Bremerton property before quoting because an accurate price requires seeing the site in person."}},
    {"@type":"Question","name":"When Is the Best Time to Fertilize a Lawn in Bremerton?","acceptedAnswer":{"@type":"Answer","text":"Fall, late September through October, is best for Bremerton lawns. Pacific Northwest wet winters and clay soil make late-season fertilization more effective than the spring timing most national guides recommend."}},
    {"@type":"Question","name":"Can You Install Retaining Walls and Paver Patios in Bremerton?","acceptedAnswer":{"@type":"Answer","text":"Yes. A to Z Landscaping & More builds retaining walls, paver patios, walkways, stepping stones, and drainage systems throughout Bremerton with proper base prep for Pacific Northwest ground conditions."}}
  ]
});

export default function Bremerton() {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  return (
    <>
      <Helmet>
        <title>Landscaping & Lawn Care in Bremerton, WA | A to Z Landscaping</title>
        <meta name="description" content="Professional landscaping, lawn care, hardscaping, and property cleanup in Bremerton, WA. Ryan Scott Sant — 9 years, 1,300+ projects in Kitsap County. Free estimates." />
        <meta name="keywords" content="landscaping Bremerton WA, lawn care Bremerton, hardscaping Bremerton, property cleanup Bremerton, retaining walls Bremerton, A to Z Landscaping Bremerton" />
        <link rel="canonical" href="https://atozlandscapingandmore.com/areas/bremerton" />
        <meta property="og:title"       content="Landscaping & Lawn Care in Bremerton, WA | A to Z Landscaping" />
        <meta property="og:description" content="Ryan Scott Sant — 9 years, 1,300+ projects in Kitsap County. Lawn care, landscaping, hardscaping, and property cleanup throughout Bremerton." />
        <meta property="og:type"        content="website" />
        <meta property="og:url"         content="https://atozlandscapingandmore.com/areas/bremerton" />
        <meta property="og:image"       content="https://atozlandscapingandmore.com/images/bremerton.jpg" />
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content="Landscaping & Lawn Care in Bremerton, WA | A to Z Landscaping" />
        <meta name="twitter:description" content="Professional landscaping and lawn care in Bremerton, WA. Free estimates. Call Ryan Sant." />
        <meta name="twitter:image"       content="https://atozlandscapingandmore.com/images/bremerton.jpg" />
        <script type="application/ld+json">{SCHEMA_LOCAL_BUSINESS}</script>
        <script type="application/ld+json">{SCHEMA_FAQ}</script>
      </Helmet>

      <style>{`
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
        .br{color:#1c1c1a;background:#fff;line-height:1.6;}

        /* HERO */
        .br-hero{position:relative;min-height:92vh;display:flex;align-items:center;background:#0f1f12;overflow:hidden;}
        .br-hero-photo{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 45%;opacity:0.32;}
        .br-hero-grad{position:absolute;inset:0;background:linear-gradient(130deg,rgba(10,28,14,.98) 0%,rgba(10,28,14,.82) 45%,rgba(10,28,14,.2) 100%);}
        .br-hero-wave{position:absolute;bottom:-1px;left:0;width:100%;height:80px;display:block;}
        .br-hero-inner{position:relative;z-index:2;max-width:1140px;margin:0 auto;padding:8rem 2rem 10rem;width:100%;}
        .br-eyebrow{display:inline-flex;align-items:center;gap:7px;background:rgba(196,136,58,.15);border:1px solid rgba(196,136,58,.45);color:#C4883A;padding:6px 16px;border-radius:100px;font-family:'Spartan',sans-serif;font-size:.72rem;font-weight:700;letter-spacing:.2em;text-transform:uppercase;margin-bottom:1.8rem;}
        .br-h1{font-family:'Gothic',sans-serif;font-size:clamp(2.4rem,6vw,4.4rem);font-weight:800;color:#fff;line-height:1.06;margin-bottom:1.5rem;max-width:760px;}
        .br-h1 em{font-style:italic;color:#C4883A;}
        .br-hero-sub{font-family:'Spartan',sans-serif;color:rgba(255,255,255,.78);font-size:1.12rem;max-width:580px;margin-bottom:2.8rem;line-height:1.85;font-weight:400;}
        .br-cta-row{display:flex;gap:14px;flex-wrap:wrap;align-items:center;}
        .btn-amber{background:#C4883A;color:#fff;border:none;padding:15px 30px;font-size:1rem;font-weight:700;cursor:pointer;border-radius:3px;display:inline-flex;align-items:center;gap:9px;font-family:'Spartan',sans-serif;transition:background .2s,transform .15s;text-decoration:none;letter-spacing:.01em;}
        .btn-amber:hover{background:#a8701f;transform:translateY(-1px);}
        .btn-ghost{background:rgba(255,255,255,.08);color:rgba(255,255,255,.92);border:1.5px solid rgba(255,255,255,.35);padding:15px 30px;font-size:1rem;font-weight:500;cursor:pointer;border-radius:3px;font-family:'Spartan',sans-serif;transition:all .2s;text-decoration:none;}
        .btn-ghost:hover{background:rgba(255,255,255,.14);border-color:rgba(255,255,255,.7);}

        /* STATS */
        .br-stats{background:#C4883A;display:grid;grid-template-columns:repeat(4,1fr);}
        .br-stat{padding:1.8rem 1.2rem;text-align:center;border-right:1px solid rgba(255,255,255,.25);}
        .br-stat:last-child{border-right:none;}
        .br-stat-num{display:block;font-family:'Gothic',sans-serif;font-size:2.4rem;font-weight:800;color:#fff;line-height:1;}
        .br-stat-label{display:block;font-family:'Spartan',sans-serif;font-size:.7rem;font-weight:600;letter-spacing:.13em;text-transform:uppercase;color:rgba(255,255,255,.78);margin-top:5px;}

        /* LAYOUT */
        .br-wrap{max-width:1140px;margin:0 auto;padding:0 2rem;}
        .br-tag{font-family:'Spartan',sans-serif;font-size:.7rem;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:#C4883A;margin-bottom:.7rem;display:block;}
        .br-h2{font-family:'Gothic',sans-serif;font-size:clamp(1.2rem,4vw,2.8rem);font-weight:600;color:#162619;line-height:4rem;margin-bottom:1rem;}
        .br-lead{font-family:'Spartan',sans-serif;color:#4a5c4b;font-size:1.08rem;max-width:700px;line-height:1.85;margin-bottom:3rem;font-weight:400;}
        .br-body{font-family:'Spartan',sans-serif;font-size:1rem;color:#2d3a2e;line-height:1.9;font-weight:400;}
        .br-body p+p{margin-top:1.2rem;}

        /* ABOUT */
        .br-about{background:#fff;padding:6rem 2rem;}
        .br-about-grid{display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center;}
        .br-about-img{position:relative;border-radius:6px;overflow:hidden;aspect-ratio:4/3;box-shadow:0 30px 70px rgba(0,0,0,.13);}
        .br-about-img img{width:100%;height:100%;object-fit:cover;}
        .br-about-badge{position:absolute;bottom:1.5rem;left:1.5rem;background:#C4883A;color:#fff;padding:1rem 1.4rem;border-radius:4px;box-shadow:0 8px 24px rgba(196,136,58,.4);}
        .br-badge-num{display:block;font-family:'Gothic',sans-serif;font-size:2rem;font-weight:800;line-height:1;}
        .br-badge-lbl{display:block;font-family:'Spartan',sans-serif;font-size:.68rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;opacity:.88;margin-top:3px;}

        /* DIVIDER */
        .br-divider{height:5px;background:linear-gradient(90deg,#C4883A,#e8a84e,#C4883A);}

        /* SERVICES */
        .br-svc{background:#F5F8F5;padding:6rem 2rem;}
        .br-svc-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:1.5rem;}
        .br-card{background:#fff;border:1px solid #dce8dc;border-radius:6px;padding:2rem;transition:box-shadow .25s,transform .25s;display:flex;flex-direction:column;}
        .br-card:hover{box-shadow:0 16px 48px rgba(0,0,0,.1);transform:translateY(-4px);}
        .br-card-ico{width:3rem;height:3rem;background:#E5EDE5;border-radius:10px;display:flex;align-items:center;justify-content:center;color:#2A5038;margin-bottom:1.1rem;}
        .br-card-name{font-family:'Gothic',sans-serif;font-size:2rem;font-weight:500;color:#162619;margin-bottom:.7rem;line-height:1.25;}
        .br-card-desc{font-family:'Spartan',sans-serif;font-size:.95rem;color:#3d4f3e;line-height:1.78;flex:1;font-weight:400;}
        .br-card-link{display:inline-flex;align-items:center;gap:6px;margin-top:1.2rem;font-family:'Spartan',sans-serif;font-size:.78rem;font-weight:700;color:#C4883A;letter-spacing:.08em;text-transform:uppercase;text-decoration:none;transition:gap .2s;}
        .br-card-link:hover{gap:10px;}

        /* PROBLEMS */
        .br-prob{background:#162619;padding:6rem 2rem;}
        .br-prob .br-h2{color:#fff;}
        .br-prob .br-lead{color:rgba(255,255,255,.65);}
        .br-pgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(290px,1fr));gap:1.5rem;}
        .br-pcard{position:relative;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-top:3px solid #C4883A;border-radius:6px;padding:2.2rem;overflow:hidden;}
        .br-pnum{position:absolute;bottom:-12px;right:16px;font-family:'Gothic',sans-serif;font-size:6rem;font-weight:800;color:rgba(196,136,58,.08);line-height:1;pointer-events:none;user-select:none;}
        .br-ptitle{font-family:'Gothic',sans-serif;font-size:1.5rem;font-weight:500;color:#fff;margin-bottom:1rem;line-height:1.3;}
        .br-pbody{font-family:'Spartan',sans-serif;font-size:.97rem;color:rgba(255,255,255,.72);line-height:1.82;font-weight:400;}

        /* HOW WE WORK */
        .br-how{background:#fff;padding:6rem 2rem;}
        .br-how-grid{display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center;}
        .br-how-img{position:relative;border-radius:6px;overflow:hidden;aspect-ratio:3/4;box-shadow:0 30px 70px rgba(0,0,0,.12);}
        .br-how-img img{width:100%;height:100%;object-fit:cover;}
        .br-how-accent{width:48px;height:4px;background:#C4883A;border-radius:2px;margin-bottom:1.5rem;}

        /* TRUST */
        .br-trust{background:#F0F5F0;padding:6rem 2rem;}
        .br-trust-grid{max-width:1140px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center;}
        .br-trust-body{font-family:'Spartan',sans-serif;font-size:1rem;color:#2d3a2e;line-height:1.88;margin-bottom:1.8rem;font-weight:400;}
        .br-trust-list{list-style:none;padding:0;display:flex;flex-direction:column;gap:1rem;}
        .br-trust-item{display:flex;align-items:flex-start;gap:.9rem;font-family:'Spartan',sans-serif;font-size:1rem;color:#2d3a2e;line-height:1.6;font-weight:400;}
        .br-chk{width:1.5rem;height:1.5rem;background:#2A5038;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px;}
        .br-trust-img{position:relative;border-radius:6px;overflow:hidden;aspect-ratio:4/3;box-shadow:0 30px 70px rgba(0,0,0,.13);}
        .br-trust-img img{width:100%;height:100%;object-fit:cover;}

        /* FAQ */
        .br-faq{background:#fff;padding:6rem 2rem;}
        .br-faq-inner{text-align:center;margin-bottom:3rem;}
        .br-faq-wrap{max-width:800px;margin:0 auto;display:flex;flex-direction:column;gap:.75rem;}
        .br-faq-item{border:1px solid #dce8dc;border-radius:6px;overflow:hidden;}
        .br-faq-btn{width:100%;background:#fff;border:none;padding:1.5rem 1.8rem;display:flex;align-items:center;justify-content:space-between;gap:1rem;text-align:left;cursor:pointer;transition:background .18s;}
        .br-faq-btn:hover,.br-faq-btn.open{background:#F5F8F5;}
        .br-faq-q{font-family:'Gothic',sans-serif;font-size:1.3rem;font-weight:500;color:#162619;line-height:1.4;margin:0;}
        .br-faq-icon{flex-shrink:0;color:#C4883A;}
        .br-faq-ans{background:#F5F8F5;padding:1.2rem 1.8rem 1.5rem;font-family:'Spartan',sans-serif;font-size:1rem;color:#2d3a2e;line-height:1.85;font-weight:400;}

        /* CTA */
        .br-cta{background:linear-gradient(138deg,#0f1f12 0%,#1e3d24 50%,#2A5038 100%);padding:6rem 2rem;text-align:center;}
        .br-cta-inner{max-width:600px;margin:0 auto;}
        .br-cta-h2{font-family:'Gothic',sans-serif;font-size:clamp(1.8rem,4vw,2.8rem);font-weight:600;color:#fff;line-height:4rem;margin-bottom:1rem;}
        .br-cta-sub{font-family:'Spartan',sans-serif;color:rgba(255,255,255,.68);font-size:1.05rem;margin-bottom:2.5rem;line-height:1.75;font-weight:400;}
        .br-cta-note{font-family:'Spartan',sans-serif;margin-top:1.5rem;font-size:.78rem;color:rgba(255,255,255,.38);letter-spacing:.05em;}

        /* RESPONSIVE */
        @media(max-width:960px){
          .br-about-grid,.br-how-grid,.br-trust-grid{grid-template-columns:1fr;gap:3rem;}
          .br-how-img{aspect-ratio:4/3;}
          .br-how-grid>div:first-child{order:2;}
          .br-how-grid>div:last-child{order:1;}
        }
        @media(max-width:640px){
          .br-stats{grid-template-columns:repeat(2,1fr);}
          .br-stat{border-bottom:1px solid rgba(255,255,255,.2);}
          .br-stat:nth-child(2){border-right:none;}
          .br-stat:last-child{border-bottom:none;}
          .br-cta-row{flex-direction:column;}
          .br-hero-inner{padding:5.5rem 1.25rem 7rem;}
          .br-about,.br-svc,.br-prob,.br-how,.br-trust,.br-faq,.br-cta{padding:4rem 1.25rem;}
        }
      `}</style>

      <main className="br">

        {/* HERO */}
        <section className="br-hero" aria-label="Page hero">
          <img className="br-hero-photo"
            src="https://images.unsplash.com/photo-1560749003-f4b1e17e2dfd?auto=format&fit=crop&w=1400&q=80"
            alt="Landscaping and lawn care in Bremerton WA"
            loading="eager" fetchPriority="high" />
          <div className="br-hero-grad" aria-hidden="true" />
          <div className="br-hero-inner">
            <div className="br-eyebrow"><MapPinIcon /> Bremerton, WA</div>
            <h1 className="br-h1">Landscaping & Lawn Care<br />in <em>Bremerton, WA</em></h1>
            <p className="br-hero-sub">
              I am Ryan Scott Sant, founder of A to Z Landscaping & More. Nine years in Kitsap County. Over 1,300 projects. I handle lawn care and maintenance, landscaping and design, hardscaping and construction, and property cleanup throughout Bremerton. I show up for every single one.
            </p>
            <div className="br-cta-row">
              <a href="tel:+13609533878" className="btn-amber"><PhoneIcon size={17} /> Get a Free Estimate</a>
              <a href="#services" className="btn-ghost">Our Services ↓</a>
            </div>
          </div>
          <svg className="br-hero-wave" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0,80 L0,40 C360,0 720,80 1080,40 C1260,20 1380,60 1440,30 L1440,80 Z" fill="#C4883A"/>
          </svg>
        </section>

        {/* STATS */}
        <div className="br-stats" aria-label="Business statistics">
          <div className="br-stat"><span className="br-stat-num">9</span><span className="br-stat-label">Years in Business</span></div>
          <div className="br-stat"><span className="br-stat-num">1,300+</span><span className="br-stat-label">Projects Completed</span></div>
          <div className="br-stat"><span className="br-stat-num">4</span><span className="br-stat-label">Core Services</span></div>
          <div className="br-stat"><span className="br-stat-num">Free</span><span className="br-stat-label">Estimates Always</span></div>
        </div>

        {/* ABOUT */}
        <section className="br-about" aria-labelledby="about-h">
          <div className="br-wrap br-about-grid">
            <div>
              <span className="br-tag">About A to Z Landscaping & More</span>
              <h2 className="br-h2" id="about-h">About A to Z Landscaping and More</h2>
              <div className="br-body">
                <p>Ryan Sant started A to Z Landscaping & More nine years ago in Kitsap County. What began as a one-truck operation has grown into a full-service landscaping company serving residential and commercial property owners across the region.</p>
                <p>I provide lawn care and maintenance, landscaping and garden design, hardscaping and outdoor construction, and property cleanup services. In nine years, I have completed over 1,300 projects. Those range from weekly residential lawn care contracts to full backyard design builds, paver patio installs, retaining walls, and spring and fall property cleanups on yards that spent a wet winter getting out of hand.</p>
              </div>
            </div>
            <div className="br-about-img">
              <img src={image8}
                alt="Ryan Scott Sant A to Z Landscaping Bremerton WA" loading="lazy" />
              <div className="br-about-badge">
                <strong className="br-badge-num">1,300+</strong>
                <span className="br-badge-lbl">Projects Completed</span>
              </div>
            </div>
          </div>
        </section>

        <div className="br-divider" aria-hidden="true" />

        {/* SERVICES */}
        <section className="br-svc" id="services" aria-labelledby="svc-h">
          <div className="br-wrap">
            <span className="br-tag">Landscaping Services in Bremerton, WA</span>
            <h2 className="br-h2" id="svc-h">Our Landscaping and Lawn Care Services in Bremerton, WA</h2>
            <p className="br-lead">Our main services — all built around what works in Bremerton's climate and on its soil.</p>
            <div className="br-svc-grid">
              {SERVICES.map(({ Icon, name, desc, href }, i) => (
                <article className="br-card" key={i}>
                  <div className="br-card-ico" aria-hidden="true"><Icon /></div>
                  <h3 className="br-card-name">{name}</h3>
                  <p className="br-card-desc">{desc}</p>
                  <a href={href} className="br-card-link" aria-label={`Learn more about ${name}`}>Learn More <ArrowIcon /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROBLEMS */}
        <section className="br-prob" aria-labelledby="prob-h">
          <div className="br-wrap">
            <span className="br-tag" style={{color:"#C4883A"}}>Bremerton-Specific Conditions</span>
            <h2 className="br-h2" id="prob-h">Common Problems Bremerton Property Owners Run Into</h2>
            <p className="br-lead">Most calls I get from Bremerton homeowners start the same way. There's moss everywhere. Water is pooling near the foundation or along the back fence line. A retaining wall is leaning, or the whole property was left rough by whoever lived there last. These are Bremerton problems.</p>
            <div className="br-pgrid">
              {PROBLEMS.map((p, i) => (
                <div className="br-pcard" key={i}>
                  <div className="br-pnum" aria-hidden="true">0{i+1}</div>
                  <h3 className="br-ptitle">{p.title}</h3>
                  <p className="br-pbody">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW WE WORK */}
        <section className="br-how" aria-labelledby="how-h">
          <div className="br-wrap br-how-grid">
            <div className="br-how-img">
              <img src={image9}
                alt="A to Z Landscaping crew working in Bremerton WA" loading="lazy" />
            </div>
            <div>
              <div className="br-how-accent" aria-hidden="true" />
              <span className="br-tag">How We Work Through These Problems</span>
              <h2 className="br-h2" id="how-h">How We Work Through These Problems</h2>
              <div className="br-body">
                <p>I don't give one-size-fits-all quotes. Before pricing anything, I walk the property. If moss is the issue, drainage gets checked first. Is water pooling? Is the lawn sitting under heavy tree canopy? What's the soil pH doing? The fix depends on what's driving the problem. That might mean aeration, lime, drainage work, overseeding, or some combination. One correct answer per property, not a package sold to everyone.</p>
                <p>For hardscaping and drainage work, we look at the slope, the existing base, and how water moves across the property after a heavy rain. A paver patio installed without accounting for drainage will settle and crack within two PNW winters. A retaining wall without proper drainage behind it will lean. We build to hold through wet winters, not just look good on day one.</p>
                <p>Every job gets a clear scope, a firm date, and a crew that shows up when they said they would. That's it.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="br-divider" aria-hidden="true" />

        {/* TRUST */}
        <section className="br-trust" aria-labelledby="trust-h">
          <div className="br-trust-grid">
            <div>
              <span className="br-tag">Why A to Z Landscaping & More</span>
              <h2 className="br-h2" id="trust-h">Why You Should Trust A to Z Landscaping & More</h2>
              <p className="br-trust-body">9 years. Over 1,300 projects across Kitsap County, covering residential lawn care, full landscape design and installation, retaining wall builds, paver hardscaping, and property cleanup jobs of every size.
Ryan Scott Sant runs every job. Not a project manager in an office. The name on the business is the same person on site. No subcontractors who have never seen the property. No crews that show up on day one and disappear. My team knows what works in Bremerton. I know what it isn't. And I give straight answers because that's how a landscaping business earns 9 years of repeat work.
</p>
              <ul className="br-trust-list">
                {TRUST_POINTS.map((item, i) => (
                  <li className="br-trust-item" key={i}>
                    <span className="br-chk" aria-hidden="true"><CheckIcon /></span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="br-trust-img">
              <img src={image10}
                alt="Finished landscaping project in Bremerton WA by A to Z Landscaping" loading="lazy" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="br-faq" aria-labelledby="faq-h">
          <div className="br-faq-inner">
            <span className="br-tag" style={{display:"block"}}>Common Questions</span>
            <h2 className="br-h2" id="faq-h" style={{maxWidth:600,margin:"0 auto .8rem"}}>Frequently Asked Questions</h2>
            <p className="br-lead" style={{margin:"0 auto",textAlign:"center"}}>Straight answers to what Bremerton property owners ask most.</p>
          </div>
          <div className="br-faq-wrap">
            {FAQS.map((f, i) => (
              <div className="br-faq-item" key={i}>
                <button className={`br-faq-btn${openFaq===i?" open":""}`}
                  onClick={() => toggleFaq(i)} aria-expanded={openFaq===i} aria-controls={`br-faq-ans-${i}`}>
                  <h3 className="br-faq-q">{f.q}</h3>
                  <span className="br-faq-icon"><ChevronIcon open={openFaq===i} /></span>
                </button>
                {openFaq===i && <div className="br-faq-ans" id={`br-faq-ans-${i}`} role="region">{f.a}</div>}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="br-cta" aria-label="Call to action">
          <div className="br-cta-inner">
            <span className="br-tag" style={{display:"block",marginBottom:".8rem",color:"rgba(196,136,58,.85)"}}>Ready to Get Started?</span>
            <h2 className="br-cta-h2">Get a Free Estimate for Your Bremerton Property</h2>
            <p className="br-cta-sub">Ryan comes out, walks your site, and gives you a straight estimate. Whether you need lawn care, full landscaping, hardscaping, or a one-time cleanup job, we start with the site visit.</p>
            <a href="tel:+13609533878" className="btn-amber" style={{fontSize:"1rem",padding:"16px 40px",margin:"0 auto"}}>
              <PhoneIcon size={18} /> Call or Text Ryan Now
            </a>
            <p className="br-cta-note">A to Z Landscaping & More &nbsp;·&nbsp; Ryan Scott Sant &nbsp;·&nbsp; Bremerton, WA</p>
          </div>
        </section>

      </main>
    </>
  );
}