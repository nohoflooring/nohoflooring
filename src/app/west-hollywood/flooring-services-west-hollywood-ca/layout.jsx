
export const metadata = {
  title: "Expert Flooring Contractors Universal City CA - NO-HO Flooring",
  description: "Licensed flooring contractors near West Hollywood CA with 40+ years experience. Luxury installation, refinishing & replacement. Call (818) 932-4117 now!",
  //===== OG Tags =====
  openGraph: {
    title: "Expert Flooring Contractors Universal City CA - NO-HO Flooring",
    description: "Licensed flooring contractors near West Hollywood CA with 40+ years experience. Luxury installation, refinishing & replacement. Call (818) 932-4117 now!",
    url: "/west-hollywood/flooring-services-west-hollywood-ca",
    siteName: "No Ho Flooring",
    locale: "en_US",
    type: "website",
    images: "https://www.nohoflooring.com/logo.webp",
  },
  //===== Canonical =====
  alternates: { canonical: "/west-hollywood/flooring-services-west-hollywood-ca" },
  //===== No-Index =====
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }) {
  return children;
}
