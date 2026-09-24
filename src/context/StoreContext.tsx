import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { Product, PRODUCTS, getProductById } from '../data/products';

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: string;
}

export interface PlacedOrder {
  orderNumber: string;
  items: CartItem[];
  subtotal: number;
  shippingFee: number;
  discount: number;
  total: number;
  date: string;
  shippingAddress: {
    fullName: string;
    email: string;
    phone: string;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    postcode: string;
    deliveryMethod: string;
  };
}

export type PageId =
  | 'home'
  | 'catalog'
  | 'product'
  | 'about'
  | 'contact'
  | 'checkout'
  | 'order-success';

interface StoreContextType {
  // Navigation
  currentPage: PageId;
  selectedProductId: string | null;
  navigateTo: (page: PageId, productId?: string) => void;
  catalogCategoryFilter: string | null;
  setCatalogCategoryFilter: (cat: string | null) => void;

  // Theme
  isDarkMode: boolean;
  toggleTheme: () => void;

  // Cart
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number, color?: string) => void;
  removeFromCart: (productId: string, color: string) => void;
  updateQuantity: (productId: string, color: string, newQty: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartSubtotal: number;
  freeShippingThreshold: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;

  // Promo code
  promoCode: string;
  appliedDiscountPercent: number;
  applyPromoCode: (code: string) => { success: boolean; message: string };

  // Wishlist
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;

  // Checkout & Order
  lastOrder: PlacedOrder | null;
  setLastOrder: (order: PlacedOrder | null) => void;

  // Global search
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const StoreContext = createContext<StoreContextType | null>(null);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Theme state
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('b7s_theme');
    if (saved) return saved === 'dark';
    return true; // Default to sleek dark mode matching the logo
  });

  // Apply dark class to documentElement and body
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    if (isDarkMode) {
      root.classList.add('dark');
      body.classList.add('dark');
      localStorage.setItem('b7s_theme', 'dark');
    } else {
      root.classList.remove('dark');
      body.classList.remove('dark');
      localStorage.setItem('b7s_theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  // Navigation state
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [catalogCategoryFilter, setCatalogCategoryFilter] = useState<string | null>(null);

  const navigateTo = (page: PageId, productId?: string) => {
    setCurrentPage(page);
    if (productId) {
      setSelectedProductId(productId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Cart state
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('b7s_cart');
      if (saved) {
        const parsed = JSON.parse(saved);
        // Hydrate with latest product catalog data
        return parsed.map((item: any) => ({
          ...item,
          product: getProductById(item.product.id) || item.product,
        }));
      }
    } catch (e) {
      console.error(e);
    }
    // Default starter item for instant interactivity
    return [
      {
        product: PRODUCTS[0],
        quantity: 1,
        selectedColor: PRODUCTS[0].colors[0].name,
      },
    ];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscountPercent, setAppliedDiscountPercent] = useState(0);

  useEffect(() => {
    localStorage.setItem('b7s_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product, quantity = 1, color?: string) => {
    const chosenColor = color || (product.colors[0]?.name ?? 'Standard');
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedColor === chosenColor
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [...prev, { product, quantity, selectedColor: chosenColor }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string, color: string) => {
    setCart((prev) =>
      prev.filter((item) => !(item.product.id === productId && item.selectedColor === color))
    );
  };

  const updateQuantity = (productId: string, color: string, newQty: number) => {
    if (newQty <= 0) {
      removeFromCart(productId, color);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId && item.selectedColor === color
          ? { ...item, quantity: newQty }
          : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const cartCount = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  }, [cart]);

  const cartSubtotal = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  }, [cart]);

  const freeShippingThreshold = 40.0; // £40 for free UK shipping

  const applyPromoCode = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'BABAG10' || clean === 'WELCOME10') {
      setPromoCode(clean);
      setAppliedDiscountPercent(10);
      return { success: true, message: '10% discount applied to your UK order!' };
    }
    if (clean === 'GOLD7' || clean === 'VIP7') {
      setPromoCode(clean);
      setAppliedDiscountPercent(15);
      return { success: true, message: '15% VIP Gold Member discount applied!' };
    }
    return { success: false, message: 'Invalid discount code. Try "BABAG10" for 10% off.' };
  };

  // Wishlist state
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('b7s_wishlist');
      return saved ? JSON.parse(saved) : ['hp-apex-700', 'wtch-horizon-titanium'];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('b7s_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  const isWishlisted = (productId: string) => wishlist.includes(productId);

  // Checkout order
  const [lastOrder, setLastOrder] = useState<PlacedOrder | null>(null);

  // Global search
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <StoreContext.Provider
      value={{
        currentPage,
        selectedProductId,
        navigateTo,
        catalogCategoryFilter,
        setCatalogCategoryFilter,
        isDarkMode,
        toggleTheme,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartSubtotal,
        freeShippingThreshold,
        isCartOpen,
        setIsCartOpen,
        promoCode,
        appliedDiscountPercent,
        applyPromoCode,
        wishlist,
        toggleWishlist,
        isWishlisted,
        lastOrder,
        setLastOrder,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
