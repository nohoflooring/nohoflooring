import Banner from '@/src/app/components/banner';
import { BannerData, BlogListingData, mainData } from '@/src/app/blogs/data/data';
import BlogListing from '@/src/app/components/blog/bloglisting';
import Contact from '@/src/app/home/contact'


const Page = () => {
  return (
    <>
      <Banner data={BannerData} />
      <BlogListing data={mainData} dataListing={BlogListingData} />
      <Contact />
    </>
  );
};

export default Page;
