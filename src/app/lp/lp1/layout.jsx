export const metadata = {
    title: "Professional Flooring Services - Flooring Contractors",
    description: "Expert vinyl plank flooring installation & hardwood flooring refinishing in Los Angeles. Get a free flooring estimate today.",
    //===== OG Tags =====
    openGraph: {
        title: "Professional Flooring Services - Flooring Contractors",
        description: "Expert vinyl plank flooring installation & hardwood flooring refinishing in Los Angeles. Get a free flooring estimate today.",
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
