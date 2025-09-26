import styles from "@/styles/components/services/contentsec.module.scss";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import ScrollBtn from "@/src/app/components/scrollbtn";
import BgImg2 from "media/lp/Image01.webp"

const ContentSec = () => {
    return (
        <section className={`${styles.contentSection} pb-100`}>
            <Container>
                <Row>
                    <Col md={12} lg={6} className="my-auto">
                        <div className="subtitle">Breathe Easy With Dust-Free Refinishing</div>
                        <h2>Cleaner Floors. Healthier Homes. Better Results.</h2>
                        <p>Traditional sanding leaves dust everywhere — but we do it differently. Our dustless hardwood floor refinishing system captures nearly all airborne particles before they spread, keeping your home spotless and your air clean. Looking for wood floor refinishing or wondering about hardwood floor installation cost? We’ll give you clear answers and deliver results you’ll love, minus the cleanup stress.</p>
                        <div className="flexStyleBtn blackBG">
                            <div className="btnItem">
                                <ScrollBtn txt="Get a Free Estimate" />
                            </div>
                            <div className="btnItem">
                                <a href="tel:8189324117">Call Now</a>
                            </div>
                        </div>
                    </Col>
                    <Col md={12} lg={6} className="my-auto">
                        <div className={styles.boxImage}>
                            <Image src={BgImg2.src} alt="Cleaner Floors. Healthier Homes. Better Results." fill />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ContentSec