
export const metadata = {
  title: "Expert Flooring Contractors Universal City CA - NO-HO Flooring",
  description: "Licensed flooring contractors in Universal City CA with 40+ years experience. Professional installation, refinishing & replacement. Call (818) 932-4117 today!",
  //===== OG Tags =====
  openGraph: {
    title: "Expert Flooring Contractors Universal City CA - NO-HO Flooring",
    description: "Licensed flooring contractors in Universal City CA with 40+ years experience. Professional installation, refinishing & replacement. Call (818) 932-4117 today!",
    url: "/universal-city/flooring-services-universal-city-ca",
    siteName: "No Ho Flooring",
    locale: "en_US",
    type: "website",
    images: "https://www.nohoflooring.com/logo.webp",
  },
  //===== Canonical =====
  alternates: { canonical: "/universal-city/flooring-services-universal-city-ca" },
  //===== No-Index =====
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return children;
}
