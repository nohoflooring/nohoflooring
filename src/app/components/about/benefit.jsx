
import styles from "@/styles/about-us/benefit.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import ScrollBtn from "@/src/app/components/scrollbtn";



const Benefit = ({ data, bg }) => {
    return (
        <section className={`${styles.benefitSection} p-100 ${bg ? `${styles.bgWhite} borderRadiusBottom` : ''}`}>

            <Container className="h-100">
                <Row className="h-100">
                    <Col md={12} lg={6} className="my-auto">
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                    </Col>
                    <Col md={12} lg={6} className="my-auto">
                        <p>{data.txt}</p>
                    </Col>
                    <Col md={12}>
                        <div className={styles.benefitWapper}>
                            {data.benefitItem.map((item, index) => (
                                <div className={styles.benefitItem} key={index}>
                                    <h4>{item.tit}</h4>
                                    {item.txt}
                                </div>
                            ))}
                        </div>
                        <div className="flexStyleBtn blackCenter">
                            <div className="btnItem">
                                <ScrollBtn txt="Get a Free Estimate" />
                            </div>
                            <div className="btnItem">
                                <a href="tel:8189324117">Call Now</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Benefit