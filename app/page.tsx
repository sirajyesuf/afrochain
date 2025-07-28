import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import Stats from '@/app/components/Stats';
import AboutUs from '@/app/components/AboutUs';
import Launchpad from '@/app/components/Launchpad';
import Hackathon from '@/app/components/Hackathon';
import SpeakersSection from '@/app/components/Speakers';
import VenueSection from '@/app/components/VenueSection';
import PartnersSection from '@/app/components/Partners';
import Footer from '@/app/components/Footer';

function App() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Stats />
      <AboutUs />
      <div id="launchpad">
      <Launchpad />
      </div>
      <div id="hackathon">
      <Hackathon />
      </div>
      <div id="speakers">
      <SpeakersSection />
      </div>
      <div id="venue">
      <VenueSection />
      </div>
      <PartnersSection />
      <Footer />
    </div>
  );
}

export default App;