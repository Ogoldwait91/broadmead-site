import { rooms } from "../../data/rooms";
import RoomCard from "../../components/RoomCard";

export default function RoomsPage() {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: 24 }}>
            <div className="kicker">The rooms</div>
            <h1 style={{ fontSize: 32, marginTop: 12 }}>Thoughtful, quiet, and made for sleep.</h1>
            <p style={{ marginTop: 12, maxWidth: 680, opacity: 0.9 }}>
              Individually styled rooms with soft linens and a calm palette for unbroken rest.
            </p>
          </div>
          <div style={{ display: "grid", gap: 24, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
