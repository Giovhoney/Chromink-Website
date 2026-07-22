import React from 'react';
import { Header, Footer } from '../components/Layout';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { ChevronRight } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-brand-black text-white section-padding pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-none tracking-tighter uppercase">
            Privacy <span className="text-brand-cyan">Policy</span>
          </h1>
          <p className="text-xl text-gray-300">
            Your privacy matters to us. Learn how ChromInk collects, uses, and protects your personal information.
          </p>
          <p className="text-sm text-gray-400 mt-8">Last Updated: April 2026</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="bg-gray-50 p-8 border-l-4 border-brand-cyan mb-12">
          <h3 className="text-xl font-bold mb-4 uppercase tracking-widest">Table of Contents</h3>
          <ul className="space-y-3 text-gray-700">
            {[
              { title: 'Information We Collect', id: 'collect' },
              { title: 'How We Use Your Information', id: 'use' },
              { title: 'Cookies & Tracking', id: 'cookies' },
              { title: 'Data Sharing & Third Parties', id: 'sharing' },
              { title: 'Data Security', id: 'security' },
              { title: 'Your Rights', id: 'rights' },
              { title: 'Contact Us', id: 'contact' },
            ].map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="flex items-center gap-2 hover:text-brand-cyan transition-colors">
                  <ChevronRight size={18} className="text-brand-cyan" />
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <Reveal>
          <section id="collect" className="mb-16">
            <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">1. Information We Collect</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <div>
                <h3 className="text-xl font-bold mb-3 text-brand-black">Personal Information You Provide</h3>
                <p>When you request a quote, place an order, or contact ChromInk, we may collect:</p>
                <ul className="list-disc list-inside mt-3 space-y-2 text-gray-600">
                  <li>Name, email address, and phone number</li>
                  <li>Business name and location</li>
                  <li>Delivery address and billing information</li>
                  <li>Design files and project specifications</li>
                  <li>Payment information (processed securely by payment providers)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-brand-black">Information Collected Automatically</h3>
                <p>When you visit our website, we may automatically collect:</p>
                <ul className="list-disc list-inside mt-3 space-y-2 text-gray-600">
                  <li>Browser type and operating system</li>
                  <li>IP address and location data</li>
                  <li>Pages visited and time spent on site</li>
                  <li>Referral source and click behavior</li>
                  <li>Device information (for mobile optimization)</li>
                </ul>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="use" className="mb-16">
            <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">2. How We Use Your Information</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>ChromInk uses your information for:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Processing and fulfilling your print orders</li>
                <li>Providing customer support and responding to inquiries</li>
                <li>Sending order updates and delivery notifications</li>
                <li>Improving our website and services</li>
                <li>Marketing and promotional communications (with your consent)</li>
                <li>Analyzing website traffic and user behavior</li>
                <li>Complying with legal obligations</li>
              </ul>
              <p className="mt-4 pt-4 border-t border-gray-200">
                We do not sell your personal information to third parties. Your data is used solely to serve you better and improve ChromInk's services.
              </p>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="cookies" className="mb-16">
            <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">3. Cookies & Tracking Technologies</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Our website uses cookies to enhance your experience. Cookies are small files stored on your device that help us recognize you and remember your preferences.
              </p>
              <div>
                <h3 className="text-lg font-bold mb-2 text-brand-black">Types of Cookies We Use:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                  <li><strong>Performance Cookies:</strong> Track how visitors use our site</li>
                  <li><strong>Marketing Cookies:</strong> Help us show relevant ads and content</li>
                </ul>
              </div>
              <p>
                You can control cookie settings through your browser preferences. Disabling cookies may affect site functionality.
              </p>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="sharing" className="mb-16">
            <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">4. Data Sharing & Third Parties</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                ChromInk may share your information with trusted third parties only when necessary:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><strong>Payment Processors:</strong> To securely process your payments</li>
                <li><strong>Delivery Partners:</strong> To fulfill and track your orders</li>
                <li><strong>Analytics Providers:</strong> To understand website usage</li>
                <li><strong>Legal Requirements:</strong> When required by law or court order</li>
              </ul>
              <p className="mt-4 pt-4 border-t border-gray-200">
                We require all third parties to maintain strict confidentiality and only use your information as necessary to provide services.
              </p>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="security" className="mb-16">
            <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">5. Data Security</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                ChromInk takes data security seriously. We implement industry-standard security measures to protect your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>SSL encryption for all data transmitted to our servers</li>
                <li>Secure password storage using encryption</li>
                <li>Regular security audits and updates</li>
                <li>Limited access to personal data (staff only as needed)</li>
                <li>Compliance with data protection regulations</li>
              </ul>
              <p className="mt-4 pt-4 border-t border-gray-200">
                While we implement strong security measures, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security against unauthorized access.
              </p>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="rights" className="mb-16">
            <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">6. Your Rights</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Access your personal data that we hold</li>
                <li>Request corrections to inaccurate information</li>
                <li>Request deletion of your data (subject to legal obligations)</li>
                <li>Opt-out of marketing communications</li>
                <li>Request a copy of your data in portable format</li>
              </ul>
              <p className="mt-4 pt-4 border-t border-gray-200">
                To exercise any of these rights, please contact us at the details provided below.
              </p>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="contact" className="mb-16 bg-gray-50 p-10 border border-gray-200">
            <h2 className="text-2xl font-black mb-6 uppercase tracking-tight">7. Contact Us About Privacy</h2>
            <p className="text-gray-700 mb-6">
              If you have questions about this Privacy Policy or how ChromInk handles your data, please contact us:
            </p>
            <div className="space-y-3 text-gray-700">
              <p><strong>Email:</strong> <a href="mailto:privacy@chromink.com" className="text-brand-cyan hover:underline">privacy@chromink.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:+233593321151" className="text-brand-cyan hover:underline">+233 593 321 151</a></p>
              <p><strong>Location:</strong> Kumasi, Ashanti Region, Ghana</p>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <div className="bg-brand-cyan/10 p-10 border border-brand-cyan text-center">
            <p className="text-gray-700 mb-4">
              This Privacy Policy may be updated periodically to reflect changes in our practices or applicable laws.
            </p>
            <Link to="/" className="text-brand-cyan font-bold hover:underline">
              Return to Home
            </Link>
          </div>
        </Reveal>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
