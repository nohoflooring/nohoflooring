import React from "react"
import Banner from "@/src/app/home/banner"
import About from "@/src/app/home/about"
import Services from "@/src/app/home/services"
import WhyChoose from "@/src/app/home/whychoose"
import CatFrom from "@/src/app/home/catform"
import Portfolio from "@/src/app/home/portfolio"
import Clients from "@/src/app/home/clients"
import Faqs from "@/src/app/home/faqs"
import Blogs from "@/src/app/home/blogs"
import Contact from "@/src/app/home/contact"
import { BlogListingData } from "@/src/app/blogs/data/data"
import { mainData, AbtData, ctaData, clientData, faqsData } from "@/src/app/home/data/data"

const Page = () => {
  return (
    <>
      <Banner />
      <About data={AbtData} />
      <Services home={true} />
      <WhyChoose />
      <CatFrom data={ctaData} />
      <Portfolio />
      <Clients data={clientData} />
      <Faqs data={faqsData} />
      <Blogs data={mainData} dataListing={BlogListingData} />
      <Contact />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "name": "Noho Flooring",
                  "url": "https://www.nohoflooring.com",
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
                  "name": "Professional Flooring Services in North Hollywood CA",
                  "url": "https://www.nohoflooring.com/",
                  "description": "Professional floor installation services serving North Hollywood and the greater Los Angeles area. With a deep understanding of materials and techniques.",
                  "speakable": {
                    "@type": "SpeakableSpecification",
                    "xpath": ["/html/head/title", "/html/body/h1", "/html/body/p[1]"]
                  }
                },
                {
                  "@type": "Product",
                  "name": "Expert Flooring Services in North Hollywood",
                  "image": "https://www.nohoflooring.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout.c100c345.webp&w=1920&q=75",
                  "url": "https://www.nohoflooring.com/",
                  "description": "Update your floors in North Hollywood, CA by hiring NO-HO Flooring And Construction Service for hardwood floor refinishing, engineered, vinyl plank and tile flooring!",
                  "brand": { "@type": "Brand", "name": "NO-HO Flooring And Construction Service" },
                  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "ratingCount": "64" }
                },
                {
                  "@type": "HomeAndConstructionBusiness",
                  "name": "Expert Flooring Services in North Hollywood",
                  "image": "https://www.nohoflooring.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout.c100c345.webp&w=1920&q=75",
                  "url": "https://www.nohoflooring.com/",
                  "telephone": "(818) 932-4117",
                  "priceRange": "$20 per square foot",
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
                    { "@type": "Question", "name": "Is vinyl plank flooring a good choice for high-traffic areas?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! Vinyl plank flooring is highly durable, water-resistant, and easy to maintain—making it a smart choice for busy households and commercial spaces." } },
                    { "@type": "Question", "name": "Do you offer waterproof vinyl flooring installation?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Our professional flooring services include the installation of waterproof vinyl flooring that resists spills, moisture, and wear." } },
                    { "@type": "Question", "name": "Can you install wide plank flooring in small rooms?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Wide plank flooring can actually make small rooms appear larger and more open, depending on the layout and lighting." } },
                    { "@type": "Question", "name": "Do you offer floor installation for tile flooring?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we provide expert floor installation for tile flooring, including ceramic, porcelain, and concrete look flooring options." } },
                    { "@type": "Question", "name": "What’s the best flooring for a rustic look?", "acceptedAnswer": { "@type": "Answer", "text": "Distressed wood flooring and rigid vinyl plank are both excellent options to achieve a warm, rustic aesthetic without compromising on durability." } },
                    { "@type": "Question", "name": "Do you provide wood floor restoration and refinishing services?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we specialize in wood floor restoration, floor repair and refinishing, and hardwood floor refinishing to bring your old floors back to life." } },
                    { "@type": "Question", "name": "Do you service the North Hollywood area?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We proudly offer full flooring services in North Hollywood, including installation, restoration, and refinishing for residential and commercial properties." } },
                    { "@type": "Question", "name": "How long does a typical flooring installation take?", "acceptedAnswer": { "@type": "Answer", "text": "Most flooring installation projects are completed within 1–3 days, depending on the material (like tile, laminate, or vinyl plank flooring) and square footage." } },
                    { "@type": "Question", "name": "What makes Noho Flooring different from other flooring companies in Los Angeles?", "acceptedAnswer": { "@type": "Answer", "text": "As a leading flooring company Los Angeles trusts, we combine high-quality materials, expert craftsmanship, and local experience to deliver exceptional results every time." } }
                  ]
                }
              ]
            },
            null,
            2
          )
        }}
      />
    </>
  )
}

export default Page