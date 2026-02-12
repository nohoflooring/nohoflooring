
export const metadata = {
  title: "Expert Flooring Contractors Los Angeles CA - NO-HO Flooring",
  description: "Licensed flooring contractors in Los Angeles CA with 40+ years experience. Professional installation, refinishing & replacement. Call (818) 932-4117 now!",
  //===== OG Tags =====
  openGraph: {
    title: "Expert Flooring Contractors Los Angeles CA - NO-HO Flooring",
    description: "Licensed flooring contractors in Los Angeles CA with 40+ years experience. Professional installation, refinishing & replacement. Call (818) 932-4117 now!",
    url: "/los-angeles/flooring-services-los-angeles-ca",
    siteName: "No Ho Flooring",
    locale: "en_US",
    type: "website",
    images: "https://www.nohoflooring.com/logo.webp",
  },
  //===== Canonical =====
  alternates: { canonical: "/los-angeles/flooring-services-los-angeles-ca" },
  //===== No-Index =====
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return children;
}
