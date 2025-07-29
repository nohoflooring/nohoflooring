import { Bebas_Neue, Poppins } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/src/app/globals.scss";
import Footer from "@/src/app/layout/footer";
import Header from "@/src/app/layout/header";
import GTM from "@/src/app/GTM";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  // metadataBase: new URL("https://www.circadianbrokers.com/"),
  title: "",
  description: "",
  //===== OG Tags =====
  openGraph: {
    title: "",
    description: "",
    url: "/",
    siteName: "No Ho Flooring",
    locale: "en_US",
    type: "website",
    images: "#",
  },
  //===== Canonical =====
  alternates: { canonical: "/" },
  //===== No-Index =====
  robots: {
    index: false,
    follow: false,
  },
  other: {
    "google-site-verification": "OE43kXiuw0tNfGo-tY5sMNey8Q5F5eKcBs6inB7tmJ4",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bebasNeue.variable} ${poppins.variable}`}>
        <GTM />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
