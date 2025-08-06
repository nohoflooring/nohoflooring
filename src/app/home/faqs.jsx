"use client"
import { useState } from "react";
import styles from "@/styles/home/faqs.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { PlusIcon } from "@/src/app/app-constants";



const Faqs = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <section className={`${styles.faqsSection} p-100 borderRadiusBottom`}>
            <Container>
                <Row>
                    <Col md={6} lg={5} >
                        <div className="subtitle">FAQs</div>
                        <h2>Frequently Asked Questions</h2>
                    </Col>
                    <Col md={6} lg={7}>

                        {data.map((items, index) => (
                            <div className={`${styles.faqsBox} ${activeIndex === index ? styles.active : ""}`} key={index}>
                                <div
                                    className={styles.faqsTitle}
                                    onClick={() => toggleFaq(index)}
                                >
                                    {items.title}
                                    <div className={`${styles.iconBox} ${activeIndex === index ? styles.active : ""}`}>
                                        <PlusIcon />
                                    </div>
                                </div>
                                <div className={styles.faqscontent}>
                                    {items.txt}
                                </div>
                            </div>
                        ))}

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Faqs