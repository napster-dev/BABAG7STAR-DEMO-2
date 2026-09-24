import React, { useState, useMemo } from 'react';
import { useStore } from '../context/StoreContext';
import {
  ALL_CATEGORIES,
  CategoryGroup,
  ProductCategory,
  PRODUCTS,
  CATEGORY_GROUPS_MAP,
} from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Search, SlidersHorizontal, RotateCcw, X } from 'lucide-react';

const CATEGORY_GROUPS: { name: CategoryGroup; label: string }[] = [
  { name: 'All', label: 'All Products (40)' },
  { name: 'Audio', label: 'Audio (12)' },
  { name: 'Wearables', label: 'Wearables (4)' },
  { name: 'Smartphone Accessories', label: 'Smartphone Accessories (16)' },
  { name: 'Computing & Peripherals', label: 'Computing & Peripherals (8)' },
];

export const CatalogPage: React.FC = () => {
  const { catalogCategoryFilter, setCatalogCategoryFilter, searchQuery, setSearchQuery } = useStore();

  // Filters state
  const [selectedGroup, setSelectedGroup] = useState<CategoryGroup>('All');
  const [maxPrice, setMaxPrice] = useState<number>(300);
  const [minRating, setMinRating] = useState<number>(0);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Sync category filter if set by nav or external
  const activeCategory = catalogCategoryFilter as ProductCategory | null;

  const handleGroupSelect = (group: CategoryGroup) => {
    setSelectedGroup(group);
    setCatalogCategoryFilter(null);
  };

  const handleCategorySelect = (cat: ProductCategory | null) => {
    setCatalogCategoryFilter(cat);
    if (cat) {
      setSelectedGroup(CATEGORY_GROUPS_MAP[cat]);
    }
  };

  const handleResetFilters = () => {
    setSelectedGroup('All');
    setCatalogCategoryFilter(null);
    setSearchQuery('');
    setMaxPrice(300);
    setMinRating(0);
    setInStockOnly(false);
    setSortBy('featured');
  };

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Search term
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesCat = item.category.toLowerCase().includes(q);
        const matchesTag = item.tagline.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        if (!matchesName && !matchesCat && !matchesTag && !matchesDesc) {
          return false;
        }
      }

      // Specific Category
      if (activeCategory && item.category !== activeCategory) {
        return false;
      }

      // Group
      if (!activeCategory && selectedGroup !== 'All' && item.categoryGroup !== selectedGroup) {
        return false;
      }

      // Price
      if (item.price > maxPrice) {
        return false;
      }

      // Rating
      if (minRating > 0 && item.rating < minRating) {
        return false;
      }

      // In stock
      if (inStockOnly && !item.inStock) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      // Default: featured (high rating first, then id)
      return b.rating - a.rating;
    });
  }, [searchQuery, activeCategory, selectedGroup, maxPrice, minRating, inStockOnly, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header section with title and search bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-zinc-200 dark:border-zinc-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4A337]">
            <span>UK Hardware Catalog</span>
            <span>·</span>
            <span>All 40 Products In Stock</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white font-display mt-1">
            Certified Electronics & Accessories
          </h1>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1 max-w-2xl">
            Filter through premium noise-cancelling audio, Grade 5 titanium smartwatches, GaN fast chargers, and precision peripherals.
          </p>
        </div>

        {/* Search input field */}
        <div className="w-full md:w-80 relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search audio, watches, GaN..."
            className="w-full pl-9 pr-9 py-2.5 text-xs rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:border-[#D4A337] transition-colors"
          />
          <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Main Category Group Tabs (Interactive segmented buttons) */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        {CATEGORY_GROUPS.map((grp) => (
          <button
            key={grp.name}
            onClick={() => handleGroupSelect(grp.name)}
            className={`px-4 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-colors ${
              selectedGroup === grp.name && !activeCategory
                ? 'bg-[#D4A337] text-zinc-950 shadow-sm'
                : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-zinc-950 dark:hover:text-white'
            }`}
          >
            {grp.label}
          </button>
        ))}
      </div>

      {/* Subcategory Specific Buttons (10 Categories) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-zinc-200 dark:border-zinc-800">
        <button
          onClick={() => handleCategorySelect(null)}
          className={`px-3 py-1.5 text-xs rounded-lg whitespace-nowrap transition-colors ${
            activeCategory === null
              ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-semibold'
              : 'text-zinc-500 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800'
          }`}
        >
          All 10 Categories
        </button>
        {ALL_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategorySelect(cat)}
            className={`px-3 py-1.5 text-xs rounded-lg whitespace-nowrap transition-colors ${
              activeCategory === cat
                ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-semibold shadow-xs'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Mobile filter toggle bar */}
      <div className="lg:hidden flex items-center justify-between p-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
        <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
          Showing {filteredProducts.length} items
        </span>
        <button
          onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
          className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700"
        >
          <SlidersHorizontal className="w-3.5 h-3.5 text-[#D4A337]" />
          <span>Filters & Sort</span>
        </button>
      </div>

      {/* Content Layout: Left Sidebar Filters + Right Product Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Desktop Sidebar Filters */}
        <aside
          className={`lg:col-span-3 space-y-6 ${
            isMobileFiltersOpen ? 'block' : 'hidden lg:block'
          } p-5 rounded-2xl bg-zinc-50 dark:bg-[#121317] border border-zinc-200 dark:border-zinc-800`}
        >
          <div className="flex items-center justify-between pb-3 border-b border-zinc-200 dark:border-zinc-800">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-950 dark:text-white">
              Filter Products
            </h3>
            <button
              onClick={handleResetFilters}
              className="text-[11px] text-zinc-500 hover:text-[#D4A337] flex items-center gap-1 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          </div>

          {/* Sort By */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">Sort By</label>
            <select
              value={sortBy}
              onChange={(e: any) => setSortBy(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-[#D4A337]"
            >
              <option value="featured">Featured & Recommended</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Customer Rating</option>
            </select>
          </div>

          {/* Max Price Slider */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-semibold text-zinc-700 dark:text-zinc-300">
              <span>Max Price</span>
              <span className="font-mono text-[#D4A337]">£{maxPrice.toFixed(0)}</span>
            </div>
            <input
              type="range"
              min={10}
              max={300}
              step={10}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-[#D4A337] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-zinc-400 font-mono">
              <span>£10</span>
              <span>£150</span>
              <span>£300</span>
            </div>
          </div>

          {/* Minimum Rating */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">Minimum Rating</label>
            <div className="grid grid-cols-3 gap-1.5 text-xs">
              {[0, 4.8, 4.9].map((rating) => (
                <button
                  key={rating}
                  onClick={() => setMinRating(rating)}
                  className={`py-1.5 px-2 rounded-lg border text-center transition-colors ${
                    minRating === rating
                      ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-bold border-transparent'
                      : 'border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                  }`}
                >
                  {rating === 0 ? 'Any' : `${rating}+ ★`}
                </button>
              ))}
            </div>
          </div>

          {/* In Stock toggle */}
          <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800">
            <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-zinc-700 dark:text-zinc-300">
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
                className="rounded accent-[#D4A337] w-4 h-4 cursor-pointer"
              />
              <span>In Stock Only (Dispatched in 24h)</span>
            </label>
          </div>

          {/* Active criteria summary */}
          <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800 text-[11px] text-zinc-500 space-y-1">
            <div>✓ UK Tracked Delivery</div>
            <div>✓ 2-Year Manufacturer Warranty</div>
            <div>✓ UKCA & CE Certified</div>
          </div>
        </aside>

        {/* Right Products Area */}
        <main className="lg:col-span-9 space-y-4">
          <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
            <span>
              Showing <strong className="text-zinc-900 dark:text-white font-mono">{filteredProducts.length}</strong>{' '}
              products {activeCategory ? `in ${activeCategory}` : ''}
            </span>
            <span className="hidden sm:inline">Prices include 20% UK VAT</span>
          </div>

          {/* Product Grid: 3 columns on desktop */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 px-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 border border-dashed border-zinc-300 dark:border-zinc-800 space-y-4">
              <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                No electronics matched your active filters.
              </p>
              <p className="text-xs text-zinc-500 max-w-sm mx-auto">
                Try widening your price range, clearing your search query, or resetting the category filter.
              </p>
              <button
                onClick={handleResetFilters}
                className="px-4 py-2 text-xs font-semibold bg-[#D4A337] text-zinc-950 rounded-lg hover:bg-[#C59123] transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
