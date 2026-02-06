"use client";
import { useState } from "react";
import PopUp from "@/src/app/lp/lp1/components/popup"
import styles from "@/styles/burbank/cta.module.scss"

const TwoButton = ({ dark }) => {
    const [modalShow, setModalShow] = useState(false);

    const handleChatOpen = () => {
        setModalShow(true);
    };
    return (
        <>
            <div className={`${styles.flexBtn} ${dark ? styles.darkTheme : ""}`}>
                <div className={styles.btnitem}>
                    <a href="tel:8189324117"> Call: (818) 932-4117</a>
                </div>
                <div className={styles.btnitem} onClick={handleChatOpen}>
                    <span>Request Free Estimate</span>
                </div>
            </div>
            <PopUp show={modalShow} onHide={() => setModalShow(false)} />
        </>
    )
}

export default TwoButton