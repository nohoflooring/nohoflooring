
import Banner from "@/src/app/components/banner";
import { BannerData, ContentData, ContentData1, benefitData, benefitData1, ctaData, faqsData, mainData, contactData } from "@/src/app/floor-refinishing-services-in-north-hollywood-ca/data/data";
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
                "name": "Floor Refinishing Services In North Hollywood CA",
                "url": "https://www.nohoflooring.com/floor-refinishing-services-in-north-hollywood-ca",
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
                "name": "Floor Refinishing Services In North Hollywood CA",
                "url": "https://www.nohoflooring.com/floor-refinishing-services-in-north-hollywood-ca",
                "description": "Bring your old floors back to life with expert floor refinishing in North Hollywood, CA. We offer professional sanding, staining, and sealing.",
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
                "@type": "Product",
                "name": "Floor Refinishing Services In North Hollywood CA",
                "image": "https://www.nohoflooring.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg01.b6e9ec00.webp&w=1920&q=75",
                "url": "https://www.nohoflooring.com/floor-refinishing-services-in-north-hollywood-ca",
                "description": "Bring your old floors back to life with expert floor refinishing in North Hollywood, CA. We offer professional sanding, staining, and sealing.",
                "brand": { "@type": "Brand", "name": "NO-HO Flooring And Construction Service" },
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "ratingCount": "64" }
              },
              {
                "@type": "HomeAndConstructionBusiness",
                "name": "Floor Refinishing Services In North Hollywood CA",
                "image": "https://www.nohoflooring.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout.c100c345.webp&w=1920&q=75",
                "@id": "",
                "url": "https://www.nohoflooring.com/floor-refinishing-services-in-north-hollywood-ca",
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
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How do I know if my floors need refinishing?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "If your floors look dull, scratched, uneven, or have lost their original color, it’s time to refinish. We offer a free consultation to assess the condition and give you honest recommendations."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What types of flooring can be refinished?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We specialize in hardwood floor refinishing, including oak, maple, walnut, and engineered wood (if thick enough). Not sure what you have? We’ll help you identify it."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How long does the refinishing process take?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Most projects take 2–5 days depending on the size and condition of the flooring. We’ll give you a detailed schedule upfront so you know exactly what to expect."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Will there be a lot of dust and mess?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Not with us. We use dustless sanding equipment and protective coverings to keep your home clean and safe during the process."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I stay in my home during refinishing?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, in most cases you can remain at home. We’ll work in sections and coordinate access so your routine is minimally disrupted. For large or whole-home refinishing, we may suggest alternate accommodations for a day or two."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do I get to choose the stain color and finish",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely. We offer a wide range of stains, sheens (matte, satin, gloss), and sample patches to help you make the perfect choice for your space."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How much does floor refinishing cost in North Hollywood?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Pricing depends on square footage, floor condition, and finish type. We offer competitive local rates and free written estimates with no hidden fees."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How long before I can walk on the floors again?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "You can usually walk on floors with socks 24 hours after the final coat. Full curing time is about 5–7 days for heavy furniture and rugs."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is your work guaranteed?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. All our refinishing work comes with a satisfaction guarantee and a warranty for added peace of mind."
                    }
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
