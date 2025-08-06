"use client";
import { useState } from "react";
import styles from "@/styles/components/services/contactfrom.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ContactFrom = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = new FormData(e.target);
        const rawResult = Object.fromEntries(form.entries());

        // Trim all input values
        const result = {};
        for (const [key, value] of Object.entries(rawResult)) {
            result[key] = value.trim();
        }

        result.checked = isChecked ? "Yes" : "No"; // for Google Sheet
        result.installation = result.checked;       // match sheet column

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify(result),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (res.ok) {
                e.target.reset();
                setIsChecked(false);
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
        <section className={`${styles.contactFromSec} p-100`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={12} lg={7}>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.contactFromBox}>
                                <div className={styles.contactFromDiv}>
                                    <input type="text" name="name" placeholder="Your Name" required />
                                </div>
                                <div className={styles.contactFromDiv}>
                                    <input type="tel" name="phone" placeholder="Phone Number" required />
                                </div>
                                <div className={styles.contactFromDiv}>
                                    <input type="email" name="email" placeholder="Your Email" required />
                                </div>
                                <div className={styles.contactFromDiv}>
                                    <h5>Estimate Your Flooring Cost Instantly.</h5>
                                </div>
                                <div className={styles.contactFromDiv}>
                                    <input type="text" name="type" placeholder="Choose Flooring Type" required />
                                </div>
                                <div className={styles.contactFromDiv}>
                                    <input type="text" name="quality" placeholder="Flooring Quality / Grade" required />
                                </div>
                                <div className={styles.contactFromDiv}>
                                    <input type="text" name="szie" placeholder="Room Size" required />
                                </div>
                                <div className={styles.contactFromDiv}>
                                    <input type="text" name="extra" placeholder="Add Extras" required />
                                </div>
                                <div className={styles.contactFromCheckDiv}>
                                    <h5>Installation Required?</h5>
                                    <div className={styles.contactFromSwitchDiv}>
                                        <div className={`${styles.contactFromTitle} ${!isChecked ? styles.active : ''}`}>No</div>
                                        <div className={`${styles.contactFromSwitch} form-check form-switch`}>
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                role="switch"
                                                id="switchCheck"
                                                checked={isChecked}
                                                onChange={() => setIsChecked(!isChecked)}
                                            />
                                        </div>
                                        <div className={`${styles.contactFromTitle} ${isChecked ? styles.active : ''}`}>Yes</div>
                                    </div>
                                </div>
                                <div className={`${styles.contactFromDiv} mb-0`}>
                                    <button type="submit" disabled={isSubmitting}>
                                        {isSubmitting ? "Submitting..." : "Get Quote"}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </Col>
                    <Col md={12} lg={5}>
                        <div className={styles.contactFromSidebar}>
                            <h3>Estimate Your Flooring Cost Instantly.</h3>
                            <p>Subheading: Get a quick idea of how much your flooring project will cost no signup required!</p>
                            <div className={styles.contactFromLink}>
                                <Link href="/contact-us">Get a Free Estimate</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ContactFrom;
