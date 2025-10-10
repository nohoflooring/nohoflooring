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
                        <div className="subtitle">Breathe Clean. Restore Better. Pay Less.</div>
                        <h2>Dust-Free Wood Floor Refinishing That Delivers More Than Just Looks</h2>
                        <p>From refinishing wood floors to applying laminate flooring and vinyl plank installation, we do it all with expert care. Need fast answers on the price to refinish wood floors or cost per sq ft to install laminate flooring? Looking for a trusted floor installation near me? We’re a top-rated choice for residential and commercial flooring near me across Los Angeles.</p>
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
                            <Image src={BgImg2.src} alt="Dust-Free Wood Floor Refinishing That Delivers More Than Just Looks" fill sizes="(max-width: 768px) 100vw, 50vw" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ContentSec