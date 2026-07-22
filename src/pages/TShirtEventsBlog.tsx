import React from 'react';
import { Header, Footer } from '../components/Layout';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, ChevronRight, MessageCircle } from 'lucide-react';

const TShirtEventsBlog = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <article className="relative">
        {/* Hero Header */}
        <div className="bg-brand-black text-white section-padding pt-32 pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-brand-cyan mb-8">
              <span className="bg-brand-cyan text-white px-3 py-1">Marketing</span>
              <span className="flex items-center gap-1"><Calendar size={14} /> March 15, 2026</span>
              <span className="flex items-center gap-1"><Clock size={14} /> 8 min read</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter uppercase">
              How Custom <br />
              <span className="text-brand-cyan">T-Shirts Help Promote</span> <br />
              Your Event
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed">
              Maximize event success with branded apparel: building unity, creating buzz, and extending brand reach long after the event ends.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-20 py-20">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="prose prose-xl prose-slate max-w-none">
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Whether you're organizing a church conference, a corporate gathering, a school fundraiser, or a community festival in Kumasi, branded t-shirts are far more than just merchandise—they're powerful marketing tools that amplify your event's impact. Custom apparel creates unity among attendees, extends your brand visibility far beyond the event venue, and delivers a memorable takeaway that keeps your brand top-of-mind months after the event concludes.
              </p>

              {/* Table of Contents */}
              <div className="bg-gray-50 p-10 border-l-4 border-brand-cyan mb-16">
                <h2 className="text-xl font-black mb-6 uppercase tracking-widest">In this guide:</h2>
                <ul className="space-y-4 font-bold text-gray-800">
                  <li><a href="#unity" className="flex items-center gap-2 hover:text-brand-cyan transition-colors"><ChevronRight size={18} className="text-brand-cyan" /> Building Unity & Belonging</a></li>
                  <li><a href="#marketing" className="flex items-center gap-2 hover:text-brand-cyan transition-colors"><ChevronRight size={18} className="text-brand-cyan" /> Marketing & Brand Visibility</a></li>
                  <li><a href="#design-strategy" className="flex items-center gap-2 hover:text-brand-cyan transition-colors"><ChevronRight size={18} className="text-brand-cyan" /> Design & Printing Methods</a></li>
                  <li><a href="#roi" className="flex items-center gap-2 hover:text-brand-cyan transition-colors"><ChevronRight size={18} className="text-brand-cyan" /> Measuring Success & ROI</a></li>
                </ul>
              </div>

              <section id="unity" className="mb-20">
                <h2 className="text-3xl md:text-4xl font-black mb-8 uppercase tracking-tight">1. Building Unity & Belonging</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  The moment attendees put on event t-shirts, the psychology of belonging kicks in. They become visibly part of a community, a movement, or a team.
                </p>
                <div className="space-y-10">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight text-brand-magenta">Instant Community Identity</h3>
                    <p className="text-gray-600 leading-relaxed">For church events, retreats, or marathon fundraisers in Kumasi, matching branded t-shirts instantly create visual unity. Attendees feel they're part of something bigger than themselves—this emotional connection is invaluable for event success and attendee satisfaction.</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight text-brand-magenta">Memento Value</h3>
                    <p className="text-gray-600 leading-relaxed">Unlike conference materials that get discarded, quality t-shirts become keepsakes. Years later, someone wearing your event t-shirt is a walking reminder of the experience—and your brand's role in creating it.</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight text-brand-magenta">Icebreaker & Conversation Starter</h3>
                    <p className="text-gray-600 leading-relaxed">Branded t-shirts naturally spark conversations. People notice and ask about interesting designs. This creates organic networking opportunities and extends engagement beyond formal event programming.</p>
                  </div>
                </div>
              </section>

              <section id="marketing" className="mb-20">
                <h2 className="text-3xl md:text-4xl font-black mb-8 uppercase tracking-tight">2. Marketing & Brand Visibility</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Custom t-shirts transform your attendees into brand ambassadors. They don't just wear your shirt at the event—they wear it home, to the gym, around town, and to future events.
                </p>
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="p-8 bg-gray-50 border border-gray-100">
                    <h4 className="font-black text-xl mb-4 uppercase tracking-tight text-brand-cyan">Extended Reach</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">A single t-shirt creates hundreds of brand impressions over months. In Kumasi's neighborhoods, markets, and educational institutions, your event branding becomes visible proof of community legitimacy.</p>
                  </div>
                  <div className="p-8 bg-gray-50 border border-gray-100">
                    <h4 className="font-black text-xl mb-4 uppercase tracking-tight text-brand-cyan">Social Media Amplification</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Attendees love sharing photos wearing event t-shirts on social media. Encourage this with a branded hashtag, and your event generates authentic user-generated content that reaches potential attendees for next year's event.</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight text-brand-magenta">Word-of-Mouth Amplification</h3>
                  <p className="text-gray-600 leading-relaxed">When people see your event t-shirt in the wild, they ask questions: "What event is that from?" "How do I join?" Quality branded apparel subtly markets your event to demographics you may not have directly reached, making it one of the most cost-effective extensions of your event marketing budget.</p>
                </div>
              </section>

              <section id="design-strategy" className="mb-20">
                <h2 className="text-3xl md:text-4xl font-black mb-8 uppercase tracking-tight">3. Design & Printing Methods</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Choosing the right design and printing method determines durability, aesthetics, and cost-effectiveness of your event apparel.
                </p>
                <div className="space-y-10">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight text-brand-magenta">DTF Printing (Direct-to-File)</h3>
                    <p className="text-gray-600 leading-relaxed">At ChromInk, we use advanced DTF printing technology for vibrant, detailed designs on custom t-shirts. This method excels with multi-color designs, photographs, and complex artwork—perfect for event visuals that need to stand out.</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight text-brand-magenta">Screen Printing for Bulk Orders</h3>
                    <p className="text-gray-600 leading-relaxed">For large events requiring hundreds of shirts, screen printing offers economy of scale. Best for simple 1-3 color designs, it produces vibrant, long-lasting prints that withstand repeated washing.</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight text-brand-magenta">Design Considerations</h3>
                    <p className="text-gray-600 leading-relaxed">Effective event t-shirt designs include event name, date, and inspiring tagline or imagery. Keep designs front-facing for maximum visibility when t-shirts are worn around town. Add your organization's logo and website/WhatsApp for lasting visibility.</p>
                  </div>
                </div>
              </section>

              <section id="roi" className="mb-20">
                <h2 className="text-3xl md:text-4xl font-black mb-8 uppercase tracking-tight">4. Measuring Success & ROI</h2>
                <div className="bg-brand-cyan/10 p-10 border border-brand-cyan mb-12">
                  <h3 className="text-2xl font-bold mb-6 uppercase tracking-tight">Quantifying Event T-Shirt Impact</h3>
                  <ul className="space-y-4 text-gray-700 font-medium">
                    <li className="flex gap-3"><span className="text-brand-cyan font-black">📊</span> <strong>Direct metric:</strong> Track social media mentions using your event hashtag—t-shirt photos are free advertising.</li>
                    <li className="flex gap-3"><span className="text-brand-cyan font-black">📊</span> <strong>Repeat attendance:</strong> Monitor if next year's event sees higher registration, partially driven by previous attendees wanting the new t-shirt.</li>
                    <li className="flex gap-3"><span className="text-brand-cyan font-black">📊</span> <strong>Brand awareness surveys:</strong> Post-event surveys asking "How did you hear about this event?" Often t-shirt wearers report word-of-mouth from seeing other attendees in the previous year's apparel.</li>
                    <li className="flex gap-3"><span className="text-brand-cyan font-black">📊</span> <strong>Website traffic:</strong> Include a unique URL or QR code on the t-shirt design to track digital engagement driven by offline merchandise.</li>
                  </ul>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  The reality is that branded t-shirts provide multi-month, passive marketing that few other event investments can match. A shirt costing 25-40 GHS per unit delivers hundreds of brand exposures. For churches, schools, corporate teams, and community organizations across Kumasi, custom event t-shirts are non-negotiable for event success and brand-building.
                </p>
              </section>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-12">
              {/* CTA Card */}
              <div className="bg-brand-magenta p-10 text-white relative overflow-hidden">
                <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter leading-none relative z-10">Design Your <br />Event Shirts</h3>
                <p className="mb-8 font-medium relative z-10">Premium DTF and screen-printed apparel. Fast delivery, bulk discounts available.</p>
                <Link to="/contact" className="btn-primary w-full relative z-10 bg-white text-brand-black hover:bg-gray-100">REQUEST QUOTE</Link>
                <div className="absolute -right-10 -bottom-10 text-white/5 font-black text-9xl select-none">
                  EVENT
                </div>
              </div>

              {/* Related Services */}
              <div>
                <h3 className="text-xl font-black mb-8 uppercase tracking-widest border-b-4 border-brand-magenta inline-block">Related Services</h3>
                <ul className="space-y-4">
                  {[
                    { name: "T-Shirt Printing", link: "/services/t-shirt-printing" },
                    { name: "Custom Apparel", link: "/services/custom-printing" },
                    { name: "Banner Printing", link: "/services/banner-printing" }
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
          <h2 className="text-4xl font-black mb-16 tracking-tighter uppercase text-center">Event T-Shirt FAQ</h2>
          <div className="space-y-6">
            {[
              { q: "How long does it take to print event t-shirts?", a: "Standard orders take 5-7 working days. We offer rush printing (2-3 days) at a small premium. Large bulk orders may need additional lead time." },
              { q: "What's the minimum order quantity?", a: "We print from as few as 10 units for small events. Larger orders (50+) receive bulk discounts. Get a quote for your exact quantity." },
              { q: "Can I choose different colors for different groups?", a: "Absolutely. We can print multiple colors and sizes in one order. Perfect for VIP attendees vs. regular attendees or different team groups." },
              { q: "What if I don't have a design yet?", a: "Our design team can create custom event designs for you. We work closely with you to capture your event's essence and brand identity." }
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
            Make Your Event <br />Unforgettable
          </h2>
          <p className="text-xl text-brand-black/70 mb-12 font-medium">
            Custom branded t-shirts that attendees will cherish and wear for years.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="https://wa.me/233593321151" target="_blank" rel="noopener noreferrer" className="bg-brand-black text-white px-12 py-6 font-black text-xl uppercase tracking-widest hover:scale-105 transition-transform">
              WhatsApp Us Now
            </a>
            <Link to="/services/t-shirt-printing" className="bg-white text-brand-cyan px-12 py-6 font-black text-xl uppercase tracking-widest hover:scale-105 transition-transform">
              View T-Shirt Options
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TShirtEventsBlog;
