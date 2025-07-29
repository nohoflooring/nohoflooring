import styles from "@/styles/home/whychoose.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import BgImg from "media/images/home/ctaImage.webp"


const WhyChoose = () => {
    return (
        <section className={`${styles.whyChooseSection} p-100`} >
            <Container className={styles.whyChooseContainer} style={{ backgroundImage: `url(${BgImg.src})` }}>
                <Row className="h-100">
                    <Col md={12}>
                        <div className={styles.whyChooseBox}>
                            <div className={styles.whyChooseItem}>
                                <div className="subtitle">Done Right. On Time. Every Time.</div>
                                <h2>Why Homeowners and Contractors Hire Noho</h2>
                            </div>
                            <div className={styles.whyChooseItem}>
                                <p>Noho Flooring offers professional flooring services as a reliable flooring contractor in Los Angeles. From installation to repair, we handle it all with expert care.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles.whyChooseList}>
                            <div className={styles.whyItem}>
                                <h5>Advanced Installation Techniques</h5>
                                <p>We use only top-quality materials and proven methods to guarantee floors that look beautiful and last for years.</p>
                                <div className={styles.numberStyle}>01</div>
                            </div>
                            <div className={styles.whyItem}>
                                <h5>Full-Service Solutions</h5>
                                <p>From floor installation to floor repair and refinishing, we handle every step of your flooring project seamlessly.</p>
                                <div className={styles.numberStyle}>02</div>
                            </div>
                            <div className={styles.whyItem}>
                                <h5>Fast & Efficient Turnaround</h5>
                                <p>Get your floors installed or refinished quickly without sacrificing quality.</p>
                                <div className={styles.numberStyle}>03</div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default WhyChoose