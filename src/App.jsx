import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Credibility from './components/Credibility';
import Insight from './components/Insight';
import DesignRules from './components/DesignRules';
import Video from './components/Video';
import Services from './components/Services';
import ROI from './components/ROI';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Credibility />
        <Insight />
        <DesignRules />
        <Video />
        <Services />
        <ROI />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
