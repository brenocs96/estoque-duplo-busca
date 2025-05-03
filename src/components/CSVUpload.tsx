
import React, { useState } from "react";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { parseCSV } from "@/utils/csvParser";
import { Product } from "@/data/products";
import { toast } from "@/hooks/use-toast";

interface CSVUploadProps {
  onProductsLoaded: (products: Product[]) => void;
}

const CSVUpload: React.FC<CSVUploadProps> = ({ onProductsLoaded }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsLoading(true);
    
    try {
      const text = await file.text();
      console.log("CSV text loaded, processing...");
      const products = parseCSV(text);
      
      if (products.length > 0) {
        console.log(`Successfully parsed ${products.length} products, updating state`);
        onProductsLoaded(products);
        toast({
          title: "Produtos importados com sucesso",
          description: `${products.length} produtos foram carregados.`,
        });
      } else {
        console.log("No products were parsed from CSV");
        toast({
          title: "Erro ao importar produtos",
          description: "O arquivo não contém produtos válidos ou está em um formato incorreto.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error processing CSV:", error);
      toast({
        title: "Erro ao processar arquivo",
        description: "Não foi possível ler o arquivo CSV.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
      // Reset the input value so the same file can be uploaded again
      e.target.value = '';
    }
  };

  return (
    <div className="flex items-center justify-center mb-4">
      <Button
        variant="outline"
        className="bg-gray-700/50 hover:bg-gray-600/50 text-gray-200 border-gray-600"
        disabled={isLoading}
        onClick={() => document.getElementById("csv-upload")?.click()}
      >
        <Upload className="mr-2 h-4 w-4" />
        {isLoading ? "Processando..." : "Importar CSV de produtos"}
      </Button>
      <input
        id="csv-upload"
        type="file"
        accept=".csv"
        className="hidden"
        onChange={handleFileChange}
        disabled={isLoading}
      />
    </div>
  );
};

export default CSVUpload;
