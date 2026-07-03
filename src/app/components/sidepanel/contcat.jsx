"use client";
import { useRouter } from "next/navigation";
import styles from "@/styles/components/sidepanel/contact.module.scss";
import { useState } from "react";
import { ClosedBtn } from "@/src/app/app-constants";
const Contact = ({ onHide }) => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = Object.fromEntries(new FormData(e.target));

        const res = await fetch("/api/contactfrom", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (res.ok) {
            router.push("/thank-you");
            onHide();
        } else {
            alert("Something went wrong.");
            setLoading(false);
        }
    };

    return (
        <div className={styles.contactWapper}>
            <div className={styles.closedBtn} onClick={onHide}><ClosedBtn /></div>
            <h4 className={styles.serviceTitle}>Contact Form</h4>

            <form className={styles.calendarForm} onSubmit={handleSubmit}>
                <input type="text" name="subject" value="Contact request" readOnly />

                <input name="fname" placeholder="First Name" required />
                <input name="lname" placeholder="Last Name" required />
                <input name="email" type="email" placeholder="Email" required />
                <input name="phone" placeholder="Phone" required />
                <input name="address" placeholder="Address" required />
                <input name="specialrequests" placeholder="Special Requests" />
                <select name="servicestype" required defaultValue="">
                    <option value="" disabled>Services Type</option>
                    <option value="Commercial Engineered Flooring">Commercial Engineered Flooring</option>
                    <option value="Hardwood Floor Refinishing">Hardwood Floor Refinishing</option>
                    <option value="Laminate Flooring Installation">Laminate Flooring Installation</option>
                    <option value="Tile Flooring Installation">Tile Flooring Installation</option>
                    <option value="Vinyl Plank Flooring Installation">Vinyl Plank Flooring Installation</option>
                    <option value="Floor Refinishing Services">Floor Refinishing Services</option>
                    <option value="Hardwood Floor Replacements">Hardwood Floor Replacements</option>
                    <option value="Residential Engineered Flooring">Residential Engineered Flooring</option>
                    <option value="Tile Flooring Replacements">Tile Flooring Replacements</option>
                </select>
                <input name="altemail" placeholder="Alt Email" />
                <input name="secondaryemail" placeholder="Secondary Email" />
                <textarea name="msg" placeholder="Message" />

                <button type="submit" disabled={loading}> {loading ? "Processing..." : "Submit"}</button>
            </form>
        </div >
    );
};

export default Contact;
