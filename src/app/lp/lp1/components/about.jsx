
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
                        <p>With over 30 years of flooring expertise, Noho Flooring has built a reputation for quality craftsmanship and dependable service. Our team is trained to handle every type of project , from vinyl plank flooring installation to hardwood flooring refinishing , ensuring results that look flawless and last for years.</p>
                        <p>We know every home and floor is unique. Whether you need wood floor refinishing to restore its natural beauty or want guidance on hardwood floor installation cost, our professionals are here to give you clear answers and exceptional result</p>
                        <p>Contact us today to learn more, request a free estimate, and see why hundreds of local homeowners rely on Noho Flooring for their dream floors</p>
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