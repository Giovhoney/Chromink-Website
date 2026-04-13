import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  SITE_URL,
  getCanonicalUrl,
  getRouteMetadata,
  type RouteMetadata,
} from '../seo/routeMetadata';

const upsertMeta = (
  selector: string,
  attributes: Record<string, string>,
  content: string
) => {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement('meta');
    Object.entries(attributes).forEach(([key, value]) => {
      element?.setAttribute(key, value);
    });
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
};

const upsertLink = (selector: string, rel: string, href: string) => {
  let element = document.head.querySelector(selector) as HTMLLinkElement | null;

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
};

const upsertJsonLd = (id: string, data: object | object[]) => {
  let element = document.head.querySelector(
    `script[data-seo-id="${id}"]`
  ) as HTMLScriptElement | null;

  if (!element) {
    element = document.createElement('script');
    element.type = 'application/ld+json';
    element.dataset.seoId = id;
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(data);
};

const createLocalBusinessSchema = (metadata: RouteMetadata) => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'ChromInk',
  image: metadata.image,
  '@id': SITE_URL,
  url: SITE_URL,
  telephone: '+233593321151',
  email: 'print@chromink.co',
  priceRange: '$$',
  description:
    'ChromInk provides professional printing and branding services in Kumasi, Ghana.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Asokore-Mampong, Parkoso-Baubai Junction',
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
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    opens: '08:00',
    closes: '20:00',
  },
});

const createBreadcrumbSchema = (metadata: RouteMetadata) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: metadata.breadcrumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: getCanonicalUrl(crumb.path),
  })),
});

const createPrimarySchema = (pathname: string, metadata: RouteMetadata) => {
  const canonicalUrl = getCanonicalUrl(pathname);

  if (metadata.type === 'service') {
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: metadata.serviceName ?? metadata.title,
      description: metadata.description,
      image: metadata.image,
      serviceType: metadata.serviceName ?? metadata.title,
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

  if (metadata.type === 'article' && metadata.article) {
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: metadata.title,
      description: metadata.description,
      image: [metadata.image],
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
      datePublished: metadata.article.publishedTime,
      dateModified: metadata.article.modifiedTime,
      articleSection: metadata.article.section,
      keywords: metadata.article.tags.join(', '),
    };
  }

  if (metadata.type === 'blog') {
    return {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'ChromInk Blog',
      description: metadata.description,
      url: canonicalUrl,
      publisher: {
        '@type': 'Organization',
        name: 'ChromInk',
      },
    };
  }

  return {
    '@context': 'https://schema.org',
    '@type': pathname === '/' ? 'WebSite' : 'WebPage',
    name: metadata.title,
    description: metadata.description,
    url: canonicalUrl,
    image: metadata.image,
  };
};

const SeoManager = () => {
  const location = useLocation();

  useEffect(() => {
    const metadata = getRouteMetadata(location.pathname);
    const canonicalUrl = getCanonicalUrl(location.pathname);
    const ogType = metadata.type === 'article' ? 'article' : 'website';

    document.title = metadata.title;

    upsertMeta('meta[name="description"]', { name: 'description' }, metadata.description);
    upsertMeta('meta[name="keywords"]', { name: 'keywords' }, metadata.keywords);
    upsertMeta('meta[name="robots"]', { name: 'robots' }, 'index, follow');

    upsertLink('link[rel="canonical"]', 'canonical', canonicalUrl);

    upsertMeta('meta[property="og:type"]', { property: 'og:type' }, ogType);
    upsertMeta('meta[property="og:url"]', { property: 'og:url' }, canonicalUrl);
    upsertMeta('meta[property="og:title"]', { property: 'og:title' }, metadata.title);
    upsertMeta(
      'meta[property="og:description"]',
      { property: 'og:description' },
      metadata.description
    );
    upsertMeta('meta[property="og:image"]', { property: 'og:image' }, metadata.image);
    upsertMeta(
      'meta[property="og:image:secure_url"]',
      { property: 'og:image:secure_url' },
      metadata.image
    );
    upsertMeta(
      'meta[property="og:image:alt"]',
      { property: 'og:image:alt' },
      metadata.imageAlt
    );

    upsertMeta(
      'meta[property="twitter:card"]',
      { property: 'twitter:card' },
      'summary_large_image'
    );
    upsertMeta(
      'meta[property="twitter:url"]',
      { property: 'twitter:url' },
      canonicalUrl
    );
    upsertMeta(
      'meta[property="twitter:title"]',
      { property: 'twitter:title' },
      metadata.title
    );
    upsertMeta(
      'meta[property="twitter:description"]',
      { property: 'twitter:description' },
      metadata.description
    );
    upsertMeta(
      'meta[property="twitter:image"]',
      { property: 'twitter:image' },
      metadata.image
    );

    upsertJsonLd('local-business', createLocalBusinessSchema(metadata));
    upsertJsonLd('breadcrumb', createBreadcrumbSchema(metadata));
    upsertJsonLd('primary', createPrimarySchema(location.pathname, metadata));
  }, [location.pathname]);

  return null;
};

export default SeoManager;
