import type { Metadata } from "next";
import { Montserrat, Bebas_Neue } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.carpetcodukinfield.co.uk'),
  title: 'Carpet Fitters Dukinfield | CARPET Co. | Since 1974',
  description: 'Professional carpet shop, planners and fitters in Dukinfield, Greater Manchester. Carpets and flooring — family business since 1974. Expert installation and free quotes.',
  keywords: [
    'carpet fitter Dukinfield', 'carpet fitting Dukinfield', 'carpet shop Dukinfield',
    'carpet shop Manchester', 'carpet fitter Manchester', 'carpet fitting Greater Manchester',
    'flooring Dukinfield', 'flooring Manchester', 'carpet and flooring', 'carpet fitter near me',
    'professional carpet fitter', 'carpet fitting service', 'carpet planner Dukinfield',
    'carpet layer Dukinfield', 'carpet installation Dukinfield', 'best carpet fitter Dukinfield',
    'local carpet fitter', 'carpet fitter SK16', 'family carpet fitters', 'carpet fitting since 1974',
  ],
  authors: [{ name: 'CARPET Co. Dukinfield' }],
  alternates: {
    canonical: 'https://www.carpetcodukinfield.co.uk',
  },
  openGraph: {
    title: 'CARPET Co. Dukinfield - Carpet Shop & Fitters of Distinction',
    description: 'Professional carpet shop, planners and fitters in Dukinfield. Carpets and flooring. Family business since 1974. Free quotes.',
    url: 'https://www.carpetcodukinfield.co.uk',
    siteName: 'CARPET Co. Dukinfield',
    locale: 'en_GB',
    type: 'website',
    // TODO: Add OG image - create a landscape image (1200x630px) and add:
    // images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'CARPET Co. Dukinfield' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CARPET Co. Dukinfield - Carpet Shop & Fitters of Distinction',
    description: 'Professional carpet shop, planners and fitters in Dukinfield. Carpets and flooring. Family business since 1974. Free quotes.',
    // TODO: images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${bebasNeue.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              "name": "CARPET Co. Dukinfield",
              "description": "Professional carpet shop, planners and fitters in Dukinfield, Greater Manchester. Carpets and flooring. Family business since 1974.",
              "url": "https://www.carpetcodukinfield.co.uk",
              "telephone": "01613445377",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Wild St",
                "addressLocality": "Dukinfield",
                "postalCode": "SK16 4DL",
                "addressRegion": "Greater Manchester",
                "addressCountry": "GB",
              },
              "areaServed": [
                { "@type": "City", "name": "Dukinfield" },
                { "@type": "City", "name": "Manchester" },
                { "@type": "AdministrativeArea", "name": "Greater Manchester" },
              ],
              "foundingDate": "1974",
              "priceRange": "££",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Carpet Fitting",
                      "description": "Professional carpet fitting and installation service for homes and businesses in Greater Manchester.",
                    },
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Carpet Planning",
                      "description": "Expert carpet planning and measuring service to ensure the perfect fit for your space.",
                    },
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Flooring",
                      "description": "Supply and installation of quality flooring solutions.",
                    },
                  },
                ],
              },
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61584835528881",
                "https://www.instagram.com/carpetcodukinfield",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
