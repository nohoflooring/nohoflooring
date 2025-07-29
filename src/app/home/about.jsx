
import styles from "@/styles/home/abt.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Img01 from "media/images/home/about.webp"
import PatingPerson from "media/images/home/ratingPerson.webp"
import Image from "next/image";
import { StarIcon } from "@/src/app/app-constants";
const About = () => {
    return (
        <section className={`${styles.abtSection} p-100 borderRadiusBottom`}>
            <Container>
                <Row>
                    <Col md={6} className="my-auto">
                        <div className="subtitle">About us</div>
                        <h2>Trusted Flooring Contractors<br />
                            with a Reputation for Excellence
                        </h2>
                        <p>Professional floor installation services serving North Hollywood and the greater Los Angeles area. With a deep understanding of materials and techniques, our team specializes in everything from laminate flooring to hardwood and vinyl solutions.</p>
                        <p>Whether you’re planning a new floor installation or need expert floor repair and refinishing, we bring craftsmanship, reliability, and personalized service to every job. We’re here to ensure your floors not only look stunning but also stand the test of time.</p>
                    </Col>
                    <Col md={6} className="my-auto">
                        <div className={styles.boxImage}>
                            <Image src={Img01.src} alt="Trusted Flooring Contractors with a Reputation for Excellence" fill />
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