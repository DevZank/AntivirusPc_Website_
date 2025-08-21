import React, { useState } from 'react';
import { FaDesktop, FaLaptop, FaTools, FaShieldAlt, FaCog, FaHdd, FaMemory, FaWifi } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: 1,
      title: 'Formatação e instalação de Sistema Operacional',
      price: 'A partir de R$ 200',
      category: 'software',
      icon: <FaDesktop />,
      image: 'https://blog.bbbaterias.com.br/wp-content/uploads/2020/04/photo-1517430816045-df4b7de11d1d-1051x640.jpg',
      description: 'Formatação completa com instalação de sistema operacional e drivers essenciais',
      features: ['Drivers Atualizados', 'Programas Básicos', 'Antivírus']
    },
    {
      id: 2,
      title: 'Montagem completa de PC Gamer com ou sem instalação de Sistema Operacional',
      price: 'A partir de R$ 250',
      category: 'hardware',
      icon: <FaTools />,
      image: 'https://st2.depositphotos.com/1033604/7462/i/450/depositphotos_74620805-stock-photo-assembling-computer-parts-closeup.jpg',
      description: 'Montagem profissional de PC gamer e corporativo com teste completo',
      features: ['Montagem Profissional', 'Teste de Estabilidade', 'Configuração BIOS', 'Garantia do Serviço']
    },
    {
      id: 3,
      title: 'Limpeza de Computador',
      price: 'A partir de R$ 100',
      category: 'manutencao',
      icon: <FaCog />,
      image: 'https://cmtecnologias.com/wp-content/uploads/2024/04/Banner-blog-16-1.png',
      description: 'Limpeza interna e externa completa do equipamento',
      features: ['Limpeza Interna', 'Troca de Pasta Térmica', 'Teste de Temperatura', 'Limpeza Externa']
    },
    {
      id: 4,
      title: 'Instalação de SSD com Clonagem de Sistema Operacional completo',
      price: 'A partir de R$ 250',
      category: 'hardware',
      icon: <FaHdd />,
      image: 'https://conteudo.imguol.com.br/c/noticias/db/2021/11/08/unidade-de-armazenamento-ssd-em-um-notebook-1636401432430_v2_615x300.jpg',
      description: 'Instalação e configuração de novos discos rígidos ou SSDs',
      features: ['Instalação Física', 'Clonagem de Dados', 'Configuração Sistema', 'Teste de Performance']
    },
    {
      id: 5,
      title: 'Upgrade Pra Melhora e Performance',
      price: 'A Negociar!',
      category: 'hardware',
      icon: <FaMemory />,
      image: 'https://d1q3zw97enxzq2.cloudfront.net/images/MP700_RENDER_30.width-1000.format-webp.webp',
      description: 'Instalação e configuração de memória RAM adicional',
      features: ['Instalação RAM', 'Teste de Compatibilidade', 'Configuração BIOS', 'Teste de Estabilidade']
    },
    {
      id: 6,
      title: 'Instalação de Programas Adicionais',
      price: 'A partir de R$ 100',
      category: 'software',
      icon: <FaShieldAlt />,
      image: 'https://informasom.com.br/wp-content/uploads/2022/04/05-servicos-instalacao-de-dispositivos-e-programas.jpg',
      description: 'Instalação de programas e softwares especializados',
      features: ['Configuração Personalizada']
    },
    {
      id: 7,
      title: 'Acesso Remoto',
      price: 'A partir de R$ 100',
      category: 'software',
      icon: <FaCog />,
      image: 'https://pplware.sapo.pt/wp-content/uploads/2022/07/escrever_computador00.jpg',
      description: 'Instalação e configuração do Microsoft Office',
      features: ['Análise de sistema', 'Instalação de Programas', 'Configuração Completa', 'Suporte Técnico']
    }
  ];

  const categories = [
    { id: 'all', name: 'Todos os Serviços', icon: <FaTools /> },
    { id: 'hardware', name: 'Hardware', icon: <FaDesktop /> },
    { id: 'software', name: 'Software', icon: <FaShieldAlt /> },
    { id: 'manutencao', name: 'Manutenção', icon: <FaCog /> },
    { id: 'diagnostico', name: 'Diagnóstico', icon: <FaWifi /> }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const handleWhatsApp = (service) => {
    const phoneNumber = '5511951206367';
    const message = `Olá`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <h1 className="page-title">NOSSOS SERVIÇOS</h1>
          <p className="page-subtitle">
            Oferecemos soluções completas em informática com qualidade profissional e preços acessíveis
          </p>
        </div>
      </section>

      {/* Services Content */}
      <section className="services-content">
        <div className="container">
          {/* Category Filter */}
          <div className="category-filter">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="services-grid">
            {filteredServices.map(service => (
              <div key={service.id} className="service-card">
                <div className="service-header">
                  <div className="service-icon">
                    {service.icon}
                  </div>
                  <div className="service-price">
                    {service.price}
                  </div>
                </div>
                
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
                
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  
                  <div className="service-features">
                    <h4>Inclui:</h4>
                    <ul>
                      {service.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <button 
                    className="btn btn-primary service-btn"
                    onClick={() => handleWhatsApp(service)}
                  >
                    Contratar Serviço
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="services-cta">
            <div className="cta-content">
              <h2>Não encontrou o que procura?</h2>
              <p>Entre em contato conosco para um orçamento personalizado</p>
              <button 
                className="btn btn-secondary"
                onClick={() => {
                  const phoneNumber = '5511951206367';
                  const message = 'Olá';
                  window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
                }}
              >
                Solicitar Orçamento
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
