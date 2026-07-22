import React, { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, ShoppingBag, SlidersHorizontal } from 'lucide-react';
import { Header, Footer } from '../components/Layout';
import CartDrawer from '../components/store/CartDrawer';
import ProductCard from '../components/store/ProductCard';
import { StoreProvider, useStore } from '../store/StoreContext';

const StoreContent = () => {
  const { products, productCategories, productsStatus, productsError, cartCount, setIsCartOpen } = useStore();
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState(searchParams.get('category') ?? 'All');
  const [sort, setSort] = useState('featured');

  const visibleProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return products
      .filter((product) => product.visible)
      .filter((product) => category === 'All' || product.category === category)
      .filter((product) =>
        [product.title, product.category, product.description].join(' ').toLowerCase().includes(normalizedQuery)
      )
      .sort((a, b) => {
        const aPrice = Math.min(...a.variants.map((variant) => variant.price));
        const bPrice = Math.min(...b.variants.map((variant) => variant.price));

        if (sort === 'price-asc') return aPrice - bPrice;
        if (sort === 'price-desc') return bPrice - aPrice;
        if (sort === 'rating') return b.rating - a.rating;
        return Number(b.featured) - Number(a.featured);
      });
  }, [category, products, query, sort]);

  return (
    <>
      <Header />
      <main className="bg-white">
        <section className="bg-mesh px-4 py-16 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-brand-cyan">ChromInk Store</p>
                <h1 className="text-4xl font-black leading-tight md:text-6xl">
                  Print products ready for quote and WhatsApp checkout.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                  Browse ChromInk products, compare sizes and finishes, then send your order details straight to our team for artwork confirmation.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="flex items-center justify-center gap-3 bg-brand-black px-6 py-4 font-black uppercase tracking-widest text-white hover:bg-brand-cyan md:self-start"
              >
                <ShoppingBag size={20} />
                Cart ({cartCount})
              </button>
            </div>
          </div>
        </section>

        <section className="px-4 py-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-4 border border-gray-100 bg-white p-4 shadow-sm md:grid-cols-[1fr_240px_220px]">
              <label className="flex items-center gap-3 border border-gray-200 px-4 py-3">
                <Search className="text-gray-400" size={20} />
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search products"
                  className="w-full bg-transparent text-sm font-semibold outline-none"
                />
              </label>
              <label className="flex items-center gap-3 border border-gray-200 px-4 py-3">
                <SlidersHorizontal className="text-gray-400" size={20} />
                <select
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                  className="w-full bg-transparent text-sm font-bold outline-none"
                >
                  <option>All</option>
                  {productCategories.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="border border-gray-200 bg-transparent px-4 py-3 text-sm font-bold outline-none"
              >
                <option value="featured">Featured first</option>
                <option value="price-asc">Price: Low to high</option>
                <option value="price-desc">Price: High to low</option>
                <option value="rating">Top rated</option>
              </select>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <p className="text-sm font-bold text-gray-500">{visibleProducts.length} products found</p>
              <Link to="/categories" className="text-sm font-black uppercase tracking-widest text-brand-cyan hover:text-brand-black">
                Browse categories
              </Link>
            </div>

            {productsStatus === 'loading' && (
              <p className="mt-8 border border-gray-100 p-6 text-sm font-bold text-gray-500">Loading live products...</p>
            )}

            {productsStatus === 'error' && (
              <p className="mt-8 border border-red-100 bg-red-50 p-6 text-sm font-bold text-red-700">
                {productsError}
              </p>
            )}

            {productsStatus === 'ready' && visibleProducts.length === 0 && (
              <p className="mt-8 border border-gray-100 p-6 text-sm font-bold text-gray-500">No live products match this search.</p>
            )}

            {visibleProducts.length > 0 && (
              <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
                {visibleProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
};

const Store = () => (
  <StoreProvider>
    <StoreContent />
  </StoreProvider>
);

export default Store;
