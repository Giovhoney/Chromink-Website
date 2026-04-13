import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import SeoManager from './components/SeoManager';
import Home from './pages/Home';
import Services from './pages/Services';
import BannerPrinting from './pages/BannerPrinting';
import BusinessSignage from './pages/BusinessSignage';
import TShirtPrinting from './pages/TShirtPrinting';
import StickerPrinting from './pages/StickerPrinting';
import FlyerPrinting from './pages/FlyerPrinting';
import PosterPrinting from './pages/PosterPrinting';
import LargeFormatPrinting from './pages/LargeFormatPrinting';
import VehicleBranding from './pages/VehicleBranding';
import DocumentPrinting from './pages/DocumentPrinting';
import CustomPrinting from './pages/CustomPrinting';
import PictureFrame from './pages/PictureFrame';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BannerCostBlog from './pages/BannerCostBlog';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <SeoManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/banner-printing-cost-kumasi" element={<BannerCostBlog />} />
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
      </Routes>
    </Router>
  );
}

export default App;
