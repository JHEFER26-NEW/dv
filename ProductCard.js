import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext'; // Ruta corregida

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const category = product?.category || 'general';
  
  return (
    <div className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 h-full flex flex-col border border-gray-200 hover:border-blue-200">
      <div className="h-48 bg-gray-50 flex items-center justify-center p-4 relative border-b border-gray-100">
        <img 
          src={product.image} 
          alt={product.name}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded-full">
          {category.toUpperCase()}
        </span>
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="font-semibold text-lg mb-1 text-gray-800 group-hover:text-blue-600 transition-colors">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-3 line-clamp-2">{product.description}</p>
        
        <div className="mt-auto flex justify-between items-center pt-3 border-t border-gray-100">
          <span className="font-bold text-xl text-blue-600">${product.price.toFixed(2)}</span>
          <button 
            onClick={() => addToCart(product)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-sm"
          >
            + Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;