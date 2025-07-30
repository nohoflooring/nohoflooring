import styles from "@/styles/home/banner.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import BgImg from "media/images/home/bannerImage.webp"
import ScrollBtn from "@/src/app/components/scrollbtn";
const Banner = () => {
    return (
        <section
            className={`${styles.bannerSection} borderRadiusBottom`}
            style={{ backgroundImage: `url(${BgImg.src})` }}
        >
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={10} lg={8} className="my-auto">
                        <h1>Expert Flooring Services in North Hollywood</h1>
                        <p>From timeless hardwood to durable vinyl, we install, restore, and refinish every flooring type to perfection.</p>
                        <div className="flexStyleBtn">
                            <div className="btnItem">
                                <ScrollBtn txt="Get a Free Estimate" />
                            </div>
                            <div className="btnItem">
                                <a href="tel:8182598807">Call Now</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default Banner