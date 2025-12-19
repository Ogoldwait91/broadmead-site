import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* HERO (full-bleed, proper overlay, readable text) */}
      <section className="fullBleed" style={{ position: "relative", height: "78vh", minHeight: 520 }}>
        <Image
          src="/images/hero.jpg"
          alt="Broadmead Boutique B&B exterior"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />

        {/* overlay (Pig-style: dark left, lighter right) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(8,18,22,.78) 0%, rgba(8,18,22,.52) 38%, rgba(8,18,22,.22) 70%, rgba(8,18,22,.06) 100%)",
          }}
        />

        {/* subtle coastal tint */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(1200px 520px at 18% 10%, rgba(47,111,115,.28), rgba(47,111,115,0))",
            mixBlendMode: "screen",
            opacity: 0.9,
          }}
        />

        <div style={{ position: "absolute", inset: 0, display: "grid", alignItems: "end" }}>
          <div className="container" style={{ paddingBottom: 64 }}>
            <div style={{ maxWidth: 560, color: "white" }}>
              <div className="kicker" style={{ color: "rgba(255,255,255,.78)" }}>
                Boutique B&B Tenby Pembrokeshire
              </div>

              <h1
                style={{
                  fontSize: 62,
                  lineHeight: 1.02,
                  marginTop: 18,
                  maxWidth: 620
                }}
              >

                A calm,
                <br />
                characterful base
                <br />
                for the coast.
              </h1>

              <p style={{ marginTop: 16, color: "rgba(255,255,255,.82)", fontSize: 18, maxWidth: 520 }}>
                Thoughtful rooms, warm hospitality, and an easy walk to Tenbys beaches, harbour, and restaurants.
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 20 }}>
                <a className="btn btnSolid" href="#book">Check availability</a>
                <Link className="btn btnGhost" href="/rooms">View rooms</Link>
              </div>

              <div style={{ marginTop: 12, fontSize: 13, color: "rgba(255,255,255,.74)" }}>
                Book direct for best value and the simplest experience.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOUSE (editorial, not boxy) */}
      <section className="section">
        <div className="container" style={{ display: "grid", gap: 28, gridTemplateColumns: "1fr" }}>
          <div>
            <div className="kicker">The house</div>
            <h2 style={{ fontSize: 34, marginTop: 12 }}>Boutique comfort, unhurried.</h2>
            <p style={{ marginTop: 18, maxWidth: 520, opacity: 0.9 }}>
              Broadmead is a calm base with Tenby on the doorstep peaceful to return to, easy to settle into.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY (TRUE 3-UP ROW, fixed heights, not enormous) */}
      <section className="section" style={{ paddingTop: 10 }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16 }}>
            <div>
              <div className="kicker">Gallery</div>
              <h2 style={{ fontSize: 30, marginTop: 12 }}>A feel for the place.</h2>
              <p style={{ marginTop: 10, maxWidth: 860 }}>
                Calm interiors, thoughtful details designed for comfort and quiet.
              </p>
            </div>
            <Link href="/gallery" className="navLink" style={{ color: "var(--text)" }}>View gallery</Link>
          </div>

          <div
            style={{
              marginTop: 18,
              display: "grid",
              gap: 16,
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            }}
          >
            {[
              { src: "/images/room-1.jpg", alt: "Room One" },
              { src: "/images/room-2.jpg", alt: "Room Two" },
              { src: "/images/room-3.jpg", alt: "Room Three" },
            ].map((img) => (
              <div key={img.src} className="surface" style={{ overflow: "hidden", height: 210, position: "relative" }}>
                <Image src={img.src} alt={img.alt} fill sizes="(max-width: 1120px) 33vw, 360px" style={{ objectFit: "cover" }} />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, rgba(0,0,0,.00), rgba(0,0,0,.18))",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROOMS (3-UP cards, consistent scale) */}
      <section className="section" style={{ paddingTop: 8 }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16 }}>
            <div>
              <div className="kicker">Rooms</div>
              <h2 style={{ fontSize: 30, marginTop: 12 }}>Choose your room.</h2>
            </div>
            <Link href="/rooms" className="navLink" style={{ color: "var(--text)" }}>See all rooms</Link>
          </div>

          <div
            style={{
              marginTop: 18,
              display: "grid",
              gap: 16,
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            }}
          >
            {[
              { name: "Room One", note: "Light, calm, and comfortable.", src: "/images/room-1.jpg" },
              { name: "Room Two", note: "A characterful room with thoughtful touches.", src: "/images/room-2.jpg" },
              { name: "Room Three", note: "Ideal for a longer, slower stay.", src: "/images/room-3.jpg" },
            ].map((r) => (
              <div key={r.name} className="surface" style={{ overflow: "hidden" }}>
                <div style={{ position: "relative", height: 190 }}>
                  <Image src={r.src} alt={r.name} fill sizes="(max-width: 1120px) 33vw, 360px" style={{ objectFit: "cover" }} />
                </div>
                <div style={{ padding: 16 }}>
                  <h3 style={{ fontSize: 18 }}>{r.name}</h3>
                  <p style={{ marginTop: 8, fontSize: 14 }}>{r.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section id="book" className="section">
        <div className="container">
          <div className="surface" style={{ padding: 22 }}>
            <div className="kicker">Book direct</div>
            <h2 style={{ fontSize: 28, marginTop: 12 }}>Availability & rates.</h2>
            <p style={{ marginTop: 10, maxWidth: 860 }}>
              Quick link to your live booking page. We can embed the booking widget later.
            </p>
            <div style={{ marginTop: 16 }}>
              <a className="btn btnSolid" href="https://broadmeadtenby.wales/availability-tariff">Availability & Rates</a>
            </div>
          </div>

          <div style={{ paddingTop: 28, fontSize: 13, color: "rgba(15,31,38,0.55)" }}>
            <div style={{ maxWidth: 520 }}>
              Broadmead Boutique B&B Tenby, Pembrokeshire
              <br />
              A calm, characterful base for the coast.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
