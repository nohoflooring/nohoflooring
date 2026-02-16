import Banner from '@/src/app/burbank/flooring-services-burbank-ca/components/banner';
import { BannerData, Content1, Content2, Content3, Content4, Content5, Content6, Content7, Content8, Content9, Content10, Content11, Content12, Content13, setpContent, CostServices, primaryServices, faqsData, Content14, CtaData } from "@/src/app/burbank/flooring-services-burbank-ca/data/data";
import Contact from "@/src/app/home/contact"
import Content from '@/src/app/burbank/flooring-services-burbank-ca/components/content';
import Steps from '@/src/app/burbank/flooring-services-burbank-ca/components/steps';
import CoreServices from '@/src/app/burbank/flooring-services-burbank-ca/components/coreservices';
import PrimaryServices from '@/src/app/burbank/flooring-services-burbank-ca/components/primaryservices';
import Faqs from "@/src/app/home/faqs"
import Cta from '@/src/app/burbank/flooring-services-burbank-ca/components/cta';
import Map from "@/src/app/components/services/map";
const Page = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
        "@id": "https://www.nohoflooring.com/#organization",
        name: "NO-HO Flooring And Construction Service",
        url: "https://www.nohoflooring.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.nohoflooring.com/logo.webp",
        },
        image: "https://www.nohoflooring.com/logo.webp",
        description:
          "Professional flooring contractors serving Burbank CA with 40+ years of experience. Expert installation, refinishing, and replacement services for residential and commercial properties.",
        telephone: "+1-818-932-4117",
        email: "nohoflooring@gmail.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Burbank",
          addressRegion: "CA",
          postalCode: "91501",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 34.1808,
          longitude: -118.309,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "09:00",
            closes: "20:30",
          },
        ],
        areaServed: {
          "@type": "City",
          name: "Burbank",
        },
        sameAs: ["https://www.facebook.com/nohoflooring"],
      },

      {
        "@type": "WebPage",
        "@id":
          "https://www.nohoflooring.com/burbank/flooring-services-burbank-ca/#webpage",
        url: "https://www.nohoflooring.com/burbank/flooring-services-burbank-ca/",
        name:
          "Professional Flooring Contractors near Burbank CA - 40+ Years of Excellence",
        description:
          "Licensed flooring contractors in Burbank CA offering installation, refinishing & replacement services.",
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://www.nohoflooring.com/#website",
          name: "NO-HO Flooring And Construction Service",
          url: "https://www.nohoflooring.com",
        },
        breadcrumb: {
          "@id":
            "https://www.nohoflooring.com/burbank/flooring-services-burbank-ca/#breadcrumb",
        },
      },

      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.nohoflooring.com/burbank/flooring-services-burbank-ca/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.nohoflooring.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Flooring Services",
            item: "https://www.nohoflooring.com/services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Burbank Flooring Services",
            item:
              "https://www.nohoflooring.com/burbank/flooring-services-burbank-ca/",
          },
        ],
      },

      {
        "@type": "Service",
        "@id":
          "https://www.nohoflooring.com/burbank/flooring-services-burbank-ca/#service",
        serviceType: "Flooring Installation and Refinishing",
        name: "Professional Flooring Contractors Burbank CA",
        provider: {
          "@id": "https://www.nohoflooring.com/#organization",
        },
        areaServed: {
          "@type": "City",
          name: "Burbank",
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          price: "3-18",
          availability: "https://schema.org/InStock",
          url: "https://www.nohoflooring.com/burbank/flooring-services-burbank-ca/",
        },
      },

      {
        "@type": "FAQPage",
        "@id":
          "https://www.nohoflooring.com/burbank/flooring-services-burbank-ca/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What types of flooring do you install in Burbank CA?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "We install hardwood, engineered wood, laminate, vinyl plank, tile, and natural stone flooring for residential and commercial properties in Burbank CA.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer free estimates in Burbank?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Yes, we provide completely free, no-obligation flooring estimates in Burbank CA. Call (818) 932-4117 to schedule your consultation.",
            },
          },
          {
            "@type": "Question",
            name: "Are you licensed and insured?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Yes, NO-HO Flooring is fully licensed and insured in California with C-15 Flooring classification.",
            },
          },
          {
            "@type": "Question",
            name: "How long does flooring installation take?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Most residential flooring installations in Burbank take 1-3 days depending on material and square footage.",
            },
          },
        ],
      },
    ],
  };
  return (
    <>
      <script
        id="schema"
        type="application/ld+json"
        strategy="afterInteractive"
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
      <Map nolocation={true} />
      <Steps data={setpContent} />
      <Content data={Content13} dark={true} />
      <CoreServices data={CostServices} />
      <PrimaryServices data={primaryServices} />
      <Faqs data={faqsData} />
      <Content data={Content14} dark={true} />
      <Contact />
    </>
  );
};

export default Page;
