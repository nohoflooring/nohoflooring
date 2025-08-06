export const metadata = {
  title: "Blogs",
  description: "",
  //===== OG Tags =====
  openGraph: {
    title: "Blogs",
    description: "",
    url: "/blogs",
    siteName: "No Ho Flooring",
    locale: "en_US",
    type: "website",
    images: "https://www.nohoflooring.com/logo.webp",
  },
  //===== Canonical =====
  alternates: { canonical: "/blogs" },

};

export default function RootLayout({ children }) {
  return children;
}