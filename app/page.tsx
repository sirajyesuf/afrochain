import Hero from '@/app/components/Hero';
import Roadmap from '@/app/components/Roadmap';
import Pillars from '@/app/components/Pillars';
import Passes from '@/app/components/Passes';
import MarketEntryCapital from '@/app/components/MarketEntryCapital';
import AboutUs from '@/app/components/AboutUs';
import NextChainHub from '@/app/components/NextChainHub';
import Hackathon from '@/app/components/Hackathon';
import SpeakersSection from '@/app/components/Speakers';
import VenueSection from '@/app/components/VenueSection';
import PastEventsGallery from '@/app/components/PastEventsGallery';
import PartnersSection from '@/app/components/Partners';
import PartnershipOpportunities from '@/app/components/PartnershipOpportunities';
import Footer from '@/app/components/Footer';
import { eventJsonLd, events } from '@/app/data/events';

const siteUrl = 'https://afrochainsummit.com';

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            events.map((event) => eventJsonLd(event, siteUrl)),
          ),
        }}
      />
      <Hero />
      <Roadmap />
      <Pillars />
      <Passes />
      <MarketEntryCapital />
      {/* <Stats /> */}
      <AboutUs partnershipHref="#partnership-opportunities" />
      <section id="launchpad" aria-label="Launchpad Section">
        <NextChainHub />
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
      <PastEventsGallery />
      <PartnersSection />
      <PartnershipOpportunities />
      <Footer />
    </>
  );
}
