import styles from "@/styles/home/contact.module.scss";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import BgImg from "media/images/home/footer.webp"

const Contact = () => {
    return (
        <section className={`${styles.contactSection} borderRadiusTop`}>
            <Container className={styles.contactWapper} style={{ backgroundImage: `url(${BgImg.src})` }}>
                <Row>
                    <Col md={12} lg={6}>
                        <div className="subtitle">Contact Us</div>
                        <h2>The Ultimate Floor Upgrade Awaits</h2>
                        <p>Submit your info for a free, custom estimate!</p>

                        <div className={styles.contactFrom}>
                            <div className={styles.inputBox}>
                                <input type="text" name="name" placeholder="Your Name" required />
                            </div>
                            <div className={styles.inputBox}>
                                <input type="email" name="email" placeholder="Your Email" required />
                            </div>
                            <div className={styles.inputBox}>
                                <input type="tel" name="phone" placeholder="Your Phone" required />
                            </div>
                            <div className={styles.inputBox}>
                                <select name="type" defaultValue="" required>
                                    <option value="" disabled>Select Service Type</option>
                                    <option value="refinishing">Floor Refinishing</option>
                                    <option value="installation">Floor Installation</option>
                                    <option value="hardwood">Hardwood Flooring</option>
                                    <option value="vinyl">Vinyl & Laminate Flooring</option>
                                </select>
                            </div>
                            <div className={styles.inputBox}>
                                <textarea name="msg" placeholder="Your Message" required></textarea>
                            </div>
                            {/* <div className={styles.inputBox}>
                                <label>
                                    <input type="checkbox" name="checkbox" required /> By signing up, you agree to our <Link href="#">Terms of Service</Link> and <Link href="#">Privacy Policy</Link>.
                                </label>
                            </div> */}
                            <div className={styles.inputBox}>
                                <button type="submit">Talk to Us Now</button>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    );
};

export default Contact;
