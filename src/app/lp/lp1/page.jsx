"use client";
import React, { useState } from 'react';
import Header from "@/src/app/lp/lp1/components/header";
import Banner from "@/src/app/lp/lp1/components/banner";
import About from "@/src/app/lp/lp1/components/about";
import ContentSec from "@/src/app/lp/lp1/components/contentsec";
import Benefit from "@/src/app/lp/lp1/components/benefit";
import Clients from "@/src/app/lp/lp1/components/clients";
import BannerImages from "@/src/app/lp/lp1/components/bannerImages";
import Contact from "@/src/app/home/contact"
import Footer from "@/src/app/lp/lp1/components/footer";



const Page = () => {
    const [modalShow, setModalShow] = useState(false);
    const handleChatOpen = () => {
        setModalShow(true);
    };
    return (
        <>
            <Header />
            <Banner />
            <About noborder={true} />
            <ContentSec />
            <Benefit bg={true} />
            <BannerImages />
            <Clients />
            <Contact lp={true} />
            <Footer />

        </>
    );
};

export default Page;
