import { siteConfig } from '../config/site-config';
import { ArrowUpRight, Droplet, AlertTriangle, Thermometer, Wrench, ShieldCheck } from 'lucide-react';


export default function BentoServices() {
    const { brandColors, featuredServices } = siteConfig;

    const getIcon = (title) => {
        if (title.toLowerCase().includes('emergency')) return <AlertTriangle size={24} color={brandColors.primary} />;
        if (title.toLowerCase().includes('leak')) return <Droplet size={24} color={brandColors.primary} />;
        if (title.toLowerCase().includes('heater')) return <Thermometer size={24} color={brandColors.primary} />;
        if (title.toLowerCase().includes('drain')) return <Wrench size={24} color={brandColors.primary} />;
        return <ShieldCheck size={24} color={brandColors.primary} />;
    };



    return (
        <section style={{ padding: '100px 0', backgroundColor: '#F8FAFC' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
                    <div>
                        <span style={{ color: brandColors.primary, fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Our Expertise</span>
                        <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '4rem', color: brandColors.secondary, marginTop: '10px', lineHeight: '1.1' }}>
                            Exceptional results<br />for every project
                        </h2>
                    </div>
                    <p style={{ maxWidth: '400px', fontSize: '1.1rem', color: '#64748b', marginBottom: '10px' }}>
                        From emergency call-outs to precision installations, we bring the latest technology to your home's most vital systems.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gridAutoRows: 'minmax(200px, auto)', gap: '20px' }}>
                    {featuredServices.map((service, index) => {
                        const isLarge = service.size === 'large';
                        const isMedium = service.size === 'medium';

                        return (
                            <div
                                key={index}
                                style={{
                                    gridColumn: isLarge ? 'span 8' : isMedium ? 'span 6' : 'span 4',
                                    gridRow: isLarge ? 'span 2' : 'span 1',
                                    backgroundColor: '#fff',
                                    borderRadius: '32px',
                                    padding: '40px',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                                    border: '1px solid #f1f5f9',
                                    transition: 'transform 0.3s ease'
                                }}
                            >
                                <div style={{ position: 'relative', zIndex: 2 }}>
                                    <div style={{ width: '50px', height: '50px', borderRadius: '16px', backgroundColor: `${brandColors.primary}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                        {getIcon(service.title)}
                                    </div>
                                    <h3 style={{ fontSize: isLarge ? '2.5rem' : '1.5rem', fontWeight: '700', color: brandColors.secondary, marginBottom: '15px' }}>{service.title}</h3>
                                    <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: '1.6', maxWidth: isLarge ? '400px' : '100%' }}>{service.desc}</p>
                                </div>

                                <div style={{ position: 'relative', zIndex: 2, marginTop: '30px' }}>
                                    <button style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        background: 'none',
                                        border: 'none',
                                        color: brandColors.secondary,
                                        fontWeight: '700',
                                        cursor: 'pointer',
                                        padding: '0'
                                    }}>
                                        View Details <ArrowUpRight size={18} color={brandColors.primary} />
                                    </button>
                                </div>

                                {isLarge && (
                                    <img
                                        src={service.img}
                                        alt={service.title}
                                        style={{
                                            position: 'absolute',
                                            right: '-20px',
                                            bottom: '-20px',
                                            width: '50%',
                                            height: '110%',
                                            objectFit: 'cover',
                                            borderRadius: '32px',
                                            opacity: 0.9
                                        }}
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

