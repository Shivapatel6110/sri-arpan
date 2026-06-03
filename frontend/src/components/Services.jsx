function Services() {
  return (
    <>
      {/* Services */}
      <div style={{ background: "var(--cream)", padding: "1px 0" }}>
        <div className="desk-section">
          <div className="section-label">Our Services</div>

          <h2 className="section-title">
            Everything for Your <span className="em">Devotion</span>
          </h2>

          <p className="section-sub">
            From booking sacred rituals to offering Chadhava —
            all verified, all meaningful, all from the comfort
            of your home.
          </p>

          <div className="desk-services-grid">
            <div className="service-card">
              <div className="service-card-icon">🛕</div>

              <div className="service-card-title">
                Puja Booking
              </div>

              <div className="service-card-desc">
                Book pujas at 500+ temples. Our pandit performs
                the ritual on your behalf with video proof and
                prasad delivery.
              </div>

              <a href="#" className="service-card-link">
                Book Now →
              </a>
            </div>

            <div className="service-card">
              <div className="service-card-icon">🌸</div>

              <div className="service-card-title">
                Chadhava
              </div>

              <div className="service-card-desc">
                Offer flowers, sweets, and sacred items at
                temples across India. Receive photo and video
                confirmation of your offering.
              </div>

              <a href="#" className="service-card-link">
                Offer Now →
              </a>
            </div>

            <div className="service-card charity">
              <div className="service-card-icon">🌾</div>

              <div className="service-card-title">
                Charity Acts
              </div>

              <div className="service-card-desc">
                Donate Anna Daan at temples across India.
                Performed in your name and gotra with full
                video proof sent to you.
              </div>

              <a
                href="#"
                className="service-card-link"
                style={{ color: "#1E8C50" }}
              >
                Donate →
              </a>
            </div>

            <div className="service-card astro-card-svc">
              <div className="service-card-icon">🔯</div>

              <div className="service-card-title">
                Astrologer
              </div>

              <div className="svc-astro-subtext">
                <span className="svc-astro-vedic">
                  Vedic Knowledge
                </span>

                <span className="svc-astro-sep">·</span>

                <span className="svc-astro-ai">
                  Powered by AI
                </span>
              </div>

              <div className="service-card-desc">
                Ask about your kundali, career, health, or
                family. Get personalized puja recommendations
                as remedies.
              </div>

              <a
                href="#"
                className="service-card-link"
                style={{ color: "var(--gold)" }}
              >
                Ask Now →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;

