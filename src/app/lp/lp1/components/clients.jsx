
"use client";
import styles from "@/styles/home/clients.module.scss";
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
        name: "Maria G.",
        txt: "I’d been comparing the cost per sq ft to install laminate flooring, and Noho Flooring gave me the most honest, detailed estimate. The project came out exactly as promised, and the floors look amazing.",
        job: "Pasadena, CA",
        pic: IMG01.src
    },
    {
        name: "Jonathan P.",
        txt: "We wanted a rustic finish, and their hardwood floor staining service blew us away. The color is rich, durable, and makes the whole house feel brand new.",
        job: "Encino, CA",
        pic: IMG02.src
    },
    {
        name: "Denise R.",
        txt: "I was searching for flooring companies near me and found Noho. They refinished my old oak floors at a fair price to refinish wood floors and made them look like they were just installed yesterday.",
        job: "North Hollywood, CA",
        pic: IMG04.src
    },
    {
        name: "Michael L.",
        txt: "Our office needed commercial flooring near me that could handle heavy foot traffic. The Noho team delivered fast, professional installation, and the space now looks polished and professional.",
        job: "Burbank, CA",
        pic: IMG01.src
    },
    {
        name: "Karen S.",
        txt: "I was nervous about laminate flooring installation cost, but they broke down the numbers and showed me different options based on laminate flooring cost per square foot. Zero pressure, just honest advice — and the end result looks perfect",
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
                    <Col md={6}>
                        <div className="subtitle">Testimonials</div>
                        <h2>Floors That Speak for Themselves</h2>
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