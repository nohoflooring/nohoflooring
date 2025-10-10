"use client";
import styles from "@/styles/lp/lp1/bannerimg.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

import img01 from "media/lp/gallery/1.webp";
import img02 from "media/lp/gallery/2.webp";
import img03 from "media/lp/gallery/3.webp";

import Autoplay from 'embla-carousel-autoplay'
import { LinkArrowIcon } from "@/src/app/app-constants";


const data = [
    { image: img01 },
    { image: img02 },
    { image: img03 },
];
const options = { loop: true, align: "start" };
const BannerImages = () => {
    const [emblaRef, embla] = useEmblaCarousel(options, [Autoplay()]);
    const prevButtonHandler = () => {
        if (embla) embla.scrollPrev();
    };

    const nextButtonHandler = () => {
        if (embla) embla.scrollNext();
    };
    return (
        <section className={`${styles.bannerImageSec} p-100 borderRadiusBottom`}>
            <Container>
                <Row className="align-items-center">
                    <Col md={10} lg={10}>
                        <div className="subtitle">Our Work Speaks for Itself</div>
                        <h2>Before & After: See Why Homeowners Trust Us for Residential Flooring, Refinishing & Installs</h2>
                        <p>Thinking about applying laminate flooring, restoring old hardwood, or upgrading with vinyl plank flooring installation? These real before-and-after shots show what expert work really looks like — clean lines, flawless finishes, and long-term value. Serving homeowners and businesses looking for commercial flooring near me or hardwood floor refinishing near me with consistent, clean results.</p>
                    </Col>
                    <Col md={2} lg={2}>
                        <div className={styles.embla_container}>
                            <div className={styles.embla_prev} onClick={prevButtonHandler}>
                                <LinkArrowIcon direction="prev" />
                            </div>
                            <div className={styles.embla_next} onClick={nextButtonHandler}>
                                <LinkArrowIcon direction="next" />
                            </div>
                        </div>
                    </Col>
                    <Col md={12} lg={12}>
                        <div className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {data.map((item, index) => (
                                        <div className={styles.embla__slide} key={index}>
                                            <div className={styles.ImageItem}>
                                                <Image src={item.image} alt={`Result ${index + 1}`} fill sizes="(max-width: 768px) 100vw, 50vw" />
                                                <div className={styles.after}>After</div>
                                                <div className={styles.before}>Before</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default BannerImages;
