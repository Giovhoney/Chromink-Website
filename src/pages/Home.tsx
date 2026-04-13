import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Header, Footer } from '../components/Layout';
import { Reveal } from '../components/Reveal';
import OptimizedImage from '../components/OptimizedImage';
import { CheckCircle2, ArrowRight, Printer, Shirt, LayoutGrid, Truck, FileText, Palette } from 'lucide-react';

const Home = () => {
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

  const services = [
    { 
      title: "Picture Frames", 
      icon: <LayoutGrid className="text-brand-cyan" size={32} />,
      /* IMAGE: Picture Frames Service Card */
      image: "/images/num3.jpeg",
      alt: "Durable and vibrant wall-frames made in Kumasi",
      desc: "Transform your favorite memories into stunning wall decor with our premium framing.",
      link: "/services/picture-frame"
    },
    { 
      title: "Banner Printing", 
      icon: <LayoutGrid className="text-brand-cyan" size={32} />,
      /* IMAGE: Banner Printing Service Card */
      image: "/images/service-banner.png",
      alt: "High-quality vinyl banner printing for events in Kumasi Ghana",
      desc: "High-impact vinyl and mesh banners for events and shop fronts in Kumasi.",
      link: "/services/banner-printing"
    },
    { 
      title: "Custom T-Shirts", 
      icon: <Shirt className="text-brand-magenta" size={32} />,
      /* IMAGE: Custom T-Shirts Service Card - Authentic Ghanaian Context */
      image: "https://i.pinimg.com/1200x/06/ba/14/06ba147cf936a8a93ddc695d6e9d3b77.jpg",
      alt: "Ghanaian professionals wearing branded t-shirts in a modern Kumasi office",
      desc: "Premium DTF printing for uniforms, events, and personal branding.",
      link: "/services/t-shirt-printing"
    },
    { 
      title: "Business Signage", 
      icon: <Printer className="text-brand-yellow" size={32} />,
      /* IMAGE: Business Signage Service Card */
      image: "https://i.pinimg.com/1200x/8f/11/ab/8f11aba1903d1bb720709ae6a097bf5f.jpg",
      alt: "Professional 3D illuminated shop signboard in Kumasi, Ghana",
      desc: "Professional shop front signs and interior branding to make you stand out.",
      link: "/services/business-signage"
    },
    { 
      title: "Vehicle Branding", 
      icon: <Truck className="text-brand-cyan" size={32} />,
      /* IMAGE: Vehicle Branding Service Card */
      image: "/images/vehicle-branding-sample.png",
      alt: "Branded delivery van for a Ghanaian logistics company in Kumasi",
      desc: "Turn your car or delivery van into a 24/7 moving billboard.",
      link: "/services/vehicle-branding"
    },
    { 
      title: "Document Printing", 
      icon: <FileText className="text-brand-magenta" size={32} />,
      /* IMAGE: Document Printing Service Card */
      image: "https://abiprint.ee/wp-content/uploads/2018/10/document_print_edit3.jpg",
      alt: "Neatly bound professional reports and documents in a Ghanaian office",
      desc: "Fast and reliable office printing, photocopying, and binding services.",
      link: "/services/document-printing"
    },
    { 
      title: "Custom Orders", 
      icon: <Palette className="text-brand-yellow" size={32} />,
      /* IMAGE: Custom Orders Service Card */
      image: "https://i.pinimg.com/1200x/e6/b0/c4/e6b0c4c4fea271ce073886a7d2d12be4.jpg",
      alt: "Collection of custom-printed promotional items for a Ghanaian brand",
      desc: "Tailored printing solutions for your most unique branding requests.",
      link: "/services/custom-printing"
    }
  ];

  return (
    <div className="min-h-screen bg-mesh">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden px-4">
        {/* HERO BACKGROUND IMAGE: Professional Large Format Printer in Kumasi Studio */}
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <OptimizedImage 
            src="/images/about-story.png" 
            alt="Professional Large Format Printer in Kumasi Studio" 
            className="w-full h-full object-cover"
            priority
          />
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-brand-black/70 backdrop-blur-[2px]"></div>
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-2 bg-brand-cyan/20 text-brand-cyan px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-8 animate-fade-in border border-brand-cyan/30"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
              </span>
              #1 Printing Service in Kumasi
            </motion.div>
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter text-white"
            >
              PROFESSIONAL <br />
              <span className="text-gradient-cyan">PRINTING SERVICES</span> <br />
              IN KUMASI
            </motion.h1>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed"
            >
              ChromInk helps businesses, churches, and individuals across Ghana with high-quality professional printing and premium branding solutions that command attention.
            </motion.p>
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Link to="/contact" className="btn-primary flex items-center justify-center gap-2">
                GET A FREE QUOTE <ArrowRight size={20} />
              </Link>
              <Link to="/services" className="btn-secondary border-white text-white hover:bg-white hover:text-brand-black">
                VIEW ALL SERVICES
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="mt-16 flex flex-wrap gap-8 text-sm font-bold uppercase tracking-widest text-gray-400"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-brand-cyan" size={20} /> Fast Turnaround
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-brand-magenta" size={20} /> Premium Quality
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-brand-yellow" size={20} /> Reliable Service
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Abstract Design Elements */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-full hidden lg:block opacity-10 pointer-events-none">
          <div className="w-full h-full border-[40px] border-brand-cyan rounded-full translate-x-1/2"></div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase">
                  Our Printing & <br />
                  <span className="text-brand-magenta">Branding Hub</span>
                </h2>
                <p className="text-lg text-gray-600">
                  From massive outdoor banners to custom apparel, we provide a full suite of services designed to elevate your brand in the Ashanti region.
                </p>
              </div>
              <Link to="/services" className="group flex items-center gap-2 font-bold uppercase tracking-widest text-sm hover:text-brand-cyan transition-colors">
                Explore All Services <ArrowRight className="group-hover:translate-x-2 transition-transform" size={18} />
              </Link>
            </div>
          </Reveal>

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
                    <OptimizedImage 
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
                      Learn More <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-brand-black text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <Reveal>
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-12 tracking-tighter uppercase leading-none">
                Why Kumasi <br />
                <span className="text-brand-cyan text-gradient-cyan">Trusts ChromInk</span>
              </h2>
              <div className="space-y-10">
                {[
                  { title: "Unmatched Print Quality", desc: "We use state-of-the-art machinery to ensure every print is sharp, vibrant, and professional." },
                  { title: "Rapid Turnaround", desc: "We understand deadlines. Get your banners, stickers, and shirts printed on time, every time." },
                  { title: "Local Expertise", desc: "Based in the heart of Kumasi, we understand the local market and what it takes to stand out." },
                  { title: "Affordable Excellence", desc: "Premium quality doesn't have to be expensive. We offer competitive rates for all businesses." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="text-4xl font-black text-gray-800">0{i+1}</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">{item.title}</h4>
                      <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.5} y={0}>
            <div className="relative">
              {/* IMAGE: Quality Print Inspection / Why Choose Us Section - Authentic Ghanaian Context */}
              <div className="aspect-square bg-gray-900 border border-gray-800 relative overflow-hidden group">
                <OptimizedImage 
                  src="https://i.pinimg.com/1200x/14/6d/7d/146d7d182747cd23186f73c9c02ed4b9.jpg" 
                  alt="Quality Print Inspection at ChromInk Kumasi" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center text-gray-800 font-black text-[20rem] select-none pointer-events-none opacity-20">
                  C
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black to-transparent opacity-60"></div>
              </div>
              {/* Floating Badge */}
              <motion.div 
                initial={{ scale: 0, rotate: -10 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.8 }}
                className="absolute -bottom-10 -left-10 bg-brand-magenta p-10 hidden md:block shadow-2xl"
              >
                <div className="text-4xl font-black leading-none mb-2">100%</div>
                <div className="text-xs font-bold uppercase tracking-widest">Quality <br />Guaranteed</div>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-black mb-16 tracking-tighter uppercase">Industries We Serve</h2>
          </Reveal>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {["Retail Shops", "Churches", "Schools", "Event Planners", "Startups", "Corporate Fleets", "Restaurants"].map((industry, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="px-10 py-6 border border-gray-100 font-bold uppercase tracking-widest text-sm hover:border-brand-cyan hover:text-brand-cyan transition-all cursor-default"
              >
                {industry}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-brand-cyan relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Reveal>
            <>
              <h2 className="text-4xl md:text-7xl font-black text-brand-black mb-8 leading-none tracking-tighter uppercase">
                Ready to Elevate <br />Your Brand?
              </h2>
              <p className="text-xl text-brand-black/70 mb-12 font-medium">
                Get a professional quote for your printing and branding needs in Kumasi today.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact" className="bg-brand-black text-white px-12 py-6 font-black text-xl uppercase tracking-widest hover:scale-105 transition-transform">
                  Request a Quote
                </Link>
                <a href="https://wa.me/233593321151" target="_blank" rel="noopener noreferrer" className="bg-white text-brand-black px-12 py-6 font-black text-xl uppercase tracking-widest hover:scale-105 transition-transform">
                  WhatsApp Us
                </a>
              </div>
            </>
          </Reveal>
        </div>
        {/* Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-brand-black/5 font-black text-[30rem] select-none pointer-events-none">
          INK
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
