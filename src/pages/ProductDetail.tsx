import React, { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CheckCircle2, ChevronRight, Minus, Plus, ShoppingBag, Star } from 'lucide-react';
import { Header, Footer } from '../components/Layout';
import OptimizedImage from '../components/OptimizedImage';
import CartDrawer from '../components/store/CartDrawer';
import ProductCard from '../components/store/ProductCard';
import { StoreProvider, useStore } from '../store/StoreContext';
import { formatCurrency } from '../store/productData';

const ProductDetailContent = () => {
  const { slug } = useParams();
  const { products, productsStatus, productsError, addToCart, cartCount, setIsCartOpen } = useStore();
  const product = products.find((item) => item.slug === slug && item.visible);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [selectedFinish, setSelectedFinish] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const relatedProducts = useMemo(
    () =>
      product
        ? products
            .filter((item) => item.visible && item.category === product.category && item.id !== product.id)
            .slice(0, 3)
        : [],
    [product, products]
  );

  if (!product && productsStatus === 'loading') {
    return (
      <>
        <Header />
        <main className="px-4 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-widest text-brand-cyan">Loading product</p>
            <h1 className="mt-4 text-4xl font-black">Fetching the latest catalog from the backend.</h1>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Header />
        <main className="px-4 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-widest text-brand-cyan">Product not found</p>
            <h1 className="mt-4 text-4xl font-black">This ChromInk product is not available.</h1>
            {productsStatus === 'error' && <p className="mt-4 text-sm font-bold text-red-600">{productsError}</p>}
            <Link to="/store" className="mt-8 inline-block bg-brand-black px-8 py-4 font-black uppercase tracking-widest text-white">
              Back to Store
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const variant = product.variants[selectedVariant] ?? product.variants[0];
  const finish = product.finishes[selectedFinish] ?? product.finishes[0];
  const mainImage = product.images[selectedImage] ?? product.images[0];
  const total = variant.price * quantity;

  return (
    <>
      <Header />
      <main className="bg-white px-4 py-10 md:py-14">
        <div className="mx-auto max-w-7xl">
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm font-bold text-gray-500">
            <Link to="/" className="hover:text-brand-cyan">Home</Link>
            <ChevronRight size={16} />
            <Link to="/store" className="hover:text-brand-cyan">Store</Link>
            <ChevronRight size={16} />
            <span className="text-brand-black">{product.title}</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="group aspect-square overflow-hidden bg-gray-50">
                <OptimizedImage
                  src={mainImage}
                  alt={product.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  priority
                />
              </div>
              <div className="mt-4 grid grid-cols-4 gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square overflow-hidden border-2 ${
                      selectedImage === index ? 'border-brand-cyan' : 'border-transparent'
                    }`}
                  >
                    <OptimizedImage src={image} alt={`${product.title} view ${index + 1}`} className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <section>
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-brand-cyan px-3 py-1 text-xs font-black uppercase tracking-widest text-white">{product.category}</span>
                {product.badge && <span className="bg-brand-yellow px-3 py-1 text-xs font-black uppercase tracking-widest">{product.badge}</span>}
                <span className="flex items-center gap-1 text-sm font-bold text-gray-600">
                  <Star size={16} className="fill-brand-yellow text-brand-yellow" />
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
              <h1 className="mt-5 text-4xl font-black leading-tight md:text-5xl">{product.title}</h1>
              <p className="mt-5 text-lg leading-8 text-gray-600">{product.description}</p>
              <div className="mt-7 flex items-center gap-3 text-sm font-bold text-gray-600">
                <CheckCircle2 className="text-brand-cyan" size={20} />
                {product.available ? 'Available for order' : 'Currently unavailable'} / {product.turnaround}
              </div>

              <div className="mt-9 border-y border-gray-100 py-7">
                <p className="text-sm font-black uppercase tracking-widest text-gray-400">Select size or option</p>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {product.variants.map((item, index) => (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => setSelectedVariant(index)}
                      className={`border px-4 py-3 text-left transition ${
                        selectedVariant === index ? 'border-brand-black bg-brand-black text-white' : 'border-gray-200 hover:border-brand-cyan'
                      }`}
                    >
                      <span className="block text-sm font-black">{item.name}</span>
                      <span className="text-xs font-bold opacity-80">{formatCurrency(item.price)}</span>
                    </button>
                  ))}
                </div>

                <p className="mt-7 text-sm font-black uppercase tracking-widest text-gray-400">Color or finish</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {product.finishes.map((item, index) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setSelectedFinish(index)}
                      className={`border px-4 py-3 text-sm font-black ${
                        selectedFinish === index ? 'border-brand-cyan bg-cyan-50 text-brand-black' : 'border-gray-200 hover:border-brand-cyan'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Current price</p>
                  <p className="mt-1 text-4xl font-black">{formatCurrency(variant.price)}</p>
                  <p className="mt-1 text-sm font-bold text-gray-500">Line total: {formatCurrency(total)}</p>
                </div>
                <div className="flex items-center border border-gray-200">
                  <button type="button" aria-label="Decrease quantity" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="flex h-12 w-12 items-center justify-center hover:bg-gray-100">
                    <Minus size={18} />
                  </button>
                  <span className="w-12 text-center font-black">{quantity}</span>
                  <button type="button" aria-label="Increase quantity" onClick={() => setQuantity(quantity + 1)} className="flex h-12 w-12 items-center justify-center hover:bg-gray-100">
                    <Plus size={18} />
                  </button>
                </div>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-[1fr_auto]">
                <button
                  type="button"
                  disabled={!product.available}
                  onClick={() => addToCart(product, variant, finish, quantity)}
                  className="flex items-center justify-center gap-3 bg-brand-black px-8 py-4 font-black uppercase tracking-widest text-white hover:bg-brand-cyan disabled:cursor-not-allowed disabled:bg-gray-300"
                >
                  <ShoppingBag size={20} />
                  Add to Cart
                </button>
                <button
                  type="button"
                  onClick={() => setIsCartOpen(true)}
                  className="border border-gray-200 px-8 py-4 font-black uppercase tracking-widest hover:bg-gray-50"
                >
                  Cart ({cartCount})
                </button>
              </div>
            </section>
          </div>

          {relatedProducts.length > 0 && (
            <section className="mt-20">
              <div className="mb-8 flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm font-black uppercase tracking-widest text-brand-magenta">More like this</p>
                  <h2 className="mt-2 text-3xl font-black">Related products</h2>
                </div>
                <Link to="/store" className="text-sm font-black uppercase tracking-widest text-brand-cyan">View all</Link>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedProducts.map((item) => (
                  <ProductCard key={item.id} product={item} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
};

const ProductDetail = () => (
  <StoreProvider>
    <ProductDetailContent />
  </StoreProvider>
);

export default ProductDetail;
