import styles from "@/styles/components/services/contentsec.module.scss";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

const ContentSec = ({ data, alternet }) => {
    return (
        <section className={`${styles.contentSection} `}>
            <Container>
                <Row>
                    <Col md={12} lg={6} className={alternet ? "my-auto order-lg-2 ps-md-0 ps-lg-3 ps-xl-5" : "my-auto"}>
                        <h2>{data.title}</h2>
                        {data.txt}
                    </Col>
                    <Col md={12} lg={6} className={alternet ? "my-auto order-lg-1" : "my-auto"}>
                        <div className={styles.boxImage}>
                            <Image src={data.img} alt={data.title} fill />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ContentSec