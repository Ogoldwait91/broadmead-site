import { places } from "../../data/explore";
import ExploreCard from "../../components/ExploreCard";

export default function ExplorePage() {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: 24 }}>
            <div className="kicker">Explore Tenby</div>
            <h1 style={{ fontSize: 32, marginTop: 12 }}>Tenby, at an unhurried pace.</h1>
            <p style={{ marginTop: 10, maxWidth: 800, opacity: 0.9 }}>
              A few of our favourite beaches, walks and places to eat — curated to help you savour your time here.
            </p>
          </div>
          <div style={{ display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
            {places.map((place) => (
              <ExploreCard key={place.id} place={place} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
