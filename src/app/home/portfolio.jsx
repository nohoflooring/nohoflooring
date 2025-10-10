import styles from "@/styles/home/portfolio.module.scss";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import img01 from "media/images/portfolio/1.webp"
import img02 from "media/images/portfolio/2.webp"
import img03 from "media/images/portfolio/3.webp"
import img04 from "media/images/portfolio/4.webp"
import img05 from "media/images/portfolio/5.webp"
import img06 from "media/images/portfolio/6.webp"
import img07 from "media/images/portfolio/7.webp"
import img08 from "media/images/portfolio/8.webp"
import ScrollBtn from "@/src/app/components/scrollbtn";
const data = [
    {
        img: img01.src,
        alt: "img 01"
    },
    {
        img: img02.src,
        alt: "img 02"
    },
    {
        img: img03.src,
        alt: "img 03"
    },
    {
        img: img04.src,
        alt: "img 01"
    },
    {
        img: img05.src,
        alt: "img 02"
    },
    {
        img: img06.src,
        alt: "img 03"
    },
    {
        img: img07.src,
        alt: "img 01"
    },
    {
        img: img08.src,
        alt: "img 02"
    }

]

const Portfolio = ({ work }) => {
    return (
        <section className={`${styles.portfolioSection} p-100`}>
            <Container>
                <Row>
                    <Col md={8} >
                        <div className="subtitle">Our Work</div>
                        <h2>NOHO Flooring Services</h2>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="p-0">
                <Row>
                    <div className={styles.portfolioWrapper}>
                        {data.map((item, index) => (
                            <div className={styles.portfolioItem} key={index}>
                                <Image src={item.img} alt={item.alt} fill sizes="(max-width: 768px) 100vw, 50vw" />
                            </div>
                        ))}
                    </div>
                    {work ? null :
                        <div className="flexStyleBtn blackCenter">
                            <div className="btnItem">
                                <a href="/our-work">View All Work</a>
                            </div>
                            <div className="btnItem">
                                <ScrollBtn txt="Get a Free Estimate" />
                            </div>
                        </div>
                    }
                </Row>
            </Container>
        </section>

    )
}

export default Portfolio