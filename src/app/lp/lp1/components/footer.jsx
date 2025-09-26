import styles from "@/styles/lp/lp1/footer.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { EmailIcon, LocationIcon, PhoneIcon, TimingIcon } from "@/src/app/app-constants";
import Link from "next/link";

const Footer = () => {
    return (
        <section className={`${styles.footerSection} `}>
            <Container className={styles.contactWapper}>
                <Row>
                    <Col>
                        <div className={styles.footerInfo}>
                            <div className={styles.itemInfo}>
                                <div className={styles.infoName}> <PhoneIcon /> PHONE</div>
                                <div className={styles.value}>
                                    <a href="tel:8189324117">(818) 932-4117</a>
                                </div>
                            </div>
                            <div className={styles.itemInfo}>
                                <div className={styles.infoName}><EmailIcon />Email</div>
                                <div className={styles.value}>
                                    <a href="mailto:nohoflooring@gmail.com">nohoflooring@gmail.com</a>
                                </div>
                            </div>
                            <div className={styles.itemInfo}>
                                <div className={styles.infoName}><LocationIcon />Address</div>
                                <div className={styles.value}>
                                    <a href="#">North Hollywood, CA 91606</a>
                                </div>
                            </div>
                            <div className={styles.itemInfo}>
                                <div className={styles.infoName}><TimingIcon />Opening Hours</div>
                                <div className={styles.value}>
                                    Mon to Sat: 9.00am - 8.30pm<br />
                                    Sun: Closed
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className={styles.copyrightSection}>
                    <Col md={12} lg={6} className="m-auto">
                        <div className={styles.copyRightSec}>
                            <p>Copyright © 2025 NO-HO Flooring And Construction Service, all rights reserved.<br />
                                North Hollywood, CA 91606 (818) 932-4117</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Footer;
