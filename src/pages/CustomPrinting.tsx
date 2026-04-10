import React, { useState } from 'react';
import { Header, Footer } from '../components/Layout';
import ImageLightbox from '../components/ImageLightbox';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MessageCircle, Palette, Gift, Package, Briefcase, Sparkles, Zap, ChevronDown, ChevronUp } from 'lucide-react';

const CustomPrinting = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    { 
      q: "How much does this service cost in Kumasi?", 
      a: "Pricing depends on size, quantity, material, and finishing. Contact ChromInk for a custom quote based on your exact request." 
    },
    { 
      q: "How long does it take to complete an order?", 
      a: "Turnaround time depends on the type of job and quantity needed. Many standard jobs can be completed quickly, and urgent requests can also be discussed." 
    },
    { 
      q: "Can I bring my own design?", 
      a: "Yes, customers can provide their own print-ready design files. If needed, ChromInk can also help refine the design before printing." 
    },
    { 
      q: "Do you help with design too?", 
      a: "Yes, ChromInk can support customers with design assistance to make sure the final print looks professional and clear." 
    },
    { 
      q: "Can I place bulk orders?", 
      a: "Yes, bulk orders are welcome for businesses, events, schools, churches, and organizations." 
    },
    { 
      q: "Do you serve only Kumasi?", 
      a: "ChromInk is based in Kumasi, Ghana, but can also support customers from nearby areas depending on the order." 
    }
  ];

  const customExamples = [
    { 
      title: "Event Branding", 
      icon: <Sparkles className="text-brand-cyan" />, 
      /* IMAGE: Event Branding Sample */
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80",
      desc: "Complete branding solutions for weddings, funerals, and corporate events, including programs and souvenirs." 
    },
    { 
      title: "Promotional Items", 
      icon: <Gift className="text-brand-magenta" />, 
      /* IMAGE: Promotional Items Sample */
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
      desc: "Custom-printed pens, mugs, keychains, and other gift items tailored to your brand or personal needs." 
    },
    { 
      title: "Mixed Packages", 
      icon: <Package className="text-brand-yellow" />, 
      /* IMAGE: Mixed Print Packages Sample */
      image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80",
      desc: "Bundled services combining flyers, stickers, and banners for a cohesive marketing campaign." 
    },
    { 
      title: "Business Materials", 
      icon: <Briefcase className="text-brand-cyan" />, 
      /* IMAGE: Business Materials Sample */
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
      desc: "Unique office stationery, custom folders, and specialized business forms designed for your workflow." 
    },
    { 
      title: "One-off Requests", 
      icon: <Palette className="text-brand-magenta" />, 
      /* IMAGE: One-off Custom Print Sample */
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?auto=format&fit=crop&w=800&q=80",
      desc: "Have a unique idea? We handle specialized, non-standard print jobs with creative precision." 
    },
    { 
      title: "Special Orders", 
      icon: <Zap className="text-brand-yellow" />, 
      /* IMAGE: Special Print Orders Sample */
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
      desc: "Tailored printing solutions for any specific branding need that doesn't fit standard categories." 
    }
  ];

  return (
    <div className="min-h-screen bg-mesh">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden px-4">
        {/* HERO BACKGROUND IMAGE: Creative Custom Printing Solutions */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1920&q=80" 
            alt="Custom Printing and Special Orders in Kumasi" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-black/75 backdrop-blur-[1px]"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase leading-none text-white">
            CUSTOM <span className="text-gradient-cyan">PRINTING</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Beyond standard services, ChromInk provides tailored printing solutions and personalized branding for your most unique projects in Kumasi.
          </p>
          <Link to="/contact" className="btn-primary">DISCUSS YOUR PROJECT</Link>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter uppercase">Tailored Solutions</h2>
          <p className="text-lg leading-relaxed text-gray-600">
            At ChromInk, we know that some projects don't fit into a standard category. That's why we offer specialized **custom printing in Kumasi** to handle your most unique branding requests.
          </p>
        </div>
      </section>

      {/* Examples of Custom Work */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-20 tracking-tighter uppercase text-center">Examples of Our Custom Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customExamples.map((example, i) => (
              <div key={i} className="bg-white flex flex-col border border-gray-100 shadow-sm hover:shadow-xl transition-all group overflow-hidden">
                <ImageLightbox src={example.image} alt={example.title} label={`Open ${example.title} image preview`}>
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={example.image} 
                    alt={example.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-brand-black/40 transition-colors duration-500"></div>
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white flex items-center justify-center shadow-lg group-hover:bg-brand-black transition-colors duration-500">
                    {React.cloneElement(example.icon as React.ReactElement, { 
                      size: 24,
                      className: "group-hover:text-white transition-colors duration-500" 
                    })}
                  </div>
                </div>
                </ImageLightbox>
                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">{example.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{example.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-brand-black text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter uppercase leading-none">
              Why Choose <span className="text-brand-cyan text-gradient-cyan">ChromInk?</span>
            </h2>
            <ul className="space-y-8">
              {[
                { title: "Flexible & Adaptive Service", desc: "We don't just follow templates. We adapt our processes to fit the specific requirements of your custom project." },
                { title: "Dedicated Custom Support", desc: "Our team works closely with you from concept to completion, providing expert advice on materials." },
                { title: "Creative Execution", desc: "We love a challenge. Our creative team helps refine your ideas to ensure the final print is beautiful." },
                { title: "Local Reliability in Kumasi", desc: "Get the personalized attention of a local partner with the professional output of a top-tier agency." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <CheckCircle2 className="text-brand-cyan shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-xl uppercase tracking-tight">{item.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* IMAGE: Custom Printing Sample / Why Choose Us Section */}
          <div className="aspect-square bg-gray-900 border border-gray-800 relative overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80" 
              alt="Custom Printing and Special Branding Orders in Kumasi Ghana" 
              className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 flex items-center justify-center text-gray-800 font-black text-[20rem] select-none pointer-events-none opacity-20">
              C
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-black mb-12 uppercase tracking-widest">Explore Our Core Services</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "Banner Printing", link: "/services/banner-printing" },
              { name: "Business Signage", link: "/services/business-signage" },
              { name: "T-Shirt Printing", link: "/services/t-shirt-printing" },
              { name: "Sticker Printing", link: "/services/sticker-printing" },
              { name: "Flyer Printing", link: "/services/flyer-printing" },
              { name: "Poster Printing", link: "/services/poster-printing" },
              { name: "Large Format", link: "/services/large-format-printing" },
              { name: "Vehicle Branding", link: "/services/vehicle-branding" },
              { name: "Document Printing", link: "/services/document-printing" }
            ].map((service, i) => (
              <Link key={i} to={service.link} className="px-10 py-6 border border-gray-100 font-bold uppercase tracking-widest text-sm hover:border-brand-cyan hover:text-brand-cyan transition-all">
                {service.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black mb-16 tracking-tighter uppercase text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-100 shadow-sm overflow-hidden">
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h4 className="font-bold text-lg uppercase tracking-tight">{faq.q}</h4>
                  {openFaq === i ? <ChevronUp size={20} className="text-brand-cyan" /> : <ChevronDown size={20} className="text-gray-400" />}
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
                    {faq.a}
                  </div>
                </div>
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
            Bring Your Ideas <br />to Life
          </h2>
          <p className="text-xl text-white/80 mb-12 font-medium">
            Let's discuss how ChromInk can bring your custom printing ideas to life in Kumasi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

export default CustomPrinting;
