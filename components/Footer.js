import { siteConfig } from '../config/site-config';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
    const { brandColors } = siteConfig;

    return (
        <footer style={{ backgroundColor: '#fff', borderTop: '1px solid #f1f5f9', padding: '100px 0 40px 0' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '60px', marginBottom: '80px' }}>

                    <div>
                        <div style={{ marginBottom: '25px' }}>
                            <img src={siteConfig.logoUrl} alt={siteConfig.businessName} style={{ height: '100px', objectFit: 'contain' }} />
                        </div>

                        <p style={{ color: '#64748b', lineHeight: '1.7', marginBottom: '30px', maxWidth: '300px' }}>
                            Your top-rated plumbing experts on the Gulf Coast. Specializing in emergency repairs, water heaters, and precision installations.
                        </p>
                        <div style={{ display: 'flex', gap: '15px' }}>
                            <SocialIcon Icon={Facebook} color={brandColors.secondary} />
                            <SocialIcon Icon={Twitter} color={brandColors.secondary} />
                            <SocialIcon Icon={Instagram} color={brandColors.secondary} />
                            <SocialIcon Icon={Linkedin} color={brandColors.secondary} />
                        </div>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '25px', color: brandColors.secondary, fontWeight: '700' }}>Company</h4>
                        <FooterLinks links={['Home', 'Services', 'Service Area', 'Reviews', 'Contact']} />
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '25px', color: brandColors.secondary, fontWeight: '700' }}>Services</h4>
                        <FooterLinks links={['Emergency Repair', 'Water Heaters', 'Leak Detection', 'Drain Cleaning', 'Remodeling']} />
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '25px', color: brandColors.secondary, fontWeight: '700' }}>Contact Us</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <ContactItem Icon={MapPin} text="Gulf Coast, Florida" primary={brandColors.primary} />
                            <ContactItem Icon={Phone} text={siteConfig.phoneNumber} primary={brandColors.primary} />
                            <ContactItem Icon={Mail} text={siteConfig.email} primary={brandColors.primary} />
                        </div>
                    </div>

                </div>

                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '30px', display: 'flex', justifyContent: 'space-between', color: '#94a3b8', fontSize: '0.9rem' }}>
                    <p>Licensed & Insured Florida Plumbing Contractor #{siteConfig.licenseNumber}. Copyright © {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '30px' }}>
                        <span>Terms & Conditions</span>
                        <span>Privacy Policy</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

const SocialIcon = ({ Icon, color }) => (
    <div style={{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: '#F8FAFC',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'all 0.3s',
        border: '1px solid #e2e8f0'
    }}>
        <Icon size={18} color={color} />
    </div>
);

const FooterLinks = ({ links }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {links.map((link, i) => (
            <a key={i} href="#" style={{ color: '#64748b', textDecoration: 'none', transition: 'color 0.3s', fontSize: '0.95rem' }}>{link}</a>
        ))}
    </div>
);

const ContactItem = ({ Icon, text, primary }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#64748b' }}>
        <Icon size={18} color={primary} />
        <span style={{ fontSize: '0.95rem' }}>{text}</span>
    </div>
);

