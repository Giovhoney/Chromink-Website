import React, { useState } from 'react';
import { Header, Footer } from '../components/Layout';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Reveal } from '../components/Reveal';
import { ArrowRight, CheckCircle2, MessageCircle, Monitor, Maximize, Layout, PenTool, Megaphone, Layers, ChevronDown, ChevronUp } from 'lucide-react';

const LargeFormatPrinting = () => {
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

  const services = [
    { 
      title: "Large Banners", 
      icon: <Maximize className="text-brand-cyan" />, 
      /* IMAGE: Large Banner Sample - Authentic Ghanaian Context */
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
      desc: "Massive vinyl and mesh banners for high-visibility outdoor advertising and shop fronts." 
    },
    { 
      title: "Backdrops", 
      icon: <Layout className="text-brand-magenta" />, 
      /* IMAGE: Backdrop Sample - Authentic Ghanaian Context */
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80",
      desc: "Professional stage and photo backdrops for events, conferences, and media launches." 
    },
    { 
      title: "Exhibition Displays", 
      icon: <Layers className="text-brand-yellow" />, 
      /* IMAGE: Exhibition Display Sample - Authentic Ghanaian Context */
      image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80",
      desc: "Custom-printed displays for trade shows, exhibitions, and corporate presentations." 
    },
    { 
      title: "Window Graphics", 
      icon: <PenTool className="text-brand-cyan" />, 
      /* IMAGE: Window Graphics Sample - Authentic Ghanaian Context */
      image: "https://images.unsplash.com/photo-1605648916319-cf082f7524a1?auto=format&fit=crop&w=800&q=80",
      desc: "Large-scale vinyl graphics and one-way vision films for storefront windows." 
    },
    { 
      title: "Promotional Displays", 
      icon: <Megaphone className="text-brand-magenta" />, 
      /* IMAGE: Promotional Display Sample - Authentic Ghanaian Context */
      image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&w=800&q=80",
      desc: "Eye-catching large-format displays for retail promotions and grand openings." 
    },
    { 
      title: "Wide Format Prints", 
      icon: <Monitor className="text-brand-yellow" />, 
      /* IMAGE: Wide Format Print Sample - Authentic Ghanaian Context */
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
      desc: "High-resolution wide-format printing for architectural drawings and large-scale art." 
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-mesh">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden px-4">
        {/* HERO BACKGROUND IMAGE: High-Impact Large Format Printing - Authentic Ghanaian Context */}
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1920&q=80" 
            alt="Large Format Printing Services in Kumasi" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-black/75 backdrop-blur-[1px]"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase leading-none text-white"
          >
            LARGE <span className="text-gradient-cyan">FORMAT</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Make a massive impact with high-visibility large format printing. ChromInk delivers premium wide-format solutions for businesses and events across Kumasi.
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link to="/contact" className="btn-primary">GET A LARGE FORMAT QUOTE</Link>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter uppercase">High-Visibility Printing</h2>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-lg leading-relaxed text-gray-600">
              When your message needs to be seen from a distance, **large format printing in Kumasi** is the ultimate solution. At ChromInk, we specialize in **wide format printing** that helps you achieve maximum visibility.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services Included */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-4xl font-black mb-20 tracking-tighter uppercase text-center">Our Large Format Solutions</h2>
          </Reveal>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, i) => (
              <motion.div key={i} variants={itemVariants} className="bg-white flex flex-col border border-gray-100 shadow-sm hover:shadow-xl transition-all group overflow-hidden">
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-brand-black/40 transition-colors duration-500"></div>
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white flex items-center justify-center shadow-lg group-hover:bg-brand-black transition-colors duration-500">
                    {React.cloneElement(service.icon as React.ReactElement, { 
                      size: 24,
                      className: "group-hover:text-white transition-colors duration-500" 
                    })}
                  </div>
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-brand-black text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <Reveal>
              <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter uppercase leading-none">
                The Power of <span className="text-brand-cyan text-gradient-cyan">Scale</span>
              </h2>
            </Reveal>
            <ul className="space-y-8">
              {[
                { title: "Maximum Visibility", desc: "Large-scale prints ensure your message is seen by thousands of people every day." },
                { title: "Unmatched Scale", desc: "Go beyond standard sizes with prints that cover entire walls or massive frames." },
                { title: "Strong Brand Presence", desc: "Establish your brand as a leader with professional, high-impact visuals." },
                { title: "Event & Storefront Appeal", desc: "Transform your physical space or event venue with custom-printed graphics." }
              ].map((item, i) => (
                <Reveal key={i} delay={0.2 * i}>
                  <li className="flex gap-4">
                    <CheckCircle2 className="text-brand-cyan shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold text-xl uppercase tracking-tight">{item.title}</h4>
                      <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal delay={0.6} y={0}>
            {/* IMAGE: Large Format Printing Sample / Why Choose Us Section - Authentic Ghanaian Context */}
            <div className="aspect-square bg-gray-900 border border-gray-800 relative overflow-hidden group">
              <img 
                src="/images/large-format-sample.png" 
                alt="Massive Wide Format Billboard Printing in Kumasi Ghana" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center text-gray-800 font-black text-[20rem] select-none pointer-events-none opacity-20">
                W
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <Reveal>
            <h3 className="text-2xl font-black mb-12 uppercase tracking-widest">Explore More Services</h3>
          </Reveal>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            {[
              { name: "Business Signage", link: "/services/business-signage" },
              { name: "Banner Printing", link: "/services/banner-printing" },
              { name: "Poster Printing", link: "/services/poster-printing" },
              { name: "Vehicle Branding", link: "/services/vehicle-branding" }
            ].map((service, i) => (
              <motion.div key={i} variants={itemVariants}>
                <Link to={service.link} className="px-10 py-6 border border-gray-100 font-bold uppercase tracking-widest text-sm hover:border-brand-magenta hover:text-brand-magenta transition-all">
                  {service.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="text-4xl font-black mb-16 tracking-tighter uppercase text-center">Frequently Asked Questions</h2>
          </Reveal>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 0.1} y={20}>
                <div className="bg-white border border-gray-100 shadow-sm overflow-hidden">
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-brand-magenta text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <Reveal>
            <>
              <MessageCircle className="mx-auto mb-8" size={48} />
              <h2 className="text-4xl md:text-7xl font-black mb-8 leading-none tracking-tighter uppercase">
                Ready to Go Big?
              </h2>
              <p className="text-xl text-white/80 mb-12 font-medium">
                Get a professional quote for your large format printing in Kumasi today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://wa.me/233593321151" target="_blank" rel="noopener noreferrer" className="bg-brand-black text-white px-12 py-6 font-black text-xl uppercase tracking-widest hover:scale-105 transition-transform">
                  WhatsApp Us Now
                </a>
                <Link to="/contact" className="bg-white text-brand-black px-12 py-6 font-black text-xl uppercase tracking-widest hover:scale-105 transition-transform">
                  Get a Quote
                </Link>
              </div>
            </>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LargeFormatPrinting;
