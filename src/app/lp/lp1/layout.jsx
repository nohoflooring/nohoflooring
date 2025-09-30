export const metadata = {
    title: "Residential Flooring in North Hollywood | Vinyl, Laminate & Hardwood",
    description: "Get expert vinyl plank installation, laminate flooring, or hardwood refinishing. Transparent pricing, fast quotes & top-rated results in North Hollywood.",
    //===== OG Tags =====
    openGraph: {
        title: "Residential Flooring in North Hollywood | Vinyl, Laminate & Hardwood",
        description: "Get expert vinyl plank installation, laminate flooring, or hardwood refinishing. Transparent pricing, fast quotes & top-rated results in North Hollywood.",
        url: "/lp/lp1",
        siteName: "No Ho Flooring",
        locale: "en_US",
        type: "website",
        images: "https://www.nohoflooring.com/logo.webp",
    },
    //===== Canonical =====
    alternates: { canonical: "/lp/lp1" },
    //===== No-Index =====
    robots: {
        index: false,
        follow: false,
    },
};

export default function RootLayout({ children }) {
    return children;
}
