import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <header className="global_menu">
      <div className="global">
        <div className="menu_logo">
          <img src={"../images/logo trắng.png"} alt="AMPERACT logo" />
        </div>
        <nav className="gnav">
          <ul className="nav-links">
            <li><Link to="/">ホーム</Link></li>
            <li><Link to="/service">サービス</Link></li>
            <li><Link to="/company">会社</Link></li>
            <li><Link to="/contact">コンタクト</Link></li>
            <li><Link to="/map">マップ</Link></li>
          </ul>
        </nav>
        <div className="navbar-icon" onClick={toggleMobileNav}>
          {mobileNavOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
      <div className={`mobile-nav ${mobileNavOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li><Link to="/" onClick={toggleMobileNav}>ホーム</Link></li>
          <li><Link to="/service" onClick={toggleMobileNav}>サービス</Link></li>
          <li><Link to="/company" onClick={toggleMobileNav}>会社</Link></li>
          <li><Link to="/contact" onClick={toggleMobileNav}>コンタクト</Link></li>
          <li><Link to="/map" onClick={toggleMobileNav}>マップ</Link></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
