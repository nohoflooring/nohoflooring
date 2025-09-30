
import Banner from "@/src/app/components/banner";
import { BannerData, ContentData, ContentData1, benefitData, benefitData1, ctaData, faqsData, mainData, contactData } from "@/src/app/vinyl-plank-flooring-installation-in-north-hollywood-ca/data/data";
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
                "name": "Vinyl Plank Flooring Installation In North Hollywood CA",
                "url": "https://www.nohoflooring.com/vinyl-plank-flooring-installation-in-north-hollywood-ca",
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
                "name": "Vinyl Plank Flooring Installation In North Hollywood CA",
                "url": "https://www.nohoflooring.com/vinyl-plank-flooring-installation-in-north-hollywood-ca",
                "description": "Upgrade your space with expert vinyl plank flooring installation in North Hollywood, CA. We deliver waterproof, low-maintenance floors for commercial and residential properties.",
                "speakable": {
                  "@type": "SpeakableSpecification",
                  "xpath": ["/html/head/title", "/html/body/h1", "/html/body/p[1]"]
                }
              },
              {
                "@type": "Product",
                "name": "Vinyl Plank Flooring Installation In North Hollywood CA",
                "image": "https://www.nohoflooring.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg01.b6e9ec00.webp&w=1920&q=75",
                "url": "https://www.nohoflooring.com/vinyl-plank-flooring-installation-in-north-hollywood-ca",
                "description": "Upgrade your space with expert vinyl plank flooring installation in North Hollywood, CA. We deliver waterproof, low-maintenance floors for commercial and residential properties.",
                "brand": { "@type": "Brand", "name": "NO-HO Flooring And Construction Service" },
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "ratingCount": "64" }
              },
              {
                "@type": "HomeAndConstructionBusiness",
                "name": "Vinyl Plank Flooring Installation In North Hollywood CA",
                "image": "https://www.nohoflooring.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout.c100c345.webp&w=1920&q=75",
                "url": "https://www.nohoflooring.com/vinyl-plank-flooring-installation-in-north-hollywood-ca",
                "telephone": "(818) 932-4117",
                "priceRange": "$10 per square foot",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "",
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
                  { "@type": "Question", "name": "How long does vinyl plank flooring installation take?", "acceptedAnswer": { "@type": "Answer", "text": "Most projects are completed in 1–2 days, depending on the size of the space and condition of the subfloor." } },
                  { "@type": "Question", "name": "Can vinyl plank flooring be installed over existing floors?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — in many cases, vinyl plank can be installed over tile, laminate, or concrete, as long as the surface is level and clean." } },
                  { "@type": "Question", "name": "Is vinyl plank flooring waterproof?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Our luxury vinyl planks are 100% waterproof, making them perfect for kitchens, bathrooms, and basements." } },
                  { "@type": "Question", "name": "What’s the difference between LVP and laminate?", "acceptedAnswer": { "@type": "Answer", "text": "Vinyl plank (LVP) is more durable and waterproof than laminate. It’s better suited for high-moisture areas and heavy traffic." } },
                  { "@type": "Question", "name": "Do you provide free estimates?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! You can use our online cost calculator or request an in-person consultation at no charge." } },
                  { "@type": "Question", "name": "How do I maintain vinyl plank flooring?", "acceptedAnswer": { "@type": "Answer", "text": "Just sweep regularly and mop with a damp cloth. No waxing, polishing, or harsh chemicals needed." } },
                  { "@type": "Question", "name": "Is vinyl plank flooring pet-friendly?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — it’s scratch-resistant, waterproof, and easy to clean, making it ideal for homes with dogs or cats." } },
                  { "@type": "Question", "name": "Do you offer both residential and commercial installation?", "acceptedAnswer": { "@type": "Answer", "text": "We do. Whether it’s a home renovation or a retail space upgrade, we’ve got the expertise and tools to deliver." } },
                  { "@type": "Question", "name": "What’s the warranty on your vinyl plank flooring?", "acceptedAnswer": { "@type": "Answer", "text": "We offer manufacturer warranties up to 25 years, along with a 1-year labor guarantee for installation." } }
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
