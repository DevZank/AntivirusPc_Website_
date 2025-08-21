import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaInstagram, FaClock } from 'react-icons/fa';
import './Footer.css';
import Logo from '../../assets/Logo1.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsApp = () => {
    const phoneNumber = '5511951206367';
    const message = 'Olá';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <h3>SOBRE NÓS</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/servicos">Serviços</Link></li>
              <li><Link to="/produtos">Produtos</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3>CONTATO</h3>
            <div className="contact-list">
              <div className="contact-item-footer">
                <FaPhone />
                <span>(11) 95120-6367</span>
              </div>
              <div className="contact-item-footer">
                <FaEnvelope />
                <span>antiviruspc.pc@gmail.com</span>
              </div>
              <div className="contact-item-footer">
                <FaClock />
                <span>Seg à Sáb das 9h às 18h</span>
              </div>
              <div className="contact-item-footer">
                <FaMapMarkerAlt />
                <span>R. Andorinha Pequena 124, Jd Dom José - SP</span>
              </div>
            </div>
          </div>

          {/* Logo Section */}
          <div className="footer-section footer-logo">
            <img src={Logo} alt="ANTPC Logo" className="logo-image-footer" />
          </div>
        </div>

        {/* WhatsApp Floating Button */}
        <button className="whatsapp-float" onClick={handleWhatsApp} title="Fale conosco no WhatsApp">
          <FaWhatsapp />
        </button>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>DESENVOLVIDO POR <strong>ISAAC MARTINS</strong></p>
            <p>COPYRIGHT © {currentYear} | ANTIVIRUS PC | TODOS OS DIREITOS RESERVADOS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
