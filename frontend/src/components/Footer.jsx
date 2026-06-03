function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="desk-footer">
        <div className="desk-footer-inner">

          <div className="desk-footer-grid">

            <div>
              <div className="footer-brand">
                🪔 Sri Arpan
              </div>

              <div className="footer-tagline">
                Connecting devotees across the world to India's
                sacred temples. Authentic rituals, verified
                purohits, divine blessings — delivered to you.
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap",
                }}
              >
                <a
                  href="#"
                  style={{
                    background: "var(--saffron)",
                    color: "#fff",
                    fontSize: "12px",
                    fontWeight: "600",
                    padding: "8px 14px",
                    borderRadius: "7px",
                    textDecoration: "none",
                  }}
                >
                  🪔 Book a Puja
                </a>

                <a
                  href="#"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    color: "rgba(255,255,255,0.7)",
                    fontSize: "12px",
                    padding: "8px 14px",
                    borderRadius: "7px",
                    textDecoration: "none",
                    border:
                      "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  ✦ Ask Astrologer
                </a>
              </div>
            </div>

            <div>
              <div className="footer-col-title">
                Services
              </div>

              <ul className="footer-links">
                <li><a href="#">Puja Booking</a></li>
                <li><a href="#">Chadhava</a></li>
                <li><a href="#">Anna Daan</a></li>
                <li><a href="#">Ask Astrologer</a></li>
                <li><a href="#">Gift a Puja</a></li>
              </ul>
            </div>

            <div>
              <div className="footer-col-title">
                Explore
              </div>

              <ul className="footer-links">
                <li><a href="#">All Temples</a></li>
                <li><a href="#">Festival Calendar</a></li>
                <li><a href="#">Puja Guide</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>

            <div>
              <div className="footer-col-title">
                Support
              </div>

              <ul className="footer-links">
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>

          </div>

          <div className="footer-bottom">
            <div className="footer-copy">
              © 2025 Sri Arpan. All rights reserved.
              · Jai Shri Ram 🙏
            </div>

            <div className="footer-social">
              <a href="#">f</a>
              <a href="#">in</a>
              <a href="#">▶</a>
              <a href="#">✦</a>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}

export default Footer;
