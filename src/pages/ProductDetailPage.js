import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProductDetailPage = ({ products }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Header />
      <main className="p-4 text-white">
        <div className="max-w-2xl mx-auto">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-64 object-cover mb-4" 
            style={{ width: '300px', height: '300px' }} // Agrega tamaño fijo para las imágenes
          />
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <p className="text-gray-400">${product.price}</p>
          <p className="mt-4">{product.description}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
