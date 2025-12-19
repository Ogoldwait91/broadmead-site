import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Story",
  description: "The story of Broadmead — a calm Tenby house designed for unhurried stays.",
};

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ display: "grid", gap: 22, maxWidth: 980, margin: "0 auto" }}>
          <div>
            <div className="kicker">Our story</div>
            <h1 style={{ fontSize: 36, marginTop: 12 }}>A house made for exhaling.</h1>
            <p style={{ marginTop: 12, opacity: 0.9, maxWidth: 760 }}>
              Broadmead is a quietly confident Tenby house — the sort of place you arrive, drop your shoulders,
              and instantly feel you’ve been here before.
            </p>
          </div>

          <div className="surface" style={{ overflow: "hidden" }}>
            <div style={{ position: "relative", height: 420 }}>
              <Image
                src="/images/rear-view.webp"
                alt="Broadmead Boutique B&B exterior"
                fill
                priority
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          <div className="prose" style={{ maxWidth: 820 }}>
            <p>
              Our philosophy is simple: beautiful rooms, excellent sleep, and breakfasts that feel seasonal and generous.
              The rest is left intentionally open — time for harbour walks, beach air, long lunches, and late returns.
            </p>
            <p>
              The interiors are calm, warm and natural — linen, timber, soft light. Less hotel, more house you wish
              you owned. We keep things elegant, never fussy.
            </p>

            <div className="hr" style={{ margin: "18px 0" }} />

            <p style={{ fontStyle: "italic", opacity: 0.9 }}>
              “Arrive early, walk down to the harbour, come back for a shower and a book. Dinner somewhere you’ll
              remember. Sleep like you mean it.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
