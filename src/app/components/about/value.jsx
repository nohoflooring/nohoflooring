import styles from "@/styles/about-us/value.module.scss";
import { Col, Container, Row } from "react-bootstrap";

const Value = ({ data }) => {
    return (
        <section className={styles.valueSection}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={12} lg={7} className="my-auto">
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.valueWapper}>
                            {data.valueItem.map((item, index) => (
                                <div className={styles.valueItem} key={index}>
                                    <div className={styles.valueTit}>
                                        <h5>{item.tit}</h5>
                                    </div>
                                    <div className={styles.valueTxt}>
                                        <p>{item.txt}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Value