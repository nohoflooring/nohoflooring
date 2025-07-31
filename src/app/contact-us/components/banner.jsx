import styles from "@/styles/contact/contentpage.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import BgImg from "media/images/home/contactBanner.webp"

const Banner = () => {
    return (
        <section className={`${styles.contactBanner} borderRadiusBottom`} style={{ backgroundImage: `url(${BgImg.src})` }}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={12} className="my-auto text-center">
                        <h1>Contact US</h1>
                        <span>Contact US</span>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner