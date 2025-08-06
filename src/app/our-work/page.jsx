import Banner from '@/src/app/components/banner';
import { BannerData } from '@/src/app/our-work/data/data';
import Portfolio from "@/src/app/home/portfolio"
import Contact from "@/src/app/home/contact"
const Page = () => {
  return (
    <>
      <Banner data={BannerData} />
      <Portfolio work={true} />
      <Contact />
    </>
  );
};

export default Page;
