import React, { useState } from 'react';
import { FaDesktop, FaMemory, FaHdd, FaMicrochip, FaKeyboard, FaMouse, FaHeadphones, FaGamepad } from 'react-icons/fa';
import './Products.css';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: 'SSD Kingston NV2 240GB',
      category: 'storage',
      originalPrice: 'R$ 599,99',
      price: 'R$ 569,99',
      discount: '5%',
      image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=250&h=200&fit=crop',
      rating: 5,
      description: 'SSD de alta performance para upgrade do seu computador',
      features: ['240GB de capacidade', 'Interface SATA III', 'Velocidade até 550MB/s', 'Garantia de 3 anos']
    },
    {
      id: 2,
      name: 'Placa de Vídeo GTX 1650 4GB',
      category: 'graphics',
      originalPrice: 'R$ 1299,99',
      price: 'R$ 1195,99',
      discount: '8%',
      image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=250&h=200&fit=crop',
      rating: 5,
      description: 'Placa de vídeo ideal para jogos em Full HD',
      features: ['4GB GDDR6', 'DirectX 12', 'Ray Tracing', 'Garantia de 2 anos']
    },
    {
      id: 3,
      name: 'Monitor Gamer 24" 144Hz',
      category: 'monitor',
      originalPrice: 'R$ 999,99',
      price: 'R$ 899,99',
      discount: '10%',
      image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=250&h=200&fit=crop',
      rating: 4,
      description: 'Monitor gamer com alta taxa de atualização',
      features: ['24 polegadas', '144Hz', 'Full HD', 'Tempo de resposta 1ms']
    },
    {
      id: 4,
      name: 'Fonte 500W 80 Plus Bronze',
      category: 'power',
      originalPrice: 'R$ 349,99',
      price: 'R$ 299,99',
      discount: '14%',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=250&h=200&fit=crop',
      rating: 5,
      description: 'Fonte de alimentação eficiente e confiável',
      features: ['500W de potência', 'Certificação 80 Plus', 'Proteções múltiplas', 'Garantia de 5 anos']
    },
    {
      id: 5,
      name: 'Memória RAM DDR4 16GB 3200MHz',
      category: 'memory',
      originalPrice: 'R$ 459,99',
      price: 'R$ 399,99',
      discount: '13%',
      image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?w=250&h=200&fit=crop',
      rating: 5,
      description: 'Memória RAM de alta performance para multitarefas',
      features: ['16GB DDR4', '3200MHz', 'CL16', 'Compatível com Intel/AMD']
    },
    {
      id: 6,
      name: 'Processador AMD Ryzen 5 5600G',
      category: 'processor',
      originalPrice: 'R$ 899,99',
      price: 'R$ 799,99',
      discount: '11%',
      image: 'https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=250&h=200&fit=crop',
      rating: 5,
      description: 'Processador com gráficos integrados de alta performance',
      features: ['6 núcleos / 12 threads', 'Gráficos Radeon integrados', 'Socket AM4', 'Garantia de 3 anos']
    },
    {
      id: 7,
      name: 'Teclado Mecânico Gamer RGB',
      category: 'peripherals',
      originalPrice: 'R$ 299,99',
      price: 'R$ 249,99',
      discount: '17%',
      image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=250&h=200&fit=crop',
      rating: 4,
      description: 'Teclado mecânico com iluminação RGB personalizável',
      features: ['Switches mecânicos', 'Iluminação RGB', 'Anti-ghosting', 'Software de customização']
    },
    {
      id: 8,
      name: 'Mouse Gamer 12000 DPI',
      category: 'peripherals',
      originalPrice: 'R$ 199,99',
      price: 'R$ 159,99',
      discount: '20%',
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=250&h=200&fit=crop',
      rating: 4,
      description: 'Mouse gamer de alta precisão com sensor óptico',
      features: ['12000 DPI', 'Sensor óptico', '8 botões programáveis', 'Iluminação RGB']
    }
  ];

  const categories = [
    { id: 'all', name: 'Todos os Produtos', icon: <FaDesktop /> },
    { id: 'processor', name: 'Processadores', icon: <FaMicrochip /> },
    { id: 'graphics', name: 'Placas de Vídeo', icon: <FaGamepad /> },
    { id: 'memory', name: 'Memórias', icon: <FaMemory /> },
    { id: 'storage', name: 'Armazenamento', icon: <FaHdd /> },
    { id: 'monitor', name: 'Monitores', icon: <FaDesktop /> },
    { id: 'peripherals', name: 'Periféricos', icon: <FaKeyboard /> },
    { id: 'power', name: 'Fontes', icon: <FaDesktop /> }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleWhatsApp = (product) => {
    const phoneNumber = '5511951206367';
    const message = `Olá! Tenho interesse no produto: ${product.name} - ${product.price}`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="products-page">
      {/* Hero Section */}
      <section className="products-hero">
        <div className="container">
          <h1 className="page-title">NOSSOS PRODUTOS</h1>
          <p className="page-subtitle">
            Hardware de qualidade com os melhores preços do mercado. Produtos originais com garantia.
          </p>
        </div>
      </section>

      {/* Products Content */}
      <section className="products-content">
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

          {/* Products Grid */}
          <div className="products-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-badge">
                  <span className="discount">-{product.discount}</span>
                </div>
                
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <div className="product-overlay">
                    <button 
                      className="quick-buy-btn"
                      onClick={() => handleWhatsApp(product)}
                    >
                      Comprar Agora
                    </button>
                  </div>
                </div>
                
                <div className="product-content">
                  <div className="product-rating">
                    {renderStars(product.rating)}
                    <span className="rating-count">({product.rating}.0)</span>
                  </div>
                  
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  
                  <div className="product-features">
                    <ul>
                      {product.features.slice(0, 2).map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="product-prices">
                    <span className="original-price">{product.originalPrice}</span>
                    <span className="current-price">{product.price}</span>
                  </div>
                  
                  <button 
                    className="btn btn-primary product-btn"
                    onClick={() => handleWhatsApp(product)}
                  >
                    Comprar
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="products-cta">
            <div className="cta-content">
              <h2>Não encontrou o produto que procura?</h2>
              <p>Temos uma grande variedade de produtos em estoque. Entre em contato para consultar disponibilidade.</p>
              <button 
                className="btn btn-secondary"
                onClick={() => {
                  const phoneNumber = '5511951206367';
                  const message = 'Olá! Gostaria de consultar a disponibilidade de um produto específico.';
                  window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
                }}
              >
                Consultar Produto
              </button>
            </div>
          </div>

          {/* Features Section */}
          <div className="features-section">
            <h2>Por que comprar conosco?</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <FaDesktop />
                </div>
                <h3>Produtos Originais</h3>
                <p>Trabalhamos apenas com produtos originais e de marcas reconhecidas no mercado.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <FaHeadphones />
                </div>
                <h3>Suporte Técnico</h3>
                <p>Oferecemos suporte técnico completo para instalação e configuração dos produtos.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <FaGamepad />
                </div>
                <h3>Preços Competitivos</h3>
                <p>Oferecemos os melhores preços do mercado com qualidade garantida.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
