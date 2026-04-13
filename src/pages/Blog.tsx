import React from 'react';
import { Header, Footer } from '../components/Layout';
import { Link } from 'react-router-dom';
import OptimizedImage from '../components/OptimizedImage';
import { ArrowRight, Calendar, User, Clock, Tag } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "How much does banner printing cost in Kumasi?",
      excerpt: "A detailed guide on pricing for vinyl and mesh banners in the Ashanti region, including factors that affect the final cost.",
      category: "Pricing",
      date: "April 5, 2026",
      image: "https://www.gflesch.com/hubfs/2020_website/images/large_format_printer.jpg",
      alt: "Professional banner printing in Kumasi, Ghana",
      link: "/blog/banner-printing-cost-kumasi"
    },
    {
      title: "Best ways to use stickers for business branding",
      excerpt: "Discover creative ways to use custom stickers and labels to enhance your product packaging and brand visibility in Ghana.",
      category: "Branding",
      date: "March 28, 2026",
      image: "https://customlabels.net/wp-content/uploads/2017/08/business-stickers-4.jpg",
      alt: "Custom product labels and stickers for Ghanaian brands",
      link: "/blog"
    },
    {
      title: "How custom t-shirts help promote your event",
      excerpt: "Learn why branded apparel is essential for events, churches, and schools, and how to choose the right printing method.",
      category: "Marketing",
      date: "March 15, 2026",
      image: "https://i.pinimg.com/1200x/dd/c0/07/ddc00798e5bdf2080c57738cd5aa24f3.jpg",
      alt: "Branded t-shirts for events in Kumasi, Ghana",
      link: "/blog"
    },
    {
      title: "Why shop signage matters for small businesses in Kumasi",
      excerpt: "Explore the impact of professional storefront branding on customer attraction and trust for local retail shops.",
      category: "Business",
      date: "March 02, 2026",
      image: "https://printplanetghana.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-11-at-7.40.11-PM-1-edited.jpeg",
      alt: "Professional shop signage in Kumasi, Ghana",
      link: "/blog"
    },
    {
      title: "How to prepare files for professional printing",
      excerpt: "Essential tips on file formats, resolution, and color modes to ensure your print jobs come out perfect every time.",
      category: "Tips",
      date: "February 20, 2026",
      image: "/images/quality-check.png",
      alt: "Graphic design and file preparation for printing in Ghana",
      link: "/blog"
    }
  ];

  return (
    <div className="min-h-screen bg-mesh">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden px-4">
        {/* HERO BACKGROUND IMAGE: Creative Workspace / Design Tools */}
        <div className="absolute inset-0 z-0">
          <OptimizedImage 
            src="/social-preview.png" 
            alt="ChromInk Printing and Branding Tips Blog" 
            className="w-full h-full object-cover"
            priority
          />
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-brand-black/75 backdrop-blur-[1px]"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase leading-none text-white">
            PRINTING <span className="text-gradient-cyan">& BRANDING</span> TIPS
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Expert advice on **printing in Kumasi**, **branding in Ghana**, and creative **marketing ideas** to help your business stand out.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase">
              Latest <span className="text-brand-cyan">Printing Guides</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Use these practical articles to compare print options, understand pricing, and choose the right branding materials for your Kumasi business or event.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogPosts.map((post, i) => (
              <Link key={i} to={post.link} className="group flex flex-col">
                <div className="aspect-video bg-gray-50 border border-gray-100 mb-8 overflow-hidden relative">
                  <OptimizedImage 
                    src={post.image} 
                    alt={post.alt} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-brand-black/40 transition-colors duration-500"></div>
                  <div className="absolute top-4 left-4 bg-brand-cyan text-white px-3 py-1 text-xs font-black uppercase tracking-widest">
                    {post.category}
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={14} /> 5 min read</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight group-hover:text-brand-cyan transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 font-black text-xs uppercase tracking-widest text-brand-black group-hover:gap-4 transition-all">
                  Read Article <ArrowRight size={14} className="text-brand-cyan" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase">
              Related <span className="text-brand-magenta">Services</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Continue from our blog into the exact ChromInk service pages where you can request pricing, compare options, and place your order.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Banner Printing', link: '/services/banner-printing' },
              { name: 'Business Signage', link: '/services/business-signage' },
              { name: 'T-Shirt Printing', link: '/services/t-shirt-printing' },
            ].map((service, i) => (
              <Link
                key={i}
                to={service.link}
                className="bg-white border border-gray-100 p-8 group hover:border-brand-magenta transition-all"
              >
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 group-hover:text-brand-magenta transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  See service details, examples, and direct quote options for {service.name.toLowerCase()} in Kumasi.
                </p>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                  View Service <ArrowRight size={14} className="text-brand-magenta" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brand-black text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-none tracking-tighter uppercase">
            Need Professional <br /><span className="text-brand-cyan">Printing?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 font-medium">
            From banners to business cards, we provide high-quality branding solutions in Kumasi.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/services" className="btn-primary">VIEW ALL SERVICES</Link>
            <Link to="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-brand-black">GET A QUOTE</Link>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/5 font-black text-[30rem] select-none pointer-events-none uppercase">
          Blog
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
