import LuxuryHero from '../components/LuxuryHero';
import BentoServices from '../components/BentoServices';
import LuxuryDetails from '../components/LuxuryDetails';
import Testimonials from '../components/Testimonials';
import ServiceAreas from '../components/ServiceAreas';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { siteConfig } from '../config/site-config';

export default function Home() {
    return (
        <main style={{ backgroundColor: '#fff' }}>
            <Navigation />
            <LuxuryHero />
            <BentoServices />
            <LuxuryDetails />
            <Testimonials />
            <ServiceAreas />
            <Footer config={siteConfig} />

            {/* Syne and Playfair Fonts */}
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Syne:wght@400;700;800&display=swap" rel="stylesheet" />
        </main>
    );
}
