import React from 'react';
import ProductCard from './ProductCard';

const ShopLayout = ({ products }) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Explora Nuestra Tecnología</h1>
        <p className="text-lg text-gray-600">Encuentra los gadgets más innovadores para tu día a día.</p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      <div className="mt-12 text-center text-gray-500 text-sm">
        Mostrando {products.length} de {products.length} productos
      </div>
    </div>
  );
};

export default ShopLayout;