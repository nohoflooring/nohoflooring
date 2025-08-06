import Banner from '@/src/app/components/banner';
import { BannerData } from '@/src/app/services/data/data';
import Services from "@/src/app/home/services"
import Contact from "@/src/app/home/contact"
const Page = () => {
  return (
    <>
      <Banner data={BannerData} />
      <Services padding={true} />
      <Contact />
    </>
  );
};

export default Page;
