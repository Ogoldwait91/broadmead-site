export default function ContactPage() {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: 24 }}>
            <div className="kicker">Contact</div>
            <h1 style={{ fontSize: 32, marginTop: 12 }}>Contact & Location</h1>
            <p style={{ marginTop: 10, maxWidth: 680, opacity: 0.9 }}>
              We\\u2019d love to hear from you. Send us a message or call us and we\\u2019ll get back to you as soon as we can.
            </p>
          </div>
          <div style={{ display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            <div>
              <h3 style={{ fontSize: 20, marginBottom: 8 }}>Address</h3>
              <p>Broadmead Boutique B&B<br/>Tenby, Pembrokeshire<br/>SA70 7LE</p>
              <h3 style={{ fontSize: 20, marginTop: 20, marginBottom: 8 }}>Contact</h3>
              <p>
                <a href="tel:+441234567890" className="pigGalleryLink">+44 (0)1234 567 890</a><br/>
                <a href="mailto:stay@broadmead.example.com" className="pigGalleryLink">stay@broadmead.example.com</a>
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: 20, marginBottom: 8 }}>Find us</h3>
              <p>Tenby railway station is a 10‑minute walk. Parking is available on site with prior arrangement.</p>
              <p style={{ marginTop: 8 }}>
                <a href="https://maps.google.com/?q=Broadmead+Boutique+Tenby+Pembrokeshire" target="_blank" rel="noopener noreferrer" className="pigGalleryLink">
                  View on Google Maps
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
