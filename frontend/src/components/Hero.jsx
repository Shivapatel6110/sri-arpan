import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <>
      <section className="desk-hero">
        <div className="desk-hero-pattern"></div>

        <div className="desk-hero-inner">
          <div>
            <div className="desk-hero-badge">
              Launching soon across India
            </div>

            <h1>
              Your Gateway to <span className="highlight">Sacred</span>{" "}
              Rituals & Blessings
            </h1>

            <p>
              Book authentic pujas at India's most revered temples,
              offer Chadhava, give to the needy — all from anywhere
              in the world.
            </p>

            <div className="desk-hero-actions">
              <button
                className="btn-primary"
                onClick={() =>
                  navigate("/booking", {
                    state: {
                      pujaName: "Satyanarayan Puja",
                      temple: "Kashi Vishwanath Temple",
                      city: "Varanasi",
                      amount: 1100,
                    },
                  })
                }
              >
                🪔 Book a Puja
              </button>

              <button
                className="btn-outline"
                onClick={() => navigate("/astrologer")}
              >
                ✦ Ask Astrologer
              </button>
            </div>

            <div className="desk-hero-stats">
              <div>
                <div className="desk-hero-stat-num">500+</div>
                <div className="desk-hero-stat-label">
                  Temple Partners
                </div>
              </div>

              <div>
                <div className="desk-hero-stat-num">50+</div>
                <div className="desk-hero-stat-label">
                  Types of Pujas
                </div>
              </div>

              <div>
                <div className="desk-hero-stat-num">100%</div>
                <div className="desk-hero-stat-label">
                  Authentic & Verified
                </div>
              </div>
            </div>
          </div>

          <div className="desk-hero-cards">

            <div
              className="desk-hero-card"
              onClick={() =>
                navigate("/booking", {
                  state: {
                    pujaName: "Satyanarayan Puja",
                    temple: "Kashi Vishwanath Temple",
                    city: "Varanasi",
                    amount: 1100,
                  },
                })
              }
              style={{ cursor: "pointer" }}
            >
              <span className="desk-hero-card-icon">🛕</span>
              <div className="desk-hero-card-title">
                Puja Booking
              </div>
              <div className="desk-hero-card-desc">
                Schedule pujas at famous temples across India
              </div>
            </div>

            <div
              className="desk-hero-card"
              onClick={() => navigate("/chadhava")}
              style={{ cursor: "pointer" }}
            >
              <span className="desk-hero-card-icon">🌸</span>
              <div className="desk-hero-card-title">
                Chadhava
              </div>
              <div className="desk-hero-card-desc">
                Offer prasad & flowers at sacred shrines
              </div>
            </div>

            <div
              className="desk-hero-card"
              onClick={() => navigate("/charity")}
              style={{ cursor: "pointer" }}
            >
              <span className="desk-hero-card-icon">🌾</span>
              <div className="desk-hero-card-title">
                Anna Daan
              </div>
              <div className="desk-hero-card-desc">
                Contribute to charity in the name of the divine
              </div>
            </div>

            <div className="desk-hero-card">
              <span className="desk-hero-card-icon">🔯</span>
              <div className="desk-hero-card-title">
                Astrologer
              </div>

              <div className="astro-card-subtext">
                <span className="astro-vedic">
                  Vedic Knowledge
                </span>

                <span className="astro-sep">·</span>

                <span className="astro-ai">
                  Powered by AI
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;