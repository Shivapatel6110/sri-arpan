import React from 'react';
import { useNavigate } from "react-router-dom";

const FeaturedPujas = () => {
  const navigate = useNavigate();
  const pujaData = [
    {
      id: 1,
      icon: '🪔',
      tag: 'POPULAR',
      tagClass: '',
      title: 'Satyanarayan Puja',
      location: '🛕 Kashi Vishwanath, Varanasi',
      price: '₹1,100',
      btnText: 'Book Now',
      btnStyle: {}
    },
    {
      id: 2,
      icon: '🌺',
      tag: 'TRENDING',
      tagClass: 'c2',
      title: 'Rudrabhishek Puja',
      location: '🛕 Mahakaleshwar, Ujjain',
      price: '₹2,100',
      btnText: 'Book Now',
      btnStyle: {}
    },
    {
      id: 3,
      icon: '🌿',
      tag: 'CHARITABLE',
      tagClass: 'c3',
      title: 'Anna Daan Seva',
      location: '🛕 Tirupati Balaji, Andhra Pradesh',
      price: '₹501',
      btnText: 'Donate',
      btnStyle: { background: '#1E8C50' }
    }
  ];

  return (
    <div style={{ background: 'var(--cream-dark)', padding: '1px 0' }}>
      <div className="desk-section">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div>
            <div className="section-label">Sacred Rituals</div>
            <h2 className="section-title">
              Featured <span className="em">Pujas</span>
            </h2>
          </div>
          <a
            href="#"
            style={{
              color: 'var(--saffron)',
              fontWeight: 600,
              textDecoration: 'none',
              fontSize: '14px',
              paddingBottom: '10px'
            }}
          >
            View All Pujas →
          </a>
        </div>

        <div className="puja-grid">
          {pujaData.map((puja) => (
            <div className="puja-card" key={puja.id}>
              <div className={`puja-card-img ${puja.tagClass}`}>
                {puja.icon}
                <span className="puja-tag">{puja.tag}</span>
              </div>
              <div className="puja-card-body">
                <div className="puja-card-title">{puja.title}</div>
                <div className="puja-card-info">{puja.location}</div>
                <div className="puja-card-proof">
                  <span>🎥 Video Proof</span>
                  <span>🙏 Name & Gotra</span>
                  <span>📦 Prasad</span>
                </div>
                <div className="puja-price-row">
                  <div className="puja-price">
                    {puja.price} <small>onwards</small>
                  </div>
                  <button className="btn-book" style={puja.btnStyle}>
                    {puja.btnText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPujas;
