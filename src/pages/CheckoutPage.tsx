import React, { useState } from 'react';
import { useStore, PlacedOrder } from '../context/StoreContext';
import { ProductVisual } from '../components/ProductVisual';
import {
  ShieldCheck,
  Lock,
  Truck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  CreditCard,
  Building,
  Check,
  Package,
} from 'lucide-react';

export const CheckoutPage: React.FC = () => {
  const {
    cart,
    cartSubtotal,
    freeShippingThreshold,
    appliedDiscountPercent,
    promoCode,
    clearCart,
    lastOrder,
    setLastOrder,
    navigateTo,
  } = useStore();

  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Form Fields with realistic UK defaults
  const [formData, setFormData] = useState({
    fullName: 'Alexander Hughes',
    email: 'alex.hughes@example.co.uk',
    phone: '07700 900123',
    addressLine1: '42 Belgrave Square',
    addressLine2: 'Apt 4B',
    city: 'London',
    postcode: 'SW1X 8NT',
    deliveryMethod: 'royal-mail-48',
    paymentMethod: 'card',
    cardNumber: '•••• •••• •••• 4242',
    cardExp: '08/28',
    cardCvc: '•••',
  });

  const [isProcessing, setIsProcessing] = useState(false);

  // Calculate pricing
  const isFreeDelivery = cartSubtotal >= freeShippingThreshold;
  const shippingFee =
    formData.deliveryMethod === 'dpd-express'
      ? 5.99
      : isFreeDelivery
      ? 0.0
      : 3.99;

  const discountAmount = (cartSubtotal * appliedDiscountPercent) / 100;
  const finalTotal = cartSubtotal - discountAmount + shippingFee;
  const vatAmount = (finalTotal / 1.2) * 0.2;

  // Empty cart redirect if not in order success state
  if (cart.length === 0 && !lastOrder) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-xl font-bold text-zinc-950 dark:text-white">Your basket is empty</h2>
        <p className="text-xs text-zinc-500">
          Add items to your basket before proceeding to the checkout.
        </p>
        <button
          onClick={() => navigateTo('catalog')}
          className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider bg-[#D4A337] text-zinc-950 rounded-xl"
        >
          Browse Products
        </button>
      </div>
    );
  }

  // Handle final order completion
  const handlePlaceOrder = () => {
    setIsProcessing(true);
    setTimeout(() => {
      const orderRef = `UK-B7S-${Math.floor(10000 + Math.random() * 90000)}`;
      const order: PlacedOrder = {
        orderNumber: orderRef,
        items: [...cart],
        subtotal: cartSubtotal,
        shippingFee,
        discount: discountAmount,
        total: finalTotal,
        date: new Date().toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
        shippingAddress: {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          addressLine1: formData.addressLine1,
          addressLine2: formData.addressLine2,
          city: formData.city,
          postcode: formData.postcode,
          deliveryMethod:
            formData.deliveryMethod === 'dpd-express'
              ? 'DPD Next Day Delivery'
              : 'Royal Mail Tracked 48',
        },
      };

      setLastOrder(order);
      clearCart();
      setIsProcessing(false);
      setStep(3);
    }, 1200);
  };

  // SUCCESS STATE (ORDER CONFIRMED)
  if (step === 3 && lastOrder) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="text-center space-y-3">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <div className="text-xs font-semibold uppercase tracking-wider text-[#D4A337]">
            Order Confirmed & Payment Verified
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-white font-display">
            Thank you for your order, {lastOrder.shippingAddress.fullName.split(' ')[0]}!
          </h1>
          <p className="text-xs sm:text-sm text-zinc-500 max-w-md mx-auto">
            Order reference <strong className="font-mono text-zinc-950 dark:text-white">{lastOrder.orderNumber}</strong> has been transmitted to our Birmingham logistics hub. A VAT confirmation invoice has been sent to{' '}
            <strong className="text-zinc-950 dark:text-white">{lastOrder.shippingAddress.email}</strong>.
          </p>
        </div>

        {/* Order Receipt Box */}
        <div className="p-6 rounded-2xl bg-white dark:bg-[#121317] border border-zinc-200 dark:border-zinc-800 space-y-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-zinc-200 dark:border-zinc-800 text-xs">
            <div>
              <span className="text-zinc-500">Order Reference:</span>{' '}
              <strong className="font-mono text-zinc-950 dark:text-white ml-1">{lastOrder.orderNumber}</strong>
            </div>
            <div>
              <span className="text-zinc-500">Order Date:</span>{' '}
              <span className="font-mono text-zinc-950 dark:text-white ml-1">{lastOrder.date}</span>
            </div>
          </div>

          {/* Delivery destination */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-1">
              <div className="font-bold text-zinc-950 dark:text-white flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-[#D4A337]" />
                <span>UK Delivery Address</span>
              </div>
              <div className="text-zinc-600 dark:text-zinc-400 leading-relaxed pt-1">
                {lastOrder.shippingAddress.fullName}<br />
                {lastOrder.shippingAddress.addressLine1} {lastOrder.shippingAddress.addressLine2}<br />
                {lastOrder.shippingAddress.city}, {lastOrder.shippingAddress.postcode}<br />
                Phone: {lastOrder.shippingAddress.phone}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-1">
              <div className="font-bold text-zinc-950 dark:text-white flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#D4A337]" />
                <span>Dispatch & Guarantee</span>
              </div>
              <div className="text-zinc-600 dark:text-zinc-400 leading-relaxed pt-1">
                Method: <strong>{lastOrder.shippingAddress.deliveryMethod}</strong><br />
                Warranty: <strong>2-Year UK Comprehensive Coverage</strong><br />
                Status: <span className="text-emerald-500 font-semibold">Preparing for Dispatch</span>
              </div>
            </div>
          </div>

          {/* Purchased Items */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-950 dark:text-white">
              Ordered Hardware ({lastOrder.items.length})
            </h3>
            <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
              {lastOrder.items.map((item, i) => (
                <div key={i} className="py-3 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0">
                      <ProductVisual product={item.product} aspectRatio="square" className="w-full h-full" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-zinc-950 dark:text-white">{item.product.name}</div>
                      <div className="text-[11px] text-zinc-500">
                        Finish: {item.selectedColor} · Qty: {item.quantity}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs font-mono font-bold text-zinc-950 dark:text-white">
                    £{(item.product.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cost Totals */}
          <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 space-y-1.5 text-xs">
            <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
              <span>Subtotal</span>
              <span className="font-mono">£{lastOrder.subtotal.toFixed(2)}</span>
            </div>
            {lastOrder.discount > 0 && (
              <div className="flex justify-between text-emerald-600 dark:text-emerald-400">
                <span>Promotional Discount</span>
                <span className="font-mono">-£{lastOrder.discount.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
              <span>UK Tracked Shipping</span>
              <span className="font-mono">
                {lastOrder.shippingFee === 0 ? 'FREE' : `£${lastOrder.shippingFee.toFixed(2)}`}
              </span>
            </div>
            <div className="flex justify-between text-[11px] text-zinc-400">
              <span>Includes 20% UK VAT</span>
              <span className="font-mono">£{((lastOrder.total / 1.2) * 0.2).toFixed(2)}</span>
            </div>
            <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800 flex justify-between font-bold text-sm text-zinc-950 dark:text-white">
              <span>Total Paid</span>
              <span className="text-base font-mono text-[#D4A337]">£{lastOrder.total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Action button */}
        <div className="flex justify-center">
          <button
            onClick={() => navigateTo('home')}
            className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#D4A337] hover:bg-[#C59123] text-zinc-950 transition-colors shadow-md"
          >
            Return to Storefront
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Checkout Header */}
      <div className="flex items-center justify-between pb-4 border-b border-zinc-200 dark:border-zinc-800">
        <div>
          <button
            onClick={() => navigateTo('catalog')}
            className="text-xs text-zinc-500 hover:text-zinc-950 dark:hover:text-white flex items-center gap-1 mb-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Catalog
          </button>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-white font-display">
            Secure UK Checkout
          </h1>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
          <Lock className="w-4 h-4" />
          <span className="hidden sm:inline">256-Bit SSL Encrypted Checkout</span>
        </div>
      </div>

      {/* Main 2-Column Layout: Left Form, Right Basket Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Form: Step 1 & Step 2 */}
        <div className="lg:col-span-7 space-y-8">
          {/* Step 1: Shipping Address */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#121317] border border-zinc-200 dark:border-zinc-800 space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#D4A337] text-zinc-950 font-bold text-xs flex items-center justify-center">
                  1
                </span>
                <h2 className="text-sm font-bold text-zinc-950 dark:text-white">
                  Contact & UK Delivery Address
                </h2>
              </div>
              <span className="text-xs text-zinc-400">UK Mainland & Islands</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:border-[#D4A337]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  UK Mobile Phone * (For Delivery SMS)
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white font-mono focus:outline-none focus:border-[#D4A337]"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                Email Address * (For Receipt & Tracking)
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:border-[#D4A337]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                Address Line 1 *
              </label>
              <input
                type="text"
                required
                value={formData.addressLine1}
                onChange={(e) => setFormData({ ...formData, addressLine1: e.target.value })}
                placeholder="House number and street"
                className="w-full px-3 py-2 text-xs rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:border-[#D4A337]"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  Town / City *
                </label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:border-[#D4A337]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  UK Postcode *
                </label>
                <input
                  type="text"
                  required
                  value={formData.postcode}
                  onChange={(e) => setFormData({ ...formData, postcode: e.target.value.toUpperCase() })}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white font-mono uppercase focus:outline-none focus:border-[#D4A337]"
                />
              </div>
            </div>

            {/* Delivery Method Selector */}
            <div className="space-y-2 pt-2">
              <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                Select UK Delivery Speed
              </label>
              <div className="space-y-2">
                <label
                  className={`flex items-center justify-between p-3.5 rounded-xl border text-xs cursor-pointer transition-colors ${
                    formData.deliveryMethod === 'royal-mail-48'
                      ? 'border-[#D4A337] bg-[#D4A337]/5'
                      : 'border-zinc-200 dark:border-zinc-800'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="delivery"
                      value="royal-mail-48"
                      checked={formData.deliveryMethod === 'royal-mail-48'}
                      onChange={() => setFormData({ ...formData, deliveryMethod: 'royal-mail-48' })}
                      className="accent-[#D4A337]"
                    />
                    <div>
                      <div className="font-semibold text-zinc-900 dark:text-white">
                        Royal Mail Tracked 48
                      </div>
                      <div className="text-[11px] text-zinc-500">
                        2-3 Business Days with SMS Tracking
                      </div>
                    </div>
                  </div>
                  <span className="font-mono font-bold text-zinc-950 dark:text-white">
                    {isFreeDelivery ? 'FREE' : '£3.99'}
                  </span>
                </label>

                <label
                  className={`flex items-center justify-between p-3.5 rounded-xl border text-xs cursor-pointer transition-colors ${
                    formData.deliveryMethod === 'dpd-express'
                      ? 'border-[#D4A337] bg-[#D4A337]/5'
                      : 'border-zinc-200 dark:border-zinc-800'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="delivery"
                      value="dpd-express"
                      checked={formData.deliveryMethod === 'dpd-express'}
                      onChange={() => setFormData({ ...formData, deliveryMethod: 'dpd-express' })}
                      className="accent-[#D4A337]"
                    />
                    <div>
                      <div className="font-semibold text-zinc-900 dark:text-white">
                        DPD Next-Day Priority Tracked
                      </div>
                      <div className="text-[11px] text-zinc-500">
                        Guaranteed next business day with 1-hour delivery window
                      </div>
                    </div>
                  </div>
                  <span className="font-mono font-bold text-zinc-950 dark:text-white">£5.99</span>
                </label>
              </div>
            </div>
          </div>

          {/* Step 2: Payment Details */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#121317] border border-zinc-200 dark:border-zinc-800 space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#D4A337] text-zinc-950 font-bold text-xs flex items-center justify-center">
                  2
                </span>
                <h2 className="text-sm font-bold text-zinc-950 dark:text-white">
                  Payment Method
                </h2>
              </div>
              <span className="text-xs text-zinc-400">Encrypted via Stripe UK</span>
            </div>

            {/* Payment Method Selector */}
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                className={`py-2.5 px-3 rounded-xl border text-xs font-semibold flex flex-col items-center gap-1 transition-colors ${
                  formData.paymentMethod === 'card'
                    ? 'border-[#D4A337] bg-[#D4A337]/10 text-zinc-950 dark:text-white'
                    : 'border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400'
                }`}
              >
                <CreditCard className="w-4 h-4 text-[#D4A337]" />
                <span>UK Card</span>
              </button>

              <button
                type="button"
                onClick={() => setFormData({ ...formData, paymentMethod: 'apple-pay' })}
                className={`py-2.5 px-3 rounded-xl border text-xs font-semibold flex flex-col items-center gap-1 transition-colors ${
                  formData.paymentMethod === 'apple-pay'
                    ? 'border-[#D4A337] bg-[#D4A337]/10 text-zinc-950 dark:text-white'
                    : 'border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400'
                }`}
              >
                <span> Pay / GPay</span>
                <span className="text-[10px] text-zinc-400">1-Click</span>
              </button>

              <button
                type="button"
                onClick={() => setFormData({ ...formData, paymentMethod: 'klarna' })}
                className={`py-2.5 px-3 rounded-xl border text-xs font-semibold flex flex-col items-center gap-1 transition-colors ${
                  formData.paymentMethod === 'klarna'
                    ? 'border-[#D4A337] bg-[#D4A337]/10 text-zinc-950 dark:text-white'
                    : 'border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400'
                }`}
              >
                <span>Klarna</span>
                <span className="text-[10px] text-zinc-400">Pay in 3</span>
              </button>
            </div>

            {formData.paymentMethod === 'card' && (
              <div className="space-y-4 pt-2">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                    Card Number
                  </label>
                  <input
                    type="text"
                    value={formData.cardNumber}
                    onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white font-mono focus:outline-none focus:border-[#D4A337]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      value={formData.cardExp}
                      onChange={(e) => setFormData({ ...formData, cardExp: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white font-mono focus:outline-none focus:border-[#D4A337]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                      Security Code (CVC)
                    </label>
                    <input
                      type="password"
                      maxLength={4}
                      value={formData.cardCvc}
                      onChange={(e) => setFormData({ ...formData, cardCvc: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white font-mono focus:outline-none focus:border-[#D4A337]"
                    />
                  </div>
                </div>
              </div>
            )}

            {formData.paymentMethod === 'apple-pay' && (
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-500 text-center">
                Authenticate with FaceID / TouchID on order submission.
              </div>
            )}

            {formData.paymentMethod === 'klarna' && (
              <div className="p-4 rounded-xl bg-pink-500/10 border border-pink-500/20 text-xs text-zinc-700 dark:text-zinc-300 space-y-1">
                <div className="font-semibold text-zinc-950 dark:text-white">Pay in 3 interest-free instalments:</div>
                <div className="font-mono">3 monthly payments of £{(finalTotal / 3).toFixed(2)}</div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Order Summary & Place Order Button */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
          <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#121317] border border-zinc-200 dark:border-zinc-800 space-y-4 shadow-sm">
            <h3 className="text-sm font-bold text-zinc-950 dark:text-white pb-3 border-b border-zinc-200 dark:border-zinc-800">
              Basket Summary ({cart.length})
            </h3>

            {/* Items */}
            <div className="max-h-60 overflow-y-auto space-y-3 pr-1">
              {cart.map((item) => (
                <div key={`${item.product.id}-${item.selectedColor}`} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0">
                    <ProductVisual product={item.product} aspectRatio="square" className="w-full h-full" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold text-zinc-900 dark:text-white truncate">
                      {item.product.name}
                    </div>
                    <div className="text-[11px] text-zinc-500">
                      {item.selectedColor} · Qty {item.quantity}
                    </div>
                  </div>
                  <div className="text-xs font-mono font-bold text-zinc-950 dark:text-white">
                    £{(item.product.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            {/* Calculations */}
            <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400">
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
                <span>UK Delivery</span>
                <span className="font-mono text-zinc-900 dark:text-zinc-200">
                  {shippingFee === 0 ? 'FREE' : `£${shippingFee.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between text-[11px] text-zinc-400">
                <span>Includes 20% UK VAT</span>
                <span className="font-mono">£{vatAmount.toFixed(2)}</span>
              </div>

              <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800 flex justify-between items-baseline font-bold text-sm text-zinc-950 dark:text-white">
                <span>Total Due</span>
                <span className="text-xl font-mono text-[#D4A337]">£{finalTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Place Order CTA */}
            <button
              onClick={handlePlaceOrder}
              disabled={isProcessing}
              className="w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#D4A337] hover:bg-[#C59123] text-zinc-950 transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
            >
              {isProcessing ? (
                <span>Authorising Payment...</span>
              ) : (
                <>
                  <Lock className="w-3.5 h-3.5" />
                  <span>Authorise & Pay £{finalTotal.toFixed(2)}</span>
                </>
              )}
            </button>

            {/* Security Notice */}
            <div className="text-[11px] text-zinc-500 text-center space-y-1 pt-1">
              <div>✓ Guaranteed 2-Year UK Manufacturer Warranty</div>
              <div>✓ 30-Day Money Back Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
