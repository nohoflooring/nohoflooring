import Banner from '@/src/app/west-hollywood/flooring-services-west-hollywood-ca/components/banner';
import { BannerData, Content1, Content2, Content3, Content4, Content5, Content6, Content7, Content8, Content9, Content10, Content11, Content12, Content13, setpContent, CostServices, primaryServices, faqsData, Content14, CtaData } from "@/src/app/west-hollywood/flooring-services-west-hollywood-ca/data/data";
import Contact from "@/src/app/home/contact"
import Content from '@/src/app/west-hollywood/flooring-services-west-hollywood-ca/components/content';
import Steps from '@/src/app/west-hollywood/flooring-services-west-hollywood-ca/components/steps';
import CoreServices from '@/src/app/west-hollywood/flooring-services-west-hollywood-ca/components/coreservices';
import PrimaryServices from '@/src/app/west-hollywood/flooring-services-west-hollywood-ca/components/primaryservices';
import Faqs from "@/src/app/home/faqs"
import Cta from '@/src/app/west-hollywood/flooring-services-west-hollywood-ca/components/cta';
import Map from "@/src/app/components/services/map";
const Page = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": "https://www.nohoflooring.com/#organization",
        "name": "NO-HO Flooring And Construction Service",
        "alternateName": ["NO-HO Flooring", "NOHO Flooring West Hollywood", "Flooring Contractors West Hollywood CA"],
        "url": "https://www.nohoflooring.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.nohoflooring.com/logo.webp",
          "width": "250",
          "height": "80"
        },
        "image": "https://www.nohoflooring.com/logo.webp",
        "description": "Premium flooring contractors serving West Hollywood CA with 40+ years of experience. Luxury installation, refinishing, and replacement services for hardwood, laminate, vinyl, tile, and engineered flooring. Licensed and insured flooring specialists.",
        "slogan": "Luxury Flooring Installation, Expert Refinishing & Custom Replacement Services in West Hollywood",
        "foundingDate": "1985",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "North Hollywood",
          "addressLocality": "West Hollywood",
          "addressRegion": "CA",
          "postalCode": "90069",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "34.0900",
          "longitude": "-118.3617"
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
            "areaServed": "West Hollywood"
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
            "name": "West Hollywood",
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
            "name": "Beverly Hills"
          },
          {
            "@type": "City",
            "name": "Hollywood"
          },
          {
            "@type": "City",
            "name": "Los Angeles"
          },
          {
            "@type": "City",
            "name": "Universal City"
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
                "name": "Commercial Engineered Flooring West Hollywood CA"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "serviceType": "Hardwood Floor Refinishing",
                "name": "Hardwood Floor Refinishing West Hollywood CA"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "serviceType": "Laminate Flooring Installation",
                "name": "Laminate Flooring Installation West Hollywood CA"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "serviceType": "Tile Flooring Installation",
                "name": "Tile Flooring Installation West Hollywood CA"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "serviceType": "Vinyl Plank Flooring Installation",
                "name": "Vinyl Plank Flooring Installation West Hollywood CA"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "serviceType": "Hardwood Floor Replacement",
                "name": "Hardwood Floor Replacements West Hollywood CA"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "serviceType": "Residential Engineered Flooring",
                "name": "Residential Engineered Flooring West Hollywood CA"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "serviceType": "Floor Refinishing Services",
                "name": "Floor Refinishing Services West Hollywood CA"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "serviceType": "Tile Flooring Replacement",
                "name": "Tile Flooring Replacements West Hollywood CA"
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
          "@id": "https://www.nohoflooring.com/west-hollywood/flooring-services-west-hollywood-ca/#mainOffer"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.nohoflooring.com/west-hollywood/flooring-services-west-hollywood-ca/#webpage",
        "url": "https://www.nohoflooring.com/west-hollywood/flooring-services-west-hollywood-ca/",
        "name": "Premium Flooring Contractors West Hollywood CA - 40+ Years of Excellence",
        "alternateName": "West Hollywood Flooring Services - Luxury Installation & Refinishing",
        "description": "Licensed flooring contractors near West Hollywood CA with 40+ years experience. Luxury installation, refinishing & replacement services. Free estimates. Call (818) 932-4117 today!",
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.nohoflooring.com/#website",
          "name": "NO-HO Flooring And Construction Service",
          "url": "https://www.nohoflooring.com"
        },
        "about": {
          "@id": "https://www.nohoflooring.com/west-hollywood/flooring-services-west-hollywood-ca/#service"
        },
        "publisher": {
          "@id": "https://www.nohoflooring.com/#organization"
        },
        "breadcrumb": {
          "@id": "https://www.nohoflooring.com/west-hollywood/flooring-services-west-hollywood-ca/#breadcrumb"
        },
        "potentialAction": {
          "@type": "ReadAction",
          "target": ["https://www.nohoflooring.com/west-hollywood/flooring-services-west-hollywood-ca/"]
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.nohoflooring.com/west-hollywood/flooring-services-west-hollywood-ca/#breadcrumb",
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
            "name": "West Hollywood",
            "item": "https://www.nohoflooring.com/west-hollywood/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Flooring Services West Hollywood CA",
            "item": "https://www.nohoflooring.com/west-hollywood/flooring-services-west-hollywood-ca/"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.nohoflooring.com/west-hollywood/flooring-services-west-hollywood-ca/#service",
        "serviceType": "Flooring Installation and Refinishing Services",
        "provider": {
          "@id": "https://www.nohoflooring.com/#organization"
        },
        "areaServed": {
          "@type": "City",
          "name": "West Hollywood",
          "containedIn": {
            "@type": "AdministrativeArea",
            "name": "California"
          }
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "West Hollywood Flooring Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Luxury Residential Engineered Flooring West Hollywood",
                "description": "Premium residential engineered flooring installation for West Hollywood luxury properties"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "High-Performance Commercial Engineered Flooring West Hollywood",
                "description": "Commercial grade engineered flooring for West Hollywood businesses and high-traffic areas"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Expert Hardwood Floor Refinishing West Hollywood",
                "description": "Professional hardwood floor refinishing restoring original beauty in West Hollywood properties"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Premium Hardwood Floor Replacement West Hollywood",
                "description": "Complete hardwood floor replacement with luxury materials for West Hollywood homes"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Professional Floor Refinishing Services West Hollywood",
                "description": "Comprehensive floor refinishing services for all floor types in West Hollywood"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Waterproof Vinyl Plank Installation West Hollywood",
                "description": "Luxury waterproof vinyl plank flooring installation for West Hollywood properties"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Budget-Friendly Laminate Flooring West Hollywood",
                "description": "Affordable laminate flooring installation with premium appearance for West Hollywood homes"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Designer Tile Flooring Installation West Hollywood",
                "description": "Custom tile flooring installation using premium ceramic, porcelain, and natural stone"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Expert Tile Flooring Replacement West Hollywood",
                "description": "Quality tile flooring replacement for outdated or damaged floors in West Hollywood"
              }
            }
          ]
        }
      },
      {
        "@type": "Offer",
        "@id": "https://www.nohoflooring.com/west-hollywood/flooring-services-west-hollywood-ca/#mainOffer",
        "name": "Premium Flooring Services in West Hollywood CA",
        "description": "Luxury flooring installation, expert refinishing, and custom replacement services for West Hollywood residential and commercial properties",
        "provider": {
          "@id": "https://www.nohoflooring.com/#organization"
        },
        "areaServed": {
          "@type": "City",
          "name": "West Hollywood",
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
            "addressLocality": "West Hollywood",
            "addressRegion": "CA",
            "addressCountry": "US"
          }
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "USD",
          "price": "4.00-30.00",
          "unitText": "per square foot"
        },
        "itemOffered": {
          "@type": "Service",
          "name": "Premium Flooring Services West Hollywood",
          "serviceType": "Flooring Installation and Refinishing"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.nohoflooring.com/west-hollywood/flooring-services-west-hollywood-ca/#faqpage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What are typical flooring installation costs in West Hollywood?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In West Hollywood, installation costs generally range from $4 to $20 per square foot. Budget-friendly laminate ranges from $4–$9, while luxury vinyl plank (LVP) costs between $5–$11. High-end options like engineered hardwood ($7–$16) and solid hardwood ($10–$20) reflect the premium standards of the area. Designer tiles or natural stone for luxury properties can range from $8 to $30 per square foot."
            }
          },
          {
            "@type": "Question",
            "name": "What's the average cost for 1,000 sq ft flooring installation in West Hollywood?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For a 1,000-square-foot project, most West Hollywood clients invest between $7,000 and $14,000, though the total range can span from $4,000 to $20,000. This pricing includes materials and expert labor. Factors like specialized acoustic underlayment for multi-unit buildings, furniture moving, or intricate custom patterns can influence the final investment."
            }
          },
          {
            "@type": "Question",
            "name": "When is the ideal time to schedule flooring installation in West Hollywood?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "West Hollywood's mild climate allows for successful installation year-round. However, January through March is ideal for better contractor availability after the holiday rush. For hardwood, late summer and early fall are preferred to ensure proper material acclimation before any seasonal moisture changes. We recommend scheduling around local events to avoid access issues."
            }
          },
          {
            "@type": "Question",
            "name": "How does new flooring impact West Hollywood property values?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In the competitive West Hollywood market, quality flooring typically yields a 75–85% return on investment. Modern, 'move-in ready' floors significantly increase buyer appeal, leading to faster sales and higher offers. Hardwood remains the most sought-after choice for local buyers, followed by high-quality engineered wood and designer tile."
            }
          },
          {
            "@type": "Question",
            "name": "DIY vs. Professional Installation: What's best for West Hollywood homes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While DIY is an option for simple projects, professional installation is best for protecting West Hollywood property values. Professionals ensure correct subfloor preparation and moisture testing, which are vital for long-term durability. Expert installation also prevents voiding manufacturer warranties and ensures a flawless finish that matches the sophisticated standards of the neighborhood."
            }
          },
          {
            "@type": "Question",
            "name": "What credentials should West Hollywood flooring contractors have?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Your contractor must hold a valid California C-15 license for any project exceeding $500. This ensures they have passed state competency exams. Additionally, they should carry general liability and workers' compensation insurance to protect you from financial risk. NO-HO Flooring maintains all required licenses and manufacturer certifications for your peace of mind."
            }
          },
          {
            "@type": "Question",
            "name": "What's the typical timeline for flooring installation in West Hollywood?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most residential projects are completed within 1 to 5 days. Laminate and Vinyl are the fastest (1–2 days), while Hardwood and Engineered floors usually take 2–3 days. Custom tile work or site-finished hardwood may require 4–7 days to allow for proper curing and sealing. We provide a detailed schedule during your consultation at (818) 932-4117."
            }
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://www.nohoflooring.com/west-hollywood/flooring-services-west-hollywood-ca/#article",
        "headline": "Premium Flooring Contractors in West Hollywood CA - Complete Luxury Guide",
        "description": "Comprehensive guide to premium flooring installation, refinishing, and replacement services in West Hollywood CA",
        "image": "https://www.nohoflooring.com/images/west-hollywood-flooring-services.jpg",
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
        "articleBody": "Expert guide to premium flooring contractors in West Hollywood CA covering licensed professionals, luxury installation services, hardwood refinishing, designer vinyl plank, laminate, tile, and engineered flooring options.",
        "about": [
          {
            "@type": "Thing",
            "name": "Luxury Flooring Installation West Hollywood"
          },
          {
            "@type": "Thing",
            "name": "Premium Hardwood Refinishing"
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
            "name": "West Hollywood CA"
          },
          {
            "@type": "Thing",
            "name": "Design District"
          },
          {
            "@type": "Thing",
            "name": "Beverly Hills"
          },
          {
            "@type": "Thing",
            "name": "Sunset Strip"
          },
          {
            "@type": "Thing",
            "name": "Robertson Boulevard"
          },
          {
            "@type": "Thing",
            "name": "Santa Monica Boulevard"
          },
          {
            "@type": "Thing",
            "name": "Melrose Avenue"
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
        "@id": "https://www.nohoflooring.com/west-hollywood/flooring-services-west-hollywood-ca/#howto",
        "name": "How to Get Premium Flooring Installation in West Hollywood CA",
        "description": "Step-by-step process for West Hollywood homeowners and businesses to obtain luxury flooring installation services",
        "image": "https://www.nohoflooring.com/images/west-hollywood-flooring-installation-process.jpg",
        "totalTime": "P3D",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "4000-20000"
        },
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Schedule Complimentary Design Consultation",
            "text": "Contact NO-HO Flooring at (818) 932-4117 to schedule your complimentary in-home design consultation. We'll visit your West Hollywood property to assess existing conditions, evaluate lighting and design elements, take measurements, and discuss your aesthetic vision and budget.",
            "url": "https://www.nohoflooring.com/west-hollywood/flooring-services-west-hollywood-ca/#consultation"
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Explore Premium Material Options",
            "text": "Review luxury flooring samples including premium hardwood species, designer engineered options, luxury vinyl plank styles, contemporary laminate designs, and designer tile selections. Our experts help you choose materials suited to West Hollywood's sophisticated aesthetic and your specific needs.",
            "url": "https://www.nohoflooring.com/west-hollywood/flooring-services-west-hollywood-ca/#materials"
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Receive Detailed Premium Estimate",
            "text": "Get a comprehensive written estimate with transparent pricing, premium material costs, labor breakdown, and project timeline. No hidden fees or surprise charges—just honest pricing that respects your budget.",
            "url": "https://www.nohoflooring.com/west-hollywood/flooring-services-west-hollywood-ca/#estimate"
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Schedule Installation",
            "text": "Once you approve the estimate, we schedule your installation coordinating around your West Hollywood schedule to minimize disruption. We coordinate with building management if needed and work around your busy lifestyle.",
            "url": "https://www.nohoflooring.com/west-hollywood/flooring-services-west-hollywood-ca/#scheduling"
          },
          {
            "@type": "HowToStep",
            "position": 5,
            "name": "Expert Professional Installation",
            "text": "Our licensed installers arrive with professional equipment and premium materials. We prepare substrates properly, install flooring following manufacturer specifications, and maintain clean organized work areas throughout your West Hollywood project.",
            "url": "https://www.nohoflooring.com/west-hollywood/flooring-services-west-hollywood-ca/#installation"
          },
          {
            "@type": "HowToStep",
            "position": 6,
            "name": "Thorough Quality Inspection & Walkthrough",
            "text": "We conduct comprehensive quality inspection and invite you to examine the completed installation. We explain proper care and maintenance for your premium flooring, providing written guidelines for cleaning, protection, and warranty compliance.",
            "url": "https://www.nohoflooring.com/west-hollywood/flooring-services-west-hollywood-ca/#inspection"
          },
          {
            "@type": "HowToStep",
            "position": 7,
            "name": "Final Cleanup & Documentation",
            "text": "We remove all debris, packaging, and equipment, leaving your West Hollywood property pristine. You receive warranty documentation and care instructions for your luxury floors.",
            "url": "https://www.nohoflooring.com/west-hollywood/flooring-services-west-hollywood-ca/#completion"
          }
        ],
        "tool": [
          {
            "@type": "HowToTool",
            "name": "Design Consultation"
          },
          {
            "@type": "HowToTool",
            "name": "Premium Flooring Samples"
          },
          {
            "@type": "HowToTool",
            "name": "Detailed Written Estimate"
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
        "name": "NO-HO Flooring - West Hollywood Premium Flooring Contractors",
        "image": [
          "https://www.nohoflooring.com/logo.webp",
          "https://www.nohoflooring.com/images/west-hollywood-flooring-services.jpg"
        ],
        "priceRange": "$$$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "North Hollywood",
          "addressLocality": "West Hollywood",
          "addressRegion": "CA",
          "postalCode": "90069",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "34.0900",
          "longitude": "-118.3617"
        },
        "url": "https://www.nohoflooring.com/west-hollywood/flooring-services-west-hollywood-ca/",
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
        "@id": "https://www.nohoflooring.com/west-hollywood/flooring-services-west-hollywood-ca/#professionalservice",
        "name": "Premium Flooring Contractors West Hollywood CA",
        "description": "Luxury flooring installation, expert refinishing, and custom replacement services for West Hollywood residential and commercial properties. Licensed contractors with 40+ years experience.",
        "url": "https://www.nohoflooring.com/west-hollywood/flooring-services-west-hollywood-ca/",
        "telephone": "+1-818-932-4117",
        "priceRange": "$4-$30 per square foot",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "West Hollywood",
          "addressRegion": "CA",
          "addressCountry": "US"
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "West Hollywood"
          },
          {
            "@type": "City",
            "name": "Beverly Hills"
          },
          {
            "@type": "City",
            "name": "Hollywood"
          },
          {
            "@type": "City",
            "name": "Los Angeles"
          },
          {
            "@type": "City",
            "name": "Universal City"
          }
        ]
      }

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
