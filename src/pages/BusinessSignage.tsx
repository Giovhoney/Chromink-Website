import React, { useState } from 'react';
import { Header, Footer } from '../components/Layout';
import ImageLightbox from '../components/ImageLightbox';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Reveal } from '../components/Reveal';
import { ArrowRight, CheckCircle2, MessageCircle, Printer, Store, Layout, PenTool, Map, Megaphone, ChevronDown, ChevronUp } from 'lucide-react';

const BusinessSignage = () => {
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

  const signageServices = [
    { 
      title: "Shop Signboards", 
      icon: <Store className="text-brand-cyan" />, 
      /* IMAGE: Shop Signboard Sample - Authentic Ghanaian Context */
      image: "https://printplanetghana.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-11-at-7.40.11-PM-1-edited.jpeg",
      desc: "Custom-made signboards for your shop front, including 3D letters, lightboxes, and metal frames." 
    },
    { 
      title: "Storefront Branding", 
      icon: <Layout className="text-brand-magenta" />, 
      /* IMAGE: Storefront Branding Sample - Authentic Ghanaian Context */
      image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepo2aQ6vudkf3AX_4k2pjz31DZe_jw0P8M8RcTBoEoZJnaJzxqNv04ssCZAgxAkN5ZSB3HguO1Ly6Y_AlK0LbOgKkOcD1vMX2HN6Ug335M_OEFxEkBbTAXQ6kWb2kyhkFQNLyLfj4VVt0M=w243-h244-n-k-no-nu",
      desc: "Complete branding for your store entrance to attract customers and build brand recognition." 
    },
    { 
      title: "Window Graphics", 
      icon: <PenTool className="text-brand-yellow" />, 
      /* IMAGE: Window Graphics Sample - Authentic Ghanaian Context */
      image: "/images/whatsapp/0001.jpg",
      desc: "High-quality vinyl decals and one-way vision graphics for shop windows and glass doors." 
    },
    { 
      title: "Wall Branding", 
      icon: <Map className="text-brand-cyan" />, 
      /* IMAGE: Wall Branding Sample - Authentic Ghanaian Context */
      image: "https://i.pinimg.com/736x/f9/44/8e/f9448ebce9b13d028142d0d55c483e7c.jpg",
      desc: "Interior and exterior wall branding using high-quality vinyl or direct-to-wall printing." 
    },
    { 
      title: "Outdoor Signs", 
      icon: <Megaphone className="text-brand-magenta" />, 
      /* IMAGE: Outdoor Sign Sample - Authentic Ghanaian Context */
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRccvKGNIQxVQvw2JrGB94BXccg4DnHlMrGkBYBV6d01w__XqruisAaQZc&s=10",
      desc: "Durable directional signs, pylon signs, and roadside advertisements for maximum visibility." 
    },
    { 
      title: "Promotional Signage", 
      icon: <Printer className="text-brand-yellow" />, 
      /* IMAGE: Promotional Signage Sample - Authentic Ghanaian Context */
      image: "https://i.pinimg.com/736x/aa/a2/40/aaa240b44ca27bf0e73179d5cc51234c.jpg",
      desc: "Temporary signs for sales, special offers, and seasonal promotions to drive foot traffic." 
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
        {/* HERO BACKGROUND IMAGE: Professional Business Signage in Kumasi - Authentic Ghanaian Context */}
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://i.pinimg.com/736x/f9/44/8e/f9448ebce9b13d028142d0d55c483e7c.jpg" 
            alt="Business Signage and Shop Branding in Kumasi" 
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
            BUSINESS <span className="text-gradient-cyan">SIGNAGE</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Stand out from the crowd with professional shop branding and high-quality signboards. ChromInk helps Kumasi businesses attract more customers.
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link to="/contact" className="btn-primary">GET A SIGNAGE QUOTE</Link>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter uppercase">Professional Branding in Kumasi</h2>
          <p className="text-lg leading-relaxed text-gray-600">
            In a busy city like Kumasi, your **business signage** is often the first thing a potential customer sees. High-quality **shop branding** not only increases your visibility but also builds trust and authority.
          </p>
        </div>
      </section>

      {/* Services Included */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-20 tracking-tighter uppercase text-center">Our Signage Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {signageServices.map((service, i) => (
              <div key={i} className="bg-white flex flex-col border border-gray-100 shadow-sm hover:shadow-xl transition-all group overflow-hidden">
                <ImageLightbox src={service.image} alt={service.title} label={`Open ${service.title} image preview`}>
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
                </ImageLightbox>
                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.desc}</p>
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
                { title: "Premium Quality Materials", desc: "We use weather-resistant materials designed to last in the Ghanaian climate." },
                { title: "Custom Branding Solutions", desc: "Every business is unique. We create custom designs that perfectly reflect your brand identity." },
                { title: "Professional & Polished Look", desc: "Our team ensures every sign is finished to the highest standard, giving you a trustworthy appearance." },
                { title: "Local Expertise in Kumasi", desc: "We understand the local market and provide fast, reliable service right here in Kumasi." }
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
          {/* IMAGE: Business Signage Sample / Why Choose Us Section */}
          <div className="aspect-square bg-gray-900 border border-gray-800 relative overflow-hidden group">
            <img 
              src="https://i.pinimg.com/1200x/d0/bd/f3/d0bdf36c9ad4271c40c7b0194caf514c.jpg" 
              alt="Professional 3D Illuminated Business Signage in Kumasi Ghana" 
              className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 flex items-center justify-center text-gray-800 font-black text-[20rem] select-none pointer-events-none opacity-20">
              B
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-black mb-12 uppercase tracking-widest">Explore More Branding</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "Banner Printing", link: "/services/banner-printing" },
              { name: "Vehicle Branding", link: "/services/vehicle-branding" },
              { name: "Large Format", link: "/services/large-format-printing" },
              { name: "Sticker Printing", link: "/services/sticker-printing" }
            ].map((service, i) => (
              <Link key={i} to={service.link} className="px-10 py-6 border border-gray-100 font-bold uppercase tracking-widest text-sm hover:border-brand-yellow hover:text-brand-yellow transition-all">
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
            Brand Your <br />Business Today
          </h2>
          <p className="text-xl text-white/80 mb-12 font-medium">
            Get a professional quote for your shop signage and branding in Kumasi today.
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

export default BusinessSignage;
