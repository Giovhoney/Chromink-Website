import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import OptimizedImage from '../OptimizedImage';
import { formatCurrency, type Product } from '../../store/productData';

const ProductCard = ({ product }: { product: Product }) => {
  const lowestPrice = Math.min(...product.variants.map((variant) => variant.price), product.basePrice);

  return (
    <article className="group border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <Link to={`/products/${product.slug}`} className="block overflow-hidden bg-gray-50">
        <div className="relative aspect-[4/3] overflow-hidden">
          <OptimizedImage
            src={product.images[0]}
            alt={product.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {product.badge && (
            <span className="absolute left-2 top-2 bg-brand-yellow px-2 py-1 text-[10px] font-black uppercase tracking-widest text-brand-black sm:left-4 sm:top-4 sm:px-3 sm:text-xs">
              {product.badge}
            </span>
          )}
        </div>
      </Link>
      <div className="p-3 sm:p-5">
        <div className="mb-2 flex items-center justify-between gap-2 sm:mb-3 sm:gap-3">
          <p className="truncate text-[10px] font-black uppercase tracking-widest text-brand-cyan sm:text-xs">{product.category}</p>
          <span className="flex shrink-0 items-center gap-1 text-xs font-bold text-gray-600 sm:text-sm">
            <Star size={13} className="fill-brand-yellow text-brand-yellow sm:h-[15px] sm:w-[15px]" />
            {product.rating}
          </span>
        </div>
        <Link to={`/products/${product.slug}`}>
          <h3 className="line-clamp-2 text-sm font-black leading-tight transition-colors group-hover:text-brand-cyan sm:text-xl">{product.title}</h3>
        </Link>
        <p className="mt-2 line-clamp-2 text-xs leading-5 text-gray-500 sm:mt-3 sm:text-sm sm:leading-6">{product.description}</p>
        <div className="mt-4 flex flex-col gap-3 sm:mt-5 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 sm:text-xs">From</p>
            <p className="text-lg font-black sm:text-2xl">{formatCurrency(lowestPrice)}</p>
          </div>
          <Link
            to={`/products/${product.slug}`}
            className="bg-brand-black px-3 py-2 text-center text-xs font-black uppercase tracking-widest text-white hover:bg-brand-cyan sm:px-4 sm:py-3 sm:text-sm"
          >
            View
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
