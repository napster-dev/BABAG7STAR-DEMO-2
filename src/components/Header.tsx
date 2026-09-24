import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { PRODUCTS } from '../data/products';
import { BrandLogo } from './BrandLogo';
import { Search, ShoppingBag, Sun, Moon, Menu, X, ArrowRight } from 'lucide-react';

export const Header: React.FC = () => {
  const {
    currentPage,
    navigateTo,
    cartCount,
    setIsCartOpen,
    isDarkMode,
    toggleTheme,
    searchQuery,
    setSearchQuery,
    setCatalogCategoryFilter,
  } = useStore();

  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleNav = (page: any, catFilter: string | null = null) => {
    if (catFilter !== null) {
      setCatalogCategoryFilter(catFilter);
    }
    navigateTo(page);
    setIsMobileMenuOpen(false);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setCatalogCategoryFilter(null);
      navigateTo('catalog');
      setIsSearchOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-[#090A0D]/95 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800/80 transition-colors">
      {/* Slim, dismissible top announcement banner (under 36px) */}
      {isBannerVisible && (
        <div className="relative flex items-center justify-center px-4 py-1.5 text-xs font-medium bg-zinc-900 text-zinc-100 dark:bg-black dark:text-zinc-200 border-b border-zinc-800">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D4A337]" />
            <span>Complimentary UK Tracked Delivery on orders over £40</span>
            <span className="hidden sm:inline text-zinc-500">·</span>
            <span className="hidden sm:inline">2-Year UK Warranty on all electronics</span>
            <button
              onClick={() => handleNav('catalog')}
              className="hidden md:inline-flex items-center gap-1 text-[#D4A337] hover:underline ml-2"
            >
              Shop Catalog <ArrowRight className="w-3 h-3" />
            </button>
          </div>
          <button
            onClick={() => setIsBannerVisible(false)}
            aria-label="Dismiss announcement"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white p-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Strict 1-row, 3-zone Top Bar Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        {/* Zone 1: Brand title / Wordmark */}
        <button
          onClick={() => handleNav('home')}
          className="text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A337] rounded-lg p-0.5"
          aria-label="BABAG7STAR Home"
        >
          <BrandLogo size="md" />
        </button>

        {/* Zone 2: Clean 4–6 text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide">
          <button
            onClick={() => handleNav('home')}
            className={`transition-colors py-1 relative ${
              currentPage === 'home'
                ? 'text-[#D4A337]'
                : 'text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white'
            }`}
          >
            Home
            {currentPage === 'home' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4A337] rounded-full" />
            )}
          </button>

          <button
            onClick={() => handleNav('catalog', null)}
            className={`transition-colors py-1 relative ${
              currentPage === 'catalog'
                ? 'text-[#D4A337]'
                : 'text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white'
            }`}
          >
            Products
            {currentPage === 'catalog' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4A337] rounded-full" />
            )}
          </button>

          <button
            onClick={() => handleNav('about')}
            className={`transition-colors py-1 relative ${
              currentPage === 'about'
                ? 'text-[#D4A337]'
                : 'text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white'
            }`}
          >
            About
            {currentPage === 'about' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4A337] rounded-full" />
            )}
          </button>

          <button
            onClick={() => handleNav('contact')}
            className={`transition-colors py-1 relative ${
              currentPage === 'contact'
                ? 'text-[#D4A337]'
                : 'text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white'
            }`}
          >
            Contact
            {currentPage === 'contact' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4A337] rounded-full" />
            )}
          </button>
        </nav>

        {/* Zone 3: Primary actions (Search, Dark/Light mode toggle, Cart, Mobile Menu) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Search Trigger */}
          <div className="relative">
            {isSearchOpen ? (
              <form onSubmit={handleSearchSubmit} className="flex items-center">
                <input
                  type="text"
                  autoFocus
                  placeholder="Search 40 products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-44 sm:w-64 pl-3 pr-8 py-1.5 text-xs rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:border-[#D4A337]"
                />
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="absolute right-2 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </form>
            ) : (
              <button
                onClick={() => setIsSearchOpen(true)}
                aria-label="Open search"
                className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
              >
                <Search className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            aria-label={isDarkMode ? 'Switch to light theme' : 'Switch to dark theme'}
            className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-[#D4A337]" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Shopping Bag Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            aria-label={`View cart (${cartCount} items)`}
            className="relative flex items-center gap-2 px-3 py-2 text-xs font-semibold text-zinc-900 dark:text-white bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-lg transition-colors"
          >
            <ShoppingBag className="w-4 h-4 text-[#D4A337]" />
            <span className="hidden sm:inline font-mono tabular-nums">{cartCount}</span>
            {cartCount > 0 && (
              <span className="sm:hidden absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#D4A337] text-zinc-950 font-bold text-[10px] flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Open navigation menu"
            className="md:hidden p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#090A0D] px-6 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3">
            <button
              onClick={() => handleNav('home')}
              className={`text-left text-base font-semibold py-2 px-3 rounded-lg ${
                currentPage === 'home'
                  ? 'bg-zinc-100 dark:bg-zinc-800 text-[#D4A337]'
                  : 'text-zinc-700 dark:text-zinc-200'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNav('catalog', null)}
              className={`text-left text-base font-semibold py-2 px-3 rounded-lg ${
                currentPage === 'catalog'
                  ? 'bg-zinc-100 dark:bg-zinc-800 text-[#D4A337]'
                  : 'text-zinc-700 dark:text-zinc-200'
              }`}
            >
              All Electronics ({PRODUCTS.length})
            </button>
            <div className="pl-3 py-1 space-y-2 border-l border-zinc-200 dark:border-zinc-800">
              <span className="text-xs uppercase font-bold text-zinc-400">Featured Categories</span>
              <div className="grid grid-cols-2 gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                <button
                  onClick={() => handleNav('catalog', 'Headphones')}
                  className="text-left hover:text-[#D4A337]"
                >
                  Headphones
                </button>
                <button
                  onClick={() => handleNav('catalog', 'Watches')}
                  className="text-left hover:text-[#D4A337]"
                >
                  Watches
                </button>
                <button
                  onClick={() => handleNav('catalog', 'Power Banks')}
                  className="text-left hover:text-[#D4A337]"
                >
                  Power Banks
                </button>
                <button
                  onClick={() => handleNav('catalog', 'Chargers')}
                  className="text-left hover:text-[#D4A337]"
                >
                  GaN Chargers
                </button>
                <button
                  onClick={() => handleNav('catalog', 'Keyboards')}
                  className="text-left hover:text-[#D4A337]"
                >
                  Keyboards
                </button>
                <button
                  onClick={() => handleNav('catalog', 'Mice')}
                  className="text-left hover:text-[#D4A337]"
                >
                  Mice
                </button>
              </div>
            </div>
            <button
              onClick={() => handleNav('about')}
              className={`text-left text-base font-semibold py-2 px-3 rounded-lg ${
                currentPage === 'about'
                  ? 'bg-zinc-100 dark:bg-zinc-800 text-[#D4A337]'
                  : 'text-zinc-700 dark:text-zinc-200'
              }`}
            >
              About BABAG7STAR
            </button>
            <button
              onClick={() => handleNav('contact')}
              className={`text-left text-base font-semibold py-2 px-3 rounded-lg ${
                currentPage === 'contact'
                  ? 'bg-zinc-100 dark:bg-zinc-800 text-[#D4A337]'
                  : 'text-zinc-700 dark:text-zinc-200'
              }`}
            >
              Contact & UK Support
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
