import React, { useState } from 'react';
import { Header, Footer } from '../components/Layout';
import ImageLightbox from '../components/ImageLightbox';
import OptimizedImage from '../components/OptimizedImage';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MessageCircle, FileText, Printer, Copy, BookOpen, Briefcase, Zap, ChevronDown, ChevronUp } from 'lucide-react';

const DocumentPrinting = () => {
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
      title: "Black & White", 
      icon: <FileText className="text-brand-cyan" />, 
      /* IMAGE: Black and White Printing Sample */
      image: "https://d3kao0ewn8yaz4.cloudfront.net/images/product/Black_and_white_copies_V3_1_.jpg",
      desc: "Fast and crisp black and white printing for reports, manuals, and official documents." 
    },
    { 
      title: "Color Printing", 
      icon: <Printer className="text-brand-magenta" />, 
      /* IMAGE: Color Printing Sample */
      image: "https://libraries.mit.edu/app/uploads/sites/4/2023/05/IMG_5639.jpg",
      desc: "High-quality color printing for presentations, certificates, and vibrant documents." 
    },
    { 
      title: "Photocopying", 
      icon: <Copy className="text-brand-yellow" />, 
      /* IMAGE: Photocopying Sample */
      image: "https://c8.alamy.com/comp/KEN448/smiling-young-african-businesswoman-placing-paper-on-photocopy-machine-KEN448.jpg",
      desc: "Reliable photocopying services for single pages or bulk document duplication." 
    },
    { 
      title: "Binding", 
      icon: <BookOpen className="text-brand-cyan" />, 
      /* IMAGE: Document Binding Sample */
      image: "https://i0.wp.com/www.printivity.com/insights/wp-content/uploads/2019/07/Variety_Output-1.png?fit=1024%2C683&ssl=1",
      desc: "Professional comb, spiral, and thermal binding to give your documents a neat finish." 
    },
    { 
      title: "Office Print Jobs", 
      icon: <Briefcase className="text-brand-magenta" />, 
      /* IMAGE: Office Print Jobs Sample */
      image: "https://d2tkm9c930mel.cloudfront.net/print2go/images/product/colourprint.jpg",
      desc: "Quick printing for everyday office needs, including letterheads and internal forms." 
    },
    { 
      title: "Bulk Printing", 
      icon: <Zap className="text-brand-yellow" />, 
      /* IMAGE: Bulk Document Printing Sample */
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DFerEEuq9cosQ2MRd8FgmmwzKESr66sPe0mbjZly_KB4WILCxlzy3eQ&s=10",
      desc: "Scalable solutions for large-scale printing projects with consistent quality and speed." 
    }
  ];

  return (
    <div className="min-h-screen bg-mesh">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden px-4">
        {/* HERO BACKGROUND IMAGE: Professional Document Printing and Office Support */}
        <div className="absolute inset-0 z-0">
          <OptimizedImage 
            src="https://i.pinimg.com/1200x/fa/f4/41/faf4417ab4fba29077eb1a751d1c9744.jpg" 
            alt="Document Printing Services in Kumasi" 
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-brand-black/75 backdrop-blur-[1px]"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase leading-none text-white">
            DOCUMENT <span className="text-gradient-cyan">PRINTING</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Reliable document and office printing services for students, businesses, and organizations. ChromInk delivers fast, affordable results in Kumasi.
          </p>
          <Link to="/contact" className="btn-primary">GET A PRINTING QUOTE</Link>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter uppercase">Reliable Office Support</h2>
          <p className="text-lg leading-relaxed text-gray-600">
            When you need professional **document printing in Kumasi**, ChromInk is your trusted partner. We offer a wide range of **office printing** solutions tailored to meet your needs.
          </p>
        </div>
      </section>

      {/* Services Included */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-20 tracking-tighter uppercase text-center">Our Document Services</h2>
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
                { title: "Fast & Efficient Service", desc: "We understand that time is critical. Most document printing jobs are completed while you wait." },
                { title: "Neat & Professional Finishing", desc: "From crisp prints to secure binding, we ensure your documents are finished to the highest standard." },
                { title: "Affordable Pricing", desc: "We offer competitive rates for students and businesses, with special discounts for bulk orders." },
                { title: "Convenient Support", desc: "Our team is here to help you with file formatting and choosing the right paper and binding options." }
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
          {/* IMAGE: Document Printing Sample / Why Choose Us Section */}
          <div className="aspect-square bg-gray-900 border border-gray-800 relative overflow-hidden group">
            <OptimizedImage 
              src="https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?auto=format&fit=crop&w=800&q=80" 
              alt="Professional Document Printing and Binding Services in Kumasi Ghana" 
              className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 flex items-center justify-center text-gray-800 font-black text-[20rem] select-none pointer-events-none opacity-20">
              D
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-black mb-12 uppercase tracking-widest">Need More Customization?</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "Custom Orders", link: "/services/custom-printing" },
              { name: "Flyer Printing", link: "/services/flyer-printing" },
              { name: "Sticker Printing", link: "/services/sticker-printing" },
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
            Print Your <br />Documents Today
          </h2>
          <p className="text-xl text-white/80 mb-12 font-medium">
            Get a professional quote for your document printing and office needs in Kumasi today.
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

export default DocumentPrinting;
