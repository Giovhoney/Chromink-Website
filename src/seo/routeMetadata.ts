import { localAreas } from '../content/localAreas';

export const SITE_URL = 'https://chromink.co';

type Breadcrumb = {
  name: string;
  path: string;
};

export type PageType = 'website' | 'service' | 'blog' | 'article';

export type RouteMetadata = {
  title: string;
  description: string;
  keywords: string;
  image: string;
  imageAlt: string;
  type: PageType;
  breadcrumbs: Breadcrumb[];
  serviceName?: string;
  article?: {
    publishedTime: string;
    modifiedTime: string;
    section: string;
    tags: string[];
  };
};

export const routeMetadata: Record<string, RouteMetadata> = {
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
  '/store': {
    title: 'ChromInk Store | Printing Products, T-Shirts, Banners, Labels, and Gifts',
    description:
      'Shop ChromInk printing products in Kumasi, including custom t-shirts, stickers, labels, posters, banners, business cards, packaging, engraving, wall canvases, and promotional items.',
    keywords:
      'ChromInk store, printing products Kumasi, t-shirt printing shop, sticker labels Kumasi, banner ordering Ghana',
    image: `${SITE_URL}/images/tshirt-sample.png`,
    imageAlt: 'ChromInk ecommerce product catalog',
    type: 'website',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Store', path: '/store' },
    ],
  },
  '/products': {
    title: 'ChromInk Products | Printing Catalog in Kumasi',
    description:
      'Browse ChromInk products and request WhatsApp checkout for custom print orders, sizes, finishes, and product variants.',
    keywords:
      'ChromInk products, printing catalog Kumasi, custom print orders Ghana',
    image: `${SITE_URL}/images/sticker-sample.png`,
    imageAlt: 'ChromInk products catalog',
    type: 'website',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Products', path: '/products' },
    ],
  },
  '/categories': {
    title: 'ChromInk Categories | Browse Printing Products by Service',
    description:
      'Browse ChromInk store categories including t-shirt printing, stickers, banners, posters, packaging, engraving, wall canvases, and promotional items.',
    keywords:
      'ChromInk categories, printing categories Kumasi, t-shirt labels banners posters Ghana',
    image: `${SITE_URL}/images/service-banner.png`,
    imageAlt: 'ChromInk product categories',
    type: 'website',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Categories', path: '/categories' },
    ],
  },
  '/admin': {
    title: 'ChromInk Admin | Store Dashboard',
    description:
      'ChromInk store dashboard for managing live products, variants, finishes, visibility, availability, and stored inquiries.',
    keywords:
      'ChromInk admin, product dashboard, ecommerce catalog',
    image: `${SITE_URL}/images/service-banner.png`,
    imageAlt: 'ChromInk admin dashboard',
    type: 'website',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Admin', path: '/admin' },
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
  ...Object.fromEntries(
    localAreas.map((area) => [
      area.path,
      {
        title: area.seoTitle,
        description: area.seoDescription,
        keywords: area.seoKeywords,
        image: `${SITE_URL}${area.seoImage}`,
        imageAlt: area.seoImageAlt,
        type: 'service' as const,
        serviceName: `Printing in ${area.area}`,
        breadcrumbs: [
          { name: 'Home', path: '/' },
          { name: `Printing in ${area.area}`, path: area.path },
        ],
      },
    ])
  ),
};

export const getCanonicalUrl = (path: string) =>
  path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}/`;

export const getRouteMetadata = (path: string) => {
  const productMatch = path.match(/^\/products\/([^/]+)$/);

  if (productMatch) {
    return routeMetadata['/products'];
  }

  return routeMetadata[path] ?? routeMetadata['/'];
};
