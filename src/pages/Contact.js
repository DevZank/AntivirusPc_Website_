import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaUser, FaComment } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = '5511951206367';
    const message = `Olá! Meu nome é ${formData.name}.
    
    Email: ${formData.email}
    Telefone: ${formData.phone}

    Mensagem: ${formData.message}`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleDirectWhatsApp = () => {
    const phoneNumber = '5511951206367';
    const message = 'Olá';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1 className="page-title">FALE CONOSCO</h1>
          <p className="page-subtitle">
            Entre em contato conosco e tire suas dúvidas. Estamos prontos para ajudar!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h2>Informações de Contato</h2>
              <p>Estamos sempre disponíveis para atender você da melhor forma possível.</p>

              <div className="contact-items">
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaPhone />
                  </div>
                  <div className="contact-details">
                    <h3>Telefone</h3>
                    <p>(11) 95120-6367</p>
                    <span>Ligue ou mande WhatsApp</span>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaClock />
                  </div>
                  <div className="contact-details">
                    <h3>Horário de Funcionamento</h3>
                    <p>Segunda à Sábado</p>
                    <span>Das 9h às 18h</span>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-details">
                    <h3>Endereço</h3>
                    <p>Rua Andorinha Pequena 124</p>
                    <span>Jardim Dom José - São Paulo SP</span>
                  </div>
                </div>
              </div>

              <button className="whatsapp-btn" onClick={handleDirectWhatsApp}>
                <FaWhatsapp />
                <span>Falar no WhatsApp</span>
              </button>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <h2>Envie sua Mensagem</h2>
              <p>Preencha o formulário abaixo e entraremos em contato o mais breve possível.</p>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">
                    <FaUser />
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Digite seu nome"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    <FaPhone />
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="Digite seu telefone"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    <FaComment />
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    placeholder="Digite sua mensagem ou descreva o seu problema"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary form-submit">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="location-section">
        <div className="container">
          <h2 className="section-title">ONDE NOS ENCONTRAR</h2>
          
          <div className="location-content">
            {/* <div className="location-images">
              <div className="location-image">
                <img src="/api/placeholder/400/300" alt="Fachada da ANTPC" />
                <div className="image-overlay">
                  <h3>Nossa Loja</h3>
                </div>
              </div>
              <div className="location-image">
                <img src="/api/placeholder/400/300" alt="Interior da ANTPC" />
                <div className="image-overlay">
                  <h3>Ambiente Profissional</h3>
                </div>
              </div>
            </div> */}

            <div className="location-info">
              <h3>Rua Andorinha Pequena 124, Jardim Dom José, São Paulo SP</h3>

              <div className="map-placeholder">
                <div className="map-content">
                  <FaMapMarkerAlt />
                  <p>Mapa Interativo</p>
                  <a href="https://www.google.com/maps/place/Rua+Andorinha+Pequena+124,+Jardim+Dom+Jos%C3%A9,+S%C3%A3o+Paulo+SP" target="_blank">Clique para ver no Google Maps</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
