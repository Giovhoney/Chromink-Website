import React, { useState } from 'react';
import { Header, Footer } from '../components/Layout';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MessageCircle, Shirt, Users, Church, School, ShoppingBag, Zap, Palette, ChevronDown, ChevronUp } from 'lucide-react';

const TShirtPrinting = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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

  const orderTypes = [

    { 
      title: "Custom Jerseys", 
      icon: <Shirt className="text-brand-cyan" />, 
      /* IMAGE: Business Uniforms Sample */
      image: "https://i.pinimg.com/736x/00/36/63/003663d58ec91f89de7fb5352a873151.jpg",
      desc: "Customize your Ghana Jersey fast and easy and affordable" 
    },
    { 
      title: "Business Uniforms", 
      icon: <Shirt className="text-brand-cyan" />, 
      /* IMAGE: Business Uniforms Sample */
      image: "https://i.pinimg.com/1200x/da/f0/24/daf0246a43f00f50ce98afbe7f9869ae.jpg",
      desc: "Professional branded t-shirts and polos for your staff to build brand identity and trust." 
    },
    { 
      title: "Event T-Shirts", 
      icon: <Users className="text-brand-magenta" />, 
      /* IMAGE: Event T-Shirts Sample */
      image: "https://i.pinimg.com/1200x/6b/0c/c6/6b0cc6459d8a63c0b46e35dc0397b896.jpg",
      desc: "Custom shirts for weddings, funerals, parties, and corporate events across Kumasi." 
    },
    { 
      title: "Church Shirts", 
      icon: <Church className="text-brand-yellow" />, 
      /* IMAGE: Church Shirts Sample */
      image: "/images/whatsapp/16.jpeg",
      desc: "Branded apparel for church programs, conventions, and youth groups." 
    },
    { 
      title: "School Shirts", 
      icon: <School className="text-brand-cyan" />, 
      /* IMAGE: School Shirts Sample */
      image: "https://kyloshop.com/wp-content/uploads/2024/01/WhatsApp-Image-2023-06-16-at-2.58.31-PM.jpeg",
      desc: "Customized t-shirts for school clubs, sports teams, and anniversary celebrations." 
    },
    { 
      title: "Branded Apparel", 
      icon: <ShoppingBag className="text-brand-magenta" />, 
      /* IMAGE: Branded Apparel Sample */
      image: "https://i.pinimg.com/736x/e7/85/0e/e7850e9742ae012df53f28357b42e28b.jpg",
      desc: "High-quality branded clothing for startups and established businesses looking to grow." 
    },
    { 
      title: "Bulk Orders", 
      icon: <Zap className="text-brand-yellow" />, 
      /* IMAGE: Bulk T-Shirt Orders Sample */
      image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80",
      desc: "Cost-effective solutions for large orders with consistent quality and fast delivery." 
    }
  ];

  return (
    <div className="min-h-screen bg-mesh">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden px-4">
        {/* HERO BACKGROUND IMAGE: High-Quality T-Shirt Printing Process */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/whatsapp/16.jpeg" 
            alt="Custom T-Shirt Printing Services in Kumasi" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-black/75 backdrop-blur-[1px]"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase leading-none text-white">
            T-SHIRT <span className="text-gradient-cyan">PRINTING</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Premium custom t-shirts for businesses, events, and personal use. ChromInk offers high-quality DTF printing in Kumasi with vibrant colors and durable finishes.
          </p>
          <Link to="/contact" className="btn-primary">GET A T-SHIRT QUOTE</Link>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter uppercase">Premium Branded Shirts in Kumasi</h2>
          <p className="text-lg leading-relaxed text-gray-600">
            Looking for the best **t-shirt printing in Kumasi**? ChromInk is your go-to partner for high-quality, durable, and vibrant **custom t-shirt printing**. Whether you are branding your team in Adum or organizing a massive event at KNUST, we deliver professional results that last.
          </p>
        </div>
      </section>

      {/* Types of Orders */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-20 tracking-tighter uppercase text-center">T-Shirt Printing for Every Need</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {orderTypes.map((order, i) => (
              <div key={i} className="bg-white flex flex-col border border-gray-100 shadow-sm hover:shadow-xl transition-all group overflow-hidden">
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={order.image} 
                    alt={order.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-brand-black/40 transition-colors duration-500"></div>
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white flex items-center justify-center shadow-lg group-hover:bg-brand-black transition-colors duration-500">
                    {React.cloneElement(order.icon as React.ReactElement, { 
                      size: 24,
                      className: "group-hover:text-white transition-colors duration-500" 
                    })}
                  </div>
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">{order.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{order.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Printing Method Section (DTF Focus) */}
      <section className="section-padding bg-brand-black text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter uppercase leading-none">
              Advanced <span className="text-brand-cyan text-gradient-cyan">DTF Technology</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              At ChromInk, we specialize in **DTF (Direct to Film) printing**, the modern standard for high-quality apparel branding.
            </p>
            <ul className="space-y-8">
              {[
                { title: "Incredible Color Vibrancy", desc: "Get full-color designs with stunning detail and brightness on any fabric color." },
                { title: "Superior Durability", desc: "Our prints are stretchable and resistant to cracking or peeling, even after multiple washes." },
                { title: "No Minimums", desc: "DTF allows us to print a single shirt or thousands with the same high quality." }
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
          {/* IMAGE: T-Shirt Printing Sample / DTF Technology Section */}
          <div className="aspect-square bg-gray-900 border border-gray-800 relative overflow-hidden group">
            <img 
              src="/images/tshirt-sample.png" 
              alt="High Quality Branded T-Shirts in Kumasi Ghana" 
              className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 flex items-center justify-center text-gray-800 font-black text-[20rem] select-none pointer-events-none opacity-20">
              S
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
              { name: "Sticker Printing", link: "/services/sticker-printing" },
              { name: "Flyer Printing", link: "/services/flyer-printing" },
              { name: "Banner Printing", link: "/services/banner-printing" },
              { name: "Business Signage", link: "/services/business-signage" }
            ].map((service, i) => (
              <Link key={i} to={service.link} className="px-10 py-6 border border-gray-100 font-bold uppercase tracking-widest text-sm hover:border-brand-magenta hover:text-brand-magenta transition-all">
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
            Brand Your <br />Team Today
          </h2>
          <p className="text-xl text-white/80 mb-12 font-medium">
            Get a professional quote for your custom t-shirt printing in Kumasi today.
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

export default TShirtPrinting;
