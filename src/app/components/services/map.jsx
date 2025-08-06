import styles from "@/styles/components/services/map.module.scss";
import { Col, Container, Row } from "react-bootstrap";

const Map = () => {
    return (
        <section className={`${styles.mapSection}`}>
            <Container>
                <Row>
                    <Col md={12}>
                        <h2>Service Area</h2>
                        <ul className={styles.serviceAreaList}>
                            <li>Sherman Oaks</li>
                            <li>Woodland Hills</li>
                            <li>Long Beach</li>
                            <li>Merina Deal Ray</li>
                            <li>Calabasas</li>
                            <li>Culver City</li>
                            <li>Beverly Hills </li>
                            <li>Glendale</li>
                            <li>Burbank</li>
                            <li>West Hollywood</li>
                            <li>Torrance</li>
                            <li>Carson</li>
                            <li>Irvine</li>
                            <li>Huntington Beach</li>
                            <li>Thousand Oaks</li>
                            <li>Altadena</li>
                            <li>Diamond Bar</li>
                            <li>Chatsworth</li>
                        </ul>
                        <div className={styles.mapWrapper}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317238.047766918!2d-120.12338754999998!3d35.714159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c297b35adae779%3A0x31b0f48fbaee6b9d!2sNO-HO%20Flooring%20And%20Construction%20Service!5e0!3m2!1sen!2sus!4v1754400279127!5m2!1sen!2sus"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Map