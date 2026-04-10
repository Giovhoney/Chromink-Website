import React, { useState } from 'react';
import { Header, Footer } from '../components/Layout';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Reveal } from '../components/Reveal';
import { ArrowRight, CheckCircle2, MessageCircle, LayoutGrid, Maximize, Image, ChevronDown, ChevronUp, Frame, WallRouter } from 'lucide-react';

const PictureFrame = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    { 
      q: "How much does a picture frame cost in Kumasi?", 
      a: "Pricing depends on the size of the frame and the type of material used. Contact ChromInk for a custom quote based on your specific needs." 
    },
    { 
      q: "How long does it take to get my frame ready?", 
      a: "We offer same-day service for many standard frame sizes. Just contact us and you can have your picture frame ready to put on your wall the same day." 
    },
    { 
      q: "Can I bring my own digital photo for printing and framing?", 
      a: "Yes! You can send us your high-resolution photos via WhatsApp or email, and we will handle the printing and framing for you." 
    },
    { 
      q: "What sizes of frames do you offer?", 
      a: "We offer a wide range of sizes, from small desk frames to large wall-filling frames. Custom sizes are also available upon request." 
    },
    { 
      q: "Do you offer delivery in Kumasi?", 
      a: "Yes, we can arrange delivery for your finished frames within Kumasi and surrounding areas." 
    }
  ];

  const frameTypes = [
    { 
      title: "Classic Wall Frames", 
      icon: <Frame className="text-brand-cyan" />, 
      image: "/images/whatsapp/alice1.jpeg",
      desc: "Elegant and durable frames perfect for family portraits and office decor." 
    },
    { 
      title: "Modern Minimalist", 
      icon: <Maximize className="text-brand-magenta" />, 
      image: "/images/whatsapp/10.jpeg",
      desc: "Sleek, thin-profile frames that put all the focus on your beautiful photos." 
    },
    { 
      title: "Large Format Wall Art", 
      icon: <Image className="text-brand-yellow" />, 
      image: "https://i.pinimg.com/736x/f9/34/30/f93430bbd4a0d430638c493adb18cc7b.jpg",
      desc: "Make a statement with oversized frames designed for living rooms and lobbies." 
    },
    { 
      title: "Collage Frames", 
      icon: <LayoutGrid className="text-brand-cyan" />, 
      image: "/images/whatsapp/9.jpeg",
      desc: "Display multiple memories in a single, beautifully crafted multi-photo frame." 
    },
    { 
      title: "Canvas Wraps", 
      icon: <Maximize className="text-brand-magenta" />, 
      image: "/images/whatsapp/alice2.jpeg",
      desc: "Modern frameless look where the image wraps around the edges for a 3D effect." 
    },
    { 
      title: "Custom Gift Frames", 
      icon: <MessageCircle className="text-brand-yellow" />, 
      image: "/images/whatsapp/13.jpeg",
      desc: "Perfect for birthdays, weddings, and anniversaries. Personalized to your liking." 
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
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-brand-black text-white overflow-hidden min-h-[80vh] flex items-center">
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
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/60 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-block bg-brand-cyan text-brand-black px-4 py-1 font-bold text-xs uppercase tracking-widest mb-6"
            >
              Premium Wall Decor
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase leading-none"
            >
              PICTURE FRAMES & <br />
              <span className="text-brand-cyan">WALL ART</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 mb-10 leading-relaxed"
            >
              Transform your favorite memories into stunning wall decor. At ChromInk, we create durable, vibrant, and high-quality picture frames right here in Kumasi.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a href="https://wa.me/233540000000" className="btn-primary flex items-center gap-2">
                ORDER ON WHATSAPP <MessageCircle size={20} />
              </a>
              <Link to="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-brand-black">
                GET A QUOTE
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Frame Types Grid */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase">Our Framing Options</h2>
              <p className="text-lg text-gray-600">
                Whether it's for your home, office, or a special gift, we have the perfect framing solution for you.
              </p>
            </div>
          </Reveal>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {frameTypes.map((type, i) => (
              <motion.div key={i} variants={itemVariants} className="bg-white group overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={type.image} 
                    alt={type.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 w-10 h-10 bg-white flex items-center justify-center shadow-md">
                    {type.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-3">{type.title}</h3>
                  <p className="text-gray-600">{type.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="relative">
                <img 
                  src="/images/whatsapp/team.jpeg" 
                  alt="Quality Framing" 
                  className="w-full aspect-square object-cover shadow-2xl"
                />
                <div className="absolute -bottom-8 -right-8 bg-brand-magenta p-8 text-white hidden md:block">
                  <div className="text-4xl font-black mb-1">SAME DAY</div>
                  <div className="text-sm font-bold uppercase tracking-widest">Service Available</div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div>
                <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter uppercase leading-none">
                  Why Choose Our <br />
                  <span className="text-brand-magenta">Wall Frames?</span>
                </h2>
                <div className="space-y-6">
                  {[
                    { title: "Vibrant Print Quality", desc: "We use high-resolution printing technology to ensure your photos look sharp and the colors stay true for years." },
                    { title: "Durable Materials", desc: "Our frames are built to last, using premium wood and high-quality glass or acrylic protection." },
                    { title: "Custom Sizes", desc: "From standard 8x10 to massive custom wall installations, we can frame anything." },
                    { title: "Professional Finishing", desc: "Every frame is hand-finished with attention to detail, ensuring a clean and professional look." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="mt-1">
                        <CheckCircle2 className="text-brand-cyan" size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold uppercase tracking-tight mb-1">{item.title}</h4>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-12">
                  <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                    START YOUR PROJECT <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black tracking-tighter uppercase">Frequently Asked Questions</h2>
            </div>
          </Reveal>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className="border border-gray-200 bg-white overflow-hidden">
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-bold uppercase tracking-tight text-lg">{faq.q}</span>
                    {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  {openFaq === index && (
                    <div className="p-6 pt-0 text-gray-600 border-t border-gray-100 animate-fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-cyan">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase text-brand-black">
              Ready to decorate your walls?
            </h2>
            <p className="text-xl text-brand-black/80 mb-10 max-w-2xl mx-auto font-medium">
              Send us your photos today and get them framed by tomorrow. Quality guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/images/whatsapp/alice1.jpeg" className="bg-brand-black text-white px-10 py-4 font-black uppercase tracking-widest hover:bg-brand-magenta transition-colors flex items-center justify-center gap-2">
                WHATSAPP US NOW <MessageCircle size={20} />
              </a>
              <Link to="/contact" className="bg-transparent border-2 border-brand-black text-brand-black px-10 py-4 font-black uppercase tracking-widest hover:bg-brand-black hover:text-white transition-all flex items-center justify-center gap-2">
                GET A QUOTE <ArrowRight size={20} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PictureFrame;
