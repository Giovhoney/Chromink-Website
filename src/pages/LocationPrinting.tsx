import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Header, Footer } from '../components/Layout';
import { Reveal } from '../components/Reveal';
import OptimizedImage from '../components/OptimizedImage';
import TestimonialsSection from '../components/TestimonialsSection';
import { localAreaMap, localAreas } from '../content/localAreas';
import { businessInfo } from '../seo/businessInfo';
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  MapPin,
  MessageCircle,
  Printer,
  Store,
  Users,
} from 'lucide-react';

const serviceLinks = [
  { label: 'Banner Printing', to: '/services/banner-printing' },
  { label: 'Business Signage', to: '/services/business-signage' },
  { label: 'T-Shirt Printing', to: '/services/t-shirt-printing' },
  { label: 'Picture Frames', to: '/services/picture-frame' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const LocationPrinting = () => {
  const location = useLocation();
  const content = localAreaMap[location.pathname];

  if (!content) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="relative min-h-[68vh] flex items-center overflow-hidden px-4">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 z-0"
        >
          <OptimizedImage
            src={content.heroImage}
            alt={content.heroAlt}
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-brand-black/75 backdrop-blur-[1px]"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-brand-cyan/15 border border-brand-cyan/30 text-brand-cyan px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8">
              <MapPin size={14} />
              {content.proofLabel}
            </div>
            <motion.h1
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase leading-none text-white"
            >
              {content.heroTitle}
            </motion.h1>
            <motion.p
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl leading-relaxed mb-10"
            >
              {content.heroText}
            </motion.p>
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href={businessInfo.whatsappUrl}
                className="btn-primary flex items-center gap-2"
              >
                GET A QUOTE <MessageCircle size={18} />
              </a>
              <Link
                to="/services"
                className="btn-secondary border-white text-white hover:bg-white hover:text-brand-black"
              >
                VIEW ALL SERVICES
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-start">
          <Reveal>
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase">
                Local Print Support in <span className="text-brand-cyan">{content.area}</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {content.nearby}
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="border border-gray-100 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Printer className="text-brand-cyan" size={22} />
                    <h3 className="text-lg font-bold uppercase tracking-tight">Popular Services</h3>
                  </div>
                  <div className="space-y-3">
                    {content.serviceMix.map((item) => (
                      <div key={item} className="flex items-center gap-3 text-gray-700">
                        <CheckCircle2 size={18} className="text-brand-cyan" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border border-gray-100 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="text-brand-magenta" size={22} />
                    <h3 className="text-lg font-bold uppercase tracking-tight">Best For</h3>
                  </div>
                  <div className="space-y-3">
                    {content.audience.map((item) => (
                      <div key={item} className="flex items-center gap-3 text-gray-700">
                        <CheckCircle2 size={18} className="text-brand-magenta" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="space-y-6">
              {content.distance && (
                <div className="bg-brand-cyan text-brand-black p-8 border-2 border-brand-cyan">
                  <div className="flex items-center gap-3 mb-6">
                    <MapPin className="text-brand-black" size={24} />
                    <h3 className="text-xl font-bold uppercase tracking-tight">Distance & Travel Time</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-bold uppercase tracking-tight">From ChromInk Studio:</span>
                      <span className="text-2xl font-black">{content.distance}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold uppercase tracking-tight">Estimated Travel Time:</span>
                      <span className="text-lg font-bold">{content.travelTime}</span>
                    </div>
                    <p className="text-sm text-brand-black/70 pt-4 border-t-2 border-brand-black/20">
                      Convenient location for quick pickups or on-campus delivery. Contact us to arrange your preferred delivery or pickup option.
                    </p>
                  </div>
                </div>
              )}
              <div className="bg-gray-50 border border-gray-100 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Clock3 className="text-brand-yellow" size={22} />
                  <h3 className="text-xl font-bold uppercase tracking-tight">What Customers Usually Need</h3>
                </div>
                <div className="space-y-6">
                  {content.notes.map((item) => (
                    <div key={item.title}>
                      <h4 className="font-bold uppercase tracking-tight mb-2">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="max-w-3xl mb-12">
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase">
                Common Jobs We Handle in <span className="text-brand-magenta">{content.area}</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                These are the kinds of print and branding requests customers in {content.area} most often bring to ChromInk.
              </p>
            </div>
          </Reveal>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {content.examples.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="bg-white border border-gray-100 p-8 shadow-sm"
              >
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <TestimonialsSection
        title={`Why ${content.area} Customers Choose ChromInk`}
        intro={`These Google reviews help show the kind of quality, speed, pricing, and support customers across Kumasi already expect from ChromInk.`}
        theme="light"
        limit={3}
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="max-w-3xl mb-10">
              <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase">
                Related Services for <span className="text-brand-cyan">{content.area}</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Start with the service page that best matches your project, then contact us for area-specific advice, timing, and finishing options.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="border border-gray-100 p-6 group hover:border-brand-cyan transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Store size={18} className="text-brand-cyan" />
                  <span className="text-xs font-black uppercase tracking-widest text-brand-cyan">
                    Service Page
                  </span>
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight mb-4 group-hover:text-brand-cyan transition-colors">
                  {item.label}
                </h3>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                  Explore <ArrowRight size={14} className="text-brand-cyan" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-black mb-16 tracking-tighter uppercase text-center">
              {content.area} Area <span className="text-brand-cyan">FAQs</span>
            </h2>
          </Reveal>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {content.distance && (
              <motion.div variants={itemVariants} className="bg-gray-50 p-8 border border-gray-100">
                <h4 className="font-bold text-lg mb-3 uppercase tracking-tight">How far is ChromInk from {content.area}?</h4>
                <p className="text-gray-600 leading-relaxed">
                  ChromInk is approximately <strong>{content.distance}</strong> from {content.area}, with an estimated travel time of <strong>{content.travelTime}</strong> depending on traffic conditions. We offer flexible pickup and delivery options to suit your convenience.
                </p>
              </motion.div>
            )}
            <motion.div variants={itemVariants} className="bg-gray-50 p-8 border border-gray-100">
              <h4 className="font-bold text-lg mb-3 uppercase tracking-tight">Can you deliver to {content.area}?</h4>
              <p className="text-gray-600 leading-relaxed">
                Yes! We offer delivery services across Kumasi, including {content.area}. For large orders or rush jobs, ask us about delivery options when you place your order via WhatsApp or phone.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-gray-50 p-8 border border-gray-100">
              <h4 className="font-bold text-lg mb-3 uppercase tracking-tight">How quickly can I get my order?</h4>
              <p className="text-gray-600 leading-relaxed">
                Most standard orders are ready within 24-48 hours. With our proximity to {content.area}, you can often pick up or receive delivery the same day for urgent jobs. Contact us with your timeline for a specific estimate.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-gray-50 p-8 border border-gray-100">
              <h4 className="font-bold text-lg mb-3 uppercase tracking-tight">Can I discuss my printing needs face-to-face?</h4>
              <p className="text-gray-600 leading-relaxed">
                Absolutely. We're conveniently located in Kumasi and welcome {content.area} customers to visit our studio to discuss projects, review samples, and understand options before ordering. Call or WhatsApp to arrange a time.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="max-w-3xl mb-10">
              <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase">
                More Kumasi <span className="text-brand-magenta">Area Pages</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Explore nearby area pages if you want more location-specific print notes across Kumasi.
              </p>
            </div>
          </Reveal>

          <div className="flex flex-wrap gap-4">
            {localAreas
              .filter((area) => area.path !== content.path)
              .map((area) => (
                <Link
                  key={area.path}
                  to={area.path}
                  className="px-5 py-4 bg-white border border-gray-100 text-sm font-bold uppercase tracking-widest text-gray-600 hover:border-brand-magenta hover:text-brand-magenta transition-colors"
                >
                  {area.area}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-black text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <Reveal>
            <>
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-none tracking-tighter uppercase">
                Ready to Order Printing in <br />
                <span className="text-brand-cyan">{content.area}</span>?
              </h2>
              <p className="text-xl text-gray-400 mb-12 font-medium">
                {content.cta}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href={businessInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  WHATSAPP CHROMINK
                </a>
                <Link
                  to="/contact"
                  className="btn-secondary border-white text-white hover:bg-white hover:text-brand-black"
                >
                  REQUEST A CALL
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

export default LocationPrinting;
