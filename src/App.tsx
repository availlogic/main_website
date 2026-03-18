import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServicesIndex from './pages/services/ServicesIndex';
import ServiceDetail from './pages/services/ServiceDetail';
import CaseStudiesIndex from './pages/case-studies/CaseStudiesIndex';
import CaseStudyDetail from './pages/case-studies/CaseStudyDetail';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsOfService from './pages/legal/TermsOfService';
import Disclaimer from './pages/legal/Disclaimer';

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Contact />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-deep">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesIndex />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/case-studies" element={<CaseStudiesIndex />} />
            <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
