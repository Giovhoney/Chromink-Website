import {
  handleApiError,
  normalizeProduct,
  readProducts,
  requireAdmin,
  sendJson,
  writeProducts,
} from '../_productStore.js';

export default async function handler(request, response) {
  try {
    const { id } = request.query;

    if (request.method === 'PUT') {
      if (!requireAdmin(request, response)) return;

      const products = await readProducts();
      const existingProduct = products.find((product) => product.id === id);

      if (!existingProduct) {
        sendJson(response, 404, { error: 'Product not found.' });
        return;
      }

      const product = normalizeProduct({ ...request.body, id }, products, existingProduct);
      const nextProducts = products.map((item) => (item.id === id ? product : item));

      await writeProducts(nextProducts);
      sendJson(response, 200, { product });
      return;
    }

    if (request.method === 'DELETE') {
      if (!requireAdmin(request, response)) return;

      const products = await readProducts();
      const nextProducts = products.filter((product) => product.id !== id);

      if (nextProducts.length === products.length) {
        sendJson(response, 404, { error: 'Product not found.' });
        return;
      }

      await writeProducts(nextProducts);
      sendJson(response, 200, { ok: true });
      return;
    }

    response.setHeader('Allow', 'PUT, DELETE');
    sendJson(response, 405, { error: 'Method not allowed.' });
  } catch (error) {
    handleApiError(response, error);
  }
}
