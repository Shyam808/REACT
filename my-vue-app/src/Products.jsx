import React from 'react';
import Card from './Card';

const products = [
  {
    id: 1,
    title: 'Product 1',
    description: 'This is a short product description with a some useful info.',
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'This is a short product description with a some useful info.',
  },
  {
    id: 3,
    title: 'Product 3',
    description: 'This is a short product description with a some useful info.',
  },
  {
    id: 4,
    title: 'Product 4',
    description: 'This is a short product description with a some useful info.',
  },
  {
    id: 5,
    title: 'Product 5',
    description: 'This is a short product description with a some useful info.',
  },
];

const Product = () => {
  return (
    <div className="p-5">
      <h2 className="text-5 font-bold text-gray-800 mb-6">Product List</h2>
      <div className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8, flex ml-5">
        {products.map((product) => (
          <Card key={product.id} title={product.title} description={product.description} />
        ))}
      </div>
    </div>
  );
};

export default Product;