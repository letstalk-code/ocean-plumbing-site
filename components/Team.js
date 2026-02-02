import { siteConfig } from '../config/site-config';

export default function Team() {
    return (
        <section style={{ padding: '100px 0' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '60px' }}>Meet the Owner</h2>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    {siteConfig.team.map((photo, i) => (
                        <div key={i} style={{ height: '400px', width: '100%', maxWidth: '600px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)' }}>
                            <img src={photo} alt="Owner of Ocean Plumbing Services" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
