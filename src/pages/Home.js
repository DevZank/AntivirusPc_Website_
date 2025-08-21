import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo1.png';
import { FaTools, FaLaptop, FaDesktop, FaShieldAlt, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const popularServices = [
    {
      id: 1,
      title: 'Formatação com Instalação de Sistema Operacional',
      price: 'A partir de R$ 200',
      image: 'https://blog.bbbaterias.com.br/wp-content/uploads/2020/04/photo-1517430816045-df4b7de11d1d-1051x640.jpg',
      description: 'Formatação completa com instalação de sistema operacional'
    },
    {
      id: 2,
      title: 'Montagem completa PC Gamer com ou sem instalação de Sistema Operacional',
      price: 'A partir de R$ 250',
      image: 'https://st2.depositphotos.com/1033604/7462/i/450/depositphotos_74620805-stock-photo-assembling-computer-parts-closeup.jpg',
      description: 'Montagem profissional de PC gamer e corporativo'
    },
    {
      id: 3,
      title: 'Limpeza de Computador',
      price: 'R$ 100',
      image: 'https://cmtecnologias.com/wp-content/uploads/2024/04/Banner-blog-16-1.png',
      description: 'Limpeza interna e externa completa do equipamento'
    },
    {
      id: 4,
      title: 'Instalação SSD com Clonagem de Sistema Operacional completo',
      price: 'A partir de R$ 250',
      image: 'https://conteudo.imguol.com.br/c/noticias/db/2021/11/08/unidade-de-armazenamento-ssd-em-um-notebook-1636401432430_v2_615x300.jpg',
      description: 'Instalação e configuração de novos discos rígidos ou SSDs'
    }
  ];

  const popularProducts = [
    {
      id: 1,
      name: 'SSD Kingston 240GB',
      originalPrice: 'R$ 599,99',
      price: 'R$ 569,99',
      discount: '5%',
      image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=200&h=150&fit=crop'
    },
    {
      id: 2,
      name: 'Placa de Vídeo GTX 1650',
      originalPrice: 'R$ 1299,99',
      price: 'R$ 1195,99',
      discount: '8%',
      image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=200&h=150&fit=crop'
    },
    {
      id: 3,
      name: 'Monitor Gamer 24"',
      originalPrice: 'R$ 999,99',
      price: 'R$ 899,99',
      discount: '10%',
      image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=200&h=150&fit=crop'
    },
    {
      id: 4,
      name: 'Fonte 500W 80 Plus',
      originalPrice: 'R$ 349,99',
      price: 'R$ 299,99',
      discount: '14%',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=200&h=150&fit=crop'
    }
  ];

  const handleWhatsApp = () => {
    const phoneNumber = '5511951206367';
    const message = 'Olá';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-logo">
              <img src={Logo} alt="ANTPC Logo" className="logo-image-header" />
            </div>
            <h1 className="hero-title">ANTIVIRUS PC</h1>
            <p className="hero-subtitle">
              Manutenção, montagem e instalação de programas para PCs e notebooks. 
              <br />Rápido e confiável!
            </p>
            <div className="hero-buttons">
              <Link to="/servicos" className="btn btn-primary">Ver Serviços</Link>
              <button onClick={handleWhatsApp} className="btn btn-secondary">Fale Conosco</button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="popular-services">
        <div className="container">
          <h2 className="section-title">SERVIÇOS POPULARES</h2>
          <div className="services-grid">
            {popularServices.map(service => (
              <div key={service.id} className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                  <div className="service-overlay">
                    <span className="service-price">{service.price}</span>
                  </div>
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <button className="btn btn-primary" onClick={handleWhatsApp}>Contratar</button>
                </div>
              </div>
            ))}
          </div>
          <div className="services-cta">
            <Link to="/servicos" className="btn btn-secondary">Ver Todos os Serviços</Link>
          </div>
        </div>
      </section>

      {/* Popular Products */}
      {/* <section className="popular-products">
        <div className="container">
          <h2 className="section-title">PRODUTOS POPULARES</h2>
          <div className="products-grid">
            {popularProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-badge">
                  <span className="discount">-{product.discount}</span>
                </div>
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-content">
                  <h3>{product.name}</h3>
                  <div className="product-prices">
                    <span className="original-price">{product.originalPrice}</span>
                    <span className="current-price">{product.price}</span>
                  </div>
                  <button className="btn btn-primary">Comprar</button>
                </div>
              </div>
            ))}
          </div>
          <div className="products-cta">
            <Link to="/produtos" className="btn btn-secondary">Ver Todos os Produtos</Link>
          </div>
        </div>
      </section> */}

      {/* Location Section */}
      <section className="location-section">
        <div className="container">
          <h2 className="section-title">LOCALIZAÇÃO</h2>
          <div className="location-content">
            {/* <div className="location-images">
              <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop" alt="Fachada da loja ANTPC" />
              <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop" alt="Interior da loja ANTPC" />
            </div> */}
            <div className="location-info">
              <h3>Rua Andorinha Pequena 124, Jd Dom José, São Paulo SP</h3>
              <Link to="/contato" className="btn btn-primary">Como Chegar</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
