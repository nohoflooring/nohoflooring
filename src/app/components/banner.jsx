import styles from "@/styles/contact/contentpage.module.scss";
import { Col, Container, Row } from "react-bootstrap";

const Banner = ({ data }) => {
    return (
        <section className={`${styles.contactBanner} borderRadiusBottom`} style={{ backgroundImage: `url(${data.BannerPoster})` }}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={12} className="my-auto text-center">
                        <h1>{data.title}</h1>
                        <span>{data.pageTxt}</span>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner