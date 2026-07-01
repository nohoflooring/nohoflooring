import Banner from '@/src/app/components/banner';
import { BannerData, BlogListingData, mainData } from '@/src/app/blogs/data/data';
import BlogListing from '@/src/app/components/blog/bloglisting';
import Contact from '@/src/app/home/contact'
import Script from 'next/script';

const Page = () => {
  return (
    <>
      <Banner data={BannerData} />
      <div id="soro-blog"></div>
      <Script
        src="https://app.trysoro.com/api/embed/c6620b58-a5c-4b91-a491-d2568d62210c"
        strategy="afterInteractive"
      />
      <BlogListing data={mainData} dataListing={BlogListingData} />
      <Contact />
    </>
  );
};

export default Page;
