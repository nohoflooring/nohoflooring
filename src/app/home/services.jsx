import styles from "@/styles/home/services.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Ser01 from "media/images/services/1.webp"
import Ser02 from "media/images/services/2.webp"
import Ser03 from "media/images/services/3.webp"
import { ArrowIcon } from "@/src/app/app-constants";
import Link from "next/link";


const data = [
    {
        tit: "Floor Refinishing",
        txt: "We specialize in restoring the beauty of your hardwood with expert floor refinishing services at Noho Flooring. Our team uses industry-grade sanding and sealing techniques to eliminate scratches, dullness, and wear, reviving your floors with a rich, smooth finish that lasts. Whether you're updating a single room or refinishing your entire home, we deliver results that look brand new without the cost of replacement.",
        img: Ser01.src,
        link: "#"
    },
    {
        tit: "Floor Installation",
        txt: "Precision. Durability. Style. That’s what you can expect from floor installation at Noho Flooring. From subfloor prep to the final finish, our expert installers handle every detail with care and craftsmanship. We offer full-service installations for hardwood, laminate, vinyl, tile, and more, customized to suit your vision and space. No delays. No surprises. Just beautifully installed floors that stand the test of time.",
        img: Ser02.src, link: "#"
    },
    {
        tit: "Hardwood Flooring",
        txt: "Elevate your space with the warmth and timeless beauty of hardwood flooring from Noho Flooring. We carry a curated selection of premium woods, stains, and finishes, from classic oak to rich walnut, designed to match any aesthetic. Whether you’re installing new hardwood or replacing outdated floors, our experienced team ensures a seamless process and a stunning final result you’ll love for years to come.",
        img: Ser03.src, link: "#"
    },
    {
        tit: "Vinyl & Laminate Flooring",
        txt: "For affordable luxury and everyday durability, vinyl and laminate flooring from Noho Flooring is the smart choice. We offer a wide range of waterproof, scratch-resistant, and easy-to-maintain styles, perfect for busy households and commercial spaces alike. Whether you choose glue-down, click-lock, or rigid core options, we guarantee a flawless install and a high-end look without the high-end price.",
        img: Ser01.src, link: "#"
    }
]
const Services = () => {
    return (
        <section className={styles.serviceSection}>
            <Container>
                <Row>
                    <Col md={7} lg={6}>
                        <div className="subtitle">Our Services </div>
                        <h2>We Install It. We Refinish. We Leave It Perfect.</h2>
                        <p>Noho Flooring is a flooring company known for expert floor installation, floor refinishing, From hardwood to vinyl and laminate, we deliver high-quality flooring services. </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.serviceContainer}>
                            {data.map((item, index) => (
                                <div className={styles.serviceItem} key={index} style={{ backgroundImage: `url(${item.img})` }}>
                                    <div className={styles.numberStyles}>0{index + 1}</div>
                                    <div className={styles.serviceTxt}>
                                        <h4>{item.tit}</h4>
                                        <p>{item.txt}</p>
                                    </div>
                                    <Link href={item.link} className={styles.servicebtn}>
                                        <div className={styles.readMoreIcon}><ArrowIcon /></div>
                                        View Detail
                                    </Link>
                                </div>
                            ))}
                        </div>
                        <div className="flexStyleBtn blackCenter">
                            <div className="btnItem">
                                <a href="#">View All Services</a>
                            </div>
                            <div className="btnItem">
                                <a href="#"> Get a Free Consultation</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Services