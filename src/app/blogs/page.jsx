import Banner from '@/src/app/components/banner';
import { BannerData, BlogListingData, mainData } from '@/src/app/blogs/data/data';
import BlogListing from '@/src/app/components/blog/bloglisting';
import Contact from '@/src/app/home/contact';
import SoroBlog from '@/src/app/components/SoroBlog';

const Page = () => {
  return (
    <>
      <Banner data={BannerData} />
      <BlogListing data={mainData} dataListing={BlogListingData} />
      <SoroBlog />
      <Contact />
    </>
  );
};

export default Page;
