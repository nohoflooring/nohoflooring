
"use client";
import styles from "@/styles/home/clients.module.scss";
import { Col, Container, Row } from "react-bootstrap";

import useEmblaCarousel from 'embla-carousel-react'
import Image from "next/image";


const Clients = ({ data }) => {
    const [emblaRef] = useEmblaCarousel({ align: 'start' })
    return (
        <section className={`${styles.clientsSection} p-100 borderRadiusTop`}>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="subtitle">Testimonials</div>
                        <h2>Ready to Replace Your Old Floors? </h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <section className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {data.map((item, index) => (
                                        <div className={styles.embla__slide} key={index}>
                                            <div className={styles.clientsItem}>
                                                <div className={styles.txt}>{item.txt}</div>
                                                <div className={styles.pic}>
                                                    <Image src={item.pic} alt={item.name} fill sizes="(max-width: 768px) 100vw, 50vw" />
                                                </div>
                                                <div className={styles.name}>{item.name}</div>
                                                <div className={styles.job}>{item.job}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default Clients