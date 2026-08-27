import { Helmet } from "react-helmet";
import aboutImage from "../media/AtoZ_logo.png";
import image15 from "../media/img (15).jpg";
import image21 from "../media/img (21).jpg";
const PhoneIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.5 12c-.86-2.65-1.68-5.82-3.07-8.63A2 2 0 013.44 1.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.91a16 16 0 006.06 6.06l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
);
const CheckIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const ArrowRight = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);

const STANDARDS = [
  { num: "01", title: "Honesty in Estimates",    body: "If a job needs three hours, I quote three hours. If the fix is simpler than expected, I say so and adjust. I've turned down work I could have easily sold because it wasn't the right call for the property." },
  { num: "02", title: "Punctuality as a Habit",  body: "Not as a slogan. As a habit. If I say Tuesday, it's Tuesday. Clean site at the end of every job, no debris left behind. That takes no special skill just caring enough to follow through." },
  { num: "03", title: "No Surprise Invoices",    body: "The number you get upfront is the number we work to. If something changes mid-job that affects the cost, I tell you before it changes, not after." },
  { num: "04", title: "We Stand Behind the Work",body: "If something we installed or serviced isn't right, we come back and fix it. No back-and-forth. No talking you out of it. That's part of the job, not a favor." },
];

const TRUST_ITEMS = [
  
];

const SERVICES_LIST = [
  "Lawn Care & Maintenance",
  "Landscaping & Design",
  "Hardscaping & Outdoor Construction",
  "Property Cleanup Services",
  "Pressure Washing",
];

const IMGS = {
  story:     "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=80",
  pnw:       "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1400&q=80",
  hardscape: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80",
  crew:      "https://images.unsplash.com/photo-1558618047-f4e70e8e2df6?auto=format&fit=crop&w=900&q=80",
  patio:     "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=900&q=80",
};

export default function About() {
  return (
    <>
      <Helmet>
        <title>About A to Z Landscaping & More | Ryan Scott Sant | Kitsap County WA</title>
        <meta name="description" content="Ryan Scott Sant founded A to Z Landscaping & More in Kitsap County, WA nine years ago. 1,300+ projects. Honest estimates, local expertise, no subcontracting. Read our story." />
        <link rel="canonical" href="https://atozlandscapingandmore.com/about/" />
        <meta property="og:title"       content="About A to Z Landscaping & More | Ryan Scott Sant" />
        <meta property="og:description" content="Nine years. 1,300+ projects. One crew. Ryan Scott Sant built A to Z Landscaping on honest estimates and local knowledge." />
        <meta property="og:url"         content="https://atozlandscapingandmore.com/about/" />
        <meta property="og:image"       content="https://atozlandscapingandmore.com/images/ryan-scott-sant-kitsap.jpg" />
        <meta property="og:image:alt"   content="Ryan Scott Sant, founder of A to Z Landscaping and More, Kitsap County WA" />
        <meta name="geo.region"         content="US-WA" />
        <script type="application/ld+json">{JSON.stringify({
          "@context":"https://schema.org","@type":"LandscapingBusiness",
          "name":"A to Z Landscaping & More","url":"https://atozlandscapingandmore.com/",
          "telephone":"+13609533878","foundingDate":"2016",
          "founder":{"@type":"Person","name":"Ryan Scott Sant"},
          "areaServed":"Kitsap County, WA"
        })}</script>
      </Helmet>

      <style>{`
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
        :root{
          --forest:#0E1F11; --green:#1B3D22; --mid:#2D6040;
          --amber:#C4883A;  --amberdk:#A36D20; --amberlite:rgba(196,136,58,.12);
          --stone:#F5F0E8;  --stonemd:#EAE3D6;
          --white:#ffffff;  --ink:#1A1A18;
          --body:#45604A;   --muted:#6B7F6D; --border:#D6E3D8;
        }
        .ab{color:var(--ink);background:var(--white);font-family:'Spartan',sans-serif;line-height:1.6;overflow-x:hidden;}

        /* ═══════════ HERO  pure CSS, no image ═══════════ */
        .ab-hero{
          width:100%;
          background:var(--forest);
          position:relative;
          overflow:hidden;
          padding:0;
        }

        /* Decorative CSS shapes that fill the background */
        .ab-hero-shapes{
          position:absolute;
          inset:0;
          pointer-events:none;
          overflow:hidden;
        }
        /* Large amber circle top-right */
        .ab-shape-circle{
          position:absolute;
          top:-140px; right:-140px;
          width:520px; height:520px;
          border-radius:50%;
          background:radial-gradient(circle,rgba(196,136,58,.18) 0%,rgba(196,136,58,0) 70%);
        }
        /* Medium green circle bottom-left */
        .ab-shape-circle2{
          position:absolute;
          bottom:-100px; left:-60px;
          width:380px; height:380px;
          border-radius:50%;
          background:radial-gradient(circle,rgba(45,96,64,.6) 0%,rgba(45,96,64,0) 70%);
        }
        /* Amber accent ring */
        .ab-shape-ring{
          position:absolute;
          top:60px; right:80px;
          width:200px; height:200px;
          border-radius:50%;
          border:1px solid rgba(196,136,58,.2);
        }
        .ab-shape-ring2{
          position:absolute;
          top:80px; right:100px;
          width:160px; height:160px;
          border-radius:50%;
          border:1px solid rgba(196,136,58,.12);
        }
        /* Horizontal rule lines */
        .ab-shape-line{
          position:absolute;
          left:0; right:0;
          height:1px;
          background:rgba(255,255,255,.04);
        }
        .ab-shape-line.l1{top:30%;}
        .ab-shape-line.l2{top:60%;}
        /* Vertical accent */
        .ab-shape-vert{
          position:absolute;
          top:0; bottom:0;
          width:1px;
          background:linear-gradient(180deg,transparent,rgba(196,136,58,.25) 40%,rgba(196,136,58,.25) 60%,transparent);
          right:36%;
        }
        /* Dot grid pattern top-right */
        .ab-shape-dots{
          position:absolute;
          top:30px; right:30px;
          width:180px; height:180px;
          background-image:radial-gradient(circle,rgba(196,136,58,.22) 1px,transparent 1px);
          background-size:18px 18px;
          opacity:0.6;
        }

        /* Amber top bar */
        .ab-hero-topbar{
          position:absolute;
          top:0;left:0;right:0;
          height:4px;
          background:var(--amber);
          z-index:4;
        }

        /* Content wrapper */
        .ab-hero-inner{
          position:relative;
          z-index:2;
          max-width:1200px;
          margin:0 auto;
          padding:7rem 2rem 6rem;
          display:grid;
          grid-template-columns:1fr 360px;
          gap:4rem;
          align-items:center;
        }

        /* ── Left: text ── */
        .ab-hero-kicker{
          display:inline-flex;
          align-items:center;
          gap:8px;
          background:rgba(196,136,58,.14);
          border:1px solid rgba(196,136,58,.38);
          color:var(--amber);
          padding:5px 14px;
          border-radius:2px;
          font-size:.67rem;
          font-weight:700;
          letter-spacing:.18em;
          text-transform:uppercase;
          margin-bottom:1.7rem;
        }
        .ab-kicker-dot{
          width:7px;height:7px;
          border-radius:50%;
          background:var(--amber);
          flex-shrink:0;
          animation:blink 2.4s ease-in-out infinite;
        }
        @keyframes blink{0%,100%{opacity:1;}50%{opacity:.35;}}
        .ab-h1{
          font-family:'Gothic',sans-serif;
          font-size:clamp(2.3rem,4.5vw,3.8rem);
          font-weight:800;
          color:var(--white);
          line-height:1.1;
          margin-bottom:.8rem;
        }
        .ab-h1 em{color:var(--amber);font-style:italic;}
        .ab-hero-byline{
          font-size:.7rem;
          font-weight:700;
          letter-spacing:.16em;
          text-transform:uppercase;
          color:rgba(255,255,255,.38);
          margin-bottom:1.6rem;
        }
        .ab-hero-p{
          font-size:.98rem;
          color:rgba(255,255,255,.65);
          line-height:1.85;
          max-width:560px;
          margin-bottom:2.4rem;
        }
        .ab-hero-btns{display:flex;gap:12px;flex-wrap:wrap;}

        /* ── Right: identity card ── */
        .ab-id-card{
          background:rgba(255,255,255,.06);
          border:1px solid rgba(255,255,255,.13);
          border-radius:12px;
          overflow:hidden;
        }
        /* Logo area */
        .ab-id-card-top{
          padding:2rem;
          display:flex;
          flex-direction:column;
          align-items:center;
          text-align:center;
          border-bottom:1px solid rgba(255,255,255,.1);
          background:rgba(255,255,255,.03);
        }
        .ab-id-logo-wrap{
          width:88px;height:88px;
          border-radius:50%;
          background:rgba(255,255,255,.08);
          border:2px solid rgba(196,136,58,.4);
          display:flex;align-items:center;justify-content:center;
          margin-bottom:1rem;
          box-shadow:0 0 0 8px rgba(196,136,58,.06);
          overflow:hidden;
        }
        .ab-id-logo{
          width:68px;height:68px;
          object-fit:contain;
          padding:4px;
        }
        .ab-id-name{
          font-family:'Gothic',sans-serif;
          font-size:1.05rem;
          font-weight:700;
          color:var(--white);
          line-height:1.25;
        }
        .ab-id-role{
          font-size:.67rem;
          font-weight:700;
          letter-spacing:.13em;
          text-transform:uppercase;
          color:var(--amber);
          margin-top:4px;
        }
        /* Stats row */
        .ab-id-stats{
          display:grid;
          grid-template-columns:repeat(3,1fr);
        }
        .ab-id-stat{
          padding:1.3rem .6rem;
          text-align:center;
          border-right:1px solid rgba(255,255,255,.09);
        }
        .ab-id-stat:last-child{border-right:none;}
        .ab-id-num{
          display:block;
          font-family:'Gothic',sans-serif;
          font-size:1.6rem;
          font-weight:800;
          color:var(--white);
          line-height:1;
        }
        .ab-id-lbl{
          display:block;
          font-size:.58rem;
          font-weight:700;
          letter-spacing:.1em;
          text-transform:uppercase;
          color:rgba(255,255,255,.4);
          margin-top:4px;
        }
        /* Trusted badge strip */
        .ab-id-badge{
          padding:.85rem 1.2rem;
          background:var(--amber);
          display:flex;
          align-items:center;
          justify-content:center;
          gap:8px;
        }
        .ab-id-badge-dot{
          width:6px;height:6px;
          border-radius:50%;
          background:rgba(255,255,255,.6);
        }
        .ab-id-badge-txt{
          font-size:.68rem;
          font-weight:700;
          letter-spacing:.14em;
          text-transform:uppercase;
          color:rgba(255,255,255,.9);
        }

        /* ═══════════ STATS BAR ═══════════ */
        .ab-statsbar{
          width:100%;
          background:linear-gradient(90deg,var(--green),var(--mid));
          display:grid;
          grid-template-columns:repeat(3,1fr);
        }
        .ab-statbar-item{
          padding:1.9rem 1.5rem;
          text-align:center;
          border-right:1px solid rgba(255,255,255,.15);
        }
        .ab-statbar-item:last-child{border-right:none;}
        .ab-statbar-num{
          display:block;
          font-family:'Gothic',sans-serif;
          font-size:2.6rem;
          font-weight:800;
          color:var(--white);
          line-height:1;
        }
        .ab-statbar-lbl{
          display:block;
          font-size:.67rem;
          font-weight:700;
          letter-spacing:.12em;
          text-transform:uppercase;
          color:rgba(255,255,255,.55);
          margin-top:5px;
        }

        /* ═══════════ SHARED ═══════════ */
        .ab-section{padding:6rem 2rem;}
        .ab-inner{max-width:1100px;margin:0 auto;}
        .ab-tag{
          display:block;
          font-size:.67rem;font-weight:700;
          letter-spacing:.22em;text-transform:uppercase;
          color:var(--amber);margin-bottom:.7rem;
        }
        .ab-h2{
          font-family:'Gothic',sans-serif;
          font-size:clamp(1.5rem,3.5vw,2.6rem);
          font-weight:700;color:var(--forest);
          line-height:1;margin-bottom:1rem;
        }
        .ab-lead{font-size:.98rem;color:var(--muted);line-height:1.82;max-width:660px;margin-bottom:2rem;}
        .ab-body{font-size:.97rem;color:var(--body);line-height:1.88;}
        .ab-body p+p{margin-top:1.1rem;}
        .ab-split{display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center;}
        .ab-split.flip{direction:rtl;}
        .ab-split.flip>*{direction:ltr;}

        /* ═══════════ IMAGE FRAME ═══════════ */
        .ab-frame{position:relative;border-radius:8px;overflow:visible;}
        .ab-frame::before{
          content:'';position:absolute;
          top:-10px;left:-10px;right:10px;bottom:10px;
          border:2px solid var(--amber);
          border-radius:9px;z-index:0;pointer-events:none;
        }
        .ab-frame img{
          position:relative;z-index:1;
          width:100%;height:100%;
          object-fit:cover;display:block;
          border-radius:7px;
          box-shadow:0 28px 72px rgba(0,0,0,.16);
        }
        .ab-frame.portrait{aspect-ratio:3/4;}
        .ab-frame.landscape{aspect-ratio:4/3;}
        .ab-frame-badge{
          position:absolute;z-index:2;
          bottom:-1rem;right:-1rem;
          background:var(--forest);
          border-left:4px solid var(--amber);
          color:var(--white);
          padding:.9rem 1.2rem;
          border-radius:0 6px 6px 0;
          box-shadow:0 12px 36px rgba(0,0,0,.2);
        }
        .ab-frame-badge strong{
          display:block;
          font-family:'Gothic',sans-serif;
          font-size:1.85rem;font-weight:800;
          color:var(--amber);line-height:1;
        }
        .ab-frame-badge span{
          display:block;font-size:.63rem;font-weight:700;
          letter-spacing:.09em;text-transform:uppercase;
          color:rgba(255,255,255,.55);margin-top:3px;
        }

        /* ═══════════ PULL QUOTE ═══════════ */
        .ab-quote{
          border-left:3px solid var(--amber);
          background:rgba(196,136,58,.07);
          padding:1.35rem 1.5rem;
          margin:1.8rem 0;
          border-radius:0 5px 5px 0;
        }
        .ab-quote p{
          font-family:'Gothic',sans-serif;
          font-size:1.15rem;font-weight:600;
          color:var(--forest);line-height:1.55;font-style:italic;
        }
        .ab-quote cite{
          display:block;margin-top:.55rem;
          font-size:.7rem;font-weight:700;
          letter-spacing:.1em;text-transform:uppercase;
          color:var(--amber);font-style:normal;
        }

        /* ═══════════ PNW BANNER ═══════════ */
        .ab-pnw{
          position:relative;width:100%;
          overflow:hidden;min-height:480px;
          display:flex;align-items:center;
        }
        .ab-pnw-photo{
          position:absolute;inset:0;
          width:100%;height:100%;
          object-fit:cover;object-position:center 35%;
        }
        .ab-pnw-veil{
          position:absolute;inset:0;
          background:linear-gradient(100deg,rgba(14,31,17,.97) 0%,rgba(14,31,17,.88) 50%,rgba(14,31,17,.55) 100%);
        }
        .ab-pnw-body{
          position:relative;z-index:2;
          width:100%;max-width:1100px;
          margin:0 auto;padding:5rem 2rem;
          display:grid;grid-template-columns:1fr 1fr;
          gap:4rem;align-items:center;
        }
        .ab-pnw .ab-h2{color:var(--white);}
        .ab-pnw-intro{color:rgba(255,255,255,.6);font-size:.97rem;line-height:1.82;}
        .ab-pnw-cards{display:flex;flex-direction:column;gap:.9rem;}
        .ab-pnw-card{
          display:grid;grid-template-columns:80px 1fr;
          gap:1rem;align-items:center;
          background:rgba(255,255,255,.06);
          border:1px solid rgba(255,255,255,.1);
          border-left:3px solid var(--amber);
          border-radius:0 5px 5px 0;
          padding:1rem 1.2rem;
        }
        .ab-pnw-stat{
          font-family:'Gothic',sans-serif;
          font-size:1.2rem;font-weight:800;
          color:var(--amber);line-height:1.1;
          padding-right:1rem;
          border-right:1px solid rgba(255,255,255,.12);
        }
        .ab-pnw-txt{font-size:.84rem;color:rgba(255,255,255,.6);line-height:1.6;}

        /* ═══════════ STANDARDS  dark ═══════════ */
        .ab-dark{background:var(--forest);}
        .ab-dark .ab-h2{color:var(--white);}
        .ab-dark .ab-tag{color:rgba(196,136,58,.8);}
        .ab-dark-lead{color:rgba(255,255,255,.5);font-size:.97rem;line-height:1.8;max-width:560px;margin-bottom:3rem;}
        .ab-std-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1.15rem;}
        .ab-std-card{
          position:relative;overflow:hidden;
          background:rgba(255,255,255,.05);
          border:1px solid rgba(255,255,255,.09);
          border-radius:7px;padding:2rem;
          transition:background .22s;
        }
        .ab-std-card::before{
          content:'';position:absolute;top:0;left:0;
          width:100%;height:3px;
          background:linear-gradient(90deg,var(--amber),transparent);
        }
        .ab-std-card:hover{background:rgba(255,255,255,.09);}
        .ab-std-ghost{
          position:absolute;top:-10px;right:10px;
          font-family:'Gothic',sans-serif;
          font-size:5.5rem;font-weight:800;
          color:rgba(196,136,58,.07);line-height:1;
          pointer-events:none;user-select:none;
        }
        .ab-std-title{font-family:'Gothic',sans-serif;font-size:1.3rem;font-weight:500;color:var(--white);margin-bottom:.85rem;padding-right:2rem;}
        .ab-std-body{font-size:.86rem;color:rgba(255,255,255,.54);line-height:1.76;}

        /* ═══════════ PHOTO MOSAIC ═══════════ */
        .ab-mosaic{background:var(--stonemd);}
        .ab-mosaic-layout{display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center;}
        .ab-photo-grid{
          display:grid;
          grid-template-columns:1.2fr 1fr;
          grid-template-rows:270px 210px;
          gap:10px;
        }
        .ab-photo-cell{border-radius:7px;overflow:hidden;position:relative;}
        .ab-photo-cell.tall{grid-row:span 2;}
        .ab-photo-cell img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s ease;}
        .ab-photo-cell:hover img{transform:scale(1.05);}
        .ab-photo-label{
          position:absolute;bottom:0;left:0;right:0;
          padding:1.2rem 1rem .7rem;
          background:linear-gradient(0deg,rgba(14,31,17,.82) 0%,transparent 100%);
          font-size:.67rem;font-weight:700;
          letter-spacing:.12em;text-transform:uppercase;
          color:rgba(255,255,255,.72);
        }
        .ab-checklist{list-style:none;padding:0;display:flex;flex-direction:column;gap:.85rem;margin-top:1.8rem;}
        .ab-check-row{display:flex;align-items:flex-start;gap:.85rem;font-size:.9rem;color:var(--body);line-height:1.55;}
        .ab-chk{width:1.45rem;height:1.45rem;background:var(--mid);border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px;}

        /* ═══════════ SERVICES ═══════════ */
        .ab-svc{background:var(--stone);}
        .ab-svc-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:1rem;margin-top:2.5rem;}
        .ab-svc-item{
          background:var(--white);
          border:1px solid var(--border);
          border-radius:7px;
          padding:1.6rem 1.4rem;
          position:relative;overflow:hidden;
          transition:transform .22s,box-shadow .22s;
        }
        .ab-svc-item::before{content:'';position:absolute;left:0;top:0;width:4px;height:100%;background:var(--border);transition:background .22s;}
        .ab-svc-item:hover{transform:translateY(-4px);box-shadow:0 14px 42px rgba(0,0,0,.09);}
        .ab-svc-item:hover::before{background:var(--amber);}
        .ab-svc-name{font-family:'Gothic',sans-serif;font-size:1.08rem;font-weight:700;color:var(--forest);padding-left:.4rem;}

        /* ═══════════ CTA ═══════════ */
        .ab-cta{
          background:linear-gradient(135deg,var(--forest) 0%,var(--mid) 100%);
          text-align:center;position:relative;overflow:hidden;
        }
        .ab-cta::before{content:'';position:absolute;top:-100px;right:-100px;width:420px;height:420px;border-radius:50%;background:rgba(196,136,58,.08);pointer-events:none;}
        .ab-cta::after{content:'';position:absolute;bottom:-80px;left:-80px;width:300px;height:300px;border-radius:50%;background:rgba(196,136,58,.05);pointer-events:none;}
        .ab-cta>.ab-inner{position:relative;z-index:1;}
        .ab-cta .ab-tag{color:rgba(196,136,58,.8);text-align:center;}
        .ab-cta-h2{font-family:'Gothic',sans-serif;font-size:clamp(1.9rem,4vw,3rem);font-weight:700;color:var(--white);line-height:1.18;max-width:620px;margin:0 auto .9rem;}
        .ab-cta-sub{color:rgba(255,255,255,.6);font-size:1rem;line-height:1.78;margin:0 auto 2.5rem;max-width:500px;}
        .ab-cta-row{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;}
        .ab-cta-note{margin-top:1.5rem;font-size:.74rem;color:rgba(255,255,255,.28);letter-spacing:.06em;}

        /* ═══════════ BUTTONS ═══════════ */
        .btn-amber{display:inline-flex;align-items:center;gap:8px;background:var(--amber);color:var(--white);border:none;padding:14px 30px;font-family:'Spartan',sans-serif;font-size:.92rem;font-weight:700;border-radius:3px;text-decoration:none;cursor:pointer;transition:background .2s,transform .15s,box-shadow .2s;letter-spacing:.01em;}
        .btn-amber:hover{background:var(--amberdk);transform:translateY(-2px);box-shadow:0 10px 28px rgba(196,136,58,.38);}
        .btn-ghost{display:inline-flex;align-items:center;gap:8px;background:transparent;color:rgba(255,255,255,.85);border:1.5px solid rgba(255,255,255,.3);padding:14px 30px;font-family:'Spartan',sans-serif;font-size:.92rem;font-weight:500;border-radius:3px;text-decoration:none;cursor:pointer;transition:border-color .2s,background .2s;}
        .btn-ghost:hover{border-color:rgba(255,255,255,.7);background:rgba(255,255,255,.07);}

        /* ═══════════ RESPONSIVE ═══════════ */
        @media(max-width:960px){
          .ab-hero-inner{grid-template-columns:1fr;gap:2.5rem;padding-top:5.5rem;}
          .ab-id-card{max-width:400px;}
          .ab-split,.ab-mosaic-layout,.ab-pnw-body{grid-template-columns:1fr;gap:2.8rem;}
          .ab-split.flip{direction:ltr;}
          .ab-std-grid{grid-template-columns:1fr;}
          .ab-photo-grid{grid-template-rows:220px 180px;}
        }
        @media(max-width:640px){
          .ab-statsbar{grid-template-columns:1fr;}
          .ab-statbar-item{border-right:none;border-bottom:1px solid rgba(255,255,255,.12);}
          .ab-statbar-item:last-child{border-bottom:none;}
          .ab-section{padding:4rem 1.25rem;}
          .ab-cta-row{flex-direction:column;align-items:center;}
          .ab-photo-grid{grid-template-columns:1fr;grid-template-rows:220px 180px 180px;}
          .ab-photo-cell.tall{grid-row:auto;}
          .ab-hero-inner{padding:5rem 1.25rem 4rem;}
          .ab-hero-btns{flex-direction:column;align-items:flex-start;}
        }
        @media(prefers-reduced-motion:reduce){
          .ab-kicker-dot{animation:none;}
          .ab-photo-cell img,.btn-amber,.ab-svc-item{transition:none;}
        }
      `}</style>

      <main className="ab">

        {/* ═══════════ HERO  CSS only, no bg image ═══════════ */}
        <section className="ab-hero" aria-label="About A to Z Landscaping and Ryan Scott Sant">

          {/* Amber accent top bar */}
          <div className="ab-hero-topbar" aria-hidden="true" />

          {/* Decorative CSS background shapes */}
          <div className="ab-hero-shapes" aria-hidden="true">
            <div className="ab-shape-circle" />
            <div className="ab-shape-circle2" />
            <div className="ab-shape-ring" />
            <div className="ab-shape-ring2" />
            <div className="ab-shape-line l1" />
            <div className="ab-shape-line l2" />
            <div className="ab-shape-vert" />
            <div className="ab-shape-dots" />
          </div>

          <div className="ab-hero-inner">

            {/* ── Text side ── */}
            <div>
              <div className="ab-hero-kicker">
                <span className="ab-kicker-dot" />
                Kitsap County, WA Est. 2016
              </div>
              <h1 className="ab-h1">
                A Landscaping Business Built on{" "}
                <em>Showing Up</em>{" "}
                and Doing It Right
              </h1>
              <p className="ab-hero-byline">Founded by Ryan Scott Sant · 9 Years · 1,300+ Projects</p>
              <p className="ab-hero-p">
                My name is Ryan Scott Sant. I started A to Z Landscaping &amp; More nine years ago truck, trailer, and enough referrals to keep the schedule full from season two onward. What surprised me wasn't that the business grew. It was that the same homeowners kept calling back, year after year, sometimes bringing their neighbors along with them. That tells you something.
              </p>
              <div className="ab-hero-btns">
                <a href="tel:+13609533878" className="btn-amber">
                  <PhoneIcon size={16} /> Call or Text Ryan Directly
                </a>
                <a href="/services" className="btn-ghost">
                  View All Services <ArrowRight />
                </a>
              </div>
            </div>

            {/* ── Identity card side ── */}
            <div className="ab-id-card" role="complementary" aria-label="Company overview">
              <div className="ab-id-card-top">
                <div className="ab-id-logo-wrap">
                  <img
                    className="ab-id-logo"
                    src={aboutImage}
                    alt="A to Z Landscaping and More  company logo"
                    width="68" height="68"
                    loading="eager"
                  />
                </div>
                <div className="ab-id-name">A to Z Landscaping &amp; More</div>
                <div className="ab-id-role">Ryan Scott Sant Founder &amp; Owner</div>
              </div>
              <div className="ab-id-stats">
                <div className="ab-id-stat">
                  <span className="ab-id-num">9</span>
                  <span className="ab-id-lbl">Years</span>
                </div>
                <div className="ab-id-stat">
                  <span className="ab-id-num">1,300+</span>
                  <span className="ab-id-lbl">Projects</span>
                </div>
                <div className="ab-id-stat">
                  <span className="ab-id-num">0</span>
                  <span className="ab-id-lbl">Subcontractors</span>
                </div>
              </div>
              <div className="ab-id-badge">
                <span className="ab-id-badge-dot" />
                <span className="ab-id-badge-txt">Trusted in Kitsap County Since 2016</span>
                <span className="ab-id-badge-dot" />
              </div>
            </div>

          </div>
        </section>

        {/* ═══════════ STATS BAR ═══════════ */}
        <div className="ab-statsbar" aria-label="Business statistics">
          <div className="ab-statbar-item">
            <span className="ab-statbar-num">9</span>
            <span className="ab-statbar-lbl">Years in Business</span>
          </div>
          <div className="ab-statbar-item">
            <span className="ab-statbar-num">1,300+</span>
            <span className="ab-statbar-lbl">Projects Completed</span>
          </div>
          <div className="ab-statbar-item">
            <span className="ab-statbar-num">Zero</span>
            <span className="ab-statbar-lbl">Subcontractors  Ever</span>
          </div>
        </div>

        {/* ═══════════ STORY ═══════════ */}
        <section className="ab-section" style={{background:"var(--stone)"}} aria-labelledby="story-h">
          <div className="ab-inner ab-split">
            <div className="ab-frame portrait">
              <img
                src={image21}
                alt="Lush Pacific Northwest garden landscaping project by A to Z Landscaping in Kitsap County WA"
                width="600" height="800"
                loading="lazy"
              />
              <div className="ab-frame-badge">
                <strong>Est. 2016</strong>
                <span>Trusted Since</span>
              </div>
            </div>
            <div>
              <span className="ab-tag">Why We Started</span>
              <h2 className="ab-h2" id="story-h">I Started This Business Because Local Properties Deserve Local Knowledge</h2>
              <div className="ab-body">
                <p>I wasn't looking to build a brand. I was looking to do the work properly, which meant not following guides written for Ohio and Georgia when our soil and our seasons are nothing like theirs.</p>
                <p>Kitsap County clay holds water differently than most lawn care manuals assume. Douglas fir shade kills grass in patterns that confuse companies trained on full-sun turf models. Moss doesn't just show up because it wants to. It shows up because drainage is off, soil pH is low, or both.</p>
                <p>A crew that doesn't know that will treat the surface, collect the check, and leave you with the same problem next October. I built A to Z to fix the actual problem. That's where it started.</p>
              </div>
              <div className="ab-quote" role="blockquote">
                <p>Most people can tell, pretty quickly, whether a contractor is being straight with them or moving them toward the next invoice. I'd rather lose a job by being direct than keep one by leaving things vague.</p>
                <cite>Ryan Scott Sant, Founder</cite>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ PNW BANNER  keeps image since it's a content section ═══════════ */}
        <section className="ab-pnw" aria-labelledby="pnw-h">
          <img
            className="ab-pnw-photo"
            src={IMGS.pnw}
            alt="Pacific Northwest forest landscape in Kitsap County Washington"
            width="1400" height="600"
            loading="lazy"
          />
          <div className="ab-pnw-veil" aria-hidden="true" />
          <div className="ab-pnw-body">
            <div>
              <span className="ab-tag" style={{color:"rgba(196,136,58,.8)"}}>Pacific Northwest Expertise</span>
              <h2 className="ab-h2" id="pnw-h">9 Years Learning What Our Soil and Weather Actually Does to a Property</h2>
              <p className="ab-pnw-intro">Most national lawn care content is useless for homeowners here written for a different climate, a different soil type, and a different growing season. These aren't minor details. They change everything.</p>
            </div>
            <div className="ab-pnw-cards" role="list">
              <div className="ab-pnw-card" role="listitem">
                <div className="ab-pnw-stat">Oct–Mar</div>
                <p className="ab-pnw-txt">Wet season changes when you fertilize, overseed, and when cleanup holds through spring.</p>
              </div>
              <div className="ab-pnw-card" role="listitem">
                <div className="ab-pnw-stat">Clay Soil</div>
                <p className="ab-pnw-txt">Covers most of Kitsap County compacts in summer, holds standing water all winter.</p>
              </div>
              <div className="ab-pnw-card" role="listitem">
                <div className="ab-pnw-stat">30–50%</div>
                <p className="ab-pnw-txt">Yard light blocked by big-leaf maples and Douglas firs changes what grows and where.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ STANDARDS ═══════════ */}
        <section className="ab-section ab-dark" aria-labelledby="std-h">
          <div className="ab-inner">
            <span className="ab-tag">How We Operate</span>
            <h2 className="ab-h2" id="std-h">The Standards Ryan Holds Every Job To</h2>
            <p className="ab-dark-lead">These aren't values written on a website. They are the habits that kept the same homeowners calling back year after year.</p>
            <div className="ab-std-grid">
              {STANDARDS.map((s,i) => (
                <div className="ab-std-card" key={i}>
                  <div className="ab-std-ghost" aria-hidden="true">{s.num}</div>
                  <h3 className="ab-std-title">{s.title}</h3>
                  <p className="ab-std-body">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ PHOTO MOSAIC + TEXT ═══════════ */}
        <section className="ab-section ab-mosaic" aria-labelledby="mosaic-h">
          <div className="ab-inner ab-mosaic-layout">
            <div className="ab-photo-grid" aria-label="Project photo gallery">
              <div className="ab-photo-cell tall">
                <img src={IMGS.hardscape} alt="Hardscaping and outdoor construction project by A to Z Landscaping Kitsap County WA" width="540" height="500" loading="lazy" />
                <div className="ab-photo-label">Hardscaping & Construction</div>
              </div>
              <div className="ab-photo-cell">
                <img src={IMGS.patio} alt="Beautiful patio and outdoor living space installed by A to Z Landscaping Kitsap County" width="440" height="270" loading="lazy" />
                <div className="ab-photo-label">Patio & Pavers</div>
              </div>
              <div className="ab-photo-cell">
                <img src={image15} alt="Lawn care and landscaping maintenance in Kitsap County Washington" width="440" height="220" loading="lazy" />
                <div className="ab-photo-label">Lawn Care & Maintenance</div>
              </div>
            </div>
            <div>
              <span className="ab-tag">One Crew. No Subcontracting.</span>
              <h2 className="ab-h2" id="mosaic-h">We Stay Small on Purpose Full Accountability on Every Job</h2>
              <div className="ab-body">
                <p>Thirteen hundred projects across nine years in Kitsap County. Tight urban backyards. Five-acre rural lots out past Bremerton. Properties that hadn't been touched in years. Hardscape builds on hillsides with serious drainage problems underneath.</p>
                <p>We are not a large operation. That's on purpose. Small means I'm on-site for the work that matters, not just the estimate. When you call with a question, you're getting a straight answer from someone who was there  not a dispatcher reading notes.</p>
                <p>We are not the lowest bid in the county. In nine years, not one client has told me they wished they'd paid less and watched the same problem come back two seasons later.</p>
              </div>
              <ul className="ab-checklist" aria-label="Our commitments">
                {TRUST_ITEMS.map((item,i) => (
                  <li className="ab-check-row" key={i}>
                    <span className="ab-chk" aria-hidden="true"><CheckIcon /></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ═══════════ SERVICES ═══════════ */}
        <section className="ab-section ab-svc" aria-labelledby="svc-h">
          <div className="ab-inner">
            <span className="ab-tag">Everything We Handle</span>
            <h2 className="ab-h2" id="svc-h">Everything We Handle for Kitsap County Homeowners, Start to Finish</h2>
            <p className="ab-lead">One crew. No subcontracting. We don't pad estimates and we don't recommend work that isn't needed.</p>
            <div className="ab-svc-grid" role="list" aria-label="Services offered">
              {SERVICES_LIST.map((svc,i) => (
                <div className="ab-svc-item" key={i} role="listitem">
                  <span className="ab-svc-name">{svc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ CTA ═══════════ */}
        <section className="ab-section ab-cta" aria-label="Get a free estimate">
          <div className="ab-inner">
            <span className="ab-tag">Ready to Get Started?</span>
            <h2 className="ab-cta-h2">Get a Free Estimate Call or Text Ryan Directly</h2>
            <p className="ab-cta-sub">Most calls start with one problem and turn into a full property conversation. That's fine. Start with the part of the property that isn't working. We'll tell you what we're seeing and exactly what it will take to fix it.</p>
            <div className="ab-cta-row">
              <a href="tel:+13609533878" className="btn-amber" style={{fontSize:"1rem",padding:"16px 36px"}}>
                <PhoneIcon size={18} /> Call or Text Ryan Now
              </a>
              <a href="/services" className="btn-ghost" style={{fontSize:"1rem",padding:"16px 36px"}}>
                View All Services <ArrowRight />
              </a>
            </div>
            <p className="ab-cta-note">A to Z Landscaping &amp; More &nbsp;·&nbsp; Ryan Scott Sant &nbsp;·&nbsp; Kitsap County, WA</p>
          </div>
        </section>

      </main>
    </>
  );
}