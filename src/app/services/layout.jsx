export const metadata = {
  title: "Our Flooring Services - North Hollywood",
  description: " We provide a range of flooring services in North Hollywood from commercial hardwood flooring to residential vinyl and laminate flooring.",
  //===== OG Tags =====
  openGraph: {
    title: "Our Flooring Services - North Hollywood",
    description: " We provide a range of flooring services in North Hollywood from commercial hardwood flooring to residential vinyl and laminate flooring.",
    url: "/services",
    siteName: "No Ho Flooring",
    locale: "en_US",
    type: "website",
    images: "https://www.nohoflooring.com/logo.webp",
  },
  //===== Canonical =====
  alternates: { canonical: "/services" },

};

export default function RootLayout({ children }) {
  return children;
}
