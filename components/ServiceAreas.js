"use client";

import { siteConfig } from '../config/site-config';
import { ChevronRight, MapPin, Maximize2 } from 'lucide-react';
import { useState } from 'react';

export default function ServiceAreas() {
    const [hoveredLocation, setHoveredLocation] = useState(null);

    const locations = [
        { name: 'Pasco', x: '185px', y: '160px' },
        { name: 'Pinellas', x: '115px', y: '360px' },
        { name: 'Hillsborough', x: '270px', y: '400px' }
    ];

    return (
        <section style={{ padding: '120px 0', backgroundColor: '#f8fafc' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '80px', alignItems: 'center' }}>

                {/* Google Maps Style UI Wrapper */}
                <div style={{
                    position: 'relative',
                    borderRadius: '32px',
                    overflow: 'hidden',
                    height: '680px',
                    boxShadow: '0 50px 100px -20px rgba(0,0,0,0.1)',
                    backgroundColor: '#e3f2fd',
                    border: '1px solid #e2e8f0',
                    userSelect: 'none'
                }}>
                    {/* Refined SVG Map Background - Highly Accurate Tampa Bay Shape */}
                    <svg viewBox="0 0 400 600" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
                        <defs>
                            <filter id="gentleShadow">
                                <feDropShadow dx="0" dy="1" stdDeviation="2" floodOpacity="0.08" />
                            </filter>
                        </defs>

                        {/* Landmass Area */}
                        <path
                            d="M 70,0 L 400,0 L 400,600 L 180,600 Q 170,550 190,500 Q 210,440 195,380 Q 180,320 150,320 Q 110,310 70,320 L 70,260 Q 50,230 60,180 Q 70,120 70,0"
                            fill="#ffffff"
                            stroke="#cbd5e1"
                            strokeWidth="0.5"
                            filter="url(#gentleShadow)"
                        />

                        {/* Pinellas Peninsula */}
                        <path
                            d="M 70,320 Q 80,360 75,410 Q 70,470 95,510 Q 115,540 145,560 Q 165,540 155,480 Q 145,420 160,360 Q 175,340 150,320 L 70,320"
                            fill="#ffffff"
                            stroke="#cbd5e1"
                            strokeWidth="0.5"
                            filter="url(#gentleShadow)"
                        />

                        {/* Faint Road Grid */}
                        <g opacity="0.4" stroke="#f1f5f9" strokeWidth="6">
                            <path d="M 0,150 L 400,150" />
                            <path d="M 210,0 L 210,600" />
                            <path d="M 0,320 L 400,320" />
                            <path d="M 120,320 L 120,600" />
                        </g>
                    </svg>

                    {/* UI Elements */}
                    <div style={{
                        position: 'absolute',
                        top: '24px',
                        left: '24px',
                        backgroundColor: '#fff',
                        padding: '12px 20px',
                        borderRadius: '4px',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#475569',
                        cursor: 'pointer',
                        zIndex: 10
                    }}>
                        View larger map
                    </div>

                    <div style={{
                        position: 'absolute',
                        bottom: '32px',
                        left: '24px',
                        width: '300px',
                        backgroundColor: '#fff',
                        borderRadius: '20px',
                        padding: '28px',
                        boxShadow: '0 15px 40px rgba(0,0,0,0.12)',
                        border: '1px solid #f1f5f9',
                        zIndex: 10
                    }}>
                        <h4 style={{ margin: '0 0 20px 0', fontSize: '19px', fontWeight: '900', color: '#001f3f' }}>Service Areas</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {[
                                { name: 'Hillsborough County', status: 'active' },
                                { name: 'Pinellas County', status: 'active' },
                                { name: 'Pasco County', status: 'pending' }
                            ].map((county, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                    <div style={{
                                        width: '14px',
                                        height: '14px',
                                        borderRadius: '50%',
                                        backgroundColor: county.status === 'active' ? '#10b981' : '#bbf7d0'
                                    }} />
                                    <span style={{ fontSize: '16px', fontWeight: '600', color: '#334155' }}>{county.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {locations.map((loc, i) => (
                        <div key={i} style={{
                            position: 'absolute',
                            left: loc.x,
                            top: loc.y,
                            transform: 'translate(-50%, -50%)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            cursor: 'pointer',
                            zIndex: 20
                        }}
                            onMouseEnter={() => setHoveredLocation(loc.name)}
                            onMouseLeave={() => setHoveredLocation(null)}
                        >
                            <div style={{
                                width: '60px',
                                height: '60px',
                                backgroundColor: '#fff',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 8px 24px rgba(0,0,0,0.14)',
                                border: '1px solid #f8fafc',
                                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                transform: hoveredLocation === loc.name ? 'scale(1.2) translateY(-10px)' : 'scale(1)'
                            }}>
                                <MapPin size={28} color="#001f3f" fill="#001f3f" />
                            </div>

                            <div style={{
                                marginTop: '12px',
                                backgroundColor: '#fff',
                                padding: '8px 20px',
                                borderRadius: '100px',
                                fontSize: '15px',
                                fontWeight: '800',
                                color: '#1e293b',
                                boxShadow: '0 4px 10px rgba(0,0,0,0.06)',
                                whiteSpace: 'nowrap',
                                border: '1px solid #f1f5f9'
                            }}>
                                {loc.name}
                            </div>
                        </div>
                    ))}

                    <div style={{
                        position: 'absolute',
                        bottom: '32px',
                        right: '24px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px',
                        zIndex: 10
                    }}>
                        <div style={{
                            width: '48px',
                            height: '48px',
                            backgroundColor: '#fff',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                            cursor: 'pointer'
                        }}>
                            <Maximize2 size={20} color="#64748b" />
                        </div>
                    </div>

                    <div style={{ position: 'absolute', bottom: '12px', right: '100px', fontSize: '11px', color: '#94a3b8' }}>
                        Map data ©2026 Google
                    </div>
                </div>

                {/* Content Side */}
                <div style={{ paddingLeft: '40px' }}>
                    <span style={{
                        color: siteConfig.colors?.primary || '#ef4444',
                        fontWeight: '900',
                        textTransform: 'uppercase',
                        letterSpacing: '5px',
                        display: 'block',
                        marginBottom: '24px',
                        fontSize: '0.85rem'
                    }}>
                        Our Coastal Footprint
                    </span>
                    <h2 style={{
                        fontSize: '4.2rem',
                        marginBottom: '35px',
                        fontWeight: '900',
                        lineHeight: '1.05',
                        letterSpacing: '-2px',
                        color: '#001f3f'
                    }}>
                        Serving <span style={{ color: siteConfig.colors?.tertiary || '#94a3b8' }}>Tampa Bay</span> & Gulf Coast
                    </h2>
                    <p style={{
                        fontSize: '1.3rem',
                        color: '#475569',
                        marginBottom: '48px',
                        lineHeight: '1.7',
                        fontWeight: '450'
                    }}>
                        Reliable plumbing expertise across Pinellas, Pasco, and Hillsborough. We bring master-level service to every corner of the community.
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '16px'
                    }}>
                        {siteConfig.neighborhoods.map((area, i) => (
                            <div key={i} style={{
                                backgroundColor: '#fff',
                                padding: '18px 24px',
                                borderRadius: '14px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '16px',
                                border: '1px solid #f1f5f9',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                                transition: 'all 0.3s ease'
                            }}>
                                <div style={{
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '8px',
                                    backgroundColor: '#f8fafc',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <MapPin size={16} style={{ color: siteConfig.colors?.primary || '#ef4444' }} />
                                </div>
                                <span style={{ fontWeight: '800', color: '#1e293b', fontSize: '1.1rem' }}>{area}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
