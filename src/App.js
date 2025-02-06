import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Lander from './Lander';
import PremiumLexWebsite from './PremiumLexWebsite';
import ProjectShowcase from './pages/ProjectShowcase';
import AboutUs from './pages/AboutUs';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CareersPage from './pages/CareersPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PremiumLexWebsite />} />
        <Route path="/projects" element={<ProjectShowcase />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/termsofservice" element={<TermsOfService />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/career" element={<CareersPage />} />
        <Route path="/Blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />

      </Routes>
    </Router>
  );
}

export default App;
