

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/styles/lp/lp1/contactfrom.module.scss";


const ContactFrom = ({ popup, title, txt }) => {
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
        <div className={`${styles.bannerFrom} ${popup ? styles.popupForm : ""}`}>
            <h4>{title ? title : "Your Free Flooring Estimate Awaits"}</h4>
            <p>{txt ? txt : "Looking for expert vinyl plank flooring installation, reliable hardwood flooring refinishing, or just comparing hardwood floor installation cost? You’re in the right place."} </p>
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
                        <option value="" disabled>Select Your Area</option>
                        <option value="SQ FT">SQ FT</option>
                        <option value="Minimum 200">Minimum 200</option>
                        <option value="Max 2000+">Max 2000+</option>

                    </select>
                </div>
                <div className={styles.inputBox}>
                    <textarea name="msg" placeholder="Your Message" required></textarea>
                </div>
                <div className={styles.inputBox}>
                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Talk to Us Now"}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ContactFrom