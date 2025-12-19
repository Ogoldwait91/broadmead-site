import { faqs } from "../../data/faqs";

export default function FaqPage() {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: 24 }}>
            <div className="kicker">FAQs</div>
            <h1 style={{ fontSize: 32, marginTop: 12 }}>Frequently Asked Questions</h1>
            <p style={{ marginTop: 10, maxWidth: 680, opacity: 0.9 }}>
              Answers to some common questions. If there\\u2019s anything else you\\u2019d like to know, please get in touch.
            </p>
          </div>
          <div style={{ display: "grid", gap: 16 }}>
            {faqs.map((faq) => (
              <details key={faq.id} style={{ background: "rgba(15,31,38,0.03)", padding: "14px 18px", borderRadius: 4 }}>
                <summary style={{ cursor: "pointer", fontWeight: 600 }}>{faq.question}</summary>
                <p style={{ marginTop: 8, opacity: 0.85 }}>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
