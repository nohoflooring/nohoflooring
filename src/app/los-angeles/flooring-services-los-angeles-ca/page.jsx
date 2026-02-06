import Banner from '@/src/app/los-angeles/flooring-services-los-angeles-ca/components/banner';
import { BannerData, Content1, Content2, Content3, Content4, Content5, Content6, Content7, Content8, Content9, Content10, Content11, Content12, Content13, setpContent, CostServices, primaryServices, faqsData, Content14, CtaData } from "@/src/app/los-angeles/flooring-services-los-angeles-ca/data/data";
import Contact from "@/src/app/home/contact"
import Content from '@/src/app/los-angeles/flooring-services-los-angeles-ca/components/content';
import Steps from '@/src/app/los-angeles/flooring-services-los-angeles-ca/components/steps';
import CoreServices from '@/src/app/los-angeles/flooring-services-los-angeles-ca/components/coreservices';
import PrimaryServices from '@/src/app/los-angeles/flooring-services-los-angeles-ca/components/primaryservices';
import Faqs from "@/src/app/home/faqs"
import Cta from '@/src/app/los-angeles/flooring-services-los-angeles-ca/components/cta';

const Page = () => {
  return (
    <>
      <Banner data={BannerData} />
      <Content data={Content1} dark={true} />
      <Content data={Content2} dark={true} />
      <Content data={Content3} dark={true} />
      <Content data={Content4} dark={true} />
      <Content data={Content5} dark={true} />
      <Content data={Content6} dark={true} />
      <Content data={Content7} />
      <Cta data={CtaData} />
      <Content data={Content8} dark={true} />
      <Content data={Content9} dark={true} />
      <Content data={Content10} dark={true} />
      <Content data={Content11} dark={true} />
      <Content data={Content12} dark={true} />
      <Content data={Content13} dark={true} />
      <Steps data={setpContent} />
      <CoreServices data={CostServices} />
      <PrimaryServices data={primaryServices} />
      <Faqs data={faqsData} />
      <Content data={Content14} dark={true} />
      <Contact />
    </>
  );
};

export default Page;
