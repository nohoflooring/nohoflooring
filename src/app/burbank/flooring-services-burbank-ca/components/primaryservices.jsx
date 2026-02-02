import styles from "@/styles/burbank/primaryservices.module.scss"
import { Col, Container, Row } from "react-bootstrap";


const PrimaryServices = ({ data }) => {
    return (
        <section className={`${styles.primaryServices} borderRadiusBottom p-50`}>
            <Container >
                <Row >
                    <Col md={12}>
                        {data.title}
                        {data.txt}
                        <div className={styles.primaryWapper}>
                            {data.primaryItem.map((item, index) => (
                                <div className={styles.primaryItem} key={index}>
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

export default PrimaryServices