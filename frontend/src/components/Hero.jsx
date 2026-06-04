import React from 'react';

const HeroSection = () => {
  return (
    <>
      <section className="desk-hero">
        <div className="desk-hero-pattern"></div>
        <div className="desk-hero-inner">
          <div>
            <div className="desk-hero-badge">Launching soon across India</div>
            <h1>Your Gateway to <span className="highlight">Sacred</span> Rituals & Blessings</h1>
            <p>Book authentic pujas at India's most revered temples, offer Chadhava, give to the needy — all from anywhere in the world.</p>
            <div class="desk-hero-actions">
              <a href="#" className="btn-primary">🪔 Book a Puja</a>
              <a href="#" className="btn-outline">✦ Ask Astrologer</a>
            </div>
            <div className="desk-hero-stats">
              <div><div className="desk-hero-stat-num">500+</div><div className="desk-hero-stat-label">Temple Partners</div></div>
              <div><div className="desk-hero-stat-num">50+</div><div className="desk-hero-stat-label">Types of Pujas</div></div>
              <div><div className="desk-hero-stat-num">100%</div><div className="desk-hero-stat-label">Authentic & Verified</div></div>
            </div>
          </div>
          
          {/* 4 equal hero cards — 2x2 grid */}
          <div className="desk-hero-cards">
            <div className="desk-hero-card">
              <span className="desk-hero-card-icon">🛕</span>
              <div className="desk-hero-card-title">Puja Booking</div>
              <div className="desk-hero-card-desc">Schedule pujas at famous temples across India</div>
            </div>
            <div className="desk-hero-card">
              <span className="desk-hero-card-icon">🌸</span>
              <div className="desk-hero-card-title">Chadhava</div>
              <div className="desk-hero-card-desc">Offer prasad & flowers at sacred shrines</div>
            </div>
            <div className="desk-hero-card">
              <span className="desk-hero-card-icon">🌾</span>
              <div className="desk-hero-card-title">Anna Daan</div>
              <div className="desk-hero-card-desc">Contribute to charity in the name of the divine</div>
            </div>
            <div className="desk-hero-card">
              <span className="desk-hero-card-icon">🔯</span>
              <div className="desk-hero-card-title">Astrologer</div>
              <div className="astro-card-subtext">
                <span class="astro-vedic">Vedic Knowledge</span>
                <span class="astro-sep">·</span>
                <span class="astro-ai">Powered by AI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Proof Strip — Dark, Option A — right after hero */}
      <div className="trust-proof-strip">
        <div className="trust-proof-item">
          <div className="trust-proof-icon">🎥</div>
          <div><div className="trust-proof-title">Video Proof</div><div className="trust-proof-sub">Full puja video sent to you</div></div>
        </div>
        <div className="trust-proof-item">
          <div className="trust-proof-icon">🙏</div>
          <div><div className="trust-proof-title">Your Name & Gotra Mentioned</div><div className="trust-proof-sub">Personally offered before the deity</div></div>
        </div>
        <div className="trust-proof-item">
          <div className="trust-proof-icon">📦</div>
          <div><div className="trust-proof-title">Prasad Delivery</div><div className="trust-proof-sub">Delivered to your doorstep</div></div>
        </div>
        <div className="trust-proof-item">
          <div className="trust-proof-icon">✅</div>
          <div><div className="trust-proof-title">100% Verified Authentic Purohits</div><div className="trust-proof-sub">Trained, trusted & temple-approved</div></div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
