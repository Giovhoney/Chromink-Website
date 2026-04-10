import React, { useState } from 'react';
import { Header, Footer } from '../components/Layout';
import ImageLightbox from '../components/ImageLightbox';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Reveal } from '../components/Reveal';
import { ArrowRight, CheckCircle2, MessageCircle, LayoutGrid, Maximize, Calendar, Church, Megaphone, Monitor, Image, ChevronDown, ChevronUp } from 'lucide-react';

const BannerPrinting = () => {
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

  const bannerTypes = [
    { 
      title: "Outdoor Banners", 
      icon: <Maximize className="text-brand-cyan" />, 
      /* IMAGE: Outdoor Banner Sample */
      image: "https://i.pinimg.com/1200x/48/7f/73/487f73a400822bfd8687ae1b0611c3d1.jpg",
      desc: "Durable, weather-resistant vinyl banners perfect for shop fronts and outdoor advertising in Kumasi." 
    },
    { 
      title: "Indoor Banners", 
      icon: <Image className="text-brand-magenta" />, 
      /* IMAGE: Indoor Banner Sample */
      image: "https://i.pinimg.com/1200x/6e/f2/4c/6ef24c13eb1f7f5107731f77ae73ec7c.jpg",
      desc: "High-resolution banners for indoor displays, showrooms, and office branding." 
    },
    { 
      title: "Event Banners", 
      icon: <Calendar className="text-brand-yellow" />, 
      /* IMAGE: Event Banner Sample */
      image: "https://i.pinimg.com/1200x/89/5a/87/895a8753bf176c697e4c573d81c7f219.jpg",
      desc: "Custom banners for weddings, funerals, parties, and corporate events across the Ashanti region." 
    },
    { 
      title: "Church Banners", 
      icon: <Church className="text-brand-cyan" />, 
      /* IMAGE: Church Banner Sample */
      image: "https://i.pinimg.com/736x/22/d1/d4/22d1d4840336aa9af3b5f4fd3862899f.jpg",
      desc: "Professional banners for church programs, conventions, and weekly service announcements." 
    },
    { 
      title: "Promotional Banners", 
      icon: <Megaphone className="text-brand-magenta" />, 
      /* IMAGE: Promotional Banner Sample */
      image: "https://i.pinimg.com/1200x/3c/11/eb/3c11ebb713249440bc6cb5060b72843e.jpg",
      desc: "Eye-catching banners for sales, grand openings, and special business promotions." 
    },
    { 
      title: "Roll-up Banners", 
      icon: <Monitor className="text-brand-yellow" />, 
      /* IMAGE: Roll-up Banner Sample */
      image: "https://i.pinimg.com/736x/6c/94/d4/6c94d40fa2445a7302ccabbed4b88d30.jpg",
      desc: "Portable and easy-to-set-up pull-up banners for conferences and indoor marketing." 
    },

    { 
      title: "Funeral Banners", 
      icon: <Monitor className="funeral-banner" />, 
      /* IMAGE: Roll-up Banner Sample */
      image: "https://i.pinimg.com/736x/18/ee/28/18ee28abc8390dc73a41cc05e2ca66b5.jpg",
      desc: "Make your pass-away love ones fill look good for their funeral banners." 
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
        {/* HERO BACKGROUND IMAGE: Large Format Banner Printing - Authentic Ghanaian Context */}
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://i.pinimg.com/1200x/2c/c1/fc/2cc1fc19911d361b0468bc27e98d2794.jpg" 
            alt="Banner Printing Services in Kumasi" 
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
            BANNER <span className="text-gradient-cyan">PRINTING</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            High-quality custom banners for shops, events, and promotions. Get noticed with ChromInk's premium vinyl and mesh banner solutions in Kumasi.
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link to="/contact" className="btn-primary">GET A BANNER QUOTE</Link>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter uppercase">High-Quality Banners in Kumasi</h2>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-lg leading-relaxed text-gray-600">
              When it comes to **banner printing in Kumasi**, ChromInk is your trusted partner for quality and speed. Banners are one of the most effective ways for businesses in the Ashanti region to grab attention. Whether you need a massive **outdoor banner** for your shop in Adum or a professional **event banner** for a corporate gathering, we deliver sharp, vibrant prints that stand out.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Types of Banners */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-4xl font-black mb-20 tracking-tighter uppercase text-center">Types of Banners We Print</h2>
          </Reveal>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {bannerTypes.map((type, i) => (
              <motion.div key={i} variants={itemVariants} className="bg-white flex flex-col border border-gray-100 shadow-sm hover:shadow-xl transition-all group overflow-hidden">
                <ImageLightbox src={type.image} alt={type.title} label={`Open ${type.title} image preview`}>
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={type.image} 
                    alt={type.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-brand-black/40 transition-colors duration-500"></div>
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white flex items-center justify-center shadow-lg group-hover:bg-brand-black transition-colors duration-500">
                    {React.cloneElement(type.icon as React.ReactElement, { 
                      size: 24,
                      className: "group-hover:text-white transition-colors duration-500" 
                    })}
                  </div>
                </div>
                </ImageLightbox>
                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">{type.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{type.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-brand-black text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          {/* IMAGE: Banner Printing Sample / Why Choose Us Section */}
          <div className="aspect-video bg-gray-900 border border-gray-800 relative overflow-hidden group">
            <img 
              src="/images/about-story.png" 
              alt="High Quality Vinyl Banner Printing in Kumasi Ghana" 
              className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 flex items-center justify-center text-gray-800 font-black text-9xl select-none pointer-events-none opacity-20">
              INK
            </div>
          </div>
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter uppercase leading-none">
              Why Choose <span className="text-brand-cyan text-gradient-cyan">ChromInk?</span>
            </h2>
            <ul className="space-y-8">
              {[
                { title: "Exceptional Durability", desc: "Our banners are made from high-quality vinyl and mesh materials that resist fading and tearing." },
                { title: "Sharp, Vibrant Colors", desc: "We use advanced printing technology to ensure your designs are reproduced with stunning clarity." },
                { title: "Custom Sizes & Finishing", desc: "From small indoor signs to massive outdoor displays, we print to your exact specifications." },
                { title: "Fast Turnaround", desc: "Need it urgently? We offer quick production times to ensure your banners are ready when you need them." }
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
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-black mb-12 uppercase tracking-widest">Explore More Services</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "T-Shirt Printing", link: "/services/t-shirt-printing" },
              { name: "Sticker Printing", link: "/services/sticker-printing" },
              { name: "Poster Printing", link: "/services/poster-printing" },
              { name: "Business Signage", link: "/services/business-signage" }
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
            Get Your Banners <br />Today
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

export default BannerPrinting;
