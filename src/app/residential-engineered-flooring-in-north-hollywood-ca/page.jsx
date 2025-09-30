
import Banner from "@/src/app/components/banner";
import { BannerData, ContentData, ContentData1, benefitData, benefitData1, ctaData, faqsData, mainData, contactData } from "@/src/app/residential-engineered-flooring-in-north-hollywood-ca/data/data";
import ContentSec from "@/src/app/components/services/contentsec";
import Benefit from "@/src/app/components/about/benefit";
import Portfolio from "@/src/app/home/portfolio"
import ContactFrom from "@/src/app/components/services/contactfrom";
import Team from "@/src/app/components/about/team";
import Map from "@/src/app/components/services/map";
import { clientData } from "@/src/app/home/data/data";
import CatFrom from "@/src/app/home/catform"
import Clients from "@/src/app/home/clients"
import Faqs from "@/src/app/home/faqs"
import Blogs from "@/src/app/home/blogs"
import Contact from "@/src/app/home/contact"
import { BlogListingData } from "@/src/app/blogs/data/data"

const Page = () => {
  return (
    <>
      <Banner data={BannerData} />
      <ContentSec data={ContentData} />
      <ContentSec data={ContentData1} alternet={true} />
      <Benefit data={benefitData} bg={true} />
      <Portfolio />
      <ContactFrom />
      {/* <Team /> */}
      <Benefit data={benefitData1} />
      <Map />
      <CatFrom data={ctaData} />
      <Clients data={clientData} />
      <Faqs data={faqsData} />
      <Blogs data={mainData} dataListing={BlogListingData} />
      <Contact data={contactData} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "name": "Residential Engineered Flooring In North Hollywood CA",
                "url": "https://www.nohoflooring.com/residential-engineered-flooring-in-north-hollywood-ca",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://www.nohoflooring.com/?s={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "About Us", "item": "https://www.nohoflooring.com/about-us" },
                  { "@type": "ListItem", "position": 2, "name": "Contact Us", "item": "https://www.nohoflooring.com/contact-us" },
                  { "@type": "ListItem", "position": 3, "name": "Our Work", "item": "https://www.nohoflooring.com/our-work" },
                  { "@type": "ListItem", "position": 4, "name": "Flooring Services", "item": "https://www.nohoflooring.com/services" },
                  { "@type": "ListItem", "position": 5, "name": "Commercial Engineered Flooring In North Hollywood", "item": "https://www.nohoflooring.com/commercial-engineered-flooring-in-north-hollywood-ca" },
                  { "@type": "ListItem", "position": 6, "name": "Floor Refinishing Services In North Hollywood", "item": "https://www.nohoflooring.com/floor-refinishing-services-in-north-hollywood-ca" },
                  { "@type": "ListItem", "position": 7, "name": "Hardwood Floor Refinishing In North Hollywood", "item": "https://www.nohoflooring.com/hardwood-floor-refinishing-in-north-hollywood-ca" },
                  { "@type": "ListItem", "position": 8, "name": "Hardwood Floor Replacements In North Hollywood", "item": "https://www.nohoflooring.com/hardwood-floor-replacements-in-north-hollywood-ca" },
                  { "@type": "ListItem", "position": 9, "name": "Laminate Flooring Installation Services North Hollywood", "item": "https://www.nohoflooring.com/laminate-flooring-installation-services-in-north-hollywood" },
                  { "@type": "ListItem", "position": 10, "name": "Residential Engineered Flooring In North Hollywood", "item": "https://www.nohoflooring.com/residential-engineered-flooring-in-north-hollywood-ca" },
                  { "@type": "ListItem", "position": 11, "name": "Tile Flooring Installations In North Hollywood", "item": "https://www.nohoflooring.com/tile-flooring-installations-in-north-hollywood-ca" },
                  { "@type": "ListItem", "position": 12, "name": "Tile Flooring Replacements In North Hollywood", "item": "https://www.nohoflooring.com/tile-flooring-replacements-in-north-hollywood-ca" },
                  { "@type": "ListItem", "position": 13, "name": "Vinyl Plank Flooring Installation In North Hollywood", "item": "https://www.nohoflooring.com/vinyl-plank-flooring-installation-in-north-hollywood-ca" }
                ]
              },
              {
                "@type": "WebPage",
                "name": "Residential Engineered Flooring In North Hollywood CA",
                "url": "https://www.nohoflooring.com/residential-engineered-flooring-in-north-hollywood-ca",
                "description": "Looking for residential engineered flooring in North Hollywood CA? We install stylish, long-lasting floors that elevate your space and fit your lifestyle.",
                "speakable": {
                  "@type": "SpeakableSpecification",
                  "xpath": ["/html/head/title", "/html/body/h1", "/html/body/p[1]"]
                }
              },
              {
                "@type": "Product",
                "name": "Residential Engineered Flooring In North Hollywood CA",
                "image": "https://www.nohoflooring.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg01.b6e9ec00.webp&w=1920&q=75",
                "url": "https://www.nohoflooring.com/residential-engineered-flooring-in-north-hollywood-ca",
                "description": "Looking for residential engineered flooring in North Hollywood CA? We install stylish, long-lasting floors that elevate your space and fit your lifestyle.",
                "brand": { "@type": "Brand", "name": "NO-HO Flooring And Construction Service" },
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "ratingCount": "64" }
              },
              {
                "@type": "HomeAndConstructionBusiness",
                "name": "Residential Engineered Flooring In North Hollywood CA",
                "image": "https://www.nohoflooring.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout.c100c345.webp&w=1920&q=75",
                "url": "https://www.nohoflooring.com/residential-engineered-flooring-in-north-hollywood-ca",
                "telephone": "(818) 932-4117",
                "priceRange": "$10 per square foot",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "North Hollywood",
                  "addressRegion": "CA",
                  "postalCode": "91606",
                  "addressCountry": "US"
                },
                "geo": { "@type": "GeoCoordinates", "latitude": 34.305985091416524, "longitude": -118.43149306056061 },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  "opens": "00:00",
                  "closes": "23:59"
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is engineered hardwood flooring?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Engineered hardwood is a layered flooring product made with a real wood top layer and a high-performance core. It offers the beauty of solid hardwood with better resistance to moisture and temperature changes." }
                  },
                  {
                    "@type": "Question",
                    "name": "How long does engineered flooring last in a residential setting?",
                    "acceptedAnswer": { "@type": "Answer", "text": "With proper care, engineered flooring can last 20 to 30 years or more, depending on the product quality and usage." }
                  },
                  {
                    "@type": "Question",
                    "name": "Is engineered hardwood suitable for kitchens and basements?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Yes. Unlike solid hardwood, engineered flooring is more stable and moisture-resistant, making it ideal for areas like kitchens, basements, and even bathrooms with proper sealing." }
                  },
                  {
                    "@type": "Question",
                    "name": "What’s the installation process like?",
                    "acceptedAnswer": { "@type": "Answer", "text": "We start with a full site inspection and subfloor prep. Then we install the engineered planks using the method that best suits your home—glue-down, nail-down, or floating." }
                  },
                  {
                    "@type": "Question",
                    "name": "How does engineered wood compare to laminate or vinyl?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Engineered hardwood has a real wood surface, offering better authenticity and value than laminate or vinyl. It's a premium choice that bridges performance and elegance." }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I refinish engineered wood floors?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Most engineered floors can be lightly refinished once or twice depending on the thickness of the top veneer. We can advise based on your selected product." }
                  },
                  {
                    "@type": "Question",
                    "name": "What flooring brands do you offer?",
                    "acceptedAnswer": { "@type": "Answer", "text": "We partner with trusted manufacturers known for premium engineered flooring, including Mohawk, Shaw, and Anderson Tuftex" }
                  },
                  {
                    "@type": "Question",
                    "name": "How long does installation take?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Most residential engineered flooring projects are completed within 1–3 days, depending on room size and subfloor condition." }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you offer free consultations or estimates?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Yes! We offer both free consultations and instant online cost estimates to help you get started with zero pressure." }
                  }
                ]
              }
            ]
          })
        }}
      />


    </>
  );
};

export default Page;
