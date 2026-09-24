import React from 'react';
import { BrandLogo } from '../components/BrandLogo';
import { useStore } from '../context/StoreContext';
import { ShieldCheck, Cpu, Award, Recycle, MapPin, ArrowRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigateTo } = useStore();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Brand Hero */}
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <div className="flex justify-center">
          <BrandLogo size="xl" />
        </div>
        <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4A337]">
          <span>Great Britain Engineering Credo</span>
          <span>·</span>
          <span>Founded in London</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 dark:text-white font-display text-balance">
          Trust, precision, and endurance in British electronics.
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          BABAG7STAR was established with a clear mandate: eliminate the flood of unreliable, flimsy consumer electronics that fail after a few months. We engineer audio gear, titanium wearables, and GaN power hardware built to withstand intense daily use—backed by a comprehensive 2-year UK warranty on every unit.
        </p>
      </section>

      {/* 4 Pillars of BABAG7STAR Quality */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 rounded-2xl bg-white dark:bg-[#121317] border border-zinc-200 dark:border-zinc-800 space-y-3">
          <ShieldCheck className="w-8 h-8 text-[#D4A337]" />
          <h3 className="text-base font-bold text-zinc-950 dark:text-white">UKCA Electrical Rigour</h3>
          <p className="text-xs text-zinc-500 leading-relaxed">
            Every product conforms strictly with the UK Electrical Equipment (Safety) Regulations 2016 and UK Electromagnetic Compatibility (EMC) regulations.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-[#121317] border border-zinc-200 dark:border-zinc-800 space-y-3">
          <Cpu className="w-8 h-8 text-[#D4A337]" />
          <h3 className="text-base font-bold text-zinc-950 dark:text-white">GaN III Thermal Control</h3>
          <p className="text-xs text-zinc-500 leading-relaxed">
            We use third-generation Gallium Nitride semiconductors tested under heavy continuous wattages to operate 25°C cooler than conventional silicon wall bricks.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-[#121317] border border-zinc-200 dark:border-zinc-800 space-y-3">
          <Award className="w-8 h-8 text-[#D4A337]" />
          <h3 className="text-base font-bold text-zinc-950 dark:text-white">2-Year UK Warranty</h3>
          <p className="text-xs text-zinc-500 leading-relaxed">
            No endless chatbots or overseas returns. If any product experiences a hardware defect, our UK team will replace or repair it within 48 hours.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-[#121317] border border-zinc-200 dark:border-zinc-800 space-y-3">
          <Recycle className="w-8 h-8 text-[#D4A337]" />
          <h3 className="text-base font-bold text-zinc-950 dark:text-white">Zero Single-Use Plastic</h3>
          <p className="text-xs text-zinc-500 leading-relaxed">
            Compliant with WEEE environmental standards. All packaging uses 100% recyclable unbleached kraft cardboard and soy-based inks.
          </p>
        </div>
      </section>

      {/* Deep Dive Section: Why British Consumers Trust Us */}
      <section className="p-8 sm:p-12 rounded-3xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#D4A337]">
            The Problem We Solved
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-white font-display">
            The era of disposable marketplace electronics is over.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Most online electronics retailers simply rebrand generic factory overruns with inflated mAh ratings, questionable counterfeit fuses, and non-existent customer support.
          </p>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            At BABAG7STAR, every acoustic driver is calibrated in our acoustic test environment, every power bank undergoes digital automated load cycling to guarantee its true watt-hour capacity, and every UK 3-pin plug meets British Standard BS 1363.
          </p>
        </div>

        <div className="space-y-4">
          <div className="p-5 rounded-xl bg-white dark:bg-[#121317] border border-zinc-200 dark:border-zinc-800">
            <div className="text-xs font-bold text-zinc-950 dark:text-white">
              Midlands Fulfillment & Technical Centre
            </div>
            <p className="text-xs text-zinc-500 mt-1">
              Located in Birmingham, our logistics centre dispatches orders 6 days a week via Royal Mail Tracked 24/48 and DPD Express across England, Scotland, Wales, and Northern Ireland.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-[#121317] border border-zinc-200 dark:border-zinc-800">
            <div className="text-xs font-bold text-zinc-950 dark:text-white">
              London Design & Testing Studio
            </div>
            <p className="text-xs text-zinc-500 mt-1">
              Based in Shoreditch, London, our engineering team manages product testing, firmware updates, and customer relations with real human UK specialists.
            </p>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="text-center space-y-4 pt-4">
        <h2 className="text-2xl font-bold font-display text-zinc-950 dark:text-white">
          Experience the BABAG7STAR standard today.
        </h2>
        <p className="text-xs sm:text-sm text-zinc-500 max-w-md mx-auto">
          Free tracked UK delivery on all orders over £40, plus 30 days to test in your own space.
        </p>
        <button
          onClick={() => navigateTo('catalog')}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#D4A337] hover:bg-[#C59123] text-zinc-950 transition-colors shadow-md"
        >
          <span>Browse 40 Catalog Products</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>
    </div>
  );
};
