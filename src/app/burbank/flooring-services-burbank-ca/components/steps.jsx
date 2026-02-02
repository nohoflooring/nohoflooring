import styles from '@/styles/burbank/steps.module.scss'
import { Col, Container, Row } from 'react-bootstrap'

const Steps = ({ data }) => {
    return (
        <section className={`${styles.pageSteps} p-50`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={12} className="my-auto text-center">
                        {data.title}
                        <div className={styles.stepWapper}>
                            {data.steps.map((item, index) => (
                                <div className={styles.stepItem} key={index}>

                                    <div className={styles.title}>
                                        <span>0{index + 1}</span>
                                        {item.tit}
                                    </div>
                                    <div className={styles.content}>
                                        {item.desc}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {data.txt}

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Steps
