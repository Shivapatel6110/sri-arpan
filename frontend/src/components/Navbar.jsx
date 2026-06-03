import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="desk-nav">
      <div className="desk-nav-inner">
        <div className="desk-logo">
          <div className="desk-logo-icon">🪔</div>
          <div className="desk-logo-text">
            Sri Arpan <span>ॐ</span>
          </div>
        </div>

        <div className="desk-nav-links">
          <a href="#featured-pujas">Puja Booking</a>
          <Link to="/chadhava">Chadhava</Link>
          <Link to="/charity">Charity</Link>
          <a href="#" className="astro-link">
            ✦ Ask Astrologer
          </a>
          <a href="#featured-pujas">Book Puja</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;