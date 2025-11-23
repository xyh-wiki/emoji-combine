// @Author:XYH
// @Date:2025-11-23
// @Description: 应用路由配置，基于 react-router-dom v6

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { FAQPage } from "../pages/FAQ";
import { AboutPage } from "../pages/About";
import { ContactPage } from "../pages/Contact";
import { PrivacyPage } from "../pages/Privacy";
import { TermsPage } from "../pages/Terms";
import { SitemapPage } from "../pages/SitemapPage";
import { NotFoundPage } from "../pages/NotFound";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Toast } from "../components/common/Toast";

export function AppRouter() {
  return (
    <BrowserRouter>
      {/* 顶部导航栏 */}
      <Navbar />
      {/* 主体路由区域 */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/sitemap" element={<SitemapPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {/* 全局 Toast 提示 */}
      <Toast />
      {/* 页面底部 Footer */}
      <Footer />
    </BrowserRouter>
  );
}
