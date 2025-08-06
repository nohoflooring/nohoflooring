import Contact from '@/src/app/home/contact'
import Banner from '@/src/app/components/banner';
import { BannerData } from '@/src/app/contact-us/data/data';

const Page = () => {
  return (
    <>
      <Banner data={BannerData} />
      <Contact contact={true} />
    </>
  );
};

export default Page;
