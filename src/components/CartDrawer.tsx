import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { ProductVisual } from './ProductVisual';
import { X, Plus, Minus, Trash2, ArrowRight, ShieldCheck, Truck, Check } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    removeFromCart,
    updateQuantity,
    cartSubtotal,
    freeShippingThreshold,
    promoCode,
    appliedDiscountPercent,
    applyPromoCode,
    navigateTo,
  } = useStore();

  const [inputCode, setInputCode] = useState('');
  const [promoMessage, setPromoMessage] = useState<{ text: string; isError: boolean } | null>(null);

  if (!isCartOpen) return null;

  const freeDeliveryRemaining = Math.max(0, freeShippingThreshold - cartSubtotal);
  const deliveryFee = cartSubtotal >= freeShippingThreshold || cartSubtotal === 0 ? 0 : 3.99;
  const discountAmount = (cartSubtotal * appliedDiscountPercent) / 100;
  const finalTotal = cartSubtotal - discountAmount + deliveryFee;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCode.trim()) return;
    const res = applyPromoCode(inputCode);
    setPromoMessage({ text: res.message, isError: !res.success });
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    navigateTo('checkout');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-200"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white dark:bg-[#0D0E12] border-l border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 flex flex-col shadow-2xl">
          {/* Header */}
          <div className="p-5 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold font-display tracking-tight">Your Basket</h2>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                {cart.length} {cart.length === 1 ? 'item' : 'items'}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              aria-label="Close cart"
              className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress bar */}
          <div className="px-5 py-3 bg-zinc-50 dark:bg-zinc-900/50 border-b border-zinc-200 dark:border-zinc-800">
            {freeDeliveryRemaining > 0 ? (
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-zinc-600 dark:text-zinc-400">
                    Add <strong className="text-zinc-950 dark:text-white font-mono">£{freeDeliveryRemaining.toFixed(2)}</strong> for Free UK Delivery
                  </span>
                  <span className="font-mono text-[#D4A337]">{Math.round((cartSubtotal / freeShippingThreshold) * 100)}%</span>
                </div>
                <div className="w-full h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#D4A337] transition-all duration-300"
                    style={{ width: `${Math.min(100, (cartSubtotal / freeShippingThreshold) * 100)}%` }}
                  />
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <Truck className="w-4 h-4" />
                <span>You've unlocked Free UK Tracked Delivery!</span>
              </div>
            )}
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-400">
                  <ShieldCheck className="w-8 h-8 text-[#D4A337]" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-white">Your basket is empty</h3>
                  <p className="text-xs text-zinc-500 mt-1 max-w-xs">
                    Explore our curated collection of certified UK electronics, audio, and GaN accessories.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    navigateTo('catalog');
                  }}
                  className="px-5 py-2.5 text-xs font-semibold bg-[#D4A337] hover:bg-[#C59123] text-zinc-950 rounded-lg transition-colors"
                >
                  Browse Products
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedColor}`}
                  className="flex gap-4 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80"
                >
                  <div className="w-20 h-20 shrink-0">
                    <ProductVisual product={item.product} aspectRatio="square" className="w-full h-full" />
                  </div>

                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4
                          onClick={() => {
                            setIsCartOpen(false);
                            navigateTo('product', item.product.id);
                          }}
                          className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 truncate hover:text-[#D4A337] cursor-pointer"
                        >
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.product.id, item.selectedColor)}
                          className="text-zinc-400 hover:text-rose-500 p-0.5 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex items-center gap-2 mt-1 text-[11px] text-zinc-500">
                        <span>Color: {item.selectedColor}</span>
                        <span>·</span>
                        <span>UK Stock</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-zinc-200 dark:border-zinc-800/80">
                      <div className="flex items-center border border-zinc-200 dark:border-zinc-700 rounded-md overflow-hidden bg-white dark:bg-zinc-800">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.selectedColor, item.quantity - 1)}
                          className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-300"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-mono font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.selectedColor, item.quantity + 1)}
                          className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-300"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="text-right">
                        <div className="text-xs font-bold font-mono text-zinc-950 dark:text-zinc-100">
                          £{(item.product.price * item.quantity).toFixed(2)}
                        </div>
                        {item.quantity > 1 && (
                          <div className="text-[10px] text-zinc-500 font-mono">
                            £{item.product.price.toFixed(2)} each
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Summary */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0D0E12] space-y-4">
              {/* Promo input */}
              <form onSubmit={handleApplyPromo} className="space-y-1.5">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputCode}
                    onChange={(e) => setInputCode(e.target.value)}
                    placeholder="Promo code (e.g. BABAG10)"
                    className="flex-1 px-3 py-1.5 text-xs rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:border-[#D4A337] uppercase font-mono"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1.5 text-xs font-semibold bg-zinc-900 text-white dark:bg-zinc-700 dark:hover:bg-zinc-600 rounded-lg transition-colors"
                  >
                    Apply
                  </button>
                </div>
                {promoMessage && (
                  <p
                    className={`text-[11px] font-medium flex items-center gap-1 ${
                      promoMessage.isError ? 'text-rose-500' : 'text-emerald-500'
                    }`}
                  >
                    {!promoMessage.isError && <Check className="w-3 h-3" />}
                    {promoMessage.text}
                  </p>
                )}
              </form>

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono text-zinc-900 dark:text-zinc-200">£{cartSubtotal.toFixed(2)}</span>
                </div>
                {appliedDiscountPercent > 0 && (
                  <div className="flex justify-between text-emerald-600 dark:text-emerald-400">
                    <span>Discount ({promoCode} - {appliedDiscountPercent}%)</span>
                    <span className="font-mono">-£{discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Tracked UK Delivery</span>
                  <span className="font-mono text-zinc-900 dark:text-zinc-200">
                    {deliveryFee === 0 ? 'FREE' : `£${deliveryFee.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-[11px] text-zinc-400">
                  <span>Includes 20% UK VAT</span>
                  <span className="font-mono">£{((finalTotal / 1.2) * 0.2).toFixed(2)}</span>
                </div>

                <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800 flex justify-between items-baseline font-bold text-sm text-zinc-950 dark:text-white">
                  <span>Total</span>
                  <span className="text-base font-mono text-[#D4A337]">£{finalTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Primary Action Button */}
              <button
                onClick={handleProceedToCheckout}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold tracking-wider uppercase bg-[#D4A337] hover:bg-[#C59123] text-zinc-950 transition-colors shadow-md"
              >
                <span>Proceed to UK Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-4 text-[11px] text-zinc-500 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D4A337]" /> 2-Year Warranty
                </span>
                <span>·</span>
                <span>30-Day UK Returns</span>
                <span>·</span>
                <span>SSL Encrypted</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
