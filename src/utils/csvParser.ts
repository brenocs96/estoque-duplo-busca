
import { Product } from "@/data/products";

export const parseCSV = (csvText: string): Product[] => {
  try {
    const lines = csvText.trim().split('\n');
    if (lines.length <= 1) {
      throw new Error("CSV file contains no data rows");
    }
    
    // Since we know the structure: A=code, B=name
    // We'll set these columns explicitly instead of trying to detect them
    const idIndex = 0; // First column (A) contains the product code
    const nameIndex = 1; // Second column (B) contains the product name
    
    console.log("Using fixed column structure: code=0, name=1");

    // Process each row after headers
    const products = lines.slice(1)
      .filter(line => line.trim() !== '')
      .map((line, index) => {
        const values = line.split(',').map(value => value.trim());
        
        // Only care about code and name, set default values for the rest
        const product: Product = {
          id: values[idIndex] || `product-${index}`,
          name: values[nameIndex] || 'Produto sem nome',
          description: '', // Not needed
          price: 0, // Not needed
          stock: 0, // Not needed
          category: 'Geral',
          image: undefined
        };
        
        return product;
      });
      
    console.log(`Parsed ${products.length} products from CSV`);
    return products;
  } catch (error) {
    console.error('Erro ao processar arquivo CSV:', error);
    return [];
  }
};
