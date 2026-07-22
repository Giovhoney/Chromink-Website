import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import SeoManager from './components/SeoManager';
import Home from './pages/Home';
import { localAreas } from './content/localAreas';

const About = lazy(() => import('./pages/About'));
const Careers = lazy(() => import('./pages/Careers'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const BannerCostBlog = lazy(() => import('./pages/BannerCostBlog'));
const BirthdayPresentBlog = lazy(() => import('./pages/BirthdayPresentBlog'));
const StickerBrandingBlog = lazy(() => import('./pages/StickerBrandingBlog'));
const TShirtEventsBlog = lazy(() => import('./pages/TShirtEventsBlog'));
const ShopSignageBlog = lazy(() => import('./pages/ShopSignageBlog'));
const FilePreparationBlog = lazy(() => import('./pages/FilePreparationBlog'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const Services = lazy(() => import('./pages/Services'));
const BannerPrinting = lazy(() => import('./pages/BannerPrinting'));
const BusinessSignage = lazy(() => import('./pages/BusinessSignage'));
const TShirtPrinting = lazy(() => import('./pages/TShirtPrinting'));
const StickerPrinting = lazy(() => import('./pages/StickerPrinting'));
const FlyerPrinting = lazy(() => import('./pages/FlyerPrinting'));
const PosterPrinting = lazy(() => import('./pages/PosterPrinting'));
const LargeFormatPrinting = lazy(() => import('./pages/LargeFormatPrinting'));
const VehicleBranding = lazy(() => import('./pages/VehicleBranding'));
const DocumentPrinting = lazy(() => import('./pages/DocumentPrinting'));
const CustomPrinting = lazy(() => import('./pages/CustomPrinting'));
const PictureFrame = lazy(() => import('./pages/PictureFrame'));
const Present = lazy(() => import('./pages/Present'));
const LocationPrinting = lazy(() => import('./pages/LocationPrinting'));
const Store = lazy(() => import('./pages/Store'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Categories = lazy(() => import('./pages/Categories'));
const Admin = lazy(() => import('./pages/Admin'));

const RouteFallback = () => (
  <div className="min-h-screen bg-white flex items-center justify-center px-4">
    <div className="text-center">
      <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-cyan mb-4">
        <span className="h-2 w-2 rounded-full bg-brand-cyan animate-pulse" />
        Loading Page
      </div>
      <p className="text-sm text-gray-500">Preparing the next ChromInk page...</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <SeoManager />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/banner-printing-cost-kumasi" element={<BannerCostBlog />} />
          <Route path="/blog/birthday-present-ideas" element={<BirthdayPresentBlog />} />
          <Route path="/blog/sticker-branding" element={<StickerBrandingBlog />} />
          <Route path="/blog/custom-tshirts-events" element={<TShirtEventsBlog />} />
          <Route path="/blog/shop-signage-kumasi" element={<ShopSignageBlog />} />
          <Route path="/blog/file-preparation-printing" element={<FilePreparationBlog />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/banner-printing" element={<BannerPrinting />} />
          <Route path="/services/business-signage" element={<BusinessSignage />} />
          <Route path="/services/t-shirt-printing" element={<TShirtPrinting />} />
          <Route path="/services/sticker-printing" element={<StickerPrinting />} />
          <Route path="/services/flyer-printing" element={<FlyerPrinting />} />
          <Route path="/services/poster-printing" element={<PosterPrinting />} />
          <Route path="/services/large-format-printing" element={<LargeFormatPrinting />} />
          <Route path="/services/vehicle-branding" element={<VehicleBranding />} />
          <Route path="/services/document-printing" element={<DocumentPrinting />} />
          <Route path="/services/custom-printing" element={<CustomPrinting />} />
          <Route path="/services/picture-frame" element={<PictureFrame />} />
          <Route path="/services/present" element={<Present />} />
          <Route path="/store" element={<Store />} />
          <Route path="/products" element={<Store />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/admin" element={<Admin />} />
          {localAreas.map((area) => (
            <Route key={area.path} path={area.path} element={<LocationPrinting />} />
          ))}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
