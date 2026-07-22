import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Gift, Heart, Shirt, Star, Sparkles } from 'lucide-react';
import { Header, Footer } from '../components/Layout';
import OptimizedImage from '../components/OptimizedImage';
import ImageLightbox from '../components/ImageLightbox';
import { Reveal } from '../components/Reveal';

const BirthdayPresentBlog = () => {
  const heroImage = '/images/present9.jpeg';
  const introImage = '/images/bigframe.jpeg';
  const ideaCards = [
    {
      icon: <Gift className="text-brand-magenta" size={28} />,
      title: 'Photo Gifts',
      desc: 'Create framed photos, canvas prints, and gift-ready wall art from your favorite memories.',
      image: '/images/present7.jpeg',
    },
    {
      icon: <Shirt className="text-brand-cyan" size={28} />,
      title: 'Custom Apparel',
      desc: 'Design a birthday t-shirt or hoodie with meaningful text, images, or inside jokes.',
      image: '/images/present5.jpg',
    },
    {
      icon: <Heart className="text-brand-yellow" size={28} />,
      title: 'Personal Keepsakes',
      desc: 'Choose a gift that keeps the memory alive, like custom mugs, notebooks, or lifestyle accessories.',
      image: '/images/present8.jpeg',
    },
  ];

  const closingGallery = [
    {
      src: '/images/present1.jpg',
      alt: 'Custom birthday presents',
    },
    {
      src: '/images/present10.jpeg',
      alt: 'Quality birthday gifts',
    },
  ];

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
            backgroundImage: `url('${heroImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-brand-black/70 backdrop-blur-[1px]"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto relative z-10 w-full py-24">
          <div className="max-w-3xl text-center mx-auto">
            <Reveal>
              <div className="inline-flex items-center gap-2 bg-brand-yellow/20 text-brand-black px-4 py-2 rounded-full text-sm font-black uppercase tracking-widest mb-8">
                <Sparkles size={16} /> Birthday Gift Ideas
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter text-white">
                Birthday Presents Everyone Will Love
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Discover thoughtful and personalized birthday gift ideas from ChromInk. Create meaningful presents with custom prints, framed memories, and one-of-a-kind apparel for the people you care about most.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase">Why Personalized Gifts Make Birthdays Better</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                A thoughtful gift becomes unforgettable when it carries a personal touch. At ChromInk, we help you turn ideas into birthday presents that feel special, practical, and beautifully made.
              </p>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>From printed t-shirts and custom mugs to photo frames and keepsake accessories, the best birthday presents are the ones that tell a story.</p>
                <p>Choose gifts that reflect their personality, celebrate your shared memories, and bring a smile with every use.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="overflow-hidden rounded-3xl border border-gray-100 shadow-sm">
              <OptimizedImage src={introImage} alt="Birthday present ideas" className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-black mb-10 tracking-tighter uppercase">Top Birthday Present Ideas</h2>
          </Reveal>
          <div className="grid gap-8 lg:grid-cols-3">
            {ideaCards.map((item) => (
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
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase">How to choose the perfect birthday present</h2>
              <ul className="space-y-4 text-gray-600 leading-relaxed mb-8">
                <li>• Think about what they love and what reminds you of them.</li>
                <li>• Choose a gift that can be personalized with names, photos, or a message.</li>
                <li>• Match the gift to their style — classic keepsakes, wearable fashion, or practical everyday items.</li>
              </ul>
              <Link to="/services/present" className="inline-flex items-center gap-3 bg-brand-black text-white px-8 py-4 uppercase tracking-widest font-black hover:bg-brand-cyan transition-colors">
                Explore Present Gifts <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="grid gap-6">
              {closingGallery.map((image) => (
                <div key={image.src} className="overflow-hidden rounded-3xl border border-gray-100 shadow-sm">
                  <OptimizedImage src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-brand-black text-white">
        <div className="max-w-7xl mx-auto text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase">Ready to design a birthday gift?</h2>
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
              ChromInk makes it easy to plan, print, and deliver thoughtful birthday presents in Kumasi. Reach out today and let us help you build the perfect surprise.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-3 bg-brand-yellow text-brand-black px-8 py-4 uppercase tracking-widest font-black hover:bg-brand-white transition-colors">
              Start your birthday order <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BirthdayPresentBlog;
