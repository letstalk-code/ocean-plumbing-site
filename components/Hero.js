'use client';
import { useState } from 'react';
import { User, Phone, Mail, MapPin, Send, Loader2 } from 'lucide-react';
import { siteConfig } from '../config/site-config';

export default function Hero() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const data = {
            name: e.target.elements[0].value,
            phone: e.target.elements[1].value,
            email: e.target.elements[2].value,
            zip: e.target.elements[3].value,
            comment: e.target.elements[4].value,
        };

        try {
            const res = await fetch('/api/submit-yes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...data,
                    businessName: 'Ocean Lead',
                    tags: ['ocean_plumbing_lead']
                }),
            });

            if (res.ok) {
                setIsSuccess(true);
            } else {
                alert('Submission failed. Please try again.');
            }
        } catch (err) {
            console.error(err);
            alert('Correlation error. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section style={{ padding: '60px 0', position: 'relative', overflow: 'hidden' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>

                {/* Left Side: Copy */}
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#0076BD', marginBottom: '20px' }}>
                        <span style={{ fontSize: '1.2rem' }}>★★★★★</span>
                        <span style={{ fontWeight: '600', color: '#666' }}>5.0 (243 reviews)</span>
                    </div>
                    <h1 style={{ fontSize: '4.5rem', marginBottom: '30px', maxWidth: '500px' }}>
                        {siteConfig.heroTitle}
                    </h1>

                    {/* Decorative Image */}
                    <div style={{ position: 'relative', marginTop: '40px' }}>
                        <div style={{ width: '100%', height: '350px', backgroundColor: '#eee', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}>
                            <img src="/images/hero_luxury_bathroom.jpg" alt="Luxury Plumbing" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 80%' }} />
                        </div>
                        <svg style={{ position: 'absolute', top: '50%', right: '-80px', width: '300px', height: '100px', zIndex: 1 }} viewBox="0 0 300 100">
                            <path d="M0,50 Q150,0 300,50" fill="none" stroke="#0076BD" strokeWidth="3" strokeDasharray="10 5" />
                        </svg>
                    </div>
                </div>

                {/* Right Side: Lead Form */}
                <div style={{ position: 'relative' }}>
                    <div className="glass-card" style={{ padding: '40px', maxWidth: '500px', marginLeft: 'auto', backgroundColor: '#fff', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                        {isSuccess ? (
                            <div style={{ textAlign: 'center', padding: '40px 0' }}>
                                <div style={{ backgroundColor: '#0076BD', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                                    <Send color="#fff" size={40} />
                                </div>
                                <h3 style={{ fontSize: '2rem', marginBottom: '16px' }}>Request Sent!</h3>
                                <p style={{ color: '#666', fontSize: '1.1rem' }}>We've received your request and one of our coastal specialists will contact you shortly.</p>
                            </div>
                        ) : (
                            <>
                                <h3 style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '30px' }}>Let Us Help You Today.</h3>
                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                    <div style={inputGroupStyle}>
                                        <User size={18} color="#999" />
                                        <input required type="text" placeholder="Full Name" style={inputStyle} />
                                    </div>
                                    <div style={inputGroupStyle}>
                                        <Phone size={18} color="#999" />
                                        <input required type="tel" placeholder="Phone Number*" style={inputStyle} />
                                    </div>
                                    <div style={inputGroupStyle}>
                                        <Mail size={18} color="#999" />
                                        <input required type="email" placeholder="Email Address*" style={inputStyle} />
                                    </div>
                                    <div style={inputGroupStyle}>
                                        <MapPin size={18} color="#999" />
                                        <input required type="text" placeholder="Select Zip Code*" style={inputStyle} />
                                    </div>
                                    <div style={inputGroupStyle}>
                                        <textarea placeholder="How can we help?" style={{ ...inputStyle, height: '80px', paddingTop: '10px' }}></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        style={{
                                            backgroundColor: '#0076BD',
                                            color: '#fff',
                                            padding: '18px',
                                            borderRadius: '12px',
                                            border: 'none',
                                            fontWeight: '700',
                                            fontSize: '1.1rem',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '10px',
                                            boxShadow: '0 10px 20px rgba(0,118,189,0.2)'
                                        }}
                                    >
                                        {isSubmitting ? <><Loader2 className="animate-spin" size={20} /> Sending...</> : 'Get Free Estimate'}
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                    <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '300px', height: '300px', backgroundColor: 'rgba(0, 118, 189, 0.05)', filter: 'blur(80px)', borderRadius: '50%', zIndex: -1 }}></div>
                </div>
            </div>
        </section>
    );
}

const inputGroupStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 16px',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '12px',
};

const inputStyle = {
    border: 'none',
    outline: 'none',
    width: '100%',
    fontSize: '1rem',
    color: '#333'
};
