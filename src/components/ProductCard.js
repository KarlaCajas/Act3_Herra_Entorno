import React from 'react';

const ProductCard = ({ product, onBuy }) => {
  return (
    <div className="bg-white text-black rounded-lg shadow-lg p-4">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
      <h3 className="text-lg font-bold mt-2">{product.name}</h3>
      <p className="text-gray-700">${product.price.toFixed(2)}</p>
      <button
        onClick={() => onBuy(product)}
        className="mt-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-700"
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
