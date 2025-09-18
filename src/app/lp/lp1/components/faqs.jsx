"use client"
import { useState } from "react";
import styles from "@/styles/home/faqs.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { PlusIcon } from "@/src/app/app-constants";

const data = [
    {
        title: "Is vinyl plank flooring a good choice for high-traffic areas?",
        txt: "Yes! Vinyl plank flooring is highly durable, water-resistant, and easy to maintain—making it a smart choice for busy households and commercial spaces.",
    },
    {
        title: "Do you offer waterproof vinyl flooring installation?",
        txt: "Absolutely. Our professional flooring services include the installation of waterproof vinyl flooring that resists spills, moisture, and wear.",
    },
    {
        title:
            "Can you install wide plank flooring in small rooms?",
        txt: "Yes. Wide plank flooring can actually make small rooms appear larger and more open, depending on the layout and lighting.",
    },
    {
        title: "Do you offer floor installation for tile flooring?",
        txt: "Yes, we provide expert floor installation for tile flooring, including ceramic, porcelain, and concrete look flooring options.",
    },
    {
        title: "What’s the best flooring for a rustic look?",
        txt: "Distressed wood flooring and rigid vinyl plank are both excellent options to achieve a warm, rustic aesthetic without compromising on durability.",
    },
    {
        title: "Do you provide wood floor restoration and refinishing services?",
        txt: "Yes, we specialize in wood floor restoration, floor repair and refinishing, and hardwood floor refinishing to bring your old floors back to life.",
    },
    {
        title: "Do you service the North Hollywood area?",
        txt: "Absolutely. We proudly offer full flooring services in North Hollywood, including installation, restoration, and refinishing for residential and commercial properties.",
    },
    {
        title: "How long does a typical flooring installation take?",
        txt: "Most flooring installation projects are completed within 1–3 days, depending on the material (like tile, laminate, or vinyl plank flooring) and square footage.",
    },
    {
        title: "What makes Noho Flooring different from other flooring companies in Los Angeles?",
        txt: "As a leading flooring company Los Angeles trusts, we combine high-quality materials, expert craftsmanship, and local experience to deliver exceptional results every time.",
    },
];



const Faqs = () => {
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