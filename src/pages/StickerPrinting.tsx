import React, { useState } from 'react';
import { Header, Footer } from '../components/Layout';
import ImageLightbox from '../components/ImageLightbox';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Reveal } from '../components/Reveal';
import { ArrowRight, CheckCircle2, MessageCircle, StickyNote, Package, ShieldCheck, Zap, Palette, Scissors, ChevronDown, ChevronUp } from 'lucide-react';

const StickerPrinting = () => {
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

  const stickerTypes = [
    { 
      title: "T-Shirt Labels", 
      icon: <Package className="text-brand-cyan" />, 
      /* IMAGE: Product Labels Sample - Authentic Ghanaian Context */
      image: "https://i.pinimg.com/1200x/c0/55/ca/c055ca20a886535024f2cf0672f0aa66.jpg",
      desc: "Custom labels for for your t-shirt brand" 
    },
     { 
      title: "Product Labels", 
      icon: <Package className="text-brand-cyan" />, 
      /* IMAGE: Product Labels Sample - Authentic Ghanaian Context */
      image: "https://i.pinimg.com/736x/9b/7a/28/9b7a287345ad569f54675adca6e0cbdf.jpg",
      desc: "Custom labels for bottles, jars, and packaging to give your products a professional look." 
    },
    { 
      title: "Packaging Labels", 
      icon: <StickyNote className="text-brand-magenta" />, 
      /* IMAGE: Packaging Labels Sample - Authentic Ghanaian Context */
      image: "https://i.pinimg.com/1200x/e9/63/66/e96366e8ba14b42e66cda47a26e52408.jpg",
      desc: "Branded labels for boxes, bags, and shipping containers to enhance the unboxing experience." 
    },
    { 
      title: "Branding Stickers", 
      icon: <Palette className="text-brand-yellow" />, 
      /* IMAGE: Branding Stickers Sample - Authentic Ghanaian Context */
      image: "https://i.pinimg.com/1200x/f7/e6/76/f7e6765d9eda30fd824f02cb80e41c69.jpg",
      desc: "Logo stickers for giveaways, laptops, and general brand promotion across Kumasi." 
    },
    { 
      title: "Waterproof Stickers", 
      icon: <ShieldCheck className="text-brand-cyan" />, 
      /* IMAGE: Waterproof Stickers Sample - Authentic Ghanaian Context */
      image: "https://i.pinimg.com/1200x/16/57/91/165791b61d0024df593bc1772de4e314.jpg",
      desc: "Durable, water-resistant vinyl stickers perfect for refrigerated products and outdoor use." 
    },
    { 
      title: "Die-Cut Stickers", 
      icon: <Scissors className="text-brand-magenta" />, 
      /* IMAGE: Die-Cut Stickers Sample - Authentic Ghanaian Context */
      image: "https://i.pinimg.com/1200x/1f/19/2a/1f192a53f56e6e79d69ed0cce1a7535d.jpg",
      desc: "Custom-shaped stickers cut to the exact outline of your design for a unique finish." 
    },
    { 
      title: "Promotional Stickers", 
      icon: <Zap className="text-brand-yellow" />, 
      /* IMAGE: Promotional Stickers Sample - Authentic Ghanaian Context */
      image: "https://i.pinimg.com/1200x/0d/a8/7f/0da87f26be70a24c161fbe22f87db2b7.jpg",
      desc: "Cost-effective stickers for marketing campaigns, events, and seasonal offers." 
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
        {/* HERO BACKGROUND IMAGE: Custom Sticker Printing and Labels - Authentic Ghanaian Context */}
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://i.pinimg.com/1200x/5f/3a/d5/5f3ad55ae3b84c592f101eacbfa0f303.jpg" 
            alt="Sticker and Label Printing Services in Kumasi" 
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
            STICKER <span className="text-gradient-cyan">PRINTING</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Premium custom stickers and professional product labels for your business branding. ChromInk delivers high-quality sticker printing in Kumasi with precision.
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link to="/contact" className="btn-primary">GET A STICKER QUOTE</Link>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter uppercase">Professional Labels in Kumasi</h2>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-lg leading-relaxed text-gray-600">
              In the competitive market of Kumasi, your product's presentation is everything. High-quality **sticker printing** and **label printing** are essential for building a recognizable brand.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Types of Stickers */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-4xl font-black mb-20 tracking-tighter uppercase text-center">Sticker & Label Options</h2>
          </Reveal>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {stickerTypes.map((type, i) => (
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
          <Reveal y={0}>
            {/* IMAGE: Sticker Printing Sample / Why Choose Us Section - Authentic Ghanaian Context */}
            <div className="aspect-square bg-gray-900 border border-gray-800 relative overflow-hidden group">
              <img 
                src="/images/sticker-sample.png" 
                alt="Custom Product Labels and Vinyl Stickers in Kumasi Ghana" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center text-gray-800 font-black text-[20rem] select-none pointer-events-none opacity-20">
                L
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter uppercase leading-none">
                Why Choose <span className="text-brand-cyan text-gradient-cyan">ChromInk?</span>
              </h2>
            </Reveal>
            <ul className="space-y-8">
              {[
                { title: "Sharp Print Quality", desc: "We use high-resolution printing to ensure your logos and text are crisp and easy to read." },
                { title: "Clean & Precise Finishing", desc: "Our advanced cutting technology ensures every sticker is cut perfectly to your desired shape." },
                { title: "Custom Sizes & Shapes", desc: "From tiny product labels to large branding stickers, we print to your exact specifications." },
                { title: "Branding Support", desc: "Our team helps you choose the right materials and finishes to match your brand's aesthetic." }
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
              { name: "T-Shirt Printing", link: "/services/t-shirt-printing" },
              { name: "Business Signage", link: "/services/business-signage" },
              { name: "Banner Printing", link: "/services/banner-printing" },
              { name: "Flyer Printing", link: "/services/flyer-printing" }
            ].map((service, i) => (
              <motion.div key={i} variants={itemVariants}>
                <Link to={service.link} className="px-10 py-6 border border-gray-100 font-bold uppercase tracking-widest text-sm hover:border-brand-cyan hover:text-brand-cyan transition-all">
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
                Brand Your <br />Products Today
              </h2>
              <p className="text-xl text-white/80 mb-12 font-medium">
                Get a professional quote for your custom stickers and labels in Kumasi today.
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

export default StickerPrinting;
