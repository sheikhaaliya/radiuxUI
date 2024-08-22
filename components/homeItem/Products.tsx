// components/ProductList.tsx
"use client"
import React, { useEffect, useState } from 'react';
import ProductCard from '../common/ProductCard';
import { Grid, Heading } from '@radix-ui/themes';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  size: string;
  width: string;
  image: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
      console.log(data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Heading className="text-2xl font-bold mb-4">Product List</Heading>
    


      <Grid columns="3" gap="3"  width="auto" height="auto">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded">
            <ProductCard
              image={product.image}
              title={product.title}
              description={product.description}
              link="#"
              buttonLabel="Shop now"
            />
          </div>
        ))}
      </Grid>
    </div>
  );
};

export default ProductList;
