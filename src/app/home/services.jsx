
import styles from "@/styles/home/services.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Ser01 from "media/images/services/commercial/bannerImg.webp"
import Ser02 from "media/images/services/floor-refinishing/bannerImg.webp"
import Ser03 from "media/images/services/hardwood-refinishing/bannerImg.webp"
import Ser04 from "media/images/services/hardwood-replacements/bannerImg.webp"
import Ser05 from "media/images/services/laminate-Installation/bannerImg.webp"
import Ser06 from "media/images/services/residential-engineered/bannerImg.webp"
import Ser07 from "media/images/services/tile-Installations/bannerImg.webp"
import Ser08 from "media/images/services/tile-replacements/bannerImg.webp"
import Ser09 from "media/images/services/vinyl-plank/bannerImg.webp"
import { ArrowIcon } from "@/src/app/app-constants";
import Link from "next/link";
import ScrollBtn from "@/src/app/components/scrollbtn";

const data = [
    {
        tit: "Commercial Engineered Flooring",
        txt: "Upgrade your business space with engineered flooring in North Hollywood, CA. We offer durable, stylish, and low-maintenance commercial flooring tailored to your needs.",
        img: Ser01.src,
        link: "/commercial-engineered-flooring-in-north-hollywood-ca"
    },
    {
        tit: "Floor Refinishing Services",
        txt: "We specialize in restoring the beauty of your hardwood with expert floor refinishing services at Noho Flooring. Our team uses industry-grade sanding and sealing techniques to eliminate scratches, dullness, and wear, reviving your floors with a rich, smooth finish that lasts. Whether you're updating a single room or refinishing your entire home, we deliver results that look brand new without the cost of replacement.",
        img: Ser02.src,
        link: "/floor-refinishing-services-in-north-hollywood-ca"
    },
    {
        tit: "Hardwood Floor Refinishing",
        txt: "Revive your worn-out wood floors with expert hardwood floor refinishing in North Hollywood CA. Dust-free sanding, flawless finishes, and fast turnarounds.",
        img: Ser03.src,
        link: "/hardwood-floor-refinishing-in-north-hollywood-ca"
    },
    {
        tit: "Hardwood Flooring Services",
        txt: "Elevate your space with the warmth and timeless beauty of hardwood flooring from Noho Flooring. We carry a curated selection of premium woods, stains, and finishes, from classic oak to rich walnut, designed to match any aesthetic. Whether you’re installing new hardwood or replacing outdated floors, our experienced team ensures a seamless process and a stunning final result you’ll love for years to come.",
        img: Ser04.src,
        link: "/hardwood-floor-replacements-in-north-hollywood-ca"
    },
    {
        tit: "Laminate Floor Installation",
        txt: "Precision. Durability. Style. That’s what you can expect from laminate floor installation at Noho Flooring. From subfloor prep to the final finish, our expert installers handle every detail with care and craftsmanship. We offer full-service installations for hardwood, laminate, vinyl, tile, and more, customized to suit your vision and space. No delays. No surprises. Just beautifully installed floors that stand the test of time.",
        img: Ser05.src,
        link: "/laminate-flooring-installation-services-in-north-hollywood"
    },
    {
        tit: "Residential Engineered Flooring",
        txt: "Looking for residential engineered flooring in North Hollywood CA? We install stylish, long-lasting floors that elevate your space and fit your lifestyle.",
        img: Ser06.src,
        link: "/residential-engineered-flooring-in-north-hollywood-ca"
    },
    {
        tit: "Tile Flooring Installations",
        txt: "Upgrade your space with professional tile flooring installations in North Hollywood, CA. We deliver expert craftsmanship, premium materials, and flawless results.",
        img: Ser07.src,
        link: "/tile-flooring-installations-in-north-hollywood-ca"
    },
    {
        tit: "Tile Flooring Replacements",
        txt: "Upgrade your home with top-quality tile flooring replacements in North Hollywood, CA. Our pros deliver precise removal and flawless tile installation.",
        img: Ser08.src,
        link: "/tile-flooring-replacements-in-north-hollywood-ca"
    },
    {
        tit: "Vinyl Plank Flooring Installation",
        txt: "For affordable luxury and everyday durability, vinyl plank flooring from Noho Flooring is the smart choice. We offer a wide range of waterproof, scratch-resistant, and easy-to-maintain styles, perfect for busy households and commercial spaces alike. Whether you choose glue-down, click-lock, or rigid core options, we guarantee a flawless install and a high-end look without the high-end price.",
        img: Ser09.src,
        link: "/vinyl-plank-flooring-installation-in-north-hollywood-ca"
    }
]
const Services = ({ padding, home }) => {

    const selectedIndexes = [1, 3, 4, 8];

    const displayData = home
        ? selectedIndexes.map(index => data[index])
        : data;
    return (
        <section className={`${styles.serviceSection} ${padding ? "p-100" : ""}`}>
            <Container>
                <Row>
                    <Col md={8} lg={7}>
                        <div className="subtitle">Our Services </div>
                        <h2>We Install It. We Refinish. We Leave It Perfect.</h2>
                        <p>Noho Flooring is a flooring company known for expert floor installation, floor refinishing, From hardwood to vinyl and laminate, we deliver high-quality flooring services. </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.serviceContainer}>
                            {displayData.map((item, index) => (
                                <div className={styles.serviceItem} key={index} style={{ backgroundImage: `url(${item?.img})` }}>
                                    <div className={styles.numberStyles}>0{index + 1}</div>
                                    <div className={styles.serviceTxt}>
                                        <h4>{item?.tit}</h4>
                                        <p>{item?.txt}</p>
                                    </div>
                                    <Link href={item?.link || "#"} className={styles.servicebtn}>
                                        <div className={styles.readMoreIcon}><ArrowIcon /></div>
                                        View Detail
                                    </Link>
                                    <Link href={item?.link || "#"} className={styles.servicebtn1}>
                                        Read More
                                    </Link>
                                </div>
                            ))}
                        </div>
                        {padding ? null :
                            <div className="flexStyleBtn blackCenter">
                                <div className="btnItem">
                                    <a href="/services">View All Services</a>
                                </div>
                                <div className="btnItem">
                                    <ScrollBtn txt="Get a Free Consultation" />
                                </div>
                            </div>
                        }
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Services