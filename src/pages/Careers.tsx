import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Header, Footer } from '../components/Layout';
import { Reveal } from '../components/Reveal';
import OptimizedImage from '../components/OptimizedImage';
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock3,
  PenTool,
  MapPin,
  MessageCircle,
  Monitor,
  Route,
  Send,
  Users,
} from 'lucide-react';

const jobs = [
  {
    title: 'Large Format Operator',
    type: 'Full-Time',
    location: 'Asokore Mampong or nearby areas',
    icon: <Monitor className="text-brand-cyan" size={24} />,
    summary:
      'We are looking for a reliable large format operator who can run production confidently, maintain print quality, troubleshoot common machine issues, and support the wider team when needed.',
    responsibilities: [
      'Operate and monitor large format printers for banners, backdrops, posters, stickers, and branding jobs.',
      'Troubleshoot common printer issues quickly to reduce downtime and keep production moving.',
      'Check colors, alignment, finishing, and output quality before jobs are released to customers.',
      'Organize files, communicate clearly with designers and front-desk staff, and keep production records tidy.',
      'Support other production or finishing tasks when workload shifts across departments.',
    ],
    requirements: [
      'Must live around Asokore Mampong or nearby areas for dependable access to work.',
      'Hands-on experience operating and troubleshooting large format printers.',
      'Comfortable using computers for print setup, file handling, and basic production workflows.',
      'Fast learner with a practical attitude and willingness to take on additional responsibilities when needed.',
      'Strong focus on customer satisfaction, consistency, and clean final output.',
    ],
    benefits: [
      'Competitive salary, with performance-based bonuses where applicable.',
      'Paid vacation in line with company policy and role expectations.',
      'Career advancement support when the company identifies a strong growth path for the employee.',
    ],
  },
  {
    title: 'Sales and Marketing Strategist',
    type: 'Hybrid',
    location: 'Kumasi',
    icon: <Users className="text-brand-magenta" size={24} />,
    summary:
      'ChromInk needs a growth-minded sales person who can build relationships, convert inquiries into jobs, and help grow our digital presence across social media and customer channels.',
    responsibilities: [
      'Follow up on leads, prepare simple quotations, and help close printing and branding jobs for businesses and individuals.',
      'Manage and grow ChromInk social media accounts with consistent posting, audience engagement, and campaign support.',
      'Help increase followers, subscribers, and inbound inquiries across WhatsApp, Instagram, Facebook, TikTok, and related channels.',
      'Communicate professionally with customers, understand project needs, and guide them toward the right service.',
      'Work with the team on promotions, seasonal offers, partnerships, and outreach opportunities in Kumasi.',
    ],
    requirements: [
      'Must be based in Kumasi and able to work in a hybrid setup.',
      'Strong customer communication and relationship-building skills.',
      'Good understanding of social media management, audience growth, and content coordination.',
      'Confident using phones, messaging apps, email, and basic computer tools for sales follow-up.',
      'Self-driven, organized, and comfortable balancing both online engagement and direct sales support.',
    ],
    benefits: [
      'Competitive salary plus commissions and performance bonuses tied to results.',
      'Paid vacation in line with company policy and role expectations.',
      'Career advancement support when the company identifies a strong growth path for the employee.',
    ],
  },
  {
    title: 'Graphics Designer',
    type: 'Full-Time',
    location: 'Kumasi',
    icon: <PenTool className="text-brand-cyan" size={24} />,
    summary:
      'We are looking for a creative graphics designer who can turn customer ideas into clean, effective branding materials that are ready for production across print, signage, and digital promotion.',
    responsibilities: [
      'Design banners, flyers, posters, stickers, social media artwork, signage layouts, and other branded materials for ChromInk customers.',
      'Translate rough ideas into clear visual concepts that match customer goals and business branding needs.',
      'Prepare files properly for print production, including size setup, export standards, and layout consistency.',
      'Collaborate with sales, production, and customer service teams to keep projects moving smoothly.',
      'Support urgent revisions, customer feedback, and internal creative tasks when needed.',
    ],
    requirements: [
      'Must have a promising portfolio that shows good design thinking, layout ability, and branding work.',
      'Strong practical skills in graphic design software and file preparation for print-ready output.',
      'Good understanding of typography, color use, spacing, and visual hierarchy.',
      'Able to take feedback professionally, improve work quickly, and keep up with fast project timelines.',
      'Comfortable working on both customer jobs and internal marketing materials when required.',
    ],
    benefits: [
      'Competitive salary, with bonuses tied to quality work and contribution to team output.',
      'Paid vacation in line with company policy and role expectations.',
      'Career advancement support when the company identifies a strong growth path for the employee.',
    ],
  },
  {
    title: 'Customer Service Representative',
    type: 'Full-Time',
    location: 'Kumasi',
    icon: <MessageCircle className="text-brand-yellow" size={24} />,
    summary:
      'ChromInk is looking for a calm, organized customer service representative who can handle front-line communication professionally, support order intake, and help customers feel informed and confident at every stage.',
    responsibilities: [
      'Receive customer orders clearly and capture the right details before handing jobs into the production flow.',
      'Answer business calls promptly, respond to customer questions professionally, and give immediate guidance where possible.',
      'Direct incoming calls, requests, and issues to the appropriate department when technical, production, or management support is needed.',
      'Handle customer non-conformance, complaints, and service concerns with patience, good judgment, and proper follow-up.',
      'Keep customers updated on order progress, timelines, revisions, and delivery arrangements so expectations stay clear.',
    ],
    requirements: [
      'Strong customer communication skills with the ability to stay calm, respectful, and solutions-focused under pressure.',
      'Good business sense, professional tolerance, and the maturity to manage difficult customer situations properly.',
      'Able to take accurate orders, document customer requests clearly, and reduce avoidable mistakes in the workflow.',
      'Comfortable answering calls, using WhatsApp, email, and basic computer tools for customer support and internal coordination.',
      'Capable of serving as an immediate adviser to customers by explaining service options, timelines, and the next best step.',
    ],
    benefits: [
      'Competitive salary, with performance-based bonuses tied to service quality and team contribution.',
      'Paid vacation in line with company policy and role expectations.',
      'Career advancement support when the company identifies a strong growth path for the employee.',
    ],
  },
  {
    title: 'Delivery Person',
    type: 'Full-Time',
    location: 'Kumasi and surrounding areas',
    icon: <Route className="text-brand-yellow" size={24} />,
    summary:
      'We are hiring a dependable delivery rider who can move completed jobs safely, represent ChromInk professionally, and manage routes with good time awareness.',
    responsibilities: [
      'Deliver completed print jobs to customers safely and on time across Kumasi and nearby areas.',
      'Plan daily delivery routes efficiently and communicate proactively about timing or delays.',
      'Confirm drop-offs properly and help maintain a professional customer handover experience.',
      'Handle printed materials carefully to avoid damage during transport.',
      'Support occasional pickup errands, supplier runs, or simple operational tasks when required.',
    ],
    requirements: [
      'Must have a valid motorcycle license.',
      'Should live within the surrounding area for reliable availability.',
      'Strong time management and route planning skills.',
      'Responsible, trustworthy, and able to represent the business well during customer interactions.',
      'Able to work with urgency while still handling materials carefully and professionally.',
    ],
    benefits: [
      'Competitive salary, with bonuses tied to reliability and strong service delivery.',
      'Paid vacation in line with company policy and role expectations.',
      'Career advancement support when the company identifies a strong growth path for the employee.',
    ],
  },
];

const slugifyJobTitle = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const getJobBySlug = (slug: string | null) =>
  jobs.find((job) => slugifyJobTitle(job.title) === slug);

const Careers = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedFromUrl = getJobBySlug(searchParams.get('role'));
  const [openJob, setOpenJob] = useState(selectedFromUrl?.title ?? jobs[0].title);

  React.useEffect(() => {
    if (selectedFromUrl && selectedFromUrl.title !== openJob) {
      setOpenJob(selectedFromUrl.title);
    }
  }, [selectedFromUrl, openJob]);

  const setActiveJob = (title: string) => {
    if (openJob === title) {
      setOpenJob('');
      setSearchParams({});
      return;
    }

    setOpenJob(title);
    setSearchParams({ role: slugifyJobTitle(title) });
  };

  return (
    <div className="min-h-screen bg-mesh">
      <Header />

      <section className="relative min-h-[62vh] flex items-center overflow-hidden px-4">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/images/about-story.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-brand-black/75 backdrop-blur-[1px]"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto text-center relative z-10 w-full">
          <div className="inline-flex items-center gap-2 bg-brand-cyan/15 border border-brand-cyan/30 text-brand-cyan px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8">
            <Briefcase size={14} />
            Join the ChromInk team
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase leading-none text-white">
            CAREERS AT <span className="text-gradient-cyan">CHROMINK</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            We are building a reliable, ambitious printing and branding team in Kumasi. If you care about quality work, customer satisfaction, and steady growth, we would love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:Print@chromink.co?cc=Caleb@chromink.co&subject=ChromInk%20Career%20Application"
              className="btn-primary flex items-center justify-center gap-2"
            >
              SEND YOUR CV <Send size={18} />
            </a>
            <Link
              to="/contact"
              className="btn-secondary border-white text-white hover:bg-white hover:text-brand-black"
            >
              CONTACT CHROMINK
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="max-w-3xl mb-14">
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase">
                Open <span className="text-brand-magenta">Positions</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                These roles are designed for people who can work with professionalism, move quickly, and help ChromInk deliver strong customer experiences every day.
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
            className="space-y-8"
          >
            {jobs.map((job) => {
              const isOpen = openJob === job.title;

              return (
                <motion.div
                  key={job.title}
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="bg-gray-50 border border-gray-100 shadow-sm overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setActiveJob(job.title)}
                    className={`w-full text-left p-8 md:p-10 transition-colors ${
                      isOpen ? 'bg-brand-black text-white' : 'hover:bg-gray-100/70'
                    }`}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div
                            className={`w-12 h-12 flex items-center justify-center border ${
                              isOpen ? 'bg-white border-white text-brand-black' : 'bg-white border-gray-100'
                            }`}
                          >
                            {job.icon}
                          </div>
                          <div className="flex flex-wrap gap-3 text-xs font-black uppercase tracking-widest">
                            <span
                              className={`px-3 py-2 ${
                                isOpen ? 'bg-brand-cyan text-brand-black' : 'bg-brand-black text-white'
                              }`}
                            >
                              {job.type}
                            </span>
                            <span
                              className={`px-3 py-2 border ${
                                isOpen
                                  ? 'border-white/20 text-gray-300'
                                  : 'bg-white border-gray-100 text-gray-600'
                              }`}
                            >
                              {job.location}
                            </span>
                          </div>
                        </div>
                        <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-4">
                          {job.title}
                        </h3>
                        <p className={`text-lg leading-relaxed max-w-3xl ${isOpen ? 'text-gray-300' : 'text-gray-600'}`}>
                          {job.summary}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest shrink-0">
                        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        <span>{isOpen ? 'Hide Details' : 'View More'}</span>
                      </div>
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="p-8 md:p-10 grid lg:grid-cols-2 gap-12 border-t border-gray-100 bg-white">
                        <div>
                          <div className="flex items-center gap-3 mb-6">
                            <CheckCircle2 className="text-brand-cyan" size={22} />
                            <h4 className="text-xl font-bold uppercase tracking-tight">Key Responsibilities</h4>
                          </div>
                          <div className="space-y-4">
                            {job.responsibilities.map((item) => (
                              <div key={item} className="flex gap-3 text-gray-600 leading-relaxed">
                                <CheckCircle2 className="text-brand-cyan shrink-0 mt-1" size={18} />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center gap-3 mb-6">
                            <Clock3 className="text-brand-magenta" size={22} />
                            <h4 className="text-xl font-bold uppercase tracking-tight">Requirements</h4>
                          </div>
                          <div className="space-y-4">
                            {job.requirements.map((item) => (
                              <div key={item} className="flex gap-3 text-gray-600 leading-relaxed">
                                <CheckCircle2 className="text-brand-magenta shrink-0 mt-1" size={18} />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="px-8 md:px-10 pb-8 md:pb-10 bg-white">
                        <div className="border border-gray-100 bg-gray-50 p-8">
                          <div className="flex items-center gap-3 mb-6">
                            <Briefcase className="text-brand-yellow" size={22} />
                            <h4 className="text-xl font-bold uppercase tracking-tight">Benefits</h4>
                          </div>
                          <div className="grid md:grid-cols-3 gap-5">
                            {job.benefits.map((item) => (
                              <div key={item} className="flex gap-3 text-gray-600 leading-relaxed">
                                <CheckCircle2 className="text-brand-yellow shrink-0 mt-1" size={18} />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-brand-black text-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter uppercase">
                Why Work With <span className="text-brand-cyan">ChromInk</span>
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Growing local brand',
                    desc: 'Join a business that is actively expanding its printing, branding, and customer service reach across Kumasi.',
                  },
                  {
                    title: 'Hands-on learning',
                    desc: 'You will gain practical experience in production, communication, quality control, and day-to-day business operations.',
                  },
                  {
                    title: 'Customer-focused culture',
                    desc: 'We care about speed, quality, professionalism, and making sure every customer leaves satisfied.',
                  },
                  {
                    title: 'Room to grow',
                    desc: 'We value people who learn quickly, take initiative, and are willing to support where the business needs them most.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <CheckCircle2 className="text-brand-cyan shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="text-xl font-bold uppercase tracking-tight mb-2">{item.title}</h4>
                      <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="bg-white text-brand-black p-8 md:p-10 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="text-brand-magenta" size={24} />
                <h3 className="text-2xl font-black uppercase tracking-tight">How to Apply</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Interested candidates should send their resume and a short introduction stating the role they are applying for.
              </p>
              <div className="space-y-4 mb-8">
                <a
                  href="mailto:Print@chromink.co"
                  className="block border border-gray-100 px-5 py-4 font-bold hover:border-brand-cyan hover:text-brand-cyan transition-colors"
                >
                  Print@chromink.co
                </a>
                <a
                  href="mailto:Caleb@chromink.co"
                  className="block border border-gray-100 px-5 py-4 font-bold hover:border-brand-cyan hover:text-brand-cyan transition-colors"
                >
                  Caleb@chromink.co
                </a>
              </div>
              <div className="bg-gray-50 border border-gray-100 p-6">
                <h4 className="font-bold uppercase tracking-tight mb-3">Helpful Application Notes</h4>
                <div className="space-y-3 text-gray-600 leading-relaxed">
                  <p>Include the role title in your email subject line.</p>
                  <p>Add your location, phone number, and a short note about your relevant experience.</p>
                  <p>Applicants who are available promptly and clearly match the role requirements will be prioritized.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-brand-cyan text-brand-black text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <Reveal>
            <>
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-none tracking-tighter uppercase">
                Ready to Build Something <br />
                Bigger With Us?
              </h2>
              <p className="text-xl text-brand-black/70 mb-12 font-medium">
                If you are serious about quality work, customer service, and growth, we would love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="mailto:Print@chromink.co?cc=Caleb@chromink.co&subject=ChromInk%20Career%20Application"
                  className="bg-brand-black text-white px-12 py-6 font-black text-xl uppercase tracking-widest hover:scale-105 transition-transform"
                >
                  APPLY BY EMAIL
                </a>
                <Link
                  to="/about"
                  className="bg-white text-brand-black px-12 py-6 font-black text-xl uppercase tracking-widest hover:scale-105 transition-transform flex items-center justify-center gap-2"
                >
                  LEARN ABOUT CHROMINK <ArrowRight size={18} />
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

export default Careers;
