
import styles from "@/styles/lp/lp1/benefit.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import ScrollBtn from "@/src/app/components/scrollbtn";

const data = [
    {
        tit: "Connect with Our Experts",
        txt: (<p>Looking for floor installation near me, wood floor refinishing, or advice on the price to refinish wood floors? Start with a quick call or form submission. We’ll answer your questions, explain options like applying laminate flooring or hardwood floor staining, and give you transparent pricing upfront.</p>)
    },
    {
        tit: "Prep & Protect Your Space",
        txt: (<p>We prep every area like it's our own. From moving furniture to protecting surfaces, our team ensures your home is ready—whether you're getting vinyl plank flooring installation, hardwood flooring refinishing, or commercial flooring near me service. Zero hassle. Zero delays.</p>)
    },
    {
        tit: "Pro-Grade Installation",
        txt: (<p>Expect flawless results. We handle everything—residential flooring installs, laminate, vinyl, and complete hardwood flooring refinishing. Want to know the laminate flooring installation cost or the hardwood floor installation cost? We’ll walk you through it all with no surprises.</p>)
    },
    {
        tit: "Walkthrough & Final Clean",
        txt: (<p>We wrap every project with a detailed walkthrough and spotless cleanup. Whether it’s hardwood floor refinishing near me or a large-scale vinyl job, we leave your space clean, polished, and ready to show off.</p>)
    }
]

const Benefit = ({ bg }) => {
    return (
        <section className={`${styles.benefitSection} p-100 ${bg ? `${styles.bgWhite} borderRadiusBottom` : ''}`}>

            <Container className="h-100">
                <Row className="h-100">
                    <Col md={12} lg={6} className="my-auto">
                        <div className="subtitle">How It Works</div>
                        <h2>From Quote to Cleanup: Stress-Free Residential & Commercial Flooring</h2>
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