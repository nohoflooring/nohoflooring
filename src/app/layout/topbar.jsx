"use client";
import { useState, useEffect } from "react";
import styles from "@/styles/layout/topbar.module.scss";
import { CalendarIcon, EnvalopIcon, CellIcon } from "@/src/app/app-constants";
import { PaymentIcon } from "../app-constants";
import SidePanelPopup from "@/src/app/components/sidepanel/sidepanelpopup";

const TopBar = () => {
    const [show, setShow] = useState(false);
    const [activePanel, setActivePanel] = useState("");
    const [autoHoverIndex, setAutoHoverIndex] = useState(-1);
    const [isUserHovering, setIsUserHovering] = useState(false);

    useEffect(() => {
        if (isUserHovering || show) return;
        const interval = setInterval(() => {
            setAutoHoverIndex((prev) => (prev + 1) % 4);
        }, 2000);

        return () => clearInterval(interval);
    }, [isUserHovering, show]);

    const handleShow = (panel) => {
        setActivePanel(panel);
        setShow(true);
    };

    const handleClose = () => setShow(false);

    const items = [
        {
            key: "call",
            label: "Call for Emergency Services (818) 932-4117",
            icon: <CellIcon />,
            link: "tel:8189324117",
        },
        { key: "schedule", label: "Schedule now", icon: <CalendarIcon />, panel: "schedule" },
        { key: "payment", label: "Make a payment", icon: <PaymentIcon />, panel: "payment" },
        { key: "contact", label: "We’d love to hear from you", icon: <EnvalopIcon />, panel: "contact" },
    ];

    return (
        <section className={styles.topbarSection}>
            <div className={styles.sidePanel}>
                {items.map((item, i) => (
                    <div
                        key={item.key}
                        className={`${styles.panelItem} ${!isUserHovering && autoHoverIndex === i ? styles.autoHover : ""
                            }`}
                        onMouseEnter={() => setIsUserHovering(true)}
                        onMouseLeave={() => setIsUserHovering(false)}
                        style={{ animationDelay: `${i * 0.2}s` }}
                        onClick={item.panel ? () => handleShow(item.panel) : undefined}
                    >
                        {item.link ? (
                            <a href={item.link} rel="noopener noreferrer">
                                <div className={styles.panelIcon}>{item.icon}</div>
                                <span>{item.label}</span>
                            </a>
                        ) : (
                            <div>
                                <div className={styles.panelIcon}>{item.icon}</div>
                                <span>{item.label}</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <SidePanelPopup show={show} onHide={handleClose} activePanel={activePanel} />
        </section>
    );
};

export default TopBar;
