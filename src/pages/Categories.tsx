import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Boxes } from 'lucide-react';
import { Header, Footer } from '../components/Layout';
import CartDrawer from '../components/store/CartDrawer';
import { StoreProvider, useStore } from '../store/StoreContext';

const CategoriesContent = () => {
  const { products, productCategories, productsStatus, productsError } = useStore();

  return (
    <>
      <Header />
      <main className="bg-white px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-brand-cyan">Categories</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Shop ChromInk print products by category.
          </h1>
          {productsStatus === 'loading' && (
            <p className="mt-12 border border-gray-100 p-6 text-sm font-bold text-gray-500">Loading live categories...</p>
          )}

          {productsStatus === 'error' && (
            <p className="mt-12 border border-red-100 bg-red-50 p-6 text-sm font-bold text-red-700">{productsError}</p>
          )}

          {productsStatus === 'ready' && productCategories.length === 0 && (
            <p className="mt-12 border border-gray-100 p-6 text-sm font-bold text-gray-500">No live categories are available yet.</p>
          )}

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((category) => {
              const categoryProducts = products.filter((product) => product.visible && product.category === category);
              const featuredImage = categoryProducts[0]?.images[0] ?? '/images/service-banner.png';

              return (
                <Link
                  key={category}
                  to={`/store?category=${encodeURIComponent(category)}`}
                  className="group grid min-h-[260px] overflow-hidden border border-gray-100 bg-brand-black text-white"
                >
                  <div className="relative">
                    <img src={featuredImage} alt={category} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-55 transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    <div className="relative flex h-full flex-col justify-end p-6">
                      <Boxes className="mb-5 text-brand-yellow" size={34} />
                      <h2 className="text-2xl font-black">{category}</h2>
                      <p className="mt-2 text-sm font-bold text-gray-200">{categoryProducts.length} products</p>
                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-brand-cyan">
                        Browse <ArrowRight size={17} />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
};

const Categories = () => (
  <StoreProvider>
    <CategoriesContent />
  </StoreProvider>
);

export default Categories;
