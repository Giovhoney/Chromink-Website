import React from 'react';
import { Header, Footer } from '../components/Layout';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Reveal } from '../components/Reveal';
import { ArrowRight, Target, Users, ShieldCheck, Zap, HeartHandshake } from 'lucide-react';

const About = () => {
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
        {/* HERO BACKGROUND IMAGE: Modern Printing Studio / Office in Kumasi - Authentic Ghanaian Context */}
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://i.pinimg.com/736x/c7/9d/75/c79d75c78f834a46b38dddfb2a31b2a5.jpg" 
            alt="ChromInk Modern Printing Studio in Kumasi" 
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
            ABOUT <span className="text-gradient-cyan">CHROMINK</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            We are a modern, growing local printing company dedicated to helping businesses in Kumasi present themselves professionally through quality branding.
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link to="/services" className="btn-primary">EXPLORE OUR SERVICES</Link>
            <Link to="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-brand-black">CONTACT US</Link>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <Reveal>
              <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter uppercase leading-none">
                The <span className="text-brand-magenta">ChromInk</span> Story
              </h2>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="space-y-6 text-lg leading-relaxed text-gray-600">
                <p>
                  Founded in the heart of Kumasi, ChromInk began with a simple vision: to bridge the gap between high-end branding and local accessibility. We noticed that many businesses in the Ashanti region struggled to find a printing partner that combined modern technology with a deep understanding of the local market.
                </p>
                <p>
                  What started as a small operation has grown into a full-service branding company. We've invested in state-of-the-art machinery—like our advanced DTF printing and large format systems—to ensure that every project we touch meets international standards of quality.
                </p>
                <p>
                  Today, ChromInk is proud to serve a diverse range of clients, from startups in Adum to established corporate fleets and large church organizations. We don't just print; we partner with you to build a brand that stands out and lasts.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.6} y={0}>
            <div className="order-1 lg:order-2 relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-cyan to-brand-magenta opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="aspect-square bg-gray-50 border border-gray-100 relative overflow-hidden shadow-2xl">
                <img 
                  src="/images/about-story.png" 
                  alt="ChromInk Founders and Team in Kumasi - Authentic Ghanaian Context" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-10 -right-10 bg-brand-black text-white p-10 hidden md:block shadow-2xl">
                <div className="text-4xl font-black leading-none mb-2 text-brand-cyan">2026</div>
                <div className="text-xs font-bold uppercase tracking-widest">Modern <br />Branding</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-black mb-20 tracking-tighter uppercase text-center">What We Do</h2>
          </Reveal>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { title: "Business Branding", image: "/images/service-signage.png", icon: <ShieldCheck className="text-brand-cyan" />, desc: "From shop signboards to vehicle wraps, we help your business get noticed." },
              { title: "Custom Apparel", image: "/images/tshirt-sample.png", icon: <Users className="text-brand-magenta" />, desc: "Premium t-shirt printing using DTF technology for uniforms and events." },
              { title: "Marketing Materials", image: "/images/flyer-sample.png", icon: <Zap className="text-brand-yellow" />, desc: "High-quality flyers, brochures, and banners to drive your promotions." }
            ].map((item, i) => (
              <motion.div key={i} variants={itemVariants} className="bg-white flex flex-col border border-gray-100 shadow-sm hover:shadow-xl transition-all group overflow-hidden">
                <div className="aspect-video overflow-hidden relative">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-brand-black/40 transition-colors duration-500"></div>
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <div className="w-12 h-12 bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-brand-black group-hover:text-white transition-colors">
                    {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="section-padding bg-brand-black text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Reveal>
            <>
              <Target className="mx-auto mb-8 text-brand-cyan" size={48} />
              <h2 className="text-4xl md:text-5xl font-black mb-10 tracking-tighter uppercase">Our Mission</h2>
              <p className="text-2xl md:text-4xl font-medium italic leading-tight text-gray-300">
                "To empower businesses and individuals in Ghana by providing professional, high-quality printing and branding solutions that inspire trust and drive growth."
              </p>
            </>
          </Reveal>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/5 font-black text-[40rem] select-none pointer-events-none uppercase">
          Aim
        </div>
      </section>

      {/* Why Customers Trust Us Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-black mb-20 tracking-tighter uppercase text-center">
              Why Kumasi <span className="text-brand-cyan">Trusts Us</span>
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
              { title: "Uncompromising Quality", desc: "We use the best materials and latest technology to ensure every print is perfect." },
              { title: "Fast & Reliable", desc: "We respect your deadlines and deliver on time, every time." },
              { title: "Personalized Service", desc: "We listen to your needs and provide custom solutions tailored to your brand." },
              { title: "Local Understanding", desc: "Based in Kumasi, we understand the local market and what it takes to stand out here." },
              { title: "Affordable Excellence", desc: "Premium branding doesn't have to be expensive. We offer competitive rates for all." }
            ].map((item, i) => (
              <motion.div key={i} variants={itemVariants} className="flex gap-6">
                <div className="text-4xl font-black text-gray-100">0{i+1}</div>
                <div>
                  <h4 className="font-bold text-xl mb-3 uppercase tracking-tight text-brand-black">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="section-padding bg-gray-50">
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
            {[
              "Retail & Shops", "Corporate Offices", "Churches & Religious Orgs", 
              "Schools & Universities", "Event Planners", "Logistics & Transport", 
              "Restaurants & Cafes", "Startups & SMEs"
            ].map((industry, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="px-10 py-6 bg-white border border-gray-100 font-bold uppercase tracking-widest text-sm hover:border-brand-magenta hover:text-brand-magenta transition-all cursor-default"
              >
                {industry}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-brand-cyan text-brand-black text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <Reveal>
            <>
              <HeartHandshake className="mx-auto mb-8" size={48} />
              <h2 className="text-4xl md:text-7xl font-black mb-8 leading-none tracking-tighter uppercase">
                Ready to Work <br />with the Best?
              </h2>
              <p className="text-xl text-brand-black/70 mb-12 font-medium">
                Let's discuss how ChromInk can elevate your brand with professional printing and branding.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="https://wa.me/233593321151" target="_blank" rel="noopener noreferrer" className="bg-brand-black text-white px-12 py-6 font-black text-xl uppercase tracking-widest hover:scale-105 transition-transform">
                  WhatsApp Us Now
                </a>
                <Link to="/services" className="bg-white text-brand-black px-12 py-6 font-black text-xl uppercase tracking-widest hover:scale-105 transition-transform">
                  View Our Services
                </Link>
              </div>
            </>
          </Reveal>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-brand-black/5 font-black text-[30rem] select-none pointer-events-none uppercase">
          Team
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;