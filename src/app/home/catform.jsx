"use client";
import { useState } from "react";
import styles from "@/styles/home/ctafrom.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import BgImg from "media/images/home/ctaImage01.webp"
import Link from "next/link";
import { useRouter } from "next/navigation";

const CatFrom = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = new FormData(e.target);
        const data = Object.fromEntries(form.entries());

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify(data),
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
        <section className={styles.ctaFromSection}>
            <Container className={styles.ctaFromContainer} style={{ backgroundImage: `url(${BgImg.src})` }}>
                <Row className="h-100">
                    <Col>
                        <div className={styles.ctaFromBox}>
                            <div className={styles.ctaFromItem}>
                                <h2>Get a Free Estimate</h2>
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
                                <p>Get a free estimate from a trusted flooring contractor in Los Angeles. Whether it’s installation, refinishing, or repairs, Noho Flooring delivers craftsmanship you can stand on.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CatFrom