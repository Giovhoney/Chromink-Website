import React from 'react';
import { Header, Footer } from '../components/Layout';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, ChevronRight, MessageCircle } from 'lucide-react';

const FilePreparationBlog = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <article className="relative">
        {/* Hero Header */}
        <div className="bg-brand-black text-white section-padding pt-32 pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-brand-cyan mb-8">
              <span className="bg-brand-cyan text-white px-3 py-1">Tips</span>
              <span className="flex items-center gap-1"><Calendar size={14} /> February 20, 2026</span>
              <span className="flex items-center gap-1"><Clock size={14} /> 9 min read</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter uppercase">
              How to Prepare <br />
              <span className="text-brand-cyan">Files for Professional</span> <br />
              Printing
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed">
              Essential technical guidelines to ensure your designs print perfectly every time. Master resolution, color modes, and file formats.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-20 py-20">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="prose prose-xl prose-slate max-w-none">
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                One of the most common reasons print jobs disappoint is improper file preparation. You've got a brilliant design, you've sent it to a printer, but when you receive the finished product, the quality isn't what you expected—colors look dull, text appears blurry, or details are lost. This doesn't happen because printers aren't capable. It happens because guidelines weren't followed during file setup. At ChromInk, we help clients prevent these issues by understanding the technical requirements before printing begins. This guide covers everything Kumasi business owners need to know about preparing files for professional printing.
              </p>

              {/* Table of Contents */}
              <div className="bg-gray-50 p-10 border-l-4 border-brand-cyan mb-16">
                <h2 className="text-xl font-black mb-6 uppercase tracking-widest">In this guide:</h2>
                <ul className="space-y-4 font-bold text-gray-800">
                  <li><a href="#resolution" className="flex items-center gap-2 hover:text-brand-cyan transition-colors"><ChevronRight size={18} className="text-brand-cyan" /> Resolution & DPI</a></li>
                  <li><a href="#color-modes" className="flex items-center gap-2 hover:text-brand-cyan transition-colors"><ChevronRight size={18} className="text-brand-cyan" /> Color Modes & Profiles</a></li>
                  <li><a href="#file-formats" className="flex items-center gap-2 hover:text-brand-cyan transition-colors"><ChevronRight size={18} className="text-brand-cyan" /> File Formats & Fonts</a></li>
                  <li><a href="#specifications" className="flex items-center gap-2 hover:text-brand-cyan transition-colors"><ChevronRight size={18} className="text-brand-cyan" /> Size Specifications & Bleeds</a></li>
                </ul>
              </div>

              <section id="resolution" className="mb-20">
                <h2 className="text-3xl md:text-4xl font-black mb-8 uppercase tracking-tight">1. Resolution & DPI (Dots Per Inch)</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  This is the most critical technical requirement. DPI is the number of individual dots of ink your printer deposits per inch. Higher DPI means sharper, more detailed prints.
                </p>
                <div className="space-y-10">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight text-brand-magenta">DPI Requirements by Print Type</h3>
                    <div className="bg-gray-100 p-8 rounded-lg space-y-4">
                      <div>
                        <p className="font-bold text-brand-black text-lg">📋 Small Items (Business Cards, Stickers)</p>
                        <p className="text-gray-700 mt-2">Minimum 300 DPI. At this resolution, even tiny text remains crisp and legible.</p>
                      </div>
                      <div>
                        <p className="font-bold text-brand-black text-lg">📊 Standard Prints (Flyers, Brochures, T-Shirts)</p>
                        <p className="text-gray-700 mt-2">300 DPI minimum. This is print industry standard for photo-quality results.</p>
                      </div>
                      <div>
                        <p className="font-bold text-brand-black text-lg">🎌 Large Format (Banners, Signage)</p>
                        <p className="text-gray-700 mt-2">150-200 DPI acceptable. Viewers stand farther away, so lower resolution is acceptable. Going too high wastes file size unnecessarily.</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight text-brand-magenta">Checking Your File's Resolution</h3>
                    <p className="text-gray-600 leading-relaxed">In design software (Photoshop, Illustrator, Canva), go to Image → Image Size (Photoshop) or check document properties. You'll see pixel dimensions and current DPI. <strong>Never upscale by increasing DPI on a low-resolution file</strong>—this doesn't add detail, just blurs the existing pixels. If your file is too low resolution, start from scratch or use a higher-resolution source image.</p>
                  </div>
                </div>
              </section>

              <section id="color-modes" className="mb-20">
                <h2 className="text-3xl md:text-4xl font-black mb-8 uppercase tracking-tight">2. Color Modes & Color Profiles</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Color mode determines how colors are defined and printed. Using the wrong mode causes color shifts—reds become oranges, blues become purples.
                </p>
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="p-8 bg-gray-50 border border-gray-100">
                    <h4 className="font-black text-xl mb-4 uppercase tracking-tight text-brand-cyan">RGB (Red, Green, Blue)</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Used for screen displays. Do NOT submit RGB files to print—colors will be unpredictable. Always convert to CMYK before printing.</p>
                  </div>
                  <div className="p-8 bg-gray-50 border border-gray-100">
                    <h4 className="font-black text-xl mb-4 uppercase tracking-tight text-brand-cyan">CMYK (Cyan, Magenta, Yellow, Black)</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">The standard for professional printing. It represents the four inks used in offset and digital printing. Always use CMYK for print files.</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight text-brand-magenta">Converting to CMYK</h3>
                  <p className="text-gray-600 leading-relaxed">
                    <strong className="text-brand-black">Photoshop:</strong> Image → Mode → CMYK Color. <br />
                    <strong className="text-brand-black">Illustrator:</strong> File → Document Color Mode → CMYK. <br />
                    <strong className="text-brand-black">Pro Tip:</strong> When converting RGB to CMYK, colors may shift slightly. Review your design after conversion and adjust as needed. This is normal and expected.
                  </p>
                </div>
              </section>

              <section id="file-formats" className="mb-20">
                <h2 className="text-3xl md:text-4xl font-black mb-8 uppercase tracking-tight">3. File Formats & Fonts</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  The wrong file format can cause compatibility issues, font substitution, and compromised quality.
                </p>
                <div className="space-y-10">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight text-brand-magenta">Recommended File Formats</h3>
                    <ul className="space-y-4 text-gray-600 leading-relaxed">
                      <li className="flex gap-4">
                        <span className="text-brand-cyan font-black text-2xl">✓</span>
                        <div>
                          <strong className="text-brand-black">PDF (Preferred)</strong> <br />
                          Maintains formatting, fonts, and colors consistently. Use "Print to PDF" with CMYK color settings for best results.
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <span className="text-brand-cyan font-black text-2xl">✓</span>
                        <div>
                          <strong className="text-brand-black">AI (Adobe Illustrator)</strong> <br />
                          Ideal for vector graphics. Fonts remain editable and scalable without quality loss.
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <span className="text-brand-cyan font-black text-2xl">✓</span>
                        <div>
                          <strong className="text-brand-black">PSD (Photoshop)</strong> <br />
                          Good for raster images. Ensure all layers are flattened before submitting for print.
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <span className="text-brand-yellow font-black text-2xl">⚠</span>
                        <div>
                          <strong className="text-brand-black">AVOID:</strong> JPG (compresses quality), PNG (may have transparency issues), Word documents (font issues common)
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight text-brand-magenta">Font Handling—Critical!</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      A common issue: You design with fonts installed on your computer, but the printer's system doesn't have those fonts. Result? Text gets substituted with generic fonts, ruining your design.
                    </p>
                    <div className="bg-brand-magenta/10 p-6 border border-brand-magenta">
                      <p className="font-bold text-brand-black mb-3">Solutions:</p>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• <strong>Outline/Convert fonts to curves:</strong> Locks fonts permanently into your design. Once converted, fonts cannot be edited but will always display correctly.</li>
                        <li>• <strong>Use web-safe fonts:</strong> Arial, Times New Roman, Helvetica are universally installed.</li>
                        <li>• <strong>Submit fonts separately:</strong> Provide font files with your design files so the printer can install them.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section id="specifications" className="mb-20">
                <h2 className="text-3xl md:text-4xl font-black mb-8 uppercase tracking-tight">4. Size Specifications & Bleeds</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Incorrect sizing causes your design to be either too small or trimmed incorrectly. Understanding bleeds prevents unwanted white borders.
                </p>
                <div className="space-y-10">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight text-brand-magenta">What Are Bleeds?</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      A bleed is extra space beyond your final print size that accounts for cutting tolerance. When designing a business card meant to be 3.5" x 2", you actually design at 3.75" x 2.25" (0.125" extra on all sides). This ensures that if the cutter is slightly off, colored backgrounds extend to the edge rather than leaving white gaps.
                    </p>
                    <div className="bg-gray-100 p-6">
                      <p className="font-bold text-brand-black text-sm mb-3">Typical Bleed Requirements:</p>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• <strong>Business cards, stickers, flyers:</strong> 0.125" (3mm) bleed on all sides</li>
                        <li>• <strong>Banners, large format:</strong> 0.5" - 1" bleed (varies by print method)</li>
                        <li>• <strong>T-shirts:</strong> Typically no bleed needed (printed directly on garment)</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight text-brand-magenta">Safe Zone & Critical Content</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Your critical content (text, logos) must stay 0.25" (6mm) away from the edge. Even with bleeds, cutting can be slightly imprecise, so important elements need safety margin.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mt-20 pt-20 border-t-4 border-gray-100">
                <h2 className="text-3xl md:text-4xl font-black mb-8 uppercase tracking-tight">Quick Checklist Before Submitting Files</h2>
                <div className="bg-brand-cyan/10 p-10 border border-brand-cyan">
                  <ul className="space-y-4 text-gray-700 font-medium">
                    <li className="flex gap-3"><span className="text-brand-cyan font-black">☑</span> Resolution is 300 DPI minimum (150 DPI acceptable for large format)</li>
                    <li className="flex gap-3"><span className="text-brand-cyan font-black">☑</span> Color mode is CMYK (not RGB)</li>
                    <li className="flex gap-3"><span className="text-brand-cyan font-black">☑</span> File format is PDF or native (AI/PSD) with all fonts outlined</li>
                    <li className="flex gap-3"><span className="text-brand-cyan font-black">☑</span> Dimensions match your final print size</li>
                    <li className="flex gap-3"><span className="text-brand-cyan font-black">☑</span> Bleeds are included where applicable</li>
                    <li className="flex gap-3"><span className="text-brand-cyan font-black">☑</span> Critical content is 0.25" inside the safe zone</li>
                    <li className="flex gap-3"><span className="text-brand-cyan font-black">☑</span> Colors look correct when printed to PDF</li>
                  </ul>
                </div>
              </section>

              <p className="text-lg text-gray-600 leading-relaxed mt-12">
                Proper file preparation is the difference between beautiful, professional prints and disappointing results. These guidelines might seem technical, but they're industry-standard for a reason—they prevent costly reprints and ensure every ChromInk project meets our high quality standards. When in doubt, reach out—our team is happy to review your files and suggest improvements before printing begins.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-12">
              {/* CTA Card */}
              <div className="bg-brand-magenta p-10 text-white relative overflow-hidden">
                <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter leading-none relative z-10">Get File <br />Help</h3>
                <p className="mb-8 font-medium relative z-10">Unsure about your file? Send it to us for a free technical review before printing.</p>
                <Link to="/contact" className="btn-primary w-full relative z-10 bg-white text-brand-black hover:bg-gray-100">REQUEST REVIEW</Link>
                <div className="absolute -right-10 -bottom-10 text-white/5 font-black text-9xl select-none">
                  FILE
                </div>
              </div>

              {/* Related Services */}
              <div>
                <h3 className="text-xl font-black mb-8 uppercase tracking-widest border-b-4 border-brand-magenta inline-block">Related Services</h3>
                <ul className="space-y-4">
                  {[
                    { name: "Professional Design", link: "/services/custom-printing" },
                    { name: "Quality Control", link: "/services" },
                    { name: "Visit Our Store", link: "/store" }
                  ].map((service, i) => (
                    <li key={i}>
                      <Link to={service.link} className="flex items-center justify-between group p-4 border border-gray-100 hover:border-brand-magenta transition-all">
                        <span className="font-bold uppercase tracking-tight group-hover:text-brand-magenta transition-colors">{service.name}</span>
                        <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* FAQ Section */}
      <section id="faq" className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black mb-16 tracking-tighter uppercase text-center">File Preparation FAQ</h2>
          <div className="space-y-6">
            {[
              { q: "What if my file is RGB instead of CMYK? Can you convert it?", a: "Yes, but quality may shift. We can convert it, but we recommend you do it in your design software first to preview color changes. This prevents surprises." },
              { q: "Can I use files from online design tools like Canva?", a: "Yes! Canva files can be exported as PDF. Make sure to use the 'Print Quality' export option and verify DPI settings before sending." },
              { q: "What if I don't know the original file's DPI?", a: "For professional results, recreate the design at the proper DPI. Attempting to print low-resolution files always results in poor quality." },
              { q: "Do I need to do anything special for large format printing?", a: "Large format (banners, signage) can use 150 DPI since viewers stand farther away. Still include bleeds and use CMYK color mode." }
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
          <MessageCircle className="mx-auto mb-8" size={48} />
          <h2 className="text-4xl md:text-7xl font-black mb-8 leading-none tracking-tighter uppercase">
            Ready to Print <br />Perfectly?
          </h2>
          <p className="text-xl text-brand-black/70 mb-12 font-medium">
            We'll review your files and ensure professional quality from design to finished print.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="https://wa.me/233593321151" target="_blank" rel="noopener noreferrer" className="bg-brand-black text-white px-12 py-6 font-black text-xl uppercase tracking-widest hover:scale-105 transition-transform">
              WhatsApp Us Now
            </a>
            <Link to="/contact" className="bg-white text-brand-cyan px-12 py-6 font-black text-xl uppercase tracking-widest hover:scale-105 transition-transform">
              Send Your Files
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FilePreparationBlog;
