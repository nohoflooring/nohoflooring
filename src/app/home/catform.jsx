"use client";
import { useState } from "react";
import styles from "@/styles/home/ctafrom.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import BgImg from "media/images/home/ctaImage01.webp"
import Link from "next/link";
import { useRouter } from "next/navigation";

const CatFrom = ({ data, abt }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = new FormData(e.target);
        const ressult = Object.fromEntries(form.entries());

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify(ressult),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (res.ok) {
                e.target.reset();
                router.push("/thank-you");
            } else {
                console.error("Submission failed.");
            }
        } catch (error) {
            console.error("Something went wrong:", error);
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <section className={`${styles.ctaFromSection} ${styles.abtStyle}`}>
            <Container className={styles.ctaFromContainer} style={{ backgroundImage: `url(${BgImg.src})` }}>
                <Row className="h-100">
                    <Col>
                        <div className={styles.ctaFromBox}>
                            <div className={styles.ctaFromItem}>
                                <h2>{data.title}</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className={styles.fromBox}>
                                        <div className={styles.fieldItem}>
                                            <input type="text" name="name" placeholder="First Name" required />
                                        </div>
                                        <div className={styles.fieldItem}>
                                            <input type="email" name="email" placeholder="Your Email" required />
                                        </div>
                                        <div className={styles.fieldItem}>
                                            <input type="tel" name="phone" placeholder="Your Phone" required />
                                        </div>
                                        <div className={styles.fieldItem}>
                                            <input type="text" name="type" placeholder="Service Required" required />
                                        </div>
                                        <div className={styles.fieldItem}>
                                            <input type="checkbox" name="checked" required />
                                            <p>By signing up, you agree to our <Link href="#">Terms of Service.</Link> and <Link href="#">Privacy Policy.</Link></p>
                                        </div>
                                        <div className={styles.fieldItem}>
                                            <button type="submit" disabled={isSubmitting}>
                                                {isSubmitting ? "Submitting..." : "Submit Now"}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className={styles.ctaFromItem}>
                                <p>{data.txt}</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CatFrom