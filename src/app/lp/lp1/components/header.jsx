"use client";
import { useState, useEffect } from "react";
import styles from "@/styles/lp/lp1/header.module.scss";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { ContactArrow, FbIcon, InsaIcon, MainLogo, PhoneIcon } from "@/src/app/app-constants";
import PopUp from '@/src/app/lp/lp1/components/popup';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [hasOpened, setHasOpened] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);

            if (window.scrollY >= 1500 && !hasOpened) {
                setModalShow(true);
                setHasOpened(true);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [hasOpened]);

    const handleChatOpen = () => {
        setModalShow(true);
    };

    return (
        <section className={`${styles.headerSection} ${isScrolled ? styles.fixed : ""}`}>
            <Container className={styles.topHeader}>
                <Row className="h-100">
                    <Col className="my-auto">
                        <p>
                            Email : <Link href="#">nohoflooring@gmail.com</Link>
                        </p>
                    </Col>
                    <Col className={`${styles.rightTxt} my-auto`}>
                        <p>
                            Follow Us :{" "}
                            <Link href="https://www.facebook.com/people/Noho-Flooring-Construction-Services/100027208581024/">
                                <FbIcon />
                            </Link>{" "}
                            <Link href="https://www.instagram.com/nohoflooring/">
                                <InsaIcon />
                            </Link>
                        </p>
                    </Col>
                </Row>
            </Container>

            <Container className={styles.headerContainer}>
                <Row className="h-100">
                    <Col xs={6} md={6} className="my-auto">
                        <div className={styles.mainLogo}>
                            <MainLogo />
                        </div>
                    </Col>
                    <Col xs={6} md={6} className="my-auto">
                        <div className={styles.btnHeader}>
                            <a href="tel:8189324117"> <PhoneIcon /> Call: (818) 932-4117</a>
                            <Link href="#" onClick={handleChatOpen}><ContactArrow /> Get a Qoute</Link>
                        </div>
                    </Col>
                </Row>
            </Container>

            <PopUp show={modalShow} onHide={() => setModalShow(false)} />
        </section>
    );
};

export default Header;
