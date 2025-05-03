
import { Product } from "@/data/products";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-lg">
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-white text-lg">{product.name}</h3>
            <p className="text-blue-100 mt-1 text-sm">{product.description}</p>
          </div>
          {product.image && (
            <div className="w-16 h-16 ml-2 rounded-md overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover" 
              />
            </div>
          )}
        </div>
        
        <div className="mt-4 flex flex-wrap gap-2">
          <span className={cn(
            "px-2 py-1 rounded-md text-xs font-medium",
            "bg-blue-500/30 text-blue-100"
          )}>
            {product.category}
          </span>
          <span className={cn(
            "px-2 py-1 rounded-md text-xs font-medium",
            product.stock > 10 
              ? "bg-green-500/30 text-green-100" 
              : "bg-amber-500/30 text-amber-100"
          )}>
            Estoque: {product.stock}
          </span>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <p className="text-white font-bold">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
