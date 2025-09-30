
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
                        <h1>Best Residential and Commercial Flooring Experts Across Los Angeles</h1>
                        <p>Looking to transform your floors without the stress? From applying laminate flooring to vinyl plank flooring installation and full hardwood flooring refinishing, we deliver quality you can feel under your feet — fast, clean, and built for real life.</p>
                        <div className="flexStyleBtn">
                            <div className="btnItem">
                                <ScrollBtn txt="Get a Free Estimate" />
                            </div>
                            <div className="btnItem">
                                <a href="tel:8189324117">Call Now</a>
                            </div>
                        </div>
                    </Col>
                    <Col md={12} lg={5} className="my-auto">
                        <ContactFrom title="Start Your Residential Flooring Project with a Free Estimate" txt="Need laminate flooring, hardwood staining, or a quote for vinyl plank installation? Whether it’s full hardwood refinishing or quick wood floor touch-ups, fill out the form and get a fast, accurate estimate from our local experts." />
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default Banner