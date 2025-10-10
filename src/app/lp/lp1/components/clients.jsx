
"use client";
import styles from "@/styles/lp/lp1/clients.module.scss"
import { Col, Container, Row } from "react-bootstrap";
import useEmblaCarousel from 'embla-carousel-react'
import Image from "next/image";

import IMG01 from "media/images/clients/1.webp"
import IMG02 from "media/images/clients/2.webp"
import IMG03 from "media/images/clients/3.webp"
import IMG04 from "media/images/clients/4.webp"
import IMG05 from "media/images/clients/5.webp"
import IMG06 from "media/images/clients/6.webp"

const data = [
    {
        name: "Vanessa M.",
        txt: "I had old oak floors that looked dull and scratched. The Noho team did a full hardwood flooring refinishing, and it completely transformed the space. No dust, no delays — just beautiful results. They gave me a clear breakdown of the price to refinish wood floors, and everything stayed on budget.",
        job: "Pasadena, CA",
        pic: IMG01.src
    },
    {
        name: "Jason R.",
        txt: "I was comparing laminate flooring installation cost across a few companies, and Noho Flooring was the most responsive and transparent. The team handled applying laminate flooring in two bedrooms and the hallway, and it looks amazing. No hidden fees, and the install was done in a single day.",
        job: "Encino, CA",
        pic: IMG02.src
    },
    {
        name: "Linda T.",
        txt: "We needed durable floors for our rental unit and went with vinyl plank flooring installation. The team helped us choose the right style and handled the job from start to finish with zero issues. For anyone Googling flooring companies near me this is the one.",
        job: "North Hollywood, CA",
        pic: IMG04.src
    },
    {
        name: "Marcus G.",
        txt: "I called about hardwood floor staining, but they also walked me through options for wood floor refinishing. They explained the difference in finish, maintenance, and cost, and helped me make the right choice for my space. The result? Smooth, rich floors that feel brand new.",
        job: "Burbank, CA",
        pic: IMG01.src
    },
    {
        name: "Emily S.",
        txt: "I was nervous about the cost per sq ft to install laminate flooring, but these guys made it easy. The quote was fair, and the quality exceeded expectations. From prep to cleanup, the crew was on time, respectful, and super clean. Highly recommended for any floor installation near me.",
        job: "Sherman Oaks, CA",
        pic: IMG05.src
    },
]

const Clients = () => {
    const [emblaRef] = useEmblaCarousel({ align: 'start' })
    return (
        <section className={`${styles.clientsSection} p-100 borderRadiusTop`}>
            <Container>
                <Row>
                    <Col md={12} lg={8}>
                        <div className="subtitle">Testimonials</div>
                        <h2>Real Reviews. Real Floors. Real Results in Residential & Commercial Flooring.</h2>
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