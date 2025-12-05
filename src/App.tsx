import Hero from './components/sections/Hero';
import Vision from './components/sections/Vision';
import PetJourney from './components/sections/PetJourney';
import StudyReports from './components/sections/StudyReports';
import PetUniversity from './components/sections/PetUniversity';
import CommunityStories from './components/sections/CommunityStories';
import ServicesEcosystem from './components/sections/ServicesEcosystem';
import FinalCTA from './components/sections/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Vision />
      <PetJourney />
      <StudyReports />
      <PetUniversity />
      <CommunityStories />
      <ServicesEcosystem />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
