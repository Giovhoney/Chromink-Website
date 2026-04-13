import React, { useState } from 'react';
import { Header, Footer } from '../components/Layout';
import ImageLightbox from '../components/ImageLightbox';
import OptimizedImage from '../components/OptimizedImage';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MessageCircle, Truck, Car, Layout, StickyNote, ShieldCheck, Zap, ChevronDown, ChevronUp } from 'lucide-react';

const VehicleBranding = () => {
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
      title: "Car Branding", 
      icon: <Car className="text-brand-cyan" />, 
      /* IMAGE: Car Branding Sample */
      image: "https://static.wixstatic.com/media/58925e_f368ac40f43048bfbecaf4a09c927cb1~mv2.jpg/v1/fill/w_264,h_470,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/58925e_f368ac40f43048bfbecaf4a09c927cb1~mv2.jpg",
      desc: "Professional branding for individual cars, including logos, contact info, and partial wraps." 
    },
    { 
      title: "Van Branding", 
      icon: <Truck className="text-brand-magenta" />, 
      /* IMAGE: Van Branding Sample */
      image: "https://webfastprinting.co.za/wp-content/uploads/2024/07/Vehicle-Branding-7-1024x770.jpg",
      desc: "High-visibility branding for delivery vans and service vehicles to maximize your reach." 
    },
    { 
      title: "Fleet Branding", 
      icon: <Layout className="text-brand-yellow" />, 
      /* IMAGE: Fleet Branding Sample */
      image: "https://pictures-ghana.jijistatic.net/41967440_NjIwLTgyNy01YmRiZDNkNmIx.webp",
      desc: "Consistent branding solutions for multiple vehicles to build a strong corporate identity." 
    },
    { 
      title: "Vehicle Stickers", 
      icon: <StickyNote className="text-brand-cyan" />, 
      /* IMAGE: Vehicle Stickers Sample */
      image: "https://profinghana.com/wp-content/uploads/2016/07/taxi2.jpg",
      desc: "Custom vinyl stickers and decals for doors, windows, and bumpers." 
    },
    { 
      title: "Partial Wraps", 
      icon: <ShieldCheck className="text-brand-magenta" />, 
      /* IMAGE: Partial Vehicle Wrap Sample */
      image: "https://six08graphics.com/cdn/shop/files/252903176_885410185437701_6201733077237222110_n.jpg?v=1684157361",
      desc: "Eye-catching partial vehicle wraps that combine branding with the vehicle's original color." 
    },
    { 
      title: "Logo Application", 
      icon: <Zap className="text-brand-yellow" />, 
      /* IMAGE: Vehicle Logo Application Sample */
      image: "https://www.rochester.edu/newscenter/wp-content/uploads/2021/12/university-fleet-vehicles.jpg",
      desc: "Clean and professional application of your business logo for a subtle yet effective look." 
    }
  ];

  return (
    <div className="min-h-screen bg-mesh">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden px-4">
        {/* HERO BACKGROUND IMAGE: Professional Vehicle Branding in Kumasi */}
        <div className="absolute inset-0 z-0">
          <OptimizedImage 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrt04c_C1Q1ln6vGGIrSn5QwCZxbwv6Jg-bFne5Qlt_RDWzQbdKj03dUwU&s=10" 
            alt="Vehicle Branding Services in Kumasi" 
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-brand-black/75 backdrop-blur-[1px]"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase leading-none text-white">
            VEHICLE <span className="text-gradient-cyan">BRANDING</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Turn your cars and vans into moving advertisements. ChromInk provides professional vehicle branding in Kumasi to help your business get noticed everywhere.
          </p>
          <Link to="/contact" className="btn-primary">GET A VEHICLE QUOTE</Link>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter uppercase">Moving Advertisements</h2>
          <p className="text-lg leading-relaxed text-gray-600">
            In the busy streets of Kumasi, your company vehicle is a powerful marketing tool. **Vehicle branding in Kumasi** turns your cars and vans into 24/7 moving billboards.
          </p>
        </div>
      </section>

      {/* Services Included */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-20 tracking-tighter uppercase text-center">Our Branding Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white flex flex-col border border-gray-100 shadow-sm hover:shadow-xl transition-all group overflow-hidden">
                <ImageLightbox src={service.image} alt={service.title} label={`Open ${service.title} image preview`}>
                <div className="aspect-video overflow-hidden relative">
                  <OptimizedImage 
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
                { title: "Professional & Neat Finish", desc: "Our team ensures every sticker and wrap is applied with precision for a polished look." },
                { title: "Bold Visibility", desc: "We use high-quality, vibrant vinyl that stands out in traffic and remains readable." },
                { title: "Custom Branding Support", desc: "We help you design the perfect layout for your vehicle for maximum impact." },
                { title: "Durable & Weather-Resistant", desc: "Our graphics are designed to withstand the sun and rain without fading." }
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
          {/* IMAGE: Vehicle Branding Sample / Why Choose Us Section */}
          <div className="aspect-square bg-gray-900 border border-gray-800 relative overflow-hidden group">
            <OptimizedImage 
              src="https://www.rochester.edu/newscenter/wp-content/uploads/2021/12/university-fleet-vehicles.jpg" 
              alt="Professional Vehicle Branding and Car Wraps in Kumasi Ghana" 
              className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 flex items-center justify-center text-gray-800 font-black text-[20rem] select-none pointer-events-none opacity-20">
              V
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-black mb-12 uppercase tracking-widest">Complete Your Branding</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "Business Signage", link: "/services/business-signage" },
              { name: "Sticker Printing", link: "/services/sticker-printing" },
              { name: "Banner Printing", link: "/services/banner-printing" },
              { name: "Large Format", link: "/services/large-format-printing" }
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
            Brand Your <br />Fleet Today
          </h2>
          <p className="text-xl text-white/80 mb-12 font-medium">
            Get a professional quote for your vehicle branding in Kumasi today.
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

export default VehicleBranding;
