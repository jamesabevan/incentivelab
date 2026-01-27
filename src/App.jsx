import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Insight from './components/Insight';
import DesignRules from './components/DesignRules';
import Video from './components/Video';
import Services from './components/Services';
import ROI from './components/ROI';
import FinalCTA from './components/FinalCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { QuickPlanReview, HealthCheck, ExecutiveWorkshop, FullRedesign } from './pages/services';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Video />
      <Insight />
      <DesignRules />
      <Services />
      <ROI />
      <FinalCTA />
    </>
  );
}

function ContactPage() {
  return <Contact />;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services/quick-plan-review" element={<QuickPlanReview />} />
            <Route path="/services/health-check" element={<HealthCheck />} />
            <Route path="/services/executive-workshop" element={<ExecutiveWorkshop />} />
            <Route path="/services/full-redesign" element={<FullRedesign />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
