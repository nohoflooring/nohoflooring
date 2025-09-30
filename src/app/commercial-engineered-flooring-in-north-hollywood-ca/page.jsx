
import Banner from "@/src/app/components/banner";
import { BannerData, ContentData, ContentData1, benefitData, benefitData1, ctaData, faqsData, mainData, contactData } from "@/src/app/commercial-engineered-flooring-in-north-hollywood-ca/data/data";
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
                "name": "Commercial Engineered Flooring In North Hollywood CA",
                "url": "https://www.nohoflooring.com/commercial-engineered-flooring-in-north-hollywood-ca",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://www.nohoflooring.com/?s={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "About Us",
                    "item": "https://www.nohoflooring.com/about-us"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Contact Us",
                    "item": "https://www.nohoflooring.com/contact-us"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Our Work",
                    "item": "https://www.nohoflooring.com/our-work"
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Flooring Services",
                    "item": "https://www.nohoflooring.com/services"
                  },
                  {
                    "@type": "ListItem",
                    "position": 5,
                    "name": "Commercial Engineered Flooring In North Hollywood",
                    "item": "https://www.nohoflooring.com/commercial-engineered-flooring-in-north-hollywood-ca"
                  },
                  {
                    "@type": "ListItem",
                    "position": 6,
                    "name": "Floor Refinishing Services In North Hollywood",
                    "item": "https://www.nohoflooring.com/floor-refinishing-services-in-north-hollywood-ca"
                  },
                  {
                    "@type": "ListItem",
                    "position": 7,
                    "name": "Hardwood Floor Refinishing In North Hollywood",
                    "item": "https://www.nohoflooring.com/hardwood-floor-refinishing-in-north-hollywood-ca"
                  },
                  {
                    "@type": "ListItem",
                    "position": 8,
                    "name": "Hardwood Floor Replacements In North Hollywood",
                    "item": "https://www.nohoflooring.com/hardwood-floor-replacements-in-north-hollywood-ca"
                  },
                  {
                    "@type": "ListItem",
                    "position": 9,
                    "name": "Laminate Flooring Installation Services North Hollywood",
                    "item": "https://www.nohoflooring.com/laminate-flooring-installation-services-in-north-hollywood"
                  },
                  {
                    "@type": "ListItem",
                    "position": 10,
                    "name": "Residential Engineered Flooring In North Hollywood",
                    "item": "https://www.nohoflooring.com/residential-engineered-flooring-in-north-hollywood-ca"
                  },
                  {
                    "@type": "ListItem",
                    "position": 11,
                    "name": "Tile Flooring Installations In North Hollywood",
                    "item": "https://www.nohoflooring.com/tile-flooring-installations-in-north-hollywood-ca"
                  },
                  {
                    "@type": "ListItem",
                    "position": 12,
                    "name": "Tile Flooring Replacements In North Hollywood",
                    "item": "https://www.nohoflooring.com/tile-flooring-replacements-in-north-hollywood-ca"
                  },
                  {
                    "@type": "ListItem",
                    "position": 13,
                    "name": "Vinyl Plank Flooring Installation In North Hollywood",
                    "item": "https://www.nohoflooring.com/vinyl-plank-flooring-installation-in-north-hollywood-ca"
                  }
                ]
              },
              {
                "@type": "WebPage",
                "name": "Commercial Engineered Flooring In North Hollywood CA",
                "url": "https://www.nohoflooring.com/commercial-engineered-flooring-in-north-hollywood-ca",
                "description":
                  "Upgrade your business space with engineered flooring in North Hollywood, CA. We offer durable, stylish, and low-maintenance commercial flooring tailored to your needs.",
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
                "name": "Commercial Engineered Flooring In North Hollywood CA",
                "image":
                  "https://www.nohoflooring.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg01.b6e9ec00.webp&w=1920&q=75",
                "url": "https://www.nohoflooring.com/commercial-engineered-flooring-in-north-hollywood-ca",
                "description":
                  "Upgrade your business space with engineered flooring in North Hollywood, CA. We offer durable, stylish, and low-maintenance commercial flooring tailored to your needs.",
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
                "@type": "HomeAndConstructionBusiness",
                "name": "Commercial Engineered Flooring In North Hollywood CA",
                "image":
                  "https://www.nohoflooring.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout.c100c345.webp&w=1920&q=75",
                "url": "https://www.nohoflooring.com/commercial-engineered-flooring-in-north-hollywood-ca",
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
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name":
                      "What is engineered flooring, and how is it different from solid hardwood?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text":
                        "Engineered flooring is made of multiple layers of wood for added stability, making it ideal for high-traffic commercial spaces. It resists moisture and temperature changes better than solid hardwood."
                    }
                  },
                  {
                    "@type": "Question",
                    "name":
                      "Is engineered flooring durable enough for commercial use?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text":
                        "Absolutely. Our commercial-grade engineered flooring is built to withstand heavy foot traffic, office furniture, and daily wear while maintaining its look for years."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How long does installation typically take?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text":
                        "Most commercial installations are completed within 1–3 days, depending on the square footage and site conditions. We work efficiently to minimize disruption to your operations."
                    }
                  },
                  {
                    "@type": "Question",
                    "name":
                      "Can you install flooring after business hours or on weekends?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text":
                        "Yes. We offer flexible scheduling, including evenings and weekends, to accommodate your business hours and avoid interrupting your workflow."
                    }
                  },
                  {
                    "@type": "Question",
                    "name":
                      "Do you offer custom design options for commercial flooring?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text":
                        "Yes. We provide a wide range of finishes, wood species, patterns, and tones to match your brand aesthetic and functional needs."
                    }
                  },
                  {
                    "@type": "Question",
                    "name":
                      "How do I maintain engineered flooring in a busy commercial setting?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text":
                        "Regular sweeping, occasional damp mopping, and placing mats at entrances will keep your floor looking sharp. We’ll provide you with a full maintenance guide after installation."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is there a warranty on the materials or installation?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text":
                        "Yes. We offer a manufacturer’s warranty on materials and a workmanship guarantee on installation for added peace of mind."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can you remove old flooring before installation?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text":
                        "Definitely. We handle full tear-outs and subfloor preparation to ensure your new floor is perfectly installed from the ground up."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do I get an accurate quote for my project?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text":
                        "Use our free estimate tool or schedule a no-obligation consultation. We’ll assess your space and give you a transparent, itemized quote."
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
