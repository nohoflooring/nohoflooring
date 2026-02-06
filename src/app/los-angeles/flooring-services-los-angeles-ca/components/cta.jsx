import styles from "@/styles/burbank/cta.module.scss"
import { Col, Container, Row } from "react-bootstrap";
import TwoButton from "@/src/app/burbank/flooring-services-burbank-ca/components/twobutton";


const Cta = ({ data }) => {
    return (
        <section className={`${styles.ctaBanner} `}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={10} lg={8} className="m-auto text-center">
                        {data.title}
                        {data.txt}
                        <TwoButton />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Cta