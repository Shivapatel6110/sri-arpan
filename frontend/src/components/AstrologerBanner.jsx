function AstrologerBanner() {
  return (
    <>
      {/* Raman / Astrologer Banner */}
      <div className="raman-banner-wrap">
        <div className="raman-banner">

          <div>
            <div className="raman-banner-tag">
              ✦ Meet Your Astrologer
            </div>

            <h2>
              Ancient Wisdom, <em>Always Available</em>
            </h2>

            <p>
              Share your concerns and get guidance on the
              right puja, the right time, and the right remedy
              — grounded in centuries of Vedic knowledge,
              available 24 hours a day.
            </p>

            <a
              href="#"
              className="btn-primary"
              style={{ fontSize: "15px" }}
            >
              ✦ Ask Astrologer
            </a>
          </div>

          <div className="raman-chat-preview">

            <div className="raman-chat-header">
              <div className="raman-avatar">R</div>

              <div>
                <div className="raman-chat-name">
                  Raman
                </div>

                <div className="raman-subtext">
                  <span className="raman-vedic">
                    Vedic Knowledge
                  </span>

                  <span className="raman-sep">·</span>

                  <span className="raman-ai">
                    Powered by AI
                  </span>
                </div>
              </div>

              <div className="raman-online">
                Online
              </div>
            </div>

            <div className="chat-bubble user">
              My business has been facing losses for 2 months.
              What should I do?
            </div>

            <div className="chat-bubble bot">
              Based on your birth details, Saturn is in your
              7th house causing financial obstacles. A Shani
              Puja on Saturday at a Shiva temple would help
              greatly. Shall I find the best option near you?
            </div>

            <div className="chat-bubble user">
              Yes, please book it for this Saturday
            </div>

            <div className="chat-bubble bot">
              Found Kashi Vishwanath's Shani Abhishek — ₹851,
              at sunrise on Saturday. Your name and gotra
              will be mentioned. Shall I book it?
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default AstrologerBanner;

