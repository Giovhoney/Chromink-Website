import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Gift, Heart, Shirt, Coffee, Sparkles } from 'lucide-react';
import { Header, Footer } from '../components/Layout';
import OptimizedImage from '../components/OptimizedImage';
import ImageLightbox from '../components/ImageLightbox';
import { Reveal } from '../components/Reveal';

const Present = () => {
  return (
    <div className="min-h-screen bg-mesh text-brand-black">
      <Header />

      <section className="relative min-h-[60vh] flex items-center overflow-hidden px-4">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/images/bigframe.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-brand-black/70 backdrop-blur-[1px]"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto relative z-10 w-full py-24">
          <div className="max-w-3xl text-center mx-auto">
            <Reveal>
              <div className="inline-flex items-center gap-2 bg-brand-cyan/20 text-brand-cyan px-4 py-2 rounded-full text-sm font-black uppercase tracking-widest mb-8">
                <Gift size={16} /> Custom Gift Presents
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter text-white">
                Present Gifts for <span className="text-gradient-cyan">Loved Ones</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                ChromInk helps you turn memorable moments into personalized gifts. From wall picture frames to custom t-shirts, mugs, and special keepsakes — perfect for birthdays, Mother's Day, Valentine’s Day, and anniversary surprises.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase">
                Gifts made special with <span className="text-brand-magenta">ChromInk</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Choose from ready-to-personalize gift categories for family, partners, and friends. We support thoughtful presents with print, design, and finishing that make every gift feel memorable.
              </p>
              <div className="grid gap-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-brand-cyan text-brand-black rounded-full flex items-center justify-center">
                    <Heart size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-tight mb-2">Perfect for Every Occasion</h3>
                    <p className="text-gray-600 leading-relaxed">Birthday gifts, Mother’s Day, Valentine’s Day, anniversaries, and everyday surprises made personal.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-brand-magenta text-white rounded-full flex items-center justify-center">
                    <Gift size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-tight mb-2">Personalized Print Gifts</h3>
                    <p className="text-gray-600 leading-relaxed">Picture frames, t-shirts, mugs, accessories, and keepsakes customized with your message and style.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-brand-yellow text-brand-black rounded-full flex items-center justify-center">
                    <Sparkles size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-tight mb-2">Quick Turnaround</h3>
                    <p className="text-gray-600 leading-relaxed">Fast, reliable production in Kumasi so your gift arrives on time for the celebration.</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="grid grid-cols-1 gap-6">
              <div className="overflow-hidden rounded-3xl border border-gray-100 shadow-sm">
                <OptimizedImage src="/images/present1.jpg" alt="Custom gift t-shirts" className="w-full h-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-3xl border border-gray-100 shadow-sm">
                <OptimizedImage src="/images/bigframe.jpeg" alt="Gift picture frames" className="w-full h-full object-cover" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-black mb-10 tracking-tighter uppercase">Gift Categories</h2>
          </Reveal>
          <div className="grid gap-8 lg:grid-cols-2">
            {[
              {
                icon: <Shirt className="text-brand-magenta" size={28} />,
                title: 'Custom T-Shirts',
                desc: 'Design a personalized shirt with names, photos, or special messages for your loved one.',
                image: '/images/present4.jpg'
              },
              {
                icon: <Coffee className="text-brand-cyan" size={28} />,
                title: 'Mugs & Cups',
                desc: 'Create custom gift mugs with photos, quotes, or event themes for memorable everyday use.',
                image: '/images/present3.jpg'
              },
              {
                icon: <Gift className="text-brand-yellow" size={28} />,
                title: 'Picture Frames',
                desc: 'Turn your favorite photo into a framed wall gift that celebrates family, friendship, or romance.',
                image: '/images/present2.jpg'
              },
              {
                icon: <Heart className="text-brand-black" size={28} />,
                title: 'Accessories & Keepsakes',
                desc: 'Add creative finishing touches with personalized accessories, gift cards, and custom packaging.',
                image: '/images/present8.jpeg'
              },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm">
                <ImageLightbox src={item.image} alt={item.title} label={`Open ${item.title} image preview`}>
                  <div className="aspect-video bg-gray-50 border border-gray-100 mb-6 overflow-hidden rounded-2xl cursor-pointer hover:shadow-lg transition-shadow">
                    <OptimizedImage src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                </ImageLightbox>
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-brand-black/5 mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase">Perfect gifts for every relationship</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Whether it’s for your girlfriend, boyfriend, mother, father, or close friend, ChromInk helps you craft gifts that are thoughtful, memorable, and beautifully printed.
              </p>
              <ul className="space-y-4 text-gray-600 leading-relaxed">
                <li>• Mother’s Day keepsakes that celebrate her love and care.</li>
                <li>• Birthday presents with personalized photos and messages.</li>
                <li>• Valentine’s Day gifts that feel intimate and special.</li>
                <li>• Anniversary surprises built around custom apparel and décor.</li>
              </ul>
              <Link to="/store" className="mt-10 inline-flex items-center gap-3 bg-brand-black text-white px-8 py-4 uppercase tracking-widest font-black hover:bg-brand-cyan transition-colors">
                Visit Our Store <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="grid gap-6">
              <div className="overflow-hidden rounded-3xl border border-gray-100 shadow-sm">
                <OptimizedImage src="/images/present6.jpg" alt="Custom gift orders" className="w-full h-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-3xl border border-gray-100 shadow-sm">
                <OptimizedImage src="/images/present10.jpeg" alt="Gift quality and finishing" className="w-full h-full object-cover" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Present;
