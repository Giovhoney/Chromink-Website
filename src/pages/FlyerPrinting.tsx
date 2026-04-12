import React, { useState } from 'react';
import { Header, Footer } from '../components/Layout';
import ImageLightbox from '../components/ImageLightbox';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Reveal } from '../components/Reveal';
import { ArrowRight, CheckCircle2, MessageCircle, FileStack, FileText, Layout, Megaphone, Users, Zap, ChevronDown, ChevronUp } from 'lucide-react';

const FlyerPrinting = () => {
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

  const products = [
    { 
      title: "Flyers", 
      icon: <FileStack className="text-brand-cyan" />, 
      /* IMAGE: Flyer Sample - Authentic Ghanaian Context */
      image: "https://i.pinimg.com/1200x/db/15/26/db15267a058f6bd5af49b33dcff6b40d.jpg",
      desc: "Single-sheet marketing tools perfect for mass distribution and quick promotions." 
    },
    { 
      title: "Brochures", 
      icon: <Layout className="text-brand-magenta" />, 
      /* IMAGE: Brochure Sample - Authentic Ghanaian Context */
      image: "https://i.pinimg.com/1200x/a7/a6/e6/a7a6e61acc5d9cc11ea6cdd181a7dc30.jpg",
      desc: "Multi-page or folded documents for detailed business information and catalogs." 
    },
    { 
      title: "Handbills", 
      icon: <FileText className="text-brand-yellow" />, 
      /* IMAGE: Handbill Sample - Authentic Ghanaian Context */
      image: "https://i.pinimg.com/1200x/24/8a/70/248a7086c5e897865efc9bfecea2aadb.jpg",
      desc: "Small, cost-effective handouts for street marketing and event announcements." 
    },
    { 
      title: "Leaflets", 
      icon: <Megaphone className="text-brand-cyan" />, 
      /* IMAGE: Leaflet Sample - Authentic Ghanaian Context */
      image: "https://i.pinimg.com/736x/15/8b/8d/158b8d259e4aca72c3b2e11dd89c5b15.jpg",
      desc: "High-quality leaflets for restaurants, salons, and retail shop promotions." 
    },
    { 
      title: "Event Handouts", 
      icon: <Users className="text-brand-magenta" />, 
      /* IMAGE: Event Handout Sample - Authentic Ghanaian Context */
      image: "https://i.pinimg.com/1200x/93/4c/c6/934cc6795e3b1382420dc0958f1efc0b.jpg",
      desc: "Informative handouts for church programs, school events, and conferences." 
    },
    { 
      title: "Bulk Printing", 
      icon: <Zap className="text-brand-yellow" />, 
      /* IMAGE: Bulk Flyer Printing Sample - Authentic Ghanaian Context */
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5gj6_WOihEzu9863ir1W56n_CDJdyanBxsbAJBuBplxa8MBXhbTc82bo&s=10",
      desc: "Scalable solutions for large-scale marketing campaigns with consistent quality." 
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
        {/* HERO BACKGROUND IMAGE: Professional Flyer and Brochure Printing - Authentic Ghanaian Context */}
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://i.pinimg.com/1200x/a7/a6/e6/a7a6e61acc5d9cc11ea6cdd181a7dc30.jpg" 
            alt="Flyer and Brochure Printing Services in Kumasi" 
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
            FLYER <span className="text-gradient-cyan">PRINTING</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Professional flyer and brochure printing to help your business grow. ChromInk delivers high-quality marketing prints in Kumasi with sharp details.
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link to="/contact" className="btn-primary">GET A PRINTING QUOTE</Link>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter uppercase">Effective Marketing in Kumasi</h2>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-lg leading-relaxed text-gray-600">
              In the vibrant business landscape of Kumasi, **flyer printing** and **brochure printing** remain essential tools for reaching your target audience.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Products Covered */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-4xl font-black mb-20 tracking-tighter uppercase text-center">Our Marketing Products</h2>
          </Reveal>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {products.map((product, i) => (
              <motion.div key={i} variants={itemVariants} className="bg-white flex flex-col border border-gray-100 shadow-sm hover:shadow-xl transition-all group overflow-hidden">
                <ImageLightbox src={product.image} alt={product.title} label={`Open ${product.title} image preview`}>
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-brand-black/40 transition-colors duration-500"></div>
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white flex items-center justify-center shadow-lg group-hover:bg-brand-black transition-colors duration-500">
                    {React.cloneElement(product.icon as React.ReactElement, { 
                      size: 24,
                      className: "group-hover:text-white transition-colors duration-500" 
                    })}
                  </div>
                </div>
                </ImageLightbox>
                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">{product.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{product.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-brand-black text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <Reveal>
              <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter uppercase leading-none">
                Why Choose <span className="text-brand-cyan text-gradient-cyan">ChromInk?</span>
              </h2>
            </Reveal>
            <ul className="space-y-8">
              {[
                { title: "Professional Print Finish", desc: "We use high-grade paper and premium inks to ensure your flyers look and feel professional." },
                { title: "Bulk Quantity Support", desc: "Whether you need 100 or 10,000 copies, we offer scalable printing solutions." },
                { title: "Clear & Sharp Layouts", desc: "Our printing process ensures that every detail, from text to images, is sharp and easy to read." },
                { title: "Fast & Reliable Service", desc: "We prioritize your deadlines, offering quick production times for all your marketing needs." }
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
            {/* IMAGE: Flyer Printing Sample / Why Choose Us Section - Authentic Ghanaian Context */}
            <div className="aspect-square bg-gray-900 border border-gray-800 relative overflow-hidden group">
              <img 
                src="/images/flyer-sample.png" 
                alt="Professional Marketing Flyers and Brochures in Kumasi Ghana" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center text-gray-800 font-black text-[20rem] select-none pointer-events-none opacity-20">
                F
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
              { name: "Poster Printing", link: "/services/poster-printing" },
              { name: "Banner Printing", link: "/services/banner-printing" },
              { name: "T-Shirt Printing", link: "/services/t-shirt-printing" },
              { name: "Document Printing", link: "/services/document-printing" }
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
                Boost Your <br />Marketing Today
              </h2>
              <p className="text-xl text-white/80 mb-12 font-medium">
                Get a professional quote for your flyer and brochure printing in Kumasi today.
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

export default FlyerPrinting;
