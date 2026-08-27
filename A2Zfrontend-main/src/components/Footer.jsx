const VisaCard = () => (
  <svg viewBox="0 0 90 56" xmlns="http://www.w3.org/2000/svg" aria-label="Visa" style={cardStyle}>
    <rect width="90" height="56" rx="6" fill="#1A1F71"/>
    <rect x="7" y="16" width="16" height="12" rx="2.5" fill="#D4AF37" opacity=".8"/>
    <rect x="9" y="18" width="12" height="8" rx="1.5" fill="rgba(0,0,0,.28)"/>
    <line x1="15" y1="16" x2="15" y2="28" stroke="rgba(0,0,0,.2)" strokeWidth=".9"/>
    <line x1="7" y1="22" x2="23" y2="22" stroke="rgba(0,0,0,.2)" strokeWidth=".9"/>
    <text x="83" y="47" textAnchor="end" fontFamily="Arial Black,Arial,sans-serif" fontSize="21" fontWeight="900" fontStyle="italic" letterSpacing="-1" fill="#fff">VISA</text>
  </svg>
);

const MastercardCard = () => (
  <svg viewBox="0 0 90 56" xmlns="http://www.w3.org/2000/svg" aria-label="Mastercard" style={cardStyle}>
    <defs><clipPath id="mc"><circle cx="33" cy="26" r="15"/></clipPath></defs>
    <rect width="90" height="56" rx="6" fill="#1E1E1E"/>
    <circle cx="33" cy="26" r="15" fill="#EB001B"/>
    <circle cx="57" cy="26" r="15" fill="#F79E1B"/>
    <circle cx="57" cy="26" r="15" fill="#FF5F00" clipPath="url(#mc)"/>
    <text x="45" y="50" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="5.5" fontWeight="700" letterSpacing=".5" fill="rgba(255,255,255,.65)">MASTERCARD</text>
  </svg>
);

const AmexCard = () => (
  <svg viewBox="0 0 90 56" xmlns="http://www.w3.org/2000/svg" aria-label="American Express" style={cardStyle}>
    <rect width="90" height="56" rx="6" fill="#016FD0"/>
    <text x="10" y="31" fontFamily="Arial Black,Arial,sans-serif" fontSize="15" fontWeight="900" letterSpacing="1.5" fill="#fff">AMEX</text>
    <text x="10" y="46" fontFamily="Arial,sans-serif" fontSize="5" fontWeight="700" letterSpacing=".4" fill="rgba(255,255,255,.58)">AMERICAN EXPRESS</text>
  </svg>
);

const DiscoverCard = () => (
  <svg viewBox="0 0 90 56" xmlns="http://www.w3.org/2000/svg" aria-label="Discover" style={cardStyle}>
    <rect width="90" height="56" rx="6" fill="#F5F5F5"/>
    <circle cx="82" cy="28" r="26" fill="#F76F20"/>
    <circle cx="82" cy="28" r="17" fill="#FF8C00" opacity=".5"/>
    <text x="8" y="23" fontFamily="Arial Black,Arial,sans-serif" fontSize="9" fontWeight="900" fill="#231F20">DISCOVER</text>
    <line x1="8" y1="27" x2="52" y2="27" stroke="#CCC" strokeWidth=".8"/>
    <text x="8" y="36" fontFamily="Arial,sans-serif" fontSize="5" fontWeight="600" fill="#888">CARD SERVICES</text>
  </svg>
);

const cardStyle = {
  width: "80px",
  height: "auto",
  borderRadius: "6px",
  boxShadow: "0 3px 12px rgba(0,0,0,.45)",
  display: "block",
};

export default function Footer() {
  return (
    <footer style={{
      background: "#0E1F11",
      borderTop: "3px solid #C4883A",
      padding: "24px 20px 16px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "16px",
    }}>

      {/* Cards row */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
        <VisaCard />
        <MastercardCard />
        <AmexCard />
        <DiscoverCard />
      </div>

      {/* Powered by */}
      <a
        href="https://themarketingwizardz.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: "12px",
          color: "rgba(255,255,255,.4)",
          textDecoration: "none",
        }}
      >
        ✦ Powered by <strong style={{ color: "rgba(255,255,255,.7)" }}>The Marketing Wizardz</strong>
      </a>

    </footer>
  );
}