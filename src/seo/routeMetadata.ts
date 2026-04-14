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
    image: `${SITE_URL}/images/about-story.png`,
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
    image:
      'https://i.pinimg.com/736x/c7/9d/75/c79d75c78f834a46b38dddfb2a31b2a5.jpg',
    imageAlt: 'ChromInk printing and branding team in Kumasi',
    type: 'website',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
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
    image: `${SITE_URL}/social-preview.png`,
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
    image:
      'https://i.pinimg.com/1200x/2c/c1/fc/2cc1fc19911d361b0468bc27e98d2794.jpg',
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
    image:
      'https://i.pinimg.com/736x/f9/44/8e/f9448ebce9b13d028142d0d55c483e7c.jpg',
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
    image:
      'https://i.pinimg.com/1200x/da/f0/24/daf0246a43f00f50ce98afbe7f9869ae.jpg',
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
    image:
      'https://i.pinimg.com/1200x/5f/3a/d5/5f3ad55ae3b84c592f101eacbfa0f303.jpg',
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
    image:
      'https://i.pinimg.com/1200x/a7/a6/e6/a7a6e61acc5d9cc11ea6cdd181a7dc30.jpg',
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
    image:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1920&q=80',
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
    image:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1920&q=80',
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
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrt04c_C1Q1ln6vGGIrSn5QwCZxbwv6Jg-bFne5Qlt_RDWzQbdKj03dUwU&s=10',
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
    image:
      'https://i.pinimg.com/1200x/fa/f4/41/faf4417ab4fba29077eb1a751d1c9744.jpg',
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
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1920&q=80',
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
};

export const getCanonicalUrl = (path: string) =>
  path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;

export const getRouteMetadata = (path: string) =>
  routeMetadata[path] ?? routeMetadata['/'];
