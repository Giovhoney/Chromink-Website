import React from 'react';
import { Header, Footer } from '../components/Layout';
import { MessageCircle, Phone, Mail, MapPin, Send, UploadCloud, Clock, ShieldCheck, Star } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-mesh">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden px-4">
        {/* HERO BACKGROUND IMAGE: Professional Business Meeting / Consultation */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover opacity-40"
          >
            <source src="/images/whatsapp/vid.mp4" type="video/mp4" />
            {/* Fallback image if video fails to load */}
            <img 
              src="/images/whatsapp/9.jpeg" 
              alt="Picture Frame Background" 
              className="w-full h-full object-cover"
            />
          </video>
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-brand-black/75 backdrop-blur-[1px]"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase leading-none text-white">
            GET A <span className="text-gradient-cyan">QUOTE</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Ready to start your project? Request a custom quote or reach out to us directly for all your printing and branding needs in Kumasi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#quote-form" className="btn-primary">REQUEST A QUOTE</a>
            <a href="https://wa.me/233593321151" target="_blank" rel="noopener noreferrer" className="btn-secondary border-white text-white hover:bg-white hover:text-brand-black flex items-center justify-center gap-2">
              <MessageCircle size={20} /> WHATSAPP US
            </a>
          </div>
        </div>
      </section>

      {/* Contact Options & Form Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-black mb-8 tracking-tighter uppercase">Get in Touch</h2>
            <p className="text-lg mb-12 text-gray-600 leading-relaxed">
              As a leading **printing company in Kumasi**, we are always ready to discuss your branding goals. Whether you need a quick **printing quote** or want to visit our office, here is how you can reach us.
            </p>
            
            <div className="space-y-10">
              {[
                { icon: <MessageCircle className="text-brand-cyan" />, title: "WhatsApp", detail: "+233 59 332 1151", sub: "Fastest for quick questions and quotes.", link: "https://wa.me/233593321151" },
                { icon: <Phone className="text-brand-magenta" />, title: "Phone", detail: "+233 59 332 1151", sub: "Available Mon-Sat, 8am - 6pm.", link: "tel:+233593321151" },
                { icon: <Mail className="text-brand-yellow" />, title: "Email", detail: "print@chromink.co", sub: "For detailed project briefs and files.", link: "mailto:print@chromink.co" },
                { icon: <MapPin className="text-brand-cyan" />, title: "Location", detail: "Kumasi, Ashanti Region, Ghana", sub: "Visit us for consultations and pickups.", link: "https://www.google.com/maps/place/ChromInk/@6.7130822,-1.5587749,16z/" }
              ].map((item, i) => (
                <a key={i} href={item.link} target={item.link.startsWith('http') ? "_blank" : undefined} rel={item.link.startsWith('http') ? "noopener noreferrer" : undefined} className="flex gap-6 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-14 h-14 bg-gray-50 flex items-center justify-center shrink-0 group-hover:bg-brand-black transition-colors duration-300">
                    {React.cloneElement(item.icon as React.ReactElement, { size: 24, className: "group-hover:text-white transition-colors" })}
                  </div>
                  <div>
                    <h4 className="font-bold text-xl uppercase tracking-tight">{item.title}</h4>
                    <p className="text-gray-800 font-medium">{item.detail}</p>
                    <p className="text-sm text-gray-500 italic">{item.sub}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-20 p-10 bg-brand-black text-white relative overflow-hidden">
              <h3 className="text-2xl font-bold mb-6 uppercase tracking-tight relative z-10">Why Contact ChromInk?</h3>
              <ul className="space-y-4 relative z-10">
                {[
                  { icon: <Clock size={18} />, text: "Fast response times for all inquiries." },
                  { icon: <Star size={18} />, text: "Custom quotes tailored to your budget." },
                  { icon: <ShieldCheck size={18} />, text: "Expert support for business and events." }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-400">
                    <span className="text-brand-cyan">{item.icon}</span> {item.text}
                  </li>
                ))}
              </ul>
              <div className="absolute -right-10 -bottom-10 text-white/5 font-black text-9xl select-none">
                INK
              </div>
            </div>
          </div>

          {/* Quote Request Form */}
          <div id="quote-form" className="bg-gray-50 p-8 md:p-12 border border-gray-100 shadow-2xl">
            <h2 className="text-3xl font-black mb-8 tracking-tighter uppercase">Request a Quote</h2>
            <form action="https://formspree.io/f/print@chromink.co" method="POST" className="space-y-6">
              <input type="hidden" name="_subject" value="New Quote Request from ChromInk Website" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">Full Name</label>
                  <input type="text" name="name" required className="w-full border-b-2 border-gray-200 bg-transparent py-3 focus:outline-none focus:border-brand-cyan transition-colors" placeholder="Malachi Yeboah" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">Phone Number</label>
                  <input type="tel" name="phone" required className="w-full border-b-2 border-gray-200 bg-transparent py-3 focus:outline-none focus:border-brand-cyan transition-colors" placeholder="+233..." />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400">Email Address</label>
                <input type="email" name="email" required className="w-full border-b-2 border-gray-200 bg-transparent py-3 focus:outline-none focus:border-brand-cyan transition-colors" placeholder="your@email.com" />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">Service Needed</label>
                  <select name="service" className="w-full border-b-2 border-gray-200 bg-transparent py-3 focus:outline-none focus:border-brand-cyan transition-colors appearance-none cursor-pointer">
                    <option value="Banner Printing">Banner Printing</option>
                    <option value="T-Shirt Branding">T-Shirt Branding</option>
                    <option value="Business Signage">Business Signage</option>
                    <option value="Sticker Printing">Sticker Printing</option>
                    <option value="Flyer Printing">Flyer Printing</option>
                    <option value="Other / Custom">Other / Custom</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">Quantity</label>
                  <input type="text" name="quantity" className="w-full border-b-2 border-gray-200 bg-transparent py-3 focus:outline-none focus:border-brand-cyan transition-colors" placeholder="e.g. 100 pcs" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400">Project Description</label>
                <textarea name="message" rows={4} required className="w-full border-b-2 border-gray-200 bg-transparent py-3 focus:outline-none focus:border-brand-cyan transition-colors resize-none" placeholder="Tell us about your project details, sizes, etc."></textarea>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400">Upload Design (Optional)</label>
                <div className="relative border-2 border-dashed border-gray-200 p-10 text-center bg-white hover:border-brand-cyan transition-colors cursor-pointer group">
                  <input type="file" name="attachment" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <UploadCloud className="mx-auto mb-4 text-gray-300 group-hover:text-brand-cyan transition-colors" size={40} />
                  <p className="text-sm font-bold text-gray-500">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest">PDF, AI, PNG, or JPG</p>
                </div>
              </div>
              
              <button type="submit" className="w-full btn-primary flex items-center justify-center gap-3 py-6">
                SUBMIT REQUEST <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="section-padding bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-black tracking-tighter uppercase">Find Us in <span className="text-brand-cyan">Kumasi</span></h2>
              <p className="text-lg text-gray-600 mt-4">
                Visit our studio for a professional consultation or to pick up your completed print orders. We are conveniently located in the heart of Kumasi.
              </p>
            </div>
            <a 
              href="https://www.google.com/maps/place/ChromInk/@6.7130822,-1.5587749,16z/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2"
            >
              OPEN IN GOOGLE MAPS <MapPin size={18} />
            </a>
          </div>
          
          <div className="w-full h-[450px] bg-gray-200 border border-gray-100 shadow-xl relative group overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3822!2d-1.5587749!3d6.7130822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb95b1eec20111%3A0xcbb0c13312b95726!2sChromInk!5e0!3m2!1sen!2sgh!4v1712415000000!5m2!1sen!2sgh" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="ChromInk Location Map"
              className="grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black mb-16 tracking-tighter uppercase text-center">Contact & Quote FAQ</h2>
          <div className="space-y-6">
            {[
              { q: "How long does it take to get a quote?", a: "We typically respond to quote requests within 1-2 hours during business hours. WhatsApp is the fastest way to get an immediate estimate." },
              { q: "How do I submit my files for printing?", a: "You can upload them via the form above, email them to us, or send them directly through WhatsApp. We prefer high-resolution files for the best results." },
              { q: "Do you handle urgent or same-day orders?", a: "Yes, we prioritize urgent orders whenever possible. Please contact us via WhatsApp or phone immediately for same-day printing requests in Kumasi." },
              { q: "What is your pricing for bulk orders?", a: "We offer significant discounts for bulk orders. The more you print, the lower the unit price. Request a quote for a detailed breakdown." },
              { q: "Do you offer delivery after printing?", a: "Yes, we provide delivery services to all parts of Kumasi and can arrange shipping to other regions in Ghana for larger orders." }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-8 border border-gray-100 shadow-sm">
                <h4 className="font-bold text-lg mb-3 uppercase tracking-tight">{faq.q}</h4>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-brand-cyan text-brand-black text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-7xl font-black mb-8 leading-none tracking-tighter uppercase">
            Let's Build Your <br />Brand Together
          </h2>
          <p className="text-xl text-brand-black/70 mb-12 font-medium">
            Experience the best printing and branding service in Kumasi.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="https://wa.me/233593321151" target="_blank" rel="noopener noreferrer" className="bg-brand-black text-white px-12 py-6 font-black text-xl uppercase tracking-widest hover:scale-105 transition-transform">
              WhatsApp Us Now
            </a>
            <a href="tel:+233593321151" className="bg-white text-brand-black px-12 py-6 font-black text-xl uppercase tracking-widest hover:scale-105 transition-transform">
              Call Us Directly
            </a>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-brand-black/5 font-black text-[30rem] select-none pointer-events-none uppercase">
          Talk
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;