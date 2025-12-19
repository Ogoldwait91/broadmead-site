"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function TopBar() {
  const nav = [
    { href: "/rooms", label: "Rooms" },
    { href: "/gallery", label: "Gallery" },
    { href: "/explore", label: "Explore" },
    { href: "/faq", label: "FAQs" },
    { href: "/contact", label: "Contact" },
  ];

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="topHeader fixed top-0 left-0 w-full z-50">
      <div className="topHeaderInner">
        <Link href="/" className="brandLogo" aria-label="Broadmead Boutique B&B home">
          <Image
            src="/images/broadmead-tenby-logo.png"
            alt="Broadmead Boutique B&B"
            width={220}
            height={60}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="topNav hidden lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="topNavLink">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          style={{
            height: 44,
            width: 44,
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.18)",
            background: "rgba(255,255,255,0.06)",
            color: "rgba(255,255,255,0.92)",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontSize: 18, lineHeight: 1 }}>☰</span>
        </button>
      </div>

      {/* Mobile menu */}
      {open ? (
        <div
          className="lg:hidden"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(15,53,64,0.98)",
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "10px 24px 16px" }}>
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="topNavLink"
                onClick={() => setOpen(false)}
                style={{ display: "block", padding: "10px 0" }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
