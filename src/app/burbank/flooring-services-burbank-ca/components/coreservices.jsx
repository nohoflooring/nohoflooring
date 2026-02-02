import styles from "@/styles/burbank/coreservices.module.scss"
import { Col, Container, Row } from "react-bootstrap";


const CoreServices = ({ data }) => {
    return (
        <section className={`${styles.coreServices} borderRadiusBottom p-50`}>
            <Container >
                <Row >
                    <Col md={12}>
                        {data.title}
                        {data.txt}
                        <div className={styles.coreWapper}>
                            {data.costItem.map((item, index) => (
                                <div className={styles.coreItem} key={index}>
                                    <h6>{item.tit}</h6>
                                    {item.txt}
                                </div>
                            ))}
                        </div>
                        {data.txt1}
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default CoreServices