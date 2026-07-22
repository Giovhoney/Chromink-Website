import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react';
import OptimizedImage from '../OptimizedImage';
import { useStore } from '../../store/StoreContext';
import { formatCurrency } from '../../store/productData';

const CartDrawer = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartTotal,
    checkoutUrl,
    saveInquiry,
  } = useStore();

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsCartOpen(false)}
      />
      <aside
        className={`fixed right-0 top-0 z-[70] h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-gray-100 px-5 py-5">
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-brand-cyan">ChromInk Store</p>
              <h2 className="text-2xl font-black">Your Cart</h2>
            </div>
            <button
              type="button"
              aria-label="Close cart"
              onClick={() => setIsCartOpen(false)}
              className="flex h-11 w-11 items-center justify-center border border-gray-200 hover:bg-brand-black hover:text-white"
            >
              <X size={20} />
            </button>
          </div>

          {cartItems.length ? (
            <>
              <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
                {cartItems.map((item) => (
                  <div key={item.cartId} className="grid grid-cols-[88px_1fr] gap-4 border-b border-gray-100 pb-4">
                    <Link to={`/products/${item.slug}`} onClick={() => setIsCartOpen(false)}>
                      <OptimizedImage
                        src={item.image}
                        alt={item.title}
                        className="h-22 h-[88px] w-[88px] object-cover"
                      />
                    </Link>
                    <div className="min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="font-black leading-tight">{item.title}</h3>
                          <p className="mt-1 text-xs text-gray-500">
                            {item.variant.name} / {item.finish}
                          </p>
                        </div>
                        <button
                          type="button"
                          aria-label={`Remove ${item.title}`}
                          onClick={() => removeFromCart(item.cartId)}
                          className="text-gray-400 hover:text-brand-magenta"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center border border-gray-200">
                          <button
                            type="button"
                            aria-label="Decrease quantity"
                            onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                            className="flex h-9 w-9 items-center justify-center hover:bg-gray-100"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="w-10 text-center text-sm font-black">{item.quantity}</span>
                          <button
                            type="button"
                            aria-label="Increase quantity"
                            onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                            className="flex h-9 w-9 items-center justify-center hover:bg-gray-100"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        <p className="font-black">{formatCurrency(item.variant.price * item.quantity)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-100 p-5">
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-bold text-gray-500">Cart total</span>
                  <span className="text-2xl font-black">{formatCurrency(cartTotal)}</span>
                </div>
                <a
                  href={checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => saveInquiry()}
                  className="flex w-full items-center justify-center gap-3 bg-[#25D366] px-5 py-4 font-black uppercase tracking-widest text-white hover:brightness-95"
                >
                  <MessageCircle size={20} />
                  Checkout on WhatsApp
                </a>
                <button
                  type="button"
                  onClick={clearCart}
                  className="mt-3 w-full border border-gray-200 px-5 py-3 text-sm font-black uppercase tracking-widest hover:bg-gray-50"
                >
                  Clear Cart
                </button>
              </div>
            </>
          ) : (
            <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
              <ShoppingBag className="mb-5 text-brand-cyan" size={48} />
              <h3 className="text-2xl font-black">Your cart is empty</h3>
              <p className="mt-3 text-gray-500">Browse the ChromInk catalog and add print products to request a WhatsApp order.</p>
              <Link
                to="/store"
                onClick={() => setIsCartOpen(false)}
                className="mt-8 bg-brand-black px-8 py-4 font-black uppercase tracking-widest text-white hover:bg-brand-cyan"
              >
                Shop Products
              </Link>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};

export default CartDrawer;

