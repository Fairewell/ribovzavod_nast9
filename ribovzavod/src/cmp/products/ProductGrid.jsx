import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products }) => {
  return (
    <section className="mt-6 w-full max-md:max-w-full">
      <div className="flex flex-wrap mx-auto justify-center gap-5 max-md:flex-col">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;