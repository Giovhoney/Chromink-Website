import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { testimonials, testimonialsAggregate } from '../content/testimonials';

type TestimonialsSectionProps = {
  title?: string;
  intro?: string;
  theme?: 'light' | 'dark';
  limit?: number;
};

const TestimonialsSection = ({
  title = 'What Customers Say',
  intro = 'These testimonials were shared by real ChromInk customers through our Google Business Profile.',
  theme = 'light',
  limit = 6,
}: TestimonialsSectionProps) => {
  const items = testimonials.slice(0, limit);
  const dark = theme === 'dark';

  return (
    <section className={`section-padding ${dark ? 'bg-brand-black text-white' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="max-w-3xl mb-14">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center gap-1 text-brand-yellow">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <span className={`text-sm font-black uppercase tracking-widest ${dark ? 'text-gray-300' : 'text-gray-500'}`}>
                {testimonialsAggregate.ratingValue}.0 rating from {testimonialsAggregate.reviewCount} Google reviews
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase">
              {title}
            </h2>
            <p className={`text-lg leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
              {intro}
            </p>
          </div>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08 },
            },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {items.map((item) => (
            <motion.div
              key={`${item.author}-${item.quote}`}
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0 },
              }}
              className={`border p-8 shadow-sm ${
                dark
                  ? 'border-gray-800 bg-brand-black/40'
                  : 'border-gray-100 bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-1 text-brand-yellow mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className={`text-lg leading-relaxed mb-8 ${dark ? 'text-gray-200' : 'text-gray-700'}`}>
                "{item.quote}"
              </p>
              <div className="border-t pt-5 border-current/10">
                <div className="font-bold uppercase tracking-tight">{item.author}</div>
                <div className={`text-xs font-black uppercase tracking-widest mt-2 ${dark ? 'text-brand-cyan' : 'text-brand-magenta'}`}>
                  {item.service}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <Reveal delay={0.2}>
          <div className="mt-12">
            <Link
              to="/store"
              className={`inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest ${
                dark ? 'text-brand-cyan' : 'text-brand-black'
              }`}
            >
              Visit Our Store <ArrowRight size={14} className="text-brand-cyan" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default TestimonialsSection;
