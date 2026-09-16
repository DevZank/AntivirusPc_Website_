import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/Logo1.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = (
    <ul className="nav-list">
      <li>
        <Link
          to="/"
          className={location.pathname === '/' ? 'active' : ''}
          onClick={closeMenu}
        >
          HOME
        </Link>
      </li>
      <li>
        <Link
          to="/servicos"
          className={location.pathname === '/servicos' ? 'active' : ''}
          onClick={closeMenu}
        >
          SERVIÇOS
        </Link>
      </li>
      <li>
        <Link
          to="/contato"
          className={location.pathname === '/contato' ? 'active' : ''}
          onClick={closeMenu}
        >
          FALE CONOSCO
        </Link>
      </li>
    </ul>
  );

  return (
    <>
      {/* Main Header */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <Link to="/" className="logo" onClick={closeMenu}>
              <img src={Logo} alt="ANTPC Logo" className="logo-image" />
              <div className="logo-text-container">
                <span className="logo-subtitle">ANTIVIRUS PC</span>
              </div>
            </Link>

            {/* Desktop Navigation - inside header */}
            <nav className="nav nav-desktop">
              {navLinks}
            </nav>

            {/* Mobile Menu Toggle */}
            <button className="menu-toggle" onClick={toggleMenu} aria-label="Abrir menu">
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation - OUTSIDE header to avoid stacking context issues */}
      <nav className={`nav-mobile ${isMenuOpen ? 'nav-mobile-open' : ''}`} aria-hidden={!isMenuOpen}>
        {navLinks}
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </>
  );
};

export default Header;
