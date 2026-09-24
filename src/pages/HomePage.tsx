import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { ALL_CATEGORIES, ProductCategory, PRODUCTS, getFeaturedProducts } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ArrowRight, ShieldCheck, Zap, Award, CheckCircle2, ChevronRight, Star } from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigateTo, setCatalogCategoryFilter } = useStore();
  const [activeTabCategory, setActiveTabCategory] = useState<ProductCategory>('Headphones');

  const featured = getFeaturedProducts(4);
  const categoryProducts = PRODUCTS.filter((p) => p.category === activeTabCategory);

  const handleCategoryClick = (cat: ProductCategory) => {
    setCatalogCategoryFilter(cat);
    navigateTo('catalog');
  };

  return (
    <div className="w-full space-y-16 pb-20">
      {/* 1. Hero Section: Split showcase with 16:9 generated photography */}
      <section className="relative overflow-hidden bg-zinc-950 text-white border-b border-zinc-800">
        {/* Subtle background ambient light */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4A337]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy: Focus on Trust, Quality, UK standards */}
            <div className="lg:col-span-6 space-y-6">
              {/* Clean unboxed kicker */}
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4A337]">
                <span>Certified UK Tech</span>
                <span aria-hidden="true">·</span>
                <span>2-Year Warranty</span>
                <span aria-hidden="true">·</span>
                <span>Next-Day UK Dispatch</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display text-white text-balance leading-tight">
                Electronics built for endurance.
              </h1>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl">
                BABAG7STAR delivers high-performance audio, titanium smartwatches, and GaN charging architecture across Great Britain. Engineered with zero compromises, genuine UKCA safety compliance, and comprehensive 2-year warranty protection.
              </p>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => {
                    setCatalogCategoryFilter(null);
                    navigateTo('catalog');
                  }}
                  className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase bg-[#D4A337] hover:bg-[#C59123] text-zinc-950 transition-colors shadow-lg flex items-center gap-2"
                >
                  <span>Explore 40 Flagship Products</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => navigateTo('about')}
                  className="px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700 bg-zinc-900/60 transition-colors"
                >
                  Our Quality Standards
                </button>
              </div>

              {/* Verified Trust Stats */}
              <div className="pt-6 border-t border-zinc-800/80 grid grid-cols-3 gap-4 text-left">
                <div>
                  <div className="text-xl sm:text-2xl font-black font-display text-white font-mono">100%</div>
                  <div className="text-xs text-zinc-400 mt-0.5">UKCA & CE Tested</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black font-display text-white font-mono">2-Yr</div>
                  <div className="text-xs text-zinc-400 mt-0.5">Standard UK Guarantee</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black font-display text-white font-mono">48H</div>
                  <div className="text-xs text-zinc-400 mt-0.5">Royal Mail Tracked</div>
                </div>
              </div>
            </div>

            {/* Right Visual: Showcase Photography */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900">
                <img
                  src="/src/assets/images/hero_electronics_showcase_1790260595628.jpg"
                  alt="BABAG7STAR Flagship Electronics"
                  className="w-full h-auto object-cover object-center transform hover:scale-[1.02] transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-zinc-300">
                  <span className="font-semibold">BABAG7STAR Studio Hardware Ecosystem</span>
                  <button
                    onClick={() => {
                      setCatalogCategoryFilter('Headphones');
                      navigateTo('catalog');
                    }}
                    className="flex items-center gap-1 text-[#D4A337] hover:underline"
                  >
                    View Flagships <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Category Quick Access: Clean interactive segmented tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <div className="text-xs font-semibold text-[#D4A337] uppercase tracking-wider">
              Curated Catalog
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-white font-display mt-1">
              Shop by Category
            </h2>
          </div>
          <button
            onClick={() => {
              setCatalogCategoryFilter(null);
              navigateTo('catalog');
            }}
            className="text-xs font-semibold text-[#D4A337] hover:underline flex items-center gap-1 self-start sm:self-auto"
          >
            <span>View All 10 Categories</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Category Buttons Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {ALL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTabCategory(cat)}
              className={`px-4 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-colors shrink-0 ${
                activeTabCategory === cat
                  ? 'bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 shadow-sm'
                  : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 4 Items in the active category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-6">
          <button
            onClick={() => handleCategoryClick(activeTabCategory)}
            className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-200 hover:bg-[#D4A337] hover:text-zinc-950 transition-colors"
          >
            <span>Explore all {activeTabCategory} specifications</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* 3. Featured Flagships Highlight: Strict 4-item showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="text-xs font-semibold text-[#D4A337] uppercase tracking-wider">
              Acoustic & Engineering Highlights
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-white font-display mt-1">
              Top Rated by UK Consumers
            </h2>
          </div>
          <button
            onClick={() => {
              setCatalogCategoryFilter(null);
              navigateTo('catalog');
            }}
            className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white flex items-center gap-1"
          >
            <span>Complete Catalog</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 4. Engineering & Safety Credo: Focus on Trust & Reliability */}
      <section className="bg-zinc-100 dark:bg-zinc-900/60 border-y border-zinc-200 dark:border-zinc-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#D4A337]">
                UK Quality Assurance
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white font-display">
                Built to outperform generic marketplace gadgets.
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Cheap electronics flood the UK with substandard solder points, counterfeit battery ratings, and unsafe plugs. BABAG7STAR rejects disposable tech. We individually batch-test every GaN semiconductor, battery cell, and acoustic transducer before dispatch from our Midlands warehouse.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D4A337] shrink-0 mt-0.5" />
                  <span className="text-xs text-zinc-700 dark:text-zinc-300">
                    <strong>BS 1363 Certified UK 3-Pin Plugs:</strong> Built-in ceramic fuses and insulated safety pins.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D4A337] shrink-0 mt-0.5" />
                  <span className="text-xs text-zinc-700 dark:text-zinc-300">
                    <strong>Real Capacity Guarantees:</strong> 24,000mAh means true 86.4Wh output under load, verified by digital load testing.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D4A337] shrink-0 mt-0.5" />
                  <span className="text-xs text-zinc-700 dark:text-zinc-300">
                    <strong>Plastic-Free Eco Packaging:</strong> 100% recyclable unbleached kraft card with zero unnecessary single-use plastics.
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white dark:bg-[#121317] border border-zinc-200 dark:border-zinc-800 space-y-2">
                <ShieldCheck className="w-6 h-6 text-[#D4A337]" />
                <h3 className="text-base font-bold text-zinc-950 dark:text-white">UKCA Electrical Conformity</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Compliant with UK Electromagnetic Compatibility (EMC) Regulations 2016 and Electrical Equipment (Safety) Regulations 2016.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-[#121317] border border-zinc-200 dark:border-zinc-800 space-y-2">
                <Zap className="w-6 h-6 text-[#D4A337]" />
                <h3 className="text-base font-bold text-zinc-950 dark:text-white">GaN III Thermal Architecture</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Semiconductors operate 25°C cooler than legacy silicon bricks, preventing degradation and maintaining peak PD 3.1 charging speeds.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-[#121317] border border-zinc-200 dark:border-zinc-800 space-y-2">
                <Award className="w-6 h-6 text-[#D4A337]" />
                <h3 className="text-base font-bold text-zinc-950 dark:text-white">Direct UK Warranty Handling</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  No dealing with overseas third parties. Warranty claims are verified and replaced directly from London and Birmingham within 48 hours.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-[#121317] border border-zinc-200 dark:border-zinc-800 space-y-2">
                <Star className="w-6 h-6 text-[#D4A337]" />
                <h3 className="text-base font-bold text-zinc-950 dark:text-white">4.9 / 5.0 Consumer Trust</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Over 1,200 verified reviews across British audiophiles, office executives, cyclists, and technology enthusiasts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. UK Customer Testimonials: Real Locations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-semibold text-[#D4A337] uppercase tracking-wider">
            Verified Experiences
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-white font-display mt-1">
            Trusted by UK Tech Enthusiasts
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 mt-2">
            Real feedback from verified customers across England, Scotland, Wales, and Northern Ireland.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-[#121317] border border-zinc-200 dark:border-zinc-800 space-y-3">
            <div className="flex items-center gap-1 text-[#D4A337]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#D4A337]" />
              ))}
            </div>
            <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed italic">
              "The Apex 700 headphones completely silence the London Underground Central Line screech. The aluminium hinges feel like they belong on a £350 pair. Best electronics purchase this year."
            </p>
            <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs">
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">Marcus H.</span>
              <span className="text-zinc-400">London · Verified Buyer</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#121317] border border-zinc-200 dark:border-zinc-800 space-y-3">
            <div className="flex items-center gap-1 text-[#D4A337]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#D4A337]" />
              ))}
            </div>
            <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed italic">
              "The GaN 100W 4-port charger cleared all the clutter behind my desk. Royal Mail delivered it the following morning tracked to Edinburgh. Solid British customer service."
            </p>
            <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs">
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">Eleanor W.</span>
              <span className="text-zinc-400">Edinburgh · Verified Buyer</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#121317] border border-zinc-200 dark:border-zinc-800 space-y-3">
            <div className="flex items-center gap-1 text-[#D4A337]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#D4A337]" />
              ))}
            </div>
            <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed italic">
              "The Horizon Pro Titanium watch holds battery for almost two weeks. No scratch on the sapphire glass despite frequent mountain biking in North Wales. Exceptional value."
            </p>
            <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs">
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">Gareth J.</span>
              <span className="text-zinc-400">Cardiff · Verified Buyer</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
