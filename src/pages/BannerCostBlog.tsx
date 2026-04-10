import React from 'react';
import { Header, Footer } from '../components/Layout';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, ChevronRight, MessageCircle } from 'lucide-react';

const BannerCostBlog = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <article className="relative">
        {/* Hero Header */}
        <div className="bg-brand-black text-white section-padding pt-32 pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-brand-cyan mb-8">
              <span className="bg-brand-cyan text-white px-3 py-1">Pricing Guide</span>
              <span className="flex items-center gap-1"><Calendar size={14} /> April 5, 2026</span>
              <span className="flex items-center gap-1"><Clock size={14} /> 8 min read</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter uppercase">
              How Much Does <br />
              <span className="text-brand-cyan">Banner Printing</span> <br />
              Cost in Kumasi?
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed">
              A complete 2026 price guide for business owners, churches, and event planners in the Ashanti region.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-20 py-20">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="prose prose-xl prose-slate max-w-none">
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                If you're a business owner in Adum, a church administrator in Bantama, or an event planner near KNUST, one of the first questions you'll ask when planning your branding is: **"How much does banner printing cost in Kumasi?"** Understanding the local market prices helps you budget effectively and ensure you're getting the best quality for your money.
              </p>

              {/* Table of Contents */}
              <div className="bg-gray-50 p-10 border-l-4 border-brand-cyan mb-16">
                <h2 className="text-xl font-black mb-6 uppercase tracking-widest">In this guide:</h2>
                <ul className="space-y-4 font-bold text-gray-800">
                  <li><a href="#factors" className="flex items-center gap-2 hover:text-brand-cyan transition-colors"><ChevronRight size={18} className="text-brand-cyan" /> Key Factors Affecting Cost</a></li>
                  <li><a href="#materials" className="flex items-center gap-2 hover:text-brand-cyan transition-colors"><ChevronRight size={18} className="text-brand-cyan" /> Banner Materials & Prices</a></li>
                  <li><a href="#ranges" className="flex items-center gap-2 hover:text-brand-cyan transition-colors"><ChevronRight size={18} className="text-brand-cyan" /> Typical Price Ranges</a></li>
                  <li><a href="#value" className="flex items-center gap-2 hover:text-brand-cyan transition-colors"><ChevronRight size={18} className="text-brand-cyan" /> How to Get Best Value</a></li>
                </ul>
              </div>

              <section id="factors" className="mb-20">
                <h2 className="text-3xl md:text-4xl font-black mb-8 uppercase tracking-tight">1. Key Factors Affecting Cost</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Several variables influence the final quote you receive from a printing company in Kumasi. It's rarely a "one size fits all" price.
                </p>
                <div className="space-y-10">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight text-brand-magenta">Size and Dimensions</h3>
                    <p className="text-gray-600 leading-relaxed">Naturally, the larger the banner, the more material and ink are used. Most printers in Kumasi charge per square foot or square meter. A massive backdrop for a stage will cost significantly more than a small shop-front banner.</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight text-brand-magenta">Design Complexity</h3>
                    <p className="text-gray-600 leading-relaxed">If you provide a print-ready high-resolution file, you'll save on costs. However, if you need professional design support, expect a small additional fee for the creative work.</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight text-brand-magenta">Finishing Options</h3>
                    <p className="text-gray-600 leading-relaxed">Do you need grommets (eyelets) for hanging? Hemmed edges for durability? These finishing touches add a small amount to the total cost but are essential for longevity.</p>
                  </div>
                </div>
              </section>

              <section id="materials" className="mb-20">
                <h2 className="text-3xl md:text-4xl font-black mb-8 uppercase tracking-tight">2. Banner Materials & Prices</h2>
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="p-8 bg-gray-50 border border-gray-100">
                    <h4 className="font-black text-xl mb-4 uppercase tracking-tight text-brand-cyan">Standard Vinyl</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">The most common choice for shop fronts and event banners. It's durable, vibrant, and cost-effective for most Kumasi businesses.</p>
                  </div>
                  <div className="p-8 bg-gray-50 border border-gray-100">
                    <h4 className="font-black text-xl mb-4 uppercase tracking-tight text-brand-cyan">Mesh Banners</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Ideal for very windy areas or large building wraps. The tiny holes allow wind to pass through, preventing tearing.</p>
                  </div>
                </div>
              </section>

              <section id="ranges" className="mb-20">
                <h2 className="text-3xl md:text-4xl font-black mb-8 uppercase tracking-tight">3. Typical Price Ranges</h2>
                <div className="overflow-hidden border border-gray-200 shadow-xl mb-8">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-brand-black text-white uppercase text-xs tracking-widest">
                        <th className="p-6">Banner Type</th>
                        <th className="p-6">Typical Size</th>
                        <th className="p-6">Estimated Price</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600">
                      <tr className="border-b border-gray-100">
                        <td className="p-6 font-bold text-brand-black">Small Event Banner</td>
                        <td className="p-6">3ft x 2ft</td>
                        <td className="p-6">Request Quote</td>
                      </tr>
                      <tr className="border-b border-gray-100 bg-gray-50">
                        <td className="p-6 font-bold text-brand-black">Standard Shop Banner</td>
                        <td className="p-6">6ft x 3ft</td>
                        <td className="p-6">Request Quote</td>
                      </tr>
                      <tr>
                        <td className="p-6 font-bold text-brand-black">Roll-up Banner</td>
                        <td className="p-6">Standard</td>
                        <td className="p-6">Request Quote</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm italic text-gray-400">Prices are subject to change based on material availability and order volume.</p>
              </section>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-12">
              {/* CTA Card */}
              <div className="bg-brand-cyan p-10 text-brand-black relative overflow-hidden">
                <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter leading-none relative z-10">Get an <br />Accurate Quote</h3>
                <p className="mb-8 font-medium relative z-10">Stop guessing. Send us your sizes and get a professional quote in minutes.</p>
                <Link to="/contact" className="btn-primary w-full relative z-10">REQUEST QUOTE</Link>
                <div className="absolute -right-10 -bottom-10 text-brand-black/5 font-black text-9xl select-none">
                  INK
                </div>
              </div>

              {/* Related Services */}
              <div>
                <h3 className="text-xl font-black mb-8 uppercase tracking-widest border-b-4 border-brand-magenta inline-block">Related Services</h3>
                <ul className="space-y-4">
                  {[
                    { name: "Banner Printing", link: "/services/banner-printing" },
                    { name: "Large Format", link: "/services/large-format-printing" },
                    { name: "Custom Orders", link: "/services/custom-printing" }
                  ].map((service, i) => (
                    <li key={i}>
                      <Link to={service.link} className="flex items-center justify-between group p-4 border border-gray-100 hover:border-brand-cyan transition-all">
                        <span className="font-bold uppercase tracking-tight group-hover:text-brand-cyan transition-colors">{service.name}</span>
                        <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black mb-16 tracking-tighter uppercase text-center">Banner Pricing FAQ</h2>
          <div className="space-y-6">
            {[
              { q: "Is there a discount for bulk banner orders?", a: "Yes! At ChromInk, we offer significant discounts for churches, schools, and businesses ordering multiple banners at once." },
              { q: "How long does it take to get a banner printed?", a: "Most standard banners are ready within 24-48 hours. Urgent same-day service is often available for a small rush fee." },
              { q: "Does the price include design?", a: "Basic layout is often included, but complex custom designs may incur a separate design fee." },
              { q: "Can I get a quote over WhatsApp?", a: "Absolutely. WhatsApp is the fastest way to get an accurate quote for your specific dimensions." }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-8 border border-gray-100 shadow-sm">
                <h4 className="font-bold text-lg mb-3 uppercase tracking-tight">{faq.q}</h4>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-brand-magenta text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <MessageCircle className="mx-auto mb-8" size={48} />
          <h2 className="text-4xl md:text-7xl font-black mb-8 leading-none tracking-tighter uppercase">
            Ready to Start?
          </h2>
          <p className="text-xl text-white/80 mb-12 font-medium">
            Contact ChromInk for the best banner printing services in Kumasi.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="https://wa.me/233593321151" target="_blank" rel="noopener noreferrer" className="bg-brand-black text-white px-12 py-6 font-black text-xl uppercase tracking-widest hover:scale-105 transition-transform">
              WhatsApp Us Now
            </a>
            <Link to="/contact" className="bg-white text-brand-black px-12 py-6 font-black text-xl uppercase tracking-widest hover:scale-105 transition-transform">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BannerCostBlog;