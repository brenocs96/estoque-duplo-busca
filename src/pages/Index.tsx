
import React, { useState } from "react";
import SearchBar from "@/components/SearchBar";
import ProductList from "@/components/ProductList";
import { products } from "@/data/products";
import { searchProducts } from "@/utils/searchUtils";

const Index = () => {
  const [searchTerm1, setSearchTerm1] = useState("");
  const [searchTerm2, setSearchTerm2] = useState("");
  
  const filteredProducts = searchProducts(products, searchTerm1, searchTerm2);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-blue-800 to-blue-500 flex flex-col">
      <header className="pt-10 pb-6 px-4">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Consulta de Estoque
          </h1>
          <p className="text-blue-100 max-w-lg mx-auto">
            Pesquise produtos usando dois critérios diferentes para encontrar exatamente o que você procura
          </p>
        </div>
      </header>
      
      <SearchBar
        term1={searchTerm1}
        term2={searchTerm2}
        onTerm1Change={setSearchTerm1}
        onTerm2Change={setSearchTerm2}
      />
      
      <div className="flex-1 overflow-auto pb-10">
        <ProductList products={filteredProducts} />
      </div>
      
      <footer className="py-4 text-center text-sm text-white/50">
        Sistema de consulta de estoque © 2025
      </footer>
    </div>
  );
};

export default Index;
