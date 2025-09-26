import styles from "@/styles/about-us/simpletxt.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import ScrollBtn from "@/src/app/components/scrollbtn";

const SimpleTxt = () => {
    return (
        <section className={`${styles.simpleTxtSection} borderRadiusBottom p-100`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={9} lg={8} xl={7} className="m-auto text-center">
                        <div className="subtitle">About Us</div>
                        <h2>The Right Floor. The Right Team. One Click Away.</h2>
                        <div className="flexStyleBtn blackCenter">
                            <div className="btnItem">
                                <ScrollBtn txt="Get a free consultation" />
                            </div>
                            <div className="btnItem">
                                <a href="tel:8189324117">Call Now</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default SimpleTxt;
