import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, CheckCircle2, ChevronDown, ChevronUp, Send } from 'lucide-react';

const FAQS = [
  {
    q: 'How long does UK delivery take and what are the shipping costs?',
    a: 'All orders over £40 qualify for Free UK Tracked Delivery via Royal Mail Tracked 48 (2 business days). Orders under £40 carry a flat £3.99 delivery fee. Next-day DPD Tracked 24 is also available at checkout for orders placed before 3:00 PM GMT.',
  },
  {
    q: 'How does the BABAG7STAR 2-Year UK Warranty work?',
    a: 'Every electronic device and power accessory purchased directly from our website includes a comprehensive 24-month manufacturer guarantee. If your product experiences any functional failure not caused by accidental damage, we issue a prepaid Royal Mail return label and dispatch a replacement from our Birmingham hub within 48 hours.',
  },
  {
    q: 'Are all products certified for UK electrical plugs and safety?',
    a: 'Yes. Every wall charger and AC-connected device carries genuine UKCA and CE conformity certification and features British Standard BS 1363 3-pin plugs with integrated safety shutters and certified ceramic fuses.',
  },
  {
    q: 'What is your returns policy?',
    a: 'We offer a 30-day trial period. If you are not completely satisfied with your audio gear or accessories, you can return it in its original packaging for a 100% full refund.',
  },
];

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    orderRef: '',
    subject: 'product-enquiry',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="text-xs font-semibold uppercase tracking-widest text-[#D4A337]">
          Direct UK Support
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white font-display">
          We're here to assist you.
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
          Reach our London technical support team for warranty claims, technical advice, or order tracking queries.
        </p>
      </div>

      {/* 2-Column: Contact Details & Interactive Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Direct channels */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-6">
            <h2 className="text-base font-bold text-zinc-950 dark:text-white">
              Direct Contact Details
            </h2>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white dark:bg-zinc-800 text-[#D4A337] border border-zinc-200 dark:border-zinc-700">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-zinc-900 dark:text-white">Telephone Support</div>
                  <div className="font-mono text-zinc-600 dark:text-zinc-400 mt-0.5">0800 747 8899</div>
                  <div className="text-[11px] text-zinc-500">Freephone across UK landlines & mobiles</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white dark:bg-zinc-800 text-[#D4A337] border border-zinc-200 dark:border-zinc-700">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-zinc-900 dark:text-white">Email Enquiries</div>
                  <div className="font-mono text-zinc-600 dark:text-zinc-400 mt-0.5">support@babag7star.co.uk</div>
                  <div className="text-[11px] text-zinc-500">Average response time: under 4 hours</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white dark:bg-zinc-800 text-[#D4A337] border border-zinc-200 dark:border-zinc-700">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-zinc-900 dark:text-white">Operating Hours</div>
                  <div className="text-zinc-600 dark:text-zinc-400 mt-0.5">Monday – Friday: 8:00 AM – 6:00 PM GMT</div>
                  <div className="text-[11px] text-zinc-500">Saturday: 9:00 AM – 1:00 PM GMT</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white dark:bg-zinc-800 text-[#D4A337] border border-zinc-200 dark:border-zinc-700">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-zinc-900 dark:text-white">UK Registered Office</div>
                  <div className="text-zinc-600 dark:text-zinc-400 mt-0.5 leading-relaxed">
                    BABAG7STAR LTD<br />
                    74 Great Eastern Street, Shoreditch<br />
                    London EC2A 3NT, United Kingdom
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#121317] border border-zinc-200 dark:border-zinc-800 shadow-sm">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-zinc-950 dark:text-white">
                  Message Sent Successfully
                </h3>
                <p className="text-xs text-zinc-500 max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out to BABAG7STAR. A ticket has been created and our London team will respond to <strong className="text-zinc-900 dark:text-white">{formData.email}</strong> within 4 business hours.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', orderRef: '', subject: 'product-enquiry', message: '' });
                  }}
                  className="px-4 py-2 text-xs font-semibold text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-lg font-bold text-zinc-950 dark:text-white">
                  Send a Message or Warranty Claim
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Oliver Taylor"
                      className="w-full px-3 py-2 text-xs rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:border-[#D4A337]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. oliver@example.co.uk"
                      className="w-full px-3 py-2 text-xs rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:border-[#D4A337]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                      Enquiry Nature
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:border-[#D4A337]"
                    >
                      <option value="product-enquiry">Product Technical Question</option>
                      <option value="warranty-claim">2-Year Warranty Replacement</option>
                      <option value="order-tracking">Order Tracking & Delivery</option>
                      <option value="returns">30-Day UK Return Request</option>
                      <option value="b2b-corporate">Corporate & Bulk Supply</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                      Order Reference (if applicable)
                    </label>
                    <input
                      type="text"
                      value={formData.orderRef}
                      onChange={(e) => setFormData({ ...formData, orderRef: e.target.value })}
                      placeholder="e.g. UK-B7S-89241"
                      className="w-full px-3 py-2 text-xs rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white font-mono uppercase focus:outline-none focus:border-[#D4A337]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details regarding your hardware query or warranty serial number..."
                    className="w-full px-3 py-2 text-xs rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:border-[#D4A337]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-5 rounded-xl text-xs font-bold tracking-wider uppercase bg-[#D4A337] hover:bg-[#C59123] text-zinc-950 transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Transmitting to Support...' : 'Submit Message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* FAQ Accordion */}
      <section className="pt-8 border-t border-zinc-200 dark:border-zinc-800 space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-1">
          <h2 className="text-xl font-bold font-display text-zinc-950 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-xs text-zinc-500">
            Common questions regarding UK delivery, warranty claims, and electrical safety.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121317] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full py-3.5 px-4 text-left flex items-center justify-between gap-4"
                >
                  <span className="text-xs font-semibold text-zinc-900 dark:text-white">
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#D4A337] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-zinc-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed border-t border-zinc-100 dark:border-zinc-800/80 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
