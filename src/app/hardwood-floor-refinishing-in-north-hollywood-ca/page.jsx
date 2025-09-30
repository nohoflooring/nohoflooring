
import Banner from "@/src/app/components/banner";
import { BannerData, ContentData, ContentData1, benefitData, benefitData1, ctaData, faqsData, mainData, contactData } from "@/src/app/hardwood-floor-refinishing-in-north-hollywood-ca/data/data";
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
              "name": "Hardwood Floor Refinishing In North Hollywood CA",
              "url": "https://www.nohoflooring.com/hardwood-floor-refinishing-in-north-hollywood-ca",
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
              "name": "Hardwood Floor Refinishing In North Hollywood CA",
              "url": "https://www.nohoflooring.com/hardwood-floor-refinishing-in-north-hollywood-ca",
              "description": "Revive your worn-out wood floors with expert hardwood floor refinishing in North Hollywood CA. Dust-free sanding, flawless finishes, and fast turnarounds.",
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
              "name": "Hardwood Floor Refinishing In North Hollywood CA",
              "image": "https://www.nohoflooring.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg01.b6e9ec00.webp&w=1920&q=75",
              "url": "https://www.nohoflooring.com/hardwood-floor-refinishing-in-north-hollywood-ca",
              "description": "Revive your worn-out wood floors with expert hardwood floor refinishing in North Hollywood CA. Dust-free sanding, flawless finishes, and fast turnarounds.",
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
              "name": "Hardwood Floor Refinishing In North Hollywood CA",
              "image": "https://www.nohoflooring.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout.c100c345.webp&w=1920&q=75",
              "url": "https://www.nohoflooring.com/hardwood-floor-refinishing-in-north-hollywood-ca",
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
                {
                  "@type": "Question",
                  "name": "Which type of flooring is best for my home?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It depends on your lifestyle and space. Hardwood is timeless and durable, vinyl is waterproof and budget-friendly, and laminate offers style with easy maintenance. We’ll help you choose what fits your needs and style best."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does flooring installation usually take?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most projects take 1–3 days, depending on the room size and material. Larger or multi-room jobs may take longer — but we always give you a timeline up front."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you offer free consultations or site visits?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we offer free on-site consultations within our service area. We’ll assess your space, explain your options, and provide a clear, written estimate."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I install new flooring over my existing floor?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "In many cases, yes — especially with vinyl plank or laminate. But it depends on the condition and type of your current floor. We’ll inspect and let you know what’s best."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What flooring is best for high-traffic areas?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Vinyl plank, engineered hardwood, and tile are top choices for durability. These materials resist wear, scratches, and moisture — perfect for busy households or commercial spaces."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is your flooring water-resistant or waterproof?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We install both! Vinyl plank and tile are 100% waterproof, while some laminates and engineered woods are water-resistant. We’ll guide you based on where the floor will be installed."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What’s the average cost of flooring installation?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Costs vary based on material, room size, and subfloor condition. On average, projects start at $4–$10 per square foot. We provide upfront, all-inclusive estimates with no surprises"
                  }
                },
                {
                  "@type": "Question",
                  "name": "How should I maintain and clean my new floor?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sweep or vacuum regularly and use a damp mop with a gentle cleaner. Avoid harsh chemicals and soaking wet mops — especially on wood or laminate."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can you refinish existing hardwood floors?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! We specialize in hardwood floor refinishing — including sanding, staining, and sealing — to restore the beauty of worn wood floors without replacing them."
                  }
                }
              ]
            }
          ])
        }}
      />

    </>
  );
};

export default Page;
