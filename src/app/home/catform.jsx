import styles from "@/styles/home/ctafrom.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import BgImg from "media/images/home/ctaImage01.webp"
import Link from "next/link";


const CatFrom = () => {
    return (
        <section className={styles.ctaFromSection}>
            <Container className={styles.ctaFromContainer} style={{ backgroundImage: `url(${BgImg.src})` }}>
                <Row className="h-100">
                    <Col>
                        <div className={styles.ctaFromBox}>
                            <div className={styles.ctaFromItem}>
                                <h2>Get a Free Estimate</h2>
                                <form >
                                    <div className={styles.fromBox}>
                                        <div className={styles.fieldItem}>
                                            <input type="text" name="name" placeholder="First Name" required />
                                        </div>
                                        <div className={styles.fieldItem}>
                                            <input type="email" name="email" placeholder="Your Email" required />
                                        </div>
                                        <div className={styles.fieldItem}>
                                            <input type="tel" name="phone" placeholder="Your Phone" required />
                                        </div>
                                        <div className={styles.fieldItem}>
                                            <input type="text" name="services" placeholder="Service Required" required />
                                        </div>
                                        <div className={styles.fieldItem}>
                                            <input type="checkbox" name="checked" />
                                            <p>By signing up, you agree to our <Link href="#">Terms of Service.</Link> and <Link href="#">Privacy Policy.</Link></p>
                                        </div>
                                        <div className={styles.fieldItem}>
                                            <button type="submit">
                                                Submit Now
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className={styles.ctaFromItem}>
                                <p>Get a free estimate from a trusted flooring contractor in Los Angeles. Whether it’s installation, refinishing, or repairs, Noho Flooring delivers craftsmanship you can stand on.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CatFrom