"use client";
import { useState } from "react";
import styles from "@/styles/home/contact.module.scss";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import BgImg from "media/images/home/footer.webp"
import { useRouter } from "next/navigation";
import { Element } from "react-scroll";

const Contact = ({ contact, data, lp }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = new FormData(e.target);
        const result = Object.fromEntries(form.entries());


        result.privacycheck = form.get("privacycheck") ? "Yes" : "No";


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
        <Element name="contactSection">
            <section className={`${styles.contactSection} ${contact ? styles.contactPage : ""} borderRadiusTop`} id="Contact">
                <Container className={styles.contactWapper} style={{ backgroundImage: `url(${BgImg.src})` }}>
                    <Row>
                        <Col md={12} lg={6}>
                            <div className="subtitle">Contact Us</div>
                            <h2>{data?.title ? data.title : "The Ultimate Floor Upgrade Awaits"}</h2>
                            <p>{data?.txt ? data.txt : "Submit your info for a free, custom estimate!"}</p>

                            <form className={styles.contactFrom} onSubmit={handleSubmit}>
                                <div className={styles.inputBox}>
                                    <input type="text" name="name" placeholder="Your Name" required />
                                </div>
                                <div className={styles.inputBox}>
                                    <input type="email" name="email" placeholder="Your Email" required />
                                </div>
                                <div className={styles.inputBox}>
                                    <input type="tel" name="phone" placeholder="Your Phone" required />
                                </div>
                                <div className={styles.inputBox}>
                                    <select name="type" defaultValue="" required>
                                        {lp ? (
                                            <>
                                                <option value="" disabled>Select Your Area</option>
                                                <option value="SQ FT">SQ FT</option>
                                                <option value="Minimum 200">Minimum 200</option>
                                                <option value="Max 2000+">Max 2000+</option>
                                            </>
                                        ) : (
                                            <>
                                                <option value="" disabled>Select Service Type</option>
                                                <option value="Floor Refinishing">Floor Refinishing</option>
                                                <option value="Floor Installation">Floor Installation</option>
                                                <option value="Hardwood Flooring">Hardwood Flooring</option>
                                                <option value="Vinyl & Laminate Flooring">Vinyl & Laminate Flooring</option>
                                            </>
                                        )}
                                    </select>

                                </div>
                                <div className={styles.inputBox}>
                                    <textarea name="msg" placeholder="Your Message" required></textarea>
                                </div>
                                <div className={styles.inputBox}>
                                    <p>
                                        <input type="checkbox" name="privacycheck" required /> By signing up, you agree to our <Link href="#">Terms of Service</Link> and <Link href="#">Privacy Policy</Link>.
                                    </p>
                                </div>
                                <div className={styles.inputBox}>
                                    <button type="submit" disabled={isSubmitting}>
                                        {isSubmitting ? "Submitting..." : "Talk to Us Now"}
                                    </button>
                                </div>
                            </form>
                        </Col>

                    </Row>
                </Container>
            </section>
        </Element>
    );
};

export default Contact;
