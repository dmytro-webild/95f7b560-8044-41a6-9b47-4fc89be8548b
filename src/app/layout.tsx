import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Manrope } from "next/font/google";



export const metadata: Metadata = {
  title: 'Alpha Heating & Cooling Llc. | Dallas HVAC & Plumbing',
  description: 'Your trusted HVAC and plumbing experts in Dallas, TX. Alpha Heating & Cooling provides 24/7 service, repairs, and installations. LGBTQ+ and women-owned.',
  keywords: ["HVAC Dallas, plumbing Dallas, heating repair, AC repair, Dallas HVAC contractor, 24-hour HVAC, women-owned business, Latino-owned business, LGBTQ+ friendly HVAC"],
  openGraph: {
    "title": "Alpha Heating & Cooling Llc. | Dallas HVAC & Plumbing",
    "description": "Your trusted HVAC and plumbing experts in Dallas, TX. Alpha Heating & Cooling provides 24/7 service, repairs, and installations. LGBTQ+ and women-owned.",
    "url": "https://alphahvac.site",
    "siteName": "Alpha Heating & Cooling Llc.",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/plumbing-professional-doing-his-job_23-2150721531.jpg",
        "alt": "Technician working on an HVAC unit"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Alpha Heating & Cooling Llc. | Dallas HVAC & Plumbing",
    "description": "Your trusted HVAC and plumbing experts in Dallas, TX. Alpha Heating & Cooling provides 24/7 service, repairs, and installations. LGBTQ+ and women-owned.",
    "images": [
      "http://img.b2bpic.net/free-photo/plumbing-professional-doing-his-job_23-2150721531.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${manrope.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
