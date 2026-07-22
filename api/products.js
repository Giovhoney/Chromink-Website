import {
  handleApiError,
  normalizeProduct,
  readProducts,
  requireAdmin,
  sendJson,
  writeProducts,
} from './_productStore.js';

export default async function handler(request, response) {
  try {
    if (request.method === 'GET') {
      const products = await readProducts();
      sendJson(response, 200, { products });
      return;
    }

    if (request.method === 'POST') {
      if (!requireAdmin(request, response)) return;

      const products = await readProducts();
      const product = normalizeProduct(request.body ?? {}, products);
      const nextProducts = [product, ...products];

      await writeProducts(nextProducts);
      sendJson(response, 201, { product });
      return;
    }

    response.setHeader('Allow', 'GET, POST');
    sendJson(response, 405, { error: 'Method not allowed.' });
  } catch (error) {
    handleApiError(response, error);
  }
}
