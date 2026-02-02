import Hero from '../components/Hero';
import About from '../components/About';
import FeaturedServices from '../components/FeaturedServices';
import Testimonials from '../components/Testimonials';
import ServiceAreas from '../components/ServiceAreas';
import Team from '../components/Team';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

export default function Home() {
    return (
        <main style={{ backgroundColor: '#fff' }}>
            <Navigation />
            <Hero />
            <About />
            <FeaturedServices />
            <Testimonials />
            <Team />
            <ServiceAreas />
            <Footer />

            {/* Inter and Outfit Fonts */}
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@300;400;600;700&display=swap" rel="stylesheet" />
        </main>
    );
}

