import React from 'react';
import { Product } from '../data/products';
import { useStore } from '../context/StoreContext';
import { ProductVisual } from './ProductVisual';
import { Star, Plus, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { navigateTo, addToCart } = useStore();
  const [justAdded, setJustAdded] = React.useState(false);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1, product.colors[0]?.name);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <div
      onClick={() => navigateTo('product', product.id)}
      className="group relative flex flex-col rounded-2xl bg-white dark:bg-[#121318] border border-zinc-200/90 dark:border-zinc-800/80 p-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:border-zinc-300 dark:hover:border-zinc-700 cursor-pointer"
    >
      {/* Visual Image container */}
      <div className="relative w-full overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-900">
        <ProductVisual product={product} aspectRatio="square" className="w-full" />

        {/* Quick Add Button overlay */}
        <button
          onClick={handleQuickAdd}
          aria-label={`Quick add ${product.name} to cart`}
          className="absolute bottom-2.5 right-2.5 p-2 rounded-lg bg-zinc-950/80 hover:bg-[#D4A337] text-white hover:text-zinc-950 backdrop-blur-md transition-all duration-200 shadow-md transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 focus:opacity-100 focus:translate-y-0"
        >
          {justAdded ? <Check className="w-4 h-4 text-emerald-400" /> : <Plus className="w-4 h-4" />}
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between mt-3 space-y-2">
        <div>
          {/* Clean unboxed metadata kicker */}
          <div className="flex items-center gap-1.5 text-[11px] text-zinc-500 dark:text-zinc-400 tracking-wide font-medium">
            <span>{product.category}</span>
            <span aria-hidden="true">·</span>
            <span>{product.warrantyYears}-Year UK Warranty</span>
          </div>

          {/* Product Name */}
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mt-1 line-clamp-2 leading-snug group-hover:text-[#D4A337] transition-colors">
            {product.name}
          </h3>
        </div>

        {/* Rating & Stock */}
        <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 pt-1">
          <div className="flex items-center gap-1 text-[#D4A337]">
            <Star className="w-3.5 h-3.5 fill-[#D4A337]" />
            <span className="font-mono font-semibold text-zinc-800 dark:text-zinc-200">
              {product.rating.toFixed(1)}
            </span>
          </div>
          <span aria-hidden="true" className="text-zinc-400">·</span>
          <span className="text-[11px]">{product.reviewCount} reviews</span>
        </div>

        {/* Price & Color swatches */}
        <div className="flex items-center justify-between pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
          <div className="flex items-baseline gap-1.5">
            <span className="text-base font-bold font-mono text-zinc-950 dark:text-white tabular-nums">
              £{product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-xs font-mono text-zinc-400 line-through tabular-nums">
                £{product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Color swatch dots */}
          <div className="flex items-center -space-x-1" title={`${product.colors.length} color finishes`}>
            {product.colors.slice(0, 3).map((c) => (
              <span
                key={c.name}
                className="w-3 h-3 rounded-full border border-white dark:border-zinc-900 shadow-xs"
                style={{ backgroundColor: c.hex }}
              />
            ))}
            {product.colors.length > 3 && (
              <span className="text-[9px] text-zinc-400 pl-1 font-mono">+{product.colors.length - 3}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
