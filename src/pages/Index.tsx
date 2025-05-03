
import React, { useState } from "react";
import SearchBar from "@/components/SearchBar";
import ProductList from "@/components/ProductList";
import CSVUpload from "@/components/CSVUpload";
import { products as defaultProducts } from "@/data/products";
import { searchProducts } from "@/utils/searchUtils";
import { Product } from "@/data/products";

const Index = () => {
  const [searchTerm1, setSearchTerm1] = useState("");
  const [searchTerm2, setSearchTerm2] = useState("");
  const [products, setProducts] = useState<Product[]>(defaultProducts);
  const [isLoading, setIsLoading] = useState(false);
  
  const filteredProducts = searchProducts(products, searchTerm1, searchTerm2);

  const handleProductsLoaded = (newProducts: Product[]) => {
    setIsLoading(true);
    // Small delay to show loading state
    setTimeout(() => {
      setProducts(newProducts);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 flex flex-col">
      <header className="pt-8 pb-4 px-4">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-100 mb-2">
            Consulta de Estoque
          </h1>
          <p className="text-gray-300 max-w-lg mx-auto">
            Pesquise produtos usando dois critérios diferentes para encontrar exatamente o que você procura
          </p>
        </div>
      </header>
      
      <div className="w-full max-w-4xl mx-auto px-4">
        <CSVUpload onProductsLoaded={handleProductsLoaded} />
      </div>

      <SearchBar
        term1={searchTerm1}
        term2={searchTerm2}
        onTerm1Change={setSearchTerm1}
        onTerm2Change={setSearchTerm2}
      />
      
      <div className="flex-1 overflow-auto pb-8">
        <ProductList products={filteredProducts} isLoading={isLoading} />
      </div>
      
      <footer className="py-3 text-center text-sm text-gray-400">
        Sistema de consulta de estoque © 2025
      </footer>
    </div>
  );
};

export default Index;
