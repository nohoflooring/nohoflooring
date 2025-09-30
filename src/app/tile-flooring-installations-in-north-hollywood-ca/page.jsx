
import Banner from "@/src/app/components/banner";
import { BannerData, ContentData, ContentData1, benefitData, benefitData1, ctaData, faqsData, mainData, contactData } from "@/src/app/tile-flooring-installations-in-north-hollywood-ca/data/data";
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
                "name": "Tile Flooring Installations In North Hollywood CA",
                "url": "https://www.nohoflooring.com/tile-flooring-installations-in-north-hollywood-ca",
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
                "name": "Tile Flooring Installations In North Hollywood CA",
                "url": "https://www.nohoflooring.com/tile-flooring-installations-in-north-hollywood-ca",
                "description": "Upgrade your space with professional tile flooring installations in North Hollywood, CA. We deliver expert craftsmanship, premium materials, and flawless results.",
                "speakable": {
                  "@type": "SpeakableSpecification",
                  "xpath": ["/html/head/title", "/html/body/h1", "/html/body/p[1]"]
                }
              },
              {
                "@type": "Product",
                "name": "Tile Flooring Installations In North Hollywood CA",
                "image": "https://www.nohoflooring.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg01.b6e9ec00.webp&w=1920&q=75",
                "url": "https://www.nohoflooring.com/tile-flooring-installations-in-north-hollywood-ca",
                "description": "Upgrade your space with professional tile flooring installations in North Hollywood, CA. We deliver expert craftsmanship, premium materials, and flawless results.",
                "brand": { "@type": "Brand", "name": "NO-HO Flooring And Construction Service" },
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "ratingCount": "64" }
              },
              {
                "@type": "HomeAndConstructionBusiness",
                "name": "Tile Flooring Installations In North Hollywood CA",
                "image": "https://www.nohoflooring.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout.c100c345.webp&w=1920&q=75",
                "url": "https://www.nohoflooring.com/tile-flooring-installations-in-north-hollywood-ca",
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
                  { "@type": "Question", "name": "What types of tile flooring do you install?", "acceptedAnswer": { "@type": "Answer", "text": "We install ceramic, porcelain, natural stone, mosaic, and specialty tiles. Whether you’re going for modern, rustic, or custom patterns, we’ve got you covered." } },
                  { "@type": "Question", "name": "Do you offer custom tile designs?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! We specialize in custom layouts and decorative tile work. Share your vision with us, and we’ll turn it into a beautiful, durable floor." } },
                  { "@type": "Question", "name": "How long does tile installation usually take?", "acceptedAnswer": { "@type": "Answer", "text": "Most residential tile flooring projects take 1–3 days, depending on the size of the space and prep work required." } },
                  { "@type": "Question", "name": "What’s included in your tile installation service?", "acceptedAnswer": { "@type": "Answer", "text": "We handle everything from site inspection and subfloor prep to tile cutting, leveling, grouting, and sealing. No shortcuts—just high-quality results." } },
                  { "@type": "Question", "name": "Can tile be installed over existing flooring?", "acceptedAnswer": { "@type": "Answer", "text": "In some cases, yes. We’ll evaluate the current floor and recommend the best solution for durability and performance." } },
                  { "@type": "Question", "name": "Is tile flooring a good choice for bathrooms or kitchens?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Tile is water-resistant, easy to clean, and long-lasting—making it ideal for high-moisture areas like bathrooms, kitchens, and laundry rooms." } },
                  { "@type": "Question", "name": "How do I maintain my new tile floors?", "acceptedAnswer": { "@type": "Answer", "text": "Sweep regularly, mop with a pH-neutral cleaner, and reseal grout lines as needed. We provide detailed care instructions after every install." } },
                  { "@type": "Question", "name": "Do you offer free estimates or consultations?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Contact us to schedule a no-obligation consultation. We’ll evaluate your space, discuss options, and give you a transparent quote." } },
                  { "@type": "Question", "name": "Are your installers licensed and insured?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, our tile flooring experts are fully licensed, bonded, and insured for your peace of mind and our accountability." } }
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
