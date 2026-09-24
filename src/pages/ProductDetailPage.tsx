import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { getProductById, PRODUCTS } from '../data/products';
import { ProductVisual } from '../components/ProductVisual';
import { ProductCard } from '../components/ProductCard';
import {
  Star,
  ShieldCheck,
  Truck,
  RotateCcw,
  Check,
  Plus,
  Minus,
  ArrowLeft,
  ChevronRight,
  Package,
} from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { selectedProductId, navigateTo, addToCart, setCatalogCategoryFilter } = useStore();

  const product = getProductById(selectedProductId || '') || PRODUCTS[0];
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || 'Standard');
  const [quantity, setQuantity] = useState(1);
  const [addedAnimation, setAddedAnimation] = useState(false);

  // Sync color when product changes
  React.useEffect(() => {
    setSelectedColor(product.colors[0]?.name || 'Standard');
    setQuantity(1);
  }, [product.id]);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1500);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedColor);
    navigateTo('checkout');
  };

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
        <button
          onClick={() => navigateTo('home')}
          className="hover:text-zinc-950 dark:hover:text-white transition-colors"
        >
          Home
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
        <button
          onClick={() => {
            setCatalogCategoryFilter(product.category);
            navigateTo('catalog');
          }}
          className="hover:text-zinc-950 dark:hover:text-white transition-colors"
        >
          {product.category}
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
        <span className="text-zinc-950 dark:text-white font-medium truncate max-w-xs sm:max-w-md">
          {product.name}
        </span>
      </nav>

      {/* Main Contiguous Purchase Module: Gallery Left, Details Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Visual Gallery */}
        <div className="lg:col-span-7 space-y-4">
          <div className="rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <ProductVisual product={product} aspectRatio="square" className="w-full h-auto min-h-[380px]" />
          </div>

          {/* Trust Guarantee Strip under image */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-center">
            <div className="flex flex-col items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-[#D4A337]" />
              <span className="text-[11px] font-semibold text-zinc-800 dark:text-zinc-200">
                2-Year UK Warranty
              </span>
              <span className="text-[10px] text-zinc-500">Repair or replace</span>
            </div>
            <div className="flex flex-col items-center gap-1 border-x border-zinc-200 dark:border-zinc-800">
              <Truck className="w-4 h-4 text-[#D4A337]" />
              <span className="text-[11px] font-semibold text-zinc-800 dark:text-zinc-200">
                Tracked Delivery
              </span>
              <span className="text-[10px] text-zinc-500">Royal Mail & DPD</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <RotateCcw className="w-4 h-4 text-[#D4A337]" />
              <span className="text-[11px] font-semibold text-zinc-800 dark:text-zinc-200">
                30-Day UK Returns
              </span>
              <span className="text-[10px] text-zinc-500">Full refund policy</span>
            </div>
          </div>
        </div>

        {/* Right Column: Contiguous Purchase Module */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
          <div>
            {/* Clean unboxed category & status */}
            <div className="flex items-center gap-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
              <span>{product.category}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#D4A337]">{product.badge || 'UK Standard'}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-white font-display mt-1 leading-tight">
              {product.name}
            </h1>

            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
              {product.tagline}
            </p>

            {/* Ratings and Reviews */}
            <div className="flex items-center gap-3 mt-3 pt-3 border-t border-zinc-100 dark:border-zinc-800">
              <div className="flex items-center gap-1 text-[#D4A337]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4A337]" />
                ))}
                <span className="font-mono font-bold text-xs text-zinc-900 dark:text-white ml-1">
                  {product.rating.toFixed(1)}
                </span>
              </div>
              <span className="text-xs text-zinc-400">·</span>
              <span className="text-xs text-zinc-500">
                {product.reviewCount} verified UK customer reviews
              </span>
            </div>
          </div>

          {/* Price Block */}
          <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-1">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black font-mono text-zinc-950 dark:text-white tabular-nums">
                £{product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-sm font-mono text-zinc-400 line-through tabular-nums">
                  £{product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            <div className="text-[11px] text-zinc-500 flex items-center justify-between">
              <span>Includes 20% UK VAT (£{((product.price / 1.2) * 0.2).toFixed(2)})</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                In Stock ({product.stockCount} units)
              </span>
            </div>
          </div>

          {/* Color Selector */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
              Finish: <strong className="text-zinc-950 dark:text-white">{selectedColor}</strong>
            </label>
            <div className="flex items-center gap-3">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`group flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs transition-all ${
                    selectedColor === color.name
                      ? 'border-zinc-950 dark:border-white bg-zinc-100 dark:bg-zinc-800 font-semibold'
                      : 'border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 text-zinc-600 dark:text-zinc-400'
                  }`}
                >
                  <span
                    className="w-3.5 h-3.5 rounded-full border border-black/20 shadow-xs"
                    style={{ backgroundColor: color.hex }}
                  />
                  <span>{color.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Action Buttons */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-zinc-200 dark:border-zinc-700 rounded-xl overflow-hidden bg-white dark:bg-zinc-900">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-2.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 text-xs font-mono font-bold text-zinc-900 dark:text-white">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => Math.min(product.stockCount, q + 1))}
                  className="p-2.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex-1 py-3 px-5 rounded-xl text-xs font-bold tracking-wider uppercase bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                {addedAnimation ? (
                  <>
                    <Check className="w-4 h-4 text-[#D4A337]" />
                    <span>Added to Basket</span>
                  </>
                ) : (
                  <span>Add to Basket · £{(product.price * quantity).toFixed(2)}</span>
                )}
              </button>
            </div>

            <button
              onClick={handleBuyNow}
              className="w-full py-3 px-5 rounded-xl text-xs font-bold tracking-wider uppercase bg-[#D4A337] hover:bg-[#C59123] text-zinc-950 transition-colors shadow-md"
            >
              Instant Secure Checkout
            </button>
          </div>

          {/* Dispatch Notice */}
          <div className="text-[11px] text-zinc-500 space-y-1 pt-2">
            <div>
              ⚡ <strong>Order within 3 hrs</strong> for same-day dispatch from Birmingham Logistics Hub.
            </div>
            <div>
              🛡️ Certified compliant with <strong>UKCA (UK Conformity Assessed)</strong> standards.
            </div>
          </div>
        </div>
      </div>

      {/* Product Description & Highlights */}
      <section className="pt-8 border-t border-zinc-200 dark:border-zinc-800 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-7 space-y-4">
          <h2 className="text-xl font-bold font-display text-zinc-950 dark:text-white">
            Engineering Overview
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {product.description}
          </p>

          <div className="space-y-2.5 pt-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-950 dark:text-white">
              Key Capabilities
            </h3>
            <ul className="space-y-2">
              {product.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-2.5 text-xs text-zinc-600 dark:text-zinc-400">
                  <Check className="w-4 h-4 text-[#D4A337] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* In the box */}
        <div className="md:col-span-5 p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-4">
          <div className="flex items-center gap-2">
            <Package className="w-5 h-5 text-[#D4A337]" />
            <h3 className="text-sm font-bold text-zinc-950 dark:text-white">What's in the Box</h3>
          </div>
          <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400">
            {product.inTheBox.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4A337]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 text-[11px] text-zinc-500">
            All packaging is 100% recyclable, zero-bleach unbleached kraft card.
          </div>
        </div>
      </section>

      {/* Technical Specifications Table */}
      <section className="pt-8 border-t border-zinc-200 dark:border-zinc-800 space-y-4">
        <h2 className="text-xl font-bold font-display text-zinc-950 dark:text-white">
          Technical Specifications
        </h2>
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
          <table className="w-full text-left text-xs">
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
              {product.specs.map((spec, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-zinc-50/50 dark:bg-zinc-900/30' : ''}>
                  <td className="py-3 px-4 font-semibold text-zinc-700 dark:text-zinc-300 w-1/3">
                    {spec.name}
                  </td>
                  <td className="py-3 px-4 font-mono text-zinc-950 dark:text-zinc-100">
                    {spec.value}
                  </td>
                </tr>
              ))}
              <tr>
                <td className="py-3 px-4 font-semibold text-zinc-700 dark:text-zinc-300">
                  Certifications
                </td>
                <td className="py-3 px-4 font-mono text-[#D4A337]">
                  {product.certifications.join(' · ')}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Customer Reviews & Trust */}
      <section className="pt-8 border-t border-zinc-200 dark:border-zinc-800 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold font-display text-zinc-950 dark:text-white">
              Verified Customer Reviews
            </h2>
            <p className="text-xs text-zinc-500 mt-0.5">
              Authentic reviews from verified UK delivery recipients
            </p>
          </div>
        </div>

        {product.reviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.reviews.map((rev) => (
              <div
                key={rev.id}
                className="p-5 rounded-xl bg-white dark:bg-[#121317] border border-zinc-200 dark:border-zinc-800 space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#D4A337]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#D4A337]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400">{rev.date}</span>
                </div>
                <h4 className="text-xs font-bold text-zinc-950 dark:text-white">{rev.title}</h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  "{rev.comment}"
                </p>
                <div className="pt-1 text-[11px] text-zinc-500 flex items-center justify-between">
                  <span className="font-semibold text-zinc-700 dark:text-zinc-300">
                    {rev.author} ({rev.location})
                  </span>
                  <span className="text-emerald-600 dark:text-emerald-400">✓ Verified UK Purchase</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-6 rounded-xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-500">
            Backed by our 30-day money-back guarantee and 2-year UK warranty.
          </div>
        )}
      </section>

      {/* Related Products from same category */}
      {relatedProducts.length > 0 && (
        <section className="pt-12 border-t border-zinc-200 dark:border-zinc-800 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold font-display text-zinc-950 dark:text-white">
              More in {product.category}
            </h2>
            <button
              onClick={() => {
                setCatalogCategoryFilter(product.category);
                navigateTo('catalog');
              }}
              className="text-xs font-semibold text-[#D4A337] hover:underline"
            >
              View all {product.category}
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </section>
      )}

      {/* Back button */}
      <div className="pt-6">
        <button
          onClick={() => navigateTo('catalog')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Product Catalog</span>
        </button>
      </div>
    </div>
  );
};
