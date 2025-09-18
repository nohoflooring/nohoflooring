import { Bebas_Neue, Poppins } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/src/app/globals.scss";
import ConditionalLayout from "@/src/app/conditionallayout";
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
  metadataBase: new URL("https://www.nohoflooring.com"),
  title: "Professional Flooring Services in North Hollywood CA",
  description: "Update your floors in North Hollywood, CA by hiring NO-HO Flooring And Construction Service for hardwood floor refinishing, engineered, vinyl plank and tile flooring!",
  //===== OG Tags =====
  openGraph: {
    title: "Professional Flooring Services in North Hollywood CA",
    description: "Update your floors in North Hollywood, CA by hiring NO-HO Flooring And Construction Service for hardwood floor refinishing, engineered, vinyl plank and tile flooring!",
    url: "/",
    siteName: "No Ho Flooring",
    locale: "en_US",
    type: "website",
    images: "https://www.nohoflooring.com/logo.webp",
  },
  //===== Canonical =====
  alternates: { canonical: "/" },
  //===== No-Index =====
  robots: {
    index: true,
    follow: true,
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
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
