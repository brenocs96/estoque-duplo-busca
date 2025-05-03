
import React from "react";
import { Product } from "@/data/products";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: Product[];
  isLoading?: boolean;
}

const ProductList: React.FC<ProductListProps> = ({ 
  products,
  isLoading = false
}) => {
  if (isLoading) {
    return (
      <div className="w-full flex justify-center p-6">
        <p className="text-gray-300">Carregando produtos...</p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="w-full flex justify-center p-6">
        <p className="text-gray-300">Nenhum produto encontrado com os critérios de busca</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full max-w-6xl mx-auto p-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
