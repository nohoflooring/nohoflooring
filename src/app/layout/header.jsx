"use client";
import { useState, useEffect } from "react";
import styles from "@/styles/layout/header.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { ClosedIcon, FbIcon, InsaIcon, MainLogo, NavIcon } from "@/src/app/app-constants";
import Link from "next/link";
import { usePathname } from "next/navigation"

const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const isSlugPage = /^\/[^/]+$/.test(pathname)
        && pathname !== "/"
        && pathname !== "/contact-us"
        && pathname !== "/about-us"
        && pathname !== "/blogs"
        && pathname !== "/thank-you"
        && pathname !== "/services"
        && pathname !== "/our-work"
        && pathname !== "/commercial-engineered-flooring-in-north-hollywood-ca"
        && pathname !== "/floor-refinishing-services-in-north-hollywood-ca"
        && pathname !== "/hardwood-floor-refinishing-in-north-hollywood-ca"
        && pathname !== "/hardwood-floor-replacements-in-north-hollywood-ca"
        && pathname !== "/laminate-flooring-installation-services-in-north-hollywood"
        && pathname !== "/residential-engineered-flooring-in-north-hollywood-ca"
        && pathname !== "/tile-flooring-installations-in-north-hollywood-ca"
        && pathname !== "/tile-flooring-replacements-in-north-hollywood-ca"
        && pathname !== "/vinyl-plank-flooring-installation-in-north-hollywood-ca"


    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 767) {
                setIsActive(false);
                document.body.classList.remove("active");
            }
        };

        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleClick = () => {
        if (window.innerWidth < 767) {
            const newState = !isActive;
            setIsActive(newState);
            document.body.classList.toggle("active", newState);
        }
    };
    return (
        <section
            className={`${styles.headerSection} ${isScrolled ? styles.fixed : ""} ${isSlugPage ? styles.slugPageHeader : ""}`}>
            <Container className={`${styles.topHeader}`}>
                <Row className="h-100">
                    <Col className="my-auto">
                        <p>Email :  <Link href="#">nohoflooring@gmail.com</Link></p>
                    </Col>
                    <Col className={`${styles.rightTxt} my-auto`}>
                        <p>Follow Us :  <Link href="https://www.facebook.com/people/Noho-Flooring-Construction-Services/100027208581024/"><FbIcon /></Link> <Link href="https://www.instagram.com/nohoflooring/"><InsaIcon /></Link></p>
                    </Col>
                </Row>
            </Container>
            <Container className={`${styles.headerContainer}`}>
                <Row className="h-100">
                    <Col xs={6} md={3} className="my-auto">
                        <div className={styles.mainLogo}>
                            <Link href="/">
                                <MainLogo />
                            </Link>
                        </div>
                    </Col>
                    <Col xs={6} md={9} className="my-auto">
                        <div
                            onClick={handleClick}
                            className={`${isActive ? "navIcon active" : "navIcon"}`}
                        >
                            {isActive ? <ClosedIcon /> : <NavIcon />}
                        </div>
                        <ul className={`${styles.headerNavigation} ${isActive ? styles.active : ""}`}>
                            <li><Link href="/" onClick={handleClick}>Home</Link></li>
                            <li><Link href="/about-us" onClick={handleClick}>About Us</Link></li>
                            <li><Link href="/services" onClick={handleClick}>Services</Link></li>
                            <li><Link href="/our-work" onClick={handleClick}>Work</Link></li>
                            <li><Link href="/blogs" onClick={handleClick}>Blogs</Link></li>
                            <li><Link href="/contact-us" onClick={handleClick}>Contact Us </Link></li>
                            <li><Link href="tel:8182598807">Call: (818) 259-8807</Link></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default Header