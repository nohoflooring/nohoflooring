"use client";
import Header from "@/src/app/layout/header";
import Footer from "@/src/app/layout/footer";
import { usePathname } from "next/navigation";

const ConditionalLayout = ({ children }) => {
    const pathname = usePathname();

    const excludedPages = ["/lp/lp1"];

    const showLayout = !excludedPages.includes(pathname);

    return (
        <>
            {showLayout && <Header />}
            {children}
            {showLayout && <Footer />}
        </>
    );
};

export default ConditionalLayout;
