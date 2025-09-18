
import styles from "@/styles/lp/lp1/banner.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import BgImg from "media/lp/bannnerImg.webp"
import ScrollBtn from "@/src/app/components/scrollbtn";
import ContactFrom from "@/src/app/lp/lp1/components/contactfrom";


const Banner = () => {

    return (
        <section
            className={`${styles.bannerSection} borderRadiusBottom`}
            style={{ backgroundImage: `url(${BgImg.src})` }}
        >
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={12} lg={7} className="my-auto">
                        <h1>Professional Flooring Services You Can Rely On</h1>
                        <p>Upgrade your space with expert-installed flooring that’s built to last. From vinyl plank flooring installation to hardwood flooring refinishing, our team delivers flawless finishes, modern designs, and unmatched comfort.</p>
                        <div className="flexStyleBtn">
                            <div className="btnItem">
                                <ScrollBtn txt="Get a Free Estimate" />
                            </div>
                            <div className="btnItem">
                                <a href="tel:8182598807">Call Now</a>
                            </div>
                        </div>
                    </Col>
                    <Col md={12} lg={5} className="my-auto">
                        <ContactFrom />
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default Banner