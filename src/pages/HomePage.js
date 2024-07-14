import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: 'Lavadora Inteligente', price: 450.65, image: '/images/product1.jpg' },
  { id: 2, name: 'Alexa', price: 40.00, image: '/images/product2.jpg' },
  { id: 3, name: 'Bombilla Inteligente', price: 15.00, image: '/images/product3.jpg' },
  { id: 4, name: 'Camara de Seguridad', price: 20.00, image: '/images/product4.jpg' },
];

const HomePage = () => {
  const handleBuy = (product) => {
    alert(`You have bought ${product.name}`);
  };

  return (
    <div>
      <Header />
      <main className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map(product => (
            <ProductCard key={product.id} product={product} onBuy={handleBuy} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
