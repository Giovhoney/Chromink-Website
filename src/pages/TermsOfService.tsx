import React from 'react';
import { Header, Footer } from '../components/Layout';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { ChevronRight } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-brand-black text-white section-padding pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-none tracking-tighter uppercase">
            Terms of <span className="text-brand-cyan">Service</span>
          </h1>
          <p className="text-xl text-gray-300">
            Please read these terms carefully before using ChromInk's printing and branding services.
          </p>
          <p className="text-sm text-gray-400 mt-8">Last Updated: April 2026</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="bg-gray-50 p-8 border-l-4 border-brand-magenta mb-12">
          <h3 className="text-xl font-bold mb-4 uppercase tracking-widest">Table of Contents</h3>
          <ul className="space-y-3 text-gray-700">
            {[
              { title: 'Agreement to Terms', id: 'agreement' },
              { title: 'Use of Services', id: 'use' },
              { title: 'Ordering & Pricing', id: 'ordering' },
              { title: 'Payment Terms', id: 'payment' },
              { title: 'Intellectual Property', id: 'intellectual' },
              { title: 'Warranties & Disclaimers', id: 'warranties' },
              { title: 'Limitation of Liability', id: 'liability' },
              { title: 'Termination', id: 'termination' },
              { title: 'Changes to Terms', id: 'changes' },
            ].map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="flex items-center gap-2 hover:text-brand-magenta transition-colors">
                  <ChevronRight size={18} className="text-brand-magenta" />
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <Reveal>
          <section id="agreement" className="mb-16">
            <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">1. Agreement to Terms</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                By accessing and using ChromInk's website and services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our services.
              </p>
              <p>
                ChromInk reserves the right to modify these terms at any time. Continued use of our services following any changes constitutes your acceptance of the new terms.
              </p>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="use" className="mb-16">
            <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">2. Use of Services</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                ChromInk provides professional printing and branding services in Kumasi, Ghana. You agree to use our services only for lawful purposes and in a way that does not infringe upon the rights of others or restrict their use and enjoyment of our services.
              </p>
              <div>
                <h3 className="text-lg font-bold mb-2 text-brand-black">You agree NOT to:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Submit designs or content that is illegal, offensive, or violates intellectual property rights</li>
                  <li>Use our services for counterfeit, stolen, or unauthorized materials</li>
                  <li>Disrupt or interfere with ChromInk's website or services</li>
                  <li>Use our website for spam, phishing, or other malicious activities</li>
                  <li>Reverse-engineer or attempt to gain unauthorized access to our systems</li>
                </ul>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="ordering" className="mb-16">
            <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">3. Ordering & Pricing</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <div>
                <h3 className="text-lg font-bold mb-2 text-brand-black">Order Process</h3>
                <p>
                  When you request a quote or place an order, you are making an offer to purchase. ChromInk reserves the right to accept or refuse any order. Once your order is confirmed via email or WhatsApp, a binding agreement exists.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-brand-black">Pricing</h3>
                <p>
                  All prices are in Ghana Cedis (GHS) unless otherwise stated. Prices are subject to change without notice. The price you pay is the price quoted at the time of order confirmation.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-brand-black">Design Review</h3>
                <p>
                  ChromInk reserves the right to request design modifications or refuse to print designs that are unclear, contain errors, or may result in poor quality output. Any design changes may impact the final quote and timeline.
                </p>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="payment" className="mb-16">
            <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">4. Payment Terms</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><strong>Payment Required:</strong> Payment in full or as agreed upon is required before production begins</li>
                <li><strong>Accepted Methods:</strong> Mobile money, bank transfer, cash, and card payments (where available)</li>
                <li><strong>Deposits:</strong> For large orders, a deposit may be required, with the balance due before delivery</li>
                <li><strong>Late Payments:</strong> Orders may be cancelled if payment is not received by the agreed date</li>
                <li><strong>Refunds:</strong> Once production has begun, refunds are not available. Cancelled orders before production may be subject to a cancellation fee</li>
              </ul>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="intellectual" className="mb-16">
            <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">5. Intellectual Property Rights</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <div>
                <h3 className="text-lg font-bold mb-2 text-brand-black">Your Content</h3>
                <p>
                  You retain ownership of all designs and content you provide to ChromInk. By submitting designs, you grant ChromInk the right to use them solely for the purpose of fulfilling your order.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-brand-black">ChromInk's Content</h3>
                <p>
                  All website content, logos, designs, graphics, and other materials are the property of ChromInk or our partners. You may not reproduce, distribute, or modify any ChromInk content without permission.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-brand-black">Your Responsibility</h3>
                <p>
                  You are responsible for ensuring that all designs you submit do not infringe on any third-party intellectual property rights (trademarks, copyrights, patents, etc.). ChromInk is not responsible for copyright infringement claims resulting from your designs.
                </p>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="warranties" className="mb-16">
            <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">6. Warranties & Disclaimers</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <div>
                <h3 className="text-lg font-bold mb-2 text-brand-black">Quality Guarantee</h3>
                <p>
                  ChromInk is committed to providing high-quality printing. If you receive a defective product due to our error, we will reprint your order at no additional cost.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-brand-black">Color Variations</h3>
                <p>
                  Screen colors may vary from printed colors due to monitor settings and print technology. We are not responsible for color variations that are within acceptable print industry standards.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-brand-black">Disclaimer</h3>
                <p>
                  ChromInk's services are provided "as is" without any warranties, express or implied. We do not warrant that our services will be uninterrupted, error-free, or meet your specific requirements.
                </p>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="liability" className="mb-16">
            <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">7. Limitation of Liability</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                In no event shall ChromInk be liable for indirect, incidental, special, or consequential damages arising from your use of our services or any products purchased through us, even if we have been advised of the possibility of such damages.
              </p>
              <p>
                Our total liability for any claim shall not exceed the amount you paid for the specific order in question.
              </p>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="termination" className="mb-16">
            <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">8. Termination</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                ChromInk reserves the right to refuse service or terminate any business relationship at our discretion. If you violate these terms, we may cancel your orders and cease providing services.
              </p>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="changes" className="mb-16">
            <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">9. Changes to Terms</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                ChromInk may update these Terms of Service at any time. We will notify you of significant changes via email or by posting the updated terms on our website. Your continued use of our services indicates acceptance of the modified terms.
              </p>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <div className="bg-brand-magenta/10 p-10 border border-brand-magenta text-center">
            <h3 className="text-xl font-bold mb-4 uppercase tracking-widest">Questions About These Terms?</h3>
            <p className="text-gray-700 mb-6">
              If you have questions about our Terms of Service, please contact us at:
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Email:</strong> <a href="mailto:support@chromink.com" className="text-brand-magenta hover:underline">support@chromink.com</a><br />
              <strong>Phone:</strong> <a href="tel:+233593321151" className="text-brand-magenta hover:underline">+233 593 321 151</a>
            </p>
            <Link to="/" className="text-brand-magenta font-bold hover:underline">
              Return to Home
            </Link>
          </div>
        </Reveal>
      </div>

      <Footer />
    </div>
  );
};

export default TermsOfService;
