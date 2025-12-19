import Link from "next/link";

const links = [
  { href: "/rooms", label: "Rooms" },
  { href: "/explore", label: "Explore" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQs" },
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header style={{ borderBottom: "1px solid rgba(15,31,38,.10)", background: "rgba(246,240,232,.65)" }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0" }}>
        <Link href="/" style={{ fontWeight: 700, letterSpacing: ".02em" }}>
          Broadmead
        </Link>

        <nav aria-label="Primary">
          <ul style={{ display: "flex", gap: 14, listStyle: "none", padding: 0, margin: 0, flexWrap: "wrap", justifyContent: "flex-end" }}>
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} style={{ fontSize: 14, opacity: 0.9 }}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
