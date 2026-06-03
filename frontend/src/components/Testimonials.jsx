function Testimonials() {
  return (
    <>
      {/* Testimonials */}
      <div
        style={{
          background: "var(--cream)",
          padding: "1px 0",
        }}
      >
        <div className="desk-section">
          <div style={{ textAlign: "center" }}>
            <div
              className="section-label"
              style={{ justifyContent: "center" }}
            >
              <span
                style={{
                  display: "block",
                  width: "24px",
                  height: "1.5px",
                  background: "var(--saffron)",
                }}
              ></span>

              Devotee Stories

              <span
                style={{
                  display: "block",
                  width: "24px",
                  height: "1.5px",
                  background: "var(--saffron)",
                }}
              ></span>
            </div>

            <h2 className="section-title">
              What Our <span className="em">Devotees</span> Say
            </h2>
          </div>

          <div className="desk-testimonials">

            <div className="testi-card">
              <div className="testi-stars">★★★★★</div>

              <div className="testi-text">
                "I was in London and felt spiritually connected
                to Kashi. Receiving the puja video on WhatsApp
                and the prasad at my door made it feel
                completely real."
              </div>

              <div className="testi-author">
                <div className="testi-avatar">RK</div>

                <div>
                  <div className="testi-name">
                    Rajesh Kumar
                  </div>

                  <div className="testi-loc">
                    London, UK
                  </div>
                </div>
              </div>
            </div>

            <div className="testi-card">
              <div className="testi-stars">★★★★★</div>

              <div className="testi-text">
                "The astrologer suggested a Shani Puja for my
                career. Knowing my name and gotra were
                mentioned before the deity made it feel truly
                personal. Things improved within weeks."
              </div>

              <div className="testi-author">
                <div className="testi-avatar">PS</div>

                <div>
                  <div className="testi-name">
                    Priya Sharma
                  </div>

                  <div className="testi-loc">
                    Bengaluru, India
                  </div>
                </div>
              </div>
            </div>

            <div className="testi-card">
              <div className="testi-stars">★★★★★</div>

              <div className="testi-text">
                "Booked Anna Daan at Tirupati for my mother's
                birthday. The video proof and prasad delivery
                meant the world to her. She was in tears
                watching the video."
              </div>

              <div className="testi-author">
                <div className="testi-avatar">AM</div>

                <div>
                  <div className="testi-name">
                    Anjali Mehta
                  </div>

                  <div className="testi-loc">
                    Dubai, UAE
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
