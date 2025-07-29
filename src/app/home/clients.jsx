
"use client";
import styles from "@/styles/home/clients.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import IMG01 from "media/images/clients/1.webp"
import IMG02 from "media/images/clients/2.webp"
import IMG03 from "media/images/clients/3.webp"
import useEmblaCarousel from 'embla-carousel-react'
import Image from "next/image";

const data = [
    {
        name: "Rachel M.",
        txt: "We had No Ho Flooring install vinyl plank throughout our condo. From the first call to the final polish, they were clear, responsive, and super professional. The crew showed up on time and left the place spotless. Highly recommend!",
        job: "Studio City",
        pic: IMG01.src
    },
    {
        name: "David K.",
        txt: "I called around a few places, and No Ho was the only one that gave me a detailed, written quote upfront. No hidden costs. The work on my hardwood stairs was clean, precise, and done right the first time.",
        job: "Burbank",
        pic: IMG02.src
    },
    {
        name: "Samantha L.",
        txt: "I needed new floors fast before moving in. They handled the consultation, materials, and install in less than a week. The laminate looks amazing and feels solid. I’ll be calling them again for tile work in the kitchen.",
        job: "North Hollywood",
        pic: IMG03.src
    },
    {
        name: "Carlos R.",
        txt: "They didn’t just try to sell me the most expensive option — they listened to what I wanted, showed samples, and explained what works best for pets and moisture. Super helpful team, and I love the floors we picked together.",
        job: "Valley Village",
        pic: IMG01.src
    },
    {
        name: "Linda S.",
        txt: "As a landlord, I’ve worked with a few flooring companies, and No Ho Flooring is the most reliable by far. They take care of business: proper contracts, licenses, cleanup, and quality finish. No drama.",
        job: "Sherman Oaks",
        pic: IMG02.src
    },
    {
        name: "Justin H.",
        txt: "This was my first home renovation and I was nervous, but these guys walked me through everything. They were patient with my questions and gave honest advice. The new engineered wood floors completely transformed the space.",
        job: "Toluca Lake",
        pic: IMG03.src
    },
]

const Clients = () => {
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
                                                    <Image src={item.pic} alt={item.name} fill />
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