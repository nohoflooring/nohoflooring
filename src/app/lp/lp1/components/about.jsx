
import styles from "@/styles/home/abt.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import PatingPerson from "media/images/home/ratingPerson.webp"
import Image from "next/image";
import { StarIcon } from "@/src/app/app-constants";
import AbtImg from "media/images/home/about.webp"

const About = ({ noborder }) => {
    return (
        <section className={`${styles.abtSection} p-100 ${noborder ? "mb-0" : "borderRadiusBottom"}`}>
            <Container>
                <Row>
                    <Col md={6} className="my-auto">
                        <div className="subtitle">About Us</div>
                        <h2>Who We Are</h2>
                        <p>At Noho Flooring, we bring over 30 years of hands-on experience in residential flooring and commercial flooring near you. From vinyl plank flooring installation to expert hardwood floor staining and precision wood floor refinishing, we don’t just do the job — we do it right the first time.</p>
                        <p>Looking for floor installation near me or comparing the cost per sq ft to install laminate flooring? Our team delivers fast quotes, fair pricing, and premium craftsmanship with zero shortcuts.</p>
                        <p>We offer clear answers on hardwood floor installation cost, honest guidance, and unmatched results. Hundreds of homeowners rely on us for the real numbers, the real timelines, and the real finish. Contact us today to get a free quote.</p>
                    </Col>
                    <Col md={6} className="my-auto">
                        <div className={styles.boxImage}>
                            <Image src={AbtImg.src} alt="Trusted Flooring Contractors with a Reputation for Excellence" fill />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.containerProject}>
                            <div className={styles.itemProject}>
                                <div className={styles.value}>250 +</div>
                                <div className={styles.name}>Projects Delivered</div>
                            </div>
                            <div className={styles.itemProject}>
                                <div className={styles.value}>70 %</div>
                                <div className={styles.name}>Business Growth</div>
                            </div>
                            <div className={styles.itemProject}>
                                <div className={styles.value}>500 +</div>
                                <div className={styles.name}>Happy Clients </div>
                            </div>
                            <div className={styles.itemProject}>
                                <div className={styles.trust}>Trusted by industry leaders</div>
                                <div className={styles.pic}> <Image src={PatingPerson.src} alt="Trusted by industry leaders" width={160} height={55} /> </div>
                                <div className={styles.start}>5.00 <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About