import { useNavigate } from "react-router-dom";
function FeaturedPujas() {
  const navigate = useNavigate();

  const handleBooking = (pujaName, temple, city, amount) => {
    navigate("/booking", {
      state: {
        pujaName,
        temple,
        city,
        amount,
      },
    });
  };

  return (
    <>
      {/* Featured Pujas */}
      <section id="featured-pujas"></section>
      <div
        style={{
          background: "var(--cream-dark)",
          padding: "1px 0",
        }}
      >
        <div className="desk-section">
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div className="section-label">Sacred Rituals</div>

              <h2 className="section-title">
                Featured <span className="em">Pujas</span>
              </h2>
            </div>

            <a
              href="#"
              style={{
                color: "var(--saffron)",
                fontWeight: 600,
                textDecoration: "none",
                fontSize: "14px",
                paddingBottom: "10px",
              }}
            >
              View All Pujas →
            </a>
          </div>

          <div className="puja-grid">
            {/* Puja Card 1 */}
            <div className="puja-card">
              <div className="puja-card-img">
                🪔
                <span className="puja-tag">POPULAR</span>
              </div>

              <div className="puja-card-body">
                <div className="puja-card-title">Satyanarayan Puja</div>

                <div className="puja-card-info">
                  🛕 Kashi Vishwanath, Varanasi
                </div>

                <div className="puja-card-proof">
                  <span>🎥 Video Proof</span>
                  <span>🙏 Name & Gotra</span>
                  <span>📦 Prasad</span>
                </div>

                <div className="puja-price-row">
                  <div className="puja-price">
                    ₹1,100 <small>onwards</small>
                  </div>

                  <button
                    className="btn-book"
                    onClick={() =>
                      handleBooking(
                        "Satyanarayan Puja",
                        "Kashi Vishwanath Temple",
                        "Varanasi",
                        1100,
                      )
                    }
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Puja Card 2 */}
            <div className="puja-card">
              <div className="puja-card-img c2">
                🌺
                <span className="puja-tag">TRENDING</span>
              </div>

              <div className="puja-card-body">
                <div className="puja-card-title">Rudrabhishek Puja</div>

                <div className="puja-card-info">🛕 Mahakaleshwar, Ujjain</div>

                <div className="puja-card-proof">
                  <span>🎥 Video Proof</span>
                  <span>🙏 Name & Gotra</span>
                  <span>📦 Prasad</span>
                </div>

                <div className="puja-price-row">
                  <div className="puja-price">
                    ₹2,100 <small>onwards</small>
                  </div>

                  <button
                    className="btn-book"
                    onClick={() =>
                      handleBooking(
                        "Rudrabhishek Puja",
                        "Mahakaleshwar Temple",
                        "Ujjain",
                        2100,
                      )
                    }
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Puja Card 3 */}
            <div className="puja-card">
              <div className="puja-card-img c3">
                🌿
                <span className="puja-tag">CHARITABLE</span>
              </div>

              <div className="puja-card-body">
                <div className="puja-card-title">Anna Daan Seva</div>

                <div className="puja-card-info">
                  🛕 Tirupati Balaji, Andhra Pradesh
                </div>

                <div className="puja-card-proof">
                  <span>🎥 Video Proof</span>
                  <span>🙏 Name & Gotra</span>
                  <span>📦 Prasad</span>
                </div>

                <div className="puja-price-row">
                  <div className="puja-price">
                    ₹501 <small>onwards</small>
                  </div>

                  <button
                    className="btn-book"
                    style={{
                      background: "#1E8C50",
                    }}
                    onClick={() =>
                      handleBooking(
                        "Anna Daan Seva",
                        "Tirupati Balaji Temple",
                        "Tirupati",
                        501,
                      )
                    }
                  >
                    Donate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedPujas;
