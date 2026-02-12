import Banner from '@/src/app/universal-city/flooring-services-universal-city-ca/components/banner';
import { BannerData, Content1, Content2, Content3, Content4, Content5, Content6, Content7, Content8, Content9, Content10, Content11, Content12, Content13, setpContent, CostServices, primaryServices, faqsData, Content14, CtaData } from "@/src/app/universal-city/flooring-services-universal-city-ca/data/data";
import Contact from "@/src/app/home/contact"
import Content from '@/src/app/universal-city/flooring-services-universal-city-ca/components/content';
import Steps from '@/src/app/universal-city/flooring-services-universal-city-ca/components/steps';
import CoreServices from '@/src/app/universal-city/flooring-services-universal-city-ca/components/coreservices';
import PrimaryServices from '@/src/app/universal-city/flooring-services-universal-city-ca/components/primaryservices';
import Faqs from "@/src/app/home/faqs"
import Cta from '@/src/app/universal-city/flooring-services-universal-city-ca/components/cta';
import Map from "@/src/app/components/services/map";
const Page = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": "https://www.nohoflooring.com/#organization",
        "name": "NO-HO Flooring And Construction Service",
        "alternateName": ["NO-HO Flooring", "NOHO Flooring Universal City", "Flooring Contractors Universal City CA"],
        "url": "https://www.nohoflooring.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.nohoflooring.com/logo.webp",
          "width": "250",
          "height": "80"
        },
        "image": "https://www.nohoflooring.com/logo.webp",
        "description": "Professional flooring contractors serving Universal City CA with 40+ years of experience. Expert installation, refinishing, and replacement services for hardwood, laminate, vinyl, tile, and engineered flooring. Licensed and insured flooring specialists.",
        "slogan": "Professional Flooring Installation, Refinishing & Replacement Services for Universal City's Homes and Businesses",
        "foundingDate": "1985",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "North Hollywood",
          "addressLocality": "Universal City",
          "addressRegion": "CA",
          "postalCode": "91608",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "34.1381",
          "longitude": "-118.3534"
        },
        "telephone": "+1-818-932-4117",
        "email": "nohoflooring@gmail.com",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+1-818-932-4117",
            "contactType": "Customer Service",
            "areaServed": "US",
            "availableLanguage": ["English", "Spanish"],
            "contactOption": ["TollFree"]
          },
          {
            "@type": "ContactPoint",
            "email": "nohoflooring@gmail.com",
            "contactType": "Free Flooring Estimates",
            "areaServed": "Universal City"
          }
        ],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "20:30",
            "validFrom": "2024-01-01",
            "validThrough": "2027-12-31"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Sunday",
            "opens": "00:00",
            "closes": "00:00",
            "validFrom": "2024-01-01",
            "validThrough": "2027-12-31"
          }
        ],
        "sameAs": [
          "https://www.facebook.com/p/Noho-Flooring-Construction-Services-100027208581024/"
        ],
        "areaServed": [
          {
            "@type": "City",
            "name": "Universal City",
            "containedIn": {
              "@type": "AdministrativeArea",
              "name": "California",
              "containedIn": {
                "@type": "Country",
                "name": "United States"
              }
            }
          },
          {
            "@type": "City",
            "name": "Burbank"
          },
          {
            "@type": "City",
            "name": "Los Angeles"
          },
          {
            "@type": "City",
            "name": "West Hollywood"
          },
          {
            "@type": "City",
            "name": "North Hollywood"
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Flooring Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "serviceType": "Commercial Engineered Flooring",
                "name": "Commercial Engineered Flooring Universal City CA"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "serviceType": "Hardwood Floor Refinishing",
                "name": "Hardwood Floor Refinishing Universal City CA"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "serviceType": "Laminate Flooring Installation",
                "name": "Laminate Flooring Installation Universal City CA"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "serviceType": "Tile Flooring Installation",
                "name": "Tile Flooring Installation Universal City CA"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "serviceType": "Vinyl Plank Flooring Installation",
                "name": "Vinyl Plank Flooring Installation Universal City CA"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "serviceType": "Hardwood Floor Replacement",
                "name": "Hardwood Floor Replacements Universal City CA"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "serviceType": "Residential Engineered Flooring",
                "name": "Residential Engineered Flooring Universal City CA"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "serviceType": "Floor Refinishing Services",
                "name": "Floor Refinishing Services Universal City CA"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "serviceType": "Tile Flooring Replacement",
                "name": "Tile Flooring Replacements Universal City CA"
              }
            }
          ]
        },
        "knowsAbout": [
          "Commercial Engineered Flooring Installation",
          "Hardwood Floor Refinishing",
          "Laminate Flooring Installation",
          "Tile Flooring Installation",
          "Vinyl Plank Flooring",
          "Hardwood Floor Replacement",
          "Residential Engineered Flooring",
          "Floor Refinishing Services",
          "Waterproof Flooring Solutions",
          "Dustless Floor Sanding",
          "Custom Tile Patterns",
          "Wide Plank Hardwood",
          "Luxury Vinyl Plank",
          "SPC and WPC Flooring",
          "Porcelain Tile Installation",
          "Natural Stone Flooring"
        ],
        "makesOffer": {
          "@id": "https://www.nohoflooring.com/universal-city/flooring-services-universal-city-ca/#mainOffer"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.nohoflooring.com/universal-city/flooring-services-universal-city-ca/#webpage",
        "url": "https://www.nohoflooring.com/universal-city/flooring-services-universal-city-ca/",
        "name": "Expert Flooring Contractors Universal City CA - 40+ Years of Excellence",
        "alternateName": "Universal City Flooring Services - Expert Installation & Refinishing",
        "description": "Licensed flooring contractors in Universal City CA with 40+ years experience. Professional installation, refinishing & replacement services. Free estimates. Call (818) 932-4117 today!",
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.nohoflooring.com/#website",
          "name": "NO-HO Flooring And Construction Service",
          "url": "https://www.nohoflooring.com"
        },
        "about": {
          "@id": "https://www.nohoflooring.com/universal-city/flooring-services-universal-city-ca/#service"
        },
        "publisher": {
          "@id": "https://www.nohoflooring.com/#organization"
        },
        "breadcrumb": {
          "@id": "https://www.nohoflooring.com/universal-city/flooring-services-universal-city-ca/#breadcrumb"
        },
        "potentialAction": {
          "@type": "ReadAction",
          "target": ["https://www.nohoflooring.com/universal-city/flooring-services-universal-city-ca/"]
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.nohoflooring.com/universal-city/flooring-services-universal-city-ca/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.nohoflooring.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Universal City",
            "item": "https://www.nohoflooring.com/universal-city/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Flooring Services Universal City CA",
            "item": "https://www.nohoflooring.com/universal-city/flooring-services-universal-city-ca/"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.nohoflooring.com/universal-city/flooring-services-universal-city-ca/#service",
        "serviceType": "Flooring Installation and Refinishing Services",
        "provider": {
          "@id": "https://www.nohoflooring.com/#organization"
        },
        "areaServed": {
          "@type": "City",
          "name": "Universal City",
          "containedIn": {
            "@type": "AdministrativeArea",
            "name": "California"
          }
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Universal City Flooring Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Residential Engineered Flooring Universal City",
                "description": "Premium residential engineered flooring installation combining beauty and stability for Universal City homes"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Commercial Engineered Flooring Universal City",
                "description": "Commercial grade engineered flooring designed for high-traffic Universal City business environments"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Hardwood Floor Refinishing Universal City",
                "description": "Professional hardwood floor refinishing restoring original beauty in Universal City properties"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Hardwood Floor Replacement Universal City",
                "description": "Complete hardwood floor replacement with professional installation for Universal City homes"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Floor Refinishing Services Universal City",
                "description": "Comprehensive floor refinishing services for all floor types in Universal City"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Vinyl Plank Flooring Installation Universal City",
                "description": "Waterproof vinyl plank flooring installation for Universal City residential and commercial properties"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Laminate Flooring Installation Universal City",
                "description": "Affordable laminate flooring installation with precision fitting for Universal City homes"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Tile Flooring Installation Universal City",
                "description": "Custom tile flooring installation using ceramic, porcelain, and natural stone for Universal City properties"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Tile Flooring Replacement Universal City",
                "description": "Quality tile flooring replacement for outdated or damaged floors in Universal City"
              }
            }
          ]
        }
      },
      {
        "@type": "Offer",
        "@id": "https://www.nohoflooring.com/universal-city/flooring-services-universal-city-ca/#mainOffer",
        "name": "Professional Flooring Services in Universal City CA",
        "description": "Comprehensive flooring installation, refinishing, and replacement services for Universal City residential and commercial properties",
        "provider": {
          "@id": "https://www.nohoflooring.com/#organization"
        },
        "areaServed": {
          "@type": "City",
          "name": "Universal City",
          "containedIn": {
            "@type": "AdministrativeArea",
            "name": "California"
          }
        },
        "availability": "https://schema.org/InStock",
        "availableAtOrFrom": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Universal City",
            "addressRegion": "CA",
            "addressCountry": "US"
          }
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "USD",
          "price": "3.00-25.00",
          "unitText": "per square foot"
        },
        "itemOffered": {
          "@type": "Service",
          "name": "Professional Flooring Services Universal City",
          "serviceType": "Flooring Installation and Refinishing"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.nohoflooring.com/universal-city/flooring-services-universal-city-ca/#faqpage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does flooring installation cost in my area?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In Universal City, flooring installation costs typically range from $3 to $18 per square foot, depending on your choice of material and the complexity of the layout. Budget-friendly options like laminate and vinyl plank generally cost between $3 and $9 per square foot. Premium materials, such as engineered hardwood or natural stone tile, reflect the higher end of the scale due to specialized labor and material costs. We provide detailed written estimates to ensure transparency for every project."
            }
          },
          {
            "@type": "Question",
            "name": "How much does it cost to install 1,000 square feet of flooring?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Installing flooring for a 1,000-square-foot space in Universal City usually ranges from $3,000 to $18,000. Most homeowners invest between $5,000 and $10,000 for high-quality materials and professional labor. This range accounts for variables such as subfloor preparation, old flooring removal, and the specific material selected—with laminate being the most affordable and solid hardwood or custom tile representing the premium investment."
            }
          },
          {
            "@type": "Question",
            "name": "What is the best month to buy flooring?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The best time to buy flooring is typically during the off-peak months of January through March, when contractors often have more availability and suppliers may offer seasonal promotions. Late summer and early fall are also advantageous, especially for hardwood projects, as it allows the material to acclimate and cure before the busy holiday season. However, we provide competitive, fair pricing year-round to accommodate your specific timeline."
            }
          },
          {
            "@type": "Question",
            "name": "Does new flooring add value to my property?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. New flooring is one of the most effective ways to boost a property's market value in Universal City, often yielding a 70-80% return on investment. Quality floors significantly improve a buyer's first impression, signaling that the home has been well-maintained. While hardwood is a top favorite for luxury buyers, modern waterproof vinyl and high-end tiles also add substantial appeal to today's competitive real estate market."
            }
          },
          {
            "@type": "Question",
            "name": "Can I install flooring myself?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While DIY is possible for simple click-lock laminate or vinyl, professional installation is recommended to ensure longevity and protect your warranty. Professionals bring specialized equipment and expertise in subfloor leveling and moisture testing, which are critical for preventing future buckling or gaps. Hiring an expert saves you time, reduces material waste, and guarantees a seamless finish that DIY projects often lack."
            }
          },
          {
            "@type": "Question",
            "name": "Should flooring installers be certified or licensed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, for your protection. In California, any project exceeding $500 requires a C-15 Flooring Contractor License. Hiring a licensed and insured team like NO-HO Flooring ensures that the workers are competent and that you are protected from liability in case of accidents. Verified credentials guarantee that your installation meets strict California building standards and quality benchmarks."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to install flooring?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most residential projects in Universal City are completed within 1 to 5 days. Laminate and luxury vinyl installations are the fastest, often taking only 1–2 days. Hardwood and tile projects typically require 3–5 days to allow for precision cutting, acclimation, or curing of adhesives and grout. We provide a specific project timeline during your initial consultation to help you plan with minimal disruption."
            }
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://www.nohoflooring.com/universal-city/flooring-services-universal-city-ca/#article",
        "headline": "Expert Flooring Contractors in Universal City CA - Complete Guide",
        "description": "Comprehensive guide to professional flooring installation, refinishing, and replacement services in Universal City CA",
        "image": "https://www.nohoflooring.com/images/universal-city-flooring-services.jpg",
        "author": {
          "@type": "Organization",
          "name": "NO-HO Flooring And Construction Service",
          "url": "https://www.nohoflooring.com"
        },
        "publisher": {
          "@id": "https://www.nohoflooring.com/#organization"
        },
        "datePublished": "2024-01-15T10:00:00-08:00",
        "dateModified": "2026-02-11T14:30:00-08:00",
        "articleBody": "Expert guide to flooring contractors in Universal City CA covering licensed professionals, comprehensive installation services, hardwood refinishing, vinyl plank, laminate, tile, and engineered flooring options.",
        "about": [
          {
            "@type": "Thing",
            "name": "Flooring Installation Universal City"
          },
          {
            "@type": "Thing",
            "name": "Hardwood Refinishing"
          },
          {
            "@type": "Thing",
            "name": "Licensed Flooring Contractors"
          },
          {
            "@type": "Thing",
            "name": "Commercial Flooring"
          },
          {
            "@type": "Thing",
            "name": "Residential Flooring"
          }
        ],
        "mentions": [
          {
            "@type": "Thing",
            "name": "Universal City CA"
          },
          {
            "@type": "Thing",
            "name": "Universal Studios Hollywood"
          },
          {
            "@type": "Thing",
            "name": "Burbank"
          },
          {
            "@type": "Thing",
            "name": "North Hollywood"
          },
          {
            "@type": "Thing",
            "name": "West Hollywood"
          }
        ],
        "inLanguage": "en-US",
        "copyrightYear": "2026",
        "copyrightHolder": {
          "@id": "https://www.nohoflooring.com/#organization"
        }
      },
      {
        "@type": "HowTo",
        "@id": "https://www.nohoflooring.com/universal-city/flooring-services-universal-city-ca/#howto",
        "name": "How to Get Professional Flooring Installation in Universal City CA",
        "description": "Step-by-step process for Universal City homeowners and businesses to obtain professional flooring installation services",
        "image": "https://www.nohoflooring.com/images/universal-city-flooring-installation-process.jpg",
        "totalTime": "P3D",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "3000-18000"
        },
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Schedule Free Consultation",
            "text": "Contact NO-HO Flooring at (818) 932-4117 to schedule your free in-home consultation. We'll visit your Universal City property to assess existing conditions, take measurements, and discuss your flooring preferences and budget.",
            "url": "https://www.nohoflooring.com/universal-city/flooring-services-universal-city-ca/#consultation"
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Explore Material Options",
            "text": "Review flooring samples including hardwood species, engineered options, vinyl plank styles, laminate designs, and tile selections. Our experts help you choose materials suited to Universal City's climate and your specific needs.",
            "url": "https://www.nohoflooring.com/universal-city/flooring-services-universal-city-ca/#materials"
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Receive Detailed Estimate",
            "text": "Get a comprehensive written estimate with transparent pricing, material costs, labor breakdown, and project timeline. No hidden fees or surprise charges.",
            "url": "https://www.nohoflooring.com/universal-city/flooring-services-universal-city-ca/#estimate"
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Schedule Installation",
            "text": "Once you approve the estimate, we schedule your installation at a time convenient for your Universal City schedule. We coordinate around your availability to minimize disruption.",
            "url": "https://www.nohoflooring.com/universal-city/flooring-services-universal-city-ca/#scheduling"
          },
          {
            "@type": "HowToStep",
            "position": 5,
            "name": "Professional Installation",
            "text": "Our licensed installers arrive with all necessary equipment and materials. We prepare substrates properly, install flooring following manufacturer specifications, and maintain clean organized work areas throughout your Universal City project.",
            "url": "https://www.nohoflooring.com/universal-city/flooring-services-universal-city-ca/#installation"
          },
          {
            "@type": "HowToStep",
            "position": 6,
            "name": "Quality Inspection & Walkthrough",
            "text": "We conduct thorough quality inspection and invite you to examine the completed installation. We explain proper care and maintenance for your specific flooring type.",
            "url": "https://www.nohoflooring.com/universal-city/flooring-services-universal-city-ca/#inspection"
          },
          {
            "@type": "HowToStep",
            "position": 7,
            "name": "Final Cleanup & Documentation",
            "text": "We remove all debris, packaging, and equipment, leaving your Universal City property clean. You receive warranty documentation and care instructions for your new floors.",
            "url": "https://www.nohoflooring.com/universal-city/flooring-services-universal-city-ca/#completion"
          }
        ],
        "tool": [
          {
            "@type": "HowToTool",
            "name": "Phone Consultation"
          },
          {
            "@type": "HowToTool",
            "name": "Flooring Samples"
          },
          {
            "@type": "HowToTool",
            "name": "Written Estimate"
          },
          {
            "@type": "HowToTool",
            "name": "Professional Installation Equipment"
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.nohoflooring.com/#localbusiness",
        "name": "NO-HO Flooring - Universal City Flooring Contractors",
        "image": [
          "https://www.nohoflooring.com/logo.webp",
          "https://www.nohoflooring.com/images/universal-city-flooring-services.jpg"
        ],
        "priceRange": "$$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "North Hollywood",
          "addressLocality": "Universal City",
          "addressRegion": "CA",
          "postalCode": "91608",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "34.1381",
          "longitude": "-118.3534"
        },
        "url": "https://www.nohoflooring.com/universal-city/flooring-services-universal-city-ca/",
        "telephone": "+1-818-932-4117",
        "email": "nohoflooring@gmail.com",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "20:30"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "500",
          "bestRating": "5",
          "worstRating": "1"
        },
        "paymentAccepted": "Cash, Credit Card, Debit Card, Check, Financing Available",
        "currenciesAccepted": "USD"
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://www.nohoflooring.com/universal-city/flooring-services-universal-city-ca/#professionalservice",
        "name": "Professional Flooring Contractors Universal City CA",
        "description": "Expert flooring installation, refinishing, and replacement services for Universal City residential and commercial properties. Licensed contractors with 40+ years experience.",
        "url": "https://www.nohoflooring.com/universal-city/flooring-services-universal-city-ca/",
        "telephone": "+1-818-932-4117",
        "priceRange": "$3-$25 per square foot",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Universal City",
          "addressRegion": "CA",
          "addressCountry": "US"
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Universal City"
          },
          {
            "@type": "City",
            "name": "Burbank"
          },
          {
            "@type": "City",
            "name": "Los Angeles"
          },
          {
            "@type": "City",
            "name": "West Hollywood"
          },
          {
            "@type": "City",
            "name": "North Hollywood"
          }
        ]
      }
    ],
  };
  return (
    <>
      <Script
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
