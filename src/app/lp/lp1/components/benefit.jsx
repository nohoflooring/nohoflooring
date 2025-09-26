
import styles from "@/styles/lp/lp1/benefit.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import ScrollBtn from "@/src/app/components/scrollbtn";

const data = [
    {
        tit: "Contact Us",
        txt: (<p>Reach out today for a free consultation. Whether you’re searching for floor installation near me or need expert hardwood flooring refinishing, we’ll guide you with honest advice and upfront pricing.</p>)
    },
    {
        tit: "Preparation & Area Setup",
        txt: (<p>We carefully prep your home, protect your furniture, and ensure everything is ready before work begins. From wood floor refinishing to vinyl plank flooring installation, our team makes the process stress-free.</p>)
    },
    {
        tit: "Professional Installation",
        txt: (<p>Our specialists deliver flawless results — from restoring worn hardwood to installing modern vinyl planks. Need clarity on hardwood floor installation cost? We’ll provide transparent estimates with no surprises.</p>)
    },
    {
        tit: "Walkthrough & Cleanup",
        txt: (<p>We finish every project with a full walkthrough, spotless cleanup, and your complete approval. Whether you booked hardwood floor refinishing near me or new floor installation, your space will look incredible.</p>)
    }
]

const Benefit = ({ bg }) => {
    return (
        <section className={`${styles.benefitSection} p-100 ${bg ? `${styles.bgWhite} borderRadiusBottom` : ''}`}>

            <Container className="h-100">
                <Row className="h-100">
                    <Col md={12} lg={6} className="my-auto">
                        <div className="subtitle">How It Works</div>
                        <h2>Easy Steps Toward Your Dream Space</h2>
                    </Col>
                    <Col md={12}>
                        <div className={styles.benefitWapper}>
                            {data.map((item, index) => (
                                <div className={styles.benefitItem} key={index}>
                                    <h4>{item.tit}</h4>
                                    {item.txt}
                                </div>
                            ))}
                        </div>
                        <div className="flexStyleBtn blackCenter">
                            <div className="btnItem">
                                <ScrollBtn txt="Get a Quote" />
                            </div>
                            <div className="btnItem">
                                <a href="tel:8189324117">Call Now</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Benefit