import Banner from '@/src/app/components/banner';
import { BannerData, AbtData, benefitData, valueData, ctaData, mainData, faqsData } from '@/src/app/about-us/data/data';
import About from '@/src/app/home/about';
import VideoCta from '@/src/app/components/about/videocta';
import SimpleTxt from '@/src/app/components/about/simpletxt';
import Benefit from '@/src/app/components/about/benefit';
import Value from '@/src/app/components/about/value';
import Team from '@/src/app/components/about/team';
import CatFrom from '@/src/app/home/catform'
import Clients from '@/src/app/home/clients'
import Faqs from '@/src/app/home/faqs'
import Blogs from '@/src/app/home/blogs'
import Contact from '@/src/app/home/contact'
import { BlogListingData } from '@/src/app/blogs/data/data'
import { clientData } from '@/src/app/home/data/data'


const Page = () => {
  return (
    <>
      <Banner data={BannerData} />
      <About data={AbtData} noborder={true} />
      <VideoCta />
      <SimpleTxt />
      <Benefit data={benefitData} />
      <Value data={valueData} />
      {/* <Team /> */}
      <CatFrom abt={true} data={ctaData} />
      <Clients data={clientData} />
      <Faqs data={faqsData} />
      <Blogs data={mainData} dataListing={BlogListingData} />
      <Contact />
    </>
  );
};

export default Page;
