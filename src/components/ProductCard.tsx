
import { Product } from "@/data/products";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 p-3">
      <div className="flex flex-col">
        <span className="text-blue-100 text-xs mb-1">
          Código: {product.id}
        </span>
        <h3 className="font-semibold text-white">{product.name}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
