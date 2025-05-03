
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
      <div className="w-full flex justify-center p-10">
        <p className="text-white/70">Carregando produtos...</p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="w-full flex justify-center p-10">
        <p className="text-white/70">Nenhum produto encontrado com os critérios de busca</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl mx-auto p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
