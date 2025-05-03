
import { Product } from "@/data/products";

export const parseCSV = (csvText: string): Product[] => {
  try {
    const lines = csvText.trim().split('\n');
    const headers = lines[0].split(',').map(header => header.trim());

    // Map the common CSV headers to our Product interface properties
    const idIndex = headers.findIndex(h => /id|código/i.test(h));
    const nameIndex = headers.findIndex(h => /nome|name|produto/i.test(h));
    const descIndex = headers.findIndex(h => /desc|description|descrição/i.test(h));
    const priceIndex = headers.findIndex(h => /preço|price|valor/i.test(h));
    const stockIndex = headers.findIndex(h => /stock|estoque|quantidade|qtd/i.test(h));
    const catIndex = headers.findIndex(h => /cat|categoria|category/i.test(h));
    const imageIndex = headers.findIndex(h => /image|imagem|foto|url/i.test(h));

    // Process each row after headers
    return lines.slice(1).map((line, index) => {
      const values = line.split(',').map(value => value.trim());
      
      return {
        id: idIndex >= 0 ? values[idIndex] : `product-${index}`,
        name: nameIndex >= 0 ? values[nameIndex] : 'Produto sem nome',
        description: descIndex >= 0 ? values[descIndex] : '',
        price: priceIndex >= 0 ? parseFloat(values[priceIndex]) || 0 : 0,
        stock: stockIndex >= 0 ? parseInt(values[stockIndex]) || 0 : 0,
        category: catIndex >= 0 ? values[catIndex] : 'Geral',
        image: imageIndex >= 0 ? values[imageIndex] : undefined
      };
    });
  } catch (error) {
    console.error('Erro ao processar arquivo CSV:', error);
    return [];
  }
};
