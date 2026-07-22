import React, { ChangeEvent, FormEvent, useMemo, useState } from 'react';
import { Eye, EyeOff, Lock, PackagePlus, Pencil, RefreshCw, Save, Trash2 } from 'lucide-react';
import { Header, Footer } from '../components/Layout';
import { StoreProvider, readStoredInquiries, useStore } from '../store/StoreContext';
import { defaultProductCategories, formatCurrency, type Product, type Variant } from '../store/productData';

const emptyProduct: Product = {
  id: '',
  title: '',
  slug: '',
  description: '',
    category: defaultProductCategories[0],
  images: ['/images/service-banner.png'],
  basePrice: 0,
  variants: [{ name: 'Standard', price: 0 }],
  finishes: ['Full colour'],
  available: true,
  visible: true,
  featured: false,
  badge: '',
  rating: 5,
  reviews: 0,
  turnaround: '2-4 working days',
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const parseList = (value: string) =>
  value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

const parseVariants = (value: string): Variant[] =>
  value
    .split('\n')
    .map((line) => {
      const [name, price] = line.split(':');
      return { name: name?.trim(), price: Number(price) };
    })
    .filter((variant): variant is Variant => Boolean(variant.name) && Number.isFinite(variant.price));

const variantsToText = (variants: Variant[]) =>
  variants.map((variant) => `${variant.name}: ${variant.price}`).join('\n');

const confirmAdminChange = (message: string) => window.confirm(message);
const ADD_NEW_CATEGORY = '__add_new_category__';

const AdminContent = () => {
  const {
    products,
    productCategories,
    productsStatus,
    productsError,
    refreshProducts,
    createProduct,
    updateProduct,
    deleteProduct: removeProduct,
  } = useStore();
  const [adminToken, setAdminToken] = useState(() => window.sessionStorage.getItem('chromink_admin_token') ?? '');
  const [tokenDraft, setTokenDraft] = useState('');
  const [isAuthed, setIsAuthed] = useState(() => Boolean(window.sessionStorage.getItem('chromink_admin_token')));
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draft, setDraft] = useState<Product>(emptyProduct);
  const [variantText, setVariantText] = useState(variantsToText(emptyProduct.variants));
  const [finishText, setFinishText] = useState(emptyProduct.finishes.join(', '));
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [customCategory, setCustomCategory] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const inquiries = useMemo(() => readStoredInquiries(), [products]);
  const categoryOptions = useMemo(
    () => Array.from(new Set([...defaultProductCategories, ...productCategories, draft.category].filter(Boolean))),
    [draft.category, productCategories]
  );

  const startEdit = (product?: Product) => {
    const nextProduct = product ?? { ...emptyProduct, id: `ci-${Date.now()}` };
    setEditingId(product?.id ?? null);
    setDraft(nextProduct);
    setIsAddingCategory(false);
    setCustomCategory('');
    setVariantText(variantsToText(nextProduct.variants));
    setFinishText(nextProduct.finishes.join(', '));
  };

  const updateDraft = (key: keyof Product, value: Product[keyof Product]) => {
    setDraft((current) => ({ ...current, [key]: value }));
  };

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files ?? []);
    if (!files.length) return;

    Promise.all(
      files.map(
        (file) =>
          new Promise<string>((resolve) => {
            const reader = new FileReader();
            reader.onload = () => resolve(String(reader.result));
            reader.readAsDataURL(file);
          })
      )
    ).then((images) => updateDraft('images', images));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const variants = parseVariants(variantText);
    const selectedCategory = isAddingCategory ? customCategory.trim() : draft.category;
    const nextProduct: Product = {
      ...draft,
      id: draft.id || `ci-${Date.now()}`,
      slug: draft.slug || slugify(draft.title),
      category: selectedCategory,
      basePrice: variants[0]?.price ?? Number(draft.basePrice),
      variants: variants.length ? variants : emptyProduct.variants,
      finishes: parseList(finishText),
      images: draft.images.length ? draft.images : emptyProduct.images,
      rating: Number(draft.rating),
      reviews: Number(draft.reviews),
    };

    setIsSaving(true);
    setStatusMessage('');

    try {
      if (editingId) {
        await updateProduct(nextProduct, adminToken);
        setStatusMessage('Product updated in the backend database. The storefront is refreshing from live data.');
      } else {
        await createProduct(nextProduct, adminToken);
        setStatusMessage('Product created in the backend database. It is now available to the live storefront.');
      }
      startEdit();
    } catch (error) {
      setStatusMessage(error instanceof Error ? error.message : 'Unable to save product.');
    } finally {
      setIsSaving(false);
    }
  };

  const deleteProduct = async (id: string) => {
    const product = products.find((item) => item.id === id);
    const productName = product?.title ?? 'this product';
    const confirmed = confirmAdminChange(
      `Are you sure you want to delete "${productName}"? This will remove it from the backend database and the live store.`
    );

    if (!confirmed) return;

    try {
      await removeProduct(id, adminToken);
      setStatusMessage(`"${productName}" was deleted from the backend database.`);
    } catch (error) {
      setStatusMessage(error instanceof Error ? error.message : 'Unable to delete product.');
    }
  };

  const toggleProduct = async (id: string, key: 'visible' | 'featured' | 'available') => {
    const product = products.find((item) => item.id === id);
    if (!product) return;
    const productName = product?.title ?? 'this product';
    const actionLabel = {
      visible: product?.visible ? 'hide this product from the store' : 'show this product in the store',
      featured: product?.featured ? 'remove this product from featured items' : 'mark this product as featured',
      available: product?.available ? 'mark this product as unavailable' : 'mark this product as available',
    }[key];

    const confirmed = confirmAdminChange(`Are you sure you want to ${actionLabel} for "${productName}"?`);

    if (!confirmed) return;

    try {
      await updateProduct({ ...product, [key]: !product[key] }, adminToken);
      setStatusMessage(`"${productName}" was updated in the backend database.`);
    } catch (error) {
      setStatusMessage(error instanceof Error ? error.message : 'Unable to update product.');
    }
  };

  if (!isAuthed) {
    return (
      <>
        <Header />
        <main className="bg-mesh px-4 py-24">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              if (tokenDraft.trim()) {
                window.sessionStorage.setItem('chromink_admin_token', tokenDraft.trim());
                setAdminToken(tokenDraft.trim());
                setIsAuthed(true);
                startEdit();
              }
            }}
            className="mx-auto max-w-md border border-gray-100 bg-white p-8 shadow-xl"
          >
            <Lock className="mb-5 text-brand-cyan" size={42} />
            <p className="text-sm font-black uppercase tracking-widest text-brand-cyan">Admin</p>
            <h1 className="mt-3 text-3xl font-black">Locked dashboard</h1>
            <p className="mt-4 text-sm leading-6 text-gray-600">
              Enter the private admin API token configured on the server. Product changes are written through authenticated CRUD endpoints.
            </p>
            <input
              type="password"
              value={tokenDraft}
              onChange={(event) => setTokenDraft(event.target.value)}
              placeholder="Enter admin API token"
              className="mt-6 w-full border border-gray-200 px-4 py-4 font-bold outline-none focus:border-brand-cyan"
            />
            <button type="submit" className="mt-4 w-full bg-brand-black px-6 py-4 font-black uppercase tracking-widest text-white hover:bg-brand-cyan">
              Unlock
            </button>
            <p className="mt-3 text-xs text-gray-400">Local dev token: chromink-admin-dev. Hostinger token: chromink-admin.</p>
          </form>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="bg-white px-4 py-10 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-brand-cyan">Admin</p>
              <h1 className="mt-3 text-4xl font-black">Store dashboard</h1>
              <p className="mt-3 max-w-2xl text-gray-600">Products, variants, finishes, prices, images, visibility, and availability are synchronized with the backend database through CRUD API calls.</p>
              <p className="mt-2 text-sm font-bold text-gray-500">
                Catalog status: {productsStatus}
                {productsError ? ` / ${productsError}` : ''}
              </p>
              <button
                type="button"
                onClick={() => {
                  window.sessionStorage.removeItem('chromink_admin_token');
                  setAdminToken('');
                  setTokenDraft('');
                  setIsAuthed(false);
                }}
                className="mt-3 text-xs font-black uppercase tracking-widest text-brand-cyan hover:text-brand-black"
              >
                Change Admin Token
              </button>
              {statusMessage && <p className="mt-2 text-sm font-bold text-brand-cyan">{statusMessage}</p>}
            </div>
            <div className="flex flex-wrap gap-3">
              <button type="button" onClick={() => startEdit()} className="flex items-center gap-2 bg-brand-black px-5 py-3 font-black uppercase tracking-widest text-white hover:bg-brand-cyan">
                <PackagePlus size={18} />
                Add Product
              </button>
              <button type="button" onClick={() => void refreshProducts()} className="flex items-center gap-2 border border-gray-200 px-5 py-3 font-black uppercase tracking-widest hover:bg-gray-50">
                <RefreshCw size={18} />
                Refresh
              </button>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <form onSubmit={handleSubmit} className="space-y-5 border border-gray-100 p-5 shadow-sm">
              <h2 className="text-2xl font-black">{editingId ? 'Edit product' : 'Add product'}</h2>
              <input value={draft.title} onChange={(event) => updateDraft('title', event.target.value)} placeholder="Product title" className="w-full border border-gray-200 px-4 py-3 font-bold outline-none focus:border-brand-cyan" required />
              <input value={draft.slug} onChange={(event) => updateDraft('slug', slugify(event.target.value))} placeholder="Slug, optional" className="w-full border border-gray-200 px-4 py-3 font-bold outline-none focus:border-brand-cyan" />
              <textarea value={draft.description} onChange={(event) => updateDraft('description', event.target.value)} placeholder="Description" rows={4} className="w-full border border-gray-200 px-4 py-3 font-bold outline-none focus:border-brand-cyan" required />
              <div className="grid gap-4 sm:grid-cols-2">
                <select
                  value={isAddingCategory ? ADD_NEW_CATEGORY : draft.category}
                  onChange={(event) => {
                    if (event.target.value === ADD_NEW_CATEGORY) {
                      setIsAddingCategory(true);
                      setCustomCategory('');
                      return;
                    }

                    setIsAddingCategory(false);
                    setCustomCategory('');
                    updateDraft('category', event.target.value);
                  }}
                  className="border border-gray-200 px-4 py-3 font-bold outline-none focus:border-brand-cyan"
                >
                  {categoryOptions.map((category) => <option key={category}>{category}</option>)}
                  <option value={ADD_NEW_CATEGORY}>Add new category</option>
                </select>
                <input value={draft.turnaround} onChange={(event) => updateDraft('turnaround', event.target.value)} placeholder="Turnaround time" className="border border-gray-200 px-4 py-3 font-bold outline-none focus:border-brand-cyan" />
              </div>
              {isAddingCategory && (
                <div>
                  <label className="mb-2 block text-xs font-black uppercase tracking-widest text-gray-400">
                    New category name
                  </label>
                  <input value={customCategory} onChange={(event) => setCustomCategory(event.target.value)} placeholder="Enter new category" className="w-full border border-gray-200 px-4 py-3 font-bold outline-none focus:border-brand-cyan" required />
                  <p className="mt-2 text-xs font-bold text-gray-500">This category will be added when the product is saved.</p>
                </div>
              )}
              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-widest text-gray-400">
                  Price settings
                </label>
                <textarea value={variantText} onChange={(event) => setVariantText(event.target.value)} rows={5} className="w-full border border-gray-200 px-4 py-3 font-mono text-sm outline-none focus:border-brand-cyan" placeholder="Standard: 150&#10;Premium: 240&#10;Bulk order: 620" />
                <p className="mt-2 text-xs font-bold text-gray-500">Enter one price option per line using Option name: price. The first price becomes the base price shown in the store.</p>
              </div>
              <input value={finishText} onChange={(event) => setFinishText(event.target.value)} placeholder="Finishes, comma separated" className="w-full border border-gray-200 px-4 py-3 font-bold outline-none focus:border-brand-cyan" />
              <div className="grid gap-4 sm:grid-cols-3">
                <input type="number" value={draft.rating} onChange={(event) => updateDraft('rating', Number(event.target.value))} className="border border-gray-200 px-4 py-3 font-bold outline-none focus:border-brand-cyan" min="0" max="5" step="0.1" />
                <input type="number" value={draft.reviews} onChange={(event) => updateDraft('reviews', Number(event.target.value))} className="border border-gray-200 px-4 py-3 font-bold outline-none focus:border-brand-cyan" min="0" />
                <input value={draft.badge ?? ''} onChange={(event) => updateDraft('badge', event.target.value)} placeholder="Badge" className="border border-gray-200 px-4 py-3 font-bold outline-none focus:border-brand-cyan" />
              </div>
              <label className="block border border-dashed border-gray-300 p-5 text-sm font-bold text-gray-500">
                Upload multiple product images
                <input type="file" accept="image/*" multiple onChange={handleImageUpload} className="mt-3 block w-full text-sm" />
              </label>
              <div className="flex flex-wrap gap-3">
                <label className="flex items-center gap-2 text-sm font-bold"><input type="checkbox" checked={draft.visible} onChange={(event) => updateDraft('visible', event.target.checked)} /> Visible</label>
                <label className="flex items-center gap-2 text-sm font-bold"><input type="checkbox" checked={draft.featured} onChange={(event) => updateDraft('featured', event.target.checked)} /> Featured</label>
                <label className="flex items-center gap-2 text-sm font-bold"><input type="checkbox" checked={draft.available} onChange={(event) => updateDraft('available', event.target.checked)} /> Available</label>
              </div>
              <button type="submit" disabled={isSaving} className="flex w-full items-center justify-center gap-2 bg-brand-black px-6 py-4 font-black uppercase tracking-widest text-white hover:bg-brand-cyan disabled:cursor-wait disabled:bg-gray-300">
                <Save size={18} />
                {isSaving ? 'Saving...' : 'Save Product'}
              </button>
              {statusMessage && <p className="text-sm font-bold text-brand-cyan">{statusMessage}</p>}
            </form>

            <section className="space-y-4">
              {products.map((product) => (
                <article key={product.id} className="grid gap-4 border border-gray-100 p-4 sm:grid-cols-[96px_1fr]">
                  <img src={product.images[0]} alt={product.title} loading="lazy" className="h-24 w-24 object-cover" />
                  <div>
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div>
                        <p className="text-xs font-black uppercase tracking-widest text-brand-cyan">{product.category}</p>
                        <h3 className="mt-1 text-xl font-black">{product.title}</h3>
                        <p className="mt-1 text-sm text-gray-500">{product.variants.length} variants / from {formatCurrency(Math.min(...product.variants.map((variant) => variant.price)))}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <button type="button" onClick={() => toggleProduct(product.id, 'visible')} className="border border-gray-200 p-3 hover:bg-gray-50" aria-label="Toggle visibility">{product.visible ? <Eye size={18} /> : <EyeOff size={18} />}</button>
                        <button type="button" onClick={() => toggleProduct(product.id, 'featured')} className={`px-3 py-2 text-xs font-black uppercase tracking-widest ${product.featured ? 'bg-brand-yellow' : 'border border-gray-200'}`}>Featured</button>
                        <button type="button" onClick={() => startEdit(product)} className="border border-gray-200 p-3 hover:bg-gray-50" aria-label="Edit product"><Pencil size={18} /></button>
                        <button type="button" onClick={() => deleteProduct(product.id)} className="border border-gray-200 p-3 text-brand-magenta hover:bg-gray-50" aria-label="Delete product"><Trash2 size={18} /></button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}

              <div className="mt-8 border border-gray-100 p-5">
                <h2 className="text-2xl font-black">Stored inquiries</h2>
                <div className="mt-4 space-y-3">
                  {inquiries.length ? inquiries.map((inquiry) => (
                    <div key={inquiry.id} className="border border-gray-100 p-4">
                      <p className="font-black">{inquiry.id} / {formatCurrency(inquiry.total)}</p>
                      <p className="text-sm text-gray-500">{new Date(inquiry.createdAt).toLocaleString()} / {inquiry.items.length} line items</p>
                    </div>
                  )) : <p className="text-sm text-gray-500">No WhatsApp checkout inquiries have been stored yet.</p>}
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

const Admin = () => (
  <StoreProvider>
    <AdminContent />
  </StoreProvider>
);

export default Admin;
