
export const metadata = {
  title: "Professional Flooring Contractors Burbank CA - NO-HO Flooring",
  description: "Licensed flooring contractors in Burbank CA with 40+ years experience. Expert installation, refinishing & replacement services. Call (818) 932-4117 today!",
  //===== OG Tags =====
  openGraph: {
    title: "Professional Flooring Contractors Burbank CA - NO-HO Flooring",
    description: "Licensed flooring contractors in Burbank CA with 40+ years experience. Expert installation, refinishing & replacement services. Call (818) 932-4117 today!",
    url: "/burbank/flooring-services-burbank-ca",
    siteName: "No Ho Flooring",
    locale: "en_US",
    type: "website",
    images: "https://www.nohoflooring.com/logo.webp",
  },
  //===== Canonical =====
  alternates: { canonical: "/burbank/flooring-services-burbank-ca" },
  //===== No-Index =====
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return children;
}
