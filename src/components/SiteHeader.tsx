import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Rooms" },
  { href: "/gallery", label: "Gallery" },
  { href: "/explore", label: "Explore Tenby" },
  { href: "/faq", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="text-lg font-semibold tracking-tight">Broadmead</span>
          <span className="text-sm text-gray-500">Tenby</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-gray-700 hover:text-gray-900"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="/#book"
            className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
          >
            Book Direct
          </a>
        </nav>

        <div className="md:hidden">
          <a
            href="/#book"
            className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-800"
          >
            Book
          </a>
        </div>
      </div>
    </header>
  );
}
