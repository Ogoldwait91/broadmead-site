import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="fullBleed hero heroBleed" style={{ position: "relative", height: "100svh", minHeight: 680 }}>
        <Image
          src="/images/hero.jpg"
          alt="Broadmead Boutique B&B exterior"
          fill
          priority
          quality={90}
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 55%" }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(8,18,22,.88) 0%, rgba(8,18,22,.66) 40%, rgba(8,18,22,.32) 74%, rgba(8,18,22,.12) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(1200px 520px at 18% 10%, rgba(47,111,115,.28), rgba(47,111,115,0))",
            mixBlendMode: "screen",
            opacity: 0.9,
          }}
        />

        <div style={{ position: "absolute", inset: 0, display: "grid", alignItems: "end" }}>
          <div className="container" style={{ paddingBottom: 76 }}>
            <div style={{ maxWidth: 640, color: "white", textShadow: "0 2px 28px rgba(0,0,0,0.55)" }}>
              <div className="kicker" style={{ color: "rgba(255,255,255,.86)" }}>
                Boutique B&B · Tenby · Pembrokeshire
              </div>

              <h1 className="heroTitle">
                A calm,
                <br />
                characterful base
                <br />
                for the coast.
              </h1>

              <p className="heroCopy">
                Thoughtful rooms, warm hospitality — and Tenby’s harbour, beaches and restaurants on foot.
              </p>

              <div className="heroCtas">
                <a className="btn btnSolid" href="#book">Check availability</a>
                <Link className="btn btnGhost" href="/rooms">View rooms</Link>
              </div>

              <div style={{ marginTop: 12, fontSize: 13, color: "rgba(255,255,255,.74)" }}>
                Book direct for best value and the simplest experience.
              </div>
            </div>
          </div>
        </div>

        <div className="heroScrollCue" aria-hidden="true">
          <span className="heroScrollLabel">Scroll</span>
          <span className="heroScrollLine" />
        </div>
      </section>

      {/* THE FEELING (short, editorial) */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div style={{ maxWidth: 820 }}>
            <div className="kicker">The feeling</div>
            <h2 style={{ fontSize: 34, marginTop: 12 }}>Unhurried, comfortable, quietly confident.</h2>
            <p style={{ marginTop: 14, opacity: 0.9, maxWidth: 660, lineHeight: 1.7 }}>
              Broadmead is the kind of place you return to gladly — soft light, good coffee, and a room that feels calm the moment you close the door.
            </p>

            <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap", gap: 10 }}>
              {["Best sleep", "Seasonal breakfast", "Walk to the harbour"].map((t) => (
                <span
                  key={t}
                  style={{
                    border: "1px solid rgba(15,31,38,.16)",
                    borderRadius: 999,
                    padding: "8px 12px",
                    fontSize: 13,
                    opacity: 0.9,
                    background: "rgba(246,240,232,.55)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            <div style={{ marginTop: 14 }}>
              <Link href="/about" className="pigGalleryLink">
                Read our story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* EDITORIAL IMAGE GRID (keep - it sells the vibe) */}
      <section className="section" style={{ paddingTop: 28 }}>
        <div className="container">
          <div className="pigGallery" style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(12, minmax(0, 1fr))" }}>
            <div className="pigTile" style={{ gridColumn: "span 7", height: 360 }}>
              <Image
                src="/images/dining.webp"
                alt="Dining room"
                fill
                sizes="(max-width: 1120px) 70vw, 760px"
                style={{ objectFit: "cover", objectPosition: "center 55%" }}
              />
              <div className="pigCaption">Dining room</div>
            </div>

            <div style={{ gridColumn: "span 5", display: "grid", gap: 16 }}>
              <div className="pigTile" style={{ height: 172 }}>
                <Image
                  src="/images/lounge.webp"
                  alt="Lounge"
                  fill
                  sizes="(max-width: 1120px) 40vw, 520px"
                  style={{ objectFit: "cover", objectPosition: "center 55%" }}
                />
                <div className="pigCaption">Lounge & fireside</div>
              </div>

              <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
                <div className="pigTile" style={{ height: 172 }}>
                  <Image
                    src="/images/garden.webp"
                    alt="Garden"
                    fill
                    sizes="(max-width: 1120px) 20vw, 260px"
                    style={{ objectFit: "cover", objectPosition: "center 55%" }}
                  />
                  <div className="pigCaption">Garden</div>
                </div>

                <div className="pigTile" style={{ height: 172 }}>
                  <Image
                    src="/images/rear-view.webp"
                    alt="The house"
                    fill
                    sizes="(max-width: 1120px) 20vw, 260px"
                    style={{ objectFit: "cover", objectPosition: "center 55%" }}
                  />
                  <div className="pigCaption">The house</div>
                </div>
              </div>
            </div>
          </div>

          <div className="pigGalleryFooter">
            <div className="pigGalleryNote">
              Quiet spaces, good light, and the kind of comfort you settle into quickly.
            </div>
            <Link href="/gallery" className="pigGalleryLink">
              View the full gallery
            </Link>
          </div>
        </div>
      </section>

      {/* TWO JOURNEY CARDS (stay / explore) */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            <div className="surface" style={{ overflow: "hidden" }}>
              <div style={{ position: "relative", height: 220 }}>
                <Image src="/images/rooms/placeholder.jpg" alt="Rooms" fill sizes="(max-width: 1120px) 100vw, 520px" style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: 18 }}>
                <div className="kicker">Stay</div>
                <h3 style={{ fontSize: 20, marginTop: 10 }}>Rooms made for sleep.</h3>
                <p style={{ marginTop: 10, fontSize: 14, opacity: 0.9 }}>
                  Calm interiors, good linens, and the quiet you only notice when it’s there.
                </p>
                <div style={{ marginTop: 12 }}>
                  <Link href="/rooms" className="pigGalleryLink">View rooms</Link>
                </div>
              </div>
            </div>

            <div className="surface" style={{ overflow: "hidden" }}>
              <div style={{ position: "relative", height: 220 }}>
                <Image src="/images/explore/placeholder.jpg" alt="Explore Tenby" fill sizes="(max-width: 1120px) 100vw, 520px" style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: 18 }}>
                <div className="kicker">Explore</div>
                <h3 style={{ fontSize: 20, marginTop: 10 }}>Tenby, at an unhurried pace.</h3>
                <p style={{ marginTop: 10, fontSize: 14, opacity: 0.9 }}>
                  Harbour walks, the right beach for the tide, and the best table for the night.
                </p>
                <div style={{ marginTop: 12 }}>
                  <Link href="/explore" className="pigGalleryLink">Our recommendations</Link>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 12, fontSize: 13, opacity: 0.75 }}>
            Tip: replace the two placeholder images with your best “room” and “Tenby” shots.
          </div>
        </div>
      </section>

      {/* TRUST (single line, quiet) */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ maxWidth: 760 }}>
            <p style={{ fontSize: 16, opacity: 0.9 }}>
              Guests consistently rate Broadmead highly for location, breakfast, and comfort.
            </p>
            <div style={{ marginTop: 10 }}>
              <a
                href="https://www.google.com/search?q=Broadmead+Boutique+B%26B+Tenby+reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="pigGalleryLink"
              >
                Read recent reviews →
              </a>
            </div>
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
              Broadmead Boutique B&B · Tenby, Pembrokeshire
              <br />
              A calm, characterful base for the coast.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
