import React from 'react';
import { Header, Footer } from '../components/Layout';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, ChevronRight, MessageCircle } from 'lucide-react';

const ShopSignageBlog = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <article className="relative">
        {/* Hero Header */}
        <div className="bg-brand-black text-white section-padding pt-32 pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-brand-cyan mb-8">
              <span className="bg-brand-cyan text-white px-3 py-1">Business</span>
              <span className="flex items-center gap-1"><Calendar size={14} /> March 2, 2026</span>
              <span className="flex items-center gap-1"><Clock size={14} /> 7 min read</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter uppercase">
              Why Shop Signage <br />
              <span className="text-brand-cyan">Matters for Small</span> <br />
              Businesses in Kumasi
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed">
              Professional storefront branding drives foot traffic, builds customer trust, and establishes market credibility for local retailers.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-20 py-20">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="prose prose-xl prose-slate max-w-none">
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                In Kumasi's competitive retail landscape—from the bustling shops of Adum to neighborhood stores in Bantama—your storefront signage is often your first and only chance to capture a customer's attention. Professional shop signage isn't just decoration; it's a critical business asset that drives foot traffic, communicates professionalism, and tells your brand story to passersby in seconds. For small business owners in the Ashanti region, investing in quality signage is one of the highest-ROI marketing decisions you can make.
              </p>

              {/* Table of Contents */}
              <div className="bg-gray-50 p-10 border-l-4 border-brand-cyan mb-16">
                <h2 className="text-xl font-black mb-6 uppercase tracking-widest">In this guide:</h2>
                <ul className="space-y-4 font-bold text-gray-800">
                  <li><a href="#first-impression" className="flex items-center gap-2 hover:text-brand-cyan transition-colors"><ChevronRight size={18} className="text-brand-cyan" /> First Impressions Count</a></li>
                  <li><a href="#customer-psychology" className="flex items-center gap-2 hover:text-brand-cyan transition-colors"><ChevronRight size={18} className="text-brand-cyan" /> Customer Psychology & Trust</a></li>
                  <li><a href="#visibility-factors" className="flex items-center gap-2 hover:text-brand-cyan transition-colors"><ChevronRight size={18} className="text-brand-cyan" /> Visibility & Street Presence</a></li>
                  <li><a href="#investment-roi" className="flex items-center gap-2 hover:text-brand-cyan transition-colors"><ChevronRight size={18} className="text-brand-cyan" /> Investment & ROI</a></li>
                </ul>
              </div>

              <section id="first-impression" className="mb-20">
                <h2 className="text-3xl md:text-4xl font-black mb-8 uppercase tracking-tight">1. First Impressions Count</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  A pedestrian walking through Kumasi has seconds to decide whether to enter your shop. Your signage is the deciding factor.
                </p>
                <div className="space-y-10">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight text-brand-magenta">The 3-Second Rule</h3>
                    <p className="text-gray-600 leading-relaxed">Research shows consumers make brand judgments in three seconds. A poorly designed, outdated, or illegible storefront sign tells customers you don't care about their experience before they even walk through the door. Conversely, professional, modern signage signals competence, professionalism, and attention to customer experience—inviting them inside.</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight text-brand-magenta">Standing Out in Dense Markets</h3>
                    <p className="text-gray-600 leading-relaxed">In areas like Adum Central Market where multiple shops compete for attention, distinctive signage is essential differentiation. A modern, well-lit, branded sign stands out against faded competitors, directing customer foot traffic toward you.</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight text-brand-magenta">Communicating Your Unique Value</h3>
                    <p className="text-gray-600 leading-relaxed">Are you offering quality? Affordability? Speed? Specialty products? Your storefront signage answers these questions instantly. Professional design communicates that your retail experience matches the promise of your signage.</p>
                  </div>
                </div>
              </section>

              <section id="customer-psychology" className="mb-20">
                <h2 className="text-3xl md:text-4xl font-black mb-8 uppercase tracking-tight">2. Customer Psychology & Trust Building</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Professional branding establishes credibility and trust before customers even interact with your staff.
                </p>
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="p-8 bg-gray-50 border border-gray-100">
                    <h4 className="font-black text-xl mb-4 uppercase tracking-tight text-brand-cyan">Brand Legitimacy</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">A professional storefront sign signals that you're an established, legitimate business—not a fly-by-night operation. This is critical for retail success in Kumasi where customer trust is paramount.</p>
                  </div>
                  <div className="p-8 bg-gray-50 border border-gray-100">
                    <h4 className="font-black text-xl mb-4 uppercase tracking-tight text-brand-cyan">Pride of Association</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">When customers see you've invested in professional signage, they subconsciously think "This business respects its customers enough to look good." That positive feeling precedes their first purchase.</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight text-brand-magenta">Consistent Brand Expression</h3>
                  <p className="text-gray-600 leading-relaxed">When your storefront signage matches your social media, business cards, and packaging, customers experience consistency. This repetition builds brand recall and trust. Inconsistent branding, conversely, raises questions about professionalism and reliability.</p>
                </div>
              </section>

              <section id="visibility-factors" className="mb-20">
                <h2 className="text-3xl md:text-4xl font-black mb-8 uppercase tracking-tight">3. Visibility & Street Presence</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Your sign works 24/7—even when your shop is closed.
                </p>
                <div className="space-y-10">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight text-brand-magenta">24/7 Marketing Asset</h3>
                    <p className="text-gray-600 leading-relaxed">Unlike a social media post that appears and disappears, your storefront sign is permanent presence on the street. Day and night, it's marketing your business to thousands of passersby. A well-designed illuminated sign is even more effective at night, capturing customers when digital marketing is least effective.</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight text-brand-magenta">GPS for Your Business</h3>
                    <p className="text-gray-600 leading-relaxed">In app-driven navigation, many customers still discover businesses by walking and looking. Clear, visible signage makes your shop discoverable by locals and visitors who might otherwise walk right past. This is especially important in Kumasi's winding street layouts.</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight text-brand-magenta">Window Display Integration</h3>
                    <p className="text-gray-600 leading-relaxed">Professional signage frames and enhances your window displays. Together, they create a cohesive storefront experience that tells your brand story and compels browsers to become buyers.</p>
                  </div>
                </div>
              </section>

              <section id="investment-roi" className="mb-20">
                <h2 className="text-3xl md:text-4xl font-black mb-8 uppercase tracking-tight">4. Investment & Return on Investment</h2>
                <div className="bg-brand-cyan/10 p-10 border border-brand-cyan mb-12">
                  <h3 className="text-2xl font-bold mb-6 uppercase tracking-tight">Calculating Signage ROI</h3>
                  <p className="text-gray-700 font-medium mb-6 leading-relaxed">
                    A professional storefront sign costs between 500-2,000 GHS depending on size, materials, and complexity. Over 5 years, that's 100-400 GHS per year—less than most monthly digital advertising budgets.
                  </p>
                  <ul className="space-y-4 text-gray-700 font-medium">
                    <li className="flex gap-3"><span className="text-brand-cyan font-black">✓</span> <strong>Direct attribution:</strong> Ask new customers, "How did you hear about us?" Track how many cite your storefront visibility.</li>
                    <li className="flex gap-3"><span className="text-brand-cyan font-black">✓</span> <strong>Foot traffic analysis:</strong> Compare customer count before and after new signage installation.</li>
                    <li className="flex gap-3"><span className="text-brand-cyan font-black">✓</span> <strong>Conversion rate:</strong> Better signage suggests higher conversion from foot traffic to customers.</li>
                    <li className="flex gap-3"><span className="text-brand-cyan font-black">✓</span> <strong>Break-even calculation:</strong> Most signs break even within 6-12 months of increased foot traffic.</li>
                  </ul>
                </div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight text-brand-magenta">Types of Shop Signage Worth the Investment</h3>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    <strong className="text-brand-black">Illuminated Channel Letters:</strong> Individual 3D letters that spell your shop name, backlit for visibility at night. Premium investment with strong ROI.
                  </p>
                  <p>
                    <strong className="text-brand-black">Vinyl Banner Signs:</strong> Cost-effective for new shops or seasonal promotions. Easy to update and replace.
                  </p>
                  <p>
                    <strong className="text-brand-black">Window Graphics & Decals:</strong> Professional storefront messaging that frames your window displays while maintaining visibility inside.
                  </p>
                  <p>
                    <strong className="text-brand-black">A-Frame/Sandwich Board Signs:</strong> Placement on sidewalks to grab attention from foot traffic and direct customers toward your entrance.
                  </p>
                </div>
              </section>

              <section className="mt-20 pt-20 border-t-4 border-gray-100">
                <h2 className="text-3xl md:text-4xl font-black mb-8 uppercase tracking-tight">The Bottom Line</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  For small business owners competing in Kumasi's retail landscape, professional shop signage isn't a luxury—it's a necessity. It's the first impression that decides whether thousands of daily passersby become customers. It's the silent salesman working 24/7, even after your staff goes home. It's the professional backdrop that tells customers you're serious about your business and their experience.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  The question isn't whether you can afford professional signage—it's whether you can afford the lost foot traffic and customer mistrust of not having it. In the competitive Kumasi market, professional storefront branding is your permanent, reliable investment in growth.
                </p>
              </section>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-12">
              {/* CTA Card */}
              <div className="bg-brand-magenta p-10 text-white relative overflow-hidden">
                <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter leading-none relative z-10">Transform Your <br />Storefront</h3>
                <p className="mb-8 font-medium relative z-10">Professional signage that attracts customers and builds brand trust in Kumasi.</p>
                <Link to="/contact" className="btn-primary w-full relative z-10 bg-white text-brand-black hover:bg-gray-100">REQUEST CONSULTATION</Link>
                <div className="absolute -right-10 -bottom-10 text-white/5 font-black text-9xl select-none">
                  SIGN
                </div>
              </div>

              {/* Related Services */}
              <div>
                <h3 className="text-xl font-black mb-8 uppercase tracking-widest border-b-4 border-brand-magenta inline-block">Related Services</h3>
                <ul className="space-y-4">
                  {[
                    { name: "Business Signage", link: "/services/business-signage" },
                    { name: "Banner Printing", link: "/services/banner-printing" },
                    { name: "Large Format", link: "/services/large-format-printing" }
                  ].map((service, i) => (
                    <li key={i}>
                      <Link to={service.link} className="flex items-center justify-between group p-4 border border-gray-100 hover:border-brand-magenta transition-all">
                        <span className="font-bold uppercase tracking-tight group-hover:text-brand-magenta transition-colors">{service.name}</span>
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
      <section id="faq" className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black mb-16 tracking-tighter uppercase text-center">Shop Signage FAQ</h2>
          <div className="space-y-6">
            {[
              { q: "How long does professional shop signage last?", a: "Quality vinyl and acrylic signs last 5-10 years. Illuminated signs may need bulb replacements every 2-3 years. Proper maintenance extends lifespan significantly." },
              { q: "Can I change my signage design seasonally?", a: "Absolutely. Vinyl banners and window graphics are easily updated. This allows seasonal promotions and keeps your storefront fresh." },
              { q: "How do I measure if signage is working?", a: "Ask new customers how they discovered you. Compare foot traffic and sales before and after installation. Track increases in direct inquiries about your business." },
              { q: "What's the best material for durability?", a: "For outdoor signage in Kumasi's climate, UV-resistant vinyl and powder-coated metals hold up best. We'll recommend the right material for your specific application." }
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
      <section className="section-padding bg-brand-cyan text-brand-black text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <MessageCircle className="mx-auto mb-8" size={48} />
          <h2 className="text-4xl md:text-7xl font-black mb-8 leading-none tracking-tighter uppercase">
            Let's Design Your <br />Perfect Storefront
          </h2>
          <p className="text-xl text-brand-black/70 mb-12 font-medium">
            Professional shop signage that converts foot traffic to customers in Kumasi.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="https://wa.me/233593321151" target="_blank" rel="noopener noreferrer" className="bg-brand-black text-white px-12 py-6 font-black text-xl uppercase tracking-widest hover:scale-105 transition-transform">
              WhatsApp Us Now
            </a>
            <Link to="/services/business-signage" className="bg-white text-brand-cyan px-12 py-6 font-black text-xl uppercase tracking-widest hover:scale-105 transition-transform">
              View Signage Options
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ShopSignageBlog;
