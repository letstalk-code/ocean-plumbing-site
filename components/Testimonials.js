import { siteConfig } from '../config/site-config';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
    const { brandColors, testimonials } = siteConfig;

    return (
        <section style={{ padding: '120px 0', backgroundColor: '#fff' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <span style={{ color: brandColors.primary, fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Customer Feedback</span>
                    <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '4rem', color: brandColors.secondary, marginTop: '10px', lineHeight: '1.1' }}>
                        Trusted by homeowners<br />across Pasco County
                    </h2>

                    {/* Platform Badges */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginTop: '40px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: '#f8fafc', padding: '10px 20px', borderRadius: '50px', border: '1px solid #e2e8f0' }}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" style={{ width: '20px' }} />
                            <span style={{ fontWeight: '700', color: brandColors.secondary }}>5.0 Rating</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: '#f8fafc', padding: '10px 20px', borderRadius: '50px', border: '1px solid #e2e8f0' }}>
                            <div style={{ color: '#FF6B00', fontWeight: '900', fontSize: '1.2rem' }}>ＨＡ</div>
                            <span style={{ fontWeight: '700', color: brandColors.secondary }}>HomeAdvisor Elite</span>
                        </div>
                    </div>
                </div>


                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
                    {testimonials.map((t, i) => (
                        <div key={i} style={{
                            padding: '40px',
                            backgroundColor: '#F8FAFC',
                            borderRadius: '32px',
                            position: 'relative',
                            border: '1px solid #f1f5f9',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}>
                            <div>
                                <div style={{ display: 'flex', gap: '2px', marginBottom: '20px' }}>
                                    {[...Array(5)].map((_, star) => (
                                        <Star key={star} size={16} fill={brandColors.primary} color={brandColors.primary} />
                                    ))}
                                </div>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: brandColors.secondary, marginBottom: '30px', fontStyle: 'italic' }}>"{t.text}"</p>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', borderTop: '1px solid #e2e8f0', paddingTop: '20px' }}>
                                <div style={{ width: '45px', height: '45px', borderRadius: '50%', backgroundColor: brandColors.primary, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '1.2rem' }}>
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <h5 style={{ fontWeight: '700', fontSize: '1rem', color: brandColors.secondary }}>{t.name}</h5>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                        {t.name.includes('Google') ? (
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" style={{ width: '12px' }} />
                                        ) : (
                                            <span style={{ fontSize: '0.8rem', color: brandColors.primary, fontWeight: '600' }}>ＨＡ</span>
                                        )}
                                        <p style={{ fontSize: '0.8rem', color: '#64748b' }}>{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
