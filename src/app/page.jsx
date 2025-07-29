import React from 'react'
import Banner from '@/src/app/home/banner'
import About from '@/src/app/home/about'
import Services from '@/src/app/home/services'
import WhyChoose from '@/src/app/home/whychoose'
import CatFrom from '@/src/app/home/catform'
import Portfolio from '@/src/app/home/portfolio'
import Clients from '@/src/app/home/clients'
import Faqs from '@/src/app/home/faqs'
import Blogs from '@/src/app/home/blogs'
import Contact from '@/src/app/home/contact'

const Page = () => {
  return (
    <>
      <Banner />
      <About />
      <Services />
      <WhyChoose />
      <CatFrom />
      <Portfolio />
      <Clients />
      <Faqs />
      <Blogs />
      <Contact />
    </>
  )
}

export default Page