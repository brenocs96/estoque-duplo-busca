
import { Product } from "@/data/products";

export const parseCSV = (csvText: string): Product[] => {
  try {
    const lines = csvText.trim().split('\n');
    if (lines.length <= 1) {
      throw new Error("CSV file contains no data rows");
    }
    
    const headers = lines[0].split(',').map(header => header.trim());

    // Map the common CSV headers to our Product interface properties
    const idIndex = headers.findIndex(h => /id|código/i.test(h));
    const nameIndex = headers.findIndex(h => /nome|name|produto/i.test(h));
    const descIndex = headers.findIndex(h => /desc|description|descrição/i.test(h));
    const priceIndex = headers.findIndex(h => /preço|price|valor/i.test(h));
    const stockIndex = headers.findIndex(h => /stock|estoque|quantidade|qtd/i.test(h));
    const catIndex = headers.findIndex(h => /cat|categoria|category/i.test(h));
    const imageIndex = headers.findIndex(h => /image|imagem|foto|url/i.test(h));

    console.log("CSV Headers found:", {
      idIndex,
      nameIndex, 
      descIndex,
      priceIndex,
      stockIndex,
      catIndex,
      imageIndex
    });

    // Process each row after headers
    const products = lines.slice(1)
      .filter(line => line.trim() !== '')
      .map((line, index) => {
        const values = line.split(',').map(value => value.trim());
        
        // Create product with appropriate type handling
        const product: Product = {
          id: idIndex >= 0 ? values[idIndex] : `product-${index}`,
          name: nameIndex >= 0 ? values[nameIndex] : 'Produto sem nome',
          description: descIndex >= 0 ? values[descIndex] : '',
          price: priceIndex >= 0 ? parseFloat(values[priceIndex]) || 0 : 0,
          stock: stockIndex >= 0 ? parseInt(values[stockIndex]) || 0 : 0,
          category: catIndex >= 0 ? values[catIndex] : 'Geral',
          image: imageIndex >= 0 ? values[imageIndex] : undefined
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
