import { seedProducts } from './_seedProducts.js';

const PRODUCTS_KEY = 'chromink:products';

const json = (response, status, body) => {
  response.status(status).setHeader('Content-Type', 'application/json');
  response.setHeader('Cache-Control', 'no-store, max-age=0');
  response.end(JSON.stringify(body));
};

export const sendJson = json;

const redisCommand = async (...command) => {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    throw new Error('Missing UPSTASH_REDIS_REST_URL or UPSTASH_REDIS_REST_TOKEN');
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(command),
  });

  if (!response.ok) {
    throw new Error(`Redis command failed with ${response.status}`);
  }

  const payload = await response.json();
  if (payload.error) {
    throw new Error(payload.error);
  }

  return payload.result;
};

export const requireAdmin = (request, response) => {
  const configuredToken = process.env.ADMIN_API_TOKEN;
  const token = request.headers['x-admin-token'];

  if (!configuredToken) {
    json(response, 500, { error: 'ADMIN_API_TOKEN is not configured on the server.' });
    return false;
  }

  if (token !== configuredToken) {
    json(response, 401, { error: 'Invalid admin token.' });
    return false;
  }

  return true;
};

const now = () => new Date().toISOString();

const slugify = (value) =>
  String(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const uniqueSlug = (products, slug, id) => {
  const base = slugify(slug) || `product-${Date.now()}`;
  let candidate = base;
  let count = 2;

  while (products.some((product) => product.slug === candidate && product.id !== id)) {
    candidate = `${base}-${count}`;
    count += 1;
  }

  return candidate;
};

export const normalizeProduct = (product, existingProducts = [], existingProduct) => {
  const variants = Array.isArray(product.variants)
    ? product.variants
        .map((variant) => ({
          name: String(variant.name ?? '').trim(),
          price: Number(variant.price),
        }))
        .filter((variant) => variant.name && Number.isFinite(variant.price))
    : [];
  const finishes = Array.isArray(product.finishes)
    ? product.finishes.map((finish) => String(finish).trim()).filter(Boolean)
    : [];
  const images = Array.isArray(product.images)
    ? product.images.map((image) => String(image).trim()).filter(Boolean)
    : [];
  const id = String(product.id || existingProduct?.id || crypto.randomUUID());
  const firstPrice = variants[0]?.price ?? Number(product.basePrice) || 0;

  return {
    id,
    title: String(product.title ?? '').trim(),
    slug: uniqueSlug(existingProducts, product.slug || product.title, id),
    description: String(product.description ?? '').trim(),
    category: String(product.category ?? 'Uncategorized').trim() || 'Uncategorized',
    images: images.length ? images : ['/images/service-banner.png'],
    basePrice: firstPrice,
    variants: variants.length ? variants : [{ name: 'Standard', price: firstPrice }],
    finishes: finishes.length ? finishes : ['Full colour'],
    available: Boolean(product.available),
    visible: Boolean(product.visible),
    featured: Boolean(product.featured),
    badge: product.badge ? String(product.badge).trim() : '',
    rating: Number.isFinite(Number(product.rating)) ? Number(product.rating) : 5,
    reviews: Number.isFinite(Number(product.reviews)) ? Number(product.reviews) : 0,
    turnaround: String(product.turnaround ?? '2-4 working days').trim() || '2-4 working days',
    createdAt: existingProduct?.createdAt || product.createdAt || now(),
    updatedAt: now(),
  };
};

export const readProducts = async () => {
  const stored = await redisCommand('GET', PRODUCTS_KEY);

  if (!stored) {
    const seeded = seedProducts.map((product) => normalizeProduct(product, seedProducts, product));
    await writeProducts(seeded);
    return seeded;
  }

  return JSON.parse(stored);
};

export const writeProducts = async (products) => {
  await redisCommand('SET', PRODUCTS_KEY, JSON.stringify(products));
  return products;
};

export const handleApiError = (response, error) => {
  json(response, 500, { error: error instanceof Error ? error.message : 'Unexpected API error.' });
};
