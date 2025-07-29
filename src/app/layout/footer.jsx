import styles from "@/styles/layout/footer.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { EmailIcon, LocationIcon, MainLogo, PhoneIcon, TimingIcon } from "@/src/app/app-constants";
import Link from "next/link";


const Footer = () => {
    return (
        <section className={`${styles.footerSection} `}>
            <Container className={styles.contactWapper}>
                <Row>
                    <Col md={12} lg={4}>
                        <div className={styles.MianLogo}>
                            <MainLogo />
                            <p>NO-HO Flooring And Construction Service delivers expert flooring installation and renovation with unmatched craftsmanship.</p>
                        </div>
                    </Col>
                    <Col md={12} lg={6}>
                        <div className={styles.serviceStyle}>
                            <h6>Our Services</h6>
                            <ul>
                                <li><Link href="#">Hardwood floor refinishing</Link></li>
                                <li><Link href="#">Hardwood flooring replacements</Link></li>
                                <li><Link href="#">Residential engineered flooring</Link></li>
                                <li><Link href="#">Commercial engineered flooring</Link></li>
                                <li><Link href="#">Floor refinishing services</Link></li>
                                <li><Link href="#">Vinyl plank flooring installations</Link></li>
                                <li><Link href="#">Laminate flooring installations</Link></li>
                                <li><Link href="#">Tile flooring installations</Link></li>
                                <li><Link href="#">Tile flooring replacements</Link></li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className={`${styles.serviceStyle} ${styles.servicelast}`}>
                            <h6>Quick Links</h6>
                            <ul>
                                <li><Link href="#">Home</Link></li>
                                <li><Link href="#">About Us</Link></li>
                                <li><Link href="#">Blogs</Link></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.footerInfo}>
                            <div className={styles.itemInfo}>
                                <div className={styles.infoName}> <PhoneIcon /> PHONE</div>
                                <div className={styles.value}>
                                    <a href="tel:7473139149">(747) 313-9149</a><br />
                                    <a href="tel:8182598807">(818) 259-8807</a>
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
                    <Col md={12} lg={6}>
                        <ul className={styles.copyRightLinks}>
                            <li><Link href="#">Term & Conditions</Link></li>
                            <li><Link href="#">Privacy Policy</Link></li>
                        </ul>
                    </Col>
                    <Col md={12} lg={6}>
                        <div className={styles.copyRightSec}>
                            <p>Copyright © 2025 NO-HO Flooring And Construction Service, all rights reserved.<br />
                                North Hollywood, CA 91606 (818) 259-8807</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}
export default Footer