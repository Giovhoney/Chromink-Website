import fs from 'node:fs';
import path from 'node:path';

const SITE_URL = 'https://chromink.co';
const distDir = path.resolve('dist');
const templatePath = path.join(distDir, 'index.html');
const buildDate = new Date().toISOString();

const routeMetadata = {
  '/': {
    title: 'ChromInk | Professional Printing & Branding Services in Kumasi',
    description:
      'ChromInk offers professional printing services in Kumasi, Ghana, including banner printing, business signage, t-shirt branding, vehicle branding, and custom printing.',
    keywords:
      'printing services in Kumasi, banner printing Kumasi, branding company Kumasi, business signage Kumasi, ChromInk Ghana',
    image: `${SITE_URL}/images/service-banner.png`,
    imageAlt: 'ChromInk professional printing studio in Kumasi',
    type: 'website',
    breadcrumbs: [{ name: 'Home', path: '/' }],
  },
  '/about': {
    title: 'About ChromInk | Printing & Branding Experts in Kumasi',
    description:
      'Learn about ChromInk, a Kumasi printing and branding company helping businesses, churches, schools, and events with premium print solutions.',
    keywords:
      'about ChromInk, printing company Kumasi, branding experts Kumasi, local printing business Ghana',
    image: `${SITE_URL}/images/about-story.png`,
    imageAlt: 'ChromInk printing and branding team in Kumasi',
    type: 'website',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
    ],
  },
  '/careers': {
    title: 'Careers at ChromInk | Printing and Branding Jobs in Kumasi',
    description:
      'Apply for careers at ChromInk in Kumasi, including roles in large format printing, sales and social media growth, and delivery operations.',
    keywords:
      'ChromInk careers, printing jobs Kumasi, large format operator Kumasi, sales job Kumasi, delivery rider job Kumasi',
    image: `${SITE_URL}/images/hero-printer.png`,
    imageAlt: 'Careers and team opportunities at ChromInk in Kumasi',
    type: 'website',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Careers', path: '/careers' },
    ],
  },
  '/contact': {
    title: 'Contact ChromInk | Get a Printing Quote in Kumasi',
    description:
      'Contact ChromInk in Kumasi for fast quotes on banner printing, signage, t-shirt printing, vehicle branding, document printing, and custom orders.',
    keywords:
      'contact ChromInk, printing quote Kumasi, branding quote Ghana, Kumasi printing contact',
    image: `${SITE_URL}/images/whatsapp/9.jpeg`,
    imageAlt: 'Contact ChromInk for printing and branding in Kumasi',
    type: 'website',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Contact', path: '/contact' },
    ],
  },
  '/blog': {
    title: 'ChromInk Blog | Printing Tips, Branding Ideas, and Pricing Guides',
    description:
      'Read ChromInk blog posts for printing tips in Kumasi, branding ideas for Ghanaian businesses, and practical guides on print pricing and file preparation.',
    keywords:
      'printing tips Kumasi, branding ideas Ghana, print pricing guide Kumasi, ChromInk blog',
    image: `${SITE_URL}/images/service-banner.png`,
    imageAlt: 'ChromInk blog for printing and branding tips',
    type: 'blog',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
    ],
  },
  '/blog/banner-printing-cost-kumasi': {
    title: 'How Much Does Banner Printing Cost in Kumasi? | ChromInk',
    description:
      'Discover what affects banner printing costs in Kumasi, including size, material, finishing, and design support, with practical advice for local businesses and events.',
    keywords:
      'banner printing cost Kumasi, banner prices Ghana, vinyl banner printing Kumasi, event banner cost Kumasi',
    image: `${SITE_URL}/images/banner-sample.png`,
    imageAlt: 'Banner printing cost guide in Kumasi',
    type: 'article',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
      {
        name: 'How Much Does Banner Printing Cost in Kumasi?',
        path: '/blog/banner-printing-cost-kumasi',
      },
    ],
    article: {
      publishedTime: '2026-04-05T08:00:00+00:00',
      modifiedTime: '2026-04-05T08:00:00+00:00',
      section: 'Pricing Guide',
      tags: ['Banner Printing', 'Pricing', 'Kumasi', 'Marketing'],
    },
  },
  '/blog/birthday-present-ideas': {
    title: 'Birthday Present Ideas in Kumasi | Personalized Gift Ideas by ChromInk',
    description:
      'Explore birthday present ideas in Kumasi, including personalized t-shirts, mugs, picture frames, and keepsake gifts designed by ChromInk.',
    keywords:
      'birthday present ideas Kumasi, personalized gifts Kumasi, birthday gift printing Ghana, custom birthday gifts Kumasi',
    image: `${SITE_URL}/images/present2.jpg`,
    imageAlt: 'Personalized birthday present ideas by ChromInk in Kumasi',
    type: 'article',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
      { name: 'Birthday Present Ideas', path: '/blog/birthday-present-ideas' },
    ],
    article: {
      publishedTime: '2026-04-16T10:00:00+00:00',
      modifiedTime: '2026-04-16T10:00:00+00:00',
      section: 'Gift Ideas',
      tags: ['Birthday Gifts', 'Personalized Gifts', 'Kumasi', 'Presents'],
    },
  },
  '/blog/sticker-branding': {
    title: 'Sticker Branding & Labels in Kumasi | Design, Printing, and Tips',
    description:
      'Learn effective sticker branding strategies for Kumasi businesses, including label design tips, durability, and how to create memorable brand stickers.',
    keywords:
      'sticker branding Kumasi, vinyl stickers Ghana, product labels Kumasi, branding with stickers',
    image: `${SITE_URL}/images/sticker-sample.png`,
    imageAlt: 'Sticker branding and label design for Kumasi businesses',
    type: 'article',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
      { name: 'Sticker Branding & Labels', path: '/blog/sticker-branding' },
    ],
    article: {
      publishedTime: '2026-04-10T10:00:00+00:00',
      modifiedTime: '2026-04-10T10:00:00+00:00',
      section: 'Branding Guide',
      tags: ['Stickers', 'Branding', 'Labels', 'Design'],
    },
  },
  '/blog/custom-tshirts-events': {
    title: 'Custom T-Shirts for Events in Kumasi | Design and Ordering Guide',
    description:
      'Plan custom t-shirt printing for your Kumasi event with design tips, turnaround times, bulk pricing, and how to order branded apparel.',
    keywords:
      'event t-shirts Kumasi, custom apparel Ghana, branded uniforms Kumasi, t-shirt printing for events',
    image: `${SITE_URL}/images/tshirt-sample.png`,
    imageAlt: 'Custom branded t-shirts for events in Kumasi',
    type: 'article',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
      { name: 'Custom T-Shirts for Events', path: '/blog/custom-tshirts-events' },
    ],
    article: {
      publishedTime: '2026-04-11T10:00:00+00:00',
      modifiedTime: '2026-04-11T10:00:00+00:00',
      section: 'Event Planning',
      tags: ['T-Shirts', 'Events', 'Apparel', 'Branding'],
    },
  },
  '/blog/shop-signage-kumasi': {
    title: 'Shop Signage Best Practices in Kumasi | Design and Installation Tips',
    description:
      'Create eye-catching shop signage in Kumasi with professional design tips, material choices, lighting, and installation strategies for maximum visibility.',
    keywords:
      'shop signage Kumasi, business signs Ghana, storefront branding tips, shop design Kumasi',
    image: `${SITE_URL}/images/service-signage.png`,
    imageAlt: 'Professional shop signage design and installation in Kumasi',
    type: 'article',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
      { name: 'Shop Signage Best Practices', path: '/blog/shop-signage-kumasi' },
    ],
    article: {
      publishedTime: '2026-04-12T10:00:00+00:00',
      modifiedTime: '2026-04-12T10:00:00+00:00',
      section: 'Business Guide',
      tags: ['Signage', 'Design', 'Branding', 'Business'],
    },
  },
  '/blog/file-preparation-printing': {
    title: 'File Preparation Guide for Printing in Kumasi | Specs, Formats, and Tips',
    description:
      'Prepare your files correctly for printing in Kumasi with detailed specifications, recommended formats, DPI requirements, and common mistakes to avoid.',
    keywords:
      'file preparation printing Kumasi, print specifications Ghana, correct file formats printing, DPI requirements',
    image: `${SITE_URL}/images/document-printing-sample.png`,
    imageAlt: 'File preparation guide for printing services',
    type: 'article',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
      { name: 'File Preparation Guide', path: '/blog/file-preparation-printing' },
    ],
    article: {
      publishedTime: '2026-04-13T10:00:00+00:00',
      modifiedTime: '2026-04-13T10:00:00+00:00',
      section: 'Technical Guide',
      tags: ['File Preparation', 'Printing', 'Technical', 'Design'],
    },
  },
  '/privacy-policy': {
    title: 'Privacy Policy | ChromInk Printing Services',
    description:
      'ChromInk privacy policy outlines how we collect, use, and protect your personal information when you use our services in Kumasi, Ghana.',
    keywords:
      'privacy policy, data protection, ChromInk privacy, personal information',
    image: `${SITE_URL}/images/service-banner.png`,
    imageAlt: 'ChromInk privacy policy and data protection',
    type: 'website',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Privacy Policy', path: '/privacy-policy' },
    ],
  },
  '/terms-of-service': {
    title: 'Terms of Service | ChromInk Printing',
    description:
      'Read the complete terms of service for ChromInk printing and branding services, including ordering, payment, cancellations, and policies.',
    keywords:
      'terms of service, service terms, ChromInk terms, printing agreement',
    image: `${SITE_URL}/images/service-banner.png`,
    imageAlt: 'ChromInk terms of service and service agreements',
    type: 'website',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Terms of Service', path: '/terms-of-service' },
    ],
  },
  '/services': {
    title: 'Printing Services in Kumasi | Banners, Signage, T-Shirts, and More',
    description:
      'Explore ChromInk printing services in Kumasi, including banner printing, business signage, t-shirt printing, sticker printing, large format printing, and custom branding.',
    keywords:
      'printing services Kumasi, banner printing, business signage, t-shirt printing, vehicle branding, custom printing Ghana',
    image: `${SITE_URL}/images/bigframe.jpeg`,
    imageAlt: 'Large format wall art and picture framing by ChromInk in Kumasi',
    type: 'website',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
    ],
  },
  '/services/banner-printing': {
    title: 'Banner Printing in Kumasi | Vinyl, Mesh, Church, and Event Banners',
    description:
      'Get professional banner printing in Kumasi for shops, churches, funerals, events, promotions, and outdoor advertising with fast turnaround from ChromInk.',
    keywords:
      'banner printing Kumasi, vinyl banners Kumasi, church banners Ghana, event banners Kumasi, funeral banners Kumasi',
    image: `${SITE_URL}/images/banner-sample.png`,
    imageAlt: 'Banner printing services in Kumasi',
    type: 'service',
    serviceName: 'Banner Printing',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
      { name: 'Banner Printing', path: '/services/banner-printing' },
    ],
  },
  '/services/business-signage': {
    title: 'Business Signage in Kumasi | Shop Signs, 3D Letters, and Branding',
    description:
      'ChromInk designs and installs business signage in Kumasi, including shop signboards, storefront branding, wall branding, window graphics, and outdoor signs.',
    keywords:
      'business signage Kumasi, shop signboards Kumasi, storefront branding Ghana, 3D letters Kumasi, outdoor signs Kumasi',
    image: `${SITE_URL}/images/service-signage.png`,
    imageAlt: 'Business signage and shop branding in Kumasi',
    type: 'service',
    serviceName: 'Business Signage',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
      { name: 'Business Signage', path: '/services/business-signage' },
    ],
  },
  '/services/t-shirt-printing': {
    title: 'T-Shirt Printing in Kumasi | Custom Apparel Branding for Events and Businesses',
    description:
      'Order custom t-shirt printing in Kumasi for uniforms, churches, schools, campaigns, events, and promotional apparel with ChromInk.',
    keywords:
      't-shirt printing Kumasi, custom shirts Ghana, branded apparel Kumasi, event t-shirts Kumasi, church shirts Ghana',
    image: `${SITE_URL}/images/tshirt-sample.png`,
    imageAlt: 'Custom t-shirt printing in Kumasi',
    type: 'service',
    serviceName: 'T-Shirt Printing',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
      { name: 'T-Shirt Printing', path: '/services/t-shirt-printing' },
    ],
  },
  '/services/sticker-printing': {
    title: 'Sticker Printing in Kumasi | Product Labels, Vinyl Stickers, and Decals',
    description:
      'Get high-quality sticker printing in Kumasi for product labels, branding stickers, vinyl decals, packaging, and promotional campaigns.',
    keywords:
      'sticker printing Kumasi, product labels Kumasi, vinyl decals Ghana, custom labels Kumasi',
    image: `${SITE_URL}/images/sticker-sample.png`,
    imageAlt: 'Sticker printing and labels in Kumasi',
    type: 'service',
    serviceName: 'Sticker Printing',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
      { name: 'Sticker Printing', path: '/services/sticker-printing' },
    ],
  },
  '/services/flyer-printing': {
    title: 'Flyer Printing in Kumasi | Flyers, Brochures, and Marketing Materials',
    description:
      'ChromInk offers flyer printing in Kumasi for promotions, church programs, events, brochures, handbills, and business marketing campaigns.',
    keywords:
      'flyer printing Kumasi, brochure printing Ghana, handbills Kumasi, marketing materials Kumasi',
    image: `${SITE_URL}/images/flyer-sample.png`,
    imageAlt: 'Flyer printing services in Kumasi',
    type: 'service',
    serviceName: 'Flyer Printing',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
      { name: 'Flyer Printing', path: '/services/flyer-printing' },
    ],
  },
  '/services/poster-printing': {
    title: 'Poster Printing in Kumasi | Event Posters, Advertising Posters, and Displays',
    description:
      'Print posters in Kumasi for events, advertising, product promotions, church programs, and branded indoor displays with ChromInk.',
    keywords:
      'poster printing Kumasi, event posters Ghana, advertising posters Kumasi, promotional posters Ghana',
    image: `${SITE_URL}/images/poster-sample.png`,
    imageAlt: 'Poster printing services in Kumasi',
    type: 'service',
    serviceName: 'Poster Printing',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
      { name: 'Poster Printing', path: '/services/poster-printing' },
    ],
  },
  '/services/large-format-printing': {
    title: 'Large Format Printing in Kumasi | Backdrops, Displays, and Wide Format Prints',
    description:
      'Choose large format printing in Kumasi for backdrops, exhibition displays, wide-format branding, promotional graphics, and high-visibility event materials.',
    keywords:
      'large format printing Kumasi, wide format printing Ghana, backdrops Kumasi, exhibition displays Kumasi',
    image: `${SITE_URL}/images/large-format-sample.png`,
    imageAlt: 'Large format printing services in Kumasi',
    type: 'service',
    serviceName: 'Large Format Printing',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
      { name: 'Large Format Printing', path: '/services/large-format-printing' },
    ],
  },
  '/services/vehicle-branding': {
    title: 'Vehicle Branding in Kumasi | Car Branding, Van Branding, and Fleet Graphics',
    description:
      'ChromInk provides vehicle branding in Kumasi for cars, vans, fleets, decals, partial wraps, and moving business advertising.',
    keywords:
      'vehicle branding Kumasi, car branding Ghana, van branding Kumasi, fleet graphics Ghana, car wraps Kumasi',
    image: `${SITE_URL}/images/vehicle-branding-sample.png`,
    imageAlt: 'Vehicle branding services in Kumasi',
    type: 'service',
    serviceName: 'Vehicle Branding',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
      { name: 'Vehicle Branding', path: '/services/vehicle-branding' },
    ],
  },
  '/services/document-printing': {
    title: 'Document Printing in Kumasi | Reports, Binding, Office Prints, and Photocopying',
    description:
      'Get fast document printing in Kumasi for reports, office documents, manuals, school projects, photocopying, and binding services.',
    keywords:
      'document printing Kumasi, photocopying Kumasi, binding services Ghana, office printing Kumasi',
    image: `${SITE_URL}/images/document-printing-sample.png`,
    imageAlt: 'Document printing services in Kumasi',
    type: 'service',
    serviceName: 'Document Printing',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
      { name: 'Document Printing', path: '/services/document-printing' },
    ],
  },
  '/services/custom-printing': {
    title: 'Custom Printing in Kumasi | Special Orders, Event Branding, and Unique Print Jobs',
    description:
      'Request custom printing in Kumasi for event branding, mixed print packages, promotional items, business materials, and one-off special orders.',
    keywords:
      'custom printing Kumasi, special print orders Ghana, event branding Kumasi, promotional items Kumasi',
    image: `${SITE_URL}/images/custom-orders-sample.png`,
    imageAlt: 'Custom printing solutions in Kumasi',
    type: 'service',
    serviceName: 'Custom Printing',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
      { name: 'Custom Printing', path: '/services/custom-printing' },
    ],
  },
  '/services/picture-frame': {
    title: 'Picture Frames in Kumasi | Custom Framing and Wall Decor',
    description:
      'ChromInk creates picture frames in Kumasi for portraits, gifts, office wall decor, event displays, and premium custom framing projects.',
    keywords:
      'picture frames Kumasi, custom framing Ghana, wall decor Kumasi, photo frames Ghana',
    image: `${SITE_URL}/images/bigframe.jpeg`,
    imageAlt: 'Large format wall art and custom picture frames in Kumasi',
    type: 'service',
    serviceName: 'Picture Frames',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
      { name: 'Picture Frames', path: '/services/picture-frame' },
    ],
  },
  '/services/present': {
    title: 'Personalized Present Gifts in Kumasi | Custom Gifts for Birthdays and Special Occasions',
    description:
      'Order personalized present gifts in Kumasi from ChromInk, including custom t-shirts, mugs, picture frames, keepsakes, and surprise gift items for loved ones.',
    keywords:
      'personalized gifts Kumasi, present gifts Kumasi, birthday gifts Kumasi, custom mugs Kumasi, custom picture frames Kumasi',
    image: `${SITE_URL}/images/present1.jpg`,
    imageAlt: 'Personalized present gifts and custom keepsakes by ChromInk in Kumasi',
    type: 'service',
    serviceName: 'Present Gifts',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
      { name: 'Present Gifts', path: '/services/present' },
    ],
  },
  '/printing-in-asokwa': {
    title: 'Printing in Asokwa, Kumasi | Banners, Signs, Shirts, and Documents',
    description:
      'ChromInk provides printing in Asokwa, Kumasi for banner printing, business signage, custom t-shirts, document printing, and fast branding support for shops and offices.',
    keywords:
      'printing in Asokwa, banner printing Asokwa, business signage Asokwa, t-shirt printing Asokwa, document printing Asokwa',
    image: `${SITE_URL}/images/service-banner.png`,
    imageAlt: 'Banner printing and branding support for businesses in Asokwa, Kumasi',
    type: 'service',
    serviceName: 'Printing in Asokwa',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Printing in Asokwa', path: '/printing-in-asokwa' },
    ],
  },
  '/printing-in-adum': {
    title: 'Printing in Adum, Kumasi | Retail Posters, Signage, and Promo Materials',
    description:
      'Get printing in Adum, Kumasi from ChromInk for posters, signboards, flyers, stickers, and retail promotional materials designed for high-traffic business areas.',
    keywords:
      'printing in Adum, poster printing Adum, signboard printing Adum, flyer printing Adum, retail printing Kumasi',
    image: `${SITE_URL}/images/large-format-sample.png`,
    imageAlt: 'Retail printing and large format branding support for Adum businesses in Kumasi',
    type: 'service',
    serviceName: 'Printing in Adum',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Printing in Adum', path: '/printing-in-adum' },
    ],
  },
  '/printing-in-knust': {
    title: 'Printing in KNUST, Kumasi | Student Printing, Shirts, and Posters',
    description:
      'ChromInk supports printing in KNUST, Kumasi for student reports, branded t-shirts, posters, stickers, event materials, and affordable campus-ready print jobs.',
    keywords:
      'printing in KNUST, student printing KNUST, t-shirt printing KNUST, poster printing KNUST, document printing KNUST',
    image: `${SITE_URL}/images/tshirt-sample.png`,
    imageAlt: 'Student printing and branded shirt support near KNUST in Kumasi',
    type: 'service',
    serviceName: 'Printing in KNUST',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Printing in KNUST', path: '/printing-in-knust' },
    ],
  },
  '/printing-in-bantama': {
    title: 'Printing in Bantama, Kumasi | Frames, Signage, Banners, and Event Prints',
    description:
      'ChromInk offers printing in Bantama, Kumasi for picture frames, signboards, banners, church materials, custom branding, and polished print jobs for local businesses and events.',
    keywords:
      'printing in Bantama, picture frames Bantama, banner printing Bantama, business signage Bantama, custom printing Bantama',
    image: `${SITE_URL}/images/bigframe.jpeg`,
    imageAlt: 'Picture framing and business printing support for Bantama in Kumasi',
    type: 'service',
    serviceName: 'Printing in Bantama',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Printing in Bantama', path: '/printing-in-bantama' },
    ],
  },
  '/printing-in-ahodwo': {
    title: 'Printing in Ahodwo, Kumasi | Premium Business Printing and Branding',
    description:
      'ChromInk provides printing in Ahodwo, Kumasi for office branding, menus, signage, promotional materials, and polished print support for premium-facing businesses.',
    keywords:
      'printing in Ahodwo, business printing Ahodwo, signage Ahodwo, menu printing Ahodwo, office branding Kumasi',
    image: `${SITE_URL}/images/service-banner.png`,
    imageAlt: 'Premium business printing and branding support for Ahodwo in Kumasi',
    type: 'service',
    serviceName: 'Printing in Ahodwo',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Printing in Ahodwo', path: '/printing-in-ahodwo' },
    ],
  },
  '/printing-in-santasi': {
    title: 'Printing in Santasi, Kumasi | Event Printing, Frames, and Signboards',
    description:
      'ChromInk offers printing in Santasi, Kumasi for banners, picture frames, church materials, flyers, posters, and practical branding support for local businesses and events.',
    keywords:
      'printing in Santasi, banner printing Santasi, picture frames Santasi, church printing Santasi, signboards Santasi',
    image: `${SITE_URL}/images/bigframe.jpeg`,
    imageAlt: 'Event printing and picture framing support for Santasi in Kumasi',
    type: 'service',
    serviceName: 'Printing in Santasi',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Printing in Santasi', path: '/printing-in-santasi' },
    ],
  },
  '/printing-in-suame': {
    title: 'Printing in Suame, Kumasi | Workshop Branding, Signs, and Labels',
    description:
      'ChromInk provides printing in Suame, Kumasi for workshop signage, vehicle branding, labels, banners, and durable promotional materials for busy trade businesses.',
    keywords:
      'printing in Suame, workshop signage Suame, vehicle branding Suame, labels Suame, banner printing Suame',
    image: `${SITE_URL}/images/vehicle-branding-sample.png`,
    imageAlt: 'Workshop branding and durable print support for Suame businesses in Kumasi',
    type: 'service',
    serviceName: 'Printing in Suame',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Printing in Suame', path: '/printing-in-suame' },
    ],
  },
  '/printing-in-asokore-mampong': {
    title: 'Printing in Asokore Mampong, Kumasi | Nearby Banners, Signs, and Documents',
    description:
      'ChromInk offers printing in Asokore Mampong, Kumasi for banners, reports, church materials, signboards, and nearby day-to-day branding support.',
    keywords:
      'printing in Asokore Mampong, banner printing Asokore Mampong, signboards Asokore Mampong, document printing Asokore Mampong',
    image: `${SITE_URL}/images/service-banner.png`,
    imageAlt: 'Nearby printing support for Asokore Mampong businesses and events in Kumasi',
    type: 'service',
    serviceName: 'Printing in Asokore Mampong',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Printing in Asokore Mampong', path: '/printing-in-asokore-mampong' },
    ],
  },
  '/printing-in-aboabo': {
    title: 'Printing in Aboabo, Kumasi | Flyers, Posters, and Affordable Branding',
    description:
      'ChromInk provides printing in Aboabo, Kumasi for flyers, posters, banners, stickers, and affordable marketing materials for neighborhood businesses and events.',
    keywords:
      'printing in Aboabo, flyer printing Aboabo, poster printing Aboabo, affordable printing Aboabo, banner printing Aboabo',
    image: `${SITE_URL}/images/flyer-sample.png`,
    imageAlt: 'Affordable flyer printing and neighborhood branding support for Aboabo in Kumasi',
    type: 'service',
    serviceName: 'Printing in Aboabo',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Printing in Aboabo', path: '/printing-in-aboabo' },
    ],
  },
};

const getCanonicalUrl = (route) => (route === '/' ? `${SITE_URL}/` : `${SITE_URL}${route}/`);

const getChangeFrequency = (route, meta) => {
  if (route === '/') return 'weekly';
  if (meta.type === 'article') return 'monthly';
  if (route === '/blog') return 'weekly';
  if (route.startsWith('/services')) return 'monthly';
  return 'monthly';
};

const getPriority = (route, meta) => {
  if (route === '/') return '1.0';
  if (route === '/services') return '0.9';
  if (route === '/contact') return '0.8';
  if (route === '/blog') return '0.8';
  if (meta.type === 'service') return '0.85';
  if (meta.type === 'article') return '0.75';
  return '0.7';
};

const createLocalBusinessSchema = (meta) => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'ChromInk',
  image: meta.image,
  '@id': SITE_URL,
  url: SITE_URL,
  telephone: '+233593321151',
  email: 'print@chromink.co',
  priceRange: '$$',
  description:
    'ChromInk provides professional printing and branding services in Kumasi, Ghana.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Asokore-Mampong, Parkoso-Boubai Junction',
    addressLocality: 'Kumasi',
    addressRegion: 'Ashanti',
    addressCountry: 'GH',
  },
  areaServed: {
    '@type': 'City',
    name: 'Kumasi',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 6.71322,
    longitude: -1.55873,
  },
  sameAs: [
    'https://instagram.com/chromink.co',
    'https://facebook.com/chromink.co',
    'https://tiktok.com/@chromink.co',
  ],
});

const createBreadcrumbSchema = (meta) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: meta.breadcrumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: getCanonicalUrl(crumb.path),
  })),
});

const createPrimarySchema = (route, meta) => {
  const canonicalUrl = getCanonicalUrl(route);

  if (meta.type === 'service') {
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: meta.serviceName,
      description: meta.description,
      image: meta.image,
      serviceType: meta.serviceName,
      url: canonicalUrl,
      areaServed: {
        '@type': 'City',
        name: 'Kumasi',
      },
      provider: {
        '@type': 'LocalBusiness',
        name: 'ChromInk',
        url: SITE_URL,
      },
    };
  }

  if (meta.type === 'article' && meta.article) {
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: meta.title,
      description: meta.description,
      image: [meta.image],
      author: {
        '@type': 'Organization',
        name: 'ChromInk',
      },
      publisher: {
        '@type': 'Organization',
        name: 'ChromInk',
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/logo.png`,
        },
      },
      mainEntityOfPage: canonicalUrl,
      datePublished: meta.article.publishedTime,
      dateModified: meta.article.modifiedTime,
      articleSection: meta.article.section,
      keywords: meta.article.tags.join(', '),
    };
  }

  if (meta.type === 'blog') {
    return {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'ChromInk Blog',
      description: meta.description,
      url: canonicalUrl,
      publisher: {
        '@type': 'Organization',
        name: 'ChromInk',
      },
    };
  }

  return {
    '@context': 'https://schema.org',
    '@type': route === '/' ? 'WebSite' : 'WebPage',
    name: meta.title,
    description: meta.description,
    url: canonicalUrl,
    image: meta.image,
  };
};

if (!fs.existsSync(templatePath)) {
  throw new Error(`Missing built template: ${templatePath}`);
}

const template = fs.readFileSync(templatePath, 'utf8');

const replaceOrInsertCanonical = (html, canonicalUrl) => {
  if (html.includes('rel="canonical"')) {
    return html.replace(
      /<link rel="canonical" href=".*?">/,
      `<link rel="canonical" href="${canonicalUrl}">`
    );
  }

  return html.replace(
    '</head>',
    `    <link rel="canonical" href="${canonicalUrl}">\n  </head>`
  );
};

for (const [route, meta] of Object.entries(routeMetadata)) {
  const routeUrl = getCanonicalUrl(route);
  const ogType = meta.type === 'article' ? 'article' : 'website';
  const structuredData = [
    createLocalBusinessSchema(meta),
    createBreadcrumbSchema(meta),
    createPrimarySchema(route, meta),
  ];

  let routeHtml = template
    .replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`)
    .replace(
      /<meta name="description" content=".*?" \/>/,
      `<meta name="description" content="${meta.description}" />`
    )
    .replace(
      /<meta property="og:type" content=".*?" \/>/,
      `<meta property="og:type" content="${ogType}" />`
    )
    .replace(
      /<meta property="og:url" content=".*?" \/>/,
      `<meta property="og:url" content="${routeUrl}" />`
    )
    .replace(
      /<meta property="og:title" content=".*?" \/>/,
      `<meta property="og:title" content="${meta.title}" />`
    )
    .replace(
      /<meta property="og:description" content=".*?" \/>/,
      `<meta property="og:description" content="${meta.description}" />`
    )
    .replace(
      /<meta property="og:image" content=".*?" \/>/,
      `<meta property="og:image" content="${meta.image}" />`
    )
    .replace(
      /<meta property="og:image:secure_url" content=".*?" \/>/,
      `<meta property="og:image:secure_url" content="${meta.image}" />`
    )
    .replace(
      /<meta property="og:image:alt" content=".*?" \/>/,
      `<meta property="og:image:alt" content="${meta.imageAlt}" />`
    )
    .replace(
      /<meta property="twitter:url" content=".*?" \/>/,
      `<meta property="twitter:url" content="${routeUrl}" />`
    )
    .replace(
      /<meta property="twitter:title" content=".*?" \/>/,
      `<meta property="twitter:title" content="${meta.title}" />`
    )
    .replace(
      /<meta property="twitter:description" content=".*?" \/>/,
      `<meta property="twitter:description" content="${meta.description}" />`
    )
    .replace(
      /<meta property="twitter:image" content=".*?" \/>/,
      `<meta property="twitter:image" content="${meta.image}" />`
    )
    .replace(
      /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
      `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>`
    );

  routeHtml = replaceOrInsertCanonical(routeHtml, routeUrl);

  if (routeHtml.includes('meta name="keywords"')) {
    routeHtml = routeHtml.replace(
      /<meta name="keywords" content=".*?" \/>/,
      `<meta name="keywords" content="${meta.keywords}" />`
    );
  } else {
    routeHtml = routeHtml.replace(
      '<meta name="description"',
      `<meta name="keywords" content="${meta.keywords}" />\n    <meta name="description"`
    );
  }

  if (route === '/') {
    fs.writeFileSync(templatePath, routeHtml);
    continue;
  }

  const routeDir = path.join(distDir, route.replace(/^\//, ''));
  fs.mkdirSync(routeDir, { recursive: true });
  fs.writeFileSync(path.join(routeDir, 'index.html'), routeHtml);
}

const sitemapEntries = Object.entries(routeMetadata)
  .map(([route, meta]) => {
    const url = getCanonicalUrl(route);
    return `  <url>
    <loc>${url}</loc>
    <lastmod>${buildDate}</lastmod>
    <changefreq>${getChangeFrequency(route, meta)}</changefreq>
    <priority>${getPriority(route, meta)}</priority>
  </url>`;
  })
  .join('\n');

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>
`;

const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml);
fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsTxt);

console.log(`Generated SEO pages for ${Object.keys(routeMetadata).length} routes.`);
