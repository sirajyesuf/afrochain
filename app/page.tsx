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

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <AboutUs />
      <section id="launchpad" aria-label="Launchpad Section">
        <Launchpad />
      </section>
      <section id="hackathon" aria-label="Hackathon Section">
        <Hackathon />
      </section>
      <section id="speakers" aria-label="Speakers Section">
        <SpeakersSection />
      </section>
      <section id="venue" aria-label="Venue Section">
        <VenueSection />
      </section>
      <PartnersSection />
      <Footer />
    </>
  );
}