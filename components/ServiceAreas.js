import { siteConfig } from '../config/site-config';
import { ChevronRight, MapPin } from 'lucide-react';

export default function ServiceAreas() {
    const { brandColors, neighborhoods } = siteConfig;

    return (
        <section style={{ padding: '100px 0', backgroundColor: '#fcfcfc' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
                <div style={{ borderRadius: '48px', overflow: 'hidden', height: '600px', boxShadow: `0 20px 40px ${brandColors.secondary}22`, border: `8px solid #fff` }}>
                    <img
                        src="/images/pasco-county-aerial.jpg"
                        alt="Florida Service Area"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>

                <div>
                    <span style={{ color: brandColors.primary, fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '15px' }}>Location</span>
                    <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '4rem', color: brandColors.secondary, marginBottom: '40px', lineHeight: '1.1' }}>
                        Pasco County <br />
                        <span style={{ fontStyle: 'italic', fontWeight: '400', color: brandColors.primary }}>Neighborhoods</span><br />
                        We Proudly Serve
                    </h2>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        {neighborhoods.map((area, i) => (
                            <div key={i} style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                padding: '20px',
                                backgroundColor: '#fff',
                                borderRadius: '16px',
                                border: '1px solid #f1f5f9',
                                boxShadow: '0 4px 10px rgba(0,0,0,0.02)',
                                transition: 'transform 0.2s ease'
                            }}>
                                <div style={{ color: brandColors.primary }}><MapPin size={20} fill={brandColors.primary} fillOpacity="0.1" /></div>
                                <span style={{ fontWeight: '600', color: brandColors.secondary, fontSize: '1rem' }}>{area}</span>
                            </div>
                        ))}
                    </div>

                    <button style={{
                        marginTop: '40px',
                        backgroundColor: brandColors.secondary,
                        color: '#fff',
                        padding: '18px 35px',
                        borderRadius: '12px',
                        border: 'none',
                        fontWeight: '700',
                        fontSize: '1rem',
                        cursor: 'pointer'
                    }}>
                        Check Your Zip Code
                    </button>
                </div>
            </div>
        </section>
    );
}

