import Banner from '@/src/app/los-angeles/flooring-services-los-angeles-ca/components/banner';
import { BannerData, Content1, Content2, Content3, Content4, Content5, Content6, Content7, Content8, Content9, Content10, Content11, Content12, Content13, setpContent, CostServices, primaryServices, faqsData, Content14, CtaData } from "@/src/app/los-angeles/flooring-services-los-angeles-ca/data/data";
import Contact from "@/src/app/home/contact"
import Content from '@/src/app/los-angeles/flooring-services-los-angeles-ca/components/content';
import Steps from '@/src/app/los-angeles/flooring-services-los-angeles-ca/components/steps';
import CoreServices from '@/src/app/los-angeles/flooring-services-los-angeles-ca/components/coreservices';
import PrimaryServices from '@/src/app/los-angeles/flooring-services-los-angeles-ca/components/primaryservices';
import Faqs from "@/src/app/home/faqs"
import Cta from '@/src/app/los-angeles/flooring-services-los-angeles-ca/components/cta';
import Map from "@/src/app/components/services/map";


const Page = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": "https://www.nohoflooring.com/#organization",
        name: "NO-HO Flooring And Construction Service",
        alternateName: [
          "NO-HO Flooring",
          "NOHO Flooring Los Angeles",
          "Flooring Contractors Los Angeles CA"
        ],
        url: "https://www.nohoflooring.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.nohoflooring.com/logo.webp",
          width: 250,
          height: 80
        },
        image: "https://www.nohoflooring.com/logo.webp",
        description:
          "Professional flooring contractors serving Los Angeles CA with 40+ years of experience. Expert installation, refinishing, and replacement services for hardwood, laminate, vinyl, tile, and engineered flooring. Licensed and insured flooring specialists.",
        slogan:
          "Professional Flooring Installation, Refinishing & Replacement Services for Los Angeles's Homes and Businesses",
        foundingDate: "1985",
        telephone: "+1-818-932-4117",
        email: "nohoflooring@gmail.com",

        address: {
          "@type": "PostalAddress",
          streetAddress: "North Hollywood",
          addressLocality: "Los Angeles",
          addressRegion: "CA",
          postalCode: "90001",
          addressCountry: "US"
        },

        geo: {
          "@type": "GeoCoordinates",
          latitude: 34.0522,
          longitude: -118.2437
        },

        sameAs: [
          "https://www.facebook.com/nohoflooring"
        ]
      },

      {
        "@type": "WebPage",
        "@id": "https://www.nohoflooring.com/los-angeles/flooring-services-los-angeles-ca/#webpage",
        url: "https://www.nohoflooring.com/los-angeles/flooring-services-los-angeles-ca/",
        name: "Expert Flooring Contractors Los Angeles CA - 40+ Years of Excellence",
        description:
          "Licensed flooring contractors in Los Angeles CA with 40+ years experience. Professional installation, refinishing & replacement services. Free estimates.",
        inLanguage: "en-US",
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://www.nohoflooring.com/#website",
          name: "NO-HO Flooring And Construction Service",
          url: "https://www.nohoflooring.com"
        }
      },

      {
        "@type": "Service",
        "@id": "https://www.nohoflooring.com/los-angeles/flooring-services-los-angeles-ca/#service",
        serviceType: "Flooring Installation and Refinishing Services",
        provider: {
          "@id": "https://www.nohoflooring.com/#organization"
        },
        areaServed: {
          "@type": "City",
          name: "Los Angeles"
        }
      },

      {
        "@type": "FAQPage",
        "@id": "https://www.nohoflooring.com/los-angeles/flooring-services-los-angeles-ca/#faqpage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How much does flooring installation cost in Los Angeles?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Flooring installation in Los Angeles typically ranges from $3 to $18 per square foot depending on material and complexity."
            }
          },
          {
            "@type": "Question",
            name: "Should flooring contractors be licensed?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Yes. In California, any job over $500 requires a C-15 Flooring Contractor License."
            }
          }
        ]
      },

      {
        "@type": "LocalBusiness",
        "@id": "https://www.nohoflooring.com/#localbusiness",
        name: "NO-HO Flooring - Los Angeles Flooring Contractors",
        image: [
          "https://www.nohoflooring.com/logo.webp"
        ],
        priceRange: "$$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Los Angeles",
          addressRegion: "CA",
          addressCountry: "US"
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 34.0522,
          longitude: -118.2437
        },
        telephone: "+1-818-932-4117",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: 5,
          reviewCount: 500
        }
      }
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
      <Banner data={BannerData} />
      <Content data={Content1} dark={true} />
      <Content data={Content2} dark={true} />
      <Content data={Content3} dark={true} />
      <Content data={Content4} dark={true} />
      <Content data={Content5} dark={true} />
      <Content data={Content6} dark={true} />
      <Content data={Content7} />
      <Cta data={CtaData} />
      <Content data={Content8} dark={true} />
      <Content data={Content9} dark={true} />
      <Content data={Content10} dark={true} />
      <Content data={Content11} dark={true} />
      <Content data={Content12} dark={true} />
      <Content data={Content13} dark={true} />
      <Map nolocation={true} />
      <Steps data={setpContent} />
      <CoreServices data={CostServices} />
      <PrimaryServices data={primaryServices} />
      <Faqs data={faqsData} />
      <Content data={Content14} dark={true} />
      <Contact />
    </>
  );
};

export default Page;
