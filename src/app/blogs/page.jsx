import Banner from '@/src/app/components/banner';
import { BannerData, BlogListingData, mainData } from '@/src/app/blogs/data/data';
import BlogListing from '@/src/app/components/blog/bloglisting';
import Contact from '@/src/app/home/contact';
import SoroBlogWidget from '@/src/app/components/soro-blog-widget';

const Page = () => {
  return (
    <>
      <Banner data={BannerData} />
      <SoroBlogWidget />
      <BlogListing data={mainData} dataListing={BlogListingData} />
      <Contact />
    </>
  );
};

export default Page;
