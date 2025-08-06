import React from "react"
import Banner from "@/src/app/home/banner"
import About from "@/src/app/home/about"
import Services from "@/src/app/home/services"
import WhyChoose from "@/src/app/home/whychoose"
import CatFrom from "@/src/app/home/catform"
import Portfolio from "@/src/app/home/portfolio"
import Clients from "@/src/app/home/clients"
import Faqs from "@/src/app/home/faqs"
import Blogs from "@/src/app/home/blogs"
import Contact from "@/src/app/home/contact"
import { BlogListingData } from "@/src/app/blogs/data/data"
import { mainData, AbtData, ctaData, clientData, faqsData } from "@/src/app/home/data/data"

const Page = () => {
  return (
    <>
      <Banner />
      <About data={AbtData} />
      <Services home={true} />
      <WhyChoose />
      <CatFrom data={ctaData} />
      <Portfolio />
      <Clients data={clientData} />
      <Faqs data={faqsData} />
      <Blogs data={mainData} dataListing={BlogListingData} />
      <Contact />
    </>
  )
}

export default Page