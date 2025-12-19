import Link from "next/link";

const nav = [
  { href: "/rooms", label: "Rooms" },
  { href: "/gallery", label: "Gallery" },
  { href: "/explore", label: "Explore" },
  { href: "/faq", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        borderColor: "var(--line)",
        background: "rgba(246,248,247,0.80)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-baseline gap-2 no-underline">
          <span className="text-[15px] font-semibold tracking-tight">Broadmead</span>
          <span className="text-[13px]" style={{ color: "var(--muted)" }}>
            Tenby
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium no-underline hover:opacity-80"
            >
              {item.label}
            </Link>
          ))}
          <a href="/#book" className="btn btn-primary" style={{ padding: "0.6rem 1rem" }}>
            Book Direct
          </a>
        </nav>

        <div className="md:hidden">
          <a href="/#book" className="btn btn-primary" style={{ padding: "0.55rem 0.9rem" }}>
            Book
          </a>
        </div>
      </div>
    </header>
  );
}
