import Contact from '@/src/app/home/contact'
import Banner from '@/src/app/contact-us/components/banner';

const Page = () => {
  return (
    <>
      <Banner />
      <Contact contact={true} />
    </>
  );
};

export default Page;
