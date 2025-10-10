
import styles from "@/styles/home/abt.module.scss";
import { Col, Container, Row } from "react-bootstrap";

import PatingPerson from "media/images/home/ratingPerson.webp"
import Image from "next/image";
import { StarIcon } from "@/src/app/app-constants";


const About = ({ data, noborder }) => {
    return (
        <section className={`${styles.abtSection} p-100 ${noborder ? "mb-0" : "borderRadiusBottom"}`}>
            <Container>
                <Row>
                    <Col md={6} className="my-auto">
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                        {data.txt}
                    </Col>
                    <Col md={6} className="my-auto">
                        <div className={styles.boxImage}>
                            <Image src={data.img} alt="Trusted Flooring Contractors with a Reputation for Excellence" fill sizes="(max-width: 768px) 100vw, 50vw" />
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