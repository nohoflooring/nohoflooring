export const metadata = {
  title: "Thank You",
  description: "",
  //===== OG Tags =====
  openGraph: {
    title: "Thank You",
    description: "",
    url: "/thank-you",
    siteName: "No Ho Flooring",
    locale: "en_US",
    type: "website",
    images: "https://www.nohoflooring.com/logo.webp",
  },
  //===== Canonical =====
  alternates: { canonical: "/thank-you" },
  //===== No-Index =====
  robots: {
    index: false,
    follow: false,
  },

};

export default function RootLayout({ children }) {
  return children;
}