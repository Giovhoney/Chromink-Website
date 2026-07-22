import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { businessInfo } from '../seo/businessInfo';
import { type Product, type Variant } from './productData';

export type CartItem = {
  cartId: string;
  productId: string;
  slug: string;
  title: string;
  image: string;
  variant: Variant;
  finish: string;
  quantity: number;
};

export type StoredInquiry = {
  id: string;
  createdAt: string;
  items: CartItem[];
  total: number;
};

type StoreContextValue = {
  products: Product[];
  productCategories: string[];
  productsStatus: 'idle' | 'loading' | 'ready' | 'error';
  productsError: string | null;
  refreshProducts: () => Promise<void>;
  createProduct: (product: Product, adminToken: string) => Promise<Product>;
  updateProduct: (product: Product, adminToken: string) => Promise<Product>;
  deleteProduct: (productId: string, adminToken: string) => Promise<void>;
  cartItems: CartItem[];
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  addToCart: (product: Product, variant: Variant, finish: string, quantity: number) => void;
  updateQuantity: (cartId: string, quantity: number) => void;
  removeFromCart: (cartId: string) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
  checkoutUrl: string;
  saveInquiry: () => StoredInquiry | null;
};

const CART_KEY = 'chromink_store_cart';
const INQUIRIES_KEY = 'chromink_store_inquiries';
const PRODUCTS_API = import.meta.env.DEV ? '/api/products' : '/api/products.php';

const StoreContext = createContext<StoreContextValue | null>(null);

const loadJson = <T,>(key: string, fallback: T): T => {
  if (typeof window === 'undefined') return fallback;

  try {
    const stored = window.localStorage.getItem(key);
    return stored ? (JSON.parse(stored) as T) : fallback;
  } catch {
    return fallback;
  }
};

const createCartId = (productId: string, variant: string, finish: string) =>
  `${productId}-${variant}-${finish}`.toLowerCase().replace(/[^a-z0-9]+/g, '-');

const productApiPath = (productId?: string, method?: string) => {
  const params = new URLSearchParams();

  if (productId) {
    params.set('id', productId);
  }

  if (!import.meta.env.DEV && method && !['GET', 'POST'].includes(method)) {
    params.set('_method', method);
  }

  const query = params.toString();
  return query ? `${PRODUCTS_API}?${query}` : PRODUCTS_API;
};

const requestMethod = (method: string) => (!import.meta.env.DEV && ['PUT', 'DELETE'].includes(method) ? 'POST' : method);

const requestJson = async <T,>(path: string, options?: RequestInit): Promise<T> => {
  const response = await fetch(path, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options?.headers ?? {}),
    },
  });
  const payload = (await response.json().catch(() => ({}))) as T & { error?: string };

  if (!response.ok) {
    throw new Error(payload.error || `Request failed with ${response.status}`);
  }

  return payload;
};

const createCheckoutMessage = (items: CartItem[], total: number) => {
  const lines = items.flatMap((item, index) => [
    `${index + 1}. ${item.title}`,
    `Variant: ${item.variant.name}`,
    `Color/finish: ${item.finish}`,
    `Quantity: ${item.quantity}`,
    `Unit price: GH₵${item.variant.price}`,
    `Total: GH₵${item.variant.price * item.quantity}`,
    '',
  ]);

  return [
    'Hello ChromInk, I would like to place this order:',
    '',
    ...lines,
    `Cart total: GH₵${total}`,
    '',
    'Please confirm artwork requirements, turnaround time, and payment details.',
  ].join('\n');
};

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productsStatus, setProductsStatus] = useState<StoreContextValue['productsStatus']>('loading');
  const [productsError, setProductsError] = useState<string | null>(null);
  const [storedCartItems, setStoredCartItems] = useState<CartItem[]>(() => loadJson(CART_KEY, []));
  const [isCartOpen, setIsCartOpen] = useState(false);

  const refreshProducts = useCallback(async () => {
    setProductsStatus((status) => (status === 'ready' ? status : 'loading'));

    try {
      const payload = await requestJson<{ products: Product[] }>(productApiPath());
      if (!Array.isArray(payload.products)) {
        throw new Error('Product API did not return a product list.');
      }
      setProducts(payload.products);
      setProductsError(null);
      setProductsStatus('ready');
    } catch (error) {
      setProducts([]);
      setProductsError(error instanceof Error ? error.message : 'Unable to load products.');
      setProductsStatus('error');
    }
  }, []);

  useEffect(() => {
    void refreshProducts();
    const interval = window.setInterval(() => {
      void refreshProducts();
    }, 5000);

    return () => window.clearInterval(interval);
  }, [refreshProducts]);

  useEffect(() => {
    window.localStorage.setItem(CART_KEY, JSON.stringify(storedCartItems));
  }, [storedCartItems]);

  const persistMutation = useCallback(
    async <T,>(path: string, method: string, adminToken: string, product?: Product) => {
      const payload = await requestJson<T>(path, {
        method: requestMethod(method),
        headers: {
          'x-admin-token': adminToken,
        },
        body: product ? JSON.stringify(product) : undefined,
      });
      await refreshProducts();
      return payload;
    },
    [refreshProducts]
  );

  const createProduct = useCallback(
    async (product: Product, adminToken: string) => {
      const payload = await persistMutation<{ product: Product }>(productApiPath(), 'POST', adminToken, product);
      return payload.product;
    },
    [persistMutation]
  );

  const updateProduct = useCallback(
    async (product: Product, adminToken: string) => {
      const payload = await persistMutation<{ product: Product }>(
        productApiPath(product.id, 'PUT'),
        'PUT',
        adminToken,
        product
      );
      return payload.product;
    },
    [persistMutation]
  );

  const deleteProduct = useCallback(
    async (productId: string, adminToken: string) => {
      await persistMutation<{ ok: boolean }>(productApiPath(productId, 'DELETE'), 'DELETE', adminToken);
    },
    [persistMutation]
  );

  const cartItems = useMemo(
    () =>
      storedCartItems
        .map((item) => {
          const product = products.find((candidate) => candidate.id === item.productId);
          const variant = product?.variants.find((candidate) => candidate.name === item.variant.name);

          if (!product || !product.visible || !variant) return null;

          return {
            ...item,
            slug: product.slug,
            title: product.title,
            image: product.images[0],
            variant,
          };
        })
        .filter((item): item is CartItem => Boolean(item)),
    [products, storedCartItems]
  );

  const productCategories = useMemo(
    () => Array.from(new Set(products.map((product) => product.category).filter(Boolean))).sort(),
    [products]
  );

  const addToCart = (product: Product, variant: Variant, finish: string, quantity: number) => {
    const cartId = createCartId(product.id, variant.name, finish);

    setStoredCartItems((items) => {
      const existing = items.find((item) => item.cartId === cartId);
      if (existing) {
        return items.map((item) =>
          item.cartId === cartId ? { ...item, quantity: item.quantity + quantity } : item
        );
      }

      return [
        ...items,
        {
          cartId,
          productId: product.id,
          slug: product.slug,
          title: product.title,
          image: product.images[0],
          variant,
          finish,
          quantity,
        },
      ];
    });

    setIsCartOpen(true);
  };

  const updateQuantity = (cartId: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(cartId);
      return;
    }

    setStoredCartItems((items) =>
      items.map((item) => (item.cartId === cartId ? { ...item, quantity } : item))
    );
  };

  const removeFromCart = (cartId: string) => {
    setStoredCartItems((items) => items.filter((item) => item.cartId !== cartId));
  };

  const clearCart = () => setStoredCartItems([]);

  const cartTotal = useMemo(
    () => cartItems.reduce((total, item) => total + item.variant.price * item.quantity, 0),
    [cartItems]
  );

  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems]
  );

  const checkoutUrl = useMemo(() => {
    const message = createCheckoutMessage(cartItems, cartTotal);
    return `${businessInfo.whatsappUrl}?text=${encodeURIComponent(message)}`;
  }, [cartItems, cartTotal]);

  const saveInquiry = () => {
    if (!cartItems.length) return null;

    const inquiry: StoredInquiry = {
      id: `CI-${Date.now()}`,
      createdAt: new Date().toISOString(),
      items: cartItems,
      total: cartTotal,
    };

    const previous = loadJson<StoredInquiry[]>(INQUIRIES_KEY, []);
    window.localStorage.setItem(INQUIRIES_KEY, JSON.stringify([inquiry, ...previous]));
    return inquiry;
  };

  const value = {
    products,
    productCategories,
    productsStatus,
    productsError,
    refreshProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    cartItems,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartTotal,
    cartCount,
    checkoutUrl,
    saveInquiry,
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used inside StoreProvider');
  }
  return context;
};

export const readStoredInquiries = () => loadJson<StoredInquiry[]>(INQUIRIES_KEY, []);
