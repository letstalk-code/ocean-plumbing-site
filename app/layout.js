import './globals.css';

export const metadata = {
    title: 'Ocean Plumbing Services LLC | Coastal Plumbing Excellence',
    description: 'Reliability, integrity, and quality in every coastal home. Expert plumbing services for Pinellas and Pasco Counties.',
    openGraph: {
        title: 'Ocean Plumbing Services LLC',
        description: 'Elite plumbing services and coastal luxury bathroom renovations.',
        url: 'https://ocean-plumbing-site.vercel.app',
        siteName: 'Ocean Plumbing Services',
        images: [
            {
                url: 'https://ocean-plumbing-site.vercel.app/images/hero_luxury_bathroom.jpg',
                width: 1200,
                height: 630,
                alt: 'Ocean Plumbing Services Luxury Preview',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
