
import { Product } from "../data/products";

export function searchProducts(products: Product[], term1: string, term2: string): Product[] {
  if (!term1 && !term2) return products;
  
  const normalizedTerm1 = term1.trim().toLowerCase();
  const normalizedTerm2 = term2.trim().toLowerCase();
  
  return products.filter(product => {
    const productText = `${product.name} ${product.description} ${product.category}`.toLowerCase();
    
    if (normalizedTerm1 && normalizedTerm2) {
      return productText.includes(normalizedTerm1) && productText.includes(normalizedTerm2);
    } else if (normalizedTerm1) {
      return productText.includes(normalizedTerm1);
    } else if (normalizedTerm2) {
      return productText.includes(normalizedTerm2);
    }
    
    return true;
  });
}
