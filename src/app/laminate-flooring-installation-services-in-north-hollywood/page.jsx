
import Banner from "@/src/app/components/banner";
import { BannerData, ContentData, ContentData1, benefitData, benefitData1, ctaData, faqsData, mainData, contactData } from "@/src/app/laminate-flooring-installation-services-in-north-hollywood/data/data";
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
              "name": "Laminate Flooring Installation Services North Hollywood CA",
              "url": "https://www.nohoflooring.com/laminate-flooring-installation-services-in-north-hollywood",
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
              "name": "Laminate Flooring Installation Services North Hollywood",
              "url": "https://www.nohoflooring.com/laminate-flooring-installation-services-in-north-hollywood",
              "description": "Upgrade your space with expert laminate flooring installation in North Hollywood. Affordable pricing, fast turnaround, and premium finishes.",
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
              "name": "Laminate Flooring Installation Services North Hollywood",
              "image": "https://www.nohoflooring.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg01.b6e9ec00.webp&w=1920&q=75",
              "url": "https://www.nohoflooring.com/laminate-flooring-installation-services-in-north-hollywood",
              "description": "Upgrade your space with expert laminate flooring installation in North Hollywood. Affordable pricing, fast turnaround, and premium finishes.",
              "brand": { "@type": "Brand", "name": "NO-HO Flooring And Construction Service" },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "64"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              "name": "Laminate Flooring Installation Services North Hollywood CA",
              "image": "https://www.nohoflooring.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout.c100c345.webp&w=1920&q=75",
              "url": "https://www.nohoflooring.com/laminate-flooring-installation-services-in-north-hollywood",
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
                  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "How long does laminate flooring installation typically take?", "acceptedAnswer": { "@type": "Answer", "text": "Most residential projects are completed in 1–2 days depending on square footage and existing floor conditions." } },
                { "@type": "Question", "name": "Do you offer free estimates or consultations?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! We provide free on-site consultations to assess your space, discuss style options, and give you an accurate quote" } },
                { "@type": "Question", "name": "Can laminate flooring be installed over existing floors?", "acceptedAnswer": { "@type": "Answer", "text": "In many cases, yes. Laminate can be floated over tile, vinyl, or hardwood as long as the surface is flat and clean." } },
                { "@type": "Question", "name": "Is laminate flooring water-resistant?", "acceptedAnswer": { "@type": "Answer", "text": "Many of our modern laminate products are water-resistant or waterproof—perfect for kitchens, entryways, and busy households." } },
                { "@type": "Question", "name": "What kind of maintenance does laminate flooring require?", "acceptedAnswer": { "@type": "Answer", "text": "Just regular sweeping and occasional damp mopping. It’s a low-maintenance flooring option that holds up to daily wear." } },
                { "@type": "Question", "name": "Will laminate flooring add value to my property?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, high-quality laminate gives the appearance of wood at a more affordable price point—making it attractive to buyers and renters alike." } },
                { "@type": "Question", "name": "Are your installers licensed and insured?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Our team is fully licensed, bonded, and insured for your peace of mind." } },
                { "@type": "Question", "name": "Do you handle furniture moving and old floor removal?", "acceptedAnswer": { "@type": "Answer", "text": "We do! We’ll remove old flooring, prep the subfloor, and even move furniture if needed (just let us know in advance)." } },
                { "@type": "Question", "name": "What areas do you service beyond North Hollywood?", "acceptedAnswer": { "@type": "Answer", "text": "We serve surrounding areas including Studio City, Valley Village, Burbank, Toluca Lake, and Sherman Oaks." } }
              ]
            }
          ])
        }}
      />

    </>
  );
};

export default Page;
