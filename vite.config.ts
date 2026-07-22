import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { seedProducts } from './api/_seedProducts.js';

type Variant = {
  name: string;
  price: number;
};

type Product = {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  images: string[];
  basePrice: number;
  variants: Variant[];
  finishes: string[];
  available: boolean;
  visible: boolean;
  featured: boolean;
  badge?: string;
  rating: number;
  reviews: number;
  turnaround: string;
  updatedAt?: string;
  createdAt?: string;
};

const dataFile = path.resolve(process.cwd(), '.data/products.json');

const now = () => new Date().toISOString();

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const uniqueSlug = (products: Product[], slug: string, id: string) => {
  const base = slugify(slug) || `product-${Date.now()}`;
  let candidate = base;
  let count = 2;

  while (products.some((product) => product.slug === candidate && product.id !== id)) {
    candidate = `${base}-${count}`;
    count += 1;
  }

  return candidate;
};

const normalizeProduct = (product: Partial<Product>, existingProducts: Product[] = [], existingProduct?: Product): Product => {
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
  const firstPrice = variants[0]?.price ?? (Number(product.basePrice) || 0);

  return {
    id,
    title: String(product.title ?? '').trim(),
    slug: uniqueSlug(existingProducts, product.slug || product.title || '', id),
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

const readBody = async (request: import('node:http').IncomingMessage) =>
  new Promise<Record<string, unknown>>((resolve, reject) => {
    let body = '';

    request.on('data', (chunk) => {
      body += chunk;
    });
    request.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(error);
      }
    });
    request.on('error', reject);
  });

const readProducts = async () => {
  try {
    const content = await readFile(dataFile, 'utf8');
    return JSON.parse(content) as Product[];
  } catch {
    const seeded = (seedProducts as Product[]).map((product) => normalizeProduct(product, seedProducts as Product[], product));
    await writeProducts(seeded);
    return seeded;
  }
};

const writeProducts = async (products: Product[]) => {
  await mkdir(path.dirname(dataFile), { recursive: true });
  await writeFile(dataFile, JSON.stringify(products, null, 2));
};

const sendJson = (response: import('node:http').ServerResponse, status: number, body: unknown) => {
  response.statusCode = status;
  response.setHeader('Content-Type', 'application/json');
  response.setHeader('Cache-Control', 'no-store, max-age=0');
  response.end(JSON.stringify(body));
};

const isAdminRequest = (request: import('node:http').IncomingMessage) => {
  const expectedToken = process.env.ADMIN_API_TOKEN || 'chromink-admin-dev';
  return request.headers['x-admin-token'] === expectedToken;
};

const devProductApi = () => ({
  name: 'chromink-dev-product-api',
  configureServer(server) {
    server.middlewares.use('/api/products', async (request, response) => {
      try {
        const method = request.method ?? 'GET';
        const id = request.url?.match(/^\/([^/?]+)/)?.[1];

        if (method === 'GET' && !id) {
          sendJson(response, 200, { products: await readProducts() });
          return;
        }

        if (!isAdminRequest(request)) {
          sendJson(response, 401, {
            error: 'Invalid admin token. In local dev, use chromink-admin-dev unless ADMIN_API_TOKEN is set.',
          });
          return;
        }

        const products = await readProducts();

        if (method === 'POST' && !id) {
          const body = await readBody(request);
          const product = normalizeProduct(body as Partial<Product>, products);
          await writeProducts([product, ...products]);
          sendJson(response, 201, { product });
          return;
        }

        if (method === 'PUT' && id) {
          const productId = decodeURIComponent(id);
          const existingProduct = products.find((product) => product.id === productId);

          if (!existingProduct) {
            sendJson(response, 404, { error: 'Product not found.' });
            return;
          }

          const body = await readBody(request);
          const product = normalizeProduct({ ...(body as Partial<Product>), id: productId }, products, existingProduct);
          await writeProducts(products.map((item) => (item.id === productId ? product : item)));
          sendJson(response, 200, { product });
          return;
        }

        if (method === 'DELETE' && id) {
          const productId = decodeURIComponent(id);
          const nextProducts = products.filter((product) => product.id !== productId);

          if (nextProducts.length === products.length) {
            sendJson(response, 404, { error: 'Product not found.' });
            return;
          }

          await writeProducts(nextProducts);
          sendJson(response, 200, { ok: true });
          return;
        }

        sendJson(response, 405, { error: 'Method not allowed.' });
      } catch (error) {
        sendJson(response, 500, { error: error instanceof Error ? error.message : 'Unexpected dev API error.' });
      }
    });
  },
});

export default defineConfig({
  plugins: [devProductApi(), react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) {
            return;
          }

          if (id.includes('framer-motion')) {
            return 'motion';
          }

          if (id.includes('lucide-react')) {
            return 'icons';
          }

          return 'vendor';
        },
      },
    },
  },
});
