import { siteConfig } from '../config/site-config';
import { Play, ArrowUpRight } from 'lucide-react';

export default function LuxuryHero() {
    const { brandColors } = siteConfig;

    return (
        <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
            <div className="container">
                {/* Navigation / Header Area */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '60px' }}>
                    <div style={{ fontWeight: '800', fontSize: '1.8rem', letterSpacing: '-1px' }}>
                        <img src={siteConfig.logoUrl} alt={siteConfig.businessName} style={{ height: '120px', objectFit: 'contain' }} />
                    </div>

                    <div style={{ display: 'flex', gap: '30px', fontWeight: '500', fontSize: '0.9rem', color: brandColors.secondary }}>
                        <span>Home</span>
                        <span>Service Area</span>
                        <span>Services</span>
                        <span>Reviews</span>
                        <span>Contact</span>
                    </div>
                    <button style={{ backgroundColor: brandColors.secondary, color: '#fff', padding: '12px 25px', borderRadius: '12px', border: 'none', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                        Book Service <ArrowUpRight size={16} />
                    </button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px', alignItems: 'center' }}>

                    {/* Left Side: Headline */}
                    <div>
                        <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: '6rem', lineHeight: '1', marginBottom: '40px', fontWeight: '500', color: brandColors.secondary }}>
                            Coastal Excellence<br /><span style={{ color: brandColors.primary }}>in Every Drop</span>
                        </h1>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
                            <button style={{ backgroundColor: brandColors.primary, color: '#fff', padding: '18px 35px', borderRadius: '12px', border: 'none', fontWeight: '700', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', boxShadow: `0 10px 20px ${brandColors.primary}33` }}>
                                <div style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '5px', borderRadius: '6px' }}><Play size={12} fill="white" /></div>
                                SCHEDULE NOW
                            </button>
                            <p style={{ maxWidth: '300px', fontSize: '1.1rem', color: '#666', lineHeight: '1.4' }}>
                                {siteConfig.tagline}
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Collage */}
                    <div style={{ position: 'relative' }}>
                        <img src="/images/kitchen-hero.jpg" style={{ width: '100%', height: '500px', objectFit: 'cover', borderRadius: '32px' }} />

                        {/* The Rating Card Overlay */}
                        <div style={{ position: 'absolute', top: '40px', right: '-40px', backgroundColor: '#fff', padding: '30px', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', textAlign: 'right', width: '220px', borderRight: `8px solid ${brandColors.primary}` }}>
                            <div style={{ fontSize: '4rem', fontWeight: '700', lineHeight: '1', color: brandColors.secondary }}>5.0<span style={{ color: brandColors.primary, fontSize: '2rem' }}>★</span></div>
                            <div style={{ fontWeight: '700', marginTop: '10px', color: brandColors.secondary }}>Customer Rating</div>
                            <p style={{ fontSize: '0.9rem', color: '#999', marginTop: '5px' }}>Top 8% of Florida contractors</p>
                        </div>

                        {/* Smaller collage image */}
                        <div style={{ position: 'absolute', bottom: '40px', right: '-80px', width: '250px', height: '180px', borderRadius: '24px', overflow: 'hidden', border: '8px solid #fff' }}>
                            <img src="/images/plumber-action.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}

