
import Banner from "@/src/app/components/banner";
import { BannerData, ContentData, ContentData1, benefitData, benefitData1, ctaData, faqsData, mainData, contactData } from "@/src/app/tile-flooring-replacements-in-north-hollywood-ca/data/data";
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
      <Team />
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
                "name": "Tile Flooring Replacements In North Hollywood CA",
                "url": "https://www.nohoflooring.com/tile-flooring-replacements-in-north-hollywood-ca",
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
                "name": "Tile Flooring Replacements In North Hollywood CA",
                "url": "https://www.nohoflooring.com/tile-flooring-replacements-in-north-hollywood-ca",
                "description": "Upgrade your home with top-quality tile flooring replacements in North Hollywood, CA. Our pros deliver precise removal and flawless tile installation.",
                "speakable": {
                  "@type": "SpeakableSpecification",
                  "xpath": ["/html/head/title", "/html/body/h1", "/html/body/p[1]"]
                }
              },
              {
                "@type": "Product",
                "name": "Tile Flooring Replacements In North Hollywood CA",
                "image": "https://www.nohoflooring.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg01.b6e9ec00.webp&w=1920&q=75",
                "url": "https://www.nohoflooring.com/tile-flooring-replacements-in-north-hollywood-ca",
                "description": "Upgrade your home with top-quality tile flooring replacements in North Hollywood, CA. Our pros deliver precise removal and flawless tile installation.",
                "brand": { "@type": "Brand", "name": "NO-HO Flooring And Construction Service" },
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "ratingCount": "64" }
              },
              {
                "@type": "HomeAndConstructionBusiness",
                "name": "Tile Flooring Replacements In North Hollywood CA",
                "image": "https://www.nohoflooring.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout.c100c345.webp&w=1920&q=75",
                "url": "https://www.nohoflooring.com/tile-flooring-replacements-in-north-hollywood-ca",
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
                  { "@type": "Question", "name": "How long does a tile flooring replacement take?", "acceptedAnswer": { "@type": "Answer", "text": "Most tile flooring replacement projects are completed within 2–5 days, depending on the size of the area and the condition of your subfloor. We’ll give you a clear timeline before work begins." } },
                  { "@type": "Question", "name": "Do you help with selecting tile materials and designs?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! Our design specialists will guide you through choosing the right tile style, material, and finish to match your space and lifestyle." } },
                  { "@type": "Question", "name": "Can you remove and dispose of my old tile flooring?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We handle everything — from demolition and disposal to preparation and installation — so you don’t have to lift a finger." } },
                  { "@type": "Question", "name": "What types of tile do you install?", "acceptedAnswer": { "@type": "Answer", "text": "We work with all types, including ceramic, porcelain, marble, travertine, slate, and more. We also do custom layouts and patterns." } },
                  { "@type": "Question", "name": "Is there a warranty on your tile installation work?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, all of our tile flooring replacements come with a workmanship warranty and we only use tile products backed by manufacturer guarantees." } },
                  { "@type": "Question", "name": "Do I need to leave my home during the installation?", "acceptedAnswer": { "@type": "Answer", "text": "Not usually. We work room by room and schedule work to minimize disruption so you can remain in your home during the project" } },
                  { "@type": "Question", "name": "How do I maintain my new tile floors?", "acceptedAnswer": { "@type": "Answer", "text": "We’ll provide care instructions tailored to the type of tile you choose, including tips on cleaning products and maintenance schedules." } },
                  { "@type": "Question", "name": "Are your estimates free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! We offer free, no-obligation consultations and quotes. You’ll know exactly what to expect before we get started." } },
                  { "@type": "Question", "name": "Do you offer custom tile designs or layouts?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we specialize in custom tile installations — including herringbone, diagonal, mosaic accents, and border work — to give your floor a truly unique look." } }
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
