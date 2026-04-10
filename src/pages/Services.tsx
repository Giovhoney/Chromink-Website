import React, { useState } from 'react';
import { Header, Footer } from '../components/Layout';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Reveal } from '../components/Reveal';
import { ArrowRight, LayoutGrid, Shirt, Printer, Truck, FileText, Palette, Layers, StickyNote, FileStack, Monitor, ChevronDown, ChevronUp } from 'lucide-react';

const Services = () => {
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
      title: "Picture Frames", 
      icon: <LayoutGrid className="text-brand-cyan" size={32} />,
      /* IMAGE: Banner Printing Service Card - Authentic Ghanaian Context */
      image: "/images/whatsapp/9.jpeg",
      alt: "Durable and colour vibrant wall-frames made you in Kumasi",
      desc: "Print your favorite picture on your wall. Just contact us and you will have picture frame same day to put on your wall", 
      link: "/services/picture-frame" 
    },
    { 
      title: "Banner Printing", 
      icon: <LayoutGrid className="text-brand-cyan" size={32} />,
      /* IMAGE: Banner Printing Service Card - Authentic Ghanaian Context */
      image: "/images/service-banner.png",
      alt: "High-quality vinyl banner printing for events in Kumasi Ghana",
      desc: "High-impact vinyl and mesh banners for events, shops, and outdoor advertising in Kumasi.", 
      link: "/services/banner-printing" 
    },
    { 
      title: "Business Signage", 
      icon: <Printer className="text-brand-yellow" size={32} />,
      /* IMAGE: Business Signage Service Card - Authentic Ghanaian Context */
      image: "/images/service-signage.png",
      alt: "Professional 3D illuminated shop signage and branding in Kumasi",
      desc: "Professional shop front signs, 3D letters, and interior branding to make your business stand out.", 
      link: "/services/business-signage" 
    },
    { 
      title: "Custom T-Shirts", 
      icon: <Shirt className="text-brand-magenta" size={32} />,
      /* IMAGE: Custom T-Shirts Service Card - Authentic Ghanaian Context */
      image: "/images/tshirt-sample.png",
      alt: "Custom t-shirt printing and apparel branding in Kumasi Ghana",
      desc: "Premium screen printing and heat transfer for uniforms, events, and personal branding.", 
      link: "/services/t-shirt-printing" 
    },
    { 
      title: "Stickers & Labels", 
      icon: <StickyNote className="text-brand-cyan" size={32} />,
      /* IMAGE: Stickers & Labels Service Card - Authentic Ghanaian Context */
      image: "/images/sticker-sample.png",
      alt: "Custom product labels and vinyl stickers printed in Kumasi",
      desc: "Custom product labels, vinyl stickers, and packaging decals with precision cutting.", 
      link: "/services/sticker-printing" 
    },
    { 
      title: "Flyers & Brochures", 
      icon: <FileStack className="text-brand-magenta" size={32} />,
      /* IMAGE: Flyers & Brochures Service Card - Authentic Ghanaian Context */
      image: "/images/flyer-sample.png",
      alt: "Professional flyer and brochure printing for businesses in Kumasi",
      desc: "High-quality marketing materials to promote your business, church, or event effectively.", 
      link: "/services/flyer-printing" 
    },
    { 
      title: "Poster Printing", 
      icon: <Layers className="text-brand-yellow" size={32} />,
      /* IMAGE: Poster Printing Service Card - Authentic Ghanaian Context */
      image: "/images/poster-sample.png",
      alt: "Vibrant event and advertising poster printing in Kumasi Ghana",
      desc: "Vibrant posters in various sizes for indoor and outdoor displays across the Ashanti region.", 
      link: "/services/poster-printing" 
    },
    { 
      title: "Large Format", 
      icon: <Monitor className="text-brand-cyan" size={32} />,
      /* IMAGE: Large Format Service Card - Authentic Ghanaian Context */
      image: "/images/large-format-sample.png",
      alt: "Large format printing and wide format banners in Kumasi",
      desc: "Wide-format solutions for billboards, architectural drawings, and massive displays.", 
      link: "/services/large-format-printing" 
    },
    { 
      title: "Vehicle Branding", 
      icon: <Truck className="text-brand-magenta" size={32} />,
      /* IMAGE: Vehicle Branding Service Card - Authentic Ghanaian Context */
      image: "/images/vehicle-branding-sample.png",
      alt: "Professional vehicle branding and car wraps in Kumasi Ghana",
      desc: "Turn your car or delivery van into a mobile billboard with professional vinyl wraps.", 
      link: "/services/vehicle-branding" 
    },
    { 
      title: "Document Printing", 
      icon: <FileText className="text-brand-yellow" size={32} />,
      /* IMAGE: Document Printing Service Card - Authentic Ghanaian Context */
      image: "/images/document-printing-sample.png",
      alt: "Fast document printing and photocopying services in Kumasi",
      desc: "Fast and reliable printing for reports, manuals, and official documents for schools and offices.", 
      link: "/services/document-printing" 
    },
    { 
      title: "Custom Orders", 
      icon: <Palette className="text-brand-cyan" size={32} />,
      /* IMAGE: Custom Orders Service Card - Authentic Ghanaian Context */
      image: "/images/custom-orders-sample.png",
      alt: "Custom printing and special branding orders in Kumasi Ghana",
      desc: "Have a unique project? We offer tailored printing solutions for any specific branding need.", 
      link: "/services/custom-printing" 
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
        {/* HERO BACKGROUND IMAGE: Vibrant Printing Process / CMYK Colors */}
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=1920&q=80" 
            alt="ChromInk Printing and Branding Services in Kumasi" 
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-brand-black/75 backdrop-blur-[1px]"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase leading-none text-white"
          >
            OUR <span className="text-gradient-cyan">SERVICES</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            ChromInk provides a comprehensive range of high-quality print and branding solutions tailored for businesses, events, and individuals across Ghana.
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link to="/contact" className="btn-primary">GET A CUSTOM QUOTE</Link>
          </motion.div>
        </div>
      </section>

      {/* Service Category Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, i) => (
              <motion.div key={i} variants={itemVariants}>
                <Link to={service.link} className="card-hover bg-white flex flex-col group overflow-hidden h-full">
                  <div className="aspect-video overflow-hidden relative">
                    <img 
                      src={service.image} 
                      alt={service.alt} 
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
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{service.desc}</p>
                    <div className="mt-auto pt-6 flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-brand-cyan group-hover:gap-4 transition-all">
                      View Details <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Businesses Choose Our Services */}
      <section className="section-padding bg-brand-black text-white">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-black mb-20 tracking-tighter uppercase text-center">
              Why Kumasi Chooses <span className="text-brand-cyan">ChromInk</span>
            </h2>
          </Reveal>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            {[
              { title: "Unmatched Quality", desc: "We use premium materials and advanced printing technology to ensure your brand looks its best." },
              { title: "Rapid Turnaround", desc: "We prioritize efficiency, delivering most projects within 24-48 hours to meet your tight deadlines." },
              { title: "Branding Support", desc: "Our team doesn't just print; we help you refine your brand identity for maximum impact." },
              { title: "Affordable Excellence", desc: "Get top-tier printing services at competitive rates designed for the Kumasi market." },
              { title: "Full Customization", desc: "Every project is unique. We offer flexible options to match your specific vision and requirements." }
            ].map((item, i) => (
              <motion.div key={i} variants={itemVariants} className="border border-gray-800 p-8 hover:border-brand-cyan transition-colors">
                <h4 className="font-bold text-xl mb-4 uppercase tracking-tight text-brand-cyan">{item.title}</h4>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-black mb-16 tracking-tighter uppercase">Industries We Support</h2>
          </Reveal>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              "Retail Shops", "Restaurants", "Schools", "Churches", 
              "Corporate Events", "Weddings", "Funerals", "Organizations", "Startups"
            ].map((industry, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="px-10 py-6 border border-gray-100 font-bold uppercase tracking-widest text-sm hover:border-brand-magenta hover:text-brand-magenta transition-all cursor-default"
              >
                {industry}
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
              <h2 className="text-4xl md:text-7xl font-black mb-8 leading-none tracking-tighter uppercase">
                Ready to Elevate <br />Your Brand?
              </h2>
              <p className="text-xl text-white/80 mb-12 font-medium">
                Get a professional quote for any of our printing and branding services today.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="https://wa.me/233593321151" target="_blank" rel="noopener noreferrer" className="bg-brand-black text-white px-12 py-6 font-black text-xl uppercase tracking-widest hover:scale-105 transition-transform">
                  WhatsApp for Quote
                </a>
                <Link to="/contact" className="bg-white text-brand-black px-12 py-6 font-black text-xl uppercase tracking-widest hover:scale-105 transition-transform">
                  Request a Call
                </Link>
              </div>
            </>
          </Reveal>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/5 font-black text-[30rem] select-none pointer-events-none uppercase">
          Hub
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
