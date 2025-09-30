
import Banner from "@/src/app/components/banner";
import { BannerData, ContentData, ContentData1, benefitData, benefitData1, ctaData, faqsData, mainData, contactData } from "@/src/app/hardwood-floor-replacements-in-north-hollywood-ca/data/data";
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
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Hardwood Floor Replacements In North Hollywood CA",
              "url": "https://www.nohoflooring.com/hardwood-floor-replacements-in-north-ho...ca",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.nohoflooring.com/?s={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            },
            {
              "@context": "https://schema.org",
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
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Hardwood Floor Replacements In North Hollywood CA",
              "url": "https://www.nohoflooring.com/hardwood-floor-replacements-in-north-hollywood-ca",
              "description": "Upgrade your home with expert hardwood floor replacements in North Hollywood CA. Durable materials, flawless installs, and trusted local pros.",
              "speakable": {
                "@type": "SpeakableSpecification",
                "xpath": [
                  "/html/head/title",
                  "/html/body/h1",
                  "/html/body/p[1]"
                ]
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Hardwood Floor Replacements In North Hollywood CA",
              "image": "https://www.nohoflooring.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg01.b6e9ec00.webp&w=1920&q=75",
              "url": "https://www.nohoflooring.com/hardwood-floor-replacements-in-north-hollywood-ca",
              "description": "Upgrade your home with expert hardwood floor replacements in North Hollywood CA. Durable materials, flawless installs, and trusted local pros.",
              "brand": {
                "@type": "Brand",
                "name": "NO-HO Flooring And Construction Service"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "64"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              "name": "Hardwood Floor Replacements In North Hollywood CA",
              "image": "https://www.nohoflooring.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout.c100c345.webp&w=1920&q=75",
              "url": "https://www.nohoflooring.com/hardwood-floor-replacements-in-north-hollywood-ca",
              "telephone": "(818) 932-4117",
              "priceRange": "$10 per square foot",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "North Hollywood",
                "addressRegion": "CA",
                "postalCode": "91606",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 34.305985091416524,
                "longitude": -118.43149306056061
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "How long does a hardwood floor replacement typically take?", "acceptedAnswer": { "@type": "Answer", "text": "Most projects are completed within 3–5 days, depending on the size of the space and the condition of the subfloor. We'll provide a precise timeline after your initial consultation." } },
                { "@type": "Question", "name": "Do I need to move all my furniture before installation?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we recommend clearing the area to ensure a smooth and efficient installation. If needed, we can assist with furniture moving at an added cost." } },
                { "@type": "Question", "name": "Can I stay in my home during the replacement process?", "acceptedAnswer": { "@type": "Answer", "text": "In many cases, yes. We use clean, low-dust methods and work in sections to minimize disruption. For large-scale projects, a temporary move-out may be advised." } },
                { "@type": "Question", "name": "How do I choose the best hardwood for my home?", "acceptedAnswer": { "@type": "Answer", "text": "We’ll guide you through wood types, colors, grain patterns, and durability based on your lifestyle, budget, and design goals." } },
                { "@type": "Question", "name": "Is hardwood flooring waterproof?", "acceptedAnswer": { "@type": "Answer", "text": "Hardwood is water-resistant, not waterproof. For high-moisture areas, we recommend engineered wood or luxury vinyl that mimics the hardwood look." } },
                { "@type": "Question", "name": "What’s the difference between solid and engineered hardwood?", "acceptedAnswer": { "@type": "Answer", "text": "Solid hardwood is a single piece of wood and can be refinished multiple times. Engineered hardwood is layered and better for moisture-prone areas. Both are great — the right choice depends on your space." } },
                { "@type": "Question", "name": "How much does hardwood floor replacement cost?", "acceptedAnswer": { "@type": "Answer", "text": "Costs vary based on material, square footage, and prep work. Use our instant cost estimator tool or book a free consultation for an accurate quote." } },
                { "@type": "Question", "name": "Will replacing my floors increase home value?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Quality hardwood floors are a major selling point and can significantly boost your property’s appeal and resale value." } },
                { "@type": "Question", "name": "Do you offer warranties or guarantees on your work?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, all our hardwood floor replacements in North Hollywood CA come with a workmanship warranty, plus manufacturer warranties on materials." } }
              ]
            }
          ])
        }}
      />

    </>
  );
};

export default Page;
