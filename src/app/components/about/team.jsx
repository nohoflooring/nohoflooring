import styles from "@/styles/about-us/team.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import IMG01 from "media/images/about/team/1.webp"
import IMG02 from "media/images/about/team/2.webp"
import IMG03 from "media/images/about/team/3.webp"
import IMG04 from "media/images/about/team/4.webp"
import { ArrowSmall } from "@/src/app/app-constants";

const data = [
    {
        name: "James Carter",
        job: "Senior Flooring Consultant",
        txt: "With 10+ years of experience, we deliver expert flooring solutions that transform homes from timeless hardwood to modern vinyl and tile, crafted to last.",
        img: IMG01.src,
        social: [
            { title: "Facebook", link: "#" },
            { title: "Instagram", link: "#" },
            { title: "TikTok", link: "#" },
            { title: "Twitter", link: "#" }
        ]

    },
    {
        name: "James Carter",
        job: "Senior Flooring Consultant",
        txt: "With 10+ years of experience, we deliver expert flooring solutions that transform homes from timeless hardwood to modern vinyl and tile, crafted to last.",
        img: IMG02.src,
        social: [
            { title: "Facebook", link: "#" },
            { title: "Instagram", link: "#" },
            { title: "TikTok", link: "#" },
            { title: "Twitter", link: "#" }
        ]
    },
    {
        name: "James Carter",
        job: "Senior Flooring Consultant",
        txt: "With 10+ years of experience, we deliver expert flooring solutions that transform homes from timeless hardwood to modern vinyl and tile, crafted to last.",
        img: IMG03.src,
        social: [
            { title: "Facebook", link: "#" },
            { title: "Instagram", link: "#" },
            { title: "TikTok", link: "#" },
            { title: "Twitter", link: "#" }
        ]
    },
    {
        name: "James Carter",
        job: "Senior Flooring Consultant",
        txt: "With 10+ years of experience, we deliver expert flooring solutions that transform homes from timeless hardwood to modern vinyl and tile, crafted to last.",
        img: IMG04.src,
        social: [
            { title: "Facebook", link: "#" },
            { title: "Instagram", link: "#" },
            { title: "TikTok", link: "#" },
            { title: "Twitter", link: "#" }
        ]
    },
]

const Team = () => {
    return (
        <section className={`${styles.teamSection} p-100`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={6} className="my-auto">
                        <div className="subtitle">Our Team</div>
                        <h2>Meet the Experts Who Make It Happen</h2>
                    </Col>
                    <Col md={6} className="my-auto">
                        <p>Great floors don’t just happen—they’re crafted by professionals who care. Our team combines skill, precision, and a passion for quality to bring your vision to life. From your first consultation to the final polish, you’ll be working with people who treat every project like it’s their own home.</p>
                    </Col>
                    <Col>
                        <div className={styles.teamWapper}>
                            {data.map((item, index) => (
                                <div className={styles.teamItem} key={index} style={{ backgroundImage: `url(${item.img})` }}>
                                    <div className={styles.contentBox}>
                                        <h6>{item.name}</h6>
                                        <div className={styles.job}>{item.job}</div>
                                        <p>{item.txt}</p>
                                        <ul className={styles.teamSocial}>
                                            {item.social.map((value, idx) => (
                                                <li key={idx}>
                                                    <a href={value.link} target="_blank" rel="noopener noreferrer">
                                                        {value.title}
                                                        <ArrowSmall />
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Team