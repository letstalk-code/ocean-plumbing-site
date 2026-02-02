import { siteConfig } from '../config/site-config';
import { ArrowUpRight, Droplet } from 'lucide-react';

export default function LuxuryDetails() {
    const { brandColors } = siteConfig;

    return (
        <section style={{ backgroundColor: brandColors.secondary, color: '#fff', padding: '100px 0', borderRadius: '48px', margin: '0 20px 60px 20px' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>

                    <div style={{ position: 'relative' }}>
                        <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '5rem', lineHeight: '1', fontWeight: '400' }}>
                            Experience excellence across the <span style={{ color: brandColors.primary }}>Gulf Coast</span>
                        </h2>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '60px' }}>
                            <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: brandColors.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 0 20px ${brandColors.primary}66` }}>
                                <Droplet size={24} color="white" fill="white" />
                            </div>
                            <p style={{ maxWidth: '300px', fontSize: '1.1rem', opacity: 0.9 }}>
                                One call is all it takes—our complete plumbing solutions bring comfort and convenience to your doorstep.
                            </p>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        <img src="/images/plumber-tools.png" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '24px' }} />
                        <div style={{ backgroundColor: '#fff', color: brandColors.secondary, padding: '30px', borderRadius: '24px', position: 'relative', borderBottom: `8px solid ${brandColors.primary}` }}>
                            <div style={{ fontWeight: '700', fontSize: '1.2rem', marginBottom: '100px' }}>Check Service Availability</div>
                            <div style={{ position: 'absolute', bottom: '30px', right: '30px' }}>
                                <ArrowUpRight size={24} color={brandColors.primary} />
                            </div>
                        </div>
                        <img src="/images/bathroom-plumber.jpg" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '24px', gridColumn: 'span 2' }} />
                    </div>



                </div>
            </div>
        </section>
    );
}

