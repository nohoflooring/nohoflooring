"use client";
import { useState } from "react";
import styles from "@/styles/components/sidepanel/payment.module.scss";
import { ClosedBtn } from "@/src/app/app-constants";


const Payment = ({ onHide }) => {
    const [amount, setAmount] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (loading) return;
        setLoading(true);
        setError("");

        const form = e.target;

        const formData = {
            paying: form.paying.value,
            amount: Number(amount),
            about: form.about.value,
            fname: form.fname.value,
            lname: form.lname.value,
            email: form.email.value,
            phone: form.phone.value,
            address: form.address.value,
            servicestype: form.servicestype.value,
            secondaryemail: form.secondaryemail.value,
            altemail: form.altemail.value,
        };

        try {
            const res = await fetch("/api/payment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Payment failed");
            }

            if (data.url) {
                window.location.href = data.url;
                onHide();
            } else {
                throw new Error("Stripe URL not received");
            }
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    return (
        <div className={styles.paymentContainer}>
            <div className={styles.closedBtn} onClick={onHide}><ClosedBtn /></div>
            <form onSubmit={handleSubmit}>
                <h4 className={styles.serviceTitle}>Make a payment</h4>

                <div className={styles.paymentFrom}>
                    <div className={styles.calendarForm}>
                        <input name="paying" placeholder="What are you paying for?" required />
                        <input
                            type="number"
                            name="amount"
                            placeholder="Amount"
                            required
                            value={amount}
                            onChange={handleAmountChange}
                        />
                        <textarea name="about" placeholder="Payment details" />

                        <h5>Client Info</h5>
                        <input name="fname" placeholder="First Name" required />
                        <input name="lname" placeholder="Last Name" required />
                        <input name="email" placeholder="Email" required />
                        <input name="phone" placeholder="Phone" required />
                        <input name="address" placeholder="Address" required />

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

                        <input name="secondaryemail" placeholder="Secondary Email" />
                        <input name="altemail" placeholder="Alt Email" />
                    </div>

                    <div className={styles.paymentOut}>
                        <h4 className={styles.serviceTitle}>Checkout Summary</h4>
                        <div className={styles.totalAmount}>
                            <div className={styles.tit}>Total amount</div>
                            <div className={styles.price}>${amount || 0}</div>
                        </div>

                        <button
                            type="submit"
                            className={styles.checkoutBtn}
                            disabled={loading}
                        >
                            {loading ? "Processing…" : "Checkout"}
                        </button>

                        {loading && (
                            <p className={styles.loadingText}>
                                Redirecting to secure payment…
                            </p>
                        )}

                        {error && (
                            <p className={styles.errorText}>
                                {error}
                            </p>
                        )}
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Payment;
