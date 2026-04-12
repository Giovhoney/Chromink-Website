import fs from 'node:fs';
import path from 'node:path';

const siteUrl = 'https://chromink.co';
const distDir = path.resolve('dist');
const templatePath = path.join(distDir, 'index.html');

const routeMeta = {
  '/': {
    title: 'ChromInk | Professional Printing & Branding Services in Kumasi',
    description:
      'Premium printing services in Kumasi, Ghana. Banners, T-shirts, Signage, and more. Quality results fast. Get a quote today!',
    image: `${siteUrl}/images/about-story.png`,
    imageAlt: 'ChromInk professional printing studio in Kumasi',
  },
  '/about': {
    title: 'About ChromInk | Printing & Branding Experts in Kumasi',
    description:
      'Learn more about ChromInk, your trusted partner for quality printing and branding services in Kumasi, Ghana.',
    image:
      'https://i.pinimg.com/736x/c7/9d/75/c79d75c78f834a46b38dddfb2a31b2a5.jpg',
    imageAlt: 'ChromInk printing and branding team in Kumasi',
  },
  '/contact': {
    title: 'Contact ChromInk | Get a Printing Quote in Kumasi',
    description:
      'Request a custom quote or contact ChromInk directly for printing and branding services in Kumasi, Ghana.',
    image: `${siteUrl}/images/whatsapp/9.jpeg`,
    imageAlt: 'Contact ChromInk for printing and branding in Kumasi',
  },
  '/blog': {
    title: 'ChromInk Blog | Printing Tips and Branding Ideas',
    description:
      'Read practical printing tips, branding ideas, and marketing insights from ChromInk in Kumasi, Ghana.',
    image: `${siteUrl}/social-preview.png`,
    imageAlt: 'ChromInk blog and printing resources',
  },
  '/blog/banner-printing-cost-kumasi': {
    title: 'How Much Does Banner Printing Cost in Kumasi? | ChromInk',
    description:
      'Explore key pricing factors, material options, and what affects banner printing costs in Kumasi.',
    image: `${siteUrl}/images/banner-sample.png`,
    imageAlt: 'Banner printing cost guide in Kumasi',
  },
  '/services': {
    title: 'Printing Services in Kumasi | ChromInk',
    description:
      'Explore ChromInk services including banner printing, t-shirt branding, signage, large format printing, and more.',
    image:
      'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=1920&q=80',
    imageAlt: 'ChromInk printing services in Kumasi',
  },
  '/services/banner-printing': {
    title: 'Banner Printing in Kumasi | ChromInk',
    description:
      'High-quality custom banner printing in Kumasi for shops, events, promotions, churches, and businesses.',
    image:
      'https://i.pinimg.com/1200x/2c/c1/fc/2cc1fc19911d361b0468bc27e98d2794.jpg',
    imageAlt: 'Banner printing services in Kumasi',
  },
  '/services/business-signage': {
    title: 'Business Signage in Kumasi | ChromInk',
    description:
      'Professional business signage, shop branding, 3D letters, and custom signboards for Kumasi businesses.',
    image:
      'https://i.pinimg.com/736x/f9/44/8e/f9448ebce9b13d028142d0d55c483e7c.jpg',
    imageAlt: 'Business signage and shop branding in Kumasi',
  },
  '/services/t-shirt-printing': {
    title: 'T-Shirt Printing in Kumasi | ChromInk',
    description:
      'Custom t-shirt printing for uniforms, events, churches, brands, and promotions in Kumasi, Ghana.',
    image:
      'https://i.pinimg.com/1200x/da/f0/24/daf0246a43f00f50ce98afbe7f9869ae.jpg',
    imageAlt: 'Custom t-shirt printing in Kumasi',
  },
  '/services/sticker-printing': {
    title: 'Sticker Printing in Kumasi | ChromInk',
    description:
      'Custom sticker and label printing for packaging, promotions, windows, and branding in Kumasi.',
    image:
      'https://i.pinimg.com/1200x/5f/3a/d5/5f3ad55ae3b84c592f101eacbfa0f303.jpg',
    imageAlt: 'Sticker printing and labels in Kumasi',
  },
  '/services/flyer-printing': {
    title: 'Flyer Printing in Kumasi | ChromInk',
    description:
      'Professional flyer and brochure printing in Kumasi for marketing campaigns, church programs, and events.',
    image:
      'https://i.pinimg.com/1200x/a7/a6/e6/a7a6e61acc5d9cc11ea6cdd181a7dc30.jpg',
    imageAlt: 'Flyer printing services in Kumasi',
  },
  '/services/poster-printing': {
    title: 'Poster Printing in Kumasi | ChromInk',
    description:
      'High-quality poster printing in Kumasi for promotions, announcements, events, and indoor displays.',
    image:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1920&q=80',
    imageAlt: 'Poster printing services in Kumasi',
  },
  '/services/large-format-printing': {
    title: 'Large Format Printing in Kumasi | ChromInk',
    description:
      'Large format printing for banners, backdrops, exhibition displays, and high-visibility branding in Kumasi.',
    image:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1920&q=80',
    imageAlt: 'Large format printing services in Kumasi',
  },
  '/services/vehicle-branding': {
    title: 'Vehicle Branding in Kumasi | ChromInk',
    description:
      'Professional vehicle branding in Kumasi for cars, vans, fleet graphics, decals, and wraps.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrt04c_C1Q1ln6vGGIrSn5QwCZxbwv6Jg-bFne5Qlt_RDWzQbdKj03dUwU&s=10',
    imageAlt: 'Vehicle branding services in Kumasi',
  },
  '/services/document-printing': {
    title: 'Document Printing in Kumasi | ChromInk',
    description:
      'Fast and reliable document printing in Kumasi for office work, school projects, reports, and business materials.',
    image:
      'https://i.pinimg.com/1200x/fa/f4/41/faf4417ab4fba29077eb1a751d1c9744.jpg',
    imageAlt: 'Document printing services in Kumasi',
  },
  '/services/custom-printing': {
    title: 'Custom Printing in Kumasi | ChromInk',
    description:
      'Tailored custom printing and special branding solutions for unique projects, events, and businesses in Kumasi.',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1920&q=80',
    imageAlt: 'Custom printing solutions in Kumasi',
  },
  '/services/picture-frame': {
    title: 'Picture Frames in Kumasi | ChromInk',
    description:
      'Premium picture framing and wall decor solutions in Kumasi for portraits, gifts, office spaces, and home interiors.',
    image: `${siteUrl}/images/whatsapp/9.jpeg`,
    imageAlt: 'Picture frame and wall decor services in Kumasi',
  },
};

if (!fs.existsSync(templatePath)) {
  throw new Error(`Missing built template: ${templatePath}`);
}

const template = fs.readFileSync(templatePath, 'utf8');

for (const [route, meta] of Object.entries(routeMeta)) {
  if (route === '/') {
    continue;
  }

  const routeUrl = `${siteUrl}${route}`;
  const routeHtml = template
    .replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`)
    .replace(
      /<meta name="description" content=".*?"/,
      `<meta name="description" content="${meta.description}"`
    )
    .replace(
      /<meta property="og:url" content=".*?"/,
      `<meta property="og:url" content="${routeUrl}"`
    )
    .replace(
      /<meta property="og:title" content=".*?"/,
      `<meta property="og:title" content="${meta.title}"`
    )
    .replace(
      /<meta property="og:description" content=".*?"/,
      `<meta property="og:description" content="${meta.description}"`
    )
    .replace(
      /<meta property="og:image" content=".*?"/,
      `<meta property="og:image" content="${meta.image}"`
    )
    .replace(
      /<meta property="og:image:secure_url" content=".*?"/,
      `<meta property="og:image:secure_url" content="${meta.image}"`
    )
    .replace(
      /<meta property="og:image:alt" content=".*?"/,
      `<meta property="og:image:alt" content="${meta.imageAlt}"`
    )
    .replace(
      /<meta property="twitter:url" content=".*?"/,
      `<meta property="twitter:url" content="${routeUrl}"`
    )
    .replace(
      /<meta property="twitter:title" content=".*?"/,
      `<meta property="twitter:title" content="${meta.title}"`
    )
    .replace(
      /<meta property="twitter:description" content=".*?"/,
      `<meta property="twitter:description" content="${meta.description}"`
    )
    .replace(
      /<meta property="twitter:image" content=".*?"/,
      `<meta property="twitter:image" content="${meta.image}"`
    );

  const routeDir = path.join(distDir, route.replace(/^\//, ''));
  fs.mkdirSync(routeDir, { recursive: true });
  fs.writeFileSync(path.join(routeDir, 'index.html'), routeHtml);
}

console.log(`Generated social metadata pages for ${Object.keys(routeMeta).length - 1} routes.`);
